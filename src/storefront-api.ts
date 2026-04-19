/**
 * @zevcommerce/theme-sdk/storefront-api
 *
 * Type stubs for the storefrontend runtime API.
 *
 * Theme packages import from '@zevcommerce/storefront-api' in their
 * section/block components. At build time in the storefrontend, this
 * is aliased to the actual implementations via webpack/turbopack alias.
 *
 * During theme development, these types provide autocomplete and
 * type checking without needing the full storefrontend.
 */

import type { ComponentType, ReactNode } from 'react';
import type { ThemeConfig } from './types/config';
import type { BlockProps } from './types/props';

// ---- Theme Context ----

export interface ThemeContextType {
  theme: ThemeConfig;
  registry: any;
  setTheme: (theme: ThemeConfig) => void;
  updateSettings: (newSettings: Record<string, any>) => void;
  updateSectionSettings: (sectionId: string, settings: Record<string, any>) => void;
  updateLayout: (area: string, sections: string[]) => void;
  storeConfig: any;
}

export declare function useTheme(): ThemeContextType;

// ---- Block Renderer ----

export declare function BlockRenderer(props: {
  blocks: Array<{ type: string; _id?: string; settings: Record<string, any> }>;
  columnIndex?: number;
  className?: string;
  sectionSettings?: Record<string, any>;
}): ReactNode;

// ---- Product Context ----

/**
 * A variant as it appears inside a theme. The storefrontend enriches
 * raw API data with render-ready flags BEFORE it reaches a theme —
 * themes must read `availableForSale`, `onSale`, etc. rather than
 * recomputing from raw `price` / `inventoryLevels`. Raw inventory
 * fields are intentionally NOT part of this contract.
 */
export interface StorefrontVariant {
  id: string;
  title: string;
  sku?: string | null;
  barcode?: string | null;
  price: string | number;
  compareAtPrice?: string | number | null;
  selectedOptions?: Array<{ name: string; value: string }> | null;
  /** True when this specific variant is purchasable right now. */
  availableForSale: boolean;
  /** True when compareAtPrice > price. */
  onSale: boolean;
  /** 1–99 if on sale, null otherwise. */
  salePercentage?: number | null;
  // Permissive catch-all for fields themes shouldn't need yet.
  [key: string]: any;
}

/**
 * A product as it appears inside a theme. Pre-computed fields are
 * authoritative — don't re-derive. Use cases like "is this product
 * available" or "is it on sale" are storefrontend decisions, not
 * theme concerns.
 */
export interface StorefrontProduct {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  vendor?: string | null;
  productType?: string | null;
  tags?: string[];
  media?: Array<{ url: string; alt?: string; position?: number }> | null;
  variants: StorefrontVariant[];
  /** True when at least one variant is available. */
  availableForSale: boolean;
  /** True when at least one variant is on sale. */
  onSale: boolean;
  [key: string]: any;
}

export declare function useProduct(): {
  product: StorefrontProduct | null;
  selectedVariant: StorefrontVariant | null;
  quantity: number;
  loading: boolean;
  setQuantity: (q: number) => void;
  setSelectedVariant: (v: StorefrontVariant) => void;
};

export declare function ProductDataProvider(props: {
  product: StorefrontProduct;
  children: ReactNode;
}): ReactNode;

// ---- Collection Context ----

export declare function useCollection(): {
  collection: any;
};

// ---- Editor ----

export declare function useEditor(): {
  isEditor: boolean;
  activeSectionId: string | null;
  activeBlockId: string | null;
  selectSection: (id: string) => void;
  selectBlock: (sectionId: string, blockId: string) => void;
};

// ---- Cart Store ----

export declare function useCartStore(): {
  items: any[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: any) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, delta: number) => void;
  totalPrice: () => number;
  clearCart: () => void;
};

// ---- Customer Auth ----

export declare function useCustomerAuth(): {
  customer: any | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

// ---- Components ----

export declare const ProductCard: ComponentType<{
  product: any;
  index?: number;
  [key: string]: any;
}>;

export declare const ArticleCard: ComponentType<{
  article: any;
  [key: string]: any;
}>;

// ---- API Functions ----

export declare function getProduct(domain: string, slug: string): Promise<any>;
export declare function getProducts(domain: string, params?: any): Promise<any>;
export declare function getCollection(domain: string, handle: string): Promise<any>;
export declare function getCollections(domain: string): Promise<any[]>;
export declare function getBlog(domain: string, handle: string): Promise<any>;
export declare function getOrder(domain: string, orderId: string, token: string): Promise<any>;
export declare function getMyOrders(domain: string, token: string): Promise<any[]>;

// ---- Auth Functions ----

export declare function login(domain: string, storeId: string, data: any): Promise<{ access_token: string; customer: any }>;
export declare function register(domain: string, storeId: string, data: any): Promise<any>;
export declare function forgotPassword(domain: string, storeId: string, data: { email: string }): Promise<any>;
export declare function verifyOtp(domain: string, storeId: string, data: { email: string; code: string }): Promise<any>;
export declare function resetPassword(domain: string, storeId: string, data: any): Promise<any>;

// ---- Components ----

export declare const CheckoutForm: ComponentType<any>;

// ---- Utilities ----

export declare function cn(...classes: (string | undefined | null | false)[]): string;
export declare function resolveMenuUrl(url: string, domain: string): string;
export declare function getStorePermalink(domain: string, path: string): string;

// ---- Config ----

export declare const API_ORIGIN: string;
