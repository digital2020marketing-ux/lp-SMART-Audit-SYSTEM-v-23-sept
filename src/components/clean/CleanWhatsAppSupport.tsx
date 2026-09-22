import React from 'react';
import { CHECKOUT_WHATSAPP_DISPLAY, getWhatsAppConfirmUrl, trackCheckoutClick } from '../../constants';

export const CleanWhatsAppSupport: React.FC = () => {
  const handleWaClick = () => {
    trackCheckoutClick('whatsapp_support', 'Tanya via WhatsApp');
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-5 border-b border-slate-100" id="whatsapp-support">
      <div className="w-full text-center">
        {/* Headline */}
        <h3 className="text-[20px] sm:text-[22px] font-black text-slate-900 mb-1 leading-snug">
          Masih Ada Pertanyaan?
        </h3>

        {/* Subtitle */}
        <p className="text-[14.5px] sm:text-[15px] text-slate-600 mb-4 font-medium">
          Butuh informasi sebelum membeli?
        </p>

        {/* WhatsApp Button (Secondary, not primary) */}
        <a
          id="btn_whatsapp_support"
          href={getWhatsAppConfirmUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-[15px] sm:text-[15.5px] shadow-sm shadow-emerald-600/20 transition-all border border-emerald-500/40"
        >
          <span>💬 TANYA VIA WHATSAPP</span>
        </a>

        {/* WhatsApp Number Display */}
        <div className="mt-2 text-[13px] sm:text-[13.5px] text-slate-500 font-bold">
          {CHECKOUT_WHATSAPP_DISPLAY}
        </div>
      </div>
    </section>
  );
};
