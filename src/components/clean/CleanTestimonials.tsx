import React from 'react';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';
import { CtaButton } from './CtaButton';

interface TestiItem {
  id: number;
  highlight: string;
  benefitBadge: string;
  imageWebp: string;
  imagePng: string;
  remoteUrl?: string;
  alt: string;
}

const TOP_3_TESTIMONIALS: TestiItem[] = [
  {
    id: 1,
    benefitBadge: 'Benefit 1: Mudah Dipraktikkan',
    highlight: 'Panduan sangat aplikatif & mudah dipraktikkan langsung oleh pemula',
    imageWebp: '/images/testi1.webp',
    imagePng: '/images/testi1.png',
    remoteUrl: SMARTBOOK_IMAGES.testi1?.url,
    alt: 'Testimoni asli pengguna 1 — Mudah dipraktikkan',
  },
  {
    id: 2,
    benefitBadge: 'Benefit 2: Checklist & PLOR Membantu',
    highlight: 'Checklist pertanyaan & Worksheet PLOR sangat membantu saat audit',
    imageWebp: '/images/testi2.webp',
    imagePng: '/images/testi2.png',
    remoteUrl: SMARTBOOK_IMAGES.testi2?.url,
    alt: 'Testimoni asli pengguna 2 — Checklist dan PLOR',
  },
  {
    id: 3,
    benefitBadge: 'Benefit 3: Menghemat Waktu',
    highlight: 'Menghemat waktu persiapan audit hingga berhari-hari kerja',
    imageWebp: '/images/testi3.webp',
    imagePng: '/images/testi3.png',
    remoteUrl: SMARTBOOK_IMAGES.testi3?.url,
    alt: 'Testimoni asli pengguna 3 — Menghemat waktu audit',
  },
];

export const CleanTestimonials: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
          BUKTI NYATA PENGGUNA
        </span>

        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-tight mb-5">
          Dari Bingung Mulai Audit, Jadi Punya Alur yang Lebih Jelas
        </h2>

        {/* 3 Strongest Testimonials Screenshot Stack */}
        <div className="space-y-5 mb-5">
          {TOP_3_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
            >
              <div className="mb-2">
                <span className="text-[10px] sm:text-[10.5px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 inline-block mb-1">
                  {item.benefitBadge}
                </span>
                <p className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 leading-snug">
                  {item.highlight}
                </p>
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
        <p className="text-[12px] sm:text-[12.5px] text-slate-500 italic text-center leading-normal mb-5">
          Pengalaman setiap pengguna dapat berbeda sesuai latar belakang dan penerapannya.
        </p>

        {/* CTA Strategis: Setelah Testimoni */}
        <div className="w-full">
          <CtaButton
            position="after_testimonials"
            label="GABUNG DENGAN RATUSAN AUDITOR LAINNYA →"
            sublabel="Akses Langsung — Rp99.000 Sekali Bayar"
          />
        </div>
      </div>
    </section>
  );
};
