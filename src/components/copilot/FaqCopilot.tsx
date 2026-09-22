import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqCopilot: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '1. Apakah ini kursus?',
      a: 'Bukan. Ini sistem praktik audit yang berisi panduan terstruktur, worksheet siap pakai, simulasi, dan AI tools untuk mendampingi pekerjaan audit Anda.'
    },
    {
      q: '2. Apakah cocok untuk auditor pemula?',
      a: 'Ya. Sistem ini dirancang dari sudut pandang pemula yang membutuhkan starting point jelas dan alur kerja yang mudah diikuti.'
    },
    {
      q: '3. Apakah worksheet dapat diedit?',
      a: 'Ya. Semua worksheet Word dan Excel dapat diunduh dan diedit sesuai kebutuhan organisasi Anda.'
    },
    {
      q: '4. Apakah ada biaya bulanan?',
      a: 'Tidak. Pembayaran dilakukan sekali saja untuk akses seumur hidup sesuai ketentuan produk.'
    },
    {
      q: '5. Apakah AI akan mengambil keputusan audit?',
      a: 'Tidak. AI berfungsi sebagai alat bantu perumusan dan analisis awal. Verifikasi bukti dan keputusan audit tetap berada di tangan auditor.'
    },
    {
      q: '6. Apakah semua AI Tools nyaman digunakan dari HP?',
      a: 'Sebagian besar fitur dan AI tools dapat digunakan langsung melalui smartphone. Namun untuk CAPA Generator PTKP, penggunaan laptop atau PC lebih disarankan karena tampilan formulir dan tabel analisisnya lebih optimal pada layar besar.'
    },
    {
      q: '7. Apakah ISO 19011 Audit Assistant merupakan AI Tool tambahan?',
      a: 'ISO 19011 Audit Assistant AI 2026 adalah salah satu dari 5 AI Tools yang kami sertakan di dalam SMART Audit System dan menjadi highlight utama untuk membantu pemahaman panduan audit sistem manajemen.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-copilot" className="py-7 bg-white border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>FAQ PENGHILANG KERAGUAN</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            PERTANYAAN YANG SERING DIAJUKAN
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-gray-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3 text-left flex items-center justify-between gap-2 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-black text-gray-900 leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3 pb-3 pt-1 text-xs text-gray-700 leading-relaxed font-medium border-t border-gray-100 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
