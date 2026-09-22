import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanOffer: React.FC = () => {
  const inclusions = [
    '9 Modul E-Course Panduan Audit',
    '7 Worksheet Siap Edit (Excel & Word)',
    '5 AI Tools Pembuat Draf Audit',
    'Simulasi Audit & Studi Kasus Nyata',
    'Akses Digital Instan Seumur Hidup',
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-2">
          Harga &amp; Penawaran
        </h2>
        <p className="text-[16px] sm:text-[17px] text-slate-600 font-medium leading-normal mb-7">
          Satu kali pembayaran untuk seluruh instrumen kerja audit tanpa biaya langganan tambahan.
        </p>

        {/* Pricing Card */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 mb-5 text-center">
          <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            INVESTASI AKSES LENGKAP
          </div>

          {/* Red Price */}
          <div className="text-[40px] sm:text-[46px] font-black text-red-600 leading-none mb-1.5">
            Rp99.000
          </div>

          {/* Offer Terms */}
          <div className="text-[15px] sm:text-[16px] font-bold text-slate-800 mb-5">
            Sekali Bayar • Akses Seumur Hidup • Garansi 7 Hari
          </div>

          {/* Feature List */}
          <div className="space-y-2.5 text-left mb-5 border-t border-slate-200/80 pt-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-[16px] text-slate-800 font-medium">
                <span className="text-emerald-700 font-bold text-[18px]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <CtaButton position="pricing_section" />
        </div>

        {/* 7-Day Guarantee Box (Green accent) */}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-1.5 text-emerald-900 font-bold text-[17px] sm:text-[18px]">
            <span className="text-emerald-700 text-[20px]">✓</span>
            <span>Ketentuan Garansi 7 Hari</span>
          </div>
          <p className="text-[16px] text-emerald-950 leading-relaxed">
            Jika produk tidak sesuai dengan kebutuhan Anda, pengajuan pengembalian dana dapat dilakukan dalam tujuh hari sesuai ketentuan garansi.
          </p>
        </div>
      </div>
    </section>
  );
};
