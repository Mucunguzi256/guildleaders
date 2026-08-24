import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

/**
 * Renders an .astro component to HTML with the dev-only source annotations
 * stripped so assertions can match on the real markup.
 */
export async function render(
  Component: AstroComponentFactory,
  props: Record<string, unknown> = {},
): Promise<string> {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Component, { props });
  return html.replace(/ data-astro-source-(file|loc)="[^"]*"/g, '');
}

export function countOccurrences(haystack: string, needle: string): number {
  return haystack.split(needle).length - 1;
}
