import React from 'react';
import { HelpCircle, FileCheck2, FileText, SearchCheck, Compass, Sparkles } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgAiSuiteWebp from '../assets/images/5-AI-TOOLS-dan-SIMULASI.webp';
import imgAiSuiteJpg from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';

export const AiToolsSupportSection: React.FC = () => {
  const tools = [
    {
      name: 'Generator Pertanyaan 5W+1H',
      desc: 'Menyusun draf pertanyaan audit berbasis proses & klausul ISO 9001 untuk checklist persiapan.',
      icon: HelpCircle
    },
    {
      name: 'Rekomendasi Bukti Objektif',
      desc: 'Menganalisis dokumen wajib, form catatan mutu, serta bukti fisik yang harus diminta saat audit.',
      icon: FileCheck2
    },
    {
      name: 'Formulator Temuan PLOR',
      desc: 'Mengubah catatan lapangan menjadi narasi temuan standar PLOR (Problem, Location, Objective Evidence, Requirement).',
      icon: FileText
    },
    {
      name: 'Analisis 5-Why & CAPA',
      desc: 'Membantu menelusuri akar penyebab masalah (Root Cause) dan menyusun rekomendasi tindakan koreksi.',
      icon: SearchCheck
    },
    {
      name: 'Asisten Panduan ISO 19011',
      desc: 'Panduan etika audit, teknik wawancara, dan pengelolaan situasi audit sesuai pedoman audit standar.',
      icon: Compass
    }
  ];

  return (
    <section id="ai-tools-pendukung" className="py-8 bg-slate-900 text-white">
      <div className="w-full px-4">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1 bg-indigo-950 text-indigo-300 border border-indigo-700/60 px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>ALAT BANTU PRAKTIK</span>
          </div>
          <h2 className="text-xl font-black tracking-tight leading-tight mb-2">
            Saat Praktik, Anda Dibantu Tools AI
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            Gunakan AI sebagai alat bantu untuk membantu proses belajar dan praktik audit.
          </p>
        </div>

        {/* 5 AI Tools Image Preview */}
        <div className="mb-4 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-16/9 shadow-sm">
          <picture>
            <source srcSet={imgAiSuiteWebp} type="image/webp" />
            <img
              src={imgAiSuiteJpg}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.aiToolsSuite.webpLocal, SMARTBOOK_IMAGES.aiToolsSuite.local, SMARTBOOK_IMAGES.aiToolsSuite.url)}
              alt="5 AI Tools Pendukung Audit"
              width={600}
              height={338}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>

        {/* 5 AI Tools List */}
        <div className="space-y-2 mb-4">
          {tools.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3 shadow-xs flex items-start gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white leading-snug mb-0.5">
                    {idx + 1}. {t.name}
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vital Note Box */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-center">
          <p className="text-[11px] font-semibold text-slate-200 leading-relaxed">
            📌 <strong className="text-white">Catatan:</strong> AI membantu proses belajar dan praktik. AI bukan pengganti auditor.
          </p>
        </div>
      </div>
    </section>
  );
};

