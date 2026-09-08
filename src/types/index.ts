export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  flagCode?: string;
  popularVisaTypes: string[];
  processingEstimate: string;
  keyRequirements: string[];
}

export interface VisaService {
  id: string;
  destinationId: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  eligibility: string[];
  includedFeatures: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
}
