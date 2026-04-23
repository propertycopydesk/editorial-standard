interface ArticleTOCProps {
  items: { id: string; title: string }[];
}

export const slugifyHeading = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const ArticleTOC = ({ items }: ArticleTOCProps) => {
  if (!items.length) return null;
  return (
    <nav
      aria-label="Table of contents"
      className="bg-muted/60 border border-border rounded-lg p-6 mb-10"
    >
      <h2 className="font-serif text-lg text-foreground mb-3">Table of Contents</h2>
      <ol className="space-y-2 list-decimal list-inside">
        {items.map((item) => (
          <li key={item.id} className="font-sans text-sm text-muted-foreground">
            <a
              href={`#${item.id}`}
              className="hover:text-accent transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ArticleTOC;
