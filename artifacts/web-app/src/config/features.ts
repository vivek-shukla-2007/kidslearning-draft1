/**
 * Feature Flags Configuration
 * Toggle features on/off without code changes
 * Update these to enable/disable sections of the platform
 */

export const FEATURE_FLAGS = {
  // Learning Content
  ENABLE_PHONICS: true,
  ENABLE_PHONICS_PHASE2: true,
  ENABLE_PHONICS_PHASE3: false,
  ENABLE_PHONICS_PHASE4: false,
  ENABLE_PHONICS_PHASE5: false,

  // Reading
  ENABLE_TRICKY_WORDS: false,
  ENABLE_SIGHT_WORDS: false,
  ENABLE_DECODABLE_BOOKS: false,
  ENABLE_READ_SENTENCES: false,

  // Writing
  ENABLE_LETTER_FORMATION: false,
  ENABLE_HANDWRITING: false,
  ENABLE_SPELLING: false,

  // Maths
  ENABLE_COUNTING: false,
  ENABLE_NUMBER_BONDS: false,
  ENABLE_ADDITION: false,
  ENABLE_SUBTRACTION: false,
  ENABLE_SHAPES: false,
  ENABLE_MONEY: false,
  ENABLE_MEASUREMENT: false,

  // Games
  ENABLE_GAMES: false,
  ENABLE_BUBBLE_POP_GAME: false,
  ENABLE_MATCHING_GAME: false,
  ENABLE_MEMORY_GAME: false,
  ENABLE_DRAG_DROP_GAME: false,

  // Worksheets
  ENABLE_WORKSHEETS: false,
  ENABLE_WORKSHEET_PDF_EXPORT: false,
  ENABLE_WORKSHEET_ANSWERS: false,

  // Progress & Rewards
  ENABLE_PROGRESS_TRACKING: true,
  ENABLE_BADGES: true,
  ENABLE_CERTIFICATES: false,
  ENABLE_PROGRESS_BARS: true,

  // Parent Resources
  ENABLE_PARENT_RESOURCES: false,
  ENABLE_PROGRESS_REPORTS: false,
  ENABLE_LEARNING_ROADMAP: false,

  // Advanced
  ENABLE_OFFLINE_MODE: false,
  ENABLE_DARK_MODE: false,
  ENABLE_ANALYTICS: false,
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

/**
 * Check if a feature is enabled
 * @param feature - Feature flag name
 * @returns boolean - Whether the feature is enabled
 */
export function isFeatureEnabled(feature: FeatureFlag): boolean {
  return FEATURE_FLAGS[feature];
}

/**
 * Get all enabled features
 * @returns array of enabled feature names
 */
export function getEnabledFeatures(): FeatureFlag[] {
  return Object.entries(FEATURE_FLAGS)
    .filter(([_, value]) => value)
    .map(([key]) => key as FeatureFlag);
}
