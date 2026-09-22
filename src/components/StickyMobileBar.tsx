import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const StickyMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan sticky bar setelah user scroll melewati hero (sekitar 380px)
      setIsVisible(window.scrollY > 380);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleStickyClick = () => {
    trackCheckoutClick('mobile_sticky_buy', 'Sticky Mobile Bar - PROMO Rp97.000 — AKSES SEKARANG');
  };

  return (
    <div
      id="mobile-sticky-cta-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 p-2 shadow-2xl transition-all duration-300 flex justify-center"
    >
      <div className="w-full max-w-[480px] px-3 flex items-center">
        <a
          href={getCheckoutUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleStickyClick}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 cursor-pointer min-h-[48px] leading-tight text-center"
        >
          <span>KLIK UNTUK AKSES SEKARANG — Rp97.000</span>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
};
