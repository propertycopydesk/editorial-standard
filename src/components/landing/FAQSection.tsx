import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BOOKING_URL = "https://cal.com/propertycopydesk/qualificationcall";

const FAQSection = () => {
  const faqs = [
    {
      question: "How fast will I see results?",
      answer: "Most clients get their first AI citation within 30 days. Full visibility (appearing in 50%+ of relevant AI searches) typically takes 60-90 days. If you don't get a citation in 30 days, we keep working for free.",
    },
    {
      question: "What if my competitor is already using you?",
      answer: "Unlike other agencies, we don't offer market exclusivity. We believe there's room for multiple great agents in every market. We only work with serious, high-production agents.",
    },
    {
      question: "How is this different from regular SEO?",
      answer: "Traditional SEO optimizes for Google rankings. AI visibility optimizes for being cited by ChatGPT, Perplexity, and Google AI. Different algorithms, different strategies. Most SEO agencies don't understand AI citation triggers yet.",
    },
    {
      question: "Which option is right for me?",
      answer: "whichOption",
    },
    {
      question: "Do I need a lot of website content already?",
      answer: "No. We can start from scratch. If you already have blog content, we'll optimize it for AI search first—but it's not required.",
    },
    {
      question: "Why only 3 clients per month?",
      answer: "We're focused on results, not scale. Each client gets hands-on strategy, custom content, and direct access to our team. We can't deliver that quality to 50 clients. Hence the limit.",
    },
  ];

  const renderAnswer = (answer: string) => {
    if (answer === "whichOption") {
      return (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            <strong>Done-For-You</strong> is best if you're:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Doing 10+ deals/year and value your time</li>
            <li>Want results fast (first citation in 30 days)</li>
            <li>Have the budget ($1,299/month)</li>
          </ul>
          <p className="text-muted-foreground">
            <strong>DIY Coaching</strong> is best if you're:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>Early in your career</li>
            <li>Enjoy learning marketing strategies</li>
            <li>Have 5-10 hours/week to dedicate to implementation</li>
            <li>Want to save money by doing the work yourself</li>
          </ul>
          <p className="text-muted-foreground">
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
    return <p className="text-muted-foreground leading-relaxed">{answer}</p>;
  };

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[900px]">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-foreground text-center mb-12">
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
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-foreground text-left hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-[17px] pb-6">
                {renderAnswer(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
