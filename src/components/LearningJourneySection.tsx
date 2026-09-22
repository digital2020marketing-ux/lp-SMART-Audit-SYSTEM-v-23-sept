import React from 'react';
import { 
  ClipboardList, 
  HelpCircle, 
  Search, 
  AlertTriangle, 
  Network, 
  CheckSquare, 
  FileSpreadsheet,
  ArrowDown,
  Layers
} from 'lucide-react';

export const LearningJourneySection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Persiapan',
      desc: 'Menentukan jadwal, ruang lingkup, dan dokumen acuan standar.',
      icon: ClipboardList,
      color: 'bg-blue-900'
    },
    {
      num: '2',
      title: 'Membuat Pertanyaan',
      desc: 'Menyusun checklist dan pertanyaan wawancara sesuai proses auditee.',
      icon: HelpCircle,
      color: 'bg-indigo-900'
    },
    {
      num: '3',
      title: 'Memeriksa Bukti',
      desc: 'Mengumpulkan bukti objektif lapangan, dokumen, rekaman, dan observasi.',
      icon: Search,
      color: 'bg-cyan-800'
    },
    {
      num: '4',
      title: 'Membuat Temuan',
      desc: 'Menyusun narasi ketidaksesuaian yang jelas berdasarkan bukti nyata.',
      icon: AlertTriangle,
      color: 'bg-amber-600'
    },
    {
      num: '5',
      title: 'Mencari Penyebab',
      desc: 'Menelusuri akar masalah utama agar ketidaksesuaian tidak terulang.',
      icon: Network,
      color: 'bg-purple-900'
    },
    {
      num: '6',
      title: 'Menentukan Perbaikan',
      desc: 'Menyusun tindakan koreksi dan pencegahan (CAPA) yang realistis.',
      icon: CheckSquare,
      color: 'bg-emerald-800'
    },
    {
      num: '7',
      title: 'Membuat Laporan',
      desc: 'Menyusun laporan hasil audit internal secara lengkap dan rapi.',
      icon: FileSpreadsheet,
      color: 'bg-slate-900'
    }
  ];

  return (
    <section id="alur-audit" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-[10px] font-extrabold mb-2.5">
            <Layers className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>ALUR AUDIT LENGKAP</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            SATU SISTEM UNTUK MENDAMPINGI ALUR AUDIT DARI AWAL SAMPAI SELESAI
          </h2>
          <p className="text-xs text-gray-600 font-medium mt-1.5 max-w-xs mx-auto">
            Dipandu memahami alur lengkap langkah demi langkah:
          </p>
        </div>

        {/* 7-Step Sequential Flow */}
        <div className="space-y-2 mb-4 max-w-md mx-auto">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <React.Fragment key={idx}>
                <div 
                  className="bg-slate-50 border border-gray-200/90 rounded-xl p-3 flex items-center gap-3 shadow-2xs"
                >
                  <div className={`w-7 h-7 rounded-lg ${s.color} text-white flex items-center justify-center shrink-0 shadow-2xs text-xs font-black`}>
                    {s.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-extrabold text-gray-900 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-[11px] text-gray-600 leading-snug font-normal mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                {idx < steps.length - 1 && (
                  <div className="flex justify-center -my-1">
                    <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                      <ArrowDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Concluding Highlight Statement */}
        <div className="bg-blue-50 border border-blue-200/90 rounded-xl p-3.5 text-center max-w-md mx-auto">
          <p className="text-xs font-bold text-blue-950 leading-relaxed">
            Jadi saat masuk ke tahap berikutnya, Anda sudah tahu apa yang harus dilakukan.
          </p>
        </div>
      </div>
    </section>
  );
};
