import type { BlockSchema } from '../types/sections';
import type { SchemaField } from '../types/schema';

/**
 * Adds a column_index setting to a block schema.
 * Used for multi-column section layouts where blocks
 * need to specify which column they belong to.
 *
 * @example
 * ```ts
 * import { withColumnSettings } from '@zevop/theme-sdk';
 *
 * const schema = {
 *   type: 'footer',
 *   blocks: AllBlockSchemas.map(withColumnSettings),
 * };
 * ```
 */
export function withColumnSettings(schema: BlockSchema): BlockSchema {
  return {
    ...schema,
    settings: [
      ...schema.settings,
      {
        type: 'range',
        id: 'column_index',
        label: 'Column Index',
        min: 0,
        max: 3,
        step: 1,
        default: 0,
      } as SchemaField,
    ],
  };
}
