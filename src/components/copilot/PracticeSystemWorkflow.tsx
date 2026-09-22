import React from 'react';
import { 
  ClipboardList, 
  HelpCircle, 
  Search, 
  AlertTriangle, 
  Network, 
  CheckSquare, 
  FileSpreadsheet, 
  ArrowRight, 
  Workflow 
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const PracticeSystemWorkflow: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Persiapan',
      desc: 'Menentukan ruang lingkup, jadwal, dan dokumen acuan.',
      icon: ClipboardList,
      color: 'bg-blue-900',
    },
    {
      num: '2',
      title: 'Pertanyaan',
      desc: 'Menyiapkan checklist dan pertanyaan 5W+1H.',
      icon: HelpCircle,
      color: 'bg-indigo-900',
    },
    {
      num: '3',
      title: 'Evidence',
      desc: 'Mengarahkan auditor pada dokumen, rekaman, observasi, dan bukti objektif.',
      icon: Search,
      color: 'bg-cyan-800',
    },
    {
      num: '4',
      title: 'Temuan',
      desc: 'Membantu merapikan temuan menggunakan struktur PLOR.',
      icon: AlertTriangle,
      color: 'bg-amber-600',
    },
    {
      num: '5',
      title: 'Root Cause',
      desc: 'Mengeksplorasi penyebab dengan metode 5-Why terstruktur.',
      icon: Network,
      color: 'bg-purple-900',
    },
    {
      num: '6',
      title: 'CAPA',
      desc: 'Membantu menyusun draf tindakan koreksi dan tindakan korektif.',
      icon: CheckSquare,
      color: 'bg-emerald-800',
    },
    {
      num: '7',
      title: 'Laporan',
      desc: 'Membantu mendokumentasikan hasil audit secara lebih terstruktur.',
      icon: FileSpreadsheet,
      color: 'bg-slate-900',
    },
  ];

  return (
    <section id="alur-kerja-praktik" className="py-7 bg-white border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Workflow className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>ALUR KERJA AUDIT</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            INILAH SMART AUDIT SYSTEM
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1.5 leading-relaxed">
            SMART Audit System bukan sekadar kumpulan modul atau template. Sistem ini membantu memberikan starting point pada setiap tahap pekerjaan audit internal.
          </p>
        </div>

        {/* Big Visual Workflow Ribbon */}
        <div className="mb-4 bg-slate-900 text-white rounded-xl p-3 shadow-sm">
          <p className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-2 text-center">
            WORKFLOW 7 TAHAP KERJA AUDIT:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1 text-[11px] font-black text-slate-200 leading-none">
            <span className="bg-blue-800 px-2 py-1 rounded">PERSIAPAN</span>
            <span className="text-amber-400 font-bold">→</span>
            <span className="bg-indigo-800 px-2 py-1 rounded">PERTANYAAN</span>
            <span className="text-amber-400 font-bold">→</span>
            <span className="bg-cyan-800 px-2 py-1 rounded">EVIDENCE</span>
            <span className="text-amber-400 font-bold">→</span>
            <span className="bg-amber-600 px-2 py-1 rounded text-slate-950">TEMUAN</span>
            <span className="text-amber-400 font-bold">→</span>
            <span className="bg-purple-800 px-2 py-1 rounded">ROOT CAUSE</span>
            <span className="text-amber-400 font-bold">→</span>
            <span className="bg-emerald-800 px-2 py-1 rounded">CAPA</span>
            <span className="text-amber-400 font-bold">→</span>
            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">LAPORAN</span>
          </div>
        </div>

        {/* Concise 7 Stage Cards */}
        <div className="space-y-2 mb-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-gray-200 rounded-xl p-3 flex items-start gap-3 shadow-2xs"
              >
                <div className={`w-8 h-8 rounded-lg ${s.color} text-white flex items-center justify-center shrink-0 shadow-2xs text-xs font-black mt-0.5`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-blue-900 bg-blue-100 px-1.5 py-0.2 rounded">
                      #{s.num}
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-gray-900 tracking-tight">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA setelah workflow */}
        <div>
          <a
            id="workflow-cta-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCheckoutClick('workflow_cta', 'Workflow - DAPATKAN SISTEM AUDIT LENGKAP — Rp97.000')}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer min-h-[48px] leading-tight text-center"
          >
            <span>DAPATKAN SISTEM AUDIT LENGKAP — Rp97.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
