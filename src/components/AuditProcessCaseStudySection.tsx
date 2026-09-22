import React from 'react';
import { ArrowDown, Workflow } from 'lucide-react';

export const AuditProcessCaseStudySection: React.FC = () => {
  const steps = [
    { name: 'KONDISI LAPANGAN', note: 'Fakta & observasi awal di area kerja' },
    { name: 'PERTANYAAN AUDITOR', note: 'Pertanyaan terarah untuk verifikasi alur' },
    { name: 'EVIDENCE / BUKTI OBJEKTIF', note: 'Bukti fisik, rekaman kerja, & dokumen' },
    { name: 'TEMUAN', note: 'Kesesuaian vs Ketidaksesuaian kriteria' },
    { name: 'PLOR', note: 'Problem, Location, Objective evidence, Reference' },
    { name: 'ROOT CAUSE', note: 'Analisis akar masalah via 5-Why terstruktur' },
    { name: 'CAPA', note: 'Tindakan korektif & pencegahan terukur' },
  ];

  return (
    <section id="studi-kasus-alur" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2">
            <Workflow className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>ALUR PRAKTIK LAPANGAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            CONTOH PENGGUNAAN DALAM PROSES AUDIT
          </h2>
          <p className="text-sm font-black text-blue-900 uppercase tracking-wide mt-1">
            DARI KONDISI LAPANGAN SAMPAI CAPA
          </p>
        </div>

        {/* Visual Card Alur Kerja */}
        <div className="max-w-md mx-auto bg-slate-50 border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs">
          <div className="space-y-2">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2.5 shadow-2xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-gray-900 tracking-tight">
                      {step.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium text-right shrink-0">
                    {step.note}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-4 h-4 text-blue-600 shrink-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Copy Sesuai Brief */}
          <div className="mt-4 pt-3.5 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-700 font-medium leading-relaxed">
              <strong className="text-blue-900 font-bold">SMART Audit System</strong> membantu memberikan starting point pada setiap tahapan, sehingga auditor pemula mempunyai alur kerja yang lebih jelas dan tidak perlu memulai semuanya dari file kosong.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
