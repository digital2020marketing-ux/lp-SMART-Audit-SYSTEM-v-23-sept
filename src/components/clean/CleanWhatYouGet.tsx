import React from 'react';
import { Check } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanWhatYouGet: React.FC = () => {
  const components = [
    {
      title: '9 Modul Audit Terstruktur',
      desc: 'Panduan sistematis dari persiapan audit hingga penyusunan laporan.',
    },
    {
      title: '7 Audit Workbooks',
      desc: 'Perangkat kerja untuk checklist, evidence, temuan PLOR, Root Cause, CAPA, dan laporan audit.',
      image: SMARTBOOK_IMAGES.worksheet,
      imageAlt: 'Visual 7 Audit Workbooks Siap Implementasi',
    },
    {
      title: '5 AI Audit Frameworks',
      desc: 'Membantu proses Checklist → Pertanyaan → Evidence & Temuan → Root Cause → CAPA.',
      image: SMARTBOOK_IMAGES.aiToolsSuite,
      imageAlt: 'Visual 5 AI Audit Frameworks',
    },
    {
      title: 'Simulasi & Studi Kasus Audit',
      desc: 'Membantu memahami penerapan audit melalui skenario praktik.',
      image: SMARTBOOK_IMAGES.simulasi,
      imageAlt: 'Visual Simulasi Kasus dan Checklist Praktik',
    },
  ];

  return (
    <section className="bg-white py-9 px-4 sm:px-5 border-b border-slate-100" id="komponen-produk">
      <div className="w-full text-center">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-900 text-[13px] sm:text-[14px] font-black tracking-wide uppercase shadow-2xs">
            <span>PERANGKAT KERJA AUDIT</span>
          </div>
        </div>

        {/* H2 */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-[1.25] tracking-tight mb-5 text-center">
          Perangkat Kerja Audit dalam Satu Sistem
        </h2>

        {/* 4 Komponen Cards with Visuals */}
        <div className="space-y-5">
          {components.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-sm text-center"
            >
              <div className="flex flex-col items-center text-center mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2 shadow-2xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="font-black text-slate-900 text-[17.5px] sm:text-[18.5px] leading-snug text-center">
                  {item.title}
                </h3>
                <p className="text-[15.5px] sm:text-[16px] text-slate-600 mt-1.5 leading-[1.65] text-center max-w-[420px]">
                  {item.desc}
                </p>
              </div>

              {/* Real Product Visual framed elegantly */}
              {item.image && (
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 p-1 mt-3.5">
                  <picture>
                    <source srcSet={item.image.webpLocal} type="image/webp" />
                    <img
                      src={item.image.webpLocal}
                      alt={item.imageAlt || item.title}
                      className="w-full h-auto object-cover rounded-lg block"
                      onError={(e) =>
                        handleImageFallback(
                          e,
                          item.image.local,
                          item.image.url,
                          item.image.urlAlt
                        )
                      }
                      loading="lazy"
                    />
                  </picture>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
