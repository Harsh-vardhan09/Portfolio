import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Server-only. Returns the image path if the file is actually present under
 * /public, otherwise null so the card can fall back to type. Runs at build time
 * for static pages, so there is no per-request cost.
 */
export function resolveProjectImage(image?: string): string | null {
  if (!image) return null;
  const clean = image.split("?")[0];
  const file = path.join(process.cwd(), "public", clean.replace(/^\//, ""));
  return existsSync(file) ? image : null;
}
