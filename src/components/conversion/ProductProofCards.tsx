import React from 'react';
import { Eye } from 'lucide-react';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';

export const ProductProofCards: React.FC = () => {
  const cards = [
    {
      id: 'modul',
      title: '9 Modul E-Course Praktis',
      copy: 'E-Course panduan langkah demi langkah memahami proses audit secara bertahap.',
      webp: '/images/9-modul-dan-audio.webp',
      jpg: '/images/9-modul.jpg',
      remoteUrl: SMARTBOOK_IMAGES.modul9.url,
      alt: '9 Modul E-Course Praktis SMART Audit System',
    },
    {
      id: 'worksheet',
      title: '7 Worksheet Word & Excel Siap Edit',
      copy: 'Gunakan format kerja lalu sesuaikan dengan kebutuhan organisasi.',
      webp: '/images/worksheet-dan-formulir-AMI.webp',
      jpg: '/images/worksheet-dan-formulir-AMI.jpg',
      remoteUrl: SMARTBOOK_IMAGES.worksheet.url,
      alt: '7 Worksheet Word & Excel Siap Edit',
    },
    {
      id: 'ai-tools',
      title: '5 AI Tools Khusus Audit',
      copy: 'Membantu checklist, PLOR, Root Cause, CAPA dan panduan ISO 19011.',
      webp: '/images/5-AI-TOOLS-dan-SIMULASI.webp',
      jpg: '/images/5-AI-TOOLS-dan-SIMULASI.jpg',
      remoteUrl: SMARTBOOK_IMAGES.aiToolsSuite.url,
      alt: '5 AI Tools Khusus Audit',
    },
    {
      id: 'simulasi',
      title: 'Simulasi Audit dengan AI',
      copy: 'Berlatih menghadapi pertanyaan, evidence dan situasi auditee.',
      webp: '/images/Cek-List-Audit-dan-Simulasi.webp',
      jpg: '/images/Cek-List-Audit-dan-Simulasi.jpg',
      remoteUrl: SMARTBOOK_IMAGES.cekList.url,
      alt: 'Simulasi Audit dengan AI',
    },
  ];

  return (
    <section id="isi-produk" className="bg-slate-100 py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <Eye className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>PRODUK ASLI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            LIHAT YANG ANDA DAPATKAN
          </h2>
        </div>

        {/* 4 Cards with Dominant Screenshots */}
        <div className="space-y-5 mb-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
              {/* Card Header & Copy */}
              <div className="p-4 sm:p-4.5 bg-white border-b border-gray-100">
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mt-1 font-medium leading-relaxed">
                  {card.copy}
                </p>
              </div>

              {/* Dominant Screenshot */}
              <div className="p-3 bg-slate-900/5">
                <picture className="w-full block">
                  <source srcSet={card.webp} type="image/webp" />
                  <img
                    src={card.webp}
                    onError={(e) => handleImageFallback(e, card.jpg, card.remoteUrl)}
                    referrerPolicy="no-referrer"
                    alt={card.alt}
                    width={600}
                    height={338}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover rounded-xl block border border-gray-200 shadow-2xs"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
          <p className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed">
            Bukan sekadar materi untuk dibaca. Anda mendapatkan alat kerja yang dapat digunakan sebagai starting point.
          </p>
        </div>

      </div>
    </section>
  );
};
