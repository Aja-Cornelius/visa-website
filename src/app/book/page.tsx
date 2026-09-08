import React, { Suspense } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BookingForm } from '@/components/booking/BookingForm';
import { DisclaimerBox } from '@/components/ui/DisclaimerBox';

export const metadata = {
  title: 'Book a Visa Consultation | Vanguard Visa Consultancy',
  description: 'Book a professional visa consultation with an experienced visa manager. Tell us about your travel plans and get expert guidance.',
};

export default function BookPage() {
  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Online Consultation Booking"
          title="Book a Visa Consultation"
          subtitle="Tell us about your travel plans and a visa manager will contact you."
        />

        {/* Form Container with Suspense boundary */}
        <Suspense fallback={
          <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto text-center space-y-4">
            <div className="animate-spin w-8 h-8 border-4 border-navy-900 border-t-transparent rounded-full mx-auto"></div>
            <p className="text-sm font-medium text-slate-600">Loading booking form...</p>
          </div>
        }>
          <BookingForm />
        </Suspense>

        {/* Embassy Disclaimer */}
        <div className="max-w-4xl mx-auto">
          <DisclaimerBox variant="standard" />
        </div>

      </div>
    </main>
  );
}
