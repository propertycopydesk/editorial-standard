import { Search, Wrench, GraduationCap, Rocket } from "lucide-react";

const timelinePhases = [
  {
    week: "Week 1",
    title: "Discovery & Audit",
    icon: Search,
    items: [
      "90-min workflow audit call",
      "Technology stack assessment",
      "Custom improvement roadmap"
    ]
  },
  {
    week: "Week 2",
    title: "System Build",
    icon: Wrench,
    items: [
      "20-30 custom AI prompts",
      "Branded Canva templates",
      "Workflow SOPs",
      "Tool integrations"
    ]
  },
  {
    week: "Week 3",
    title: "Team Training",
    icon: GraduationCap,
    items: [
      "2 group training sessions",
      "Individual 1:1 coaching",
      "Hands-on practice"
    ]
  },
  {
    week: "Week 4",
    title: "Optimization + Launch",
    icon: Rocket,
    items: [
      "System refinements",
      "90-day support begins",
      "Success metrics tracking"
    ]
  }
];

const ConsultingTimeline = () => {
  return (
    <div className="py-12">
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-4 gap-4 relative">
            {timelinePhases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative z-10 w-24 h-24 bg-background border-2 border-accent rounded-full flex items-center justify-center">
                    <phase.icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-sans font-medium rounded-full mb-2">
                    {phase.week}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground font-sans">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        {timelinePhases.map((phase, index) => (
          <div key={index} className="relative pl-16">
            {/* Connecting Line */}
            {index < timelinePhases.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
            )}
            
            {/* Icon Circle */}
            <div className="absolute left-0 top-0 w-12 h-12 bg-background border-2 border-accent rounded-full flex items-center justify-center">
              <phase.icon className="w-5 h-5 text-accent" />
            </div>
            
            {/* Content */}
            <div className="bg-card border border-border rounded-lg p-4">
              <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-sans font-medium rounded-full mb-2">
                {phase.week}
              </span>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {phase.title}
              </h3>
              <ul className="space-y-1">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-muted-foreground font-sans">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultingTimeline;
