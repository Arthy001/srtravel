import React from "react";
import { 
  Plane, 
  Palmtree, 
  Building2, 
  Zap, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  HeartHandshake,
  CheckCircle2,
  Calendar,
  MessageCircle
} from "lucide-react";
import { Language } from "@/lib/i18n/translations";

interface ServicesSectionProps {
  lang: Language;
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const isTh = lang === "th";

  const keyServices = [
    {
      icon: Plane,
      title: isTh ? "รับ–ส่งสนามบิน" : "Airport Transfer",
      desc: isTh ? "สุวรรณภูมิ ดอนเมือง ฯลฯ ตรงเวลา ปลอดภัย คอยเที่ยวบินดีเลย์" : "BKK, DMK & regional airports with punctual service",
      badge: isTh ? "บินสบาย ไม่ตกรถ" : "24/7 Airport",
      color: "from-blue-500 to-indigo-600",
      bgLight: "bg-blue-50 text-blue-700 border-blue-100"
    },
    {
      icon: Palmtree,
      title: isTh ? "พาเที่ยวทั่วไทย" : "Travel Across Thailand",
      desc: isTh ? "ทริปครอบครัว ท่องเที่ยวเขาใหญ่ ทะเล ภูเขา หรือทัวร์ไหว้พระตามสั่ง" : "Customized road trips to beaches, mountains & temples",
      badge: isTh ? "ทริปท่องเที่ยว" : "Private Tours",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50 text-emerald-700 border-emerald-100"
    },
    {
      icon: Building2,
      title: isTh ? "เดินทางในกรุงเทพและต่างจังหวัด" : "City & Upcountry Trips",
      desc: isTh ? "เดินทางติดต่อธุรกิจ สัมมนา งานอีเวนต์ หรือทำธุระส่วนตัว ทั่วทุกจังหวัด" : "Business trips, conferences & provincial journeys",
      badge: isTh ? "โคราช - ทั่วไทย" : "Nationwide",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50 text-amber-800 border-amber-100"
    },
    {
      icon: Zap,
      title: isTh ? "หารถรับส่งด่วน 24 ชั่วโมง" : "24/7 Express Dispatch",
      desc: isTh ? "ต้องการรถเร่งด่วน พร้อมจัดหารถและคนขับมืออาชีพบริการทันที" : "Immediate dispatch for urgent travel needs round the clock",
      badge: isTh ? "บริการด่วน 24 ชม." : "Express 24H",
      color: "from-rose-500 to-red-600",
      bgLight: "bg-rose-50 text-rose-700 border-rose-100"
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-bold mb-4 border border-amber-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>บริการของเรา • Service Type</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            SR Travel and Transfer
          </h2>

          <p className="mt-2 text-base sm:text-xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-indigo-600 bg-clip-text text-transparent">
            บริการรถเช่าพร้อมคนขับโคราช ทั่วไทย 24 ชั่วโมง / หารถรับส่งด่วน
          </p>

          <p className="mt-3 text-sm sm:text-base font-semibold text-slate-600 italic">
            “ทุกเส้นทางของคุณ เราพร้อมดูแล”
          </p>
        </div>

        {/* Banner Graphic Showcase (services.png) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/80 mb-12 bg-slate-900 group">
          <img 
            src="/services.png" 
            alt="บริการรถเช่าพร้อมคนขับ SR Travel and Transfer" 
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* 4 Feature Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyServices.map((svc, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${svc.color} text-white flex items-center justify-center shadow-md shadow-orange-500/20`}>
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${svc.bgLight}`}>
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#booking"
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                >
                  <span>จองคิวรถ</span>
                  <span>&rarr;</span>
                </a>
                <a
                  href="tel:0867240454"
                  className="text-[11px] font-bold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3 text-emerald-600" />
                  <span>โทรด่วน</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact & Guarantee Footer Strip */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-6 sm:p-8 text-white shadow-xl shadow-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>ปลอดภัย 100% • ตรงเวลา • บริการด้วยใจ</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black mt-2">
              เดินทางเมื่อไหร่ มั่นใจ ให้เรา...ดูแลคุณ
            </h4>
            <p className="text-xs sm:text-sm text-orange-100">
              ติดต่อสอบถาม / จองรถได้ตลอด 24 ชั่วโมง พร้อมคนขับมืออาชีพ
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:0867240454"
              className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>086-724-0454</span>
            </a>
            <a
              href="tel:0654595434"
              className="px-5 py-3 rounded-2xl bg-white hover:bg-orange-50 text-orange-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
            >
              <PhoneCall className="w-4 h-4 text-orange-600" />
              <span>065-459-5434</span>
            </a>
            <a
              href="#booking"
              className="px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
            >
              <Calendar className="w-4 h-4" />
              <span>จองรถออนไลน์</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
