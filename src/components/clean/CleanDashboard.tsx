import React from 'react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanDashboard: React.FC = () => {
  return (
    <section className="bg-slate-50/70 py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="dashboard">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11.5px] sm:text-[13px] font-black tracking-wider uppercase">
            <span>AUDIT WORKING SYSTEM</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[22px] sm:text-[29px] font-black text-slate-950 leading-[1.25] tracking-tight mb-3 text-center max-w-[460px] mx-auto break-words">
          Audit Working System dalam Satu Dashboard Terintegrasi
        </h2>

        {/* Copy */}
        <p className="text-[14.5px] sm:text-[17px] text-slate-800 font-medium leading-relaxed mb-6 text-center mx-auto max-w-[460px]">
          Tidak perlu lagi repot mencari-cari file yang tercecer di berbagai folder. Akses modul kerja, 7 workbook audit, Framework AI yang sudah disetting sesuai konteks, dan simulasi kasus langsung dari satu pintu sistem terpusat.
        </p>

        {/* Screenshot Dashboard Utama */}
        <div className="rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-950 p-2 mb-4 max-w-[460px] mx-auto">
          <div className="bg-slate-900 text-slate-200 text-[11px] font-mono py-2 px-3 rounded-t-xl flex items-center justify-between gap-2 overflow-hidden">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <span className="text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider truncate min-w-0">SMART AUDIT SYSTEM • DIGITAL DASHBOARD</span>
            <span className="text-[9px] text-blue-400 font-extrabold uppercase tracking-wider shrink-0 hidden xs:inline-block">PORTAL</span>
          </div>
          <picture>
            <source srcSet={SMARTBOOK_IMAGES.dashboard.webpLocal} type="image/webp" />
            <img
              src={SMARTBOOK_IMAGES.dashboard.webpLocal}
              alt="Dashboard SMART AUDIT SYSTEM"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-b-xl block"
              onError={(e) =>
                handleImageFallback(
                  e,
                  SMARTBOOK_IMAGES.dashboard.local,
                  SMARTBOOK_IMAGES.dashboard.url,
                  SMARTBOOK_IMAGES.dashboard.urlAlt
                )
              }
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        {/* Caption */}
        <div className="bg-white border-2 border-slate-200 rounded-xl p-4 max-w-[460px] mx-auto text-center space-y-1 shadow-xs">
          <p className="font-black text-slate-950 text-[16px]">
            Dashboard SMART AUDIT SYSTEM
          </p>
          <p className="text-[14.5px] text-slate-800 font-medium leading-relaxed">
            Satu pusat akses praktis untuk seluruh perangkat eksekusi dan panduan audit Anda.
          </p>
        </div>
      </div>
    </section>
  );
};
