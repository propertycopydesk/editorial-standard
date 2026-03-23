import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms of Service | PropertyCopyDesk";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "Terms of Service for PropertyCopyDesk. Read the terms that govern your use of our website and services.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/terms");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-40">
        <nav className="container-editorial py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col items-start">
              <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-foreground">
                PROPERTY
              </span>
              <div className="w-10 h-px bg-accent my-0.5" />
              <span className="font-serif text-[10px] md:text-xs tracking-[0.2em] text-foreground">
                COPY DESK
              </span>
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/blog" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="btn-gold-shine text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold"
              >
                <span className="hidden sm:inline">Get AI Visibility Check</span>
                <span className="sm:hidden">Free Audit</span>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-16">
        <div className="container-editorial">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2 leading-tight">
              Terms of Service
            </h1>
            <p className="font-sans text-sm text-muted-foreground mb-10">Last updated: March 21, 2026</p>

            <div className="space-y-10 font-sans text-muted-foreground leading-relaxed">

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">1. Agreement</h2>
                <p>
                  By accessing or using the PropertyCopyDesk website at <a href="https://propertycopydesk.com" className="text-accent hover:underline">propertycopydesk.com</a> or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, do not use our site or services.
                </p>
                <p>
                  PropertyCopyDesk is operated by Fatih. References to "we," "us," or "our" refer to PropertyCopyDesk.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">2. Services</h2>
                <p>
                  PropertyCopyDesk provides content marketing and AI visibility services for real estate agents, including but not limited to: written content strategy, article production, schema markup implementation, AI search positioning, and related consulting.
                </p>
                <p>
                  The specific scope, deliverables, timelines, and pricing for your engagement are defined in a separate written agreement or proposal. These Terms govern the general relationship and use of our website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">3. Payment</h2>
                <p>
                  Service fees are as agreed in your proposal or service agreement. Payment terms, billing cycles, and cancellation conditions are specified in that agreement. All fees are in USD unless otherwise stated.
                </p>
                <p>
                  We reserve the right to pause or terminate service delivery if payment is not received within the agreed terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">4. Intellectual Property</h2>
                <p>
                  Upon full payment for a given deliverable, you own the content we produce for you. We retain the right to reference the nature of the work (e.g., "content marketing for real estate clients") in our own marketing, without disclosing confidential details or reproducing your content, unless you grant explicit permission.
                </p>
                <p>
                  All original content on the PropertyCopyDesk website — including articles, copy, frameworks, and design — is owned by PropertyCopyDesk and may not be reproduced without written permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">5. Results Disclaimer</h2>
                <p>
                  We make no guarantees regarding specific rankings, citation frequency, lead volume, or revenue outcomes. AI visibility and search performance depend on many factors outside our control, including algorithm changes, competitor activity, and the quality of your existing online presence.
                </p>
                <p>
                  Our work is designed to meaningfully improve your position over time, based on established best practices. Past results described on our website reflect real outcomes and are not guarantees of future performance.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">6. Client Responsibilities</h2>
                <p>
                  Effective delivery of our services depends on timely feedback, access to necessary accounts (e.g., Google Search Console, website CMS), and accurate information about your market, specialty, and goals. Delays caused by lack of client response or access are not the responsibility of PropertyCopyDesk.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, PropertyCopyDesk shall not be liable for any indirect, incidental, or consequential damages arising from use of our services or website. Our total liability for any claim arising under these Terms shall not exceed the amount you paid to us in the 30 days preceding the claim.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">8. Termination</h2>
                <p>
                  Either party may terminate the service relationship in accordance with the cancellation terms in your service agreement. We reserve the right to terminate access to our website and services for anyone who violates these Terms or engages in abusive or fraudulent conduct.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">9. Governing Law</h2>
                <p>
                  These Terms are governed by and construed in accordance with applicable law. Any disputes shall be resolved through good-faith negotiation before pursuing formal legal action.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">10. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. The current version is always available at this URL. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">11. Contact</h2>
                <p>
                  Questions about these Terms? Email us at <a href="mailto:hello@propertycopydesk.com" className="text-accent hover:underline">hello@propertycopydesk.com</a>.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;