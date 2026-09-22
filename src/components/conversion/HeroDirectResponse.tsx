import React from 'react';
import { Check, ArrowRight, ShieldCheck, Lock, Infinity, Zap } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const HeroDirectResponse: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('cta_hero', 'Hero Primary CTA - Mulai Belajar & Siapkan Audit Anda');
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-6 pb-7 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-md mx-auto">
        
        {/* 1. Badge */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/90 border border-blue-500/50 text-blue-200 text-xs sm:text-[13px] font-extrabold tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>SMART AUDIT SYSTEM • ISO 9001 &amp; ISO 19011:2026</span>
          </div>
        </div>

        {/* 2. Headline */}
        <div className="text-center space-y-1.5 mb-3">
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight uppercase">
            BARU DITUNJUK JADI AUDITOR INTERNAL?
          </h1>
          <p className="text-lg sm:text-xl font-black text-amber-400 tracking-tight leading-tight uppercase">
            JANGAN MULAI AUDIT DARI FILE KOSONG.
          </p>
        </div>

        {/* 3. Subheadline */}
        <p className="text-center text-[15px] sm:text-base text-slate-100 leading-relaxed font-medium mb-4 max-w-sm mx-auto">
          Belajar alur audit langkah demi langkah, langsung praktik dengan worksheet, simulasi, dan AI Tools — termasuk AI GPT Co-Pilot ISO 19011:2026.
        </p>

        {/* 4. Alur Visual: BELAJAR → PRAKTIK → GUNAKAN SAAT AUDIT */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border border-blue-500/40 rounded-xl py-2.5 px-3 mb-4 shadow-inner text-center">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-[13px] font-extrabold tracking-wide text-amber-300 flex-wrap">
            <span className="bg-blue-900/80 px-2 py-0.5 rounded text-white">BELAJAR</span>
            <span className="text-blue-400">→</span>
            <span className="bg-blue-900/80 px-2 py-0.5 rounded text-white">PRAKTIK</span>
            <span className="text-blue-400">→</span>
            <span className="bg-amber-500/20 border border-amber-400/40 px-2.5 py-0.5 rounded text-amber-300 font-black">
              GUNAKAN SAAT AUDIT
            </span>
          </div>
        </div>

        {/* 5. 3 Poin Cepat */}
        <div className="bg-slate-800/90 border border-slate-700/90 rounded-xl p-3.5 sm:p-4 mb-5 shadow-sm text-left">
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 text-[14px] sm:text-[15px] font-bold text-white leading-snug">
              <Check className="w-4 h-4 text-emerald-400 stroke-[3] shrink-0 mt-0.5" />
              <span>Memahami alur audit internal</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] sm:text-[15px] font-bold text-white leading-snug">
              <Check className="w-4 h-4 text-emerald-400 stroke-[3] shrink-0 mt-0.5" />
              <span>Praktik menggunakan worksheet dan simulasi</span>
            </div>
            <div className="flex items-start gap-2.5 text-[14px] sm:text-[15px] font-bold text-amber-300 leading-snug">
              <Check className="w-4 h-4 text-amber-400 stroke-[3] shrink-0 mt-0.5" />
              <span>Didampingi AI GPT Co-Pilot ISO 19011:2026</span>
            </div>
          </div>
        </div>

        {/* 6. Primary Hero CTA */}
        <div className="mb-2.5">
          <a
            id="cta_hero"
            data-cta="cta_hero"
            data-position="hero"
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-[15px] sm:text-lg rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-[0.98] transition-all tracking-wide text-center"
          >
            <span>MULAI BELAJAR &amp; SIAPKAN AUDIT ANDA →</span>
          </a>
        </div>

        {/* 7. Di bawah CTA */}
        <p className="text-center text-[12px] sm:text-[13px] text-slate-300 font-medium">
          Checkout Aman &amp; Otomatis • Akses Seumur Hidup • Garansi 7 Hari
        </p>

      </div>
    </section>
  );
};
