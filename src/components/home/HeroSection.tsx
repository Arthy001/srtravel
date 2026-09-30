"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Car, 
  MapPin, 
  Search,
  Calendar,
  Globe
} from "lucide-react";
import { Language, translations } from "@/lib/i18n/translations";

interface HeroSectionProps {
  lang: Language;
  onSearch: (params: {
    pickup: string;
    dropoff: string;
    dates: string;
    isDifferentDropoff: boolean;
  }) => void;
}

export function HeroSection({ lang, onSearch }: HeroSectionProps) {
  const t = translations[lang].hero;
  const [isDifferentDropoff, setIsDifferentDropoff] = useState(true);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dateRange, setDateRange] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      pickup: pickupLocation,
      dropoff: isDifferentDropoff ? dropoffLocation : pickupLocation,
      dates: dateRange,
      isDifferentDropoff,
    });
  };

  return (
    <section className="relative pt-6 pb-20 lg:pb-28 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-100/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 right-[-5%] w-[450px] h-[450px] rounded-full bg-indigo-100/40 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline Left + Photo Collage Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 pb-12 lg:pb-16">
          
          {/* Left Headline */}
          <div className="lg:col-span-6 space-y-5">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs sm:text-sm font-bold border border-amber-200/80 shadow-xs">
              <span>{t.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              {t.title}
            </h1>

            {t.subtitle && (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {t.subtitle}
              </p>
            )}

            {/* Badges / Metrics */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 text-sm font-medium pt-1">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-slate-100 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                </div>
                <span>{t.verified}</span>
              </div>
            </div>
          </div>

          {/* Right Image Collage matching template layout with actual fleet cars */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3.5 h-[340px] sm:h-[380px]">
              {/* Left Column of collage (2 stacked images) */}
              <div className="flex flex-col gap-3.5 h-full">
                {/* Top: Toyota Commuter */}
                <div className="relative flex-1 rounded-2xl overflow-hidden group shadow-sm bg-slate-100">
                  <img
                    src="/cars/comuter.jpg"
                    alt="Toyota Commuter VIP Van"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-xs">
                    Toyota Commuter
                  </span>
                </div>

                {/* Bottom: Toyota Fortuner */}
                <div className="relative flex-1 rounded-2xl overflow-hidden group shadow-sm bg-slate-100">
                  <img
                    src="/cars/fortuner.webp"
                    alt="Toyota Fortuner SUV"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-xs">
                    Toyota Fortuner
                  </span>
                </div>
              </div>

              {/* Right Column: Tall vertical Toyota Alphard VIP */}
              <div className="relative h-full rounded-2xl overflow-hidden group shadow-sm bg-slate-100">
                <img
                  src="/cars/alphard.webp"
                  alt="Toyota Alphard VIP First Class"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  Toyota Alphard VIP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Card - Hidden for now */}
        {/*
        <div className="relative mt-8 sm:mt-10 lg:mt-12 z-20">
          <div className="bg-white rounded-3xl sm:rounded-[36px] px-6 sm:px-8 py-6 sm:py-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 max-w-5xl mx-auto">
            ...
          </div>
        </div>
        */}
      </div>
    </section>
  );
}

export default HeroSection;
