import React from "react";
import { MapPin, Navigation, PhoneCall, Clock } from "lucide-react";
import { Language, translations } from "@/lib/i18n/translations";

interface LocationSectionProps {
  lang: Language;
}

export function LocationSection({ lang }: LocationSectionProps) {
  const t = translations[lang].locationSection;

  return (
    <section id="location" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-100">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Nationwide Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Location Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.locations.map((loc, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Navigation className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-base font-bold text-slate-900">
                  {loc.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {loc.desc}
                </p>
                <div className="pt-2 flex items-center gap-4 text-[11px] font-semibold text-emerald-700">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>บริการ 24 ชม.</span>
                  </span>
                  <a href="#booking" className="hover:underline">
                    จองรับรถที่นี่ &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Express Assistance Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold">ต้องการรับรถด่วน หรือสอบถามเส้นทางท่องเที่ยว?</h4>
              <p className="text-xs text-slate-300">ทีมงาน SR Travel พร้อมให้คำแนะนำและจัดหารถให้คุณตลอด 24 ชั่วโมง</p>
            </div>
          </div>
          <a
            href="tel:020000000"
            className="px-6 py-2.5 rounded-full bg-amber-400 text-amber-950 font-bold text-xs hover:bg-amber-300 transition shadow-sm shrink-0"
          >
            โทร 02-XXX-XXXX
          </a>
        </div>

      </div>
    </section>
  );
}

export default LocationSection;
