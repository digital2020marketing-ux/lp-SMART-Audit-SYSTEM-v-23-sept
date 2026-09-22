import React from 'react';
import { Check, ArrowRight, ShieldCheck, Lock, Sparkles, Zap, Infinity } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick, CHECKOUT_WHATSAPP_DISPLAY } from '../../constants';

export const OfferStackSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('cta_offer', 'YA, SAYA MAU SMART AUDIT SYSTEM — Rp97.000');
  };

  const sistemPraktik = [
    'SMART Audit System Platform',
    '7 Worksheet Word & Excel Siap Edit',
    'Workflow Audit Terstruktur',
    'Simulasi Audit dengan AI',
  ];

  const pembelajaranAi = [
    '9 Modul E-Course Praktis',
    'AI GPT Co-Pilot ISO 19011:2026',
    '5 AI Tools Khusus Audit',
    'Ebook + Audio Pembelajaran',
    'Pre-Test & Post-Test',
  ];

  const termasuk = [
    'Support Penggunaan',
    'Akses Seumur Hidup',
    'Tidak Ada Biaya Bulanan',
  ];

  return (
    <section id="penawaran" className="bg-slate-900 text-white py-9 px-4 sm:px-6 border-y border-slate-800 relative">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>VALUE STACK</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight uppercase">
            DENGAN Rp97.000, INI YANG MENJADI AKSES ANDA
          </h2>
        </div>

        {/* Offer Container Card */}
        <div className="bg-slate-800/95 border-2 border-amber-500/50 rounded-2xl p-5 sm:p-6 shadow-2xl mb-5">
          
          {/* Kelompok 1: SISTEM PRAKTIK */}
          <div className="pb-3.5 mb-3.5 border-b border-slate-700">
            <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>SISTEM PRAKTIK</span>
            </div>
            <div className="space-y-2">
              {sistemPraktik.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kelompok 2: PEMBELAJARAN & AI */}
          <div className="pb-3.5 mb-3.5 border-b border-slate-700">
            <div className="text-xs font-black uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>PEMBELAJARAN & AI</span>
            </div>
            <div className="space-y-2">
              {pembelajaranAi.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kelompok 3: TERMASUK */}
          <div className="pb-4 border-b border-slate-700">
            <div className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>TERMASUK</span>
            </div>
            <div className="space-y-2">
              {termasuk.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Kalimat Tambahan Value */}
          <div className="pt-3.5 pb-2 text-center text-xs sm:text-[13px] text-amber-200/90 font-medium leading-relaxed">
            Bayar sekali, lalu gunakan kembali sistem, worksheet, modul, simulasi, dan AI Tools setiap kali Anda mempersiapkan audit berikutnya.
          </div>

          {/* Pricing Display */}
          <div className="pt-3 border-t border-slate-700/80 text-center">
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              <span className="line-through text-red-400 font-bold decoration-red-400 decoration-2">Rp249.000</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-0.5">
              Rp97.000
            </div>
            <div className="text-xs font-black text-emerald-400 uppercase tracking-wide mt-1">
              HEMAT Rp152.000
            </div>
          </div>
        </div>

        {/* CTA BESAR */}
        <a
          id="cta_offer"
          data-cta="cta_offer"
          data-position="offer"
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="group w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all transform tracking-wide text-center"
        >
          <span>DAPATKAN SMART AUDIT SYSTEM — Rp97.000</span>
          <ArrowRight className="w-5 h-5 text-slate-950 shrink-0 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Microcopy */}
        <p className="text-center text-xs text-slate-300 font-semibold mt-2.5">
          Checkout Cepat &amp; Aman • Akses Otomatis Terkirim ke Email &amp; WA
        </p>

        {/* Trust Line Langsung di Bawah CTA */}
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-300 font-bold mt-2 pt-2 border-t border-slate-800 flex-wrap">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            Checkout Aman
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Akses Otomatis
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Infinity className="w-3.5 h-3.5 text-emerald-400" />
            Akses Seumur Hidup
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Garansi 7 Hari
          </span>
        </div>

      </div>
    </section>
  );
};
