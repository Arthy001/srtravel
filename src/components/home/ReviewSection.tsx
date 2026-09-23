"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Heart, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn, Calendar } from "lucide-react";
import { Language, translations } from "@/lib/i18n/translations";
import { getReviewsFromSanity } from "@/sanity/queries";

interface ReviewSectionProps {
  lang: Language;
}

interface ReviewItem {
  id: string | number;
  image: string;
  title: string;
  tag: string;
  comment: string;
  tripDate?: string;
}

const defaultReviews: ReviewItem[] = [
  {
    id: "1",
    image: "/review1.jpg",
    title: "ทริปครอบครัว & ท่องเที่ยว",
    tag: "ครอบครัว / กรุ๊ปทัวร์",
    comment: "รถสะอาดมาก กว้างขวาง นั่งสบายตลอดเส้นทาง คนขับบริการสุภาพ ประทับใจมากครับ",
    tripDate: "2026-09-20",
  },
  {
    id: "2",
    image: "/review2.jpg",
    title: "รับ-ส่งสนามบินสุวรรณภูมิ",
    tag: "Airport Transfer",
    comment: "มารอรับตรงเวลา ยกกระเป๋าให้อย่างดี เดินทางถึงจุดหมายอย่างปลอดภัย หายห่วงเลยค่ะ",
    tripDate: "2026-09-18",
  },
  {
    id: "3",
    image: "/review3.jpg",
    title: "บริการพาเที่ยวทั่วไทย",
    tag: "ท่องเที่ยวต่างจังหวัด",
    comment: "คนขับชำนาญเส้นทาง แนะนำจุดแวะพักและร้านอาหารดีๆ ตลอดทริป แนะนำเลยครับ",
    tripDate: "2026-09-15",
  },
  {
    id: "4",
    image: "/review4.jpg",
    title: "ทริปงานสัมมนา & ลูกค้าองค์กร",
    tag: "Corporate & Business",
    comment: "ตรงต่อเวลา บริการระดับมืออาชีพ รถใหม่ แอร์เย็นสบาย เหมาะกับงานต้อนรับแขกสำคัญ",
    tripDate: "2026-09-12",
  },
  {
    id: "5",
    image: "/review5.jpg",
    title: "รับส่งสนามบินกรุ๊ปทัวร์",
    tag: "Airport Transfer",
    comment: "นัดหมายง่าย แอดมินตอบไว คนขับสุภาพขับขี่ปลอดภัย ไม่ผิดหวังที่เลือก SR Travel ครับ",
    tripDate: "2026-09-10",
  },
  {
    id: "6",
    image: "/review6.jpg",
    title: "ทริปพักผ่อน พัทยา - ชลบุรี",
    tag: "ครอบครัว / กรุ๊ปทัวร์",
    comment: "เดินทางกันเป็นแก๊งเพื่อน สบายใจมาก รถนั่งสบาย แวะถ่ายรูปได้ตามต้องการ บริการเป็นกันเอง",
    tripDate: "2026-09-08",
  },
  {
    id: "7",
    image: "/review7.jpg",
    title: "เดินทางปลอดภัยทุกเส้นทาง",
    tag: "เดินทางต่างจังหวัด",
    comment: "ขับรถนุ่มนวล ปลอดภัย ไม่ซิ่ง ดูแลผู้โดยสารเป็นอย่างดี มีโอกาสจะใช้บริการอีกแน่นอนค่ะ",
    tripDate: "2026-09-05",
  },
  {
    id: "8",
    image: "/review8.jpg",
    title: "บริการสุภาพ เป็นมิตร",
    tag: "VIP Service",
    comment: "ประทับใจความเอาใจใส่ พนักงานขับรถแต่งกายเรียบร้อย มีมารยาทดีมาก ให้ 5 ดาวเลยครับ",
    tripDate: "2026-09-02",
  },
  {
    id: "9",
    image: "/review9.jpg",
    title: "ลูกค้าประจำ ไว้วางใจทุกทริป",
    tag: "VIP Service",
    comment: "ใช้บริการ SR Travel ประจำ เดินทางสะดวก ไม่ต้องเหนื่อยขับเอง ถึงที่หมายตรงเวลาเสมอ",
    tripDate: "2026-08-28",
  },
];

export function ReviewSection({ lang }: ReviewSectionProps) {
  const t = translations[lang].reviewSection;
  const [reviews, setReviews] = useState<ReviewItem[]>(defaultReviews);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadReviews() {
      const sanityReviews = await getReviewsFromSanity();
      if (sanityReviews && sanityReviews.length > 0) {
        setReviews(sanityReviews);
      }
    }
    loadReviews();
  }, []);

  const handleOpenLightbox = (index: number) => {
    setSelectedImgIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImgIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((prev) => (prev! === 0 ? reviews.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImgIndex !== null) {
      setSelectedImgIndex((prev) => (prev! === reviews.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="review" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold mb-4 border border-amber-200/80 shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>Customer Review & Real Experience</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Quick trust metrics */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-6 pt-5 border-t border-slate-100 text-slate-600 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ภาพถ่ายจากลูกค้าที่ใช้บริการจริง</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-800">คะแนนความพึงพอใจ 5.0 เต็ม</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>ลูกค้ากลับมาใช้ซ้ำกว่า 98%</span>
            </div>
          </div>
        </div>

        {/* Reviews Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom hint */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Tag */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 backdrop-blur-md shadow-xs border border-white/40">
                    {item.tag}
                  </span>
                </div>

                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-3 rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-amber-600" />
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Review Text Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    {item.tripDate && (
                      <span className="text-[11px] text-slate-400 whitespace-nowrap flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.tripDate}
                      </span>
                    )}
                  </div>
                  {item.comment && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      &ldquo;{item.comment}&rdquo;
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    ✓ ยืนยันผู้ใช้บริการจริง
                  </span>
                  <span className="text-[11px] text-slate-400">SR Travel Showcase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner / Call to Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-center sm:flex sm:items-center sm:justify-between sm:text-left shadow-lg border border-slate-800">
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              สัมผัสประสบการณ์เดินทางระดับ VIP กับ SR Travel
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              รถใหม่ สะอาด ปลอดภัย คนขับมืออาชีพ พร้อมดูแลทุกเส้นทางตลอด 24 ชั่วโมง
            </p>
          </div>
          <a
            href="#booking"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-md hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
          >
            จองรถหรือติดต่อสอบถาม
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImgIndex !== null && reviews[selectedImgIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Content */}
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-3xl h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <Image
                src={reviews[selectedImgIndex].image}
                alt={reviews[selectedImgIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="mt-4 text-center text-white max-w-xl px-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950">
                  {reviews[selectedImgIndex].tag}
                </span>
                {reviews[selectedImgIndex].tripDate && (
                  <span className="text-xs text-slate-300">
                    {reviews[selectedImgIndex].tripDate}
                  </span>
                )}
              </div>
              <h4 className="text-lg font-bold">{reviews[selectedImgIndex].title}</h4>
              {reviews[selectedImgIndex].comment && (
                <p className="text-sm text-slate-300 mt-1 italic">
                  &ldquo;{reviews[selectedImgIndex].comment}&rdquo;
                </p>
              )}
              <div className="mt-2 text-xs text-slate-400">
                ภาพที่ {selectedImgIndex + 1} จาก {reviews.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ReviewSection;
