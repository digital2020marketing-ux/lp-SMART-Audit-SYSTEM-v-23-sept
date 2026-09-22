import React from 'react';
import { DollarSign, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const RoiComparisonSection: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('roi_comparison_cta', 'ROI Comparison - DAPATKAN DENGAN RP97.000');
  };

  return (
    <section id="perbandingan-nilai" className="py-8 bg-slate-900 text-white border-b border-gray-800">
      <div className="w-full px-4">
        {/* Eyebrow */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>LOGIKA & EFISIENSI BIAYA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug max-w-sm mx-auto">
            KENAPA RP97.000 ADALAH KEPUTUSAN PALING HEMAT?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 leading-relaxed max-w-sm mx-auto">
            Bandingkan biaya alternatif yang biasa dihabiskan untuk persiapan audit mutu:
          </p>
        </div>

        {/* 3 Opsi Konvensional vs SMART Audit System */}
        <div className="space-y-3 max-w-md mx-auto mb-5">
          {/* Opsi 1: Pelatihan Umum */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-black text-red-400 uppercase tracking-wide">
                Opsi 1: Pelatihan / Workshop Auditor
              </span>
              <span className="text-xs font-black text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/50">
                Rp2.000.000+
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Mengikuti seminar teori 2 hari. Selesai acara, Anda tetap harus pulang ke kantor dan bingung membuat checklist serta form sendiri dari lembar kosong.
            </p>
          </div>

          {/* Opsi 2: Lembur & Coba-coba Sendiri */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-left">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-black text-red-400 uppercase tracking-wide">
                Opsi 2: Lembur Cari Format di Internet
              </span>
              <span className="text-xs font-black text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/50">
                Puluhan Jam Stres
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Menghabiskan waktu kerja berhari-hari mengumpulkan template acak, format tidak standar, dan rawan salah saat diaudit eksternal/manajemen.
            </p>
          </div>

          {/* Opsi Cerdas: SMART Audit System */}
          <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 border-2 border-emerald-400 rounded-2xl p-4 text-left shadow-lg relative overflow-hidden">
            <div className="inline-flex items-center gap-1 bg-emerald-400 text-slate-950 font-black text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2">
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>PILIHAN TERBAIK: SMART AUDIT SYSTEM</span>
            </div>

            <div className="flex items-baseline justify-between gap-2 mb-2 pb-2 border-b border-emerald-800/60">
              <div>
                <span className="text-xs text-emerald-300/80 font-bold block">Investasi Sekali Bayar:</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-300 tracking-tight">
                  Rp97.000
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-200 bg-emerald-900/80 px-2 py-1 rounded-lg border border-emerald-600/60">
                Akses Seumur Hidup
              </span>
            </div>

            <div className="space-y-1.5 text-xs text-emerald-100 font-medium mb-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Langsung dapat 9 Modul + 7 Worksheet Word & Excel siap pakai.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>5 AI Tools Audit + BONUS GPT Co-Pilot ISO 19011:2026.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Garansi 100% uang kembali 7 hari jika tidak bermanfaat.</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <a
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer min-h-[48px] leading-tight text-center"
            >
              <span>AMBIL KESEMPATAN PROMO — RP97.000</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <p className="text-[11px] text-emerald-300/80 text-center mt-2 font-medium">
              ⚡ Akses otomatis terkirim ke WhatsApp & Email dalam 30 detik setelah bayar.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Biaya Rp97.000 lebih murah dibanding biaya sekali makan di restoran, tapi menyelamatkan waktu, reputasi kerja, dan karir audit Anda untuk tahun-tahun ke depan.
          </p>
        </div>
      </div>
    </section>
  );
};
