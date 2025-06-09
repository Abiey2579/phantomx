import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import ExclamationMarkIcon from '@/assets/icons/ExclamationMarkIcon';

const MAAnalysis = () => {
  return (
    <div
      id="content-ma"
      className="tab-content"
      role="tabpanel"
      aria-labelledby="tab-ma"
      aria-hidden="true"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-neutral-900">
            M&amp;A Target Analysis
          </h3>
          <p className="mb-6 text-neutral-700">
            Conduct comprehensive acquisition target assessments with AI-powered
            analysis of synergy potential, valuation accuracy, and integration
            complexity.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Synergy Mapping
                </h4>
                <p className="text-neutral-600">
                  Identify and quantify potential synergies with data-driven
                  confidence intervals.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Fair Value Analysis
                </h4>
                <p className="text-neutral-600">
                  Detect valuation discrepancies and red flags in target
                  financials with AI auditing.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                <CheckMarkIcon />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-neutral-900">
                  Cultural Compatibility Assessment
                </h4>
                <p className="text-neutral-600">
                  Evaluate integration challenges through organizational culture
                  analysis.
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
                PhantomX helped a private equity firm identify 20M in previously
                unrecognized synergies during a recent acquisition.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8">
          <div className="space-y-6">
            <h4 className="mb-3 text-lg font-medium text-neutral-900">
              Acquisition Target Assessment
            </h4>

            <div className="space-y-4">
              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Strategic Fit
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    Strong (92%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[92%] rounded-full bg-green-500" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Valuation Accuracy
                  </span>
                  <span className="text-sm font-medium text-yellow-600">
                    Moderate (68%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[68%] rounded-full bg-yellow-500" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Integration Complexity
                  </span>
                  <span className="text-sm font-medium text-red-600">
                    High (Risk)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[78%] rounded-full bg-red-500" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-neutral-700">
                    Growth Potential
                  </span>
                  <span className="text-sm font-medium text-green-600">
                    Strong (88%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[88%] rounded-full bg-green-500" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">Synergy Value</span>
                <div className="mt-1 text-xl font-semibold text-neutral-900">
                  $78.3M
                </div>
                <span className="text-xs text-green-600">
                  32% above initial estimate
                </span>
              </div>

              <div className="rounded border border-neutral-200 bg-white p-4">
                <span className="text-sm text-neutral-500">
                  Cultural Alignment
                </span>
                <div className="mt-1 text-xl font-semibold text-neutral-900">
                  Medium
                </div>
                <span className="text-xs text-yellow-600">
                  Requires focused integration
                </span>
              </div>
            </div>

            <div className="mt-4 border-t border-neutral-200 pt-4">
              <h4 className="mb-3 text-lg font-medium text-neutral-900">
                PhantomX Recommendation:
              </h4>
              <p className="text-neutral-700">
                Proceed with acquisition with adjusted valuation of $340-360M.
                Develop comprehensive integration plan with focus on cultural
                alignment. Key synergies in distribution network and R&amp;D.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAAnalysis;
