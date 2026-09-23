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

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-slate-100 text-slate-700">
                  <Car className="w-4 h-4 text-slate-700" />
                </div>
                <span>{t.available}</span>
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

        {/* Search Bar Card - Positioned nicely below Hero without overlapping photos */}
        <div className="relative mt-8 sm:mt-10 lg:mt-12 z-20">
          <div className="bg-white rounded-3xl sm:rounded-[36px] px-6 sm:px-8 py-6 sm:py-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-100 max-w-5xl mx-auto">
            
            {/* Top Tag / Button */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold bg-black text-white shadow-xs">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                {t.tabCertified}
              </span>
            </div>

            {/* Subtle Divider Line */}
            <div className="h-px bg-slate-100 mb-3" />

            {/* Inputs Form: Seamless horizontal row matching mockup */}
            <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
              
              {/* Column 1: Brand or Model */}
              <div className="w-full md:flex-1 flex items-center gap-3.5 py-2 md:py-1 pr-4 group cursor-pointer">
                {/* SVG Car Icon */}
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>

                <div className="flex-1 min-w-0">
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder={t.placeholderVehicle}
                    className="w-full text-base sm:text-[17px] font-bold text-slate-900 placeholder:text-slate-900 bg-transparent border-none p-0 focus:outline-none focus:ring-0 leading-tight"
                  />
                  <div className="text-[12px] text-slate-400 font-normal mt-0.5 leading-none">{t.searchVehicle}</div>
                </div>
              </div>

              {/* Vertical Divider 1 */}
              <div className="hidden md:block w-px h-11 bg-slate-100 shrink-0 mx-2" />

              {/* Column 2: Location & Branch */}
              <div className="w-full md:flex-1 flex items-center gap-3.5 py-2 md:py-1 px-0 md:px-4 group cursor-pointer">
                {/* SVG Pin Icon */}
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <div className="flex-1 min-w-0">
                  <input
                    type="text"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    placeholder={t.placeholderLocation}
                    className="w-full text-base sm:text-[17px] font-bold text-slate-900 placeholder:text-slate-900 bg-transparent border-none p-0 focus:outline-none focus:ring-0 leading-tight"
                  />
                  <div className="text-[12px] text-slate-400 font-normal mt-0.5 leading-none">{t.locationBranch}</div>
                </div>
              </div>

              {/* Vertical Divider 2 */}
              <div className="hidden md:block w-px h-11 bg-slate-100 shrink-0 mx-2" />

              {/* Column 3: Price & Installment */}
              <div className="w-full md:flex-1 flex items-center gap-3.5 py-2 md:py-1 px-0 md:px-4 group cursor-pointer">
                {/* Badge Tag Icon */}
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>

                <div className="flex-1 min-w-0">
                  <input
                    type="text"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    placeholder={t.placeholderPrice}
                    className="w-full text-base sm:text-[17px] font-bold text-slate-900 placeholder:text-slate-900 bg-transparent border-none p-0 focus:outline-none focus:ring-0 leading-tight"
                  />
                  <div className="text-[12px] text-slate-400 font-normal mt-0.5 leading-none">{t.priceInstallment}</div>
                </div>
              </div>

              {/* Column 4: Large Purple Action Search Button */}
              <div className="w-full md:w-auto flex justify-end md:pl-3 pt-2 md:pt-0 shrink-0">
                <button
                  type="submit"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#4F46E5] hover:bg-[#4338CA] active:scale-95 text-white flex items-center justify-center shadow-lg shadow-indigo-600/35 transition-all cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 stroke-[2.4]" />
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
