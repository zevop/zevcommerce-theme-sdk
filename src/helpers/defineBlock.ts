import type { BlockRegistryEntry } from '../types/registry';
import type { BlockSchema } from '../types/sections';
import type { BlockProps } from '../types/props';
import type { ComponentType } from 'react';

/**
 * Type-safe helper to pair a block component with its schema.
 *
 * @example
 * ```ts
 * import { defineBlock } from '@zevop/theme-sdk';
 *
 * export default defineBlock({
 *   component: HeadingBlock,
 *   schema: {
 *     type: 'heading',
 *     name: 'Heading',
 *     settings: [...],
 *   },
 * });
 * ```
 */
export function defineBlock(config: {
  component: ComponentType<BlockProps>;
  schema: BlockSchema;
}): BlockRegistryEntry {
  return {
    component: config.component,
    schema: config.schema,
  };
}
