'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/siteConfig';

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormSent(true);
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumberClean}?text=${encodeURIComponent(
    'Hello, I would like to inquire about visa consultation services.'
  )}`;

  return (
    <main className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <SectionHeader
          badge="Get in Touch"
          title="Let's Talk About Your Visa Journey"
          subtitle="Have questions about visa requirements, travel dates, or document preparation? Our team is here to assist you."
        />

        {/* Two Prominent Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Call a Manager */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-premium transition-all text-center space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mx-auto shadow-md">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Call a Manager</h3>
              <p className="text-sm text-slate-600">
                Speak directly with our visa team for immediate phone consultation.
              </p>
              <div className="font-mono text-lg font-bold text-navy-900">
                {siteConfig.managerPhoneDisplay}
              </div>
            </div>

            <Button
              href={`tel:${siteConfig.managerPhoneClean}`}
              variant="primary"
              size="md"
              className="w-full mt-4"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Now
            </Button>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-premium transition-all text-center space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">WhatsApp Consultation</h3>
              <p className="text-sm text-slate-600">
                Chat with a visa manager on WhatsApp for instant guidance and document feedback.
              </p>
              <div className="font-mono text-lg font-bold text-emerald-700">
                {siteConfig.whatsappNumberDisplay}
              </div>
            </div>

            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="md"
              className="w-full mt-4"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Chat on WhatsApp
            </Button>
          </div>

        </div>

        {/* Contact Info & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto pt-6">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-fit">
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-navy-900">Contact Information</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Reach out during our office hours or send us a message anytime.
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Phone Line</div>
                  <div className="font-semibold text-navy-900">{siteConfig.managerPhoneDisplay}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">WhatsApp</div>
                  <div className="font-semibold text-navy-900">{siteConfig.whatsappNumberDisplay}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Email Address</div>
                  <div className="font-semibold text-navy-900 break-all">{siteConfig.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Office Location</div>
                  <div className="font-semibold text-navy-900">{siteConfig.officeAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Business Hours</div>
                  <div className="font-semibold text-navy-900 text-xs leading-relaxed">{siteConfig.businessHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            
            {formSent ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Message Sent!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. A visa manager will respond to your message shortly.
                </p>
                <Button onClick={() => setFormSent(false)} variant="outline" size="sm">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 mb-6">
                  <h3 className="text-xl font-extrabold text-navy-900">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-500">Fill in the fields below and we will respond within 24 hours.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 text-sm font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactData.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +1 555 019 2834"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 text-sm font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={contactData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. UK Visitor Visa Query"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={contactData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can our visa managers assist you?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-navy-900 text-sm font-medium"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={loading}
                  disabled={loading}
                  className="w-full font-bold"
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Message
                </Button>
              </form>
            )}

          </div>

        </div>

        {/* Map / Location Placeholder Visual */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-600" />
              <h3 className="font-bold text-navy-900">Headquarters Location</h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">{siteConfig.officeAddress}</span>
          </div>

          <div className="relative aspect-[21/7] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 flex items-center justify-center text-white">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
              alt="Global Office Map Visualization"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-[2px]"></div>
            
            <div className="relative z-10 text-center space-y-2 p-4">
              <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="font-bold text-base sm:text-lg">Vanguard Visa Consultancy Headquarters</div>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Appointments available Monday through Saturday. Online consultations available globally via Phone & WhatsApp.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
