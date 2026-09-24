import React from 'react';

export const CleanGuarantee: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
          JAMINAN KEAMANAN & KEPUASAN
        </span>

        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-tight mb-3">
          Coba SMART AUDIT SYSTEM Tanpa Rasa Khawatir
        </h2>

        {/* Box Trust Element dengan Icon Shield */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-emerald-400/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 text-emerald-950 font-black text-[16px] sm:text-[17px]">
            <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-[16px] shrink-0">
              🛡️
            </div>
            <span>Garansi 7 Hari Uang Kembali</span>
          </div>

          <p className="text-[14px] sm:text-[15px] text-slate-800 font-semibold leading-relaxed">
            Pelajari materinya dan gunakan worksheet yang tersedia.
          </p>

          <p className="text-[13.5px] sm:text-[14.5px] text-slate-700 font-medium leading-relaxed">
            Jika kamu merasa sistem ini tidak memberikan manfaat atau tidak sesuai dengan kebutuhan auditmu, cukup ajukan refund dalam waktu 7 hari setelah pembelian.
          </p>

          <div className="pt-2.5 border-t border-slate-100">
            <p className="text-[13px] sm:text-[13.5px] text-emerald-950 font-bold leading-relaxed flex items-center gap-1.5">
              <span>✓</span>
              <span>100% tanpa risiko — kamu punya waktu membuktikan sendiri nilainya.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
