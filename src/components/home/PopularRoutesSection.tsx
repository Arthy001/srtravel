import React from "react";
import { 
  Plane, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Compass, 
  PhoneCall, 
  CheckCircle2, 
  Car,
  Calendar
} from "lucide-react";
import { Language } from "@/lib/i18n/translations";

interface PopularRoutesSectionProps {
  lang: Language;
}

export function PopularRoutesSection({ lang }: PopularRoutesSectionProps) {
  const isTh = lang === "th";

  const routeList = [
    {
      id: "korat",
      from: "สนามบินสุวรรณภูมิ (BKK)",
      to: "โคราช (Korat / นครราชสีมา)",
      distance: "250 กม.",
      time: "3 - 4 ชม.",
      highlight: "เดินทางสบาย ปลอดภัย ถึงที่หมายตรงเวลา ส่งตรงถึงหน้าบ้านหรือโรงแรม",
      tag: "เส้นทางยอดนิยมอันดับ 1",
      badgeColor: "bg-orange-100 text-orange-950 border-orange-200"
    },
    {
      id: "pattaya",
      from: "สนามบินสุวรรณภูมิ (BKK)",
      to: "พัทยา (Pattaya)",
      distance: "120 กม.",
      time: "1.5 - 2 ชม.",
      highlight: "เที่ยวทะเลพัทยา ชลบุรี รถรับส่งสนามบินสะดวก รวดเร็ว พร้อมคนขับ",
      tag: "ทริปทะเล & ท่องเที่ยว",
      badgeColor: "bg-blue-100 text-blue-950 border-blue-200"
    },
    {
      id: "rayong",
      from: "สนามบินสุวรรณภูมิ (BKK)",
      to: "ระยอง (Rayong / ท่าเรือเกาะเสม็ด)",
      distance: "170 กม.",
      time: "2 - 2.5 ชม.",
      highlight: "เดินทางติดต่อธุรกิจ นิคมอุตสาหกรรม หรือต่อเรือข้ามเกาะเสม็ด",
      tag: "ธุรกิจ & ท่องเที่ยว",
      badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-200"
    },
    {
      id: "trat",
      from: "สนามบินสุวรรณภูมิ (BKK)",
      to: "ตราด (Trat / ท่าเรือเกาะช้าง / เกาะกูด)",
      distance: "315 กม.",
      time: "4 - 5 ชม.",
      highlight: "บริการรถตู้และ SUV นั่งสบายไม่เมื่อยล้า พร้อมส่งถึงท่าเรือเฟอร์รี่",
      tag: "เกาะช้าง & เกาะกูด",
      badgeColor: "bg-amber-100 text-amber-950 border-amber-200"
    },
    {
      id: "chanthaburi",
      from: "สนามบินสุวรรณภูมิ (BKK)",
      to: "จันทบุรี (Chanthaburi)",
      distance: "240 กม.",
      time: "3 - 3.5 ชม.",
      highlight: "ท่องเที่ยวเมืองผลไม้ เขาคิชฌกูฏ อาสนวิหารพระนางมารีอา หรือทำธุระ",
      tag: "เมืองผลไม้ & ไหว้พระ",
      badgeColor: "bg-purple-100 text-purple-950 border-purple-200"
    }
  ];

  return (
    <section id="popular-routes" className="py-16 sm:py-20 bg-gradient-to-b from-white via-orange-50/20 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-950 text-xs font-bold mb-4 border border-orange-200 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-orange-600" />
            <span>Popular Routes 🚗</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            เส้นทางยอดนิยม (Popular routes) 🚗
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600">
            บริการรถรับ–ส่งจากสนามบินสุวรรณภูมิ มุ่งสู่จุดหมายปลายทางทั่วไทย ปลอดภัย ตรงเวลา ถึงที่หมายอย่างสบายใจ
          </p>
        </div>

        {/* 5 Route List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {routeList.map((route, idx) => (
            <div 
              key={route.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${route.badgeColor}`}>
                    {route.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                </div>

                {/* Route Path Flow */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <Plane className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{route.from}</span>
                  </div>

                  <div className="pl-2 border-l-2 border-dashed border-orange-300 py-1 ml-2 text-orange-400 text-xs font-bold">
                    &darr;
                  </div>

                  <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{route.to}</span>
                  </div>
                </div>

                {/* Distance & Time info */}
                <div className="flex items-center gap-4 py-2.5 px-3 rounded-2xl bg-slate-50 text-[11px] font-semibold text-slate-600 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-slate-400" />
                    <span>ระยะทาง ~{route.distance}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>เวลา ~{route.time}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {route.highlight}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#booking"
                  className="w-full py-2.5 px-4 rounded-xl bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-800 text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>จองรถเส้นทางนี้</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Quick Help Card */}
          <div className="bg-gradient-to-br from-slate-900 to-orange-950 rounded-3xl p-6 text-white flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/20 text-orange-200 border border-white/10">
                เส้นทางอื่นๆ ทั่วไทย
              </span>
              <h3 className="text-lg font-bold mt-4 mb-2">
                ต้องการเดินทางเส้นทางอื่น?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                SR Travel พร้อมให้บริการเดินทางทั่วประเทศไทย ทั้งรถเก๋ง รถ SUV และรถตู้ VIP สอบถามราคาเหมาได้ทันที
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <a
                href="tel:0867240454"
                className="w-full py-2.5 px-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>โทรด่วน 086-724-0454</span>
              </a>
              <a
                href="#booking"
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <span>กรอกฟอร์มขอราคา</span>
              </a>
            </div>
          </div>
        </div>

        {/* Large Banner Image ต่อท้ายข้อความ (routes.png) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-200 bg-slate-900 group">
          <img 
            src="/routes.png" 
            alt="เส้นทาง สนามบินสุวรรณภูมิ - นครราชสีมา (โคราช) SR Travel" 
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default PopularRoutesSection;
