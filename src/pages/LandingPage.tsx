import Feature1 from '@/features/LandingPage/Feature1';
import Feature2 from '@/features/LandingPage/Feature2';
import Footer from '@/features/LandingPage/Footer';
import ForWho from '@/features/LandingPage/ForWho';
import { Hero } from '@/features/LandingPage/Hero';
import { Navbar } from '@/features/LandingPage/Navbar';
import RequestDemo from '@/features/LandingPage/RequestDemo';
import Testimonials from '@/features/LandingPage/Testimonials';
import UseCase from '@/features/LandingPage/UseCase';
import WhyPhantomX from '@/features/LandingPage/WhyPhantomX';

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <ForWho />
      <UseCase />
      <WhyPhantomX />
      <Testimonials />
      <RequestDemo />
      <Footer />
    </div>
  );
};

export default LandingPage;
