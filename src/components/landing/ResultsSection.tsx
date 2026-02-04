import { TrendingUp, Phone, MapPin, BarChart3 } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "From $0 to $47K MRR",
      description: "Agent went from zero AI visibility to 8 citations per month in 60 days",
    },
    {
      icon: Phone,
      metric: "First Call in 18 Days",
      description: "$640K listing from ChatGPT search within 3 weeks",
    },
    {
      icon: MapPin,
      metric: "50+ Markets",
      description: "We do this across North America in any town, city or metro",
    },
    {
      icon: BarChart3,
      metric: "250% Traffic Increase",
      description: "Went from 3% to 51% AI citation rate in 90 days",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-primary text-center mb-12">
          The Results Speak For Themselves.
        </h2>

        {/* Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                <result.icon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {result.metric}
              </h3>
              <p className="text-base text-primary/70 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
