import React from 'react';
import { Bot } from 'lucide-react';

export const ObjectionHandlingDirectResponse: React.FC = () => {
  return (
    <section id="perbandingan-chatgpt" className="bg-white py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Badge & Headline */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <Bot className="w-4 h-4 text-blue-600 shrink-0" />
            <span>PERBANDINGAN STRUKTUR</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            KENAPA TIDAK CUKUP PAKAI AI UMUM SAJA?
          </h2>
        </div>

        {/* Copy sesuai brief */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4">
          <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
            AI umum dapat membantu banyak pekerjaan. Tetapi pengguna tetap harus membuat prompt, menentukan struktur, menyiapkan dokumen, dan menghubungkan tahapan audit sendiri.
          </p>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
            <div className="text-xs font-black uppercase tracking-wider text-blue-900 mb-2">
              SMART Audit System menyatukan:
            </div>
            <div className="text-sm sm:text-base font-black text-blue-950 leading-relaxed">
              Workflow + Modul + Worksheet + Simulasi + AI Tools
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
