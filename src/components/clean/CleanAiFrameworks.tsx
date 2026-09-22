import React from 'react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanAiFrameworks: React.FC = () => {
  const aiSteps = [
    {
      title: 'AI Checklist Framework',
      desc: 'Membantu menyusun draft checklist awal sesuai ruang lingkup dan proses audit.',
    },
    {
      title: 'AI Question Framework',
      desc: 'Membantu mengeksplorasi variasi pertanyaan audit yang lebih spesifik dan mendalam.',
    },
    {
      title: 'AI Evidence & Finding Framework',
      desc: 'Membantu telaah awal kesesuaian evidence dan merumuskan draft temuan berbasis PLOR.',
    },
    {
      title: 'AI Root Cause Framework',
      desc: 'Membantu mengeksplorasi potensi akar penyebab masalah sistemik.',
    },
    {
      title: 'AI CAPA Review Framework',
      desc: 'Membantu mereview kelayakan dan efektivitas draft rencana tindakan perbaikan.',
    },
  ];

  return (
    <section className="bg-white py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="ai-frameworks">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>PILAR 3: AKSELERATOR KECERDASAN BUATAN</span>
          </div>
        </div>

        {/* Headline Sesuai Priority 10 */}
        <h2 className="text-[20px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-3 text-center uppercase break-words px-1">
          AI MEMPERCEPAT DRAFT.<br />
          AUDITOR TETAP MEMEGANG KEPUTUSAN.
        </h2>

        {/* Copy Sesuai Ketentuan */}
        <p className="text-[14px] sm:text-[15.5px] text-slate-700 font-medium leading-relaxed mb-5 text-center">
          Gunakan AI untuk membantu menyusun draft checklist, mengeksplorasi pertanyaan audit, menelaah evidence awal, mengeksplorasi root cause, dan mereview draft CAPA.
        </p>

        {/* Penegas Box Mandatori */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6 text-left shadow-2xs">
          <div className="flex items-start gap-2.5">
            <span className="text-[18px] shrink-0 mt-0.5">⚖️</span>
            <p className="text-[13px] sm:text-[13.5px] text-blue-950 font-bold leading-relaxed">
              <strong className="font-black text-blue-950">Prinsip Auditor:</strong> AI tidak menggantikan professional judgment auditor. Validasi bukti, penetapan temuan, dan keputusan audit tetap berada pada auditor.
            </p>
          </div>
        </div>

        {/* Visual Showcase 5 AI Tools */}
        <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-white p-2 mb-6">
          <picture>
            <source srcSet={SMARTBOOK_IMAGES.aiToolsSuite.webpLocal} type="image/webp" />
            <img
              src={SMARTBOOK_IMAGES.aiToolsSuite.webpLocal}
              alt="5 AI Audit Frameworks Mockup"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-xl block"
              onError={(e) =>
                handleImageFallback(
                  e,
                  SMARTBOOK_IMAGES.aiToolsSuite.local,
                  SMARTBOOK_IMAGES.aiToolsSuite.url,
                  SMARTBOOK_IMAGES.aiToolsSuite.urlAlt
                )
              }
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        {/* List 5 AI Frameworks */}
        <div className="space-y-3 mb-6 text-left">
          {aiSteps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-6 h-6 rounded-lg bg-blue-700 text-white flex items-center justify-center font-black text-[12px] shrink-0">
                  {idx + 1}
                </span>
                <h3 className="font-black text-slate-950 text-[15px] sm:text-[16px]">
                  {step.title}
                </h3>
              </div>
              <p className="text-[13.5px] sm:text-[14px] text-slate-600 pl-8.5 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* AI Framework Flow */}
        <div className="bg-slate-950 text-white rounded-2xl p-4 text-center border border-slate-800">
          <div className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-2.5">
            ALUR KERJA BANTUAN AI
          </div>
          <div className="text-[12.5px] sm:text-[13px] font-bold text-slate-200 leading-relaxed">
            Draft Checklist → Eksplorasi Pertanyaan → Telaah Evidence → Analisis Root Cause → Review CAPA
          </div>
        </div>
      </div>
    </section>
  );
};
