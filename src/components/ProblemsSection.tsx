import React from 'react';
import { AlertCircle, HelpCircle, FileSearch, Target, ArrowRight } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const ProblemsSection: React.FC = () => {
  const problems = [
    {
      num: '1',
      icon: HelpCircle,
      title: 'Bingung Menyusun Pertanyaan & Checklist',
      desc: 'Auditor sering harus mulai dari lembar kosong untuk menyusun pertanyaan audit dan menentukan bukti objektif yang harus diperiksa.',
    },
    {
      num: '2',
      icon: FileSearch,
      title: 'Kesulitan Merumuskan Temuan',
      desc: 'Catatan lapangan sering masih acak sehingga sulit dirumuskan menjadi temuan yang objektif dan terstruktur.',
    },
    {
      num: '3',
      icon: Target,
      title: 'Bingung Menentukan Root Cause & CAPA',
      desc: 'Temuan sudah ditemukan, tetapi proses mencari akar masalah dan menyusun tindakan perbaikan sering membutuhkan waktu.',
    },
  ];

  const handleProblemsCtaClick = () => {
    trackCheckoutClick('problems_cta', 'Problems Section - SAYA MAU MEMPERMUDAH PROSES AUDIT');
  };

  return (
    <section id="masalah-auditor" className="py-10 sm:py-16 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="text-center mb-3">
          <span className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>KENDALA UTAMA AUDITOR</span>
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-snug px-1">
            Audit Internal Sering Terasa Berat Karena 3 Hal Ini
          </h2>
        </div>

        {/* 3 Main Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-left shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{item.num}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing & CTA */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center max-w-xl mx-auto">
          <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 leading-snug">
            SMART Audit SYSTEM Membantu Menyederhanakan Prosesnya
          </h3>

          <div className="max-w-sm mx-auto">
            <a
              id="problems-cta-btn"
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleProblemsCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-md shadow-red-600/25 cursor-pointer min-h-[48px]"
            >
              <span>🚀 SAYA MAU MEMPERMUDAH PROSES AUDIT</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
