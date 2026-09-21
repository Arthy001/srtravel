import React from "react";
import { MapPin, PhoneCall, Building, Clock, Navigation, ExternalLink } from "lucide-react";
import { Language } from "@/lib/i18n/translations";

interface LocationSectionProps {
  lang: Language;
}

export function LocationSection({ lang }: LocationSectionProps) {
  const isTh = lang === "th";
  
  // Coordinates for Baan Pisan Suvarnabhumi 2/2 (Bang Chalong, Bang Phli, Samut Prakan)
  const lat = 13.6264;
  const lng = 100.7483;
  const companyName = "SR Travel And Transfer CO., LTD.";
  
  // Google Maps Embed URL with pinned marker at exact coordinates
  const googleMapEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=th&z=16&output=embed`;
  const googleMapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  const hubs = [
    {
      name: "สนามบินสุวรรณภูมิ (BKK)",
      desc: "จุดนัดพบอาคารผู้โดยสาร พร้อมบริการ 24 ชั่วโมง มีพนักงานรอรับป้ายชื่อ",
      highlight: "รับ-ส่งสนามบินหลัก"
    },
    {
      name: "สนามบินดอนเมือง (DMK)",
      desc: "จุดรับ-ส่งผู้โดยสารทั้งภายในประเทศและระหว่างประเทศ สะดวกรวดเร็ว",
      highlight: "บริการ 24 ชั่วโมง"
    },
    {
      name: "โคราช / นครราชสีมา",
      desc: "บริการรถพร้อมคนขับครอบคลุมทั่วจังหวัดนครราชสีมา เขาใหญ่ และภาคอีสาน",
      highlight: "ศูนย์บริการภาคอีสาน"
    }
  ];

  return (
    <section id="location" className="py-16 sm:py-20 bg-gradient-to-b from-white via-orange-50/20 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-950 text-xs font-bold mb-3 border border-orange-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Company Location & Service Hubs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Location • ที่ตั้งและจุดบริการ
          </h2>
          <p className="mt-2 text-base sm:text-lg font-bold text-orange-600">
            SR Travel And Transfer CO., LTD.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Travel and service • พร้อมดูแลทุกการเดินทางของคุณตลอด 24 ชั่วโมง
          </p>
        </div>

        {/* Main Company Location Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-xl shadow-orange-500/5 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Company Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                    Company Location (สำนักงานใหญ่)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    SR Travel And Transfer CO., LTD.
                  </h3>
                </div>
              </div>

              {/* Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    68/271 Banpisan Suvarnabhumi Project 2/2 (Bang Chalong) Moo 5 Chaloem Phrakiat 72 Phansa Rd, Bang Chalong, Bang Phli District, Samut Prakan 10540
                  </p>
                </div>
                <div className="pl-8 text-[11px] text-slate-400 font-medium">
                  (ใกล้สนามบินสุวรรณภูมิ เดินทางสะดวก รวดเร็ว พร้อมจัดส่งรถตลอด 24 ชม.)
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:0867240454"
                  className="p-4 rounded-2xl bg-orange-50 hover:bg-orange-100/80 border border-orange-200 flex items-center gap-3.5 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center group-hover:scale-105 transition shadow-sm shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-orange-800 font-bold uppercase block">เบอร์โทรติดต่อ (Tel 1)</span>
                    <span className="text-sm sm:text-base font-black text-slate-900 group-hover:text-orange-600 transition">
                      +(66)8-6724-0454
                    </span>
                  </div>
                </a>

                <a
                  href="tel:0654595435"
                  className="p-4 rounded-2xl bg-orange-50 hover:bg-orange-100/80 border border-orange-200 flex items-center gap-3.5 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center group-hover:scale-105 transition shadow-sm shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-orange-800 font-bold uppercase block">เบอร์โทรติดต่อ (Tel 2)</span>
                    <span className="text-sm sm:text-base font-black text-slate-900 group-hover:text-orange-600 transition">
                      +(66)6-5459-5435
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Col: Quick Help Action */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-orange-950 rounded-3xl p-6 sm:p-8 text-white space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-300 text-xs font-bold border border-white/10">
                <Clock className="w-3.5 h-3.5" />
                <span>Open 24 Hours / ให้บริการ 24 ชม.</span>
              </div>

              <div>
                <h4 className="text-xl font-bold">
                  ต้องการจองรถหรือนัดหมายรับ-ส่ง?
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  เรามีรถประจำอยู่ที่สนามบินสุวรรณภูมิและพื้นที่ใกล้เคียง พร้อมเดินทางไปรับคุณได้ทันทีในเขตสมุทรปราการ กรุงเทพฯ และวิ่งสู่ต่างจังหวัดทั่วประเทศ
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10">
                <a
                  href="tel:0867240454"
                  className="w-full py-3 px-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>โทรด่วน 086-724-0454</span>
                </a>
                <a
                  href="#booking"
                  className="w-full py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <span>จองรถล่วงหน้าผ่านระบบออนไลน์</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Embedded Interactive Google Map with Red Marker Pin */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-lg mb-10 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 animate-bounce">
                <MapPin className="w-5 h-5 fill-red-600 text-white" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>แผนที่ปักหมุดที่ตั้งสำนักงาน (Google Maps Pin)</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-bold border border-red-200">
                    📍 หมุดสีแดงตรงจุด
                  </span>
                </h4>
                <p className="text-[11px] text-slate-500">
                  บ้านพิศาล สุวรรณภูมิ โครงการ 2/2 (บางโฉลง) ถ.เฉลิมพระเกียรติ 72 พรรษา อ.บางพลี จ.สมุทรปราการ
                </p>
              </div>
            </div>

            <a
              href={googleMapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition shadow-xs"
            >
              <span>กดนำทาง GPS ด้วย Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Iframe Embed with Pinned Red Marker */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
            <iframe
              title="SR Travel Company Location Map"
              src={googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Supporting Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hubs.map((hub, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-orange-200 hover:shadow-md transition-all flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                <Navigation className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{hub.name}</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {hub.desc}
                </p>
                <span className="inline-block text-[11px] font-bold text-orange-600 pt-1">
                  • {hub.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LocationSection;
