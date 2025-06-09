import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CryptoTrends from './UseCase/CryptoTrends';
import MAAnalysis from './UseCase/MAAnalysis';
import MarketEntry from './UseCase/MarketEntry';
import StartupScreening from './UseCase/StartupScreening';
import { Button } from '@/components/ui/button';
import ArrowLeftShortIcon from '@/assets/icons/ArrowLeftShortIcon';

const UseCase = () => {
  return (
    <section id="use-cases" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
            Use Cases
          </h2>
          <p className="text-lg text-neutral-600">
            PhantomX delivers AI-powered intelligence across a wide range of
            financial applications.
          </p>
        </div>

        <Tabs defaultValue="tab-market">
          <TabsList
            className="m-auto flex flex-wrap justify-center"
            variant="full"
          >
            <TabsTrigger
              value="tab-market"
              className="tab-button -mb-px border-b-2 border-transparent px-6 py-3 font-medium text-neutral-500"
              aria-selected="false"
              variant="full"
            >
              Market Entry
            </TabsTrigger>
            <TabsTrigger
              value="tab-ma"
              className="tab-button -mb-px px-6 py-3 font-medium text-neutral-500"
              aria-selected="false"
              variant="full"
            >
              M&amp;A Analysis
            </TabsTrigger>
            <TabsTrigger
              value="tab-startup"
              className="tab-button -mb-px px-6 py-3 font-medium text-neutral-500"
              aria-selected="false"
              variant="full"
            >
              Startup Screening
            </TabsTrigger>
            <TabsTrigger
              value="tab-crypto"
              className="tab-button -mb-px px-6 py-3 font-medium text-neutral-500"
              aria-selected="true"
              variant="full"
            >
              Crypto Trends
            </TabsTrigger>
          </TabsList>

          <hr className="mb-12" />

          <TabsContent value="tab-market">
            <MarketEntry />
          </TabsContent>

          <TabsContent value="tab-ma">
            <MAAnalysis />
          </TabsContent>

          <TabsContent value="tab-startup">
            <StartupScreening />
          </TabsContent>
          <TabsContent value="tab-crypto">
            <CryptoTrends />
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button>
            <span>Explore additional use cases with a custom demo</span>
            <ArrowLeftShortIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
