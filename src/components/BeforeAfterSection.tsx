import React from 'react';
import { ArrowDown, CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const beforeSteps = [
    { text: 'File kosong', desc: 'Mulai dari dokumen Word/Excel kosong' },
    { text: 'Bingung mulai dari mana', desc: 'Menimbang klausul & alur wawancara' },
    { text: 'Cari template dokumen', desc: 'Mencari format acak di internet/arsip lama' },
    { text: 'Susun pertanyaan dari nol', desc: 'Mengetik pertanyaan checklist satu per satu' },
    { text: 'Cari & tebak evidence', desc: 'Ragu menentukan bukti objektif yang valid' },
    { text: 'Catatan lapangan acak', desc: 'Catatan berantakan sulit dijadikan temuan' },
    { text: 'Bingung formulasi CAPA', desc: 'Analisis akar masalah hanya menambal gejala' },
    { text: 'Laporan terlambat', desc: 'Administrasi berbelit menyita berhari-hari' }
  ];

  const afterSteps = [
    { text: 'Buka SMART Audit SYSTEM', desc: 'Akses instan di browser tanpa instalasi' },
    { text: 'Pilih workflow proses', desc: 'Tentukan departemen/klausul ISO yang diaudit' },
    { text: 'Dapatkan starting point 5W+1H', desc: 'AI siapkan draf pertanyaan & bukti objektif' },
    { text: 'Verifikasi di lapangan', desc: 'Fokus wawancara, observasi & kroscek bukti' },
    { text: 'Formulasikan temuan PLOR', desc: 'Struktur Problem, Location, Evidence & Req rapi' },
    { text: 'Analisis akar masalah 5-Why', desc: 'Eksplorasi Corrective & Preventive Action' },
    { text: 'Dokumentasikan di worksheet', desc: 'Format Word & Excel standar siap pakai' },
    { text: 'Hasil audit tuntas & bernilai', desc: 'Menghasilkan insight perbaikan mutu riil' }
  ];

  return (
    <section id="transformasi" className="py-14 sm:py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>TRANSFORMASI CARA KERJA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            Perubahan Alur Kerja: Sebelum vs Sesudah
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Bukan sekadar menambah template, tetapi <strong className="text-gray-900">mengubah fundamental alur kerja</strong> Anda dalam setiap siklus audit.
          </p>
        </div>

        {/* Visual Workflow Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Column 1: CARA KERJA LAMA (BEFORE) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-red-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-red-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black text-xs">
                    ✕
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-red-950 uppercase tracking-wide">
                      BEFORE — CARA KONVENSIONAL
                    </h3>
                    <span className="text-xs text-red-600 font-semibold">
                      Serba Mulai dari File Kosong
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Sequence */}
              <div className="space-y-2.5">
                {beforeSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-red-50/60 border border-red-100 text-left">
                    <span className="w-5 h-5 rounded-md bg-red-200/80 text-red-800 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-red-950">
                        {step.text}
                      </div>
                      <div className="text-[11px] text-red-800/80 font-medium">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-red-100 text-center">
              <span className="text-xs text-red-700 font-bold">
                ⚠️ Banyak energi habis di urusan administrasi dasar
              </span>
            </div>
          </div>

          {/* Column 2: CARA KERJA BARU (AFTER) */}
          <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-7 border-2 border-emerald-500 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-[10px] px-3.5 py-1 rounded-bl-xl uppercase tracking-wider">
              WORKFLOW TERSTRUKTUR
            </div>

            <div>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-emerald-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black text-emerald-300 uppercase tracking-wide">
                      AFTER — SMART AUDIT SYSTEM
                    </h3>
                    <span className="text-xs text-emerald-400 font-semibold">
                      Starting Point Terstruktur & Terintegrasi
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Sequence */}
              <div className="space-y-2.5">
                {afterSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-left">
                    <span className="w-5 h-5 rounded-md bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {step.text}
                      </div>
                      <div className="text-[11px] text-emerald-300/90 font-medium">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-emerald-800/80 text-center">
              <span className="text-xs text-emerald-300 font-bold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Auditor fokus pada observasi, bukti objektif & perbaikan mutu
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
