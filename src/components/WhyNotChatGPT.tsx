import React from 'react';
import { HelpCircle, Check, X, Sparkles, Workflow, ArrowRight } from 'lucide-react';

export const WhyNotChatGPT: React.FC = () => {
  return (
    <section id="kenapa-bukan-chatgpt" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>PERTANYAAN LOGIS & OBJEKTIF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            “Kalau Berbasis AI, Kenapa Tidak Pakai ChatGPT Biasa Saja?”
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Jawabannya jujur: <strong className="text-gray-900 font-bold">Bisa.</strong> Tetapi Anda tetap harus membangun sistem dan alur kerjanya sendiri dari nol setiap kali audit.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Kolom 1: ChatGPT Biasa */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                  🤖
                </span>
                <div>
                  <h3 className="text-base font-black text-slate-800">
                    ChatGPT Biasa
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    General-Purpose AI (Alat Umum)
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mb-4 italic">
                Anda tetap harus melakukan semua setup manual sendiri:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-normal">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Harus membuat dan menyempurnakan prompt instruksi yang panjang dan berulang.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Harus memberikan konteks standar klausul ISO 9001 & 19011 secara manual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Harus menentukan format output agar sesuai kaidah formal audit (5W+1H / PLOR).</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Harus membuat dokumen template Word & Excel sendiri untuk mencatat hasilnya.</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Harus merangkai sendiri keterhubungan dari checklist → temuan → 5-Why → CAPA.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-600 font-bold block text-center">
                👉 AI-nya ada, tapi sistem & workflow-nya belum siap.
              </span>
            </div>
          </div>

          {/* Kolom 2: SMART Audit SYSTEM */}
          <div className="bg-blue-50/70 rounded-3xl p-6 sm:p-7 border-2 border-blue-500/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200">
                <span className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
                  ⚡
                </span>
                <div>
                  <h3 className="text-base font-black text-blue-950">
                    SMART Audit SYSTEM
                  </h3>
                  <span className="text-xs text-blue-800 font-medium">
                    Specialized Audit Workflow (Sistem Khusus)
                  </span>
                </div>
              </div>

              <p className="text-xs text-blue-700 mb-4 font-semibold">
                AI sudah ditempatkan dalam alur kerja audit spesifik ISO:
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-blue-950 font-semibold">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Prompt Setup:</strong> Masukkan proses/klausul, sistem langsung menghasilkan output presisi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Konteks ISO Bawaan:</strong> Format baku 5W+1H, PLOR, dan panduan klausul ISO 9001 & 19011 terintegrasi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dokumen Operasional Siap:</strong> Terhubung dengan 7 Worksheet Word & Excel standar industri.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Alur Kerja Terhubung:</strong> Bergerak mulus dari persiapan checklist → temuan → CAPA Tracker.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Knowledge System Terpadu:</strong> Dilengkapi 9 modul, slide, mind map, dan audio summary.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-200">
              <span className="text-xs text-blue-900 font-black block text-center">
                ✨ Tinggal pakai — langsung siap menjadi starting point kerja Anda.
              </span>
            </div>
          </div>

        </div>

        {/* Summary Anchor Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 text-center border border-slate-800 shadow-md">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Perbedaannya jelas:
          </p>
          <p className="text-sm sm:text-base font-black text-emerald-400 mt-1">
            ChatGPT adalah alat serbaguna (General Tool) • SMART Audit SYSTEM adalah Alur Kerja Audit Spesialis (Specialized Workflow).
          </p>
        </div>

      </div>
    </section>
  );
};
