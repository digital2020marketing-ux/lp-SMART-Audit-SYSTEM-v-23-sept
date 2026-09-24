import React, { useState, useEffect } from 'react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const StickyMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muncul setelah user scroll melewati 380px (di bawah hero awal)
      if (window.scrollY > 380) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackCheckoutClick('sticky_mobile_bottom', 'DAPATKAN SEKARANG — Rp99.000');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
      <div className="max-w-[480px] sm:max-w-[500px] mx-auto flex items-center justify-between gap-3">
        {/* Info Harga Ringkas */}
        <div className="flex flex-col text-left pl-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider leading-none">
            Akses Lengkap
          </span>
          <span className="text-[19px] sm:text-[20px] font-black text-red-600 leading-tight">
            Rp99.000
          </span>
        </div>

        {/* Tombol CTA Sticky */}
        <a
          href={getCheckoutUrl()}
          onClick={handleClick}
          className="flex-1 min-h-[48px] px-4 py-2.5 bg-amber-400 hover:bg-amber-500 active:scale-[0.98] text-slate-950 font-black text-[15px] sm:text-[16px] rounded-xl flex items-center justify-center text-center shadow-md border border-amber-500/80 tracking-tight leading-tight transition-transform"
        >
          <span>BELI SEKARANG</span>
          <span className="ml-1 text-[17px]">→</span>
        </a>
      </div>
    </div>
  );
};
