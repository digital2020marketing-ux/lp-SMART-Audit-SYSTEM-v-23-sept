import React from 'react';
import { SMARTBOOK_IMAGES } from '../../imageConstants';

export const CleanProductVisuals: React.FC = () => {
  const visualProofs = [
    {
      label: 'DASHBOARD TERPADU',
      title: 'Dashboard SMART AUDIT SYSTEM',
      desc: 'Seluruh panduan, worksheet, tools, dan simulasi disusun dalam satu sistem agar lebih mudah digunakan saat belajar maupun mempersiapkan audit.',
      src: '/images/gambar-dashbord-SAS.webp',
      remoteFallback: SMARTBOOK_IMAGES.dashboard?.url,
      alt: 'Tampilan Asli Dashboard SMART AUDIT SYSTEM',
    },
    {
      label: 'CHECKLIST AUDIT LENGKAP',
      title: 'Checklist Audit & Panduan Pertanyaan',
      desc: 'Panduan klausul lengkap ISO 9001:2015 beserta contoh pertanyaan wawancara dan bukti evidence yang harus diminta.',
      src: '/images/Cek-List-Audit-dan-Simulasi.webp',
      remoteFallback: SMARTBOOK_IMAGES.cekList?.url,
      alt: 'Checklist Audit dan Simulasi',
    },
    {
      label: 'WORKSHEET TEMUAN AUDIT',
      title: 'Worksheet Temuan PLOR',
      desc: 'Format penulisan temuan Problem, Location, Objective Evidence, dan Reference klausul secara objektif dan akurat.',
      src: '/images/Generator-Laporan-Temuan-PLOR.webp',
      remoteFallback: SMARTBOOK_IMAGES.plor?.url,
      alt: 'Worksheet Laporan Temuan PLOR',
    },
    {
      label: 'ROOT CAUSE & TINDAKAN KOREKTIF',
      title: 'CAPA & 5-Why Root Cause Analysis',
      desc: 'Template analisis akar penyebab masalah dan rencana tindakan koreksi terstruktur yang diakui manajemen.',
      src: '/images/CAPA.webp',
      remoteFallback: SMARTBOOK_IMAGES.capa?.url,
      alt: 'Worksheet CAPA dan Root Cause Analysis',
    },
    {
      label: 'BANTUAN ASISTEN AI CEPAT',
      title: '5 AI Tools Audit Assistant',
      desc: 'Mempercepat pembuatan draf checklist, susunan pertanyaan, rumusan temuan PLOR, dan draf rekomendasi CAPA.',
      src: '/images/5-AI-TOOLS-dan-SIMULASI.webp',
      remoteFallback: SMARTBOOK_IMAGES.aiToolsSuite?.url,
      alt: '5 AI Tools dan Simulasi Kasus Audit',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-blue-800 block mb-1.5">
          PROOF PRODUK
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-2">
          Bukan Cuma Materi untuk Dibaca. Lihat Isi Sistemnya.
        </h2>

        {/* Visual Proofs Stack */}
        <div className="space-y-7 mt-6">
          {visualProofs.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs"
            >
              <div className="mb-2">
                <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900">
                  {item.label}
                </span>
                <h3 className="text-[17px] sm:text-[18px] font-black text-slate-900 mt-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-slate-600 font-medium leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>

              {/* Image Frame */}
              <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={380}
                  className="w-full h-auto object-cover block"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (item.remoteFallback && target.src !== item.remoteFallback) {
                      target.src = item.remoteFallback;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
