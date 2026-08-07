"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export default function Navbar({ onOpenWaitlist }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#defense" },
    { name: "Demo", href: "#demo" },
    { name: "Privacy", href: "#privacy" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#06070B]/90 backdrop-blur-md border-b border-white/8 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <a href="#" className="font-bold text-base tracking-tight text-white">
            LifeOS
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenWaitlist}
            className="hidden md:inline-flex btn-matte-primary items-center gap-1.5 px-4 py-1.5 rounded-full text-xs"
          >
            Join Waitlist
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#06070B] border-b border-white/8 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenWaitlist(); }}
                  className="btn-matte-primary w-full py-2.5 rounded-xl text-sm"
                >
                  Join the Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
