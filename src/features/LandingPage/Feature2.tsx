import BeakerIcon from '@/assets/icons/BeakerIcon';
import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import FlagIcon from '@/assets/icons/FlagIcon';
import OpenBookIcon from '@/assets/icons/OpenBookIcon';
import PeopleIcon from '@/assets/icons/PeopleIcon';

const humanContextLayers1 = [
  {
    title: 'Religion, Culture & Tradition',
    description:
      'We analyze how deeply-held beliefs and cultural norms influence financial decisions and market behaviors in different regions.',
  },
  {
    title: 'Education & Global Trends',
    description:
      'Understanding how varying levels of education and exposure to global trends affect acceptance of new financial instruments and technologies.',
  },
  {
    title: 'Financial Stability & Readiness',
    description:
      'Incorporating real-world financial security metrics to gauge how populations approach risk, investment, and economic change.',
  },
  {
    title: 'Community Values & Social Norms',
    description:
      'Measuring how social structures and community expectations influence financial behaviors and investment priorities.',
  },
  {
    title: 'Entrepreneurial Familiarity',
    description:
      'Assessing regional comfort with entrepreneurship and how it impacts investment openness and business development potential.',
  },
];

const humanContextLayers2 = [
  {
    icon: <FlagIcon />,
    title: 'Cultural Analysis',
    description:
      'Deep insights into how regional customs influence market behaviors and investment patterns.',
  },
  {
    icon: <OpenBookIcon />,
    title: 'Educational Mapping',
    description:
      'Tracking knowledge distribution and its impact on financial innovation adoption.',
  },
  {
    icon: <PeopleIcon />,
    title: 'Social Structure Insights',
    description:
      'Understanding how community relationships affect business and investment decisions.',
  },
  {
    icon: <BeakerIcon />,
    title: 'Behavioral Economics',
    description:
      'Analyzing psychological factors that drive financial decision-making across different markets.',
  },
];

const Feature2 = () => {
  return (
    <div id="humanContext" className="bg-accent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="mb-12 lg:mb-0 lg:w-1/2">
            <h2 className="text-popover-foreground mb-6 text-3xl font-bold md:text-4xl">
              Human Context Layer
            </h2>
            <p className="text-muted-foreground mb-8">
              PhantomX goes beyond algorithms to incorporate the human elements
              that traditional financial analysis often misses. Our proprietary
              Human Context Layer understands the cultural, behavioral, and
              societal factors that drive market decisions.
            </p>

            <div className="space-y-6">
              {humanContextLayers1.map((layer, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 flex-shrink-0">
                    <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                      <CheckMarkIcon />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-popover-foreground text-lg font-semibold">
                      {layer.title}
                    </h3>
                    <p className="text-muted-foreground">{layer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-xl p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {humanContextLayers2.map((layer, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-neutral-200 bg-white p-6"
                  >
                    <div className="bg-accent mb-4 flex h-40 items-center justify-center rounded-md">
                      {layer.icon}
                    </div>
                    <h3 className="text-popover-foreground mb-2 font-semibold">
                      {layer.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-primary text-popover mt-8 rounded-lg p-6">
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
