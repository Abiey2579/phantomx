import CulturalBehaviorIcon from '@/assets/icons/CulturalBehaviorIcon';
import MacroEconomics from '@/assets/icons/MacroEconomicsIcon';
import MarketSentimentIcon from '@/assets/icons/MarketSentimentIcon';
import OpportunityIcon from '@/assets/icons/OpportunityIcon';
import SourceCredibilityIcon from '@/assets/icons/SourceCredibilityIcon';
import SupplyDemandIcon from '@/assets/icons/SupplyDemandIcon';
import { ArrowRight } from 'lucide-react';

const Feature1 = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Features
          </h2>
          <p className="mx-auto max-w-3xl text-neutral-600">
            PhantomX brings together deep financial analysis with cultural
            context to give you the complete picture for intelligent investment
            decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-gray-200">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-200">
              <MacroEconomics />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Macro &amp; Microeconomic Analysis
            </h3>
            <p className="text-neutral-600">
              Analyze complex economic factors across multiple scales with
              intelligent pattern recognition that identifies key indicators and
              trends.
            </p>
          </div>

          <div className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-gray-200">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-200">
              <SupplyDemandIcon />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Supply-Demand Forecasting
            </h3>
            <p className="text-neutral-600">
              Predict future market conditions with advanced algorithms that
              account for both established economic models and emergent
              behaviors.
            </p>
          </div>

          <div className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-gray-200">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-200">
              <MarketSentimentIcon />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Market Sentiment Intelligence
            </h3>
            <p className="text-neutral-600">
              Gauge market sentiment across digital channels using natural
              language processing to understand emotional drivers behind market
              movements.
            </p>
          </div>

          <div className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-gray-200">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-200">
              <OpportunityIcon />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Opportunity Spotting
            </h3>
            <p className="text-neutral-600">
              Identify overlooked investment opportunities with AI-powered
              anomaly detection that highlights patterns human analysts might
              miss.
            </p>
          </div>

          <div className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-gray-200">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-200">
              <CulturalBehaviorIcon />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Cultural &amp; Behavioral Context Modeling
            </h3>
            <p className="text-neutral-600">
              Understand how cultural factors influence market behaviors with
              advanced sociological modeling and regional expertise.
            </p>
          </div>

          <div className="group rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-gray-200">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-200">
              <SourceCredibilityIcon />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-neutral-900">
              Source Credibility Scoring
            </h3>
            <p className="text-neutral-600">
              Evaluate information reliability with our proprietary scoring
              system that weighs source credibility against historical accuracy.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center font-medium text-gray-700 transition-colors hover:text-gray-800"
          >
            <span>Learn more about our technology</span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
