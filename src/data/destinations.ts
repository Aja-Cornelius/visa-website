import { Destination } from '@/types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'uk',
    name: 'United Kingdom',
    subtitle: 'Standard Visitor, Student & Skilled Worker Visas',
    description: 'Comprehensive consultation for travel to England, Scotland, Wales, and Northern Ireland.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    popularVisaTypes: ['Standard Visitor Visa', 'Student Visa (Tier 4)', 'Business / Work Visa', 'Family & Partner Visa'],
    processingEstimate: '3 – 6 Weeks (Standard)',
    keyRequirements: ['Valid Passport', 'Proof of Funds', 'Travel Itinerary', 'Accommodation Details']
  },
  {
    id: 'usa',
    name: 'United States',
    subtitle: 'B1/B2 Visitor, F-1 Student & Business Visas',
    description: 'Expert guidance through DS-160 application form completion and embassy interview preparation.',
    image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=1200&auto=format&fit=crop',
    popularVisaTypes: ['B1/B2 Tourism & Business', 'F-1 Student Visa', 'Exchange Visitor (J-1)', 'Transit Visa'],
    processingEstimate: 'Interview Date Dependent',
    keyRequirements: ['DS-160 Confirmation', 'Embassy Appointment', 'Financial Evidence', 'Ties to Home Country']
  },
  {
    id: 'canada',
    name: 'Canada',
    subtitle: 'Visitor Visa, Study Permit & eTA',
    description: 'Guidance for visitors, students, and family reunification applicants navigating Canadian immigration.',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop',
    popularVisaTypes: ['Visitor Visa (TRV)', 'Study Permit', 'Super Visa for Parents', 'Business Visitor'],
    processingEstimate: '2 – 8 Weeks',
    keyRequirements: ['Biometrics', 'Proof of Financial Support', 'Purpose of Travel', 'Letter of Invitation']
  },
  {
    id: 'schengen',
    name: 'Schengen / Europe',
    subtitle: '27 European Border-Free Nations',
    description: 'Assistance with Schengen visa preparation for European tourism, business, and short-stay travel.',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
    popularVisaTypes: ['Tourist Schengen Visa', 'Business Schengen Visa', 'Family Member Visa', 'Airport Transit'],
    processingEstimate: '15 – 30 Business Days',
    keyRequirements: ['Schengen Travel Insurance (€30,000 cov)', 'Flight Reservations', 'Hotel Booking', 'Bank Statements']
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    subtitle: 'Dubai & Abu Dhabi Tourist & Business Visas',
    description: 'Fast-track visa consultation and document support for visiting Dubai and the wider UAE.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    popularVisaTypes: ['30-Day Tourist Visa', '60-Day Tourist Visa', 'Multi-Entry Entry Permit', 'Transit Visa'],
    processingEstimate: '3 – 5 Business Days',
    keyRequirements: ['Passport Copy (6-mo validity)', 'Passport Photograph', 'Return Flight Ticket']
  },
  {
    id: 'australia',
    name: 'Australia',
    subtitle: 'Visitor Visa (Subclass 600) & Student Visas',
    description: 'Professional guidance for Australian visitor visas, student documentation, and business travel.',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop',
    popularVisaTypes: ['Visitor Visa (Subclass 600)', 'eVisitor (Subclass 651)', 'Student Visa (Subclass 500)', 'Working Holiday'],
    processingEstimate: '2 – 6 Weeks',
    keyRequirements: ['Health & Character Docs', 'Genuine Temporary Entrant Proof', 'Financial Capability']
  }
];
