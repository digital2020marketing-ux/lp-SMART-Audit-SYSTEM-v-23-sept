import React from 'react';

export const CleanHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01 — BELAJAR',
      desc: 'Pahami alur audit melalui modul.',
    },
    {
      num: '02 — PRAKTIK',
      desc: 'Gunakan worksheet dan simulasi.',
    },
    {
      num: '03 — GUNAKAN',
      desc: 'Sesuaikan dengan kebutuhan audit di tempat kerja.',
    },
  ];

  return (
    <section className="bg-white py-8 px-4 border-b border-gray-100">
      <div className="w-full text-left">
        {/* H2 */}
        <h2 className="text-[21px] sm:text-[23px] font-bold text-gray-900 leading-[1.25] mb-4">
          Dari Belajar Sampai Siap Digunakan
        </h2>

        {/* 3 Steps */}
        <div className="space-y-3.5 mb-5">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-gray-200/80 rounded-xl p-3.5">
              <div className="text-[12px] font-extrabold text-blue-700 tracking-wider mb-0.5">
                {step.num}
              </div>
              <div className="text-[14px] sm:text-[15px] font-medium text-gray-800 leading-snug">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* 1 Line Audit Workflow */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 text-center">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
            Alur 7 Tahap Audit:
          </div>
          <div className="text-[12px] sm:text-[13px] font-bold text-gray-800 leading-relaxed flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
            <span>Persiapan</span>
            <span className="text-gray-400">→</span>
            <span>Pertanyaan</span>
            <span className="text-gray-400">→</span>
            <span>Evidence</span>
            <span className="text-gray-400">→</span>
            <span>Temuan</span>
            <span className="text-gray-400">→</span>
            <span>Root Cause</span>
            <span className="text-gray-400">→</span>
            <span>CAPA</span>
            <span className="text-gray-400">→</span>
            <span>Laporan</span>
          </div>
        </div>
      </div>
    </section>
  );
};
