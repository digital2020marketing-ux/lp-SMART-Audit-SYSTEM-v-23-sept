import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const FinalClosingSection: React.FC = () => {
  const handleFinalCtaClick = () => {
    trackCheckoutClick('final_closing_cta', 'Final Closing - DAPATKAN PROMO SEPTEMBER — Rp97.000');
  };

  return (
    <section id="final-closing" className="py-8 bg-slate-900 border-b border-gray-800 text-white">
      <div className="w-full px-4">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 border border-blue-800/50 text-white rounded-3xl p-5 sm:p-6 text-center shadow-xl relative overflow-hidden max-w-md mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3">
            <Clock className="w-3 h-3 shrink-0" />
            <span>WAKTU PERSIAPAN AUDIT</span>
          </div>

          {/* Strong Closing Headline Sesuai Brief */}
          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug mb-3">
            AUDIT SUDAH SEMAKIN DEKAT? JANGAN TUNGGU H-1 BARU MENYIAPKAN SEMUANYA.
          </h2>

          {/* Narrative Body Copy */}
          <div className="text-xs text-blue-100 leading-relaxed font-medium mb-4 space-y-2 text-left bg-blue-950/40 p-3.5 rounded-2xl border border-blue-800/30">
            <p>
              Semakin cepat Anda memahami alurnya dan menyiapkan format kerja yang dibutuhkan, semakin sedikit hal yang harus Anda pikirkan saat hari audit tiba.
            </p>
            <p className="font-semibold text-white">
              Gunakan SMART Audit System sebagai starting point agar proses belajar dan persiapan audit Anda lebih terarah.
            </p>
          </div>

          {/* Promo Note Callout Sesuai Poin 8 */}
          <div className="mb-4 p-2.5 bg-amber-500/15 border border-amber-400/40 rounded-xl text-center">
            <p className="text-[11px] font-bold text-amber-300 leading-snug">
              Harga promo September hanya berlaku beberapa hari, setelah itu kembali ke Rp249.000.
            </p>
          </div>

          {/* Big High-Contrast CTA Button */}
          <a
            id="final-closing-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFinalCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-4 px-4 rounded-xl font-black text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer min-h-[50px] mb-3 leading-tight"
          >
            <span>DAPATKAN PROMO SEPTEMBER — Rp97.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Guarantee & Lifetime Note */}
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Sekali Bayar • Akses Seumur Hidup • Support Setelah Pembelian • Garansi 7 Hari</span>
          </div>
        </div>
      </div>
    </section>
  );
};
