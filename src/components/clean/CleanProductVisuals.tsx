import React from 'react';
import { SMARTBOOK_IMAGES } from '../../imageConstants';
import { CtaButton } from './CtaButton';

export const CleanProductVisuals: React.FC = () => {
  const visualProofs = [
    {
      label: 'DASHBOARD TERPADU',
      title: 'Dashboard SMART AUDIT SYSTEM',
      desc: 'Seluruh panduan, worksheet, tools, dan simulasi disusun dalam satu sistem agar lebih mudah digunakan saat belajar maupun mempersiapkan audit.',
      caption: 'Akses instan ke seluruh materi dan instrumen dalam 1 tampilan navigasi rapi.',
      src: '/images/gambar-dashbord-SAS.webp',
      remoteFallback: SMARTBOOK_IMAGES.dashboard?.url,
      alt: 'Tampilan Asli Dashboard SMART AUDIT SYSTEM',
    },
    {
      label: 'CHECKLIST AUDIT LENGKAP',
      title: 'Checklist Audit & Panduan Pertanyaan',
      desc: 'Panduan klausul lengkap ISO 9001:2015 beserta contoh pertanyaan wawancara dan bukti evidence yang harus diminta.',
      caption: 'Dilengkapi panduan pertanyaan terarah & acuan dokumen evidence yang harus dicek.',
      src: '/images/Cek-List-Audit-dan-Simulasi.webp',
      remoteFallback: SMARTBOOK_IMAGES.cekList?.url,
      alt: 'Checklist Audit dan Simulasi',
    },
    {
      label: 'WORKSHEET TEMUAN AUDIT',
      title: 'Worksheet Temuan PLOR',
      desc: 'Format penulisan temuan Problem, Location, Objective Evidence, dan Reference klausul secara objektif dan akurat.',
      caption: 'Menulis temuan audit yang objektif, tidak terbantahkan, dan nyambung dengan standar.',
      src: '/images/Generator-Laporan-Temuan-PLOR.webp',
      remoteFallback: SMARTBOOK_IMAGES.plor?.url,
      alt: 'Worksheet Laporan Temuan PLOR',
    },
    {
      label: 'ROOT CAUSE & TINDAKAN KOREKTIF',
      title: 'CAPA & 5-Why Root Cause Analysis',
      desc: 'Template analisis akar penyebab masalah dan rencana tindakan koreksi terstruktur yang diakui manajemen.',
      caption: 'Formulir tindak lanjut perbaikan korektif dan pencegahan siap edit Word & Excel.',
      src: '/images/CAPA.webp',
      remoteFallback: SMARTBOOK_IMAGES.capa?.url,
      alt: 'Worksheet CAPA dan Root Cause Analysis',
    },
    {
      label: 'BANTUAN ASISTEN AI CEPAT',
      title: '5 AI Tools Audit Assistant',
      desc: 'Mempercepat pembuatan draf checklist, susunan pertanyaan, rumusan temuan PLOR, dan draf rekomendasi CAPA.',
      caption: 'Framework prompt audit siap pakai untuk membuat draf instrumen audit dalam hitungan menit.',
      src: '/images/5-AI-TOOLS-dan-SIMULASI.webp',
      remoteFallback: SMARTBOOK_IMAGES.aiToolsSuite?.url,
      alt: '5 AI Tools dan Simulasi Kasus Audit',
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-blue-900 block mb-1">
          PROOF PRODUK
        </span>

        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-tight mb-2">
          Bukan Cuma Materi untuk Dibaca. Lihat Isi Sistemnya.
        </h2>

        <p className="text-[14px] sm:text-[15px] text-slate-600 font-medium leading-relaxed mb-5">
          Seluruh panduan, worksheet, tools, dan simulasi disusun dalam satu sistem agar lebih mudah digunakan saat belajar maupun mempersiapkan audit.
        </p>

        {/* Visual Proofs Stack — Screenshot Ukuran Jelas dengan Caption Pendek */}
        <div className="space-y-6 mb-6">
          {visualProofs.map((item, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs"
            >
              <div className="mb-2">
                <span className="text-[10.5px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-100 text-blue-950">
                  {item.label}
                </span>
                <h3 className="text-[16px] sm:text-[17px] font-black text-slate-950 mt-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </div>

              {/* Large Product Screenshot Frame */}
              <div className="mt-2.5 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={380}
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (item.remoteFallback && target.src !== item.remoteFallback) {
                      target.src = item.remoteFallback;
                    }
                  }}
                />
              </div>

              {/* Short Caption */}
              <div className="mt-2 pt-2 border-t border-slate-200/80 flex items-start gap-1.5">
                <span className="text-blue-700 font-black text-[13px] shrink-0">📌</span>
                <p className="text-[12.5px] sm:text-[13px] text-slate-700 font-semibold leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strategis: Setelah Product Proof */}
        <div className="w-full space-y-2.5">
          <CtaButton
            position="after_product_proof"
            label="SAYA MAU AKSES SISTEM INI →"
            sublabel="Akses Langsung — Rp99.000 Sekali Bayar"
          />

          <a
            href="#video-demo-section"
            className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 text-[12.5px] font-bold flex items-center justify-center gap-1.5 transition-colors text-center"
          >
            <span>📹 Ingin lihat isi sistem langsung?</span>
            <span className="text-blue-700 font-extrabold underline">Tonton 9 Video Rekaman Layar ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
