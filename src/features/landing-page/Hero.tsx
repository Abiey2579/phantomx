import React from 'react';

import { Button } from '@/components/ui/button';

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
            <a href={'/demo'}>Try a Demo</a>
          </Button>
          <Button asChild size="lg" variant={'outline'}>
            <a href={'mailto:mbyahya2579@gmail.com'}>Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
