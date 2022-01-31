import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Testimonial from '../components/Testimonial';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Quarks</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div id='home'>
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <Testimonial />
        <PricingSection />
        <FaqSection />
      </div>
    </div>
  );
}
