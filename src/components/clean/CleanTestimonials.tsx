import React from 'react';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';

interface TestiItem {
  id: number;
  highlight: string;
  imageWebp: string;
  imagePng: string;
  remoteUrl?: string;
  alt: string;
}

const TOP_3_TESTIMONIALS: TestiItem[] = [
  {
    id: 1,
    highlight: 'Mudah dipraktikkan langsung oleh pemula',
    imageWebp: '/images/testi1.webp',
    imagePng: '/images/testi1.png',
    remoteUrl: SMARTBOOK_IMAGES.testi1?.url,
    alt: 'Testimoni asli pengguna 1 — Mudah dipraktikkan',
  },
  {
    id: 2,
    highlight: 'Checklist & Worksheet PLOR sangat membantu di lapangan',
    imageWebp: '/images/testi2.webp',
    imagePng: '/images/testi2.png',
    remoteUrl: SMARTBOOK_IMAGES.testi2?.url,
    alt: 'Testimoni asli pengguna 2 — Checklist dan PLOR',
  },
  {
    id: 3,
    highlight: 'Menghemat waktu persiapan audit secara signifikan',
    imageWebp: '/images/testi3.webp',
    imagePng: '/images/testi3.png',
    remoteUrl: SMARTBOOK_IMAGES.testi3?.url,
    alt: 'Testimoni asli pengguna 3 — Menghemat waktu audit',
  },
];

export const CleanTestimonials: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-10 sm:py-12 px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-1.5">
          BUKTI NYATA PENGGUNA
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-6">
          Dari Bingung Mulai Audit, Jadi Punya Alur yang Lebih Jelas
        </h2>

        {/* 3 Strongest Testimonials Screenshot Stack */}
        <div className="space-y-6 mb-5">
          {TOP_3_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[13px] font-black text-slate-800">
                  {item.highlight}
                </span>
              </div>

              {/* Tangkapan Layar Asli */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-1">
                <img
                  src={item.imageWebp}
                  onError={(e) => handleImageFallback(e, item.imagePng, item.remoteUrl)}
                  referrerPolicy="no-referrer"
                  alt={item.alt}
                  width={500}
                  height={380}
                  className="w-full h-auto rounded-lg block bg-white mx-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Natural Disclaimer */}
        <p className="text-[13px] text-slate-500 italic text-center leading-normal">
          Pengalaman setiap pengguna dapat berbeda sesuai latar belakang dan penerapannya.
        </p>
      </div>
    </section>
  );
};
