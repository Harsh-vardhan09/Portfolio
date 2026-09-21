import { existsSync, readFileSync } from "node:fs";
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

/**
 * Intrinsic size of a local PNG, read from the IHDR header at build time.
 * Screenshots vary from 1.38 to 2.34 in aspect, so a fixed frame would crop
 * them; real dimensions let each render uncropped with no layout shift.
 * Returns null for other formats — callers should fall back to a framed layout.
 */
export function readImageSize(
  image: string
): { width: number; height: number } | null {
  const clean = image.split("?")[0];
  if (!clean.toLowerCase().endsWith(".png")) return null;
  const file = path.join(process.cwd(), "public", clean.replace(/^\//, ""));
  if (!existsSync(file)) return null;
  const head = readFileSync(file).subarray(0, 24);
  // 8-byte PNG signature, then the IHDR chunk: width and height at 16 and 20.
  if (head.length < 24 || head.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: head.readUInt32BE(16), height: head.readUInt32BE(20) };
}
