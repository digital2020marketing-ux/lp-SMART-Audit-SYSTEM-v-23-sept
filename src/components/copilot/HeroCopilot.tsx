import React from 'react';
import { 
  Sparkles, 
  Check, 
  Bot, 
  ArrowRight, 
  Lock, 
  Zap,
  Cpu
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const HeroCopilot: React.FC = () => {
  const handleHeroCtaClick = () => {
    trackCheckoutClick('hero_cta_copilot', 'Hero Copilot - DAPATKAN SMART AUDIT SYSTEM — Rp97.000');
  };

  const valueStack = [
    '7 Worksheet Word & Excel Siap Edit',
    '9 Modul Panduan Audit',
    'Simulasi Praktik Audit',
    '5 AI Tools Khusus Audit',
    'Ebook + Audio + Evaluasi',
    'Akses Seumur Hidup',
  ];

  return (
    <section id="hero-copilot" className="relative pt-16 pb-6 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden border-b border-gray-100">
      <div className="w-full px-4 relative z-10 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center justify-center gap-1.5 bg-blue-900 text-blue-50 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-black shadow-xs mb-2.5 max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
          <span>SMART AUDIT SYSTEM • ISO 9001 & ISO 19011</span>
        </div>

        {/* 1. Main Headline */}
        <h1 className="text-2xl sm:text-[28px] font-black text-gray-900 tracking-tight leading-tight mb-2.5">
          DITUNJUK JADI AUDITOR INTERNAL?<br />
          <span className="text-red-600">JANGAN MULAI AUDIT DARI FILE KOSONG.</span>
        </h1>

        {/* 2. Subheadline */}
        <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mb-3.5 max-w-md mx-auto">
          Gunakan sistem praktik audit langkah demi langkah untuk membantu Anda menyiapkan checklist, pertanyaan audit, bukti objektif, temuan PLOR, root cause, CAPA hingga laporan.
        </p>

        {/* 3. Value Stack Singkat */}
        <div className="mb-3 max-w-md mx-auto text-left bg-white p-3 rounded-xl border border-blue-100 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {valueStack.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Highlight Khusus: AI Powered Audit Tools */}
        <div className="mb-3 max-w-md mx-auto text-left bg-gradient-to-br from-amber-50 via-amber-50/60 to-orange-50/70 border-2 border-amber-400 rounded-xl p-3 shadow-xs relative">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-2xs">
              <Cpu className="w-3 h-3 shrink-0" />
              <span>AI POWERED AUDIT TOOLS</span>
            </span>
          </div>

          <h3 className="font-black text-xs sm:text-sm text-gray-950 tracking-tight leading-snug mb-1">
            5 AI TOOLS UNTUK MEMBANTU PEKERJAAN AUDITOR
          </h3>

          <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed font-medium">
            Dari menyusun checklist sampai memahami panduan ISO 19011.
          </p>
        </div>

        {/* 5. Pricing Box di Layar Pertama */}
        <div className="mb-3 max-w-md mx-auto bg-slate-50 border border-gray-200 rounded-xl p-3 text-center">
          <div className="text-xs text-gray-500 font-semibold mb-0.5">
            Harga Normal <span className="line-through font-bold">Rp249.000</span>
          </div>
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="text-xs font-black text-red-600 uppercase">SEKARANG</span>
            <span className="text-3xl sm:text-4xl font-black text-red-600 tracking-tight">
              Rp97.000
            </span>
          </div>
          <p className="text-[11px] font-bold text-gray-700">
            Sekali Bayar • Akses Seumur Hidup • Support Penggunaan • Garansi 7 Hari
          </p>
        </div>

        {/* 6. Main CTA Button & Trust Micro-Copy */}
        <div className="max-w-md mx-auto mb-2">
          <a
            id="hero-copilot-cta"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleHeroCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 active:scale-[0.98] transition-all cursor-pointer leading-tight min-h-[48px] text-center"
          >
            <span>DAPATKAN SMART AUDIT SYSTEM — Rp97.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Under-button micro-copy */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-gray-600 mt-2">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-blue-900" />
              <span>Checkout Aman</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-700">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Akses Otomatis Setelah Pembayaran Berhasil</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

