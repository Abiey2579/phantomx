import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import ExclamationMarkIcon from '@/assets/icons/ExclamationMarkIcon';
import PlusIcon from '@/assets/icons/PlusIcon';
import TrendingUpIcon from '@/assets/icons/TrendingUpIcon';

const CryptoTrends = () => {
  return (
    <div
      id="content-crypto"
      className="tab-content"
      role="tabpanel"
      aria-labelledby="tab-crypto"
      aria-hidden="false"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-neutral-900">
            Cryptocurrency Market Intelligence
          </h3>
          <p className="mb-6 text-neutral-700">
            Track and analyze cryptocurrency market trends, regulatory
            developments, and institutional adoption patterns beyond typical
            metric analysis.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Institutional Adoption Tracking
                </h4>
                <p className="text-neutral-600">
                  Monitor institutional investment flows and corporate treasury
                  allocations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Regulatory Landscape Analysis
                </h4>
                <p className="text-neutral-600">
                  Predict regulatory developments across key jurisdictions with
                  AI-driven analysis.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Sentiment Analysis
                </h4>
                <p className="text-neutral-600">
                  Gauge market sentiment beyond social media through
                  institutional communications.
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
                PhantomX accurately predicted 86% of major regulatory
                developments in the crypto market over the past 18 months.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8">
          <div className="space-y-6">
            <h4 className="mb-3 text-lg font-medium text-neutral-900">
              Cryptocurrency Market Forecast
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">
                  Institutional Adoption
                </span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  Accelerating
                </div>
                <span className="flex items-center text-xs text-green-600">
                  <TrendingUpIcon />
                  +42% YoY increase
                </span>
              </div>

              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">
                  Regulatory Climate
                </span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  Improving
                </div>
                <span className="flex items-center text-xs text-green-600">
                  <TrendingUpIcon />
                  Multiple favorable rulings
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Overall Market Sentiment
                  </span>
                  <span className="text-sm font-medium text-yellow-600">
                    Neutral (54%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[54%] rounded-full bg-yellow-500" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Institutional Sentiment
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    Bullish (78%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[78%] rounded-full bg-green-500" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Retail Sentiment
                  </span>
                  <span className="text-sm font-medium text-red-600">
                    Bearish (42%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[42%] rounded-full bg-red-500"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded border border-neutral-200 bg-white p-5">
              <h5 className="mb-2 font-medium text-neutral-900">
                Key Projected Developments
              </h5>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center">
                  <PlusIcon />
                  US spot ETF approval likelihood: 78% within 9 months
                </li>
                <li className="flex items-center">
                  <PlusIcon />
                  EU comprehensive framework adoption: Q2 2023
                </li>
                <li className="flex items-center">
                  <PlusIcon />
                  Major bank custody offerings: 5 of top 10 by EOY
                </li>
              </ul>
            </div>

            <div className="mt-4 border-t border-neutral-200 pt-4">
              <h4 className="mb-3 text-lg font-medium text-neutral-900">
                PhantomX Recommendation:
              </h4>
              <p className="text-neutral-700">
                Market entering accumulation phase with strong institutional
                underpinnings. Regulatory clarity improving with structured 2-3
                year timeframe for comprehensive frameworks in major
                jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTrends;
