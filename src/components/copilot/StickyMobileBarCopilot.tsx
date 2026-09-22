import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const StickyMobileBarCopilot: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan sticky bar setelah scroll melewati hero
      setIsVisible(window.scrollY > 360);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleStickyClick = () => {
    trackCheckoutClick('mobile_sticky_copilot', 'Sticky Mobile Bar Copilot - DAPATKAN + BONUS GPT CO-PILOT Rp97.000');
  };

  return (
    <div
      id="mobile-sticky-copilot-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 py-2.5 px-3 shadow-2xl transition-all duration-300 flex justify-center"
    >
      <div className="w-full max-w-[480px] flex items-center">
        <a
          href={getCheckoutUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleStickyClick}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3 px-3 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 cursor-pointer min-h-[46px] leading-tight text-center"
        >
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          <span>DAPATKAN SEKARANG — Rp97.000</span>
          <ChevronRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
};
