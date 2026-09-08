import React, { useState } from 'react';
import { CheckCircle, PhoneCall, MessageSquare, Copy, ArrowLeft } from 'lucide-react';
import { BookingData } from '@/types/booking';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/siteConfig';

interface BookingSuccessProps {
  booking: BookingData;
  onReset: () => void;
}

export function BookingSuccess({ booking, onReset }: BookingSuccessProps) {
  const [copied, setCopied] = useState(false);

  // Pre-filled WhatsApp message as requested in UX specifications
  const whatsappMessage = `Hello, I just submitted a visa consultation request. My name is ${booking.fullName}. I am interested in a ${booking.visaType} for ${booking.destination}. My booking reference is ${booking.bookingReference}. I would like to speak with a manager.`;

  const whatsappDeepLink = `https://wa.me/${siteConfig.whatsappNumberClean}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleCopyReference = () => {
    navigator.clipboard.writeText(booking.bookingReference);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-300">
      
      {/* Header Badge */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
          Booking Request Received!
        </h2>
        
        <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for your request. A visa manager will contact you shortly via your preferred contact method.
        </p>
      </div>

      {/* Booking Reference Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 text-center space-y-3">
        <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">
          Your Unique Confirmation Code
        </div>
        
        <div className="flex items-center justify-center gap-3">
          <span className="font-mono text-2xl sm:text-3xl font-black text-navy-900 tracking-wider">
            {booking.bookingReference}
          </span>
          <button
            onClick={handleCopyReference}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-navy-900 text-xs font-semibold flex items-center gap-1 shadow-sm transition-colors"
            title="Copy Reference"
          >
            <Copy className="w-4 h-4" />
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Please keep this reference number handy for any future inquiries.
        </p>
      </div>

      {/* Summary Recap Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
        <div>
          <span className="text-slate-500 font-medium">Applicant:</span>{' '}
          <strong className="text-navy-900">{booking.fullName}</strong>
        </div>
        <div>
          <span className="text-slate-500 font-medium">Destination:</span>{' '}
          <strong className="text-navy-900">{booking.destination}</strong>
        </div>
        <div>
          <span className="text-slate-500 font-medium">Visa Type:</span>{' '}
          <strong className="text-navy-900">{booking.visaType}</strong>
        </div>
        <div>
          <span className="text-slate-500 font-medium">Preferred Date:</span>{' '}
          <strong className="text-navy-900">{booking.consultationDate}</strong>
        </div>
      </div>

      {/* Primary Action Buttons (Call & WhatsApp) */}
      <div className="space-y-3 pt-2">
        <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Want Immediate Assistance? Speak With a Manager Now:
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            href={whatsappDeepLink}
            variant="whatsapp"
            size="lg"
            className="w-full text-sm sm:text-base py-4"
            icon={<MessageSquare className="w-5 h-5" />}
          >
            WhatsApp a Manager
          </Button>

          <Button
            href={`tel:${siteConfig.managerPhoneClean}`}
            variant="primary"
            size="lg"
            className="w-full text-sm sm:text-base py-4"
            icon={<PhoneCall className="w-5 h-5" />}
          >
            Call a Manager Now
          </Button>
        </div>
      </div>

      {/* Back / Reset Trigger */}
      <div className="text-center pt-4 border-t border-slate-100">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-navy-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Submit Another Consultation Request
        </button>
      </div>

    </div>
  );
}
