import React from 'react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

interface CtaButtonProps {
  position: string;
  className?: string;
  label?: string;
  sublabel?: string;
  context?: string; // backwards compatibility
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  position,
  context,
  className = '',
  label = 'DAPATKAN SEKARANG — Rp99.000',
  sublabel = 'Akses Instan • Sekali Bayar • Garansi 7 Hari',
}) => {
  const effectivePosition = position || context || 'general';

  const handleClick = () => {
    trackCheckoutClick(effectivePosition, label);
  };

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <a
        href={getCheckoutUrl()}
        onClick={handleClick}
        aria-label={label}
        className="w-full min-h-[54px] px-4 py-3.5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:scale-[0.99] text-white font-black text-[16.5px] sm:text-[17.5px] rounded-2xl flex items-center justify-center text-center shadow-lg shadow-red-600/30 border-2 border-red-500/90 tracking-tight leading-tight transition-all duration-150 cursor-pointer"
      >
        <span className="drop-shadow-sm">{label}</span>
      </a>

      {sublabel && (
        <span className="text-[12.5px] font-bold text-slate-600 mt-2 tracking-tight flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          {sublabel}
        </span>
      )}
    </div>
  );
};
