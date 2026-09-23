"use client";

import React, { useState, useEffect } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Language, translations } from "@/lib/i18n/translations";
import { getFaqsFromSanity } from "@/sanity/queries";

interface FAQSectionProps {
  lang: Language;
}

export function FAQSection({ lang }: FAQSectionProps) {
  const t = translations[lang].faqSection;
  const [faqs, setFaqs] = useState<{ q: string; a: string }[]>(t.faqs);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    async function loadFaqs() {
      const sanityFaqs = await getFaqsFromSanity();
      if (sanityFaqs && sanityFaqs.length > 0) {
        setFaqs(sanityFaqs);
      }
    }
    loadFaqs();
  }, [lang]);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold mb-3 border border-amber-200">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-amber-300 bg-amber-50/30 shadow-xs" : "border-slate-200/80 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-slate-900"
                >
                  <span className="flex-1">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-amber-600" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-amber-100/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;
