import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LifeOS — AI Operating System for Life",
  description:
    "Meet LifeOS. The AI that quietly watches over your finances, health, schedule, subscriptions, and daily life—preventing problems before they happen.",
  keywords: [
    "LifeOS",
    "AI Operating System",
    "Proactive AI",
    "Personal Intelligence",
    "Automated Finance",
    "Health AI",
  ],
  authors: [{ name: "LifeOS Inc." }],
  openGraph: {
    title: "LifeOS — AI Operating System for Life",
    description: "The AI that manages life before problems happen.",
    type: "website",
    url: "https://lifeos.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeOS — AI Operating System for Life",
    description: "AI that quietly watches over your finances, health, and daily life.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} dark scroll-smooth`}>
      <body className="bg-[#040711] text-slate-100 font-sans min-h-screen antialiased selection:bg-[#4F7FFF]/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
