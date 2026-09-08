import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Professional Visa Guidance`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "visa consultation",
    "visa guidance",
    "UK visa assistance",
    "USA visa guidance",
    "Canada visa consultation",
    "Schengen visa",
    "UAE visa",
    "Australia visa",
    "travel consultation",
    "visa managers"
  ],
  authors: [{ name: siteConfig.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between selection:bg-brand-500 selection:text-white">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
