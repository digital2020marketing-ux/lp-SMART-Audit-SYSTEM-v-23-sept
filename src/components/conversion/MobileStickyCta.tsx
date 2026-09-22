import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const MobileStickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const checkoutUrl = getCheckoutUrl();

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky bar once scrolled past 280px (past the hero's first view)
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    trackCheckoutClick('cta_sticky', 'Sticky Mobile CTA');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 border-t border-slate-800 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto h-[56px] px-3 flex items-center justify-between gap-3">
        {/* Micro Pricing */}
        <div className="flex flex-col shrink-0 leading-tight">
          <span className="text-[11px] text-slate-400 font-medium line-through">Rp249.000</span>
          <span className="text-base sm:text-lg font-black text-amber-400">Rp97.000</span>
        </div>

        {/* CTA Button */}
        <a
          id="cta_sticky"
          data-cta="cta_sticky"
          data-position="sticky"
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="flex-1 h-[42px] px-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-lg shadow-md flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform text-center tracking-tight"
        >
          <span>DAPATKAN SEKARANG — Rp97.000</span>
          <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
        </a>
      </div>
    </div>
  );
};

