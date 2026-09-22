import React from 'react';
import { HelpCircle, XCircle } from 'lucide-react';

export const BeginnerProblemsSection: React.FC = () => {
  const painPoints = [
    'Baru ditunjuk menjadi auditor tetapi belum pernah menjalankan audit',
    'Bingung harus bertanya apa saat berhadapan dengan auditee',
    'Tidak tahu dokumen atau bukti apa yang harus diperiksa',
    'Menemukan masalah tetapi ragu apakah itu termasuk temuan audit',
    'Bingung menulis temuan, mencari akar masalah, dan menentukan CAPA',
  ];

  return (
    <section id="masalah-auditor" className="py-8 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-800 px-3.5 py-1 rounded-full text-xs font-extrabold mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-red-700 shrink-0" />
            <span>KENDALA AUDITOR PEMULA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            PERNAH MENGALAMI HAL INI?
          </h2>
          <p className="text-sm text-gray-700 font-medium mt-1.5 max-w-xs mx-auto">
            Banyak karyawan dan auditor baru mengalami kebingungan yang sama:
          </p>
        </div>

        {/* 5 Strong Pain Points List */}
        <div className="space-y-3 max-w-md mx-auto">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-xl border border-red-200/90 shadow-2xs hover:border-red-300 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                <XCircle className="w-4.5 h-4.5 text-red-600" />
              </div>
              <p className="text-sm text-gray-800 font-semibold leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
