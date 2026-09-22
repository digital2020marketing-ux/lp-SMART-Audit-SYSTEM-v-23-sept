import React from 'react';

export const CleanSolution: React.FC = () => {
  const workflow = [
    { name: 'Persiapan', desc: 'Ruang lingkup & jadwal' },
    { name: 'Checklist', desc: 'Pemeriksaan klausul & proses' },
    { name: 'Pertanyaan', desc: 'Teknik wawancara terarah' },
    { name: 'Evidence', desc: 'Verifikasi bukti objektif' },
    { name: 'Temuan', desc: 'Perumusan berbasis PLOR' },
    { name: 'Root Cause', desc: 'Analisis akar penyebab' },
    { name: 'CAPA', desc: 'Koreksi & tindakan korektif' },
    { name: 'Laporan', desc: 'Pelaporan ke manajemen' },
  ];

  return (
    <section className="bg-white py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="framework-alur">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase">
            <span>PROFESSIONAL AUDIT EXECUTION FRAMEWORK</span>
          </div>
        </div>

        {/* H2 */}
        <h2 className="text-[20px] sm:text-[26px] font-black text-slate-950 leading-[1.2] tracking-tight mb-3 text-center uppercase break-words px-1">
          JALANKAN AUDIT DENGAN WORKFLOW YANG JELAS
        </h2>

        {/* Subheadline */}
        <p className="text-[14px] sm:text-[16px] text-slate-700 font-medium leading-relaxed mb-6 text-center">
          Workflow SMART AUDIT SYSTEM disusun dengan mengacu pada prinsip dan pedoman ISO 19011, menghubungkan setiap tahapan audit ke dalam satu alur kerja terstruktur:
        </p>

        {/* Visual Workflow: Horizontal on desktop/tablet, clean scrollable / vertical on mobile */}
        <div className="bg-slate-950 text-white rounded-2xl p-4 sm:p-5 mb-5 shadow-md border border-slate-800">
          <div className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-3.5 text-center">
            ALUR KERJA AUDIT LENGKAP
          </div>

          {/* Desktop & Mobile Responsive Grid/Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left mb-2">
            {workflow.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-blue-400 font-mono">
                    0{idx + 1}
                  </span>
                  {idx < workflow.length - 1 && (
                    <span className="text-slate-600 text-[10px] hidden sm:inline">→</span>
                  )}
                </div>
                <div className="font-black text-white text-[13.5px] leading-tight mb-0.5">
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-400 leading-snug">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="text-[12px] text-slate-400 font-medium pt-2 border-t border-slate-800 text-center">
            Persiapan → Checklist → Pertanyaan → Evidence → Temuan → Root Cause → CAPA → Laporan
          </div>
        </div>

        {/* Core Value Statement */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center text-[13.5px] sm:text-[14px] text-slate-700 leading-relaxed font-medium mb-4">
          <strong className="text-slate-950 font-bold">Membekali auditor dengan sistem kerja yang jelas dan konsisten.</strong><br />
          Membantu Anda menyiapkan proses dan dokumentasi audit yang lebih sistematis untuk kebutuhan evaluasi internal maupun audit sertifikasi.
        </div>

        {/* 4 Pillars Summary */}
        <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 text-center">
          <div className="text-[11px] font-black uppercase tracking-wider text-blue-900 mb-1">
            4 PILAR INSTRUMEN KERJA DIGITAL
          </div>
          <p className="text-[13px] sm:text-[13.5px] text-blue-950 font-medium leading-relaxed">
            Alur kerja di atas dioperasionalkan melalui 4 pilar instrumen siap pakai: <strong>9 Modul Panduan</strong>, <strong>7 Workbooks</strong>, <strong>5 AI Frameworks</strong>, dan <strong>Simulasi Kasus</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};
