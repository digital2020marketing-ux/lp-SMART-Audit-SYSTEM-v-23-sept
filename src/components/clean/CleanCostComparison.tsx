import React from 'react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const CleanCostComparison: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('cost_comparison_cta', 'Model Investasi - MULAI GUNAKAN SMART AUDIT SYSTEM — Rp149.000');
  };

  return (
    <section className="bg-slate-50/90 py-10 px-3.5 sm:px-5 border-b border-slate-200 w-full overflow-hidden" id="investasi">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>REFERENSI INVESTASI PROFESIONAL</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[20px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-3 text-center uppercase break-words px-1">
          MEMBANGUN KOMPETENSI DAN SISTEM AUDIT PROFESIONAL MEMBUTUHKAN INVESTASI.
        </h2>

        {/* Submessage */}
        <div className="text-[14.5px] sm:text-[15.5px] text-slate-700 leading-relaxed mb-6 text-center font-medium">
          <p className="font-bold text-slate-900 text-[15.5px] sm:text-[16.5px] mb-1">
            INVESTASI YANG BERBEDA UNTUK KEBUTUHAN YANG BERBEDA.
          </p>
          <p>
            Setiap instrumen pengembangan audit internal memiliki fungsi dan perannya masing-masing dalam organisasi:
          </p>
        </div>

        {/* 3 Comparison Cards */}
        <div className="space-y-3.5 mb-6 text-left">
          {/* Card 1: Pelatihan Internal Auditor */}
          <div className="bg-white border border-slate-300 rounded-2xl p-4 sm:p-5 shadow-xs">
            <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
              PELATIHAN
            </div>
            <h3 className="text-[17px] font-black text-slate-900 mb-1.5">
              PELATIHAN INTERNAL AUDITOR
            </h3>
            <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
              Investasi dapat mencapai jutaan rupiah per peserta, tergantung provider, metode, dan program pelatihan.
            </p>
          </div>

          {/* Card 2: Konsultasi / Pendampingan */}
          <div className="bg-white border border-slate-300 rounded-2xl p-4 sm:p-5 shadow-xs">
            <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1">
              PENDAMPINGAN
            </div>
            <h3 className="text-[17px] font-black text-slate-900 mb-1.5">
              KONSULTASI / PENDAMPINGAN
            </h3>
            <p className="text-[14px] text-slate-700 font-medium leading-relaxed">
              Investasi dapat mencapai jutaan hingga puluhan juta rupiah tergantung ruang lingkup pekerjaan.
            </p>
          </div>

          {/* Card 3: SMART AUDIT SYSTEM (Highlighted Corporate Card) */}
          <div className="bg-gradient-to-b from-blue-50/90 to-white border-2 border-blue-600 rounded-2xl p-5 shadow-md relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-900 text-white text-[11px] font-black uppercase tracking-wider mb-2 shadow-2xs">
              FRAMEWORK EKSEKUSI AUDIT DIGITAL
            </div>
            <h3 className="text-[19px] sm:text-[20px] font-black text-blue-950 mb-1">
              SMART AUDIT SYSTEM
            </h3>
            <div className="flex items-baseline gap-2 my-2">
              <span className="text-[32px] sm:text-[36px] font-black text-slate-950 leading-none">
                Rp149.000
              </span>
              <span className="text-[13px] text-slate-500 font-bold">
                (Sekali Bayar)
              </span>
            </div>
            <div className="text-[13.5px] font-bold text-slate-800 space-y-1.5 pt-1 border-t border-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-blue-700 font-black">✓</span>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-700 font-black">✓</span>
                <span>Framework + Workbook + AI + Simulasi</span>
              </div>
            </div>

            {/* Direct CTA Action on Cost Comparison Card */}
            <div className="mt-4 pt-3 border-t border-blue-100">
              <a
                id="cta_cost_comparison"
                href={checkoutUrl}
                onClick={handleCtaClick}
                className="w-full min-h-[56px] bg-gradient-to-r from-[#e24021] via-[#ea4829] to-[#cf3519] hover:from-[#cf3519] hover:to-[#b72d14] active:scale-[0.98] text-white font-black text-[15px] sm:text-[16px] rounded-xl flex items-center justify-center shadow-xl shadow-[#e24021]/35 transition-all text-center tracking-tight border-2 border-amber-300/40 group relative overflow-hidden ring-4 ring-[#e24021]/20"
              >
                {/* Shimmer Light Sweep */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none animate-shimmer-sweep" />

                <span className="flex items-center justify-center gap-2 relative z-10">
                  <span className="drop-shadow-xs">KLIK DI SINI UNTUK CHECKOUT — Rp149.000</span>
                  <span className="group-hover:translate-x-1.5 transition-transform font-black">→</span>
                </span>
              </a>
              <div className="text-[11.5px] text-slate-600 font-bold text-center mt-1.5">
                ⚡ Akses digital instan • Garansi 7 Hari
              </div>
            </div>
          </div>
        </div>

        {/* Small Note & Disclaimer */}
        <div className="space-y-3 mb-6">
          <p className="text-[12px] text-slate-500 italic leading-relaxed text-center">
            *Biaya pelatihan dan konsultasi dapat berbeda menurut provider, metode, jumlah peserta, durasi, serta ruang lingkup pekerjaan.
          </p>

          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-300 text-left shadow-2xs">
            <p className="text-[13px] text-amber-950 font-bold leading-relaxed">
              <span className="font-black uppercase tracking-wider text-amber-900 mr-1">DISCLAIMER:</span>
              SMART AUDIT SYSTEM bukan pengganti pelatihan bersertifikat, sertifikasi kompetensi, maupun jasa konsultasi profesional.
            </p>
          </div>
        </div>

        {/* Ringkasan Nilai */}
        <div className="bg-slate-100/90 border border-slate-300 rounded-2xl p-5 mb-3 text-center shadow-xs">
          <div className="text-[11px] sm:text-[11.5px] font-black tracking-widest uppercase text-blue-950 mb-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full inline-block">
            PERANGKAT PRAKTIS UNTUK MENDUKUNG EKSEKUSI AUDIT
          </div>
          <p className="text-[14px] sm:text-[14.5px] text-slate-700 leading-relaxed font-medium mb-3">
            Bukan menggantikan pelatihan atau sertifikasi, melainkan menyediakan <strong className="text-slate-950 font-bold">framework eksekusi dan perangkat kerja</strong> untuk membantu menerapkan proses audit secara lebih terstruktur.
          </p>

          <a
            href="#penawaran"
            className="inline-flex items-center gap-1.5 text-[13px] font-black text-blue-900 hover:text-blue-950 hover:underline"
          >
            <span>Buka Rincian Lengkap Paket Penawaran di Bawah</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
