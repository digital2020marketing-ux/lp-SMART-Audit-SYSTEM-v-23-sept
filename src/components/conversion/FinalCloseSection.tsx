import React from 'react';
import { ArrowRight, Check, Lock, Zap, ShieldCheck } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const FinalCloseSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('cta_final', 'YA, SAYA MAU SMART AUDIT SYSTEM — Rp97.000');
  };

  const finalDeliverables = [
    '9 Modul E-Course Praktis',
    '7 Worksheet Siap Edit',
    '5 AI Tools Audit',
    'AI GPT Co-Pilot ISO 19011:2026',
    'Simulasi Audit dengan AI',
    'Ebook + Audio + Evaluasi',
    'Support Penggunaan',
    'Akses Seumur Hidup',
  ];

  return (
    <section id="penutup-final" className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-10 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-md mx-auto text-center">
        
        {/* Headline */}
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight uppercase mb-2">
          AUDIT BERIKUTNYA, JANGAN MULAI DARI NOL.
        </h2>

        {/* Subhead & Alur */}
        <p className="text-sm text-slate-200 font-medium mb-2">
          Miliki satu sistem yang membantu Anda dari:
        </p>

        <div className="bg-blue-950/90 border border-blue-600/40 rounded-xl p-3.5 mb-5 text-center shadow-md">
          <p className="text-[13px] sm:text-sm font-bold text-amber-300 tracking-wide leading-relaxed">
            Persiapan → Pertanyaan → Evidence → PLOR → Root Cause → CAPA → Laporan
          </p>
        </div>

        {/* Card Ringkasan Pembelian */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 sm:p-5 text-left mb-5 shadow-lg">
          <div className="text-[13px] sm:text-sm font-black uppercase tracking-wider text-amber-400 mb-3 text-center sm:text-left">
            SATU KALI PEMBELIAN, LANGSUNG DAPAT:
          </div>
          <div className="space-y-2.5 mb-4">
            {finalDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] font-bold text-slate-100">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="pt-3 border-t border-slate-700 text-center">
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              <span className="line-through text-red-400 font-bold decoration-red-400 decoration-2">Rp249.000</span>
            </div>
            <div className="text-3xl font-black text-white tracking-tight mt-0.5">
              Rp97.000
            </div>
            <div className="text-xs font-black text-emerald-400 uppercase tracking-wide mt-1">
              HEMAT Rp152.000
            </div>
            <div className="text-[12px] sm:text-[13px] text-slate-200 font-semibold mt-1.5">
              Sekali Bayar • Tidak Ada Biaya Bulanan • Garansi 7 Hari
            </div>
          </div>
        </div>

        {/* CTA Utama */}
        <a
          id="cta_final"
          data-cta="cta_final"
          data-position="final"
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="group w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all transform tracking-wide text-center mb-3"
        >
          <span>YA, SAYA MAU SMART AUDIT SYSTEM — Rp97.000</span>
          <ArrowRight className="w-5 h-5 text-slate-950 shrink-0 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-300 font-bold flex-wrap mb-4">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            Checkout Aman
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            Akses Otomatis Masuk
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            Garansi 7 Hari
          </span>
        </div>

        {/* Closing takeaway note */}
        <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm mx-auto italic">
          “Anda tidak harus menguasai semuanya hari ini. Yang penting, ketika mulai audit Anda sudah mempunyai panduan, format kerja, dan alat bantu yang jelas.”
        </p>

      </div>
    </section>
  );
};
