"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Star, 
  MapPin, 
  Heart, 
  Share2, 
  Users, 
  Cog, 
  ShieldCheck, 
  Luggage, 
  Check, 
  Calendar, 
  CheckCircle,
  ChevronRight,
  Camera
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { initialCarsData } from "@/lib/data/mockCars";
import { Car } from "@/types";
import { Language } from "@/lib/i18n/translations";
import { formatPriceByLang, formatMonthlyByLang } from "@/lib/utils";

interface CarDetailClientProps {
  carId: string;
}

export function CarDetailClient({ carId }: CarDetailClientProps) {
  const [lang, setLang] = useState<Language>("th");
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("Sep 22 - Sep 24");
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load Car by ID from Mock Data
  useEffect(() => {
    setLoading(true);
    const found = initialCarsData.find((c) => c.id === carId) || initialCarsData[0];
    setCar(found);
    setLoading(false);
  }, [carId]);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!car) return;
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || !car) {
    return (
      <div className="min-h-screen bg-[#FDFDFE] flex flex-col">
        <Navbar lang={lang} onLanguageChange={setLang} />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full" />
        </div>
        <Footer lang={lang} />
      </div>
    );
  }

  const basePrice = car.price || car.price_per_day || 18600;
  const formattedPrice = formatPriceByLang(basePrice, lang);
  const formattedMonthly = formatMonthlyByLang(basePrice, car.monthly_payment, lang);

  const gallery = [
    car.image_url,
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFE] flex flex-col">
      <Navbar lang={lang} onLanguageChange={setLang} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-5">
          <Link href="/" className="hover:text-slate-700 transition">หน้าแรก</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#car-type" className="hover:text-slate-700 transition">รถเช่าทั้งหมด</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{car.name}</span>
        </div>

        {/* Gallery */}
        <div className="relative rounded-[28px] overflow-hidden mb-8 group">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-[380px] sm:h-[440px]">
            <div className="md:col-span-5 h-full rounded-2xl overflow-hidden relative">
              <img
                src={gallery[0]}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="md:col-span-3 flex flex-col gap-3 h-full">
              <div className="flex-1 rounded-2xl overflow-hidden relative">
                <img
                  src={gallery[1]}
                  alt="Interior cockpit"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden relative">
                <img
                  src={gallery[2]}
                  alt="Front headlight"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="md:col-span-4 h-full rounded-2xl overflow-hidden relative">
              <img
                src={gallery[3]}
                alt="Side profile"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          <button
            type="button"
            className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-white transition flex items-center gap-2"
          >
            <Camera className="w-4 h-4 text-slate-700" />
            <span>Show all photos</span>
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-xs">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-3">
                    {car.brand} Fleet
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {car.name}
                  </h1>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" /> {car.rating} ({car.review_count})
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {car.location_address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 transition"
                    aria-label="Save"
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  </button>
                  <button
                    className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 transition"
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>{car.seats} seats</span>
                </div>

                <div className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-slate-400" />
                  <span>{car.transmission}</span>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                  <span>{car.airbags} airbags</span>
                </div>

                <div className="flex items-center gap-2">
                  <Luggage className="w-4 h-4 text-slate-400" />
                  <span>3 Large bags</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-xs">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-6">
                Included in this rental (สิทธิประโยชน์ที่รวมในบริการนี้)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>ประกันภัยชั้น 1 คุ้มครองเต็มรูปแบบ</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>ขับขี่ได้ไม่จำกัดระยะทางทั่วประเทศไทย</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>บริการช่วยเหลือฉุกเฉิน 24 ชั่วโมง (24/7 Roadside Assistance)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>ตรวจเช็กสภาพความปลอดภัยก่อนส่งมอบทุกครั้ง</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Booking */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-xl shadow-slate-200/50">
              <div className="flex items-baseline justify-between mb-5">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">
                    {car.name}
                  </div>
                  <div className="text-xs font-bold text-orange-600 mt-0.5">
                    {lang === "th" ? `รถเช่าพร้อมคนขับ • ประกันชั้น 1` : `With Driver • Full Insurance`}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{car.rating}</span>
                </div>
              </div>

              {isSuccess ? (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-slate-900">บันทึกนัดหมายสำเร็จ!</h4>
                  <p className="text-xs text-slate-500">
                    เจ้าหน้าที่ SR Travel จะติดต่อกลับไปยังเบอร์โทรของคุณเพื่อยืนยันคิวรถครับ
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="border border-slate-200 rounded-2xl p-3.5 hover:border-slate-300 transition">
                    <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>วันนัดหมายรับรถ</span>
                    </div>
                    <input
                      type="text"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      placeholder="Sep 22 - Sep 24"
                      className="w-full text-sm font-bold text-slate-900 border-none p-0 focus:outline-none bg-transparent"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="ชื่อ - นามสกุลของคุณ"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="เบอร์โทรศัพท์ติดต่อ"
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold transition duration-200 shadow-md active:scale-98 disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? "กำลังส่งคำขอ..." : "ยืนยันการจองรถ (Book Vehicle)"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </main>

      <Footer lang={lang} />
    </div>
  );
}
