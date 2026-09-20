/** `01 / SKILLS` style index label shared by every section. */
export function SectionIndex({ children }: { children: string }) {
  return (
    <p className="text-[12px] uppercase tracking-[0.2em] text-foreground/50">
      {children}
    </p>
  );
}
