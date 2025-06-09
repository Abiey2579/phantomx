import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import ConsultantsIcon from '@/assets/icons/ConsultantsIcon';
import CorporateStrategistsIcon from '@/assets/icons/CorperateStrategistsIcon';
import FinancialInstitutionsIcon from '@/assets/icons/FinancialInstitutionsIcon';
import InvestmentAnalystsIcon from '@/assets/icons/InvestmentAnalystsIcon';

const targetAudience = [
  {
    icon: <FinancialInstitutionsIcon />,
    title: 'Financial Institutions',
    description: `Banks, hedge funds, and asset managers seeking market insights
              beyond traditional analysis.`,
    target: [
      'Investment strategy teams',
      'Risk management departments',
      'Portfolio managers',
    ],
  },
  {
    icon: <InvestmentAnalystsIcon />,
    title: 'Investment Analysts',
    description: `Research professionals evaluating market opportunities and making recommendations.`,
    target: [
      'Equity research teams',
      'Credit analysts',
      'Investment strategists',
    ],
  },
  {
    icon: <ConsultantsIcon />,
    title: 'Consultants',
    description: `Strategic advisors working with clients on critical business decisions and market entry.`,
    target: [
      'Management consultants',
      'Financial advisors',
      'Strategy specialists',
    ],
  },
  {
    icon: <CorporateStrategistsIcon />,
    title: 'Corporate Strategists',
    description: `Decision-makers shaping growth initiatives and investment priorities for organizations.`,
    target: [
      'CFOs & finance teams',
      'Corporate development',
      'Innovation executives',
    ],
  },
];

const ForWho = () => {
  return (
    <section id="for-who" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-popover-foreground mb-4 text-3xl font-bold md:text-4xl">
            For Who
          </h2>
          <p className="text-muted-foreground text-lg">
            PhantomX is designed for financial professionals seeking data-driven
            competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {targetAudience.map((audience, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-neutral-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="bg-primary mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white">
                {audience.icon}
              </div>
              <h3 className="text-popover-foreground mb-3 text-xl font-semibold">
                {audience.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {audience.description}
              </p>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {audience.target.map((target, idx) => (
                  <li key={idx} className="flex items-center gap-x-2">
                    <CheckMarkIcon />
                    {target}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl rounded-lg border border-neutral-200 bg-white p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="bg-primary flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white">
              JM
            </div>
            <div>
              <p className="text-muted-foreground mb-4 text-lg italic">
                PhantomX has transformed how our investment committee evaluates
                opportunities. The platform&apos;s predictive insights have
                helped us identify several undervalued assets months before
                market movement.
              </p>
              <div>
                <div className="text-popover-foreground font-semibold">
                  Jonathan Mayer
                </div>
                <div className="text-muted-foreground text-sm">
                  Chief Investment Officer, Global Asset Management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
