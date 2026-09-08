import React from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TrustBadge } from '@/components/ui/TrustBadge';
import { siteConfig } from '@/config/siteConfig';

export function HeroSection() {

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-brand-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-gold-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Trust Indicator Pill */}
            <div>
              <TrustBadge />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
              Your Journey Starts With the Right <span className="gradient-heading">Visa Guidance</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Professional visa consultation and application support to help make your international travel journey simpler, clearer, and more confident.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/book"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Book a Consultation
              </Button>

              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Visa Services
              </Button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-navy-900">{siteConfig.stats.consultationsCount}</div>
                <div className="text-xs text-slate-500 font-medium">Consultations Provided</div>
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-navy-900">{siteConfig.stats.successRate}</div>
                <div className="text-xs text-slate-500 font-medium">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-navy-900">{siteConfig.stats.countriesCovered}</div>
                <div className="text-xs text-slate-500 font-medium">Destinations Supported</div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
                  alt="Airport Departure & Visa Travel Consultation"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Trusted Worldwide
                  </div>
                  <div className="text-base font-bold">
                    Official Visa Consultation & Guidance
                  </div>
                </div>
              </div>

              {/* Floating Card 1 (Top Left) */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-900">Document Audit Ready</div>
                  <div className="text-[11px] text-slate-500">Fast Checklist Review</div>
                </div>
              </div>

              {/* Floating Card 2 (Bottom Right) */}
              <div className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-4 rounded-2xl shadow-2xl border border-navy-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold">Dedicated Managers</div>
                  <div className="text-[11px] text-slate-300">Direct WhatsApp & Call</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
