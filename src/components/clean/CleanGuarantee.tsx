import React from 'react';

export const CleanGuarantee: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-10 sm:py-12 px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-1.5">
          JAMINAN KEAMANAN
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-4">
          Coba SMART AUDIT SYSTEM Selama 7 Hari
        </h2>

        {/* Guarantee Body Box */}
        <div className="p-5 rounded-2xl bg-white border-2 border-emerald-300 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-black text-[16px]">
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[15px] shrink-0">
              🛡️
            </span>
            <span>Garansi 7 Hari Uang Kembali</span>
          </div>

          <p className="text-[15px] sm:text-[15.5px] text-slate-800 font-semibold leading-relaxed">
            Pelajari materinya.
          </p>

          <p className="text-[15px] sm:text-[15.5px] text-slate-800 font-semibold leading-relaxed">
            Lihat worksheet dan instrumen yang tersedia.
          </p>

          <p className="text-[15px] sm:text-[15.5px] text-slate-700 font-medium leading-relaxed">
            Kalau ternyata produk tidak sesuai dengan kebutuhanmu, kamu dapat mengajukan pengembalian dana dalam 7 hari sesuai ketentuan garansi.
          </p>

          <div className="pt-3 border-t border-slate-100">
            <p className="text-[14px] sm:text-[14.5px] text-emerald-950 font-bold leading-relaxed">
              Jadi kamu punya waktu untuk mengecek sendiri apakah sistem ini relevan dengan kebutuhanmu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
