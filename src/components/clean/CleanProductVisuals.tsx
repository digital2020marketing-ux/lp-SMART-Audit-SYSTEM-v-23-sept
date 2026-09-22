import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanProductVisuals: React.FC = () => {
  const proofs = [
    {
      title: 'Dashboard SMART AUDIT SYSTEM',
      desc: 'Pusat akses materi terpadu yang memuat modul panduan, worksheet, dan tools AI dalam satu tempat.',
      src: '/images/gambar-dashbord-SAS.webp',
      alt: 'Tampilan Dashboard SMART AUDIT SYSTEM',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-6">
          Bukti &amp; Tampilan Asli Produk
        </h2>

        {/* Product Image */}
        <div className="space-y-6 mb-6">
          {proofs.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-[16px] text-slate-700 leading-relaxed">
                {item.desc}
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs bg-slate-50">
                <picture>
                  <source media="(max-width: 480px)" srcSet="/images/gambar-dashbord-SAS-mobile.webp" type="image/webp" />
                  <source srcSet={item.src} type="image/webp" />
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={380}
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <CtaButton position="product_proof" />
      </div>
    </section>
  );
};
