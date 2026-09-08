import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm text-xs sm:text-sm font-medium text-slate-700">
      <div className="flex items-center text-amber-500 gap-0.5">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
      </div>
      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
      <span className="font-semibold text-navy-900">{siteConfig.stats.clientRating}</span>
      <span className="text-slate-500 hidden xs:inline">|</span>
      <span className="text-slate-600 font-semibold flex items-center gap-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
        Trusted Visa & Travel Support
      </span>
    </div>
  );
}
