import React from 'react';
import { AlertCircle, ArrowRight, Lock, ShieldCheck, Zap } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const PainPointsDirectResponse: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('cta_problem', 'MULAI DENGAN SISTEM YANG TERSTRUKTUR — Rp97.000');
  };

  const painList = [
    'Bingung mulai audit dari mana',
    'Tidak tahu harus bertanya apa',
    'Tidak tahu evidence apa yang harus diperiksa',
    'Bingung menyusun temuan',
    'Bingung Root Cause dan CAPA',
  ];

  return (
    <section id="kendala-auditor" className="bg-slate-50 py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>KENDALA AUDITOR PEMULA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            BARU JADI AUDITOR, TAPI BELUM TAHU CARA PRAKTIKNYA?
          </h2>
        </div>

        {/* 5 Poin Kendala */}
        <div className="space-y-2 mb-5">
          {painList.map((pain, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-2xs"
            >
              <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-black text-xs">
                ✕
              </div>
              <p className="text-[14px] sm:text-[15px] text-gray-900 font-bold leading-snug">
                {pain}
              </p>
            </div>
          ))}
        </div>

        {/* Penutup Solutif */}
        <div className="bg-blue-950 text-white rounded-2xl p-4 text-center mb-5 shadow-md border border-blue-900">
          <p className="text-[14px] sm:text-[15px] font-semibold leading-relaxed text-slate-100">
            SMART Audit System memberi starting point dari persiapan sampai laporan sehingga Anda tidak harus menyusun semuanya dari nol.
          </p>
        </div>

        {/* CTA */}
        <a
          id="cta_problem"
          data-cta="cta_problem"
          data-position="problem"
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="w-full py-4 px-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-[15px] sm:text-lg rounded-xl shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all tracking-wide text-center"
        >
          <span>DAPATKAN SISTEM PRAKTIK AUDIT LENGKAP →</span>
        </a>

        {/* Trust Note */}
        <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-gray-600 font-bold mt-2.5 flex-wrap">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            Pembayaran Aman &amp; Terverifikasi Otomatis
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Garansi 7 Hari
          </span>
        </div>

      </div>
    </section>
  );
};
