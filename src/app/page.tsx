import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FeatureCards } from '@/components/home/FeatureCards';
import { PopularDestinations } from '@/components/home/PopularDestinations';
import { HowItWorks } from '@/components/home/HowItWorks';
import { FinalCTA } from '@/components/home/FinalCTA';
import { DisclaimerBox } from '@/components/ui/DisclaimerBox';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureCards />
      <PopularDestinations />
      <HowItWorks />
      
      {/* Mid-page Disclaimer Container */}
      <section className="py-8 bg-slate-100 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <DisclaimerBox variant="banner" />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
