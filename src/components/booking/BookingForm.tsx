'use client';

import React, { useState, useEffect } from 'react';
import { User, Phone, Globe, MessageSquare, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { BookingData, BookingFormState } from '@/types/booking';
import { BookingSuccess } from './BookingSuccess';
import { Button } from '@/components/ui/Button';

interface BookingFormProps {
  initialDestination?: string;
}

export function BookingForm({ initialDestination = '' }: BookingFormProps) {
  const [submittedBooking, setSubmittedBooking] = useState<BookingData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    email: '',
    countryOfResidence: '',
    destination: initialDestination || 'United Kingdom',
    visaType: 'Tourist / Visitor Visa',
    consultationDate: '',
    preferredContactMethod: 'WhatsApp',
    numberOfApplicants: '1 Applicant',
    message: '',
    agreedToTerms: false,
  });

  useEffect(() => {
    if (initialDestination) {
      const formattedMap: Record<string, string> = {
        uk: 'United Kingdom',
        usa: 'United States',
        canada: 'Canada',
        schengen: 'Schengen / Europe',
        uae: 'United Arab Emirates',
        australia: 'Australia',
      };
      setFormData((prev) => ({
        ...prev,
        destination: formattedMap[initialDestination.toLowerCase()] || initialDestination,
      }));
    }

    // Set default consultation date to 2 days from today
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 2);
    const dateStr = futureDate.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, consultationDate: dateStr }));
  }, [initialDestination]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!formData.countryOfResidence.trim()) {
      setErrorMsg('Please enter your country of residence.');
      return;
    }
    if (!formData.agreedToTerms) {
      setErrorMsg('You must agree to be contacted regarding your visa consultation request.');
      return;
    }

    setIsSubmitting(true);

    // Generate Booking Reference (VISA-2026-XXXX)
    const randomCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    const reference = `VISA-2026-${randomCode}`;

    const newBooking: BookingData = {
      bookingReference: reference,
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      countryOfResidence: formData.countryOfResidence,
      destination: formData.destination,
      visaType: formData.visaType,
      consultationDate: formData.consultationDate,
      preferredContactMethod: formData.preferredContactMethod,
      numberOfApplicants: formData.numberOfApplicants,
      message: formData.message,
      createdAt: new Date().toISOString(),
      status: 'Pending',
    };

    // Simulate Network/API Request delay for real-world application feel
    setTimeout(() => {
      // Save locally to localStorage for mock database persistence
      try {
        const existing = JSON.parse(localStorage.getItem('vanguard_bookings') || '[]');
        localStorage.setItem('vanguard_bookings', JSON.stringify([newBooking, ...existing]));
      } catch (err) {
        console.error('LocalStorage write error', err);
      }

      setIsSubmitting(false);
      setSubmittedBooking(newBooking);
    }, 1200);
  };

  if (submittedBooking) {
    return (
      <BookingSuccess
        booking={submittedBooking}
        onReset={() => setSubmittedBooking(null)}
      />
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto">
      
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Section 1: Personal Information */}
        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <User className="w-5 h-5 text-brand-600" />
            <h3 className="text-lg font-bold text-navy-900">Personal Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number (with Country Code) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 555 234 5678"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. eleanor@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Country of Residence <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="countryOfResidence"
                value={formData.countryOfResidence}
                onChange={handleChange}
                placeholder="e.g. Nigeria, India, UAE, UK"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium transition-all"
                required
              />
            </div>
          </div>
        </div>

        {/* Section 2: Visa Information */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-brand-600" />
            <h3 className="text-lg font-bold text-navy-900">Visa Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Destination Country <span className="text-red-500">*</span>
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium bg-white transition-all"
              >
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Schengen / Europe">Schengen / Europe</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Australia">Australia</option>
                <option value="Other Destination">Other Country</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Visa Category / Type <span className="text-red-500">*</span>
              </label>
              <select
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium bg-white transition-all"
              >
                <option value="Tourist / Visitor Visa">Tourist / Visitor Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Business / Work Visa">Business / Work Visa</option>
                <option value="Family Visit / Super Visa">Family Visit / Super Visa</option>
                <option value="Transit Visa">Transit Visa</option>
                <option value="Other Visa Category">Other / General Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Consultation Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="consultationDate"
                value={formData.consultationDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium bg-white transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Contact Method <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3 pt-1">
                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer text-xs sm:text-sm font-semibold transition-all ${
                    formData.preferredContactMethod === 'WhatsApp'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="WhatsApp"
                    checked={formData.preferredContactMethod === 'WhatsApp'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </label>

                <label
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer text-xs sm:text-sm font-semibold transition-all ${
                    formData.preferredContactMethod === 'Phone Call'
                      ? 'border-navy-900 bg-navy-50 text-navy-900 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="Phone Call"
                    checked={formData.preferredContactMethod === 'Phone Call'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <Phone className="w-4 h-4 text-navy-900" />
                  <span>Phone Call</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Additional Details */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Number of Applicants
              </label>
              <select
                name="numberOfApplicants"
                value={formData.numberOfApplicants}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium bg-white transition-all"
              >
                <option value="1 Applicant">1 Applicant (Solo)</option>
                <option value="2 Applicants">2 Applicants (Couple / Pair)</option>
                <option value="3-5 Applicants">3–5 Applicants (Family)</option>
                <option value="Group (6+)">Group (6+ Applicants)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Additional Notes / Message (Optional)
              </label>
              <textarea
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention travel dates, previous visa history, or specific questions..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 text-sm font-medium transition-all"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Section 4: Consent Checkbox & Submit */}
        <div className="space-y-5 pt-4 border-t border-slate-100">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-navy-900 border-slate-300 rounded focus:ring-navy-900 cursor-pointer"
            />
            <span className="text-xs sm:text-sm text-slate-600 group-hover:text-navy-900 transition-colors">
              I agree to be contacted regarding my visa consultation request and confirm that all details provided are accurate.
            </span>
          </label>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            disabled={isSubmitting || !formData.agreedToTerms}
            className="w-full text-base py-4 font-bold"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            {isSubmitting ? 'Processing Request...' : 'Submit Booking Request'}
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Confidential • Professional Visa Consultation</span>
          </div>
        </div>

      </form>

    </div>
  );
}
