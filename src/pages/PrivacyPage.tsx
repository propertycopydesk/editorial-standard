import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | PropertyCopyDesk";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "Privacy Policy for PropertyCopyDesk. How we collect, use, and protect your personal information.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/privacy");
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
              Privacy Policy
            </h1>
            <p className="font-sans text-sm text-muted-foreground mb-10">Last updated: March 21, 2026</p>

            <div className="space-y-10 font-sans text-muted-foreground leading-relaxed">

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">1. Who We Are</h2>
                <p>
                  PropertyCopyDesk ("we," "us," or "our") is a content marketing and AI visibility service for real estate agents, operated by Fatih. Our website is <a href="https://propertycopydesk.com" className="text-accent hover:underline">propertycopydesk.com</a>. If you have any questions about this policy, contact us at <a href="mailto:hello@propertycopydesk.com" className="text-accent hover:underline">hello@propertycopydesk.com</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">2. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, including when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Submit your name, email address, or market details through our contact or lead capture forms (including our AI Visibility Scorecard form)</li>
                  <li>Book a call through our scheduling link</li>
                  <li>Send us an email or message</li>
                </ul>
                <p>
                  We also collect limited technical information automatically when you visit our site, including your IP address, browser type, referring URL, and pages viewed. This is standard web server log data and is used solely for security and performance monitoring.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deliver the services you requested, including your AI Visibility Scorecard and any audit or consultation</li>
                  <li>Respond to your inquiries and communicate about your account or project</li>
                  <li>Send you relevant content and updates related to PropertyCopyDesk — you can opt out at any time</li>
                  <li>Improve our website and services</li>
                </ul>
                <p>We do not sell your personal information. We do not use your data to serve third-party ads.</p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">4. Third-Party Services</h2>
                <p>
                  We use the following third-party tools to operate our business. Each has its own privacy policy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Tally.so</strong> — for lead capture forms. Data submitted through Tally is stored in Tally and may be connected to Google Sheets for our internal use.</li>
                  <li><strong className="text-foreground">Cal.com</strong> — for booking calls. Your name and email are collected when you book.</li>
                  <li><strong className="text-foreground">Cloudflare</strong> — for hosting and performance. Cloudflare processes basic traffic data.</li>
                </ul>
                <p>We do not grant these third parties permission to use your data for their own marketing purposes.</p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this policy. If you would like us to delete your information, contact us at <a href="mailto:hello@propertycopydesk.com" className="text-accent hover:underline">hello@propertycopydesk.com</a> and we will respond within 30 days.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">6. Your Rights</h2>
                <p>
                  Depending on where you are located, you may have rights to access, correct, or delete the personal data we hold about you, or to restrict or object to our use of it. To exercise any of these rights, contact us at <a href="mailto:hello@propertycopydesk.com" className="text-accent hover:underline">hello@propertycopydesk.com</a>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">7. Cookies</h2>
                <p>
                  Our website does not use marketing or tracking cookies. We may use essential cookies required for the site to function correctly. Third-party tools (Tally, Cal.com) may set their own cookies when you interact with their embedded elements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-serif text-xl md:text-2xl text-foreground">9. Contact</h2>
                <p>
                  Questions about this policy? Email us at <a href="mailto:hello@propertycopydesk.com" className="text-accent hover:underline">hello@propertycopydesk.com</a>.
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

export default PrivacyPage;