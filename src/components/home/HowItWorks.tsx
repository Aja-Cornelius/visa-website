import React from 'react';
import { Compass, FileText, PhoneCall, CheckCircle } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Compass className="w-6 h-6 text-brand-600" />,
      title: 'Choose Your Visa',
      description: 'Select your target destination country and the specific visa category matching your travel intent.'
    },
    {
      number: '02',
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: 'Submit Your Details',
      description: 'Fill out our secure, straightforward consultation form with your basic details and travel timeline.'
    },
    {
      number: '03',
      icon: <PhoneCall className="w-6 h-6 text-emerald-600" />,
      title: 'Speak With a Visa Manager',
      description: 'An assigned consultant reviews your profile and contacts you via phone or WhatsApp to discuss requirements.'
    },
    {
      number: '04',
      icon: <CheckCircle className="w-6 h-6 text-gold-600" />,
      title: 'Get Professional Guidance',
      description: 'Receive personalized document checklists, form filing walkthroughs, and embassy appointment preparation.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="How It Works"
          title="Simple, Transparent 4-Step Consultation Process"
          subtitle="From your initial inquiry to tailored application preparation, we guide you every step of the way."
        />

        {/* Stepper Container */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-navy-900 shadow-md flex items-center justify-center mb-6 transition-all group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Step Number Badge */}
                <span className="text-xs font-black uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full mb-3 border border-gold-200">
                  Step {step.number}
                </span>

                <h3 className="text-lg font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
