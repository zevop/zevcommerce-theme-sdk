import type { BlockSchema } from '../types/sections';

/**
 * Combines section-specific blocks with global reusable blocks.
 * Section-specific blocks appear first. Global blocks that don't
 * conflict with section-specific types are appended.
 *
 * @param allBlockSchemas - The full list of block schemas registered in the theme
 * @param customBlocks - Section-specific block overrides (appear first)
 * @param wrapper - Optional transform applied to each block (e.g., withColumnSettings)
 *
 * @example
 * ```ts
 * export const schema = {
 *   type: 'hero',
 *   name: 'Hero Banner',
 *   blocks: getSharedBlocks(AllBlockSchemas, [
 *     { type: 'heading', name: 'Heading', settings: [...] },
 *   ]),
 * };
 * ```
 */
export function getSharedBlocks(
  allBlockSchemas: BlockSchema[],
  customBlocks: BlockSchema[] = [],
  wrapper?: (block: BlockSchema) => BlockSchema
): BlockSchema[] {
  const customBlockTypes = new Set(customBlocks.map(b => b.type));
  const genericBlocks = allBlockSchemas.filter(b => !customBlockTypes.has(b.type));
  const combined = [...customBlocks, ...genericBlocks];
  return wrapper ? combined.map(wrapper) : combined;
}
