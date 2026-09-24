import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanOffer: React.FC = () => {
  const valueInclusions = [
    '9 Modul Panduan Audit',
    '7 Worksheet Siap Edit',
    '5 AI Tools Audit',
    'Simulasi Audit ISO 9001 & 19011',
    'Lifetime Access (Akses Seumur Hidup)',
  ];

  return (
    <section className="w-full bg-slate-50 py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
          PENAWARAN SPESIAL
        </span>

        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-tight mb-2">
          Semua Instrumen Audit dalam Satu Investasi Terjangkau
        </h2>
        <p className="text-[14px] sm:text-[15px] text-slate-700 font-medium leading-relaxed mb-4">
          Dengan satu kali pembayaran, kamu mendapatkan seluruh instrumen kerja audit yang siap pakai:
        </p>

        {/* Highlighted Value Stack Card — Salah Satu Bagian Paling Mudah Terlihat */}
        <div className="rounded-2xl border-2 border-red-500 bg-white p-4 sm:p-5 mb-3 text-center shadow-lg relative overflow-hidden">
          {/* Top Value Banner */}
          <div className="bg-red-600 text-white text-[11px] sm:text-[12px] font-black uppercase tracking-wider py-1 px-3 -mx-5 -mt-5 mb-4">
            PAKET LENGKAP AUDITOR INTERNAL
          </div>

          {/* Visual Value Stack */}
          <div className="space-y-2 text-left mb-5 pb-4 border-b border-slate-200">
            {valueInclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-[14.5px] sm:text-[15.5px] text-slate-950 font-bold">
                <span className="text-emerald-600 font-black text-[17px] shrink-0">✓</span>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Strikethrough Normal Price */}
          <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
            Harga Normal:
          </div>
          <div className="text-[15px] sm:text-[16px] text-slate-400 line-through font-bold mb-2">
            Rp299.000
          </div>

          {/* Special Price — Rp99.000 Jauh Lebih Menonjol */}
          <div className="text-[12.5px] font-extrabold text-slate-800 uppercase tracking-wider mb-1">
            Hari Ini Cukup Investasi:
          </div>
          <div className="text-[44px] sm:text-[50px] font-black text-red-600 leading-none mb-2 tracking-tight">
            Rp99.000
          </div>

          {/* Terms */}
          <div className="text-[13px] sm:text-[14px] font-bold text-slate-800 mb-5 bg-slate-100 py-1.5 px-3 rounded-lg inline-block">
            Sekali bayar • Akses seumur hidup • Garansi 7 hari
          </div>

          {/* CTA Langsung di Bawahnya */}
          <CtaButton
            position="value_stack_section"
            label="YA, SAYA MAU SMART AUDIT SYSTEM — Rp99.000 →"
            sublabel="Akses Instan • Garansi 7 Hari Uang Kembali"
          />
        </div>
      </div>
    </section>
  );
};
