import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanProductContents: React.FC = () => {
  const products = [
    {
      title: '9 Modul E-Course',
      desc: 'Materi utama, audio podcast pendalaman materi, dan panduan audit dari persiapan hingga laporan.',
      badge: 'Modul Utama',
    },
    {
      title: '7 Worksheet Siap Edit',
      desc: 'Checklist, pertanyaan, evidence, PLOR, root cause, CAPA, dan laporan.',
      badge: 'Format Siap Pakai',
    },
    {
      title: '5 AI Tools Audit',
      desc: 'Membantu membuat draf checklist, pertanyaan, temuan, root cause, dan CAPA.',
      badge: 'Asisten Cepat',
    },
    {
      title: 'Simulasi Audit',
      desc: 'Latihan audit menggunakan contoh kasus praktis.',
      badge: 'Studi Kasus',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-2">
          Isi SMART AUDIT SYSTEM
        </h2>
        <p className="text-[16px] sm:text-[17px] text-slate-600 font-medium leading-normal mb-6">
          Instrumen komprehensif yang dirancang untuk memandu Anda di setiap tahapan audit secara praktis.
        </p>

        {/* 4 Simple Cards stacked vertically */}
        <div className="space-y-3.5 mb-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90"
            >
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-[18px] sm:text-[19px] font-black text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 uppercase">
                  {item.badge}
                </span>
              </div>
              <p className="text-[16px] text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <CtaButton position="product_contents" />
      </div>
    </section>
  );
};
