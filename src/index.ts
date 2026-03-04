// Types
export type {
  SchemaFieldType,
  SchemaField,
} from './types/schema';

export type {
  BlockSchema,
  SectionSchema,
  SectionPreset,
} from './types/sections';

export type {
  SectionProps,
  BlockProps,
} from './types/props';

export type {
  SectionRegistryEntry,
  BlockRegistryEntry,
  ThemeRegistry,
} from './types/registry';

export type {
  ThemeConfig,
  ThemePreset,
} from './types/config';

export type {
  ThemeManifest,
  SettingsSchemaGroup,
} from './types/manifest';

// Helpers
export { defineTheme } from './helpers/defineTheme';
export { defineSection } from './helpers/defineSection';
export { defineBlock } from './helpers/defineBlock';
export { defineSettings } from './helpers/defineSettings';
export { getSharedBlocks } from './helpers/getSharedBlocks';
export { withColumnSettings } from './helpers/withColumnSettings';
export { resolveDotPath, setDotPath, evaluateShowIf } from './helpers/settingsUtils';

// Validators
export { validateManifest, type ValidationError } from './validators/validateManifest';

// Constants
export { BUILT_IN_FONTS, type BuiltInFont } from './constants/fontFamilies';
export {
  SECTION_CATEGORIES,
  BLOCK_CATEGORIES,
  type SectionCategory,
  type BlockCategory,
} from './constants/categories';
