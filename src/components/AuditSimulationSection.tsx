import React from 'react';
import { Target, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const AuditSimulationSection: React.FC = () => {
  const simulationFlow = [
    'Persiapan',
    'Pertanyaan',
    'Bukti Objektif',
    'Temuan (PLOR)',
    'Analisis 5-Why',
    'CAPA'
  ];

  const simulationPoints = [
    'Melihat alur proses audit dari awal sampai akhir',
    'Mengetahui apa yang harus ditanyakan saat wawancara',
    'Mengetahui bukti objektif yang harus diperiksa di lapangan',
    'Mengetahui cara mencatat dan merumuskan temuan (PLOR)'
  ];

  return (
    <section id="simulasi-audit" className="py-8 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        <div className="text-center mb-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
            SIMULASI PROSES AUDIT
          </span>
          <h2 className="text-xl font-black text-gray-900 tracking-tight mt-2 leading-tight">
            Tidak Hanya Belajar Teori — Lihat Cara Audit Dilakukan
          </h2>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Simulasi dan studi kasus audit untuk membantu auditor pemula memahami situasi nyata.
          </p>
        </div>

        {/* Process Flow Badge Chain */}
        <div className="bg-white border border-gray-200 rounded-2xl p-3.5 shadow-xs mb-4">
          <p className="text-[10px] font-black uppercase text-gray-500 tracking-wider mb-2 text-center">
            Alur Simulasi Audit:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-bold text-slate-800">
            {simulationFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg">
                  {step}
                </span>
                {idx < simulationFlow.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-gray-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Focused Simulation Points */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xs mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-amber-800 text-white flex items-center justify-center font-bold shrink-0">
              <Target className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">
              Apa yang Anda Pelajari di Simulasi:
            </h3>
          </div>

          <div className="space-y-2">
            {simulationPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-slate-50 border border-gray-100 rounded-xl p-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-gray-800 leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing text */}
        <div className="bg-blue-50 border border-blue-200 text-blue-950 rounded-xl p-3.5 text-center flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
          <p className="text-xs font-bold leading-snug">
            Membantu auditor pemula tidak kaget saat pertama kali menjalankan audit.
          </p>
        </div>
      </div>
    </section>
  );
};

