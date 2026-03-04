/**
 * Standard section categories for the section picker.
 * Themes can use these or define their own.
 */
export const SECTION_CATEGORIES = {
  universal: 'Universal',
  banners: 'Banners & Hero',
  products: 'Products',
  collections: 'Collections',
  content: 'Content',
  commerce: 'Commerce',
  blog: 'Blog',
  account: 'Account',
  utility: 'Utility',
} as const;

export type SectionCategory = keyof typeof SECTION_CATEGORIES;

/**
 * Standard block categories for the block picker.
 */
export const BLOCK_CATEGORIES = {
  basic: 'Basic',
  content: 'Content',
  interactive: 'Interactive',
  navigation: 'Navigation',
  social: 'Social',
  utility: 'Utility',
} as const;

export type BlockCategory = keyof typeof BLOCK_CATEGORIES;
