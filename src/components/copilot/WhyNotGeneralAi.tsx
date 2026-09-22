import React from 'react';
import { HelpCircle, XCircle, CheckCircle2, Bot, Layers } from 'lucide-react';

export const WhyNotGeneralAi: React.FC = () => {
  return (
    <section id="why-not-general-ai" className="py-7 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-800 shrink-0" />
            <span>OBJECTION HANDLING</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            KENAPA TIDAK CUKUP HANYA MEMBUKA AI UMUM?
          </h2>
        </div>

        {/* Comparison Box */}
        <div className="space-y-3 mb-4">
          {/* AI Umum Card */}
          <div className="bg-white border border-red-200 rounded-2xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900">
                AI Umum (ChatGPT Gratisan / AI Biasa)
              </h3>
            </div>
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              AI umum tidak tahu workflow audit Anda, tidak menyediakan worksheet Word/Excel yang siap edit, tidak memiliki struktur formulasi PLOR bawaan, dan tidak memiliki modul panduan audit yang terintegrasi.
            </p>
          </div>

          {/* SMART AUDIT SYSTEM Card */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-4 shadow-sm border border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 stroke-[3]" />
              </div>
              <h3 className="text-xs sm:text-sm font-black text-amber-300">
                SMART AUDIT SYSTEM Menggabungkan:
              </h3>
            </div>
            <div className="bg-white/10 rounded-xl p-3 border border-white/10 text-xs font-bold leading-relaxed text-blue-50 space-y-1">
              <p>✓ Sistem Audit Terpadu</p>
              <p>✓ 7 Worksheet Word & Excel Siap Pakai</p>
              <p>✓ Simulasi Interaktif Latihan Audit</p>
              <p>✓ 5 AI Tools yang sudah disesuaikan dengan kebutuhan auditor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
