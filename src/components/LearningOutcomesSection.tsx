import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';

export const LearningOutcomesSection: React.FC = () => {
  const outcomes = [
    'Memahami tahapan audit',
    'Menyiapkan pertanyaan & checklist',
    'Memeriksa bukti objektif',
    'Merumuskan temuan PLOR',
    'Memahami 5-Why & CAPA'
  ];

  return (
    <section id="hasil-belajar" className="py-7 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2">
            <Award className="w-3 h-3" />
            <span>HASIL BELAJAR</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-tight">
            Setelah Mengikuti Program Ini,<br />
            <span className="text-emerald-800">Anda Akan Lebih Siap:</span>
          </h2>
        </div>

        {/* 5 Concise Outcomes List */}
        <div className="space-y-2 max-w-sm mx-auto">
          {outcomes.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2.5 bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 shadow-xs"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-gray-800 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

