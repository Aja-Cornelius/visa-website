import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '@/data/destinations';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function PopularDestinations() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Popular Destinations"
          title="Global Visa Guidance Across Top Regions"
          subtitle="Explore our key consultation hubs for visitors, students, business delegates, and families."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-gold-500/90 text-navy-950 px-2.5 py-1 rounded-full inline-block mb-1">
                      {dest.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold">{dest.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-semibold text-navy-900">Popular Categories:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.popularVisaTypes.map((type, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-md">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <Button
                  href={`/services#${dest.id}-service`}
                  variant="ghost"
                  size="sm"
                  className="text-xs text-slate-600 hover:text-navy-900 px-2"
                >
                  Learn More
                </Button>

                <Button
                  href={`/book?destination=${dest.id}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="lg">
            View All Visa Services
          </Button>
        </div>

      </div>
    </section>
  );
}
