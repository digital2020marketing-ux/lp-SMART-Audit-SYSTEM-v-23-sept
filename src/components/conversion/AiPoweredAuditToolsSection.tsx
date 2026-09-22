import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Sparkles, 
  Check, 
  Laptop, 
  ExternalLink, 
  Copy, 
  CheckCheck,
  Shield, 
  Layers
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export interface AiToolItem {
  id: string;
  badge: 'External GPT' | 'External AI Tool';
  categoryTag?: string;
  title: string;
  subtitle?: string;
  description: string;
  keyCapabilities: string[];
  deviceNotice?: string;
  image?: string;
  toolUrl?: string;
}

export const AI_TOOLS_DATA: AiToolItem[] = [
  {
    id: 'ai-checklist',
    badge: 'External GPT',
    title: 'AI Checklist & Simulation',
    subtitle: 'Pembuatan Daftar Periksa & Simulasi Audit',
    description: 'Asisten digital auditor internal ISO 9001:2015 untuk menyusun checklist spesifik berbasis bukti dan sarana latihan praktik menghadapi berbagai tipe auditee.',
    keyCapabilities: [
      'Membantu memahami & menyiapkan Audit Mutu Internal ISO 9001:2015',
      'Menyusun checklist audit berdasarkan dokumen & proses yang diaudit',
      'Mengidentifikasi klausul ISO 9001:2015 yang relevan secara otomatis',
      'Menyusun pertanyaan audit spesifik & berbasis bukti (Evidence-based)',
      'Panduan sistematis, objektif, & profesional untuk auditor pemula',
      'Simulasi latihan praktik menghadapi berbagai karakter auditee (Defensif, Arogan, Gugup, dll.)',
    ],
    image: '/images/Cek-List-Audit-dan-Simulasi.webp',
  },
  {
    id: 'ai-plor',
    badge: 'External GPT',
    title: 'AI PLOR Generator',
    subtitle: 'Menulis Temuan Audit – Metoda PLOR',
    description: 'Alat bantu menyusun temuan audit mutu internal secara sistematis, objektif, dan terstandarisasi berdasarkan formula PLOR dan klausul ISO 9001:2015.',
    keyCapabilities: [
      'Memformulasikan Problem (Pernyataan Ketidaksesuaian yang tepat)',
      'Menentukan Location (Lokasi proses/departemen secara akurat)',
      'Merumuskan Objective Evidence (Fakta & bukti fisik yang tidak terbantahkan)',
      'Memetakan Reference (Klausul ISO 9001:2015 / Dokumen SOP terkait)',
    ],
    image: '/images/Generator-Laporan-Temuan-PLOR.webp',
  },
  {
    id: 'capa-generator',
    badge: 'External AI Tool',
    title: 'CAPA Generator PTKP',
    subtitle: 'Menulis Laporan Tindakan Perbaikan – CAPA',
    description: 'Membantu auditee dan auditor menganalisis akar masalah secara terstruktur dengan metode 5-Why, merancang tindakan koreksi, serta tindakan pencegahan berulang.',
    keyCapabilities: [
      'Analisis mendalam temuan audit dan klasifikasi tingkat signifikansi',
      'Penyusunan tindakan koreksi langsung (Immediate Correction)',
      'Investigasi akar masalah (Root Cause Analysis)',
      'Penyusunan rencana tindakan perbaikan jangka panjang (Corrective Action)',
    ],
    deviceNotice: 'Rekomendasi: Sebaiknya dibuka menggunakan PC atau Laptop.',
    image: '/images/CAPA.webp',
  },
  {
    id: 'ami-gpt',
    badge: 'External GPT',
    categoryTag: 'AI Asisten Mutakhir 2026',
    title: 'AI Asisten AMI-GPT (Versi 2026)',
    description: 'Asisten kecerdasan buatan spesialis Audit Mutu Internal ISO 9001:2015 & ISO 19011:2026 yang siap mendampingi proses konsultasi, tanya jawab teori, dan studi kasus kapan saja 24/7.',
    keyCapabilities: [
      'Tanya jawab cerdas seputar standar ISO 9001:2015 dan ISO 19011:2026',
      'Konsultasi studi kasus audit, dilema temuan, dan kriteria sampling berbasis risiko',
      'Pendampingan belajar modul dan persiapan sertifikasi mandiri 24/7',
    ],
    image: '/images/5-AI-TOOLS-dan-SIMULASI.webp',
  },
  {
    id: 'iso-19011-gpt',
    badge: 'External GPT',
    categoryTag: 'AI Panduan ISO 19011',
    title: 'ISO 19011 Audit Asisten AI (Versi 2026)',
    description: 'AI Panduan spesialis pedoman audit sistem manajemen ISO 19011:2026. Membantu perancangan program audit, penerapan 7 prinsip audit, teknik sampling berbasis risiko, dan metode audit modern.',
    keyCapabilities: [
      'Panduan penerapan 7 Prinsip Audit Sistem Manajemen ISO 19011',
      'Perancangan & pengelolaan Program Audit Internal berbasis risiko',
      'Metodologi sampling audit & pelaksanaan remote / hybrid audit',
      'Evaluasi kompetensi auditor internal & etika investigasi profesional',
    ],
    image: '/images/ISO-19011.webp',
  },
];

interface AiPoweredAuditToolsSectionProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const AiPoweredAuditToolsSection: React.FC<AiPoweredAuditToolsSectionProps> = ({ isModal, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const checkoutUrl = getCheckoutUrl();

  const handleCopyLink = (tool: AiToolItem) => {
    const linkToCopy = `${checkoutUrl}#${tool.id}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(linkToCopy).then(() => {
        setCopiedId(tool.id);
        setTimeout(() => setCopiedId(null), 2500);
      }).catch(() => {
        setCopiedId(tool.id);
        setTimeout(() => setCopiedId(null), 2500);
      });
    } else {
      setCopiedId(tool.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleOpenTool = (tool: AiToolItem) => {
    trackCheckoutClick(`tool_${tool.id}`, `Buka Alat AI - ${tool.title}`);
    window.location.href = checkoutUrl;
  };

  return (
    <section id="ai-powered-tools" className={`w-full ${isModal ? 'py-4' : 'py-8 px-4 sm:px-6 bg-slate-50 border-b border-gray-200'}`}>
      <div className="max-w-md mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900 text-blue-100 text-xs font-black uppercase tracking-wider mb-2.5 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>AI Powered Audit Tools</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
            5 AI Tools, Generator & Panduan
          </h2>
          
          <div className="text-sm sm:text-base font-bold text-blue-900 mt-1">
            AI Generator, Panduan & Asisten Audit Mutu Internal
          </div>
          
          <p className="text-xs sm:text-sm text-gray-700 font-medium mt-2 leading-relaxed">
            Manfaatkan teknologi kecerdasan buatan terdedikasi untuk konsultasi pedoman ISO 19011, pembuatan checklist, simulasi tanya jawab, penulisan temuan PLOR, dan formulasi tindakan perbaikan CAPA.
          </p>

          {/* Pemberitahuan Khusus Perangkat (Laptop/PC Disarankan) */}
          <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-3 text-left flex items-start gap-2.5 shadow-2xs">
            <Laptop className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed font-medium">
              <strong className="font-black text-amber-900 block mb-0.5">
                Pemberitahuan Khusus Perangkat (Laptop/PC Disarankan):
              </strong>
              CAPA Generator sebaiknya digunakan melalui laptop/PC karena layout form dan tabel analisis pada smartphone kurang maksimal.
            </div>
          </div>
        </div>

        {/* 5 AI Tools Cards */}
        <div className="space-y-5">
          {AI_TOOLS_DATA.map((tool, idx) => (
            <div 
              key={tool.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    tool.badge === 'External AI Tool'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  }`}>
                    {tool.badge}
                  </span>

                  {tool.categoryTag && (
                    <span className="text-[11px] font-black text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {tool.categoryTag}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                  {tool.title}
                </h3>
                {tool.subtitle && (
                  <div className="text-xs sm:text-sm font-bold text-blue-900 mt-0.5">
                    {tool.subtitle}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-700 font-medium mt-2 leading-relaxed">
                  {tool.description}
                </p>

                {/* Kemampuan Utama */}
                <div className="mt-3.5 pt-3 border-t border-gray-100">
                  <div className="text-xs font-black uppercase tracking-wider text-gray-900 mb-2">
                    Kemampuan Utama:
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-800 font-medium">
                    {tool.keyCapabilities.map((cap, capIdx) => (
                      <li key={capIdx} className="flex items-start gap-2 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Device Notice for CAPA */}
                {tool.deviceNotice && (
                  <div className="mt-3 p-2 bg-amber-50/80 border border-amber-200 rounded-lg text-[11px] text-amber-900 font-semibold flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{tool.deviceNotice}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Salin Link & Buka Alat AI */}
              <div className="mt-4 pt-3.5 border-t border-gray-100 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyLink(tool)}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                >
                  {copiedId === tool.id ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="text-emerald-700">Link Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>Salin Link</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenTool(tool)}
                  className="py-2.5 px-3 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-bold text-xs rounded-xl shadow-2xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Buka Alat AI</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Lock / Access Info */}
        <div className="mt-5 p-3.5 bg-blue-900 text-white rounded-xl text-center shadow-md">
          <p className="text-xs sm:text-sm font-bold leading-relaxed mb-2">
            Kelima AI Tools & Generator di atas sudah termasuk dan aktif otomatis dalam paket SMART Audit System.
          </p>
          <a
            href={checkoutUrl}
            onClick={() => trackCheckoutClick('ai_tools_bottom_cta', 'Dapatkan 5 AI Tools - Rp97.000')}
            className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-lg shadow transition-all tracking-wide"
          >
            <span>DAPATKAN 5 AI TOOLS SEKARANG — Rp97.000</span>
          </a>
        </div>

      </div>
    </section>
  );
};
