import React from 'react';
import { Headphones, CheckCircle2 } from 'lucide-react';

export const AfterSalesSupportSection: React.FC = () => {
  const supportPoints = [
    'Akses dashboard SMART Audit System',
    'Penggunaan worksheet Word & Excel',
    'Penggunaan simulasi audit',
    'Penggunaan AI Tools',
    'Navigasi materi pembelajaran',
    'Kendala teknis penggunaan sistem',
  ];

  return (
    <section id="support-setelah-pembelian" className="py-8 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        <div className="max-w-md mx-auto bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs">
          
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-1.5 bg-blue-100 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
              <Headphones className="w-3.5 h-3.5 text-blue-800 shrink-0" />
              <span>SUPPORT SETELAH PEMBELIAN</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
              TIDAK DITINGGAL SETELAH MEMBELI
            </h2>
            <p className="text-sm text-gray-700 font-medium mt-1.5 leading-relaxed">
              Setelah mendapatkan SMART Audit System, Anda tetap mendapatkan dukungan apabila mengalami kendala dalam menggunakan sistem.
            </p>
          </div>

          {/* Checklist Points */}
          <div className="mb-4 bg-slate-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs sm:text-sm font-black text-gray-900 uppercase tracking-wide mb-2.5">
              Support penggunaan mencakup:
            </p>
            <div className="space-y-2.5">
              {supportPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Clickable WhatsApp Info Box (PENTING: Hanya Teks Informasi, Tanpa Tombol / Link) */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-center mb-3">
            <p className="text-sm font-bold text-gray-900 leading-snug">
              Support setelah pembelian tersedia melalui WhatsApp:{' '}
              <span className="font-mono font-black text-emerald-800 select-all text-base tracking-wider block sm:inline mt-0.5 sm:mt-0">
                082227771941
              </span>
            </p>
          </div>

          {/* Disclaimer text */}
          <p className="text-xs text-gray-600 text-center leading-relaxed font-medium">
            Support difokuskan pada penggunaan SMART Audit System dan bukan pengganti jasa konsultasi audit perusahaan.
          </p>

        </div>
      </div>
    </section>
  );
};
