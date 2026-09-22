import React from 'react';
import { BookOpen, FileSpreadsheet, Bot, Sparkles, Layers } from 'lucide-react';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';

export const ThreePillarsProductSection: React.FC = () => {
  return (
    <section id="tiga-pilar" className="bg-slate-50 py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <Layers className="w-4 h-4 text-blue-700 shrink-0" />
            <span>ARSITEKTUR PEMBELAJARAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            3 PILAR PRAKTIK SMART AUDIT SYSTEM
          </h2>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-black text-blue-800 uppercase tracking-wide mt-1.5">
            <span>BELAJAR</span>
            <span className="text-blue-400">→</span>
            <span>PRAKTIK</span>
            <span className="text-blue-400">→</span>
            <span>GUNAKAN</span>
          </div>
        </div>

        {/* 3 Blok Pilar */}
        <div className="space-y-3 mb-6">
          
          {/* Pilar 1 */}
          <div className="bg-white border-2 border-blue-200/80 rounded-2xl p-4 shadow-sm text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] sm:text-xs font-black tracking-wider text-blue-700 uppercase">
                01 — BELAJAR
              </span>
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700">
                <BookOpen className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight mb-1">
              9 Modul E-Course Praktis
            </h3>
            <p className="text-[14px] sm:text-[15px] text-gray-700 font-medium leading-relaxed">
              Materi audit dari persiapan sampai laporan, dilengkapi ebook, audio, dan evaluasi.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white border-2 border-emerald-200/80 rounded-2xl p-4 shadow-sm text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] sm:text-xs font-black tracking-wider text-emerald-700 uppercase">
                02 — PRAKTIK
              </span>
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                <FileSpreadsheet className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight mb-1">
              7 Worksheet Word &amp; Excel Siap Edit
            </h3>
            <p className="text-[14px] sm:text-[15px] text-gray-700 font-medium leading-relaxed">
              Checklist, evidence, PLOR, Root Cause, CAPA, dan format kerja audit.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white border-2 border-amber-300/80 rounded-2xl p-4 shadow-sm text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] sm:text-xs font-black tracking-wider text-amber-700 uppercase">
                03 — GUNAKAN
              </span>
              <span className="p-1.5 rounded-lg bg-amber-50 text-amber-700">
                <Bot className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight mb-1">
              5 AI Tools Khusus Audit
            </h3>
            <p className="text-[14px] sm:text-[15px] text-gray-700 font-medium leading-relaxed">
              Termasuk AI GPT Co-Pilot ISO 19011:2026 dan simulasi audit.
            </p>
          </div>

        </div>

        {/* Screenshot Produk Nyata */}
        <div className="space-y-4">
          <div className="text-center mb-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-700" />
              <span>SCREENSHOT PRODUK NYATA</span>
            </div>
          </div>

          {/* 1. Screenshot E-Course */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
            <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-[13px] sm:text-sm font-black">1. E-Course Audit</span>
              <span className="text-[11px] font-bold text-amber-300 uppercase">9 Modul + Audio</span>
            </div>
            <picture className="w-full">
              <source srcSet="/images/9-modul-dan-audio.webp" type="image/webp" />
              <img
                src="/images/9-modul-dan-audio.webp"
                onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.modul9.local, SMARTBOOK_IMAGES.modul9.url)}
                referrerPolicy="no-referrer"
                alt="Screenshot 9 Modul E-Course Praktis & Audio Pembelajaran"
                width={600}
                height={338}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </picture>
            <div className="p-3 bg-slate-50 text-center border-t border-gray-200">
              <p className="text-[13px] sm:text-sm text-gray-700 font-semibold leading-snug">
                Screenshot 9 Modul E-Course Praktis &amp; Audio Pembelajaran Alur Audit.
              </p>
            </div>
          </div>

          {/* 2. Screenshot Worksheet */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
            <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-[13px] sm:text-sm font-black">2. Worksheet Audit</span>
              <span className="text-[11px] font-bold text-emerald-400 uppercase">Word &amp; Excel</span>
            </div>
            <picture className="w-full">
              <source srcSet={SMARTBOOK_IMAGES.worksheet.webpLocal} type="image/webp" />
              <img
                src={SMARTBOOK_IMAGES.worksheet.webpLocal}
                onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.worksheet.local, SMARTBOOK_IMAGES.worksheet.url)}
                referrerPolicy="no-referrer"
                alt="Screenshot 7 Format Worksheet Audit Standar AMI"
                width={600}
                height={338}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </picture>
            <div className="p-3 bg-slate-50 text-center border-t border-gray-200">
              <p className="text-[13px] sm:text-sm text-gray-700 font-semibold leading-snug">
                Screenshot 7 Format Worksheet: Checklist 5W+1H, Evidence, Temuan PLOR, dan Analisis CAPA.
              </p>
            </div>
          </div>

          {/* 3. Screenshot AI Tools */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md">
            <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-[13px] sm:text-sm font-black">3. AI Tools Auditor</span>
              <span className="text-[11px] font-bold text-amber-300 uppercase">5 Tools Khusus</span>
            </div>
            <picture className="w-full">
              <source srcSet={SMARTBOOK_IMAGES.aiToolsSuite.webpLocal} type="image/webp" />
              <img
                src={SMARTBOOK_IMAGES.aiToolsSuite.webpLocal}
                onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.aiToolsSuite.local, SMARTBOOK_IMAGES.aiToolsSuite.url)}
                referrerPolicy="no-referrer"
                alt="Screenshot 5 AI Tools Khusus Audit dan Simulasi"
                width={600}
                height={338}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
            </picture>
            <div className="p-3 bg-slate-50 text-center border-t border-gray-200">
              <p className="text-[13px] sm:text-sm text-gray-700 font-semibold leading-snug">
                Screenshot 5 AI Tools Khusus Audit: Buat Checklist Cepat, Temuan PLOR, CAPA &amp; Simulasi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
