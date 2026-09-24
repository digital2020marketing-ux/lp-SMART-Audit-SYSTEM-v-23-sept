import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanHero: React.FC = () => {
  return (
    <section className="w-full bg-white pt-4 sm:pt-6 pb-7 px-4 sm:px-5 border-b border-slate-100">
      <div className="w-full flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-blue-50 border border-blue-200/90 text-blue-900 rounded-full text-[11px] sm:text-[12px] font-extrabold tracking-wider uppercase mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          AUDITOR INTERNAL ISO 9001
        </div>

        {/* Headline — Elemen Teks Paling Dominan */}
        <h1 className="text-[25px] xs:text-[27px] sm:text-[32px] font-black text-slate-950 leading-[1.22] tracking-tight mb-2.5 max-w-[460px]">
          Sudah Ditunjuk Jadi Auditor Internal, Tapi Masih Bingung Harus Mulai Audit dari Mana?
        </h1>

        {/* Hook */}
        <p className="text-[16px] sm:text-[17px] text-slate-900 font-bold leading-snug mb-2 max-w-[440px]">
          Nggak cuma memahami klausul.
        </p>

        {/* Core Value Proposition */}
        <p className="text-[14.5px] sm:text-[15.5px] text-slate-700 font-medium leading-relaxed mb-2.5 max-w-[440px]">
          <strong className="text-slate-900 font-bold">SMART AUDIT SYSTEM</strong> membantu kamu menjalankan audit internal langkah demi langkah — mulai dari menyusun checklist &amp; pertanyaan, mengecek evidence, menulis temuan PLOR, sampai menyusun CAPA dan laporan audit.
        </p>

        {/* Reassurance */}
        <p className="text-[13.5px] sm:text-[14px] text-blue-950 font-bold bg-blue-50/80 border border-blue-100 py-1 px-3 rounded-lg mb-3.5">
          Tanpa harus membuat semua instrumen audit dari nol.
        </p>

        {/* 4 Feature Checklist Points (Compact 2-col on mobile to save vertical scroll) */}
        <div className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200/90 rounded-xl mb-3.5 text-left grid grid-cols-2 gap-x-2 gap-y-1.5 text-[13px] sm:text-[14px] font-bold text-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-black shrink-0">✓</span>
            <span className="leading-tight">9 Modul Panduan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-black shrink-0">✓</span>
            <span className="leading-tight">7 Worksheet Siap Edit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-black shrink-0">✓</span>
            <span className="leading-tight">5 AI Tools Audit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-600 font-black shrink-0">✓</span>
            <span className="leading-tight">Simulasi ISO 9001/19011</span>
          </div>
        </div>

        {/* Price & Offer Box — Rp99.000 Jauh Lebih Menonjol */}
        <div className="w-full bg-slate-50/90 border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 mb-3.5 text-center">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <span className="text-[13px] sm:text-[14px] text-slate-400 line-through font-bold">
              Rp299.000
            </span>
            <span className="text-[10.5px] font-black uppercase tracking-wider text-red-700 bg-red-100/90 px-2 py-0.2 rounded-full">
              Hemat 67%
            </span>
          </div>
          <div className="text-[38px] sm:text-[44px] font-black text-red-600 tracking-tight leading-none mb-1">
            Rp99.000
          </div>
          <p className="text-[13px] sm:text-[14px] text-slate-700 font-bold leading-tight">
            Sekali Bayar • Akses Seumur Hidup • Garansi 7 Hari
          </p>
        </div>

        {/* CTA Button — Sangat Jelas & Mudah Ditemukan */}
        <div className="w-full mb-4">
          <CtaButton 
            position="hero" 
            label="YA, SAYA MAU SMART AUDIT SYSTEM →" 
            sublabel="Akses instan setelah pembayaran"
          />
        </div>

        {/* Hero Product Mockup — Langsung Muncul Setelah CTA, Minimal Sebagian Terlihat Above the Fold */}
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
