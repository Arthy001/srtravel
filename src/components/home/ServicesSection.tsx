"use client";

import React, { useState, useEffect } from "react";
import { 
  PhoneCall, 
  ShieldCheck, 
  Calendar,
  Plane,
  Car,
  Users,
  MapPin,
  Sparkles,
  ArrowRight,
  Compass
} from "lucide-react";
import { Language, translations } from "@/lib/i18n/translations";
import { CONTACT_INFO } from "@/lib/constants/contact";
import { getServicesSectionFromSanity, ServicesSectionData } from "@/sanity/queries";

interface ServicesSectionProps {
  lang: Language;
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const t = translations[lang].servicesSection;
  const isTh = lang === "th";
  const [sanityData, setSanityData] = useState<ServicesSectionData | null>(null);

  useEffect(() => {
    let isCancelled = false;
    async function loadData() {
      const data = await getServicesSectionFromSanity();
      if (!isCancelled && data) {
        setSanityData(data);
      }
    }
    loadData();
    return () => {
      isCancelled = true;
    };
  }, []);

  // Use values from Sanity if provided, otherwise fallback to translations & constants
  const badgeText = sanityData?.badge || t.badge;
  const titleText = sanityData?.title || t.title;
  const subtitleText = sanityData?.subtitle || t.subtitle;
  const sloganText = sanityData?.slogan || t.slogan;
  const bannerImageSrc = sanityData?.bannerImageUrl || "/services.png";
  const rateImageSrc = sanityData?.rateImageUrl || "/rate.png";
  const guaranteeBadgeText = sanityData?.guaranteeBadge || t.guaranteeBadge;
  const guaranteeTitleText = sanityData?.guaranteeTitle || t.guaranteeTitle;
  const guaranteeDescText = sanityData?.guaranteeDesc || t.guaranteeDesc;
  const phone1 = sanityData?.phone1 || "086-724-0454";
  const phone2 = sanityData?.phone2 || "065-459-5434";
  const facebookUrl = sanityData?.facebookUrl || CONTACT_INFO.facebookUrl;
  const whatsappUrl = sanityData?.whatsappUrl || CONTACT_INFO.whatsappUrl;
  const lineUrl = sanityData?.lineUrl || CONTACT_INFO.lineUrl;

  const highlightsBadgeText = sanityData?.highlightsBadge || (isTh ? "บริการหลักและเส้นทางยอดนิยม" : "Service Offerings & Top Routes");
  const highlightsTitleText = sanityData?.highlightsTitle || (isTh ? "ตอบโจทย์ทุกรูปแบบการเดินทางทั่วไทย" : "Comprehensive Travel Solutions Across Thailand");

  // Default Palette Styles
  const palette = [
    {
      icon: Plane,
      color: "from-blue-500 to-indigo-600",
      pillBg: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    },
    {
      icon: Car,
      color: "from-amber-500 to-orange-600",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
    },
    {
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      pillBg: "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
    },
    {
      icon: MapPin,
      color: "from-rose-500 to-red-600",
      pillBg: "bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100",
    },
  ];

  // Default 4 Service Highlights (ข้อมูลเริ่มต้น)
  const defaultServiceHighlights = [
    {
      emoji: "🚖",
      icon: Plane,
      color: palette[0].color,
      pillBg: palette[0].pillBg,
      title: "Airport Transfer",
      titleTh: "บริการรับ-ส่งสนามบิน",
      desc: isTh 
        ? "บริการรถรับส่งสนามบิน และรถเช่าพร้อมคนขับทั่วไทย ตรงเวลา ปลอดภัย ไม่ตกเครื่อง"
        : "Direct airport transfer and private car rental with professional driver nationwide.",
      tags: [
        "Suvarnabhumi Airport (BKK)",
        "Don Mueang Airport (DMK)",
      ],
      isDestinations: false,
    },
    {
      emoji: "🚘",
      icon: Car,
      color: palette[1].color,
      pillBg: palette[1].pillBg,
      title: "Private Car with Driver",
      titleTh: "รถยนต์ส่วนตัวพร้อมคนขับ",
      desc: isTh
        ? "Daily and long-distance service บริการทั้งแบบรายวันและเดินทางไกล สะดวกสบายเป็นส่วนตัว"
        : "Daily and long-distance service with professional driver for ultimate comfort.",
      tags: [
        "Daily Rental",
        "Long-Distance",
        "Sedan / SUV",
      ],
      isDestinations: false,
    },
    {
      emoji: "🚐",
      icon: Users,
      color: palette[2].color,
      pillBg: palette[2].pillBg,
      title: "Private Van Service",
      titleTh: "บริการรถตู้ VIP หมู่คณะ",
      desc: isTh
        ? "Family and group travel เบาะ VIP นุ่มสบาย เหมาะสำหรับครอบครัว ท่องเที่ยว และดูงาน"
        : "Family and group travel in premium VIP vans with spacious seating.",
      tags: [
        "Family & Group Travel",
        "VIP 9-10 Seats",
        "Spacious & Clean",
      ],
      isDestinations: false,
    },
    {
      emoji: "🏝️",
      icon: MapPin,
      color: palette[3].color,
      pillBg: palette[3].pillBg,
      title: "Intercity Transfer",
      titleTh: "เดินทางข้ามจังหวัดยอดนิยม",
      desc: isTh
        ? "บริการเดินทางเชื่อมต่อกรุงเทพฯ และเมืองท่องเที่ยวชั้นนำทั่วไทย สะดวกรวดเร็วตลอด 24 ชม."
        : "Point-to-point transfer between Bangkok and top Thailand destinations.",
      tags: [
        "Bangkok",
        "Pattaya",
        "Hua Hin",
        "Korat",
        "Trat (Koh Chang)",
        "Chonburi",
        "Chanthaburi",
      ],
      isDestinations: true,
    },
  ];

  // If Sanity provides custom highlights list, use it; otherwise fallback to default
  const displayHighlights = (sanityData?.highlightsList && sanityData.highlightsList.length > 0)
    ? sanityData.highlightsList.map((item, idx) => {
        const style = palette[idx % palette.length];
        return {
          emoji: item.emoji || "🚗",
          icon: item.isDestinations ? MapPin : style.icon,
          color: style.color,
          pillBg: style.pillBg,
          title: item.title,
          titleTh: item.titleTh,
          desc: item.desc || "",
          tags: item.tags || [],
          isDestinations: Boolean(item.isDestinations),
        };
      })
    : defaultServiceHighlights;

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-bold mb-4 border border-amber-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>{badgeText}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {titleText}
          </h2>

          <p className="mt-2 text-base sm:text-xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-indigo-600 bg-clip-text text-transparent">
            {subtitleText}
          </p>

          <p className="mt-3 text-sm sm:text-base font-semibold text-slate-600 italic">
            {sloganText}
          </p>
        </div>

        {/* 2. Banner Graphic Showcase (services.png) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/80 mb-12 bg-slate-900 group">
          <img 
            src={bannerImageSrc} 
            alt={t.bannerAlt} 
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* 🌟 3. Service Highlights & Popular Routes (วางก่อนอัตราค่าบริการ) */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold mb-2.5 border border-orange-200">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{highlightsBadgeText}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {highlightsTitleText}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayHighlights.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${svc.color} text-white flex items-center justify-center shadow-md shadow-orange-500/20`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl" title={svc.title}>
                        {svc.emoji}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="mb-2">
                      <h4 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                        <span>{svc.title}</span>
                      </h4>
                      {svc.titleTh && (
                        <p className="text-xs font-bold text-amber-700 mt-0.5">
                          {svc.titleTh}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    {svc.desc && (
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {svc.desc}
                      </p>
                    )}

                    {/* Location / Feature Tags */}
                    {svc.tags && svc.tags.length > 0 && (
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                          {svc.isDestinations ? (
                            <>
                              <MapPin className="w-3 h-3 text-rose-500" />
                              <span>{isTh ? "จุดหมายปลายทางยอดนิยม" : "Top Destinations"}</span>
                            </>
                          ) : (
                            <span>{isTh ? "จุดเด่นและจุดให้บริการ" : "Key Coverage"}</span>
                          )}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {svc.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors ${svc.pillBg}`}
                            >
                              {svc.isDestinations && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#booking"
                      className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1 group/btn"
                    >
                      <span>{t.bookBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                      href={`tel:${phone1.replace(/[^0-9]/g, '')}`}
                      className="text-[11px] font-bold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                    >
                      <PhoneCall className="w-3 h-3 text-emerald-600" />
                      <span>{t.callBtn}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Rate Card Graphic Showcase (rate.png) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-200/80 mb-10 bg-slate-900 group">
          <img 
            src={rateImageSrc} 
            alt={t.rateAlt} 
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* 5. Quick Contact & Guarantee Footer Strip */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-6 sm:p-8 text-white shadow-xl shadow-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>{guaranteeBadgeText}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black mt-2">
              {guaranteeTitleText}
            </h4>
            <p className="text-xs sm:text-sm text-orange-100">
              {guaranteeDescText}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={`tel:${phone1.replace(/[^0-9]/g, '')}`}
                className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>{phone1}</span>
              </a>
              <a
                href={`tel:${phone2.replace(/[^0-9]/g, '')}`}
                className="px-4 py-2.5 rounded-2xl bg-white hover:bg-orange-50 text-orange-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition"
              >
                <PhoneCall className="w-4 h-4 text-orange-600" />
                <span>{phone2}</span>
              </a>
            </div>

            {/* Social Channels Icons (Facebook, WhatsApp, LINE) */}
            <div className="flex items-center gap-2">
              {/* Facebook Icon */}
              <a 
                href={facebookUrl} 
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
                href={whatsappUrl} 
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
                href={lineUrl} 
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
              <span>{t.bookOnlineBtn}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
