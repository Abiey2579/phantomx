import Feature1 from '@/features/LandingPage/Feature1';
import Feature2 from '@/features/LandingPage/Feature2';
import ForWho from '@/features/LandingPage/ForWho';
import { Hero } from '@/features/LandingPage/Hero';
import { Navbar } from '@/features/LandingPage/Navbar';

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <ForWho />
    </div>
  );
};

export default LandingPage;
