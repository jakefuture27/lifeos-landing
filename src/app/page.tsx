"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import AmbientCanvas from "@/components/AmbientCanvas";
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
      {/* Dogstudio Style Preloader Screen */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Ambient Canvas */}
      <AmbientCanvas />

      {/* Navigation Header */}
      <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Section 2: Proactive Defense */}
      <ProactiveDefense />

      {/* Section 3: Your AI Team */}
      <AITeam />

      {/* Section 4: Proactive Intelligence Feed */}
      <ProactiveFeed />

      {/* Section 5: Built on Privacy */}
      <PrivacySection />

      {/* Section 6: Interactive Demo */}
      <InteractiveDemo />

      {/* Section 7: Roadmap */}
      <Roadmap />

      {/* Section 8: Final CTA */}
      <FinalCTA onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Global Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </main>
  );
}
