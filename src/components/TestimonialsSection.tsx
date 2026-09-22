import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgTesti1Webp from '../assets/images/testi1.webp';
import imgTesti1Png from '../assets/images/testi1.png';
import imgTesti2Webp from '../assets/images/testi2.webp';
import imgTesti2Png from '../assets/images/testi2.png';
import imgTesti3Webp from '../assets/images/testi3.webp';
import imgTesti3Png from '../assets/images/testi3.png';

interface TestimonialItem {
  id: number;
  title: string;
  proofType: string;
  summary: string;
  imageWebp: string;
  imagePng: string;
  webpLocal: string;
  localUrl: string;
  remoteUrl: string;
}

const TOP_3_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    title: 'Testimoni 1 - Persiapan Audit',
    proofType: 'Persiapan Tanpa Mulai Dari Nol',
    summary: 'Tidak perlu lagi menyusun checklist dan pertanyaan dari nol.',
    imageWebp: imgTesti1Webp,
    imagePng: imgTesti1Png,
    webpLocal: SMARTBOOK_IMAGES.testi1.webpLocal,
    localUrl: SMARTBOOK_IMAGES.testi1.local,
    remoteUrl: SMARTBOOK_IMAGES.testi1.url,
  },
  {
    id: 2,
    title: 'Testimoni 2 - Perumusan Temuan',
    proofType: 'Perumusan Temuan PLOR',
    summary: 'Membantu menyusun temuan lebih jelas dan terstruktur.',
    imageWebp: imgTesti2Webp,
    imagePng: imgTesti2Png,
    webpLocal: SMARTBOOK_IMAGES.testi2.webpLocal,
    localUrl: SMARTBOOK_IMAGES.testi2.local,
    remoteUrl: SMARTBOOK_IMAGES.testi2.url,
  },
  {
    id: 3,
    title: 'Testimoni 3 - Efisiensi Waktu',
    proofType: 'Waktu Persiapan Terpangkas Drastis',
    summary: 'Membantu memangkas waktu persiapan audit dengan worksheet siap pakai.',
    imageWebp: imgTesti3Webp,
    imagePng: imgTesti3Png,
    webpLocal: SMARTBOOK_IMAGES.testi3.webpLocal,
    localUrl: SMARTBOOK_IMAGES.testi3.local,
    remoteUrl: SMARTBOOK_IMAGES.testi3.url,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-8 bg-slate-100 border-b border-gray-200">
      <div className="w-full px-4">
        
        {/* Headline Sesuai Brief */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-2.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>BUKTI PENGGUNAAN NYATA</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            DIGUNAKAN UNTUK MEMPERMUDAH PERSIAPAN DAN PELAKSANAAN AUDIT
          </h2>
          <p className="text-sm text-gray-700 font-medium mt-1.5 leading-relaxed">
            Tangkapan layar asli dari rekan-rekan yang telah menggunakan sistem ini:
          </p>
        </div>

        {/* 3 Large Screenshot Testimonial Cards */}
        <div className="space-y-4 max-w-md mx-auto">
          {TOP_3_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Proof Badge */}
              <div className="px-4 py-2.5 bg-slate-50 border-b border-gray-100 text-xs sm:text-sm font-bold text-blue-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shrink-0" />
                <span>{item.proofType}</span>
              </div>

              {/* High Legibility Image Preview */}
              <div className="p-2.5 bg-slate-900/5 flex items-center justify-center">
                <picture className="w-full flex justify-center">
                  <source srcSet={item.imageWebp} type="image/webp" />
                  <img
                    src={item.imagePng}
                    onError={(e) => handleImageFallback(e, item.webpLocal, item.localUrl, item.remoteUrl)}
                    referrerPolicy="no-referrer"
                    alt={item.title}
                    width={480}
                    height={360}
                    className="w-full h-auto object-contain rounded-xl block shadow-xs bg-white"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Ringkasan Singkat Tanpa Perlu Zoom */}
              <div className="px-4 py-3 bg-slate-50 border-t border-gray-100 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-900 shrink-0" />
                <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
