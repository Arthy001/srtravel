"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Globe, 
  Menu, 
  X, 
  MapPin,
  Calendar,
  Star,
  HelpCircle,
  Car,
  Compass,
  Briefcase
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Language, translations } from "@/lib/i18n/translations";

interface NavbarProps {
  onOpenBooking?: () => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navbar({ 
  onOpenBooking,
  lang,
  onLanguageChange
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const toggleLanguage = () => {
    onLanguageChange(lang === "th" ? "en" : "th");
  };

  const [activeSection, setActiveSection] = useState<string>("#services");

  const menuItems = [
    { label: t.services, href: "#services", icon: Briefcase },
    { label: t.popularRoutes, href: "#popular-routes", icon: Compass },
    { label: t.serviceModel, href: "#service-model", icon: Briefcase },
    { label: t.carType, href: "#car-type", icon: Car },
    { label: t.booking, href: "#booking", icon: Calendar },
    { label: t.location, href: "#location", icon: MapPin },
    { label: t.review, href: "#review", icon: Star },
    { label: t.faq, href: "#faq", icon: HelpCircle },
  ];

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ["services", "popular-routes", "service-model", "car-type", "booking", "location", "review", "faq"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-6">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {menuItems.map((item, idx) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={`px-3 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/20"
                      : "text-slate-700 hover:text-amber-600 hover:bg-amber-50/50"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Tablet/Medium Screen Navigation (Compact) */}
          <nav className="hidden md:flex xl:hidden items-center gap-1">
            {menuItems.slice(0, 5).map((item, idx) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-semibold transition ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition text-xs font-bold"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === "th" ? "TH" : "EN"}</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="sm:hidden px-2 py-1 text-xs font-bold rounded-lg border border-slate-200 text-slate-700"
            >
              {lang === "th" ? "TH" : "EN"}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation matching user's button list */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-8 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
            {t.services}
          </div>
          
          {menuItems.map((item, idx) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={idx}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                  isActive
                    ? "bg-amber-400 text-amber-950 shadow-md border border-amber-300 ring-2 ring-amber-400/50"
                    : "bg-amber-100/70 text-slate-800 hover:bg-amber-200/80 border border-amber-200/50"
                }`}
              >
                <span>{item.label}</span>
                <item.icon className="w-4 h-4 opacity-75" />
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default Navbar;
