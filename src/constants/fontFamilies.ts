/**
 * Google Fonts available in the font_picker field type.
 * These fonts are pre-loaded by the storefrontend runtime.
 */
export const BUILT_IN_FONTS = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Poppins',
  'Montserrat',
  'Outfit',
  'Playfair Display',
  'Source Sans Pro',
  'Nunito',
  'Raleway',
  'Oswald',
  'DM Sans',
  'Space Grotesk',
  'Cormorant Garamond',
  'Dancing Script',
  'Pacifico',
] as const;

export type BuiltInFont = (typeof BUILT_IN_FONTS)[number];
