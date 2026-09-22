import React from 'react';
import { CtaButton } from './CtaButton';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';

interface TestiItem {
  id: number;
  userRole: string;
  badge: string;
  headline: string;
  quote: string;
  imageWebp: string;
  imagePng: string;
  remoteUrl?: string;
  alt: string;
}

const REAL_TESTIMONIALS: TestiItem[] = [
  {
    id: 1,
    userRole: 'Auditor Internal & Tim Mutu',
    badge: 'Langsung Praktik',
    headline: 'Sangat Membantu Auditor Pemula Yang Bingung Mulai Dari Mana',
    quote: 'Materinya sangat runut dan aplikatif. Format checklist dan worksheet langsung bisa dipakai tanpa harus pusing merancang dokumen dari nol.',
    imageWebp: '/images/testi1.webp',
    imagePng: '/images/testi1.png',
    remoteUrl: SMARTBOOK_IMAGES.testi1?.url,
    alt: 'Testimoni asli pengguna SMART AUDIT SYSTEM 1',
  },
  {
    id: 2,
    userRole: 'Auditor Lapangan',
    badge: 'Checklist & PLOR',
    headline: 'Checklist Lengkap & Rumusan Temuan PLOR Jadi Jelas',
    quote: 'Dulu bingung bagaimana cara mencatat bukti temuan dan mengkorelasikan ke klausul ISO. Dengan template PLOR & CAPA di sistem ini, audit jadi jauh lebih percaya diri.',
    imageWebp: '/images/testi2.webp',
    imagePng: '/images/testi2.png',
    remoteUrl: SMARTBOOK_IMAGES.testi2?.url,
    alt: 'Testimoni asli pengguna SMART AUDIT SYSTEM 2',
  },
  {
    id: 3,
    userRole: 'Praktisi ISO & Lead Auditor',
    badge: 'Hemat Waktu',
    headline: 'Persiapan Audit Singkat Tanpa Stres Mendadak',
    quote: 'Tinggal buka AI tools dan template worksheet, pertanyaan audit per klausul sudah terpetakan rapi. Sangat menghemat waktu tim audit.',
    imageWebp: '/images/testi3.webp',
    imagePng: '/images/testi3.png',
    remoteUrl: SMARTBOOK_IMAGES.testi3?.url,
    alt: 'Testimoni asli pengguna SMART AUDIT SYSTEM 3',
  },
  {
    id: 4,
    userRole: 'Staff QA / QC Perusahaan',
    badge: 'Solusi Audit Mendadak',
    headline: 'Bisa Langsung Simulasi Sebelum Audit Resmi',
    quote: 'Simulasi audit dan contoh kasus lapangannya realistis sekali. Sangat membantu kami memahami alur opening meeting hingga closing meeting.',
    imageWebp: '/images/testi4.webp',
    imagePng: '/images/testi4.png',
    remoteUrl: SMARTBOOK_IMAGES.testi4?.url,
    alt: 'Testimoni asli pengguna SMART AUDIT SYSTEM 4',
  },
];

export const CleanTestimonials: React.FC = () => {
  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-5 border-b border-slate-200/80" id="testimoni">
      <div className="w-full text-center max-w-[480px] mx-auto">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-700 text-white text-[12px] sm:text-[13px] font-black tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
            <span>BUKTI & TESTIMONI ASLI</span>
          </div>
        </div>

        {/* H2 */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-[1.2] tracking-tight mb-2 uppercase">
          KATA MEREKA YANG SUDAH MEMPRAKTIKKANNYA
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] text-slate-700 font-medium leading-relaxed mb-6">
          Tangkapan layar nyata pengalaman auditor dan praktisi mutu internal yang merasakan kemudahan belajar dan praktik audit dengan SMART AUDIT SYSTEM.
        </p>

        {/* Real Screenshot Testimonial Cards */}
        <div className="space-y-5 text-left mb-6">
          {REAL_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-300 shadow-sm bg-white p-4 transition-all hover:border-slate-400"
            >
              {/* Header card: User role + badge */}
              <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                <span className="text-[12px] font-bold text-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  {item.userRole}
                </span>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  {item.badge}
                </span>
              </div>

              {/* Headline & Quote */}
              <h3 className="text-[15px] sm:text-[16px] font-black text-slate-900 leading-snug mb-1.5">
                {item.headline}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-slate-600 italic leading-relaxed mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                "{item.quote}"
              </p>

              {/* Tangkapan Layar Asli */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900/5 p-1.5 shadow-inner">
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

        {/* CTA Button */}
        <CtaButton
          context="testimonials_section"
          label="DAPATKAN SMART AUDIT SYSTEM — Rp99.000"
          sublabel="Sekali Bayar • Akses Seumur Hidup • Garansi 7 Hari"
        />
      </div>
    </section>
  );
};
