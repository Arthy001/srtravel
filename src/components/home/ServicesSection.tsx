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
import { CONTACT_INFO } from "@/lib/constants/contact";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Rate Card Graphic Showcase (rate.png) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/80 mb-10 bg-slate-900 group">
          <img 
            src="/rate.png" 
            alt="อัตราค่าบริการ SR Travel and Transfer" 
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
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

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="tel:0867240454"
                className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>086-724-0454</span>
              </a>
              <a
                href="tel:0654595434"
                className="px-4 py-2.5 rounded-2xl bg-white hover:bg-orange-50 text-orange-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
              >
                <PhoneCall className="w-4 h-4 text-orange-600" />
                <span>065-459-5434</span>
              </a>
            </div>

            {/* Social Channels Icons (Facebook, WhatsApp, LINE) */}
            <div className="flex items-center gap-2">
              {/* Facebook Icon */}
              <a 
                href={CONTACT_INFO.facebookUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all"
                aria-label={`Facebook: ${CONTACT_INFO.facebookName}`}
                title={CONTACT_INFO.facebookName}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a 
                href={CONTACT_INFO.whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all"
                aria-label={`WhatsApp: ${CONTACT_INFO.whatsapp}`}
                title={`WhatsApp: ${CONTACT_INFO.whatsapp}`}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.28-1.93 1.36-.51.08-1.18.11-1.91-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.44-5.24-4.64-.15-.2-1.25-1.66-1.25-3.17 0-1.51.79-2.25 1.07-2.56.28-.31.62-.39.83-.39.21 0 .41 0 .6.01.2.01.46-.07.72.55.26.63.89 2.18.97 2.34.08.16.13.35.03.55-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.41-.26.69-.15.28.11 1.78.84 2.09.99.31.15.51.23.59.36.08.13.08.75-.16 1.43z"/>
                </svg>
              </a>

              {/* LINE Official Icon */}
              <a 
                href={CONTACT_INFO.lineUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white flex items-center justify-center shadow-md hover:scale-105 transition-all font-black text-xs"
                aria-label={`Line: ${CONTACT_INFO.lineId}`}
                title="LINE Official"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.066.51.247l2.463 3.326V8.108c0-.345.282-.63.628-.63.348 0 .626.285.626.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>

            <a
              href="#booking"
              className="px-5 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
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
