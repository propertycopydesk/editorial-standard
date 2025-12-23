import { ArrowRight } from "lucide-react";

interface PainPointCardProps {
  title: string;
  problem: string;
  solution: string;
}

const PainPointCard = ({ title, problem, solution }: PainPointCardProps) => {
  return (
    <article className="bg-card border border-border p-6 md:p-8 h-full">
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6">
        {title}
      </h3>
      
      <div className="space-y-4">
        <div>
          <span className="text-xs font-sans uppercase tracking-wider text-destructive font-medium mb-2 block">
            The Problem
          </span>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            {problem}
          </p>
        </div>
        
        <div className="flex items-center justify-center py-2">
          <ArrowRight className="w-5 h-5 text-accent rotate-90" />
        </div>
        
        <div>
          <span className="text-xs font-sans uppercase tracking-wider text-accent font-medium mb-2 block">
            Our Solution
          </span>
          <p className="font-sans text-foreground text-sm leading-relaxed">
            {solution}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PainPointCard;
