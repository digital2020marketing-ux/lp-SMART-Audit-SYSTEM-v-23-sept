import React from 'react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../../constants';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanWorkbooks: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('workbooks_cta', 'Workbooks - DAPATKAN 7 WORKBOOK — Rp149.000');
  };
  const workbooks = [
    {
      num: '01',
      title: 'Audit Checklist',
      desc: 'Menyusun poin pemeriksaan terstruktur sesuai klausul dan area kerja.',
    },
    {
      num: '02',
      title: 'Question & Evidence',
      desc: 'Menghubungkan pertanyaan audit spesifik dengan bukti objektif yang relevan untuk diverifikasi.',
    },
    {
      num: '03',
      title: 'Audit Finding',
      desc: 'Mendokumentasikan hasil temuan audit secara objektif dan akurat.',
    },
    {
      num: '04',
      title: 'PLOR Framework',
      desc: 'Menyusun temuan berbasis standar: Problem → Location → Objective Evidence → Reference.',
    },
    {
      num: '05',
      title: 'Root Cause Analysis',
      desc: 'Menganalisis akar penyebab masalah hingga ke faktor fundamental sistem.',
    },
    {
      num: '06',
      title: 'CAPA',
      desc: 'Mendokumentasikan tindakan perbaikan langsung dan corrective action jangka panjang.',
    },
    {
      num: '07',
      title: 'Audit Report',
      desc: 'Menyusun laporan audit final komprehensif untuk diserahkan ke manajemen.',
    },
  ];

  return (
    <section className="bg-slate-50/70 py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="workbooks">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>PILAR 2: PERANGKAT KERJA EKSEKUSI</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[20px] sm:text-[27px] font-black text-slate-950 leading-[1.25] tracking-tight mb-2 text-center max-w-[460px] mx-auto uppercase break-words px-1">
          7 PROFESSIONAL AUDIT WORKBOOKS
        </h2>

        {/* Badge Reusable */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 border border-blue-300 text-blue-950 rounded-full text-[13px] sm:text-[13.5px] font-black mb-6 shadow-2xs">
          <span>Editable</span>
          <span>•</span>
          <span>Reusable</span>
          <span>•</span>
          <span>Practical</span>
        </div>

        {/* List 7 Workbooks */}
        <div className="space-y-3 mb-6 text-left max-w-[460px] mx-auto">
          {workbooks.map((wb, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border-2 border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-black text-[13px] shrink-0 mt-0.5 shadow-2xs">
                  {wb.num}
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-slate-950 text-[16px] sm:text-[16.5px] leading-snug">
                    {wb.title}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15px] text-slate-800 mt-1 leading-relaxed font-medium">
                    {wb.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mockup Workbooks */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-1.5 mb-6 max-w-[460px] mx-auto">
          <picture>
            <source srcSet={SMARTBOOK_IMAGES.worksheet.webpLocal} type="image/webp" />
            <img
              src={SMARTBOOK_IMAGES.worksheet.webpLocal}
              alt="7 Professional Audit Workbooks Mockup"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-xl block"
              onError={(e) =>
                handleImageFallback(
                  e,
                  SMARTBOOK_IMAGES.worksheet.local,
                  SMARTBOOK_IMAGES.worksheet.url,
                  SMARTBOOK_IMAGES.worksheet.urlAlt
                )
              }
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        {/* Clean Pillar Note */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center max-w-[460px] mx-auto">
          <p className="text-[13.5px] sm:text-[14px] text-slate-800 leading-relaxed font-bold mb-1">
            File dapat diedit dan digunakan sebagai alat bantu audit sesuai kebutuhan pengguna.
          </p>
          <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed font-medium">
            Format workbook standar (.xlsx &amp; .docx), siap disalin dan disesuaikan untuk kebutuhan seluruh departemen organisasi Anda.
          </p>
        </div>
      </div>
    </section>
  );
};
