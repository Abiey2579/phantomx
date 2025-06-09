import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import ExclamationMarkIcon from '@/assets/icons/ExclamationMarkIcon';

const StartupScreening = () => {
  return (
    <div
      id="content-startup"
      className="tab-content"
      role="tabpanel"
      aria-labelledby="tab-startup"
      aria-hidden="true"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-neutral-900">
            Startup Investment Screening
          </h3>
          <p className="mb-6 text-neutral-700">
            Evaluate early-stage investment opportunities with comprehensive
            analysis of technology, market fit, team capabilities, and growth
            potential.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Technology Differentiation Analysis
                </h4>
                <p className="text-neutral-600">
                  Assess technical innovation and differentiation against
                  current market solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>

              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Team Capability Assessment
                </h4>
                <p className="text-neutral-600">
                  Evaluate founding team&apos;s expertise, execution track
                  record, and key skill gaps.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>

              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Market Timing Analysis
                </h4>
                <p className="text-neutral-600">
                  Determine ideal market entry timing based on industry adoption
                  curves.
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
                PhantomX helped a venture capital firm identify 5 high-potential
                fintech startups that delivered an average 3.2x return.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8">
          <div className="space-y-6">
            <h4 className="mb-3 text-lg font-medium text-neutral-900">
              Startup Opportunity Assessment
            </h4>

            <div className="mb-4 flex items-center">
              <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full text-xl font-semibold text-white">
                FS
              </div>
              <div className="ml-4">
                <h5 className="font-medium text-neutral-900">FinSecure AI</h5>
                <p className="text-sm text-neutral-600">
                  AI-powered fraud detection for financial transactions
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">Overall Rating</span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  8.7/10
                </div>
                <span className="text-xs text-green-600">
                  Top 5% of evaluated startups
                </span>
              </div>

              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">Expected ROI</span>
                <div className="mt-1 text-2xl font-semibold text-neutral-900">
                  3.8-4.5x
                </div>
                <span className="text-xs text-green-600">
                  36-month projection
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Technology Innovation
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    High (94%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[94%] rounded-full bg-green-500" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Team Strength
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    Strong (86%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[86%] rounded-full bg-green-500"></div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between">
                    <span className="text-sm font-medium text-neutral-700">
                      Market Timing
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      Optimal (92%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                    <div className="h-full w-[92%] rounded-full bg-green-500"></div>
                  </div>

                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium text-neutral-700">
                        Competitive Environment
                      </span>
                      <span className="text-sm font-medium text-yellow-600">
                        Moderate (64%)
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                      <div className="h-full w-[64%] rounded-full bg-yellow-500"></div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-neutral-200 pt-4">
                    <h4 className="mb-3 text-lg font-medium text-neutral-900">
                      PhantomX Recommendation:
                    </h4>
                    <p className="text-neutral-700">
                      Invest with valuation cap of $24M. Technology demonstrates
                      proprietary algorithms with 12-month competitive
                      advantage. Recommend allocation of $3-5M with additional
                      reserved for follow-on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupScreening;
