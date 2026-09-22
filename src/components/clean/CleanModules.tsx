import React from 'react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanModules: React.FC = () => {
  return (
    <section className="bg-white py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="modul-panduan">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-950 text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-2xs">
            <span>PILAR 1: PANDUAN METODOLOGI OPERASIONAL</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[20px] sm:text-[27px] font-black text-slate-950 leading-[1.25] tracking-tight mb-2 text-center uppercase break-words px-1">
          9 MODUL PANDUAN AUDIT TERSTRUKTUR
        </h2>

        {/* Copy */}
        <p className="text-[14px] sm:text-[15.5px] text-slate-700 font-medium leading-relaxed mb-5 text-center">
          Panduan langkah demi langkah yang disusun berurutan sesuai alur kerja nyata di lapangan. Menggunakan bahasa praktis tanpa istilah rumit yang membingungkan.
        </p>

        {/* Mockup Digital Modul */}
        <div className="rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md bg-white p-2 mb-2">
          <picture>
            <source srcSet={SMARTBOOK_IMAGES.modul9.webpLocal} type="image/webp" />
            <img
              src={SMARTBOOK_IMAGES.modul9.webpLocal}
              alt="9 Modul Audit Terstruktur Mockup"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-xl block"
              onError={(e) =>
                handleImageFallback(
                  e,
                  SMARTBOOK_IMAGES.modul9.local,
                  SMARTBOOK_IMAGES.modul9.url,
                  SMARTBOOK_IMAGES.modul9.urlAlt
                )
              }
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
