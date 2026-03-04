import type { SettingsSchemaGroup } from '../types/manifest';

/**
 * Type-safe wrapper for defining global settings groups.
 * Returns the array with full type inference.
 *
 * @example
 * ```ts
 * import { defineSettings } from '@zevcommerce/theme-sdk';
 *
 * export const settingsSchema = defineSettings([
 *   {
 *     name: 'Colors',
 *     icon: 'palette',
 *     settings: [
 *       { type: 'color', id: 'colors.primary', label: 'Primary', default: '#000' },
 *     ],
 *   },
 * ]);
 * ```
 */
export function defineSettings(groups: SettingsSchemaGroup[]): SettingsSchemaGroup[] {
  return groups;
}
