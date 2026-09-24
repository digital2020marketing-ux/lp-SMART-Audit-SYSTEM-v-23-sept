import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanOffer: React.FC = () => {
  const valueInclusions = [
    '9 Modul Panduan Audit Internal',
    '7 Worksheet Siap Edit',
    '5 AI Tools Audit',
    'Simulasi Audit & Studi Kasus',
    'Akses Digital Seumur Hidup',
  ];

  return (
    <section className="w-full bg-slate-50 py-10 sm:py-12 px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-red-700 block mb-1.5">
          PENAWARAN LENGKAP
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-2">
          Tidak Perlu Membuat Instrumen Audit dari Nol
        </h2>
        <p className="text-[15px] sm:text-[16px] text-slate-700 font-medium leading-relaxed mb-6">
          Dengan satu kali pembayaran, kamu mendapatkan seluruh instrumen kerja audit yang siap digunakan:
        </p>

        {/* Pricing Card */}
        <div className="rounded-2xl border-2 border-slate-300/90 bg-white p-5 mb-5 text-center shadow-md">
          {/* Feature List */}
          <div className="space-y-2.5 text-left mb-6 pb-5 border-b border-slate-200">
            {valueInclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-[15.5px] text-slate-900 font-bold">
                <span className="text-emerald-600 font-black text-[18px]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            Harga normal:
          </div>
          <div className="text-[17px] text-slate-400 line-through font-bold mb-3">
            Rp299.000
          </div>

          <div className="text-[14px] font-extrabold text-blue-900 uppercase tracking-wider mb-1">
            Hari ini akses lengkap hanya:
          </div>

          {/* Red Price */}
          <div className="text-[42px] sm:text-[48px] font-black text-red-600 leading-none mb-2">
            Rp99.000
          </div>

          {/* Offer Terms */}
          <div className="text-[15px] sm:text-[16px] font-black text-slate-900 mb-6 bg-slate-100 py-1.5 px-3 rounded-lg inline-block">
            Sekali Bayar. Tidak Ada Biaya Bulanan.
          </div>

          {/* CTA Button */}
          <CtaButton
            position="value_stack_section"
            label="YA, SAYA MAU SMART AUDIT SYSTEM — Rp99.000 →"
            sublabel="Akses Instan • Akses Seumur Hidup • Garansi 7 Hari"
          />
        </div>
      </div>
    </section>
  );
};
