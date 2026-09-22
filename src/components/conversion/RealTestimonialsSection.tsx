import React from 'react';
import { MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';

export const RealTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      title: 'Membantu Auditor Pemula',
      badge: 'Auditor Pemula',
      webp: '/images/testi1.webp',
      png: '/images/testi1.png',
      remoteUrl: SMARTBOOK_IMAGES.testi1.url,
      alt: 'Screenshot Testimoni Pengguna SMART Audit System - Membantu Auditor Pemula',
    },
    {
      id: 2,
      title: 'Membantu Menyusun Checklist & Pertanyaan',
      badge: 'Checklist & Pertanyaan',
      webp: '/images/testi4.webp',
      png: '/images/testi4.png',
      remoteUrl: SMARTBOOK_IMAGES.testi4.url,
      alt: 'Screenshot Testimoni Pengguna SMART Audit System - Membantu Checklist & Pertanyaan',
    },
    {
      id: 3,
      title: 'Membantu Memahami PLOR & CAPA',
      badge: 'PLOR & CAPA',
      webp: '/images/testi2.webp',
      png: '/images/testi2.png',
      remoteUrl: SMARTBOOK_IMAGES.testi2.url,
      alt: 'Screenshot Testimoni Pengguna SMART Audit System - Membantu PLOR & CAPA',
    },
  ];

  return (
    <section id="testimoni" className="bg-white py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>BUKTI PENGGUNAAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            DIGUNAKAN UNTUK MEMBANTU AUDITOR BELAJAR DAN PRAKTIK
          </h2>
          <p className="text-[13px] sm:text-sm text-gray-600 font-medium mt-1">
            Pengalaman nyata auditor yang menggunakan SMART Audit System di lapangan.
          </p>
        </div>

        {/* 3 Testimoni Screenshot Asli */}
        <div className="space-y-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Headline Label di atas screenshot */}
              <div className="px-4 py-2.5 bg-slate-50 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shrink-0" />
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {item.badge}
                </span>
              </div>

              {/* Real Screenshot Asli */}
              <div className="p-3 bg-slate-900/5 flex justify-center">
                <picture className="w-full">
                  <source srcSet={item.webp} type="image/webp" />
                  <img
                    src={item.webp}
                    onError={(e) => handleImageFallback(e, item.png, item.remoteUrl)}
                    referrerPolicy="no-referrer"
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain rounded-lg shadow-2xs block"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
