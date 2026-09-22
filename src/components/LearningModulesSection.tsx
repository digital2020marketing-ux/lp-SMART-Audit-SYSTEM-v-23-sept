import React from 'react';
import { Presentation, Brain, Target, Headphones, CheckCircle2, BookOpen } from 'lucide-react';

export const LearningModulesSection: React.FC = () => {
  const highlights = [
    { icon: BookOpen, text: 'Modul Pembelajaran' },
    { icon: Presentation, text: 'Slide Presentasi' },
    { icon: Brain, text: 'Mind Map Alur' },
    { icon: Target, text: 'Pre-Test & Post-Test' },
    { icon: Headphones, text: 'Audio Materi' }
  ];

  return (
    <section id="modul-pembelajaran" className="py-8 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        <div className="text-center mb-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
            PEMBELAJARAN KHUSUS AUDITOR PEMULA
          </span>
          <h2 className="text-xl font-black text-gray-900 tracking-tight mt-2 leading-tight">
            Belajar Audit Internal Secara Bertahap
          </h2>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            9 modul panduan untuk membantu auditor pemula memahami proses audit internal secara lebih terstruktur.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {highlights.slice(0, 4).map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-2.5 flex items-center gap-2 shadow-xs">
                <Icon className="w-4 h-4 text-blue-900 shrink-0" />
                <span className="text-[11px] font-bold text-gray-800">{h.text}</span>
              </div>
            );
          })}
        </div>

        {/* Highlight Card */}
        <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-4 shadow-md border border-blue-800">
          <h3 className="text-sm font-black mb-1.5 text-white">
            Materi Lengkap, Terstruktur & Siap Dipelajari
          </h3>
          <p className="text-xs text-blue-100 leading-relaxed mb-3">
            Membimbing Anda dari pemahaman dasar ISO 9001 & ISO 19011, persiapan dokumen kerja, teknik audit lapangan, hingga perumusan laporan audit.
          </p>
          <div className="space-y-1.5 text-xs text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Modul Pembelajaran Mandiri</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Slide Ringkasan & Mind Map Alur</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Pre-Test & Post-Test Evaluasi Mandiri</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Audio Materi Fleksibel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


