import React from 'react';
import { BookOpen, Cpu, FileSpreadsheet, Sparkles } from 'lucide-react';

export const BelajarLatihTerapkanSection: React.FC = () => {
  return (
    <section id="belajar-latih-terapkan" className="bg-white py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <Sparkles className="w-4 h-4 text-blue-700 shrink-0" />
            <span>METODE PRAKTIK TERPADU</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            BUKAN SEKADAR BACA MODUL
          </h2>
          <p className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight leading-tight mt-1">
            BELAJAR → LATIH → TERAPKAN
          </p>
        </div>

        {/* 3 Cards */}
        <div className="space-y-3.5 mb-5">
          
          {/* Card 1: BELAJAR */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-4 sm:p-4.5 shadow-2xs hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-black shrink-0 shadow-xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-black tracking-wider text-blue-700 uppercase block">
                  LANGKAH 1
                </span>
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                  BELAJAR
                </h3>
              </div>
            </div>
            <p className="text-[14px] sm:text-[15px] text-gray-800 font-semibold leading-relaxed pl-1">
              9 Modul E-Course Praktis untuk memahami dasar dan tahapan audit.
            </p>
          </div>

          {/* Card 2: LATIH */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-4 sm:p-4.5 shadow-2xs hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-black shrink-0 shadow-xs">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-black tracking-wider text-blue-700 uppercase block">
                  LANGKAH 2
                </span>
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                  LATIH
                </h3>
              </div>
            </div>
            <p className="text-[14px] sm:text-[15px] text-gray-800 font-semibold leading-relaxed pl-1">
              Simulasi Audit dengan AI untuk berlatih pertanyaan, evidence, dan situasi auditee.
            </p>
          </div>

          {/* Card 3: TERAPKAN */}
          <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-4 sm:p-4.5 shadow-2xs hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center font-black shrink-0 shadow-xs">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-black tracking-wider text-blue-700 uppercase block">
                  LANGKAH 3
                </span>
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                  TERAPKAN
                </h3>
              </div>
            </div>
            <p className="text-[14px] sm:text-[15px] text-gray-800 font-semibold leading-relaxed pl-1">
              7 Worksheet + 5 AI Tools sebagai starting point pekerjaan audit.
            </p>
          </div>

        </div>

        {/* Closing takeaway */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white rounded-xl p-4 text-center border border-blue-800 shadow-md">
          <p className="text-sm sm:text-base font-bold leading-relaxed text-slate-100">
            Belajar praktis, berlatih, lalu gunakan langsung saat mempersiapkan audit.
          </p>
        </div>

      </div>
    </section>
  );
};
