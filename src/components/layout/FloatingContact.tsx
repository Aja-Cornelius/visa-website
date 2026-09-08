'use client';

import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumberClean}?text=${encodeURIComponent(
    'Hello, I would like to inquire about visa consultation and application guidance.'
  )}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {isOpen && (
          <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 w-72 animate-in fade-in slide-in-from-bottom-5 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-navy-900 text-sm">Visa Manager Online</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Close popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">
              Have questions about your visa destination or required documents? Speak directly with a manager!
            </p>

            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${siteConfig.managerPhoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-navy-900 rounded-xl font-semibold text-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {siteConfig.managerPhoneDisplay}
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-500 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
          aria-label="Contact Visa Manager"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </button>
      </div>

      {/* Mobile Bottom Floating Action Bar */}
      <div className="fixed bottom-3 left-3 right-3 z-40 sm:hidden flex items-center gap-2 p-1.5 bg-navy-950/95 backdrop-blur-md rounded-2xl shadow-2xl border border-navy-800">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm active:scale-[0.98] transition-all"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href={`tel:${siteConfig.managerPhoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-white text-navy-900 rounded-xl text-xs font-bold shadow-sm active:scale-[0.98] transition-all"
        >
          <Phone className="w-4 h-4 shrink-0 text-navy-900" />
          <span>Call Manager</span>
        </a>
      </div>
    </>
  );
}
