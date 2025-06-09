import CulturalBehaviorIcon from '@/assets/icons/CulturalBehaviorIcon';
import MacroEconomics from '@/assets/icons/MacroEconomicsIcon';
import MarketSentimentIcon from '@/assets/icons/MarketSentimentIcon';
import OpportunityIcon from '@/assets/icons/OpportunityIcon';
import SourceCredibilityIcon from '@/assets/icons/SourceCredibilityIcon';
import SupplyDemandIcon from '@/assets/icons/SupplyDemandIcon';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <MacroEconomics />,
    title: 'Macro & Microeconomic Analysis',
    description:
      'Analyze complex economic factors across multiple scales with intelligent pattern recognition that identifies key indicators and trends.',
  },
  {
    icon: <SupplyDemandIcon />,
    title: 'Supply-Demand Forecasting',
    description: `Predict future market conditions with advanced algorithms that account for both established economic models and emergent behaviors.`,
  },
  {
    icon: <MarketSentimentIcon />,
    title: 'Market Sentiment Intelligence',
    description: `Gauge market sentiment across digital channels using natural
              language processing to understand emotional drivers behind market
              movements.`,
  },
  {
    icon: <OpportunityIcon />,
    title: 'Opportunity Spotting',
    description: `Identify overlooked investment opportunities with AI-powered
              anomaly detection that highlights patterns human analysts might
              miss.`,
  },
  {
    icon: <CulturalBehaviorIcon />,
    title: 'Cultural & Behavioral Context Modeling',
    description: `PhantomX brings together deep financial analysis with cultural
            context to give you the complete picture for intelligent investment
            decisions.`,
  },
  {
    icon: <SourceCredibilityIcon />,
    title: 'Source Credibility Scoring',
    description: ` Evaluate information reliability with our proprietary scoring
              system that weighs source credibility against historical accuracy.`,
  },
];

const Feature1 = () => {
  return (
    <div id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-popover-foreground mb-4 text-3xl font-bold md:text-4xl">
            Features
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl">
            PhantomX brings together deep financial analysis with cultural
            context to give you the complete picture for intelligent investment
            decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-gray-200"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-200">
                {feature.icon}
              </div>
              <h3 className="text-popover-foreground mb-3 text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button>Learn more about our technology</Button>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
