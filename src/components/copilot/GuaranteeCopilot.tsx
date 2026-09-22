import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeCopilot: React.FC = () => {
  return (
    <section id="garansi-copilot" className="py-6 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto">
        <div className="bg-white border-2 border-emerald-500/80 rounded-2xl p-4 shadow-xs text-center">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2.5">
            <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
          </div>

          <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight leading-snug mb-1.5">
            GARANSI 7 HARI
          </h3>

          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed max-w-sm mx-auto">
            Gunakan dan pelajari SMART Audit System. Jika produk yang diterima tidak sesuai dengan penawaran pada halaman ini, pengajuan garansi dapat dilakukan dalam periode 7 hari sesuai ketentuan yang berlaku.
          </p>
        </div>
      </div>
    </section>
  );
};
