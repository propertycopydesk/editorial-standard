import { useScrollReveal } from "@/hooks/useScrollReveal";

const MaintenanceSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Month 7+</span>
          <h2 className="section-heading">What Happens If You Stop After Month 6?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Cancel Column */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-destructive/80 mb-4">If You Cancel After Month 6</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-2">Month 7-12 (no maintenance):</p>
                <ul className="space-y-1.5">
                  <li>→ Your 54 articles age (12+ months old)</li>
                  <li>→ Google rankings decline 15-30%</li>
                  <li>→ Competitors publish fresher content</li>
                  <li>→ AI citation rates drop 10-20%</li>
                  <li>→ No seasonal content (miss spring market, holiday selling season)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-2">Month 13-18:</p>
                <ul className="space-y-1.5">
                  <li>→ Your articles now 18+ months old</li>
                  <li>→ Rankings dropped 30-40%</li>
                  <li>→ Citation rates dropped 30-50%</li>
                  <li>→ Competitor who started 6 months after you has caught up</li>
                  <li>→ Your $6K investment erodes to nothing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Continue Column */}
          <div className="bg-card border-2 border-accent/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-accent mb-4">If You Continue Maintenance</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-2">Month 7-12 (with maintenance):</p>
                <ul className="space-y-1.5">
                  <li>→ Content stays fresh (updated quarterly)</li>
                  <li>→ Rankings maintain or improve</li>
                  <li>→ Competitors can't displace you</li>
                  <li>→ Citation rates sustain at 70-90%</li>
                  <li>→ Seasonal content captures peak search periods</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-2">Month 13-18:</p>
                <ul className="space-y-1.5">
                  <li>→ Your 50+ articles constantly refreshed</li>
                  <li>→ Rankings stable or growing</li>
                  <li>→ Citation rates stable at 80-90%</li>
                  <li>→ Competitor 12-18 months behind (can't catch up)</li>
                  <li>→ Your moat is insurmountable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Research Callout */}
        <div className="max-w-3xl mx-auto bg-secondary/50 border border-border rounded-xl p-6">
          <p className="text-lg font-bold text-foreground mb-4">📊 THE DATA ON CONTENT DECAY</p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p><span className="font-semibold text-foreground">HubSpot Study (2025):</span> Blogs that stop publishing see 15-30% traffic decline within 6 months.</p>
            <p><span className="font-semibold text-foreground">Ahrefs Study (2024):</span> 94% of top-ranking pages are regularly updated. Pages not updated in 2+ years lose 32% of rankings.</p>
            <p><span className="font-semibold text-foreground">Semrush Analysis:</span> Competitors who keep publishing displace you within 9-12 months if you stop.</p>
          </div>
          <p className="text-foreground font-medium mt-4">
            Translation: Building authority takes 6 months. Keeping it requires maintenance. At $699/month, maintenance costs 40% less than building from scratch—and protects a $10K investment from eroding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
