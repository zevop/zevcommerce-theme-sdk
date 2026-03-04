import type { ComponentType } from 'react';
import type { SectionSchema, BlockSchema } from './sections';
import type { SectionProps, BlockProps } from './props';

/**
 * A section registered in the theme.
 * Pairs a React component with its schema.
 */
export interface SectionRegistryEntry {
  component: ComponentType<SectionProps>;
  schema: SectionSchema;
}

/**
 * A block registered in the theme.
 * Pairs a React component with its schema.
 */
export interface BlockRegistryEntry {
  component: ComponentType<BlockProps>;
  schema: BlockSchema;
}

/**
 * The complete set of sections and blocks a theme provides.
 * This is what the storefrontend's SectionRenderer and BlockRenderer consume.
 */
export interface ThemeRegistry {
  sections: Record<string, SectionRegistryEntry>;
  blocks: Record<string, BlockRegistryEntry>;
}
