import React from 'react';
import { 
  ShieldCheck, 
  Infinity, 
  FileEdit, 
  CreditCard,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const Hero: React.FC = () => {
  const handleHeroCtaClick = () => {
    trackCheckoutClick('hero_cta', 'Hero - DAPATKAN PROMO SEPTEMBER — Rp97.000');
  };

  return (
    <section id="hero-section" className="relative pt-20 pb-8 bg-gradient-to-b from-slate-50 via-blue-50/25 to-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-100/40 to-transparent pointer-events-none" />
      
      <div className="w-full px-4 relative z-10 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center justify-center gap-1.5 bg-blue-900 text-blue-50 px-3.5 py-1.5 rounded-full text-[11px] font-black shadow-xs mb-3 max-w-full">
          <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
          <span>SMART AUDIT SYSTEM • ISO 9001 & ISO 19011</span>
        </div>

        {/* 1. Main Headline */}
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug mb-3">
          DITUNJUK JADI AUDITOR INTERNAL, TAPI BINGUNG HARUS MULAI DARI MANA?
        </h1>

        {/* 2. Subheadline */}
        <div className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mb-4 max-w-md mx-auto space-y-1.5">
          <p className="font-bold text-gray-900">
            Jangan mulai audit pertama Anda dari file kosong.
          </p>
          <p>
            Gunakan sistem langkah demi langkah yang membantu Anda menyiapkan checklist, pertanyaan audit, bukti objektif, temuan sampai CAPA — lengkap dengan worksheet siap edit, simulasi, dan AI Tools pendukung.
          </p>
        </div>

        {/* 3. Promo September Pricing & Primary CTA */}
        <div className="mb-5 max-w-md mx-auto">
          {/* Promo September Framing Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 mb-2.5 shadow-xs">
            <div className="inline-flex items-center gap-1 bg-amber-500 text-amber-950 font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5">
              <span>PROMO SEPTEMBER — HANYA BEBERAPA HARI</span>
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-xs text-gray-500 line-through font-semibold">
                Harga Normal: Rp249.000
              </span>
              <span className="text-xl sm:text-2xl font-black text-red-600 tracking-tight">
                Rp97.000
              </span>
            </div>
            <p className="text-[10px] text-gray-600 font-medium mt-1 leading-snug">
              Promo ini merupakan penawaran khusus periode September dan hanya berlaku dalam waktu terbatas.
            </p>
          </div>

          <a
            id="hero-main-cta"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleHeroCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 active:scale-[0.98] transition-all cursor-pointer leading-tight min-h-[48px]"
          >
            <span>DAPATKAN PROMO SEPTEMBER — Rp97.000</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </a>
          <p className="text-[10px] text-gray-500 font-medium mt-1.5">
            Sekali Bayar • Akses Seumur Hidup • Support Setelah Pembelian • Garansi 7 Hari
          </p>
        </div>

        {/* 4. Hero Visual Showcase (Dashboard Mockup) */}
        <div className="relative mx-auto mb-4 rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-slate-950 aspect-16/9">
          <picture>
            <source media="(max-width: 480px)" srcSet="/images/gambar-dashbord-SAS-mobile.webp" type="image/webp" />
            <source srcSet="/images/gambar-dashbord-SAS.webp" type="image/webp" />
            <img
              src="/images/gambar-dashbord-SAS-mobile.webp"
              alt="Dashboard Belajar dan Praktik Audit Internal SMART Audit SYSTEM"
              width={480}
              height={270}
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-transparent to-transparent flex flex-col justify-end p-2.5 text-left text-white pointer-events-none">
            <span className="inline-block bg-blue-900/90 backdrop-blur-md text-white text-[9px] font-black uppercase px-2 py-0.5 rounded w-fit mb-1">
              Sistem Praktik Lengkap
            </span>
            <p className="font-bold text-[11px] text-white leading-snug">
              Modul Panduan • Worksheet Word & Excel • Simulasi • AI Tools
            </p>
          </div>
        </div>

        {/* 5. Quick Trust Badges */}
        <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold text-gray-600 bg-slate-50 p-2 rounded-xl border border-gray-200/80">
          <div className="flex items-center justify-center gap-1">
            <CreditCard className="w-3.5 h-3.5 text-blue-900 shrink-0" />
            <span>QRIS & Transfer Bank</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Infinity className="w-3.5 h-3.5 text-blue-900 shrink-0" />
            <span>Akses Seumur Hidup</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <FileEdit className="w-3.5 h-3.5 text-blue-900 shrink-0" />
            <span>7 Form Siap Edit</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Garansi 100% Uang Kembali 7 Hari</span>
          </div>
        </div>
      </div>
    </section>
  );
};
