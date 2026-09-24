"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Clock,
  MapPin, 
  CheckCircle2, 
  User, 
  Phone, 
  Send, 
  Car as CarIcon, 
  MessageSquare, 
  MessageCircle, 
  PhoneCall,
  AlertCircle
} from "lucide-react";
import { Language, translations } from "@/lib/i18n/translations";
import { CONTACT_INFO } from "@/lib/constants/contact";

interface BookingSectionProps {
  lang: Language;
  selectedCarModel?: string;
}

export function BookingSection({ lang, selectedCarModel }: BookingSectionProps) {
  const t = translations[lang].bookingSection;
  const isTh = lang === "th";
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  const [formData, setFormData] = useState({
    pickup: "สนามบินสุวรรณภูมิ (BKK)",
    returnLocation: "สนามบินสุวรรณภูมิ (BKK)",
    pickupDate: "",
    pickupTime: "09:00",
    returnDate: "",
    returnTime: "18:00",
    carType: "Toyota Corolla Altis (Sedan • 1-3 ที่นั่ง)",
    name: "",
    phone: "",
    lineId: ""
  });

  // Sync selected car model from Car Type section
  React.useEffect(() => {
    if (selectedCarModel) {
      setFormData((prev) => ({
        ...prev,
        carType: selectedCarModel,
      }));
    }
  }, [selectedCarModel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Send data to Next.js API backed by Resend
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "เกิดข้อผิดพลาดในการส่งข้อมูล");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Booking error:", err);
      // Fallback: if server error or network issue occurs, offer mailto & notification
      setErrorMsg(err.message || "ระบบส่งอีเมลขัดข้องชั่วคราว");
      
      const subject = encodeURIComponent(`[SR Travel] คำขอจองรถ - คุณ ${formData.name}`);
      const body = encodeURIComponent(
        `รายละเอียดการจองรถ:\n` +
        `👤 ผู้ติดต่อ: ${formData.name}\n` +
        `📞 เบอร์โทร: ${formData.phone}\n` +
        `💬 Line / WhatsApp: ${formData.lineId || "-"}\n` +
        `🚗 รุ่นรถ: ${formData.carType}\n` +
        `📍 สถานที่รับ: ${formData.pickup}\n` +
        `🏁 สถานที่ส่ง: ${formData.returnLocation}\n` +
        `📅 วันที่และเวลารับ: ${formData.pickupDate} (เวลา ${formData.pickupTime} น.)\n` +
        `📅 วันที่และเวลาส่ง: ${formData.returnDate} (เวลา ${formData.returnTime} น.)`
      );
      window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-950 text-xs font-bold mb-3 border border-orange-200 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>Fast Online Booking & Instant Confirmation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* Booking Card Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/50">
          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {isTh ? "ส่งคำขอจองรถเข้าอีเมลเรียบร้อยแล้ว!" : "Booking Request Sent to Email!"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                ระบบได้ส่งรายละเอียดการจองของคุณไปยังอีเมล <span className="font-bold text-slate-900">{CONTACT_INFO.email}</span> เรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันคิวรถภายใน 15 นาทีครับ
              </p>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4 border-t border-slate-100 mt-6">
                <a
                  href={`tel:${CONTACT_INFO.phones[0].number.replace(/[^0-9+]/g, '')}`}
                  className="px-4 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 flex items-center gap-1.5 transition shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>โทร: {CONTACT_INFO.phones[0].number}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phones[1].number.replace(/[^0-9+]/g, '')}`}
                  className="px-4 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 flex items-center gap-1.5 transition shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>โทร: {CONTACT_INFO.phones[1].number}</span>
                </a>
                <a
                  href={CONTACT_INFO.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 flex items-center gap-1.5 transition shadow-xs"
                >
                  <span>LINE @Official</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 flex items-center gap-1.5 transition shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 flex items-center gap-1.5 transition shadow-xs"
                >
                  <span>Facebook</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-orange-600 transition"
                >
                  {isTh ? "จองคันอื่นเพิ่มเติม" : "Book Another Vehicle"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{errorMsg} (ระบบกำลังเปิดโปรแกรมส่งอีเมลสำรองให้ครับ)</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* 1. Pick-up Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span>{t.pickupLabel}</span>
                  </label>
                  <select
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                    required
                  >
                    <option value="สนามบินสุวรรณภูมิ (BKK)">สนามบินสุวรรณภูมิ (BKK)</option>
                    <option value="สนามบินดอนเมือง (DMK)">สนามบินดอนเมือง (DMK)</option>
                    <option value="กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม">กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม</option>
                    <option value="สนามบินเชียงใหม่ (CNX)">สนามบินเชียงใหม่ (CNX)</option>
                    <option value="สนามบินภูเก็ต (HKT)">สนามบินภูเก็ต (HKT)</option>
                    <option value="พัทยา / ชลบุรี">พัทยา / ชลบุรี</option>
                    <option value="โคราช / นครราชสีมา">โคราช / นครราชสีมา</option>
                  </select>
                </div>

                {/* 2. Drop-off / Return Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span>{t.returnLabel}</span>
                  </label>
                  <select
                    value={formData.returnLocation}
                    onChange={(e) => setFormData({ ...formData, returnLocation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                    required
                  >
                    <option value="สนามบินสุวรรณภูมิ (BKK)">สนามบินสุวรรณภูมิ (BKK)</option>
                    <option value="สนามบินดอนเมือง (DMK)">สนามบินดอนเมือง (DMK)</option>
                    <option value="กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม">กรุงเทพฯ - ตัวเมือง / ส่งถึงโรงแรม</option>
                    <option value="สนามบินเชียงใหม่ (CNX)">สนามบินเชียงใหม่ (CNX)</option>
                    <option value="สนามบินภูเก็ต (HKT)">สนามบินภูเก็ต (HKT)</option>
                    <option value="พัทยา / ชลบุรี">พัทยา / ชลบุรี</option>
                    <option value="โคราช / นครราชสีมา">โคราช / นครราชสีมา</option>
                  </select>
                </div>

                {/* 3. Pick-up Date & Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span>{t.pickupDate} & {t.pickupTime}</span>
                  </label>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-7">
                      <input
                        type="date"
                        required
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      />
                    </div>
                    <div className="col-span-5 relative">
                      <input
                        type="time"
                        required
                        value={formData.pickupTime}
                        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium text-center"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Drop-off / Return Date & Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span>{t.returnDate} & {t.returnTime}</span>
                  </label>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-7">
                      <input
                        type="date"
                        required
                        value={formData.returnDate}
                        onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      />
                    </div>
                    <div className="col-span-5 relative">
                      <input
                        type="time"
                        required
                        value={formData.returnTime}
                        onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium text-center"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Car Model Selection (Accurate fleet matching Car Type) */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <CarIcon className="w-3.5 h-3.5 text-orange-600" />
                    <span>{t.selectCar}</span>
                  </label>
                  <select
                    value={formData.carType}
                    onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                  >
                    <optgroup label="รถเก๋งซีดาน (Sedan)">
                      <option value="Toyota Corolla Altis (Sedan • 1-3 ที่นั่ง)">Toyota Corolla Altis (Sedan • นั่งสบาย 1-3 ท่าน)</option>
                      <option value="Toyota Camry (Sedan VIP • 1-4 ที่นั่ง)">Toyota Camry (Sedan VIP • พรีเมียม 1-4 ท่าน)</option>
                    </optgroup>
                    
                    <optgroup label="รถครอบครัวอเนกประสงค์ (SUV)">
                      <option value="Toyota Fortuner (SUV • 1-5 ที่นั่ง ยอดนิยม)">Toyota Fortuner (SUV • 1-5 ท่าน ยอดนิยมอันดับ 1)</option>
                      <option value="Isuzu MU-X (SUV • 1-5 ที่นั่ง สัมภาระเยอะ)">Isuzu MU-X (SUV • 1-5 ท่าน สัมภาระเยอะ)</option>
                    </optgroup>

                    <optgroup label="รถตู้ VIP & MPV (Van)">
                      <option value="Toyota Commuter (Van • 5-10 ที่นั่ง เดินทางกลุ่ม)">Toyota Commuter (Van • 5-10 ท่าน เดินทางกลุ่ม/ครอบครัวใหญ่)</option>
                      <option value="Toyota Alphard VIP (First Class • 1-5 ที่นั่ง)">Toyota Alphard (First Class VIP • 1-5 ท่าน เบาะไฟฟ้า)</option>
                    </optgroup>
                  </select>
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.lineId}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Line ID หรือ WhatsApp"
                    value={formData.lineId}
                    onChange={(e) => setFormData({ ...formData, lineId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 disabled:bg-slate-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Send className={`w-4 h-4 ${loading ? "animate-pulse" : ""}`} />
                  <span>{loading ? (isTh ? "กำลังส่งคำขอจองรถเข้าอีเมล..." : "Sending Booking Email...") : t.submitBtn}</span>
                </button>
                <p className="text-center text-[11px] text-slate-400">
                  * {t.note}
                </p>

                {/* Direct Contact Channels Showcase below form */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-center mb-2.5">
                    <span className="text-xs text-slate-400 font-semibold">
                      {isTh ? "หรือติดต่อเจ้าหน้าที่ด่วนผ่านช่องทางตรง" : "Or contact us directly via instant channels"}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <a
                      href={`tel:${CONTACT_INFO.phones[0].number.replace(/[^0-9+]/g, '')}`}
                      className="px-3.5 py-2 rounded-xl bg-orange-50 text-orange-800 border border-orange-200 text-xs font-bold hover:bg-orange-100 flex items-center gap-1.5 transition shadow-xs"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
                      <span>{CONTACT_INFO.phones[0].number}</span>
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO.phones[1].number.replace(/[^0-9+]/g, '')}`}
                      className="px-3.5 py-2 rounded-xl bg-orange-50 text-orange-800 border border-orange-200 text-xs font-bold hover:bg-orange-100 flex items-center gap-1.5 transition shadow-xs"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
                      <span>{CONTACT_INFO.phones[1].number}</span>
                    </a>
                    <a
                      href={CONTACT_INFO.lineUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-500 text-white border border-emerald-600 text-xs font-bold hover:bg-emerald-600 flex items-center gap-1.5 transition shadow-xs"
                    >
                      <span>LINE @Official</span>
                    </a>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 flex items-center gap-1.5 transition shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={CONTACT_INFO.facebookUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold hover:bg-blue-100 flex items-center gap-1.5 transition shadow-xs"
                    >
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}

export default BookingSection;
