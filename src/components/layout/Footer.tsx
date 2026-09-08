import React from 'react';
import Link from 'next/link';
import { Globe, Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Visa Services', href: '/services' },
    { name: 'Book Consultation', href: '/book' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const visaServices = [
    { name: 'UK Visa Assistance', href: '/services#uk-visa-service' },
    { name: 'USA Visa Assistance', href: '/services#usa-visa-service' },
    { name: 'Canada Visa Assistance', href: '/services#canada-visa-service' },
    { name: 'Schengen Visa Assistance', href: '/services#schengen-visa-service' },
    { name: 'UAE Visa Assistance', href: '/services#uae-visa-service' },
    { name: 'Australia Visa Assistance', href: '/services#australia-visa-service' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Vanguard<span className="text-gold-400">Visa</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                  Consultancy & Guidance
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumberClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold hover:bg-emerald-900 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Us Directly
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 tracking-wider uppercase text-xs text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h3 className="font-bold mb-4 tracking-wider uppercase text-xs text-gold-400">
              Visa Destinations
            </h3>
            <ul className="space-y-2.5 text-sm">
              {visaServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-slate-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold mb-4 tracking-wider uppercase text-xs text-gold-400">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{siteConfig.managerPhoneDisplay}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span className="break-all">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{siteConfig.officeAddress}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{siteConfig.businessHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="py-6 border-b border-navy-900 text-slate-400 text-xs leading-relaxed flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300 font-medium">Embassy Disclaimer: </strong>
            {siteConfig.officialDisclaimer}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Visa Disclaimer
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
