import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

interface ROICalculatorProps {
  onBookCall?: () => void;
}

const ROICalculator = ({ onBookCall }: ROICalculatorProps) => {
  const [agentCount, setAgentCount] = useState(10);

  const calculations = useMemo(() => {
    const hoursPerWeek = 15;
    const hourlyRate = 50;
    const weeksPerMonth = 4;
    const investmentCost = agentCount <= 15 ? 6000 : agentCount <= 30 ? 9000 : 12000;
    
    const monthlyWaste = agentCount * hoursPerWeek * hourlyRate * weeksPerMonth;
    const annualWaste = monthlyWaste * 12;
    const annualSavings = annualWaste * 0.8; // 80% savings
    const roi = ((annualSavings - investmentCost) / investmentCost) * 100;
    const paybackDays = Math.round((investmentCost / (monthlyWaste * 0.8)) * 30);

    return {
      monthlyWaste,
      annualWaste,
      annualSavings,
      roi,
      paybackDays,
      investmentCost
    };
  }, [agentCount]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Calculator className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-serif text-xl md:text-2xl text-foreground">ROI Calculator</h3>
          <p className="text-sm text-muted-foreground">See your potential savings</p>
        </div>
      </div>

      <div className="mb-8">
        <label className="block font-sans text-sm font-medium text-foreground mb-4">
          How many agents on your team?
        </label>
        <Slider
          value={[agentCount]}
          onValueChange={(value) => setAgentCount(value[0])}
          min={5}
          max={30}
          step={1}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>5 agents</span>
          <span className="font-semibold text-foreground text-lg">{agentCount} agents</span>
          <span>30+ agents</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-destructive/10 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-destructive" />
            <span className="text-xs font-sans text-muted-foreground uppercase tracking-wide">Monthly Waste</span>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-destructive font-semibold">
            {formatCurrency(calculations.monthlyWaste)}
          </p>
        </div>

        <div className="bg-destructive/10 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-destructive" />
            <span className="text-xs font-sans text-muted-foreground uppercase tracking-wide">Annual Waste</span>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-destructive font-semibold">
            {formatCurrency(calculations.annualWaste)}
          </p>
        </div>

        <div className="bg-accent/10 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-accent" />
            <span className="text-xs font-sans text-muted-foreground uppercase tracking-wide">Annual Savings</span>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-accent font-semibold">
            {formatCurrency(calculations.annualSavings)}
          </p>
        </div>

        <div className="bg-accent/10 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-xs font-sans text-muted-foreground uppercase tracking-wide">ROI</span>
          </div>
          <p className="font-serif text-2xl md:text-3xl text-accent font-semibold">
            {Math.round(calculations.roi).toLocaleString()}%
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6 py-4 bg-muted rounded-lg">
        <Clock className="w-5 h-5 text-accent" />
        <span className="font-sans text-foreground">
          <span className="font-semibold">{calculations.paybackDays}-day</span> payback period
        </span>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-6">
        <p className="text-xs font-sans text-muted-foreground text-center">
          <span className="font-medium">Formula:</span> {agentCount} agents × 15 hrs/week × $50/hr × 4 weeks = {formatCurrency(calculations.monthlyWaste)}/month
        </p>
      </div>

      <Button 
        variant="editorial" 
        size="lg" 
        className="w-full"
        onClick={onBookCall}
      >
        Book Your Strategy Call
      </Button>
    </div>
  );
};

export default ROICalculator;
