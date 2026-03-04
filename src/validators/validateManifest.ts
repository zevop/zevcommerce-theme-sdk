import type { ThemeManifest } from '../types/manifest';

export interface ValidationError {
  path: string;
  message: string;
}

/**
 * Validates a theme manifest at runtime.
 * Returns an array of validation errors (empty = valid).
 */
export function validateManifest(manifest: any): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!manifest) {
    errors.push({ path: '', message: 'Manifest is null or undefined' });
    return errors;
  }

  // Required string fields
  const requiredStrings = ['handle', 'name', 'version'] as const;
  for (const field of requiredStrings) {
    if (!manifest[field] || typeof manifest[field] !== 'string') {
      errors.push({ path: field, message: `${field} is required and must be a string` });
    }
  }

  // Author
  if (!manifest.author || typeof manifest.author !== 'object') {
    errors.push({ path: 'author', message: 'author is required and must be an object' });
  } else if (!manifest.author.name || typeof manifest.author.name !== 'string') {
    errors.push({ path: 'author.name', message: 'author.name is required' });
  }

  // Settings schema
  if (!Array.isArray(manifest.settingsSchema)) {
    errors.push({ path: 'settingsSchema', message: 'settingsSchema must be an array' });
  } else {
    manifest.settingsSchema.forEach((group: any, i: number) => {
      if (!group.name || typeof group.name !== 'string') {
        errors.push({ path: `settingsSchema[${i}].name`, message: 'Group name is required' });
      }
      if (!Array.isArray(group.settings)) {
        errors.push({ path: `settingsSchema[${i}].settings`, message: 'Group settings must be an array' });
      }
    });
  }

  // Default preset
  if (!manifest.defaultPreset || typeof manifest.defaultPreset !== 'object') {
    errors.push({ path: 'defaultPreset', message: 'defaultPreset is required' });
  }

  // Registry
  if (!manifest.registry || typeof manifest.registry !== 'object') {
    errors.push({ path: 'registry', message: 'registry is required' });
  } else {
    if (!manifest.registry.sections || typeof manifest.registry.sections !== 'object') {
      errors.push({ path: 'registry.sections', message: 'registry.sections is required' });
    }
    if (!manifest.registry.blocks || typeof manifest.registry.blocks !== 'object') {
      errors.push({ path: 'registry.blocks', message: 'registry.blocks is required' });
    }
  }

  return errors;
}
