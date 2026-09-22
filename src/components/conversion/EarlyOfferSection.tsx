import React from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck, Lock, Infinity, Zap } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const EarlyOfferSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('cta_early_offer', 'YA, SAYA MAU SMART AUDIT SYSTEM — Rp97.000');
  };

  const values = [
    '9 Modul E-Course',
    '7 Worksheet Siap Edit',
    '5 AI Tools Audit',
    'AI GPT Co-Pilot ISO 19011:2026',
    'Simulasi Audit dengan AI',
    'Ebook + Audio',
    'Akses Seumur Hidup',
    'Support Penggunaan',
  ];

  return (
    <section id="paket-lengkap" className="bg-slate-900 text-white py-8 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>PENAWARAN LENGKAP</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight uppercase">
            SATU SISTEM UNTUK BELAJAR DAN MENJALANKAN AUDIT
          </h2>
          <p className="text-[13px] sm:text-sm text-slate-300 font-medium mt-1">
            Semua yang Anda butuhkan untuk persiapan, pelaksanaan, hingga pelaporan audit.
          </p>
        </div>

        {/* Card Offer & Values */}
        <div className="bg-slate-800/95 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-2xl mb-4">
          
          <div className="text-[12px] sm:text-[13px] font-black uppercase tracking-wider text-amber-400 mb-3 pb-2 border-b border-slate-700">
            SEKALI PEMBELIAN, LANGSUNG MENDAPATKAN:
          </div>

          <div className="grid grid-cols-1 gap-2.5 mb-5 text-left">
            {values.map((val, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] font-bold text-slate-100">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{val}</span>
              </div>
            ))}
          </div>

          {/* Pricing Box */}
          <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/25 to-amber-500/15 border border-amber-500/50 rounded-xl p-4 text-center mb-4">
            <div className="text-[13px] sm:text-sm text-slate-300 font-medium">
              <span className="line-through text-red-400 font-bold decoration-red-400 decoration-2">Rp249.000</span>
            </div>
            <div className="text-3xl font-black text-white tracking-tight mt-0.5">
              Rp97.000
            </div>
            <div className="text-xs font-black text-emerald-400 uppercase tracking-wide mt-1">
              HEMAT Rp152.000 (AKSES SEUMUR HIDUP)
            </div>
            <div className="text-[12px] sm:text-[13px] text-slate-200 font-semibold mt-2 flex items-center justify-center gap-1.5 flex-wrap">
              <span>Sekali Bayar</span>
              <span>•</span>
              <span>Tidak Ada Biaya Bulanan</span>
              <span>•</span>
              <span className="text-amber-300">Garansi 7 Hari</span>
            </div>
          </div>

          {/* CTA */}
          <a
            id="cta_early_offer"
            data-cta="cta_early_offer"
            data-position="early_offer"
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-[15px] sm:text-lg rounded-xl shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-[0.98] transition-all tracking-wide text-center"
          >
            <span>YA, SAYA MAU SMART AUDIT SYSTEM →</span>
          </a>

          <p className="text-center text-[12px] text-slate-300 font-medium mt-2.5">
            Checkout Aman &amp; Otomatis • Akses Instan • Garansi 7 Hari
          </p>
        </div>

      </div>
    </section>
  );
};
