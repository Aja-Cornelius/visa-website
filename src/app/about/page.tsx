import React from 'react';
import { Award, ShieldCheck, HeartHandshake, ArrowRight, UserCheck } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TEAM_MEMBERS } from '@/data/team';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'About Us | Vanguard Visa Consultancy',
  description: 'Learn about Vanguard Visa Consultancy, our mission, experienced visa managers, and client-centric approach.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Professional Guidance',
      desc: 'Our consultants maintain up-to-date knowledge of changing global immigration and travel document guidelines.',
      icon: <Award className="w-6 h-6 text-gold-500" />
    },
    {
      title: 'Personalized Service',
      desc: 'Every applicant receives custom advice matching their unique travel history, financial dossier, and target country.',
      icon: <UserCheck className="w-6 h-6 text-brand-600" />
    },
    {
      title: 'Transparent Process',
      desc: 'No hidden fees or ambiguous claims. We provide upfront clarity on document requirements and consultation scope.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      title: 'Dedicated Support',
      desc: 'Direct communication with your assigned visa manager via phone or WhatsApp throughout your application preparation.',
      icon: <HeartHandshake className="w-6 h-6 text-indigo-600" />
    }
  ];

  const processFlow = [
    { step: '01', title: 'Consultation', desc: 'Initial review of travel intent, visa category eligibility, and timeline.' },
    { step: '02', title: 'Document Preparation', desc: 'Detailed checklist auditing, cover letter layouts, and financial dossier structure.' },
    { step: '03', title: 'Application Guidance', desc: 'Step-by-step guidance for form submission and embassy appointment scheduling.' },
    { step: '04', title: 'Follow-up Support', desc: 'Post-submission check-ins, interview coaching, and ongoing client communication.' }
  ];

  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Our Company"
          title="About Our Visa Consultancy"
          subtitle="We provide visa consultation and application support designed to make international travel requirements easier to understand and navigate."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="space-y-5 text-slate-600">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md">
              Who We Are
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
              Empowering Travelers with Clarity, Accuracy & Peace of Mind
            </h3>
            <p className="leading-relaxed">
              At Vanguard Visa Consultancy, we understand that securing international travel authorization can often feel overwhelming due to intricate embassy guidelines and strict documentation criteria.
            </p>
            <p className="leading-relaxed">
              Our team of dedicated visa consultants acts as your trusted partner—helping you organize your application materials, review required forms, and prepare thoroughly before submitting to relevant authorities.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy-950">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Visa Consultants Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-navy-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">Our Core Mission</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold italic leading-snug">
            "To make international travel more accessible by providing clear, professional and personalized visa guidance."
          </h2>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Why Clients Choose Vanguard Visa"
          subtitle="Four foundational commitments that define our client experience."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
                {p.icon}
              </div>
              <h4 className="font-bold text-lg text-navy-900 mb-2">{p.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Blueprint"
          title="Our Consultation Process"
          subtitle="A structured 4-phase journey built for thoroughness and peace of mind."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processFlow.map((proc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="text-3xl font-black text-slate-200 mb-2">Phase {proc.step}</div>
              <h4 className="font-bold text-base text-navy-900 mb-2">{proc.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experienced Team Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Meet Our Experts"
          title="Experienced Visa Managers"
          subtitle="Our seasoned advisors bring years of practical experience across major global destinations."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-hover transition-all">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] font-extrabold text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {member.experience}
                </span>
                <h4 className="text-xl font-bold text-navy-900">{member.name}</h4>
                <div className="text-xs font-semibold text-brand-600">{member.role}</div>
                <div className="text-xs text-slate-500 font-medium">Specialty: {member.specialty}</div>
                <p className="text-xs text-slate-600 pt-2 border-t border-slate-100 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/book" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Book a Consultation With Our Team
          </Button>
        </div>
      </section>

    </main>
  );
}
