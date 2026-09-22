import React from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';

export const Iso19011SpecialSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('cta_copilot_iso19011', 'PELAJARI DENGAN AI CO-PILOT ISO 19011:2026');
  };

  const capabilities = [
    'Prinsip audit',
    'Pengelolaan program audit',
    'Pendekatan audit berbasis risiko',
    'Perencanaan dan pelaksanaan audit',
    'Sampling audit',
    'Remote / hybrid audit',
    'Kompetensi auditor',
    'Studi kasus dan pertanyaan audit',
  ];

  return (
    <section id="iso-19011-copilot" className="bg-slate-900 text-white py-8 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-md mx-auto">
        
        {/* Badge */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[11px] sm:text-xs font-black uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>UPDATE TERKINI • PEDOMAN AUDIT TERBARU</span>
          </div>
        </div>

        {/* Judul */}
        <h2 className="text-center text-lg sm:text-xl font-black text-white tracking-tight leading-snug uppercase mb-2.5">
          AUDIT TERUS BERKEMBANG. SISTEM BELAJARNYA JUGA HARUS IKUT BERKEMBANG.
        </h2>

        {/* Subjudul */}
        <p className="text-center text-[14px] sm:text-[15px] text-slate-300 leading-relaxed font-medium mb-5">
          SMART Audit System dilengkapi <span className="text-amber-300 font-bold">AI GPT Co-Pilot ISO 19011:2026</span> untuk membantu auditor mempelajari dan mengeksplorasi penerapan pedoman audit terbaru secara lebih praktis.
        </p>

        {/* Visual Besar / Mockup AI GPT Co-Pilot */}
        <div className="rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-slate-950 shadow-xl mb-5 group">
          <div className="px-3.5 py-2.5 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-blue-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[13px] sm:text-sm font-black text-white tracking-wide">
                AI GPT CO-PILOT ISO 19011:2026
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 uppercase px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/30">
              Co-Pilot
            </span>
          </div>
          <div className="relative bg-slate-950">
            <picture className="w-full">
              <source srcSet={SMARTBOOK_IMAGES.iso19011.webpLocal} type="image/webp" />
              <img
                src={SMARTBOOK_IMAGES.iso19011.webpLocal}
                onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.iso19011.local, SMARTBOOK_IMAGES.iso19011.url)}
                referrerPolicy="no-referrer"
                alt="AI GPT Co-Pilot ISO 19011:2026 Smart Audit System"
                width={SMARTBOOK_IMAGES.iso19011.width || 600}
                height={SMARTBOOK_IMAGES.iso19011.height || 338}
                className="w-full h-auto object-cover block"
                loading="eager"
              />
            </picture>
          </div>
        </div>

        {/* Card Daftar Kemampuan AI Co-Pilot */}
        <div className="bg-slate-800/95 border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-lg mb-4 text-left">
          <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-700">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[13px] sm:text-sm font-black uppercase tracking-wider text-amber-400">
              Bisa digunakan untuk membantu mempelajari:
            </span>
          </div>
          <div className="space-y-2.5">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-[14px] sm:text-[15px] font-semibold text-slate-100 leading-snug">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3] shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Kecil */}
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 mb-4 text-center">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed italic">
            * AI digunakan sebagai alat bantu belajar dan drafting. Verifikasi bukti, professional judgement, dan keputusan audit tetap menjadi tanggung jawab auditor.
          </p>
        </div>

        {/* CTA Kecil */}
        <a
          id="cta_copilot_iso19011"
          data-cta="cta_copilot_iso19011"
          data-position="iso19011"
          href={checkoutUrl}
          onClick={handleCtaClick}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-400 text-white font-black text-[14px] sm:text-[15px] rounded-xl shadow-md border border-blue-400/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-all tracking-wide text-center"
        >
          <span>PELAJARI DENGAN AI CO-PILOT ISO 19011:2026 →</span>
        </a>

      </div>
    </section>
  );
};
