/**
 * Resolves a dot-notation path to a nested value.
 *
 * @example
 * ```ts
 * resolveDotPath({ colors: { primary: '#000' } }, 'colors.primary')
 * // => '#000'
 * ```
 */
export function resolveDotPath(obj: any, path: string): any {
  if (!path || !obj) return undefined;
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

/**
 * Sets a value at a dot-notation path on a nested object.
 * Returns a new object (immutable).
 *
 * @example
 * ```ts
 * setDotPath({ colors: { primary: '#000' } }, 'colors.primary', '#fff')
 * // => { colors: { primary: '#fff' } }
 * ```
 */
export function setDotPath(obj: any, path: string, value: any): any {
  const keys = path.split('.');
  if (keys.length === 1) {
    return { ...obj, [keys[0]]: value };
  }

  const result = { ...obj };
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = { ...(current[keys[i]] || {}) };
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
  return result;
}

/**
 * Evaluates a show_if condition against the current settings.
 */
export function evaluateShowIf(
  showIf: string | { id: string; value: any },
  settings: Record<string, any>
): boolean {
  if (typeof showIf === 'string') {
    return !!resolveDotPath(settings, showIf);
  }
  return resolveDotPath(settings, showIf.id) === showIf.value;
}
