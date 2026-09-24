import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanHero: React.FC = () => {
  return (
    <section className="w-full bg-white pt-6 pb-8 px-5 border-b border-slate-100">
      <div className="w-full flex flex-col items-center text-center">
        {/* ISO Standard Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50 border border-blue-200/90 text-blue-900 rounded-full text-[13px] sm:text-[14px] font-bold tracking-tight mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          Standar ISO 9001 &amp; ISO 19011
        </div>

        {/* Main Title (30-34px) */}
        <h1 className="text-[30px] sm:text-[34px] font-black text-slate-900 leading-[1.15] tracking-tight mb-3">
          Panduan Lengkap Audit Internal ISO 9001 &amp; 19011
        </h1>

        {/* Subtitle (18-20px) */}
        <p className="text-[17.5px] sm:text-[19px] text-slate-800 font-bold leading-snug mb-3 max-w-[440px]">
          Siap Jalankan Audit Tanpa Bingung — Dilengkapi Checklist, Template PLOR &amp; CAPA Siap Pakai!
        </p>

        {/* Kalimat yang Memperjelas Hasil */}
        <p className="text-[15.5px] text-slate-600 font-medium leading-relaxed mb-4 max-w-[440px]">
          Solusi praktis untuk auditor pemula &amp; tim mutu: mulai dari persiapan audit, verifikasi evidence klausul ISO 9001, hingga menyusun laporan audit yang diakui manajemen.
        </p>

        {/* Core Product Summary */}
        <div className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200/90 rounded-xl mb-4">
          <p className="text-[15px] font-bold text-slate-800 tracking-tight">
            9 Modul • 7 Worksheet • 5 AI Tools • Simulasi Audit ISO 9001 &amp; 19011
          </p>
        </div>

        {/* Price & Offer Box */}
        <div className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl p-4 mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[13px] text-slate-500 line-through font-bold">Rp299.000</span>
            <span className="text-[11px] font-black uppercase tracking-wider text-red-700 bg-red-100 px-2 py-0.5 rounded-full">Hemat 67%</span>
          </div>
          <div className="text-[38px] sm:text-[42px] font-black text-red-600 tracking-tight leading-none mb-1">
            Rp99.000
          </div>
          <p className="text-[15px] sm:text-[16px] text-slate-700 font-bold">
            Sekali Bayar • Akses Seumur Hidup • Garansi 7 Hari
          </p>
        </div>

        {/* Big Yellow CTA Button */}
        <div className="w-full mb-6">
          <CtaButton 
            position="hero" 
            label="DAPATKAN SEKARANG — Rp99.000" 
            sublabel="Akses Instan Otomatis • Garansi 7 Hari Uang Kembali"
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
                // Fallback stage 1: direct remote URL (ImgBB)
                target.src = 'https://i.ibb.co.com/xqtkxhYg/Chat-GPT-Image-Sep-22-2026-10-04-25-PM.png';
              } else if (stage === 1) {
                target.dataset.stage = '2';
                // Fallback stage 2: smartbook.id verified CDN
                target.src = 'https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg';
              } else if (stage === 2) {
                target.dataset.stage = '3';
                // Fallback stage 3: SVG bundle
                target.src = '/images/hero-mockup-bundle.svg';
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};
