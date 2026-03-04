import type { ThemeManifest } from '../types/manifest';

/**
 * Type-safe wrapper for defining a theme manifest.
 * Provides autocomplete and type checking during authoring.
 *
 * @example
 * ```ts
 * import { defineTheme } from '@zevcommerce/theme-sdk';
 *
 * export default defineTheme({
 *   handle: 'my-theme',
 *   name: 'My Theme',
 *   version: '1.0.0',
 *   author: { name: 'Developer' },
 *   settingsSchema: [...],
 *   defaultPreset: {...},
 *   registry: {...},
 * });
 * ```
 */
export function defineTheme(manifest: ThemeManifest): ThemeManifest {
  return manifest;
}
