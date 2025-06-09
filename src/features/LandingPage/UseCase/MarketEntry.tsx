import CaretUpDownIcon from '@/assets/icons/CaretUpDownIcon';
import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import TrendingUpIcon from '@/assets/icons/TrendingUpIcon';
import ExclamationMarkIcon from '@/assets/icons/ExclamationMarkIcon';

const MarketEntry = () => {
  return (
    <div
      id="content-market"
      className="tab-content block"
      role="tabpanel"
      aria-labelledby="tab-market"
      aria-hidden="true"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-neutral-900">
            Market Entry Intelligence
          </h3>
          <p className="mb-6 text-neutral-700">
            Identify optimal market entry opportunities with comprehensive
            analysis of local economic conditions, competitive landscape, and
            consumer trends.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Growth Potential Assessment
                </h4>
                <p className="text-neutral-600">
                  Forecast market size and growth trajectories with AI-driven
                  predictive models.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Regulatory Risk Evaluation
                </h4>
                <p className="text-neutral-600">
                  Analyze policy environments and predict upcoming regulatory
                  changes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Competitive Density Mapping
                </h4>
                <p className="text-neutral-600">
                  Identify saturation levels and competitor strengths across
                  geographic regions.
                </p>
              </div>
            </div>
          </div>

          <div className="inline-block rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3">
            <div className="flex items-center">
              <div className="text-primary">
                <ExclamationMarkIcon />
              </div>
              <p className="ml-2 text-sm text-neutral-700">
                PhantomX helped a global consumer goods firm identify $450M in
                untapped market potential across emerging Asian markets.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8">
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-lg font-medium text-neutral-900">
                Market Entry Success Probability
              </h4>
              <div className="h-4 w-full overflow-hidden rounded-full bg-neutral-200">
                <div className="bg-secondary h-full w-[76%] rounded-full" />
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-neutral-600">
                  76% probability of success
                </span>
                <span className="text-secondary font-medium">
                  High Confidence
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">
                  Market Growth Rate
                </span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  +14.2%
                </div>
                <span className="flex items-center text-xs text-green-600">
                  <TrendingUpIcon />
                  Above regional average
                </span>
              </div>

              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">
                  Competitor Density
                </span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  Low
                </div>
                <span className="flex items-center text-xs text-green-600">
                  <TrendingUpIcon />
                  Favorable condition
                </span>
              </div>

              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">
                  Regulatory Stability
                </span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  Medium
                </div>
                <span className="flex items-center text-xs text-yellow-600">
                  <CaretUpDownIcon />
                  Monitor closely
                </span>
              </div>

              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">Demand Trend</span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  Strong
                </div>
                <span className="flex items-center text-xs text-green-600">
                  <TrendingUpIcon />
                  5-year positive forecast
                </span>
              </div>
            </div>

            <div className="mt-4 border-t border-neutral-200 pt-4">
              <h4 className="mb-3 text-lg font-medium text-neutral-900">
                PhantomX Recommendation:
              </h4>
              <p className="text-neutral-700">
                Proceed with market entry in Q3 2023. Position as premium
                alternative with focus on urban centers. Consider joint venture
                with local partner to navigate regulatory landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketEntry;
