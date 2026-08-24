/** Pads a number to a two digit label, e.g. 3 -> "03". */
export function twoDigits(value: number): string {
  return String(value).padStart(2, '0');
}
