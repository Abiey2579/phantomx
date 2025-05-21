'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import LogoImage from '@/assets/icons/logo.png';

const Navbar = () => {
  return (
    <section className="flex items-center justify-between border-b px-8 py-4">
      <div className="flex items-center gap-2">
        <Image src={LogoImage} alt="Logo" className="w-7" />
        <h1 className="text-2xl font-semibold">PhantomX</h1>
      </div>
      <Button asChild size="lg">
        <a href={'/demo'}>Try a Demo </a>
      </Button>
    </section>
  );
};

export default Navbar;
