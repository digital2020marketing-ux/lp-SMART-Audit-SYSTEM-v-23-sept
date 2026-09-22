import React from 'react';
import { CheckCircle2, UserCheck } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const criteria = [
    'Baru ditunjuk menjadi auditor internal',
    'Menjadi anggota tim audit tetapi belum punya pengalaman cukup',
    'Staff QA/QC, produksi, warehouse, engineering, HSE atau fungsi lain yang mendapat tugas audit',
    'Sudah pernah belajar teori audit tetapi masih bingung saat harus praktik',
  ];

  return (
    <section id="target-audience" className="py-8 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs font-extrabold mb-2.5">
            <UserCheck className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>KUALIFIKASI PESERTA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            SMART AUDIT SYSTEM PALING COCOK UNTUK ANDA JIKA:
          </h2>
        </div>

        {/* 4 Targeted Criteria Checklist */}
        <div className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 max-w-md mx-auto shadow-xs space-y-3.5">
          {criteria.map((text, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm sm:text-base text-gray-800 font-semibold leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
