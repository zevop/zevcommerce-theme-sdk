/**
 * The saved theme configuration for a store.
 * Stored in StoreTheme.settings / StoreTheme.draftSettings.
 * This structure is the existing data contract — no migration needed.
 */
export interface ThemeConfig {
  /** Global settings (colors, typography, layout, etc.) */
  settings: Record<string, any>;
  /** All section instances, keyed by instance ID */
  sections: Record<string, {
    type: string;
    label?: string;
    settings: Record<string, any>;
    blocks?: Array<{
      type: string;
      _id?: string;
      allow_delete?: boolean;
      settings: Record<string, any>;
    }>;
  }>;
  /** Page layout: which sections go in header/content/footer */
  layout: {
    header: string[];
    content: string[];
    footer: string[];
    [key: string]: string[];
  };
  /** Template-specific section ordering */
  templates?: Record<string, { order: string[] }>;
  /** Active theme handle */
  themeHandle?: string;
  /** Merchant store data injected at runtime */
  storeConfig?: any;
  /** Navigation menus injected at runtime */
  menus?: Record<string, any>;
}

/**
 * The default preset: a complete configuration that serves as
 * the starting point when a merchant activates the theme.
 */
export interface ThemePreset {
  settings: Record<string, any>;
  sections: Record<string, {
    type: string;
    settings: Record<string, any>;
    blocks?: Array<{
      type: string;
      _id?: string;
      allow_delete?: boolean;
      settings: Record<string, any>;
    }>;
  }>;
  layout: {
    header: string[];
    content: string[];
    footer: string[];
    [key: string]: string[];
  };
  templates?: Record<string, { order: string[] }>;
}
