import React from 'react';
import { ShoppingBag, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Lock, MessageCircle } from 'lucide-react';
import { CHECKOUT_URL, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

export const FinalOffer: React.FC = () => {
  const handleCheckoutClick = () => {
    trackCheckoutClick('final_offer_checkout', 'Final Offer - Dapatkan Sekarang Rp97.000');
  };

  const handleAskClick = () => {
    trackWhatsAppClick('final_offer_wa', 'Final Offer - Tanya via WhatsApp');
  };

  return (
    <section id="checkout" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header (SECTION 13 BRIEF SPECIFICATION) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>AKSES DIGITAL INSTAN</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Jangan Mulai Audit Berikutnya dari File Kosong.
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Mulai dengan <strong className="text-white font-bold">SMART Audit SYSTEM</strong> — Dapatkan starting point terstruktur untuk persiapan, temuan, hingga CAPA sekarang.
          </p>
        </div>

        {/* Main Final Card */}
        <div className="bg-slate-900 border-2 border-emerald-500/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-8 text-center max-w-2xl mx-auto">
          
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-1">
            Investasi Sekali Bayar • Akses Seumur Hidup
          </span>

          <div className="text-4xl sm:text-6xl font-black text-emerald-400 tracking-tight my-3">
            Rp97.000
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-md mx-auto">
            Dapatkan seluruh Core AI Productivity Suite, 7 Worksheet Word & Excel, 9 Modul ISO, Audio Podcast, dan Slide Sosialisasi.
          </p>

          {/* CTA Button */}
          <div className="space-y-3 max-w-md mx-auto">
            <a
              id="final-offer-online-btn"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckoutClick}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-base sm:text-lg transition-all shadow-xl shadow-red-600/40 hover:shadow-red-600/50 border border-red-500/40 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>DAPATKAN SEKARANG — Rp97.000</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            {/* Microcopy */}
            <p className="text-xs text-slate-400 font-semibold">
              Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
            </p>

            {/* WA Order Direct Fallback */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('final_offer_wa')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAskClick}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold underline inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Manual atau Tanya Tim via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Secure Guarantee Box */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-center gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Dilindungi <strong>100% Garansi Uang Kembali</strong> jika tidak bermanfaat.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
