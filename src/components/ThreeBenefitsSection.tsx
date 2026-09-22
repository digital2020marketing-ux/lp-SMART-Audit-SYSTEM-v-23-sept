import React from 'react';
import { FileText, Compass, CheckSquare, Sparkles } from 'lucide-react';

export const ThreeBenefitsSection: React.FC = () => {
  const benefits = [
    {
      num: '1',
      title: 'Tidak Mulai dari File Kosong',
      desc: 'Gunakan worksheet dan format kerja yang sudah tersedia sebagai starting point.',
      icon: FileText,
      accent: 'bg-blue-900 text-white'
    },
    {
      num: '2',
      title: 'Lebih Terarah Saat Menjalankan Audit',
      desc: 'Pahami apa yang perlu ditanyakan, evidence apa yang dicari, dan bagaimana alurnya.',
      icon: Compass,
      accent: 'bg-indigo-900 text-white'
    },
    {
      num: '3',
      title: 'Lebih Mudah Menyusun Hasil Audit',
      desc: 'Gunakan panduan dan alat bantu untuk merumuskan temuan, root cause, CAPA, hingga laporan.',
      icon: CheckSquare,
      accent: 'bg-emerald-900 text-white'
    }
  ];

  return (
    <section id="manfaat-utama" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-[10px] font-extrabold mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>PERUBAHAN NYATA</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            APA YANG BERUBAH SETELAH ANDA PUNYA SISTEM INI?
          </h2>
        </div>

        {/* 3 Core Benefits Cards */}
        <div className="space-y-3.5 max-w-md mx-auto">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div 
                key={b.num}
                className="bg-slate-50 border border-gray-200/90 rounded-2xl p-4 shadow-2xs hover:border-blue-300 transition-colors flex items-start gap-3.5"
              >
                <div className={`w-9 h-9 rounded-xl ${b.accent} flex items-center justify-center font-black text-sm shrink-0 shadow-xs mt-0.5`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-extrabold bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full">
                      Poin {b.num}
                    </span>
                    <h3 className="font-extrabold text-sm text-gray-900 leading-snug">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
