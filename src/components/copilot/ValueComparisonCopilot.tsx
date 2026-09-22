import React from 'react';
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const ValueComparisonCopilot: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('value_comparison_cta', 'Value Comparison - SAYA MAU SMART AUDIT SYSTEM — Rp97.000');
  };

  const workflowSteps = [
    'Checklist',
    'Pertanyaan',
    'Evidence',
    'Temuan',
    'PLOR',
    'Root Cause',
    'CAPA',
    'Laporan',
  ];

  return (
    <section id="bukan-sekadar-modul" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto text-center">
        {/* Title Requirement 9 */}
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight mb-2.5">
          BUKAN SEKADAR MEMBELI MODUL
        </h2>

        <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed mb-4">
          Yang Anda dapatkan adalah starting point kerja audit yang dapat digunakan kembali.
        </p>

        {/* Workflow Chain Box */}
        <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-xs mb-4">
          <div className="flex flex-wrap items-center justify-center gap-1 text-[11px] sm:text-xs font-black">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="bg-blue-800/90 text-white px-2 py-1 rounded-md">
                  {step}
                </span>
                {idx < workflowSteps.length - 1 && (
                  <span className="text-amber-400 font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Core Value Statement */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-4 text-left">
          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
            Daripada setiap audit harus kembali mencari template, membuka Word/Excel kosong, dan menyusun semuanya dari awal, gunakan satu sistem yang sudah terstruktur.
          </p>
          <div className="mt-3 pt-3 border-t border-blue-200 text-center">
            <span className="text-xs font-black text-blue-950 uppercase tracking-wide">
              Sekali bayar Rp97.000 • Akses seumur hidup
            </span>
          </div>
        </div>

        {/* CTA Sesuai Requirement 9 */}
        <a
          id="value-comparison-cta-btn"
          href={getCheckoutUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer min-h-[48px] leading-tight text-center"
        >
          <span>SAYA MAU SMART AUDIT SYSTEM — Rp97.000</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </section>
  );
};
