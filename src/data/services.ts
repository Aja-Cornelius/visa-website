import { VisaService } from '@/types';

export const VISA_SERVICES: VisaService[] = [
  {
    id: 'uk-visa-service',
    destinationId: 'uk',
    title: 'UK Visa Assistance',
    category: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Support for visitors, students, business travelers and other eligible applicants seeking UK visas.',
    fullDescription: 'Our UK visa consultation covers full document verification, checklist auditing, online application support, and guidance for booking appointments at UKVI VFS/TLS centres.',
    eligibility: ['Tourist & Holiday Seekers', 'Enrolled International Students', 'Business Delegates & Conference Attendees', 'Family Visitors'],
    includedFeatures: ['Document Audit & Checklist', 'Form Assistance', 'VFS Appointment Booking Guide', 'Cover Letter Templates']
  },
  {
    id: 'usa-visa-service',
    destinationId: 'usa',
    title: 'USA Visa Assistance',
    category: 'United States',
    image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Professional guidance for applicants preparing for their US visa process and embassy interview.',
    fullDescription: 'Navigating the DS-160 and US Embassy interview requires meticulous detail. We guide you through form review, fee payment steps, and mock interview coaching.',
    eligibility: ['B1/B2 Tourist & Business Travelers', 'F-1 Academic & Language Students', 'J-1 Exchange Visitors', 'C1/D Transit & Crew'],
    includedFeatures: ['DS-160 Form Review', 'Interview Prep Coaching', 'MRV Fee Payment Steps', 'Supporting Document Structuring']
  },
  {
    id: 'canada-visa-service',
    destinationId: 'canada',
    title: 'Canada Visa Assistance',
    category: 'Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Guidance for visitors, students and other eligible applicants preparing Canadian visa applications.',
    fullDescription: 'Canadian immigration demands clear proof of financial support and strong ties to your home country. We help structure your dossier for maximum clarity.',
    eligibility: ['Temporary Resident Visa (TRV) Applicants', 'Study Permit Seekers', 'Super Visa Parents/Grandparents', 'eTA Travelers'],
    includedFeatures: ['IRCC Portal Setup Guide', 'Proof of Financial Ties Structuring', 'Sponsorship Verification', 'Biometrics Scheduling Support']
  },
  {
    id: 'schengen-visa-service',
    destinationId: 'schengen',
    title: 'Schengen Visa Assistance',
    category: 'Schengen / Europe',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Assistance with visa preparation for travel across participating European countries.',
    fullDescription: 'Travel freely across 27 European countries with a properly compiled Schengen application. We help identify the correct embassy jurisdiction and organize mandatory travel insurance.',
    eligibility: ['European Vacationers', 'Business & Trade Fair Delegates', 'Short Study / Training Participants', 'Culture & Sports Visitors'],
    includedFeatures: ['Embassy Jurisdiction Check', 'Travel Insurance Criteria Check', 'Itinerary & Flight Reservation Layout', 'BLS / VFS Checklist Audit']
  },
  {
    id: 'uae-visa-service',
    destinationId: 'uae',
    title: 'UAE Visa Assistance',
    category: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Visa assistance for travelers visiting Dubai, Abu Dhabi, and the United Arab Emirates.',
    fullDescription: 'Fast, hassle-free entry permit consultation for tourist stays in Dubai and Abu Dhabi. We ensure passport specs and photographs conform to GDRFA / ICP standards.',
    eligibility: ['30-Day Tourist Visitors', '60-Day Extended Holiday Seekers', 'Transit Passengers', 'Business Consultation Guests'],
    includedFeatures: ['Pre-submission Photo & Passport Check', 'Entry Permit Application Guide', 'Overstay Avoidance Briefing', 'Express Support']
  },
  {
    id: 'australia-visa-service',
    destinationId: 'australia',
    title: 'Australia Visa Assistance',
    category: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Professional consultation and application guidance for eligible Australian travelers.',
    fullDescription: 'Subclass 600 visitor visas require detailed evidence of genuine temporary stay. We provide specialized consulting on compiling financial and employment documentation.',
    eligibility: ['Tourist Stream (Subclass 600)', 'eVisitor (Subclass 651)', 'Student Visa (Subclass 500)', 'Business Visitor Stream'],
    includedFeatures: ['ImmiAccount Filing Walkthrough', 'Genuine Temporary Entrant Statement Guide', 'Financial Dossier Layout', 'Health Check Info']
  }
];
