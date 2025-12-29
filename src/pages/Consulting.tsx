import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Check, Clock, Users, FileText, Headphones, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ROICalculator from "@/components/ROICalculator";
import ConsultingTimeline from "@/components/ConsultingTimeline";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Footer from "@/components/Footer";

const Consulting = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    { q: "What if my agents don't use it?", a: "Our implementation includes change management strategies. We've achieved 95% adoption rates by involving agents in the design process and showing them immediate time savings." },
    { q: "How long is implementation?", a: "4 weeks for full implementation, with 90 days of ongoing support to ensure lasting results." },
    { q: "What's included in 90-day support?", a: "3 monthly check-in calls, unlimited email support, system updates, and a final ROI report." },
    { q: "Can we customize the system?", a: "Absolutely. Every system is built specifically for your market, brand, and team workflows." },
    { q: "What if we're not satisfied?", a: "We offer a satisfaction guarantee. If you don't see measurable improvements by week 4, we'll continue working until you do." },
    { q: "Do you offer payment plans?", a: "Yes, we offer 50% upfront and 50% at completion, or custom arrangements for larger teams." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <nav className="container-editorial py-4 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-serif text-lg font-semibold tracking-wide text-foreground">PROPERTY</span>
            <div className="w-10 h-px bg-accent my-0.5" />
            <span className="font-serif text-xs tracking-[0.2em] text-foreground">COPY DESK</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-sans text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/service" className="text-sm font-sans text-muted-foreground hover:text-foreground">Services</Link>
            <Link to="/blog" className="text-sm font-sans text-muted-foreground hover:text-foreground">Blog</Link>
            <Link to="/consulting" className="text-sm font-sans text-foreground font-medium">Consulting</Link>
            <Button variant="editorial" size="sm" onClick={() => setShowCalendly(true)}>Book Call</Button>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      <main className="pt-32">
        {/* Hero */}
        <section className="container-editorial text-center pb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Stop Losing $180K Per Year on Agent Admin Time
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Custom AI workflow implementation for real estate teams. <span className="text-foreground font-medium">$6,000 investment. 2,100% ROI. 11-day payback.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="editorial" size="lg" onClick={() => setShowCalendly(true)}>Book Free ROI Strategy Call</Button>
            <Button variant="editorial-outline" size="lg" onClick={scrollToCalculator}>Calculate Your Savings</Button>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="calculator" className="section-padding bg-muted">
          <div className="container-editorial max-w-2xl">
            <ROICalculator onBookCall={() => setShowCalendly(true)} />
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">4-Week Implementation</h2>
            <p className="text-muted-foreground text-center mb-8">From audit to launch in one month</p>
            <ConsultingTimeline />
          </div>
        </section>

        {/* Case Study */}
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <div className="bg-background border border-border rounded-lg p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8 text-center">How Riverside Realty Saved 120 Hours/Month</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { value: "120", label: "Hours Saved Monthly" },
                  { value: "18%", label: "Inquiry Increase" },
                  { value: "2,100%", label: "ROI in Year 1" },
                  { value: "Zero", label: "Agent Turnover" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-serif text-3xl md:text-4xl text-accent mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-accent pl-6 mb-6">
                <p className="font-serif text-lg italic text-foreground mb-2">"PropertyCopyDesk transformed how our team operates. The time savings alone paid for the investment in 11 days."</p>
                <footer className="text-sm text-muted-foreground">— Jennifer Kim, Broker/Owner</footer>
              </blockquote>
              <div className="text-center">
                <Button variant="editorial-outline" asChild><Link to="/blog/12-agent-team-case-study">Read Full Case Study</Link></Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: FileText, title: "Custom R.E.A.L. AI System™", items: ["20-30 market-specific prompts", "Branded templates", "Complete documentation"] },
                { icon: Users, title: "Team Training", items: ["Group sessions", "1:1 coaching per agent", "Video library", "Quick reference guides"] },
                { icon: Headphones, title: "90-Day Support", items: ["3 monthly check-in calls", "Unlimited email support", "System updates", "Final ROI report"] },
              ].map((col, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6">
                  <col.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif text-xl text-foreground mb-4">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Investment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Standard", price: "$6,000", desc: "For 5-15 agent teams", items: ["Full 4-week implementation", "20+ custom prompts", "Team training sessions", "90-day support"] },
                { name: "Premium", price: "$9,000", desc: "For 16-30 agent teams", items: ["Everything in Standard", "Additional 1:1 coaching", "Extended prompt library", "Priority support"] },
              ].map((tier, i) => (
                <div key={i} className="bg-background border border-border rounded-lg p-8">
                  <h3 className="font-serif text-2xl text-foreground mb-2">{tier.name}</h3>
                  <p className="font-serif text-4xl text-accent mb-2">{tier.price}</p>
                  <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-accent" />{item}</li>
                    ))}
                  </ul>
                  <Button variant="editorial" className="w-full" onClick={() => setShowCalendly(true)}>Book Strategy Call</Button>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">31+ agents: Custom pricing available</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="container-editorial max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="font-sans text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-editorial text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Transform Your Team's Efficiency?</h2>
            <p className="text-primary-foreground/80 mb-8">Limited to 2-3 teams per quarter</p>
            <Button variant="secondary" size="xl" onClick={() => setShowCalendly(true)}>Book Your Free 15-Minute Strategy Call</Button>
            <p className="text-sm text-primary-foreground/60 mt-4">No obligation. No sales pitch. Just ROI analysis.</p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setShowCalendly(false)} />
          <div className="relative bg-background rounded-lg shadow-2xl max-w-xl w-full max-h-[90vh] overflow-auto">
            <button onClick={() => setShowCalendly(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10">
              <X className="w-5 h-5" />
            </button>
            <CalendlyEmbed url="https://calendly.com/propertycopydesk/roi-call" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Consulting;
