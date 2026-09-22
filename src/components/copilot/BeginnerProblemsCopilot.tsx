import React from 'react';
import { HelpCircle, Check, Sparkles } from 'lucide-react';

export const BeginnerProblemsCopilot: React.FC = () => {
  const painPoints = [
    'Baru ditunjuk jadi auditor tetapi belum pernah menjalankan audit',
    'Bingung harus bertanya apa kepada auditee',
    'Tidak tahu dokumen dan bukti apa yang harus diperiksa',
    'Menemukan kondisi bermasalah tetapi ragu apakah termasuk temuan',
    'Bingung menyusun PLOR, root cause, dan CAPA',
  ];

  return (
    <section id="masalah-auditor-copilot" className="py-7 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-black mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-red-700 shrink-0" />
            <span>KENDALA AUDITOR PEMULA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            PERNAH MENGALAMI HAL INI?
          </h2>
        </div>

        {/* 5 Points List */}
        <div className="space-y-2 mb-4">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-red-100 shadow-2xs"
            >
              <div className="w-4 h-4 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <p className="text-xs sm:text-sm text-gray-800 font-semibold leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Bridge */}
        <div className="bg-blue-900 text-white p-3.5 rounded-xl shadow-xs text-center">
          <p className="text-xs sm:text-sm font-bold leading-relaxed text-blue-50">
            Masalahnya bukan Anda tidak mau belajar. Anda belum mempunyai <span className="text-amber-300 font-black">starting point</span> dan <span className="text-amber-300 font-black">workflow kerja</span> yang jelas.
          </p>
        </div>
      </div>
    </section>
  );
};
