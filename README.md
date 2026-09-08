# Vanguard Visa Consultancy & Guidance Platform

A modern, responsive **Visa Booking & Consultation Web Application** built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.

---

## 🚀 Features

- **5 Dedicated Pages**:
  - **Home (`/`)**: Hero section, trust badges, core features, 6 destination cards, consultation stepper, and final CTA.
  - **Visa Services (`/services`)**: In-depth breakdowns for UK, USA, Canada, Schengen, UAE, and Australia visas.
  - **Book Consultation (`/book`)**: Full consultation request form with destination pre-selection via URL params (e.g. `/book?destination=uk`), validation, unique confirmation reference code generation (`VISA-2026-XXXX`), and instant WhatsApp deep links.
  - **About Us (`/about`)**: Company mission, 4 operational pillars, 4-phase consultation roadmap, and visa consultant profiles.
  - **Contact (`/contact`)**: Instant-call and WhatsApp action cards, interactive direct message form, business hours, and office map.

- **Centralized Configuration**:
  - All company contact details, manager phone numbers, WhatsApp links, and official embassy disclaimers are managed from `src/config/siteConfig.ts`.

- **Responsive & Accessible**:
  - Desktop floating WhatsApp quick-contact widget.
  - Mobile bottom floating bar for instant 1-tap WhatsApp consultation or phone calling.
  - Fully responsive across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Frontend Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 💻 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 2. Run Development Server
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📜 License
This project is licensed under the MIT License.
