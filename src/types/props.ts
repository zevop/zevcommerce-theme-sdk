/**
 * Props passed to every section component by the SectionRenderer.
 */
export interface SectionProps {
  /** Unique instance ID of this section (e.g., 'hero_1', 'header_abc123') */
  id: string;
  /** The section's settings values, as configured by the merchant */
  settings: Record<string, any>;
  /** Ordered array of blocks within this section */
  blocks: Array<{
    type: string;
    _id?: string;
    settings: Record<string, any>;
  }>;
}

/**
 * Props passed to every block component by the BlockRenderer.
 */
export interface BlockProps {
  /** The block's settings values */
  settings: Record<string, any>;
  /** The parent section's settings (for inheritance/context) */
  sectionSettings?: Record<string, any>;
  /** Optional className passed from the section layout */
  className?: string;
}
