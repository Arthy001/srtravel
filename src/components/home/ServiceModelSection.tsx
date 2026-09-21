import React from "react";
import { 
  CheckCircle2, 
  Car, 
  Plane, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  Calendar
} from "lucide-react";
import { Language } from "@/lib/i18n/translations";

interface ServiceModelSectionProps {
  lang: Language;
}

export function ServiceModelSection({ lang }: ServiceModelSectionProps) {
  const serviceList = [
    "Airports and transfer",
    "Business trips",
    "Short and long routes",
    "Private Tour",
    "Private Car",
    "รถเช่าพร้อมคนขับ",
    "รถรับส่งสนามบิน",
    "Airport Transfer",
    "Taxi Service Private",
    "Transfer VIP Transport",
    "รถตู้ VIP",
    "รถรับส่งต่างจังหวัด",
    "Private Airport Transfer Bangkok to Pattaya ✈️",
  ];

  return (
    <section id="service-model" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/20 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title according to User Mockup */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 text-pink-700 text-xs font-bold mb-3 border border-pink-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Service Model</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D81B60] tracking-tight flex items-center justify-center gap-2 flex-wrap">
            <span>รถรับส่งสนามบินสุวรรณภูมิ ราคาคุ้มค่า 24 ชั่วโมง</span>
            <span>🚗</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
            เดินทางสะดวก ปลอดภัย รถใหม่สะอาด พร้อมพนักงานขับรถมืออาชีพดูแลตลอดเส้นทาง
          </p>
        </div>

        {/* 2-Column Content Layout matching user image */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Image (servicemodels.jpg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200/80 max-w-md w-full group bg-orange-50">
              <img 
                src="/servicemodels.jpg" 
                alt="เช่ารถพร้อมคนขับทั่วไทย SR Travel and Transfer" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-xs text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                Safety First 100%
              </div>
            </div>
          </div>

          {/* Right: Text & Service Bullets List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                We are pleased to provide services in all areas.
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                ยินดีให้บริการทุกพื้นที่ทั่วไทย ทั้งกรุงเทพฯ ปริมณฑล และต่างจังหวัด
              </p>
            </div>

            {/* Bullets List formatted cleanly in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              {serviceList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-orange-600 transition">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 flex items-center gap-2 transition"
              >
                <Calendar className="w-4 h-4" />
                <span>จองรถ / เช็กราคาด่วน</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:0867240454"
                className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>โทร 086-724-0454</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ServiceModelSection;
