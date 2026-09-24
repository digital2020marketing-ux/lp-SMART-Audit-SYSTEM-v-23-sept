import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanSolution: React.FC = () => {
  const steps = [
    { title: 'PERSIAPAN', desc: 'Menentukan jadwal, ruang lingkup, dan dokumen acuan.' },
    { title: 'CHECKLIST & PERTANYAAN', desc: 'Menyiapkan panduan wawancara terarah per klausul.' },
    { title: 'INTERVIEW & EVIDENCE', desc: 'Mengecek bukti objektif secara terstruktur di lapangan.' },
    { title: 'TEMUAN PLOR', desc: 'Format Problem, Location, Objective evidence, Reference.' },
    { title: 'ROOT CAUSE & CAPA', desc: 'Analisis 5-Why dan tindakan perbaikan korektif.' },
    { title: 'LAPORAN AUDIT', desc: 'Penyusunan laporan akhir resmi yang siap diserahkan.' },
  ];

  return (
    <section className="w-full bg-slate-50 py-10 sm:py-12 px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-blue-700 block mb-1.5">
          SOLUSI SISTEMATIS
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-3">
          Kamu Tidak Butuh Menyusun Semuanya dari Nol
        </h2>

        {/* Subhead Explanation */}
        <p className="text-[15.5px] sm:text-[16px] text-slate-700 font-medium leading-relaxed mb-5">
          Yang kamu butuhkan adalah <strong className="text-slate-950 font-bold">sistem kerja audit</strong> yang menunjukkan apa yang perlu dilakukan di setiap tahap.
        </p>

        {/* Intro to SAS */}
        <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm mb-6">
          <p className="text-[13px] font-bold text-blue-800 uppercase tracking-wider mb-1">
            Itulah kenapa kami menyusun:
          </p>
          <h3 className="text-[22px] sm:text-[24px] font-black text-slate-950 leading-tight mb-2">
            SMART AUDIT SYSTEM
          </h3>
          <p className="text-[15px] text-slate-700 font-medium leading-relaxed">
            Panduan praktis yang membantu mengubah proses audit menjadi alur kerja yang lebih terstruktur:
          </p>
        </div>

        {/* Linear Workflow Cards with Arrows */}
        <div className="space-y-2 mb-6">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-900 text-white text-[13px] font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-[15px] sm:text-[16px] font-black text-slate-900 tracking-tight leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[13px] text-slate-600 font-medium leading-tight mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex justify-center py-0.5 text-blue-600 font-black text-[18px] leading-none">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Closing Takeaway */}
        <div className="p-4 rounded-xl bg-blue-950 text-white mb-6">
          <p className="text-[15px] sm:text-[15.5px] font-medium leading-relaxed">
            Jadi saat waktunya praktik, kamu tidak hanya tahu teorinya.
          </p>
          <p className="text-[15px] sm:text-[15.5px] font-bold text-amber-300 leading-relaxed mt-1">
            Kamu punya panduan dan instrumen kerja yang bisa dibuka dan digunakan.
          </p>
        </div>

        {/* CTA Button */}
        <CtaButton
          position="bridging_section"
          label="SAYA MAU PANDUAN AUDITNYA →"
          sublabel="Akses Langsung — Rp99.000 Sekali Bayar"
        />
      </div>
    </section>
  );
};
