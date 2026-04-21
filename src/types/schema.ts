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
  | 'paragraph'
  /**
   * Array of objects with a nested sub-schema. Used for things like
   * hero slides or accordion items — any "add another one of these"
   * surface inside a single setting. Values are stored as an array
   * of objects at `settings[id]`. Each item's shape is defined by
   * the `fields` array on the schema entry.
   */
  | 'repeater';

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

  /**
   * Repeater-only: the sub-schema applied to each item in the array.
   * Only `text`, `textarea`, `image`, `color`, `checkbox`, `select`,
   * `range`, `number`, `link_list`, `product_picker`,
   * `collection_picker`, and `header`/`paragraph` types are valid
   * inside a repeater — nested repeaters are not supported.
   */
  fields?: SchemaField[];

  /**
   * Repeater-only: label shown on each item's collapsed card header.
   * Supports `{{field}}` interpolation so the card can display its
   * own title (e.g. `{{heading}}` or `Slide {{@index}}`).
   */
  item_label?: string;

  /** Repeater-only: cap on the number of items merchants can add. */
  max_items?: number;

  /** Repeater-only: the template used when the merchant clicks "Add". */
  add_button_label?: string;
}
