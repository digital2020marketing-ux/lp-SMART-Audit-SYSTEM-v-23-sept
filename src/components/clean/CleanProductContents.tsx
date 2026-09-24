import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanProductContents: React.FC = () => {
  const instruments = [
    {
      icon: '📚',
      title: '9 Modul Panduan Audit',
      desc: 'Panduan utama dari persiapan sampai penyusunan laporan, dilengkapi materi dan audio pendalaman.',
    },
    {
      icon: '📋',
      title: '7 Worksheet Siap Edit',
      desc: 'Checklist, pertanyaan, evidence, PLOR, root cause, CAPA, dan laporan.',
      extra: 'Format Word & Excel — tinggal edit sesuai kebutuhan.',
    },
    {
      icon: '🤖',
      title: '5 AI Tools Audit',
      desc: 'Membantu membuat draf:',
      flow: 'Checklist → Pertanyaan → Temuan → Root Cause → CAPA.',
    },
    {
      icon: '🎯',
      title: 'Simulasi Audit',
      desc: 'Latihan menggunakan studi kasus agar kamu bisa memahami alurnya sebelum menjalankan audit sebenarnya.',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-blue-900 block mb-1.5">
          WHAT YOU GET
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-6">
          Semua Instrumen yang Kamu Butuhkan dalam Satu Sistem
        </h2>

        {/* Instruments Stack */}
        <div className="space-y-4 mb-7">
          {instruments.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-[22px] leading-none">{item.icon}</span>
                <h3 className="text-[17px] sm:text-[18px] font-black text-slate-900 leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-[14.5px] sm:text-[15px] text-slate-700 leading-relaxed font-medium">
                {item.desc}
              </p>

              {item.extra && (
                <div className="mt-2 text-[13.5px] font-bold text-blue-900 bg-blue-50 py-1 px-2.5 rounded-lg inline-block">
                  {item.extra}
                </div>
              )}

              {item.flow && (
                <div className="mt-2 text-[13.5px] font-bold text-slate-800 bg-slate-200/70 py-1.5 px-3 rounded-lg block">
                  {item.flow}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <CtaButton
          position="what_you_get_section"
          label="DAPATKAN SEMUA AKSESNYA →"
          sublabel="Akses Langsung — Rp99.000 Sekali Bayar"
        />
      </div>
    </section>
  );
};
