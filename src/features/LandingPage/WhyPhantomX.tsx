import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import LegalScaleIcon from '@/assets/icons/LegalScaleIcon';
import PredictiveBarsIcon from '@/assets/icons/PredictiveBarsIcon';
import ShieldIcon from '@/assets/icons/ShieldIcon';
import { Button } from '@/components/ui/button';

const WhyPhantomX = () => {
  return (
    <section id="key-differentiators" className="bg-accent py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Why PhantomX
          </h2>
          <p className="text-lg text-neutral-600">
            Discover what makes PhantomX different from other financial
            intelligence platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg">
            <div className="p-8">
              <div className="bg-primary mb-6 flex h-12 w-12 items-center justify-center rounded-md">
                <LegalScaleIcon />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                Unmatched Data Breadth
              </h3>
              <p className="mb-6 text-neutral-600">
                PhantomX integrates data from more sources than any competitor,
                processing over 8.7 million financial documents daily.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      3.5x more data sources than nearest competitor
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      Access to 92% of global financial markets
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      128 languages processed in real-time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full border-t border-neutral-200 bg-neutral-50 px-8 py-4">
              <div className="flex items-center">
                <div className="bg-muted-foreground text-popover rounded-full px-2 py-1 text-xs font-medium text-nowrap">
                  CLIENT FEEDBACK
                </div>
                <div className="ml-3 text-sm text-neutral-700 italic">
                  &quot;The breadth of data available through PhantomX is
                  unrivaled.&quot;
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg">
            <div className="p-8">
              <div className="bg-primary mb-6 flex h-12 w-12 items-center justify-center rounded-md">
                <PredictiveBarsIcon />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                Superior Predictive Accuracy
              </h3>
              <p className="mb-6 text-neutral-600">
                Our proprietary Deep Learning models deliver significantly
                higher accuracy in financial forecasting and trend prediction.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      82% accuracy in market movement predictions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      37% lower prediction error rate than industry average
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      Confidence scores with 94% reliability rating
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full border-t border-neutral-200 bg-neutral-50 px-8 py-4">
              <div className="flex items-center">
                <div className="bg-muted-foreground text-popover rounded-full px-2 py-1 text-xs font-medium text-nowrap">
                  CLIENT FEEDBACK
                </div>
                <div className="ml-3 text-sm text-neutral-700 italic">
                  &quot;PhantomX predictions have consistently outperformed our
                  internal models.&quot;
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-lg">
            <div className="p-8">
              <div className="bg-primary mb-6 flex h-12 w-12 items-center justify-center rounded-md">
                <ShieldIcon />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                Unparalleled Source Validation
              </h3>
              <p className="mb-6 text-neutral-600">
                Our multi-layer verification process ensures you&apos;re making
                decisions based on reliable, trustworthy information.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      7-layer verification methodology for all data sources
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      Historical reliability tracking for all information
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      Automated bias detection and neutralization
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full border-t border-neutral-200 bg-neutral-50 px-8 py-4">
              <div className="flex items-center">
                <div className="bg-muted-foreground text-popover rounded-full px-2 py-1 text-xs font-medium text-nowrap">
                  CLIENT FEEDBACK
                </div>
                <div className="ml-3 text-sm text-neutral-700 italic">
                  &quot;The source verification gives us confidence in every
                  decision we make.&quot;
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-4xl overflow-hidden">
            <div className="mb-10 text-center">
              <h3 className="mb-2 text-2xl font-semibold text-neutral-900">
                How PhantomX Compares
              </h3>
              <p className="text-neutral-600">
                See how we stack up against other financial intelligence
                platforms
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border border-neutral-200 bg-white">
                <thead>
                  <tr>
                    <th className="border-b border-neutral-200 bg-neutral-50 p-4 text-left"></th>
                    <th className="bg-primary border-b border-neutral-200 p-4 text-center text-white">
                      <span className="font-semibold">PhantomX</span>
                    </th>
                    <th className="border-b border-neutral-200 bg-neutral-50 p-4 text-center text-neutral-700">
                      <span className="font-medium">Traditional Platforms</span>
                    </th>
                    <th className="border-b border-neutral-200 bg-neutral-50 p-4 text-center text-neutral-700">
                      <span className="font-medium">Other AI Solutions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-neutral-200 p-4 font-medium text-neutral-800">
                      Data Sources
                    </td>
                    <td className="border-b border-neutral-200 bg-white p-4 text-center">
                      <span className="font-medium text-[#4A90E2]">8.7M+</span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">500K-1M</span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">2-3M</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-neutral-200 p-4 font-medium text-neutral-800">
                      Forecast Accuracy
                    </td>
                    <td className="border-b border-neutral-200 bg-white p-4 text-center">
                      <span className="font-medium text-[#4A90E2]">82%</span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">48-55%</span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">65-72%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-neutral-200 p-4 font-medium text-neutral-800">
                      Source Validation
                    </td>
                    <td className="border-b border-neutral-200 bg-white p-4 text-center">
                      <span className="font-medium text-[#4A90E2]">
                        7-layer process
                      </span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">1-2 layers</span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">3-4 layers</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-neutral-200 p-4 font-medium text-neutral-800">
                      Processing Speed
                    </td>
                    <td className="border-b border-neutral-200 bg-white p-4 text-center">
                      <span className="font-medium text-[#4A90E2]">
                        Real-time
                      </span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">Hours/Days</span>
                    </td>
                    <td className="border-b border-neutral-200 bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">Minutes/Hours</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-neutral-800">
                      Integration Options
                    </td>
                    <td className="bg-white p-4 text-center">
                      <span className="font-medium text-[#4A90E2]">
                        API, SDK, Plugin
                      </span>
                    </td>
                    <td className="bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">Limited API</span>
                    </td>
                    <td className="bg-neutral-50 p-4 text-center">
                      <span className="text-neutral-700">API, SDK</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button>Experience the PhantomX Difference</Button>
        </div>
      </div>
    </section>
  );
};

export default WhyPhantomX;
