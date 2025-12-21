interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <article className="bg-card border-l-4 border-accent p-6 md:p-8 h-full">
      <blockquote className="mb-6">
        <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed italic">
          "{quote}"
        </p>
      </blockquote>
      <footer className="font-sans">
        <cite className="not-italic">
          <span className="font-medium text-foreground">{author}</span>
          <span className="text-muted-foreground block text-sm mt-1">{role}</span>
        </cite>
      </footer>
    </article>
  );
};

export default TestimonialCard;
