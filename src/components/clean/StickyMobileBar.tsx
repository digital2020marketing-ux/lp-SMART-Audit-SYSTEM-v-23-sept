import React, { useState, useEffect } from 'react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const StickyMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muncul setelah user scroll melewati 350px (melewati fold pertama)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackCheckoutClick('sticky_mobile_bottom', 'Rp99.000 | Dapatkan Sekarang');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-2 px-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl transition-all duration-200">
      <div className="max-w-[480px] sm:max-w-[500px] mx-auto flex items-center justify-between gap-2.5">
        {/* Price & Label Ringkas */}
        <div className="flex items-center gap-1.5 pl-1 shrink-0">
          <span className="text-[17px] sm:text-[18px] font-black text-red-600 leading-none">
            Rp99.000
          </span>
          <span className="text-[11px] text-slate-400 line-through font-bold hidden xs:inline">
            Rp299.000
          </span>
        </div>

        {/* Tombol CTA Merah Kompak Tidak Mengganggu */}
        <a
          href={getCheckoutUrl()}
          onClick={handleClick}
          className="flex-1 min-h-[42px] max-h-[46px] px-3 py-2 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:scale-[0.98] text-white font-black text-[13.5px] sm:text-[14.5px] rounded-xl flex items-center justify-center text-center shadow-md shadow-red-600/30 border border-red-500/90 tracking-tight transition-transform"
        >
          <span>DAPATKAN SEKARANG</span>
          <span className="ml-1 text-[15px]">→</span>
        </a>
      </div>
    </div>
  );
};
