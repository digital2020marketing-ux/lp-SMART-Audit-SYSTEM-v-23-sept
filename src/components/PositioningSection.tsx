import React from 'react';
import { BookOpen, FileSpreadsheet, Target, Bot, ArrowRight, ArrowDown } from 'lucide-react';

export const PositioningSection: React.FC = () => {
  const steps = [
    {
      icon: BookOpen,
      phase: 'BELAJAR',
      desc: 'Materi terstruktur',
      iconBg: 'bg-blue-900 text-white'
    },
    {
      icon: FileSpreadsheet,
      phase: 'PRAKTIK',
      desc: 'Worksheet siap edit',
      iconBg: 'bg-emerald-800 text-white'
    },
    {
      icon: Target,
      phase: 'SIMULASI',
      desc: 'Alur proses audit',
      iconBg: 'bg-amber-800 text-white'
    },
    {
      icon: Bot,
      phase: 'DIBANTU AI',
      desc: 'Tools bantu praktik',
      iconBg: 'bg-indigo-800 text-white'
    }
  ];

  return (
    <section id="positioning-section" className="py-8 bg-white border-y border-gray-200">
      <div className="w-full px-4 text-center">
        <h2 className="text-xl font-black text-gray-900 tracking-tight mb-2">
          Bukan Sekadar E-Course. Bukan Sekadar AI.
        </h2>
        <p className="text-xs text-gray-700 leading-relaxed max-w-sm mx-auto mb-5">
          Anda mendapatkan materi untuk belajar, worksheet untuk latihan, simulasi untuk memahami proses audit, dan AI Tools untuk membantu praktik.
        </p>

        {/* Visual: BELAJAR -> PRAKTIK -> SIMULASI -> DIBANTU AI */}
        <div className="grid grid-cols-2 gap-2.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-gray-200 rounded-xl p-3 flex flex-col items-center text-center shadow-xs"
              >
                <div className={`w-8 h-8 rounded-lg ${step.iconBg} flex items-center justify-center mb-1.5 shadow-xs`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-black text-gray-900 tracking-wide">
                  {step.phase}
                </span>
                <span className="text-[10px] text-gray-500 font-medium mt-0.5">
                  {step.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

