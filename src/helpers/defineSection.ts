import type { SectionRegistryEntry } from '../types/registry';
import type { SectionSchema } from '../types/sections';
import type { SectionProps } from '../types/props';
import type { ComponentType } from 'react';

/**
 * Type-safe helper to pair a section component with its schema.
 *
 * @example
 * ```ts
 * import { defineSection } from '@zevop/theme-sdk';
 *
 * export default defineSection({
 *   component: HeroSection,
 *   schema: {
 *     type: 'hero',
 *     name: 'Hero Banner',
 *     settings: [...],
 *   },
 * });
 * ```
 */
export function defineSection(config: {
  component: ComponentType<SectionProps>;
  schema: SectionSchema;
}): SectionRegistryEntry {
  return {
    component: config.component,
    schema: config.schema,
  };
}
