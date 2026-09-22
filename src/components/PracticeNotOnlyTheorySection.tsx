import React from 'react';
import { 
  BookOpen, 
  Layers, 
  FileSpreadsheet, 
  Headphones, 
  Bot, 
  Sparkles
} from 'lucide-react';

// Import Visual Feature Images
import img5AiTools from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';
import imgWorksheet from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import img9Modul from '../assets/images/9-modul.jpg';
import imgPodcast from '../assets/images/podcast-audio-ulasan-mendalam.jpg';
import imgPrePostTest from '../assets/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg';

export const PracticeNotOnlyTheorySection: React.FC = () => {

  const packageItems = [
    {
      title: 'Materi Belajar Audit Internal',
      desc: 'Berdasarkan standar ISO 9001 dan ISO 19011, tersusun rapi dari dasar hingga tahap akhir.',
      icon: BookOpen,
      tag: '9 Modul Lengkap',
      img: img9Modul,
      imgAlt: '9 Modul Panduan Audit Internal ISO 9001 & ISO 19011'
    },
    {
      title: 'AI Tools & Simulasi Interaktif',
      desc: 'Membantu membuat pertanyaan audit 5W+1H, menyusun temuan audit PLOR, dan analisa akar masalah/perbaikan.',
      icon: Bot,
      tag: '5 AI Tools',
      img: img5AiTools,
      imgAlt: '5 AI Tools dan Simulasi SMART Audit System'
    },
    {
      title: '7 Form / Lembar Kerja Audit Siap Pakai',
      desc: 'Template Word (.docx) & Excel (.xlsx) 100% editable: Jadwal, Checklist, Catatan Lapangan, Laporan Audit, CAPA, dll.',
      icon: FileSpreadsheet,
      tag: 'Form Siap Pakai',
      img: imgWorksheet,
      imgAlt: '7 Formulir dan Worksheet Audit Word dan Excel'
    },
    {
      title: 'Audio / Podcast Pembelajaran & Ebook',
      desc: 'Dengarkan penjelasan konsep audit penting saat santai, di perjalanan, atau istirahat kerja.',
      icon: Headphones,
      tag: 'Audio & Ebook',
      img: imgPodcast,
      imgAlt: 'Podcast Audio Ulasan Mendalam Audit Internal'
    },
    {
      title: 'Evaluasi & Bank Soal Pre-Test / Post-Test',
      desc: 'Ukur pemahaman dan kesiapan audit Anda dengan simulasi latihan soal komprehensif.',
      icon: Sparkles,
      tag: 'Evaluasi',
      img: imgPrePostTest,
      imgAlt: 'Evaluasi Pre-Test dan Post-Test Audit'
    }
  ];

  return (
    <section id="paket-lengkap" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-[10px] font-extrabold mb-2.5">
            <Layers className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>PAKET BELAJAR & PRAKTIK</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug">
            BUKAN HANYA BELAJAR TEORI — ANDA JUGA DIBANTU UNTUK PRAKTIK
          </h2>
          <p className="text-xs text-gray-600 font-medium mt-2 max-w-sm mx-auto leading-relaxed">
            Anda mendapatkan seluruh modul panduan, alat bantu AI, lembar kerja Word & Excel, dan simulasi dalam satu paket terpadu:
          </p>
        </div>

        {/* Feature Cards With Images */}
        <div className="space-y-4 mb-6">
          {packageItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-gray-200/90 rounded-2xl overflow-hidden shadow-xs hover:border-blue-300 transition-colors"
              >
                {/* Visual Image Banner */}
                {item.img && (
                  <div className="bg-slate-950 p-2 border-b border-gray-200">
                    <img 
                      src={item.img} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (!target.dataset.failed) {
                          target.dataset.failed = 'true';
                          target.src = "/images/" + item.img.split('/').pop();
                        }
                      }}
                      alt={item.imgAlt} 
                      className="w-full h-auto rounded-xl object-cover max-h-[220px]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Card Text Content */}
                <div className="p-3.5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-1">
                      <h3 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-extrabold bg-blue-100 text-blue-900 px-2 py-0.5 rounded-full shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Reassurance Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-3.5 text-center text-white shadow-md">
          <p className="text-xs font-bold text-blue-100 leading-relaxed">
            Seluruh materi, 5 AI Tools, dan 7 template format kerja di atas dapat diakses langsung tanpa biaya langganan bulanan.
          </p>
        </div>
      </div>
    </section>
  );
};
