import React from 'react';
import { ArrowDown, CheckCircle } from 'lucide-react';

export const WorkflowOutcomeSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'Persiapan', desc: 'Menentukan ruang lingkup, jadwal, dan dokumen acuan standar audit.' },
    { num: '02', title: 'Pertanyaan', desc: 'Menyusun checklist pertanyaan audit berbasis klausul ISO dan pendekatan 5W+1H.' },
    { num: '03', title: 'Evidence', desc: 'Memeriksa rekaman, dokumen, observasi, dan bukti objektif di lapangan.' },
    { num: '04', title: 'Temuan', desc: 'Menstrukturkan pernyataan ketidaksesuaian secara objektif dengan format PLOR.' },
    { num: '05', title: 'Root Cause', desc: 'Menggali akar masalah yang mendasar menggunakan metode 5-Why terstruktur.' },
    { num: '06', title: 'CAPA', desc: 'Merumuskan koreksi langsung dan tindakan korektif agar tidak berulang.' },
    { num: '07', title: 'Laporan', desc: 'Menyusun draf laporan audit yang terstruktur, jelas, dan siap ditindaklanjuti auditee.' },
  ];

  return (
    <section id="alur-audit" className="bg-white py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <CheckCircle className="w-4 h-4 text-blue-700 shrink-0" />
            <span>ALUR AUDIT KONKRET</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            ALUR 7 TAHAP PRAKTIK AUDIT INTERNAL
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-2.5 mt-2 text-center">
            <p className="text-[11px] sm:text-xs font-black text-blue-900 uppercase tracking-wide leading-relaxed">
              PERSIAPAN → PERTANYAAN → EVIDENCE → TEMUAN → ROOT CAUSE → CAPA → LAPORAN
            </p>
          </div>
        </div>

        {/* Visual Workflow Vertical */}
        <div className="space-y-2 mb-4">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs hover:border-blue-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-900 text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[14px] sm:text-[15px] font-black text-gray-900 tracking-wide">
                    {step.title}
                  </div>
                  <div className="text-[13px] sm:text-sm text-gray-700 font-medium leading-snug mt-0.5">
                    {step.desc}
                  </div>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
