import React from 'react';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const SolutionIntroSection: React.FC = () => {
  const handleSolutionCtaClick = () => {
    trackCheckoutClick('solution_intro_cta', 'Solution Intro - DAPATKAN PROMO SEPTEMBER — Rp97.000');
  };

  const steps = [
    { label: 'PERSIAPAN', color: 'bg-blue-900 text-white' },
    { label: 'PERTANYAAN', color: 'bg-blue-800 text-white' },
    { label: 'EVIDENCE', color: 'bg-indigo-900 text-white' },
    { label: 'TEMUAN', color: 'bg-purple-900 text-white' },
    { label: 'ROOT CAUSE', color: 'bg-slate-900 text-white' },
    { label: 'CAPA', color: 'bg-emerald-900 text-white' },
    { label: 'LAPORAN', color: 'bg-teal-900 text-white' },
  ];

  return (
    <section id="solusi-smart-audit" className="py-8 bg-slate-900 text-white border-b border-gray-800">
      <div className="w-full px-4 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 bg-blue-800/80 border border-blue-600/50 text-blue-200 px-3.5 py-1 rounded-full text-xs font-extrabold mb-2.5">
          <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span>SISTEM PRAKTIK TERPADU</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
          INILAH SMART AUDIT SYSTEM
        </h2>

        {/* Subheadline */}
        <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed max-w-md mx-auto mb-5">
          Bukan sekadar materi belajar audit, tetapi sistem praktik yang membantu auditor pemula menjalankan proses audit dari awal sampai selesai.
        </p>

        {/* Big Step Pipeline / Workflow */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 max-w-md mx-auto mb-5 shadow-inner">
          <p className="text-xs font-extrabold uppercase text-blue-300 tracking-wider mb-3">
            ALUR KERJA PRAKTIK TERSTRUKTUR:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-black">
            {steps.map((st, i) => (
              <React.Fragment key={i}>
                <span className={`px-3 py-1.5 rounded-lg ${st.color} shadow-xs`}>
                  {st.label}
                </span>
                {i < steps.length - 1 && (
                  <span className="text-blue-400 font-bold text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Narrative Copy */}
        <div className="bg-blue-950/50 border border-blue-800/40 rounded-2xl p-4 sm:p-5 max-w-md mx-auto mb-5 text-sm text-blue-100 leading-relaxed space-y-2.5 text-left">
          <p className="font-bold text-white text-base">
            Anda tidak perlu mengingat semuanya sekaligus.
          </p>
          <p>
            SMART Audit System membagi proses audit menjadi langkah-langkah yang jelas, lalu menyediakan materi, worksheet, simulasi, dan alat bantu pada setiap tahapnya.
          </p>
        </div>

        {/* CTA Button */}
        <div className="max-w-md mx-auto">
          <a
            id="solution-intro-cta-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSolutionCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 text-white py-4 px-4 rounded-xl font-black text-sm sm:text-base shadow-lg shadow-red-600/30 active:scale-[0.98] transition-all cursor-pointer min-h-[52px]"
          >
            <span>DAPATKAN SMART AUDIT SYSTEM — Rp97.000</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
