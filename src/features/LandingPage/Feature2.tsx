import BeakerIcon from '@/assets/icons/BeakerIcon';
import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import FlagIcon from '@/assets/icons/FlagIcon';
import OpenBookIcon from '@/assets/icons/OpenBookIcon';
import PeopleIcon from '@/assets/icons/PeopleIcon';

const Feature2 = () => {
  return (
    <div id="humanContext" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="mb-12 lg:mb-0 lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              Human Context Layer
            </h2>
            <p className="mb-8 text-neutral-600">
              PhantomX goes beyond algorithms to incorporate the human elements
              that traditional financial analysis often misses. Our proprietary
              Human Context Layer understands the cultural, behavioral, and
              societal factors that drive market decisions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
                    <CheckMarkIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Religion, Culture &amp; Tradition
                  </h3>
                  <p className="text-neutral-600">
                    We analyze how deeply-held beliefs and cultural norms
                    influence financial decisions and market behaviors in
                    different regions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
                    <CheckMarkIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Education &amp; Global Trends
                  </h3>
                  <p className="text-neutral-600">
                    Understanding how varying levels of education and exposure
                    to global trends affect acceptance of new financial
                    instruments and technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
                    <CheckMarkIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Financial Stability &amp; Readiness
                  </h3>
                  <p className="text-neutral-600">
                    Incorporating real-world financial security metrics to gauge
                    how populations approach risk, investment, and economic
                    change.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
                    <CheckMarkIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Community Values &amp; Social Norms
                  </h3>
                  <p className="text-neutral-600">
                    Measuring how social structures and community expectations
                    influence financial behaviors and investment priorities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200">
                    <CheckMarkIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Entrepreneurial Familiarity
                  </h3>
                  <p className="text-neutral-600">
                    Assessing regional comfort with entrepreneurship and how it
                    impacts investment openness and business development
                    potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-xl bg-neutral-50 p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-neutral-200 bg-white p-6">
                  <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-gray-50">
                    <FlagIcon />
                  </div>
                  <h3 className="mb-2 font-semibold text-neutral-900">
                    Cultural Analysis
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Deep insights into how regional customs influence market
                    behaviors and investment patterns.
                  </p>
                </div>

                <div className="rounded-lg border border-neutral-200 bg-white p-6">
                  <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-gray-50">
                    <OpenBookIcon />
                  </div>
                  <h3 className="mb-2 font-semibold text-neutral-900">
                    Educational Mapping
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Tracking knowledge distribution and its impact on financial
                    innovation adoption.
                  </p>
                </div>

                <div className="rounded-lg border border-neutral-200 bg-white p-6">
                  <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-gray-50">
                    <PeopleIcon />
                  </div>
                  <h3 className="mb-2 font-semibold text-neutral-900">
                    Social Structure Insights
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Understanding how community relationships affect business
                    and investment decisions.
                  </p>
                </div>

                <div className="rounded-lg border border-neutral-200 bg-white p-6">
                  <div className="mb-4 flex h-40 items-center justify-center rounded-md bg-gray-50">
                    <BeakerIcon />
                  </div>
                  <h3 className="mb-2 font-semibold text-neutral-900">
                    Behavioral Economics
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Analyzing psychological factors that drive financial
                    decision-making across different markets.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-black p-6 text-white">
                <h3 className="mb-2 font-semibold">Beyond Numbers</h3>
                <p className="text-sm opacity-90">
                  Our Human Context Layer brings unprecedented depth to
                  financial analysis, helping you understand not just whats
                  happening in markets, but why its happening.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
