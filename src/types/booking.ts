export type BookingStatus = 'Pending' | 'Contacted' | 'Completed' | 'Cancelled';

export type ContactMethod = 'Phone Call' | 'WhatsApp';

export interface BookingData {
  bookingReference: string;
  fullName: string;
  phone: string;
  email: string;
  countryOfResidence: string;
  destination: string;
  visaType: string;
  consultationDate: string;
  preferredContactMethod: ContactMethod;
  numberOfApplicants: string;
  message?: string;
  createdAt: string;
  status: BookingStatus;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  email: string;
  countryOfResidence: string;
  destination: string;
  visaType: string;
  consultationDate: string;
  preferredContactMethod: ContactMethod;
  numberOfApplicants: string;
  message: string;
  agreedToTerms: boolean;
}
