import React from 'react';
import { ArrowRight, CheckCircle2, FileCheck, Info } from 'lucide-react';
import { VISA_SERVICES } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { DisclaimerBox } from '@/components/ui/DisclaimerBox';

export const metadata = {
  title: 'Visa Services | Vanguard Visa Consultancy',
  description: 'Explore our comprehensive visa consultation and application support services for UK, USA, Canada, Schengen, UAE, and Australia.',
};

export default function VisaServicesPage() {
  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <SectionHeader
          badge="Visa Services & Guidance"
          title="Visa Services"
          subtitle="Explore our visa consultation and application support services tailored to your international travel goals."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {VISA_SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[21/9] overflow-hidden bg-navy-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/40 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider bg-brand-600 text-white px-3 py-1 rounded-full inline-block mb-1.5 shadow-sm">
                        {service.category} Category
                      </span>
                      <h3 className="text-2xl font-extrabold">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>

                  {/* Included Services Checklist */}
                  <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-navy-900 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-brand-600" />
                      What Our Consultation Includes:
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.includedFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Applicants */}
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Eligible Traveler Categories:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.eligibility.map((item, i) => (
                        <span key={i} className="text-xs bg-brand-50 text-brand-800 font-medium px-2.5 py-1 rounded-lg border border-brand-200/60">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>Personalized guidance by visa manager</span>
                </div>

                <Button
                  href={`/book?destination=${service.destinationId}`}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Consultation
                </Button>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer Section near Bottom */}
        <div className="pt-6">
          <DisclaimerBox variant="standard" />
        </div>

      </div>
    </main>
  );
}
