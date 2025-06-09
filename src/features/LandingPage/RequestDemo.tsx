import CheckMarkIcon from '@/assets/icons/CheckMarkIcon';
import ExclamationMarkIcon from '@/assets/icons/ExclamationMarkIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DemoDialog from './Dialogs/DemoDialog';
import ContactSalesDialog from './Dialogs/ContactSalesDialog';

const RequestDemo = () => {
  return (
    <section id="demo-request" className="bg-neutral-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
                Request Demo
              </h2>
              <p className="mb-6 text-lg text-neutral-600">
                Schedule a personalized demonstration to see how PhantomX can
                transform your financial decision-making.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-neutral-700">
                      Personalized platform walkthrough tailored to your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-neutral-700">
                      Q&amp;A session with our financial intelligence experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-neutral-700">
                      Custom integration and implementation consultation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary/20 flex h-6 w-6 items-center justify-center rounded-full">
                    <CheckMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-neutral-700">
                      Pricing and deployment options discussion
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8 rounded-lg border border-neutral-200 bg-white p-6">
                <div className="flex items-center">
                  <div className="text-primary">
                    <ExclamationMarkIcon />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-neutral-700">
                      All demonstrations are conducted via secure video
                      conference. Our team will reach out within 1 business day
                      to schedule your session.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <DemoDialog />
                <ContactSalesDialog />
              </div>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-neutral-900">
                Request Early Access
              </h3>
              <form id="demo-form" className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="mb-1 block text-sm font-medium text-neutral-700"
                    >
                      First Name
                    </label>
                    <Input
                      type="text"
                      id="first-name"
                      name="first-name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="mb-1 block text-sm font-medium text-neutral-700"
                    >
                      Last Name
                    </label>
                    <Input
                      type="text"
                      id="last-name"
                      name="last-name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-neutral-700"
                  >
                    Work Email
                  </label>
                  <Input type="email" id="email" name="email" required />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-1 block text-sm font-medium text-neutral-700"
                  >
                    Company Name
                  </label>
                  <Input type="text" id="company" name="company" required />
                </div>

                <div>
                  <label
                    htmlFor="job-title"
                    className="mb-1 block text-sm font-medium text-neutral-700"
                  >
                    Job Title
                  </label>
                  <Input type="text" id="job-title" name="job-title" required />
                </div>

                <div>
                  <label
                    htmlFor="use-case"
                    className="mb-1 block text-sm font-medium text-neutral-700"
                  >
                    Primary Use Case
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="market-entry">
                        Market Entry Analysis
                      </SelectItem>
                      <SelectItem value="ma-analysis">
                        M&amp;A Analysis
                      </SelectItem>
                      <SelectItem value="startup-screening">
                        Startup Screening
                      </SelectItem>
                      <SelectItem value="crypto-trends">
                        Crypto Market Intelligence
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full">
                    Request Access
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-neutral-500">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-secondary hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-secondary hover:underline">
                      Terms of Service
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDemo;
