/**
 * All supported field types in the settings schema system.
 * These map 1:1 to renderers in the dashboard's SchemaFieldRenderer.
 */
export type SchemaFieldType =
  | 'text'
  | 'textarea'
  | 'richtext'
  | 'number'
  | 'range'
  | 'select'
  | 'checkbox'
  | 'color'
  | 'image'
  | 'link_list'
  | 'product_picker'
  | 'collection_picker'
  | 'font_picker'
  | 'header'
  | 'paragraph';

/**
 * A single field in a settings schema.
 * Used in section settings, block settings, and global theme settings.
 */
export interface SchemaField {
  /** The input type */
  type: SchemaFieldType;

  /**
   * The setting ID. Used as the key in the settings object.
   * For global settings, supports dot-notation (e.g., 'colors.primary')
   * to map to nested structures.
   * Omit for 'header' and 'paragraph' types (display-only).
   */
  id?: string;

  /** Human-readable label shown in the editor */
  label: string;

  /** Optional help text shown below the field */
  info?: string;

  /** Default value when no value is set */
  default?: any;

  /** Placeholder text for text inputs */
  placeholder?: string;

  /**
   * Options for 'select' and 'font_picker' types.
   * 'group' allows visual grouping within a dropdown.
   */
  options?: Array<{ value: string; label: string; group?: string }>;

  /**
   * Conditional visibility. The field is hidden unless the condition is true.
   *
   * String form: show if settings[show_if] is truthy
   * Object form: show if settings[id] === value
   */
  show_if?: string | { id: string; value: any };

  /** For 'range' and 'number' types: minimum value */
  min?: number;
  /** For 'range' and 'number' types: maximum value */
  max?: number;
  /** For 'range' and 'number' types: step increment */
  step?: number;
}
