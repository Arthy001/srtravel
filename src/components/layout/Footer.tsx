import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Language, translations } from "@/lib/i18n/translations";
import { CONTACT_INFO } from "@/lib/constants/contact";
import { PhoneCall, Mail, MessageCircle, Clock } from "lucide-react";

interface FooterProps {
  lang?: Language;
}

export function Footer({ lang = "th" }: FooterProps) {
  const t = translations[lang].footer;
  const isTh = lang === "th";

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Main Column Sections (Clean layout without card borders) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-14">
          
          {/* Column 1: Brand Info (Span 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              {t.desc}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 pt-1">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>{isTh ? "เปิดให้บริการทุกวัน ตลอด 24 ชั่วโมง" : "Open Daily 24/7 Hours"}</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Services (Span 3 cols) */}
          <div className="md:col-span-3 space-y-3 md:pl-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              {isTh ? "บริการ & เมนูลัด" : "Services & Links"}
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              <li>
                <a href="#services" className="hover:text-orange-600 transition">
                  {isTh ? "บริการรับ-ส่งสนามบิน" : "Airport Transfers"}
                </a>
              </li>
              <li>
                <a href="#popular-routes" className="hover:text-orange-600 transition">
                  {isTh ? "เส้นทางท่องเที่ยวยอดนิยม" : "Popular Routes"}
                </a>
              </li>
              <li>
                <a href="#car-type" className="hover:text-orange-600 transition">
                  {isTh ? "ประเภทรถและรุ่นรถ" : "Vehicle Fleet"}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-orange-600 transition">
                  {isTh ? "จุดบริการและแผนที่" : "Locations & Map"}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-orange-600 transition">
                  {isTh ? "ระบบจองรถออนไลน์" : "Online Booking"}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-600 transition">
                  {isTh ? "คำถามที่พบบ่อย (FAQ)" : "FAQ"}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact & Social Channel Icons (Span 4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              {isTh ? "ติดต่อเรา (Contact Us)" : "Contact Us"}
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <a 
                href={CONTACT_INFO.phones[0].telLink}
                className="flex items-center gap-2.5 hover:text-orange-600 font-semibold transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{CONTACT_INFO.phones[0].number}</span>
              </a>

              <a 
                href={CONTACT_INFO.phones[1].telLink}
                className="flex items-center gap-2.5 hover:text-orange-600 font-semibold transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{CONTACT_INFO.phones[1].number}</span>
              </a>

              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-orange-600 font-semibold transition-colors"
              >
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>
            </div>

            {/* Social Icons only (Clean & Modern) */}
            <div className="pt-2 flex items-center gap-3">
              {/* Facebook Icon */}
              <a 
                href={CONTACT_INFO.facebookUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
                aria-label={`Facebook: ${CONTACT_INFO.facebookName}`}
                title={CONTACT_INFO.facebookName}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a 
                href={CONTACT_INFO.whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
                aria-label={`WhatsApp: ${CONTACT_INFO.whatsapp}`}
                title={`WhatsApp: ${CONTACT_INFO.whatsapp}`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.4 1.28-1.93 1.36-.51.08-1.18.11-1.91-.12-.44-.14-1.01-.33-1.74-.65-3.08-1.33-5.09-4.44-5.24-4.64-.15-.2-1.25-1.66-1.25-3.17 0-1.51.79-2.25 1.07-2.56.28-.31.62-.39.83-.39.21 0 .41 0 .6.01.2.01.46-.07.72.55.26.63.89 2.18.97 2.34.08.16.13.35.03.55-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.41-.26.69-.15.28.11 1.78.84 2.09.99.31.15.51.23.59.36.08.13.08.75-.16 1.43z"/>
                </svg>
              </a>

              {/* LINE Official Icon */}
              <a 
                href={CONTACT_INFO.lineUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105 font-black text-xs"
                aria-label={`Line: ${CONTACT_INFO.lineId}`}
                title={`Line ID: ${CONTACT_INFO.lineId}`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Line Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-600 transition">{t.privacy}</Link>
            <Link href="/" className="hover:text-slate-600 transition">{t.terms}</Link>
            <Link href="/" className="hover:text-slate-600 transition">{t.sitemap}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
