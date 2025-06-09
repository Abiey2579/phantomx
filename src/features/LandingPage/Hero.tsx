import React from 'react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-primary px-4 md:px-8">
      <div className="container space-y-8 py-24 text-center">
        <div className="mx-auto max-w-screen-lg space-y-6">
          <h1 className="text-popover text-3xl leading-16 font-bold lg:text-6xl">
            An Intelligent System That Sees Beyond Numbers
          </h1>
          <p className="text-gray-400 lg:text-lg">
            PhantomX is An enterprise-level AI tuned for financial research,
            macroeconomics, investment intelligence, and socioeconomic pattern
            recognition, capable of scanning for patterns in trends across the
            globe.
          </p>
          <div className="mx-auto flex w-fit gap-3">
            <Button variant={'white'}>Schedule Demo</Button>
            <Button variant={'outline'} className="text-popover">
              Explore Platform
            </Button>
          </div>
        </div>
        <hr />
        <div className="mx-auto w-fit">
          <p className="mb-3 text-sm text-gray-400">
            Trusted by leading financial institutions and nations
          </p>
          <div className="flex gap-8">
            {['Goldman Sachs', 'JPMorgan', 'UAE', 'BlackRock'].map(
              (entity, idx) => (
                <h3 className="text-popover font-medium" key={idx}>
                  {entity}
                </h3>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
