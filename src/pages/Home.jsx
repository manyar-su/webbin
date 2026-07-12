import LoadingScreen from '@/components/ui/LoadingScreen';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CursorGlow from '@/components/ui/CursorGlow';
import GlassNav from '@/components/ui/GlassNav';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import BackToTop from '@/components/ui/BackToTop';
import Hero from '@/components/sections/Hero';
import TechMarquee from '@/components/sections/TechMarquee';
import Stats from '@/components/sections/Stats';
import PricingCalculator from '@/components/sections/PricingCalculator';
import Features from '@/components/sections/Features';
import Portfolio from '@/components/sections/Portfolio';
import ComparisonTable from '@/components/sections/ComparisonTable';
import Pricing from '@/components/sections/Pricing';
import CaseStudies from '@/components/sections/CaseStudies';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Blog from '@/components/sections/Blog';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <GlassNav />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <PricingCalculator />
        <Features />
        <Portfolio />
        <ComparisonTable />
        <Pricing />
        <CaseStudies />
        <Process />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}