"use client";

import React, { useState } from "react";
import { Calendar, MapPin, CheckCircle2, User, Phone, Send, Car as CarIcon, MessageSquare } from "lucide-react";
import { Language, translations } from "@/lib/i18n/translations";

interface BookingSectionProps {
  lang: Language;
}

export function BookingSection({ lang }: BookingSectionProps) {
  const t = translations[lang].bookingSection;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    pickup: "สนามบินสุวรรณภูมิ (BKK)",
    returnLocation: "สนามบินสุวรรณภูมิ (BKK)",
    pickupDate: "",
    returnDate: "",
    carType: "Sedan - รถเก๋งประหยัดน้ำมัน",
    driverOption: "self",
    name: "",
    phone: "",
    lineId: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3 border border-indigo-100">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            <span>Fast & Easy Reservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {lang === "th" ? "รับข้อมูลการจองเรียบร้อยแล้ว!" : "Booking Request Received!"}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {t.note}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-indigo-600 transition"
              >
                {lang === "th" ? "จองคันอื่นเพิ่มเติม" : "Book Another Vehicle"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Pick-up Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{t.pickupLabel}</span>
                  </label>
                  <select
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                    required
                  >
                    <option value="สนามบินสุวรรณภูมิ (BKK)">สนามบินสุวรรณภูมิ (BKK)</option>
                    <option value="สนามบินดอนเมือง (DMK)">สนามบินดอนเมือง (DMK)</option>
                    <option value="กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม">กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม</option>
                    <option value="สนามบินเชียงใหม่ (CNX)">สนามบินเชียงใหม่ (CNX)</option>
                    <option value="สนามบินภูเก็ต (HKT)">สนามบินภูเก็ต (HKT)</option>
                    <option value="พัทยา / ชลบุรี">พัทยา / ชลบุรี</option>
                  </select>
                </div>

                {/* Return Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{t.returnLabel}</span>
                  </label>
                  <select
                    value={formData.returnLocation}
                    onChange={(e) => setFormData({ ...formData, returnLocation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                    required
                  >
                    <option value="สนามบินสุวรรณภูมิ (BKK)">สนามบินสุวรรณภูมิ (BKK)</option>
                    <option value="สนามบินดอนเมือง (DMK)">สนามบินดอนเมือง (DMK)</option>
                    <option value="กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม">กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม</option>
                    <option value="สนามบินเชียงใหม่ (CNX)">สนามบินเชียงใหม่ (CNX)</option>
                    <option value="สนามบินภูเก็ต (HKT)">สนามบินภูเก็ต (HKT)</option>
                    <option value="พัทยา / ชลบุรี">พัทยา / ชลบุรี</option>
                  </select>
                </div>

                {/* Pick-up Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{t.pickupDate}</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                {/* Return Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{t.returnDate}</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                {/* Car Type Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <CarIcon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{t.selectCar}</span>
                  </label>
                  <select
                    value={formData.carType}
                    onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="Sedan - รถเก๋งประหยัดน้ำมัน (Civic / City / Yaris)">รถเก๋งประหยัดน้ำมัน (Sedan)</option>
                    <option value="SUV - รถครอบครัวท่องเที่ยว (CR-V / Fortuner / Haval)">รถครอบครัวท่องเที่ยว (SUV)</option>
                    <option value="Van - รถตู้ VIP (Alphard / Commuter / Majesty)">รถตู้ VIP (Van / MPV)</option>
                    <option value="EV - รถยนต์ไฟฟ้ารักษ์โลก (BYD Seal / Tesla Model Y)">รถยนต์ไฟฟ้า (EV)</option>
                  </select>
                </div>

                {/* Driver Option */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {t.driverOption}
                  </label>
                  <div className="grid grid-cols-2 gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, driverOption: "self" })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                        formData.driverOption === "self"
                          ? "bg-indigo-50 border-indigo-600 text-indigo-700 shadow-xs"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {t.driverSelf}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, driverOption: "chauffeur" })}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                        formData.driverOption === "chauffeur"
                          ? "bg-indigo-50 border-indigo-600 text-indigo-700 shadow-xs"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {t.driverWith}
                    </button>
                  </div>
                </div>

              </div>

              {/* Contact Info Row */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.name}</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="เช่น คุณสมชาย เดินทางดี"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.phone}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08X-XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.lineId}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="@srtravel หรือ Line ID"
                    value={formData.lineId}
                    onChange={(e) => setFormData({ ...formData, lineId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.submitBtn}</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2.5">
                  * {t.note}
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default BookingSection;
