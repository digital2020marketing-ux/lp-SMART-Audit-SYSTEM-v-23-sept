import React from 'react';
import { 
  BookOpen, 
  FileSpreadsheet, 
  Bot, 
  Layers, 
  Gift, 
  BookMarked, 
  Headphones, 
  Sparkles, 
  MessageSquare
} from 'lucide-react';

// Import Visual Feature Images for the 3 Core Hero items
import img9Modul from '../assets/images/9-modul.jpg';
import imgWorksheet from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import img5AiTools from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';

export const ProductStackSection: React.FC = () => {
  const coreProducts = [
    {
      title: '7 Worksheet Word & Excel Siap Edit',
      desc: 'Format kerja untuk persiapan, checklist, catatan, laporan, dan CAPA.',
      tag: 'Core #1',
      icon: FileSpreadsheet,
      img: imgWorksheet,
      imgAlt: '7 Worksheet Formulir Audit Word dan Excel'
    },
    {
      title: 'Simulasi Audit',
      desc: 'Latihan menjalankan alur audit berdasarkan skenario praktik.',
      tag: 'Core #2',
      icon: Bot,
      img: img5AiTools,
      imgAlt: 'Simulasi Audit Berdasarkan Skenario Praktik'
    },
    {
      title: '5 AI Tools Pendukung',
      desc: 'Membantu menyusun pertanyaan, PLOR, 5-Why, dan CAPA. (AI sebagai alat bantu drafting, keputusan audit tetap 100% pada auditor).',
      tag: 'Core #3',
      icon: Sparkles,
      img: img5AiTools,
      imgAlt: '5 AI Tools Pendukung SMART Audit System'
    }
  ];

  const bonusItems = [
    {
      title: '9 Modul Panduan Audit ISO 9001 & ISO 19011',
      desc: 'Panduan alur standar langkah demi langkah',
      icon: BookOpen
    },
    {
      title: 'Ebook Ringkasan Audit',
      desc: 'Panduan cepat pegangan ringkas',
      icon: BookMarked
    },
    {
      title: 'Podcast / Audio Ulasan',
      desc: 'Dengarkan konsep audit di mana saja',
      icon: Headphones
    },
    {
      title: 'Evaluasi Pre/Post-Test',
      desc: 'Ukur kesiapan audit mandiri',
      icon: Sparkles
    },
    {
      title: 'AI Assistant — Akses Kapan Saja',
      desc: 'Tanya jawab seputar materi audit',
      icon: MessageSquare
    }
  ];

  return (
    <section id="isi-paket" className="py-8 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header Sesuai Instruksi 5 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-100/90 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2.5">
            <Layers className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>3 KOMPONEN UTAMA SISTEM PRAKTIK ANDA</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug">
            TIDAK PERLU MENYIAPKAN SEMUANYA DARI NOL
          </h2>
          <p className="text-xs text-gray-600 font-medium mt-1.5 max-w-sm mx-auto leading-relaxed">
            Anda mendapatkan format kerja, simulasi, dan alat bantu yang dapat langsung digunakan sebagai starting point saat mempersiapkan audit.
          </p>
        </div>

        {/* 3 Core Hero Product Cards */}
        <div className="space-y-4 mb-6 max-w-md mx-auto">
          {coreProducts.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white border-2 border-blue-900/15 rounded-2xl overflow-hidden shadow-xs hover:border-blue-900 transition-colors"
              >
                {/* Visual Image Preview */}
                <div className="bg-slate-950 p-2 border-b border-gray-100">
                  <img 
                    src={item.img} 
                    referrerPolicy="no-referrer"
                    alt={item.imgAlt} 
                    className="w-full h-auto rounded-xl object-cover max-h-[220px]"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div className="p-3.5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-1">
                      <h3 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-black bg-blue-900 text-white px-2 py-0.5 rounded-full shrink-0">
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

        {/* Secondary Compact Bonus Box */}
        <div className="bg-white border border-amber-200 rounded-2xl p-4 max-w-md mx-auto shadow-2xs">
          <div className="flex items-center gap-1.5 mb-3">
            <Gift className="w-4 h-4 text-amber-600 shrink-0" />
            <h4 className="text-xs font-black uppercase text-amber-900 tracking-wider">
              BONUS PENDUKUNG PEMBELAJARAN
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {bonusItems.map((bn, i) => {
              const Icon = bn.icon;
              return (
                <div key={i} className="bg-amber-50/50 border border-amber-100 rounded-xl p-2.5 flex items-start gap-2">
                  <Icon className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-900 leading-snug">
                      {bn.title}
                    </p>
                    <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                      {bn.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
