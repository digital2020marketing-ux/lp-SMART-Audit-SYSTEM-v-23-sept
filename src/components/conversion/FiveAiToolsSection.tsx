import React, { useState } from 'react';
import { Cpu, Check, Laptop, ShieldCheck, ChevronDown, ChevronUp, Sparkles, Bot } from 'lucide-react';

export const FiveAiToolsSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  const tools = [
    {
      number: '1',
      title: 'AI GPT Co-Pilot ISO 19011:2026',
      sublabel: 'Fitur Utama — Co-Pilot Panduan Audit Sistem Manajemen Terkini',
      summary: 'Prinsip audit, program audit berbasis risiko, sampling, remote/hybrid audit, kompetensi auditor, dan studi kasus.',
      details: [
        'Penerapan 7 Prinsip Audit Sistem Manajemen sesuai pedoman ISO 19011:2026',
        'Pengelolaan Program Audit berbasis pendekatan risiko dan peluang (risk-based thinking)',
        'Panduan metode sampling audit dan pelaksanaan remote / hybrid audit',
        'Eksplorasi kompetensi auditor, etika, dan studi kasus situasi audit',
      ],
      isFeatured: true,
    },
    {
      number: '2',
      title: 'AI Checklist & Simulation',
      summary: 'Checklist, pertanyaan evidence-based, dan simulasi auditee.',
      details: [
        'Penyusunan checklist spesifik berbasis klausul ISO 9001:2015',
        'Pertanyaan audit terarah dengan pendekatan 5W+1H dan bukti objektif',
        'Simulasi latihan interaktif menghadapi berbagai karakter auditee di lapangan',
      ],
    },
    {
      number: '3',
      title: 'AI PLOR Generator',
      summary: 'Problem • Location • Objective Evidence • Reference.',
      details: [
        'Problem: Pernyataan ketidaksesuaian yang objektif',
        'Location: Pemetaan area dan proses yang diaudit secara presisi',
        'Objective Evidence: Fakta dan rekaman bukti fisik yang jelas',
        'Reference: Klausul ISO 9001:2015 dan SOP acuan yang tepat',
      ],
    },
    {
      number: '4',
      title: 'CAPA Generator PTKP',
      summary: 'Root Cause • 5-Why • Correction • Corrective Action.',
      details: [
        'Investigasi akar masalah terstruktur dengan metode 5-Why',
        'Perumusan tindakan koreksi langsung (Immediate Correction)',
        'Rencana tindakan korektif jangka panjang untuk mencegah keberulangan',
      ],
      notice: 'Laptop/PC disarankan untuk pengalaman penggunaan yang lebih optimal.',
    },
    {
      number: '5',
      title: 'AI Asisten AMI',
      summary: 'Tanya jawab dan studi kasus Audit Mutu Internal.',
      details: [
        'Konsultasi seputar pemahaman klausul ISO 9001:2015 dan audit internal',
        'Bantuan analisis dilema temuan dan studi kasus lapangan',
        'Pendampingan belajar modul dan persiapan tugas audit',
      ],
    },
  ];

  return (
    <section id="ai-tools" className="bg-white py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <Cpu className="w-4 h-4 text-blue-700 shrink-0" />
            <span>AI AUDIT SUITE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            5 AI TOOLS KHUSUS AUDIT INTERNAL
          </h2>
          <p className="text-[13px] sm:text-sm text-gray-600 font-medium mt-1">
            Dirancang spesifik untuk alur audit, bukan chatbot umum.
          </p>
        </div>

        {/* List 5 Tools */}
        <div className="space-y-3.5 mb-5">
          {tools.map((tool) => (
            <div
              key={tool.number}
              className={`rounded-2xl p-4 text-left transition-all ${
                tool.isFeatured
                  ? 'bg-gradient-to-b from-blue-950 to-slate-900 text-white border-2 border-amber-400 shadow-lg'
                  : 'bg-slate-50 border border-slate-200 text-gray-900 shadow-2xs'
              }`}
            >
              {/* Header Tool */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                      tool.isFeatured
                        ? 'bg-amber-400 text-slate-950 shadow-xs'
                        : 'bg-blue-900 text-white'
                    }`}
                  >
                    {tool.number}
                  </span>
                  <div>
                    <h3
                      className={`text-[15px] sm:text-base font-black leading-tight ${
                        tool.isFeatured ? 'text-amber-300' : 'text-gray-900'
                      }`}
                    >
                      {tool.title}
                    </h3>
                    {tool.sublabel && (
                      <span className="text-[11px] font-bold text-blue-200 block mt-0.5">
                        {tool.sublabel}
                      </span>
                    )}
                  </div>
                </div>

                {tool.isFeatured && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full shrink-0 shadow-xs">
                    UTAMA
                  </span>
                )}
              </div>

              {/* Summary */}
              <p
                className={`text-[13px] sm:text-sm font-semibold leading-relaxed mb-2.5 pl-9.5 ${
                  tool.isFeatured ? 'text-slate-200' : 'text-gray-700'
                }`}
              >
                {tool.summary}
              </p>

              {/* Rincian Fitur */}
              {showDetails && (
                <div
                  className={`pt-2.5 border-t pl-9.5 space-y-1.5 ${
                    tool.isFeatured ? 'border-slate-800' : 'border-slate-200'
                  }`}
                >
                  {tool.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2 text-[12px] sm:text-[13px] leading-snug ${
                        tool.isFeatured ? 'text-slate-300' : 'text-gray-600'
                      }`}
                    >
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          tool.isFeatured ? 'text-amber-400' : 'text-blue-600'
                        }`}
                      />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {tool.notice && (
                <div
                  className={`mt-2.5 pt-2 border-t text-[11px] flex items-center gap-1.5 pl-9.5 ${
                    tool.isFeatured
                      ? 'border-slate-800 text-amber-300'
                      : 'border-slate-200 text-amber-700 font-medium'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5 shrink-0" />
                  <span>{tool.notice}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Expand / Collapse Details */}
        <div className="text-center mb-5">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
          >
            <span>{showDetails ? 'Tutup Detail AI Tools' : 'Lihat Kemampuan Lengkap Masing-Masing AI Tools'}</span>
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Batasan Penggunaan AI */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-gray-800 mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Peran AI dalam Audit</span>
          </div>
          <p className="text-[12px] text-gray-600 leading-relaxed">
            AI berfungsi sebagai asisten drafting cepat dan alat bantu belajar. Verifikasi bukti objektif, pertimbangan profesional, dan keputusan temuan tetap menjadi tanggung jawab auditor.
          </p>
        </div>

      </div>
    </section>
  );
};
