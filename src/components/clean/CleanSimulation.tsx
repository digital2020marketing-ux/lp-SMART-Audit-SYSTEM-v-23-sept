import React from 'react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanSimulation: React.FC = () => {
  const simulationFlow = ['Skenario', 'Pertanyaan', 'Evidence', 'Analisis', 'Temuan', 'CAPA'];

  return (
    <section className="bg-slate-50/70 py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="simulasi">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>PILAR 4: STUDI KASUS &amp; SIMULASI LAPANGAN</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[20px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-2 text-center uppercase break-words px-1">
          SIMULASI &amp; STUDI KASUS AUDIT
        </h2>

        {/* Copy */}
        <p className="text-[14px] sm:text-[15.5px] text-slate-800 font-medium leading-relaxed mb-5 text-center">
          Latih ketajaman investigasi, analisis bukti, dan perumusan temuan dengan skenario situasi nyata di pabrik dan kantor:
        </p>

        {/* Simulasi Flow */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs">
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-center">
            {simulationFlow.map((item, idx) => (
              <React.Fragment key={idx}>
                <span
                  className={`px-3 py-1.5 rounded-lg text-[13px] sm:text-[13.5px] font-black shadow-xs ${
                    idx === simulationFlow.length - 1
                      ? 'bg-slate-950 text-white font-black'
                      : 'bg-slate-50 border border-slate-300 text-slate-900'
                  }`}
                >
                  {item}
                </span>
                {idx < simulationFlow.length - 1 && (
                  <span className="text-slate-600 font-black text-[13px] select-none">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Visual Showcase Simulasi */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-1.5 mb-6">
          <picture>
            <source srcSet={SMARTBOOK_IMAGES.simulasi.webpLocal} type="image/webp" />
            <img
              src={SMARTBOOK_IMAGES.simulasi.webpLocal}
              alt="Simulasi Praktik Audit Mockup"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-xl block"
              onError={(e) =>
                handleImageFallback(
                  e,
                  SMARTBOOK_IMAGES.simulasi.local,
                  SMARTBOOK_IMAGES.simulasi.url,
                  SMARTBOOK_IMAGES.simulasi.urlAlt
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
