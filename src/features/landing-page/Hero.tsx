import React from 'react';

import { Button } from '@/components/ui/button';
import { companyLogos } from '@/utils/placeholder';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-28">
      <div className="container text-center">
        <div className="mx-auto max-w-screen-lg space-y-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            An Intelligent System That Sees Beyond Numbers
          </h1>
          <p className="text-muted-foreground text-balance lg:text-lg">
            PhantomX is An enterprise-level AI tuned for financial research,
            macroeconomics, investment intelligence, and socioeconomic pattern
            recognition, capable of scanning for patterns in trends across the
            globe.
          </p>
        </div>
        <div className="mt-10 flex items-center gap-3 place-self-center">
          <Button asChild size="lg">
            <a href={'/'}>Request a Demo</a>
          </Button>
          <Button asChild size="lg" variant={'outline'}>
            <a href={'/'}>Explore PhantomX</a>
          </Button>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 lg:mt-16">
          <p className="text-muted-foreground text-center text-sm">
            Designed for analysts, consultants, and institutions shaping the
            future
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {companyLogos.map((company) => (
              <Image
                key={company.url}
                src={company.url}
                alt={company.alt}
                className="h-7 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
