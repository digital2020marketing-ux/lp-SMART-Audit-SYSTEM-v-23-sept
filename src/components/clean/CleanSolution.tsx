import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanSolution: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: 'PERSIAPAN',
      desc: 'Menentukan jadwal, ruang lingkup, kriteria, dan dokumen acuan.',
    },
    {
      num: '02',
      title: 'CHECKLIST & PERTANYAAN',
      desc: 'Menyiapkan panduan wawancara terarah per klausul spesifik.',
    },
    {
      num: '03',
      title: 'INTERVIEW & EVIDENCE',
      desc: 'Mengecek bukti objektif dan sampel data secara terstruktur di lapangan.',
    },
    {
      num: '04',
      title: 'TEMUAN PLOR',
      desc: 'Format baku Problem, Location, Objective evidence, Reference klausul.',
    },
    {
      num: '05',
      title: 'ROOT CAUSE & CAPA',
      desc: 'Analisis akar penyebab 5-Why dan tindakan korektif sistematis.',
    },
    {
      num: '06',
      title: 'LAPORAN AUDIT',
      desc: 'Penyusunan laporan akhir resmi yang siap diserahkan ke manajemen.',
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-blue-800 block mb-1">
          SOLUSI SISTEMATIS
        </span>

        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-tight mb-2.5">
          Kamu Tidak Butuh Menyusun Semuanya dari Nol
        </h2>

        {/* Subhead Explanation */}
        <p className="text-[14.5px] sm:text-[15.5px] text-slate-700 font-medium leading-relaxed mb-4">
          Yang kamu butuhkan adalah <strong className="text-slate-950 font-bold">sistem kerja audit</strong> yang menunjukkan apa yang perlu dilakukan di setiap tahap.
        </p>

        {/* Intro to SAS */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-blue-200 shadow-2xs mb-5">
          <p className="text-[12px] font-bold text-blue-800 uppercase tracking-wider mb-0.5">
            Itulah kenapa kami menyusun:
          </p>
          <h3 className="text-[20px] sm:text-[22px] font-black text-slate-950 leading-tight mb-1">
            SMART AUDIT SYSTEM
          </h3>
          <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
            Panduan praktis yang membantu mengubah proses audit menjadi alur kerja yang lebih terstruktur:
          </p>
        </div>

        {/* Visual Vertical Timeline / Process Stepper */}
        <div className="relative pl-6 sm:pl-8 space-y-4 mb-6 before:content-[''] before:absolute before:left-[15px] sm:before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-blue-300">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative flex items-start group">
              {/* Step Node Circle */}
              <div className="absolute -left-6 sm:-left-8 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-900 text-white font-black text-[12px] sm:text-[13px] flex items-center justify-center border-2 border-white shadow-xs shrink-0">
                {step.num}
              </div>

              {/* Step Content Card */}
              <div className="w-full bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/90 shadow-2xs">
                <h4 className="text-[14.5px] sm:text-[15.5px] font-black text-slate-900 tracking-tight leading-snug">
                  {step.title}
                </h4>
                <p className="text-[13px] text-slate-600 font-medium leading-tight mt-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Takeaway */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-blue-950 text-white mb-5">
          <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed">
            Jadi saat waktunya praktik, kamu tidak hanya tahu teorinya.
          </p>
          <p className="text-[14px] sm:text-[15px] font-bold text-amber-300 leading-relaxed mt-1">
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
