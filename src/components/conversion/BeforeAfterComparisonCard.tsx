import React from 'react';
import { Sparkles, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const BeforeAfterComparisonCard: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('before_after_cta', 'Before After - DAPATKAN SISTEM PRAKTIK');
  };

  const oldWays = [
    'Checklist kosong, bingung menyusun pertanyaan dari nol',
    'Panik dan tegang saat jadwal audit semakin dekat',
    'Ragu menentukan bukti objektif yang valid di lapangan',
    'Catatan audit berantakan dan sulit dirumuskan jadi temuan',
    'Pusing menyusun formulasi PLOR, 5-Why, dan tindakan CAPA',
    'Laporan lambat selesai, khawatir ditegur atasan / lead auditor',
  ];

  const newWays = [
    'Checklist Word & Excel sudah terstruktur, tinggal pakai & sesuaikan',
    'Tenang dan siap audit dalam hitungan jam tanpa lembur',
    'Percaya diri wawancara dengan panduan pertanyaan 5W+1H tajam',
    'Temuan audit dirumuskan cepat & presisi dengan bantuan AI Tools',
    'Analisis akar masalah & CAPA tuntas mengikuti standar ISO',
    'Laporan audit selesai tepat waktu, profesional, dan diakui manajemen',
  ];

  return (
    <section id="sebelum-sesudah-audit" className="py-8 bg-slate-100 border-b border-gray-200">
      <div className="w-full px-4">
        {/* Eyebrow & Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>TRANSFORMASI KERJA ANDA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            PILIHAN ANDA SAAT MENGHADAPI AUDIT MINGGU DEPAN
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1.5 leading-relaxed max-w-sm mx-auto">
            Anda bisa memilih tetap repot seperti biasa, atau bekerja terstruktur dengan framework audit terpadu:
          </p>
        </div>

        {/* 2 Comparison Cards (Stacked for 480px width) */}
        <div className="space-y-4 max-w-md mx-auto mb-5">
          {/* Card 1: Cara Lama (Mulai dari Nol) */}
          <div className="bg-white border border-red-200 rounded-2xl p-4 sm:p-5 shadow-2xs">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-red-100">
              <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-black text-xs shrink-0">
                ✕
              </div>
              <div>
                <h3 className="text-sm font-black text-red-950 uppercase tracking-tight">
                  CARA LAMA: MULAI DARI FILE KOSONG
                </h3>
                <span className="text-[11px] text-red-600 font-bold">
                  Stres, menyita waktu & rawan salah
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {oldWays.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Cara Baru (Dengan SMART Audit System) */}
          <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 border-2 border-emerald-400 text-white rounded-2xl p-4 sm:p-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-emerald-800/80">
              <div className="w-6 h-6 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center font-black text-xs shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-sm font-black text-emerald-300 uppercase tracking-tight">
                  CARA BARU: SMART AUDIT SYSTEM
                </h3>
                <span className="text-[11px] text-emerald-400 font-bold">
                  Terstruktur, cepat & percaya diri
                </span>
              </div>
            </div>

            <div className="space-y-2.5 mb-4">
              {newWays.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-emerald-50 font-medium leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer min-h-[48px] leading-tight text-center"
            >
              <span>PILIH CARA PRAKTIS — RP97.000</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
