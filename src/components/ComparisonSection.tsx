import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const ComparisonSection: React.FC = () => {
  const aiUmum = [
    'Membuat prompt sendiri dari nol',
    'Menentukan alur belajar sendiri',
    'Mencari format dokumen sendiri'
  ];

  const smartAuditSystem = [
    'Materi belajar terstruktur',
    'Worksheet siap pakai (Word & Excel)',
    'Simulasi alur proses audit',
    'AI Tools khusus kebutuhan audit',
    'Panduan praktis ISO 19011'
  ];

  const handleComparisonCtaClick = () => {
    trackCheckoutClick('comparison_cta', 'Comparison Section - DAPATKAN AKSES — Rp249.000');
  };

  return (
    <section id="komparasi" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        <div className="text-center mb-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
            PERBANDINGAN
          </span>
          <h2 className="text-xl font-black text-gray-900 tracking-tight mt-2 leading-tight">
            Bukan Sekadar AI.<br />
            <span className="text-blue-900">Ini Sistem Belajar dan Praktik Audit.</span>
          </h2>
        </div>

        {/* 2 Comparison Cards Stacked */}
        <div className="space-y-3 mb-5">
          {/* AI UMUM */}
          <div className="bg-red-50/60 border border-red-200 rounded-2xl p-4">
            <h3 className="text-xs font-black text-red-900 mb-2 pb-2 border-b border-red-200 flex items-center justify-between">
              <span>❌ AI UMUM (ChatGPT dsb)</span>
              <span className="text-[10px] text-red-700 font-semibold">Anda Harus:</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              {aiUmum.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DENGAN SMART AUDIT SYSTEM */}
          <div className="bg-blue-50 border-2 border-blue-900 rounded-2xl p-4 shadow-sm">
            <h3 className="text-xs font-black text-blue-950 mb-2 pb-2 border-b border-blue-200 flex items-center justify-between">
              <span>✅ SMART AUDIT SYSTEM</span>
              <span className="text-[10px] text-emerald-800 font-bold">Anda Mendapatkan:</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-900 font-bold">
              {smartAuditSystem.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <a
          id="comparison-cta-btn"
          href={getCheckoutUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleComparisonCtaClick}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 text-white py-3.5 px-4 rounded-xl font-black text-xs shadow-md shadow-red-600/25 active:scale-[0.98] transition-all cursor-pointer text-center"
        >
          <span>🚀 DAPATKAN AKSES — Rp249.000</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

