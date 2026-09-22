import React from 'react';
import { CheckCircle2, ShieldCheck, BookOpen, Compass } from 'lucide-react';

export const RiskReduction: React.FC = () => {
  return (
    <section id="belum-pernah-auditor" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-white border-2 border-blue-900/20 rounded-2xl p-5 shadow-xs text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 bg-blue-900 text-white px-3 py-1 rounded-full text-[10px] font-extrabold mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-200 shrink-0" />
            <span>PANDUAN BERTAHAP & RAMAH PEMULA</span>
          </div>

          {/* Headline */}
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-tight mb-3">
            BELUM PERNAH MENJADI AUDITOR? TIDAK MASALAH.
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-md mx-auto mb-4">
            Anda tidak memerlukan latar belakang khusus. Seluruh materi dirancang langsung aplikatif menggunakan bahasa kerja sehari-hari, bebas istilah rumit, dan mudah dipelajari mandiri.
          </p>

          {/* 3 Step Trust Pills */}
          <div className="space-y-2 text-left max-w-sm mx-auto">
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-gray-800">
                Bahasa Indonesia yang sederhana dan langsung
              </span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-gray-800">
                Dilengkapi contoh nyata dan form siap pakai
              </span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-gray-200/90 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-xs font-bold text-gray-800">
                Alat bantu AI siap memandu jika Anda ragu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
