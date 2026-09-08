import React from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

interface DisclaimerBoxProps {
  className?: string;
  variant?: 'standard' | 'banner';
}

export function DisclaimerBox({ className = '', variant = 'standard' }: DisclaimerBoxProps) {
  if (variant === 'banner') {
    return (
      <div className={`bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 ${className}`}>
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <span className="font-semibold text-amber-900 block mb-0.5">Official Embassy & Regulatory Disclaimer</span>
          {siteConfig.officialDisclaimer}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-slate-900 text-slate-300 rounded-2xl p-6 border border-slate-800 shadow-xl ${className}`}>
      <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-sm sm:text-base mb-2">
        <ShieldCheck className="w-5 h-5" />
        <span>Important Legal Notice & Transparency Statement</span>
      </div>
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
        {siteConfig.officialDisclaimer}
      </p>
    </div>
  );
}
