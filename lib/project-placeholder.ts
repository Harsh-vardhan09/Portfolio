/**
 * AccordionGallery renders `item.image` into a bare <img>, so an absent image
 * would show a broken-image icon. Projects without a screenshot get this
 * self-contained SVG instead — the title set large, matching the card fallback.
 * No network request and no placeholder stock photography.
 */
export function projectPlaceholder(title: string): string {
  const name = title.split("–")[0].trim();
  const words = name.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > 12 && line) {
      lines.push(line);
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  }
  if (line) lines.push(line);

  const escape = (t: string) =>
    t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const text = lines
    .slice(0, 3)
    .map(
      (l, i) =>
        `<tspan x="450" dy="${i === 0 ? 0 : 86}">${escape(l)}</tspan>`
    )
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200"><rect width="900" height="1200" fill="#1c1c1c"/><text x="450" text-anchor="middle" y="${
    620 - (Math.min(lines.length, 3) - 1) * 43
  }" font-family="Geist, Inter, Helvetica, Arial, sans-serif" font-size="64" font-weight="500" letter-spacing="-2" fill="#5a5a5a">${text}</text></svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
