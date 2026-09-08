import React from 'react';
import { Award, Zap, UserCheck, MessageSquare } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function FeatureCards() {
  const features = [
    {
      icon: <Award className="w-7 h-7 text-gold-500" />,
      title: 'Expert Guidance',
      description: 'Our experienced visa consultants analyze your unique travel background to ensure requirements are fully understood.'
    },
    {
      icon: <Zap className="w-7 h-7 text-brand-600" />,
      title: 'Simple Process',
      description: 'Clear, step-by-step instructions that take the confusion and stress out of preparing your visa dossier.'
    },
    {
      icon: <UserCheck className="w-7 h-7 text-emerald-600" />,
      title: 'Personalized Support',
      description: 'Tailored advice matched to your target destination, whether for holiday, business, study, or family visit.'
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-indigo-600" />,
      title: 'Reliable Communication',
      description: 'Direct phone & WhatsApp access to your assigned visa manager throughout your consultation timeline.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Why Choose Us"
          title="Designed for Clarity, Built on Trust"
          subtitle="We combine deep visa policy insight with responsive client care to simplify your international journey."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center text-xs font-semibold text-slate-400 group-hover:text-navy-900 transition-colors">
                <span>Core Pillar #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
