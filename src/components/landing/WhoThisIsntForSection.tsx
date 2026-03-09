import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhoThisIsntForSection = () => {
  const ref = useScrollReveal();

  const notFor = [
    "Agents who need leads this week (we build authority, not instant lead flow)",
    "Agents who only believe in \"proven\" strategies (you'd be Founding Partner #1-3)",
    "Agents who want someone else to own the asset (everything lives on YOUR domain)",
    "Agents who don't have $1,299/month for 6-12 months (this compounds over time)",
  ];

  const isFor = [
    "Agents who understand authority = survival in a contracting market",
    "Agents tired of renting Zillow zip codes they'll never own",
    "Agents willing to build a moat while competitors sleep",
    "Agents who want to own their marketing asset, not lease it",
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Honest Assessment</span>
          <h2 className="section-heading">Who This Isn't For</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-4">WHO THIS ISN'T FOR:</h3>
            <ul className="space-y-3">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-destructive font-bold mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-accent/30 rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-4">WHO THIS IS FOR:</h3>
            <ul className="space-y-3">
              {isFor.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-accent font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsntForSection;
