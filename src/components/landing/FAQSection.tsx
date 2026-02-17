import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is AI visibility, and how does it help me?",
      answer: "AI visibility means making sure you're the agent that large language models like ChatGPT recommend when consumers ask about the best agents in your market. We optimize your digital presence so AI doesn't overlook you.",
    },
    {
      question: "How soon will I see results?",
      answer: "Most agents notice visibility improvements in 30–90 days. Results vary by market and competition, but we monitor progress so you can see measurable gains.",
    },
    {
      question: "Will other agents in my market be able to use PropertyCopyDesk too?",
      answer: "We limit overlap to protect our clients. Market exclusivity is important to us (and you), so you don't compete with another PropertyCopyDesk agent in the same locality.",
    },
    {
      question: "Is there a long-term commitment?",
      answer: "We offer straightforward 3 to 6-month contracts but bill monthly.",
    },
    {
      question: "Do I need to know anything about AI?",
      answer: "No. Our team handles the technical work so you can focus on being a real estate agent. You provide basic inputs, and we take care of the AI optimization.",
    },
    {
      question: "Do I get updates and new tools as AI evolves?",
      answer: "Absolutely. We continually refine our offering as AI platforms change, and you'll automatically benefit from new strategies and updates.",
    },
    {
      question: "How is PropertyCopyDesk different from a traditional SEO or marketing agency?",
      answer: "Traditional SEO is about Google rankings. We focus on how AI chooses and recommends agents. Our framework is built for language models, not just search engines.",
    },
    {
      question: "Which option is right for me?",
      answer: "whichOption",
    },
  ];

  const contactLink = "mailto:hello@propertycopydesk.com";

  const renderAnswer = (answer: string) => {
    if (answer === "whichOption") {
      return (
        <div className="space-y-4">
          <p className="text-primary/70">
            <strong>Get AI Visibility</strong> is best if you're:
          </p>
          <ul className="list-disc pl-6 text-primary/70 space-y-1">
            <li>Doing 10+ deals/year and value your time</li>
            <li>Want results fast (first citation in 30 days)</li>
            <li>Have the budget ($1,299/month)</li>
          </ul>
          <p className="text-primary/70">
            <strong>Coaching Program</strong> is best if you're:
          </p>
          <ul className="list-disc pl-6 text-primary/70 space-y-1">
            <li>Early in your career</li>
            <li>Enjoy learning marketing strategies</li>
            <li>Have 5-10 hours/week to dedicate to implementation</li>
            <li>Want to save money by doing the work yourself</li>
          </ul>
          <p className="text-primary/70">
            Still not sure?{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Book a free strategy call
            </a>{" "}
            and we'll help you decide.
          </p>
        </div>
      );
    }
    return <p className="text-primary/70 leading-relaxed">{answer}</p>;
  };

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[900px]">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-primary text-center mb-12">
          Common Questions
        </h2>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border py-2"
            >
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-primary text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-[17px] pb-6">
                {renderAnswer(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Link */}
        <div className="text-center mt-10">
          <p className="text-lg text-primary/70">
            Still need help?{" "}
            <a
              href={contactLink}
              className="text-accent hover:underline font-medium"
            >
              Reach out to us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
