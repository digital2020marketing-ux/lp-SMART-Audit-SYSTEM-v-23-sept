import React from 'react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

interface CtaButtonProps {
  position: string;
  className?: string;
  label?: string;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  position,
  className = '',
  label = 'DAPATKAN SEKARANG — Rp99.000',
}) => {
  const handleClick = () => {
    trackCheckoutClick(position, label);
  };

  return (
    <a
      href={getCheckoutUrl()}
      onClick={handleClick}
      aria-label={label}
      className={`w-full min-h-[52px] px-4 py-3.5 bg-amber-400 hover:bg-amber-500 active:scale-[0.99] text-slate-950 font-black text-[16px] sm:text-[17px] rounded-xl flex items-center justify-center text-center shadow-md transition-all duration-150 border border-amber-500/70 tracking-tight leading-tight ${className}`}
    >
      {label}
    </a>
  );
};
