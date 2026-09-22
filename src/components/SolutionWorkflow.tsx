import React from 'react';
import { Sparkles, ArrowRight, Layers, FileText, CheckCircle, Search, Wrench, BarChart3 } from 'lucide-react';

export const SolutionWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'PREPARE',
      sub: 'Persiapan & Checklist',
      desc: 'Dapatkan draf pertanyaan audit 5W+1H dan rekomendasi bukti objektif sesuai klausul & proses departemen.',
      icon: FileText,
      color: 'bg-blue-600'
    },
    {
      num: '02',
      title: 'AUDIT',
      sub: 'Verifikasi Lapangan',
      desc: 'Lakukan wawancara, observasi operasional, dan kroscek kesesuaian dokumen/rekaman di lapangan.',
      icon: Search,
      color: 'bg-indigo-600'
    },
    {
      num: '03',
      title: 'FIND',
      sub: 'Formulasi Temuan',
      desc: 'Ubah catatan lapangan acak menjadi formulasi temuan PLOR (Problem, Location, Evidence, Requirement).',
      icon: Layers,
      color: 'bg-amber-600'
    },
    {
      num: '04',
      title: 'FIX',
      sub: 'Akar Masalah & CAPA',
      desc: 'Eksplorasi akar masalah dengan 5-Why Analysis dan rancang tindakan korektif & preventif yang tepat.',
      icon: Wrench,
      color: 'bg-rose-600'
    },
    {
      num: '05',
      title: 'REPORT',
      sub: 'Pelaporan & RTM',
      desc: 'Rekap seluruh rekaman audit ke dalam format worksheet standar yang siap dilaporkan ke Top Management.',
      icon: BarChart3,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section id="solusi-workflow" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>SOLUSI WORKFLOW TERPADU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            Memperkenalkan SMART Audit SYSTEM
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Satu workflow terintegrasi untuk membantu Anda bergerak mulus dari <strong className="text-blue-900 font-bold">Persiapan → Audit → Temuan → CAPA → Pelaporan.</strong>
          </p>
        </div>

        {/* 5-Step Workflow Visual Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-slate-400 font-mono tracking-widest">{s.num}</span>
                    <div className={`w-8 h-8 rounded-xl ${s.color} text-white flex items-center justify-center shadow-xs`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-black text-gray-900 mb-0.5 tracking-tight">
                    {s.title}
                  </h3>
                  <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mb-2">
                    {s.sub}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Summary Bridge */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-blue-950 font-semibold">
            Bukan sekadar aplikasi atau kumpulan dokumen terpisah, melainkan sistem alur kerja yang membuat setiap tahap audit Anda memiliki <span className="underline decoration-blue-500 underline-offset-2">starting point terstruktur</span>.
          </p>
        </div>

      </div>
    </section>
  );
};
