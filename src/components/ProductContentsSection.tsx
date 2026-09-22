import React from 'react';
import { Bot, FileSpreadsheet, BookOpen, Target, Check, Infinity } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgAiSuiteWebp from '../assets/images/5-AI-TOOLS-dan-SIMULASI.webp';
import imgAiSuiteJpg from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';
import imgWorksheetWebp from '../assets/images/worksheet-dan-formulir-AMI.webp';
import imgWorksheetJpg from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import imgModulWebp from '../assets/images/9-modul-dan-audio.webp';
import imgModulJpg from '../assets/images/9-modul-dan-audio.jpg';

export const ProductContentsSection: React.FC = () => {
  return (
    <section id="isi-program" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
            PAKET LENGKAP AUDITOR PEMULA
          </span>
          <h2 className="text-xl font-black text-gray-900 tracking-tight mt-2 leading-tight">
            Apa yang Anda Dapatkan?
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Seluruh kebutuhan belajar dan praktik audit internal dalam satu akses.
          </p>
        </div>

        {/* 4 Big Cards Stack */}
        <div className="space-y-4">

          {/* Card 1: 9 MODUL PEMBELAJARAN */}
          <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black text-blue-900 uppercase tracking-wider block">PEMBELAJARAN</span>
                <h3 className="text-sm font-black text-gray-900 leading-snug">
                  📚 9 MODUL PEMBELAJARAN
                </h3>
              </div>
            </div>

            {/* Preview image */}
            <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 aspect-16/9">
              <picture>
                <source srcSet={imgModulWebp} type="image/webp" />
                <img
                  src={imgModulJpg}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.modul9.webpLocal, SMARTBOOK_IMAGES.modul9.local, SMARTBOOK_IMAGES.modul9.url)}
                  alt="9 Modul Pembelajaran Audit"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>

            <p className="text-xs text-gray-700 mb-2 font-medium">
              Materi audit internal terstruktur untuk membantu auditor pemula memahami audit dari dasar hingga pelaporan.
            </p>

            <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-800 font-medium">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Slide Presentasi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Mind Map Alur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pre & Post-Test</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Audio Materi</span>
              </div>
            </div>
          </div>

          {/* Card 2: 7 WORKSHEET AUDIT */}
          <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider block">WORKSHEET</span>
                <h3 className="text-sm font-black text-gray-900 leading-snug">
                  📝 7 WORKSHEET AUDIT
                </h3>
              </div>
            </div>

            {/* Preview image */}
            <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 aspect-16/9">
              <picture>
                <source srcSet={imgWorksheetWebp} type="image/webp" />
                <img
                  src={imgWorksheetJpg}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.worksheet.webpLocal, SMARTBOOK_IMAGES.worksheet.local, SMARTBOOK_IMAGES.worksheet.url)}
                  alt="7 Dokumen Kerja Audit"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>

            <p className="text-xs text-gray-700 mb-2 font-medium">
              Dokumen kerja audit format Word & Excel, 100% siap diedit dan disesuaikan:
            </p>

            <ul className="space-y-1 text-[11px] text-gray-800 font-medium mb-3">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Program Audit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Audit Plan & Jadwal</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Surat Notifikasi Audit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Checklist Audit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Daftar Hadir Audit</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>PTKP & CAPA</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Laporan Audit</span>
              </li>
            </ul>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-center text-[10px] font-bold text-emerald-900">
              Word & Excel • 100% dapat diedit • Siap disesuaikan
            </div>
          </div>

          {/* Card 3: SIMULASI AUDIT */}
          <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-800 text-white flex items-center justify-center font-bold shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider block">SIMULASI</span>
                <h3 className="text-sm font-black text-gray-900 leading-snug">
                  🎯 SIMULASI AUDIT
                </h3>
              </div>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              Belajar memahami penerapan proses audit melalui alur studi kasus nyata dari persiapan, observasi bukti, perumusan temuan, hingga evaluasi CAPA.
            </p>
          </div>

          {/* Card 4: 5 AI TOOLS AUDIT */}
          <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-800 text-white flex items-center justify-center font-bold shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-black text-indigo-800 uppercase tracking-wider block">TOOLS PENDUKUNG</span>
                <h3 className="text-sm font-black text-gray-900 leading-snug">
                  🤖 5 AI TOOLS AUDIT
                </h3>
              </div>
            </div>

            {/* Preview image */}
            <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 aspect-16/9">
              <picture>
                <source srcSet={imgAiSuiteWebp} type="image/webp" />
                <img
                  src={imgAiSuiteJpg}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.aiToolsSuite.webpLocal, SMARTBOOK_IMAGES.aiToolsSuite.local, SMARTBOOK_IMAGES.aiToolsSuite.url)}
                  alt="5 AI Tools Audit"
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>

            <p className="text-xs text-gray-700 leading-relaxed font-medium">
              Membantu proses belajar dan praktik: generator pertanyaan 5W+1H, bukti objektif, temuan PLOR, dan analisis 5-Why & CAPA.
            </p>
          </div>

          {/* Lifetime access banner */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-xl p-3.5 text-center flex items-center justify-center gap-2 shadow-sm">
            <Infinity className="w-4 h-4 text-blue-300 shrink-0" />
            <span className="text-xs font-black">
              ♾️ AKSES SEUMUR HIDUP (Tanpa Biaya Langganan)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

