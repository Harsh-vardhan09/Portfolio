/**
 * Shared focus ring. `outline-solid` is required: `outline-none` sets
 * outline-style to none, and `outline-2` only sets the width — without a style
 * the ring is computed but never painted.
 */
export const focusRing =
  "outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";
