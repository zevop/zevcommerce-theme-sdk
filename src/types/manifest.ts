import type { ThemeRegistry } from './registry';
import type { ThemePreset } from './config';
import type { SchemaField } from './schema';

/**
 * A group of global settings with a display name and optional icon.
 * These groups become collapsible sections in the dashboard's
 * "Theme Settings" panel.
 *
 * This replaces the hardcoded settings UI in the dashboard editor.
 */
export interface SettingsSchemaGroup {
  /** Display name (e.g., 'Colors', 'Typography', 'Layout') */
  name: string;
  /** Lucide icon name for the group header (e.g., 'palette', 'type') */
  icon?: string;
  /** The fields in this group */
  settings: SchemaField[];
}

/**
 * The complete manifest for a theme package.
 * This is the top-level default export of every theme npm package.
 */
export interface ThemeManifest {
  /** Unique identifier. Must match the theme's handle in the backend. */
  handle: string;

  /** Display name shown in the theme store */
  name: string;

  /** Semantic version (should match package.json version) */
  version: string;

  /** Author information */
  author: {
    name: string;
    email?: string;
    url?: string;
  };

  /** Short description for the theme store listing */
  description?: string;

  /** Preview thumbnail URL (1200x900 recommended) */
  thumbnail?: string;

  /** Link to theme documentation */
  documentationUrl?: string;

  /** Tags for discovery/filtering */
  tags?: string[];

  /**
   * Global theme settings schema.
   *
   * This is the key innovation. Instead of the dashboard hardcoding
   * what settings exist, the theme declares its own settings schema.
   * Different themes can have entirely different global settings.
   *
   * Field IDs use dot-notation (e.g., 'colors.primary') that maps
   * to the nested ThemeConfig.settings structure.
   */
  settingsSchema: SettingsSchemaGroup[];

  /** The default preset configuration. Applied when a merchant first activates the theme. */
  defaultPreset: ThemePreset;

  /** The component + schema registry for all sections and blocks */
  registry: ThemeRegistry;
}
