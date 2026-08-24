import { onReady, reportError } from './errors';

/**
 * Progressive enhancement for the site's Formspree forms.
 *
 * A plain HTML POST hands the visitor off to Formspree, so a misconfigured or
 * unreachable endpoint loses the message with no feedback. This submits with
 * fetch instead and renders the outcome — including the endpoint's own error
 * messages — in the form's status region, offering an email fallback so a
 * failed submission never leaves the visitor without a way to reach GPLA.
 */

const UNCONFIGURED_ACTION = /YOUR_FORM_ID/;

type Status = 'pending' | 'success' | 'error';

function statusRegion(form: HTMLFormElement): HTMLElement | null {
  return form.querySelector<HTMLElement>('[data-form-status]');
}

function fallbackHtml(form: HTMLFormElement): string {
  const email = form.dataset.fallbackEmail;
  if (!email) return '';
  const subject = encodeURIComponent(form.dataset.fallbackSubject || 'Website enquiry');
  return ` You can also email us at <a class="underline" href="mailto:${email}?subject=${subject}">${email}</a>.`;
}

function setStatus(form: HTMLFormElement, status: Status, message: string, withFallback = false): void {
  const region = statusRegion(form);
  if (!region) return;
  region.hidden = false;
  region.dataset.state = status;
  region.setAttribute('role', status === 'error' ? 'alert' : 'status');
  region.innerHTML = message + (withFallback ? fallbackHtml(form) : '');
}

async function errorMessageFrom(response: Response): Promise<string> {
  try {
    const body = await response.json();
    const errors = Array.isArray(body?.errors) ? body.errors : [];
    const details = errors.map((e: { message?: string }) => e?.message).filter(Boolean);
    if (details.length) return details.join(' ');
    if (typeof body?.error === 'string') return body.error;
  } catch {
    // Non-JSON body: fall through to the generic status-based message.
  }
  return `The form service responded with ${response.status} ${response.statusText || 'an error'}.`;
}

async function submitForm(form: HTMLFormElement, submitter: HTMLButtonElement | null): Promise<void> {
  const endpoint = form.action;

  if (!endpoint || UNCONFIGURED_ACTION.test(endpoint)) {
    // `form.name` resolves to a field named "name", so read the attribute.
    const label = form.getAttribute('name') || form.id || 'unnamed';
    reportError('form submission', new Error(`Form "${label}" has no configured endpoint: ${endpoint}`));
    setStatus(form, 'error', 'This form is not connected to a mail service yet, so your message was not sent.', true);
    return;
  }

  if (submitter) submitter.disabled = true;
  setStatus(form, 'pending', 'Sending your message…');

  try {
    const response = await fetch(endpoint, {
      method: form.method || 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      const message = await errorMessageFrom(response);
      reportError('form submission', new Error(`${endpoint} -> ${response.status}: ${message}`));
      setStatus(form, 'error', `We could not send your message. ${message}`, true);
      return;
    }

    form.reset();
    setStatus(form, 'success', form.dataset.successMessage || 'Thank you — your message has been sent. We will be in touch shortly.');
  } catch (error) {
    reportError('form submission', error);
    setStatus(form, 'error', 'We could not reach the form service. Please check your connection and try again.', true);
  } finally {
    if (submitter) submitter.disabled = false;
  }
}

export function initAjaxForms(): void {
  onReady('form init', () => {
    document.querySelectorAll<HTMLFormElement>('form[data-ajax-form]').forEach((form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        const submitter = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        void submitForm(form, submitter);
      });
    });
  });
}
