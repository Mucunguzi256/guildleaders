/**
 * Shared client-side error reporting helpers.
 *
 * Browser scripts on this site are progressive enhancements: a thrown error in
 * one block used to abort every block after it in the same module, with nothing
 * logged. These helpers keep failures local, always log them with the page
 * context, and let callers run a fallback so content never stays hidden.
 */

export function reportError(context: string, error: unknown): void {
  const detail = error instanceof Error ? error : new Error(String(error));
  console.error(`[gpla] ${context} failed on ${location.pathname}:`, detail);
}

/**
 * Runs `fn`, logging and containing any error. `onError` can restore a usable
 * state (e.g. reveal content that CSS hides until JS runs).
 */
export function safeInit(context: string, fn: () => void, onError?: () => void): void {
  try {
    fn();
  } catch (error) {
    reportError(context, error);
    if (onError) {
      try {
        onError();
      } catch (fallbackError) {
        reportError(`${context} fallback`, fallbackError);
      }
    }
  }
}

/** Runs `fn` once the DOM is parsed, even if that already happened. */
export function onReady(context: string, fn: () => void, onError?: () => void): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => safeInit(context, fn, onError), { once: true });
  } else {
    safeInit(context, fn, onError);
  }
}

/** Logs otherwise-invisible script errors and rejected promises. */
export function installGlobalErrorLogging(): void {
  window.addEventListener('error', (event) => {
    if (event.error) {
      reportError('uncaught error', event.error);
    }
  });
  window.addEventListener('unhandledrejection', (event) => {
    reportError('unhandled promise rejection', event.reason);
  });
}
