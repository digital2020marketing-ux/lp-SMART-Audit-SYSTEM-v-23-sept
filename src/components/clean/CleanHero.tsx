import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanHero: React.FC = () => {
  return (
    <section className="w-full bg-white pt-6 pb-8 px-5 border-b border-slate-100">
      <div className="w-full flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/90 text-blue-900 rounded-full text-[12px] sm:text-[13px] font-extrabold tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          AUDITOR INTERNAL ISO 9001
        </div>

        {/* Headline */}
        <h1 className="text-[27px] sm:text-[32px] font-black text-slate-900 leading-[1.2] tracking-tight mb-3">
          Sudah Ditunjuk Jadi Auditor Internal, Tapi Masih Bingung Harus Mulai Audit dari Mana?
        </h1>

        {/* Hook */}
        <p className="text-[17px] sm:text-[18px] text-slate-800 font-bold leading-snug mb-3 max-w-[440px]">
          Nggak cuma memahami klausul.
        </p>

        {/* Core Value Proposition */}
        <p className="text-[15.5px] text-slate-700 font-medium leading-relaxed mb-3 max-w-[440px]">
          <strong className="text-slate-900 font-bold">SMART AUDIT SYSTEM</strong> membantu kamu menjalankan audit internal langkah demi langkah — mulai dari menyusun checklist &amp; pertanyaan, mengecek evidence, menulis temuan PLOR, sampai menyusun CAPA dan laporan audit.
        </p>

        {/* Reassurance */}
        <p className="text-[14.5px] text-blue-950 font-bold bg-blue-50/70 border border-blue-100 py-1.5 px-3 rounded-lg mb-4">
          Tanpa harus membuat semua instrumen audit dari nol.
        </p>

        {/* 4 Feature Checklist Points */}
        <div className="w-full py-3 px-4 bg-slate-50 border border-slate-200/90 rounded-2xl mb-4 text-left space-y-1.5">
          <div className="flex items-center gap-2 text-[14.5px] sm:text-[15px] font-bold text-slate-800">
            <span className="text-emerald-600 font-black">✓</span>
            <span>9 Modul Panduan Audit</span>
          </div>
          <div className="flex items-center gap-2 text-[14.5px] sm:text-[15px] font-bold text-slate-800">
            <span className="text-emerald-600 font-black">✓</span>
            <span>7 Worksheet Siap Edit</span>
          </div>
          <div className="flex items-center gap-2 text-[14.5px] sm:text-[15px] font-bold text-slate-800">
            <span className="text-emerald-600 font-black">✓</span>
            <span>5 AI Tools Audit</span>
          </div>
          <div className="flex items-center gap-2 text-[14.5px] sm:text-[15px] font-bold text-slate-800">
            <span className="text-emerald-600 font-black">✓</span>
            <span>Simulasi Audit ISO 9001 &amp; ISO 19011</span>
          </div>
        </div>

        {/* Price & Offer Box */}
        <div className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl p-4 mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[14px] text-slate-400 line-through font-bold">Rp299.000</span>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded-full">Hemat 67%</span>
          </div>
          <div className="text-[40px] sm:text-[44px] font-black text-red-600 tracking-tight leading-none mb-1.5">
            Rp99.000
          </div>
          <p className="text-[14px] sm:text-[15px] text-slate-700 font-bold">
            Sekali Bayar • Akses Seumur Hidup • Garansi 7 Hari
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full mb-5">
          <CtaButton 
            position="hero" 
            label="YA, SAYA MAU SMART AUDIT SYSTEM →" 
            sublabel="Akses instan setelah pembayaran"
          />
        </div>

        {/* Hero Product Mockup */}
        <div className="w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-50">
          <img
            src="/images/hero-mockup-sas.webp"
            alt="Mockup SMART AUDIT SYSTEM — 9 Modul, 7 Worksheet, 5 AI Tools"
            width={720}
            height={460}
            className="w-full h-auto object-cover block"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget;
              const stage = parseInt(target.dataset.stage || '0', 10);
              
              if (stage === 0) {
                target.dataset.stage = '1';
                target.src = 'https://i.ibb.co.com/xqtkxhYg/Chat-GPT-Image-Sep-22-2026-10-04-25-PM.png';
              } else if (stage === 1) {
                target.dataset.stage = '2';
                target.src = 'https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg';
              } else if (stage === 2) {
                target.dataset.stage = '3';
                target.src = '/images/hero-mockup-bundle.svg';
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};
