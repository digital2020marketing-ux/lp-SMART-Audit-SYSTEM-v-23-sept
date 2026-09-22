import React from 'react';
import { Sparkles, CheckCircle2, Compass } from 'lucide-react';

export const DesiredOutcomeSection: React.FC = () => {
  const outcomes = [
    'Sudah tahu apa yang perlu dipersiapkan',
    'Sudah punya format checklist yang bisa diedit',
    'Punya gambaran pertanyaan yang perlu diajukan',
    'Lebih mudah menentukan bukti objektif',
    'Punya panduan saat menyusun temuan dan CAPA',
    'Tidak perlu membuat semua dokumen dari nol',
  ];

  return (
    <section id="desired-outcome" className="py-8 bg-gradient-to-b from-blue-50/50 via-slate-50 to-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-extrabold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>STARTING POINT YANG JELAS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            BAYANGKAN KALAU SEBELUM AUDIT DIMULAI, ANDA SUDAH PUNYA STARTING POINT YANG JELAS.
          </h2>
        </div>

        {/* Desired Outcomes Checkmarks */}
        <div className="bg-white border border-emerald-200/90 rounded-2xl p-4 sm:p-5 max-w-md mx-auto mb-4 shadow-xs space-y-3">
          {outcomes.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm text-gray-800 font-bold leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance Closing Note */}
        <div className="bg-blue-900 text-white rounded-2xl p-4 text-center max-w-md mx-auto shadow-md">
          <div className="inline-flex items-center gap-1.5 bg-blue-800/80 px-3 py-0.5 rounded-full text-xs font-bold text-blue-200 mb-2">
            <Compass className="w-3.5 h-3.5 text-cyan-300" />
            <span>KENDALI TETAP DI TANGAN ANDA</span>
          </div>
          <p className="text-sm sm:text-base text-blue-100 font-semibold leading-relaxed">
            Anda tetap menjadi auditor yang mengambil keputusan. <strong className="text-white font-extrabold">SMART Audit System</strong> membantu Anda bekerja lebih terstruktur.
          </p>
        </div>
      </div>
    </section>
  );
};
