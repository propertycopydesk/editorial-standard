import { useScrollReveal } from "@/hooks/useScrollReveal";

const StatsBar = () => {
  const ref = useScrollReveal();

  const stats = [
    {
      value: "35-55",
      label: "Qualified leads per month from Month 1",
    },
    {
      value: "7 Days",
      label: "Time to first leads with our hybrid system",
    },
    {
      value: "70%",
      label: "Drop in cost per lead by Month 12",
    },
  ];

  return (
    <section className="bg-secondary/30 border-y border-border py-12 md:py-16">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-muted-foreground max-w-[200px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
