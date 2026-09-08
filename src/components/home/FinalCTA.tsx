import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/siteConfig';

export function FinalCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumberClean}?text=${encodeURIComponent(
    'Hello, I am ready to begin my visa journey and would like to speak with a manager.'
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background Lighting Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30">
          Start Your Consultation Today
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Ready to Begin Your Visa Journey?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Speak with one of our visa managers and get guidance tailored to your specific travel plans, timeline, and document requirements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href="/book"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Book Now
          </Button>

          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
            icon={<MessageSquare className="w-5 h-5" />}
          >
            WhatsApp a Manager
          </Button>
        </div>

        <p className="text-xs text-slate-400 pt-2">
          Prefer to talk on the phone? Call us directly at{' '}
          <a href={`tel:${siteConfig.managerPhoneClean}`} className="text-amber-400 font-bold hover:underline">
            {siteConfig.managerPhoneDisplay}
          </a>
        </p>

      </div>
    </section>
  );
}
