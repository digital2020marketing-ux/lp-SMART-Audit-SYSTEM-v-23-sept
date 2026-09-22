import React from 'react';
import { AlertTriangle, Clock, FileQuestion, MessageSquareWarning, HelpCircle } from 'lucide-react';

export const ProblemAgitateSection: React.FC = () => {
  return (
    <section id="agitate-section" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1 rounded-full text-xs font-extrabold mb-2.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>REALITAS DI LAPANGAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            MASALAHNYA, AUDIT TETAP HARUS JALAN MESKIPUN ANDA MASIH BELAJAR.
          </h2>
        </div>

        {/* Agitate Story Cards / Flow */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 max-w-md mx-auto mb-4 space-y-3.5 text-sm text-gray-800 leading-relaxed font-medium">
          <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <Clock className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
            <p className="font-bold text-gray-900">
              Bayangkan jadwal audit sudah semakin dekat.
            </p>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <FileQuestion className="w-4.5 h-4.5 text-red-600 shrink-0 mt-0.5" />
            <p>
              Checklist masih kosong dan Anda belum tahu format kerja apa yang perlu disiapkan.
            </p>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <MessageSquareWarning className="w-4.5 h-4.5 text-blue-800 shrink-0 mt-0.5" />
            <p>
              Saat bertemu auditee, Anda bingung pertanyaan berikutnya apa.
            </p>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
            <HelpCircle className="w-4.5 h-4.5 text-purple-700 shrink-0 mt-0.5" />
            <p>
              Ketika menemukan kondisi yang terasa tidak sesuai, Anda masih ragu apakah itu benar-benar temuan audit.
            </p>
          </div>

          <div className="bg-slate-100 p-3.5 rounded-xl border border-slate-300/80">
            <p className="text-gray-900 font-medium">
              Bahkan setelah audit selesai, Anda masih harus menyusun temuan, mencari akar masalah, menentukan tindakan perbaikan (CAPA), dan membuat laporan resmi.
            </p>
          </div>
        </div>

        {/* Insight Box */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 border border-red-200 rounded-2xl p-4 text-center max-w-md mx-auto">
          <p className="text-sm sm:text-base text-gray-800 font-bold leading-relaxed">
            Di sinilah auditor pemula biasanya paling banyak kehilangan waktu: <span className="text-red-700">bukan karena tidak mau belajar</span>, tetapi karena <span className="text-blue-950 underline underline-offset-2">belum memiliki alur kerja yang jelas</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
