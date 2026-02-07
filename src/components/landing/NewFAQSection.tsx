import { useScrollReveal } from "@/hooks/useScrollReveal";

const NewFAQSection = () => {
  const ref = useScrollReveal();

  const faqs = [
    {
      question: "What if I'm in a competitive market?",
      answer: "Better. Competitive markets have more search volume, which means more leads. We've seen our best results in markets like Austin, Phoenix, and San Diego.",
    },
    {
      question: "What's the total investment in Year 1?",
      answer: "Service fees: $29,988. Ad spend: ~$18,000-21,000. Total: $47,988-50,988. Average return: 620% ROI (based on 10% close rate).",
    },
    {
      question: "How do I know the leads will be good quality?",
      answer: "We target high-intent search terms like \"sell my home [city]\" and \"best realtor [neighborhood]\" specified for your needs. These are sellers actively looking for an agent, not random clicks.",
    },
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">Questions</span>
          <h2 className="section-heading">Everything Else You Need to Know</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFAQSection;
