import type { SchemaField } from './schema';

/**
 * Schema definition for a block type.
 * Blocks are the atomic content units inside sections.
 */
export interface BlockSchema {
  /** Unique type identifier (e.g., 'heading', 'button', 'product_images') */
  type: string;
  /** Human-readable name for the editor UI */
  name: string;
  /** Maximum instances of this block type per section */
  limit?: number;
  /** Editable settings for this block type */
  settings: SchemaField[];
}

/**
 * A pre-configured variation of a section.
 * Includes default settings and blocks so merchants can
 * add a fully-configured section with one click.
 */
export interface SectionPreset {
  /** Display name in the preset picker */
  name: string;
  /** Category for grouping (e.g., 'banners', 'collections', 'content') */
  category?: string;
  /** Description shown on hover */
  description?: string;
  /** Pre-filled section settings */
  settings?: Record<string, any>;
  /** Pre-filled blocks */
  blocks?: Array<{
    type: string;
    settings?: Record<string, any>;
  }>;
}

/**
 * Schema definition for a section type.
 * Sections are the major layout units of a page.
 */
export interface SectionSchema {
  /** Unique type identifier (e.g., 'hero', 'header', 'product-detail') */
  type: string;
  /** Human-readable name for the editor UI */
  name: string;
  /** Optional description for the section picker */
  description?: string;
  /** Category for grouping in the section picker */
  category?: string;
  /** Maximum instances of this section on a single page */
  limit?: number;

  /**
   * Templates/page types where this section CANNOT be used.
   */
  disabled_on?: {
    groups?: string[];
    templates?: string[];
  };

  /**
   * If specified, this section can ONLY be used on these templates/groups.
   */
  enabled_on?: {
    groups?: string[];
    templates?: string[];
  };

  /** Editable settings for this section */
  settings: SchemaField[];

  /**
   * Block types this section supports.
   * If undefined, the section accepts ALL registered block types.
   */
  blocks?: BlockSchema[];

  /** Maximum number of blocks allowed in this section */
  max_blocks?: number;

  /**
   * Pre-configured variations of this section.
   * These appear in the "Add Section" picker.
   */
  presets?: SectionPreset[];
}
