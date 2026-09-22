import React from 'react';
import { 
  Gift, 
  Bot, 
  Check, 
  ShieldAlert, 
  ArrowRight
} from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const DedicatedBonusSection: React.FC = () => {
  const handleBonusCtaClick = () => {
    trackCheckoutClick('bonus_section_cta', 'Bonus Section - DAPATKAN SMART AUDIT SYSTEM + BONUS — Rp97.000');
  };

  const copilotBenefits = [
    'Membantu memahami prinsip audit',
    'Membantu memahami tahapan audit',
    'Membantu menyiapkan arah pertanyaan',
    'Membantu memahami pendekatan terhadap auditee',
    'Membantu mengingat prinsip dan etika auditor',
    'Dapat digunakan sebagai pendamping saat mempersiapkan audit',
  ];

  return (
    <section id="bonus-gpt-copilot" className="py-8 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white border-y-2 border-amber-500">
      <div className="w-full px-4 max-w-md mx-auto text-center">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2.5">
          <Gift className="w-3.5 h-3.5 fill-slate-950" />
          <span>BONUS SPESIAL</span>
        </div>

        {/* Section Big Title & Subtitle Sesuai Requirement 7 */}
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight mb-2">
          🎁 BONUS GPT CO-PILOT ISO 19011 VERSI 2026
        </h2>
        <p className="text-xs sm:text-sm text-amber-300 font-bold leading-relaxed mb-4">
          Punya pendamping saat membutuhkan starting point dalam menjalankan audit.
        </p>

        {/* Container */}
        <div className="bg-slate-900/90 border border-amber-400/50 rounded-2xl p-4 shadow-xl text-left">
          
          {/* Visual Mockup */}
          <div className="rounded-xl overflow-hidden border border-amber-300/40 mb-3.5 bg-slate-950 aspect-16/9">
            <img 
              src={SMARTBOOK_IMAGES.iso19011.webpLocal}
              onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.iso19011.local, SMARTBOOK_IMAGES.iso19011.url)}
              alt="Visual GPT Co-Pilot ISO 19011 Versi 2026"
              width={480}
              height={270}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* 6 Core Points Checklist Sesuai Brief */}
          <div className="space-y-2 mb-4 bg-slate-950/70 p-3.5 rounded-xl border border-white/10">
            {copilotBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-slate-100 font-medium leading-snug">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Mandatory Disclaimer Note Sesuai Requirement 7 */}
          <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-3 mb-4 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs text-amber-200/90 leading-relaxed">
              GPT Co-Pilot berfungsi sebagai alat bantu. Keputusan, verifikasi bukti, dan kesimpulan audit tetap dilakukan oleh auditor.
            </p>
          </div>

          {/* CTA Button */}
          <a
            id="bonus-section-cta-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBonusCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer min-h-[48px] leading-tight text-center"
          >
            <span>DAPATKAN SMART AUDIT SYSTEM + BONUS — Rp97.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
