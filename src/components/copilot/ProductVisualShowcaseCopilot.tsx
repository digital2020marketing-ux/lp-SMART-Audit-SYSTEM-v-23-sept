import React from 'react';
import { 
  LayoutDashboard, 
  FileSpreadsheet, 
  PlayCircle, 
  Cpu, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const ProductVisualShowcaseCopilot: React.FC = () => {
  const products = [
    {
      id: 'dashboard',
      tag: '1. Platform Utama',
      title: 'Dashboard SMART Audit System',
      description: 'Platform terpusat yang menghubungkan alur kerja, seluruh modul, worksheet, evaluasi, dan alat bantu audit.',
      imgSrc: '/images/gambar-dashbord-SAS-mobile.webp',
      fallback: '/images/gambar-dashbord-SAS.webp',
      remoteUrl: 'https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg',
      alt: 'Dashboard SMART Audit System',
    },
    {
      id: 'worksheet',
      tag: '2. Dokumen Kerja Siap Pakai',
      title: '7 Worksheet Word & Excel',
      description: 'Formulir checklist, format temuan PLOR, lembar 5-Why, formulir CAPA, dan template laporan audit yang langsung siap diedit.',
      imgSrc: SMARTBOOK_IMAGES.worksheet?.webpLocal || '/images/worksheet-dan-formulir-AMI.webp',
      fallback: SMARTBOOK_IMAGES.worksheet?.local || '/images/worksheet-dan-formulir-AMI.jpg',
      remoteUrl: SMARTBOOK_IMAGES.worksheet?.url,
      alt: '7 Worksheet Word & Excel',
    },
    {
      id: 'simulasi',
      tag: '3. Latihan Lapangan',
      title: 'Simulasi Audit',
      description: 'Latihan interaktif mengidentifikasi bukti objektif, menyusun pertanyaan terarah, dan menghadapi berbagai situasi auditee.',
      imgSrc: SMARTBOOK_IMAGES.cekList?.webpLocal || '/images/Cek-List-Audit-dan-Simulasi.webp',
      fallback: SMARTBOOK_IMAGES.cekList?.local || '/images/Cek-List-Audit-dan-Simulasi.jpg',
      remoteUrl: SMARTBOOK_IMAGES.cekList?.url,
      alt: 'Simulasi Audit',
    },
    {
      id: 'aitools',
      tag: '4. Asistensi Cerdas',
      title: '5 AI Tools',
      description: 'Perangkat AI khusus untuk checklist, perumusan temuan PLOR, analisa akar masalah CAPA, tanya jawab AMI, dan panduan ISO 19011.',
      imgSrc: SMARTBOOK_IMAGES.aiToolsSuite?.webpLocal || '/images/5-AI-TOOLS-dan-SIMULASI.webp',
      fallback: SMARTBOOK_IMAGES.aiToolsSuite?.local || '/images/5-AI-TOOLS-dan-SIMULASI.jpg',
      remoteUrl: SMARTBOOK_IMAGES.aiToolsSuite?.url,
      alt: '5 AI Tools Audit',
    },
    {
      id: 'modul9',
      tag: '5. Referensi Praktik',
      title: '9 Modul Panduan Audit',
      description: 'Panduan komprehensif langkah demi langkah memahami klausul standar ISO 9001:2015 dan tata laksana audit ISO 19011.',
      imgSrc: SMARTBOOK_IMAGES.modul9?.webpLocal || '/images/9-modul.webp',
      fallback: SMARTBOOK_IMAGES.modul9?.local || '/images/9-modul.jpg',
      remoteUrl: SMARTBOOK_IMAGES.modul9?.url,
      alt: '9 Modul Panduan Audit',
    },
  ];

  return (
    <section id="produk-langsung" className="py-7 px-4 bg-slate-50 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        {/* Title Section 2 */}
        <div className="text-center mb-4">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full inline-block mb-1.5">
            BENTUK NYATA PRODUK
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
            LIHAT APA YANG LANGSUNG ANDA DAPATKAN
          </h2>
          <p className="text-xs text-gray-700 mt-2 font-medium leading-relaxed bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
            “Bukan sekadar materi. Anda mendapatkan sistem, dokumen kerja, simulasi, dan alat bantu AI untuk mendampingi workflow audit.”
          </p>
        </div>

        {/* Visual Cards List */}
        <div className="space-y-3.5">
          {products.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
            >
              {/* Card Header Tag */}
              <div className="px-3.5 py-2 flex items-center justify-between border-b bg-slate-50 border-gray-100">
                <span className="text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 text-blue-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                  <span>{item.tag}</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Termasuk
                </span>
              </div>

              {/* Product Visual Image */}
              <div className="relative bg-slate-950 aspect-16/9 overflow-hidden">
                <img
                  src={item.imgSrc}
                  onError={(e) => handleImageFallback(e, item.fallback, item.remoteUrl || item.imgSrc)}
                  alt={item.alt}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Info */}
              <div className="p-3.5">
                <h3 className="text-sm font-black text-gray-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
