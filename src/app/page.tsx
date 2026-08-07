"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProactiveDefense from "@/components/ProactiveDefense";
import AITeam from "@/components/AITeam";
import ProactiveFeed from "@/components/ProactiveFeed";
import PrivacySection from "@/components/PrivacySection";
import InteractiveDemo from "@/components/InteractiveDemo";
import Roadmap from "@/components/Roadmap";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative bg-[#06070C] min-h-screen text-slate-100 selection:bg-[#4F7FFF]/30 selection:text-white overflow-x-hidden">
      <Preloader onComplete={() => setLoaded(true)} />
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <ProactiveDefense />
      <AITeam />
      <ProactiveFeed />
      <PrivacySection />
      <InteractiveDemo />
      <Roadmap />
      <FinalCTA onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  );
}
