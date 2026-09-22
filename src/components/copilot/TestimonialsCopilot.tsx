import React from 'react';
import { MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';
import imgTesti1Webp from '../../assets/images/testi1.webp';
import imgTesti1Png from '../../assets/images/testi1.png';
import imgTesti2Webp from '../../assets/images/testi2.webp';
import imgTesti2Png from '../../assets/images/testi2.png';
import imgTesti3Webp from '../../assets/images/testi3.webp';
import imgTesti3Png from '../../assets/images/testi3.png';

export const TestimonialsCopilot: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      title: 'Tangkapan Layar Pengguna #1',
      summary: 'Membantu persiapan audit tanpa harus menyusun format dari nol',
      imageWebp: imgTesti1Webp,
      imagePng: imgTesti1Png,
      webpLocal: SMARTBOOK_IMAGES.testi1?.webpLocal,
      localUrl: SMARTBOOK_IMAGES.testi1?.local,
      remoteUrl: SMARTBOOK_IMAGES.testi1?.url,
    },
    {
      id: 2,
      title: 'Tangkapan Layar Pengguna #2',
      summary: 'Membantu merapikan perumusan temuan audit yang objektif',
      imageWebp: imgTesti2Webp,
      imagePng: imgTesti2Png,
      webpLocal: SMARTBOOK_IMAGES.testi2?.webpLocal,
      localUrl: SMARTBOOK_IMAGES.testi2?.local,
      remoteUrl: SMARTBOOK_IMAGES.testi2?.url,
    },
    {
      id: 3,
      title: 'Tangkapan Layar Pengguna #3',
      summary: 'Mempermudah koordinasi checklist dan template kerja di lapangan',
      imageWebp: imgTesti3Webp,
      imagePng: imgTesti3Png,
      webpLocal: SMARTBOOK_IMAGES.testi3?.webpLocal,
      localUrl: SMARTBOOK_IMAGES.testi3?.local,
      remoteUrl: SMARTBOOK_IMAGES.testi3?.url,
    },
  ];

  return (
    <section id="social-proof-copilot" className="py-7 bg-white border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>RESPON PENGGUNA</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            DIGUNAKAN UNTUK MEMBANTU PERSIAPAN DAN PELAKSANAAN AUDIT
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1.5 leading-relaxed">
            Tangkapan layar chat dan respon pengguna yang menggunakan modul, worksheet, dan sistem SMART Audit System untuk membantu audit internal mereka.
          </p>
        </div>

        {/* 3 Real Screenshots Cards */}
        <div className="space-y-4">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-slate-50 border border-gray-200 rounded-2xl overflow-hidden shadow-2xs"
            >
              <div className="p-3 bg-white border-b border-gray-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <p className="text-xs font-bold text-gray-800 leading-snug">
                  {testi.summary}
                </p>
              </div>

              <div className="p-2.5 bg-slate-100 flex justify-center">
                <picture className="w-full">
                  <source srcSet={testi.imageWebp || testi.webpLocal} type="image/webp" />
                  <img
                    src={testi.imagePng || testi.localUrl}
                    onError={(e) => handleImageFallback(e, testi.localUrl, testi.remoteUrl)}
                    alt={testi.title}
                    width={480}
                    height={300}
                    className="w-full h-auto rounded-xl border border-gray-200 shadow-xs object-contain"
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
