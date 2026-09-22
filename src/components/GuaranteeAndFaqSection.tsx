import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const GuaranteeAndFaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Apakah cocok untuk pemula?',
      answer: 'Ya. Materi disusun secara bertahap mulai dari pemahaman dasar, membuat pertanyaan, memeriksa bukti, hingga membuat laporan dan tindakan perbaikan.'
    },
    {
      question: 'Apakah harus bekerja di bagian Quality?',
      answer: 'Tidak. Tim audit internal perusahaan dapat melibatkan berbagai bagian seperti Produksi, PPIC, Warehouse, Purchasing, Engineering, HSE, dan departemen lainnya.'
    },
    {
      question: 'Apakah ada contoh praktik?',
      answer: 'Ya. Tersedia simulasi alur audit interaktif, contoh kasus nyata, serta 7 lembar kerja dan format audit siap pakai (Word & Excel).'
    },
    {
      question: 'Apakah ada bantuan AI?',
      answer: 'Ya. Tersedia alat bantu AI khusus untuk merumuskan pertanyaan wawancara, menyusun temuan audit, mencari akar masalah 5-Why, dan rekomendasi tindakan perbaikan.'
    },
    {
      question: 'Apakah AI menggantikan auditor?',
      answer: 'Tidak. AI hanya berfungsi sebagai alat bantu kerja. Keputusan audit dan verifikasi tetap dilakukan oleh Anda sebagai auditor berdasarkan bukti objektif di lapangan.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  const handleFinalCtaClick = () => {
    trackCheckoutClick('final_closing_cta', 'Final Section - MULAI BELAJAR AUDIT INTERNAL SEKARANG — Rp249.000');
  };

  return (
    <section id="faq-dan-penutup" className="py-8 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        
        {/* 1. FAQ Section */}
        <div className="mb-8">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-[10px] font-extrabold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-blue-800 shrink-0" />
              <span>PERTANYAAN YANG SERING DIAJUKAN</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-tight">
              Tanya Jawab Seputar Program
            </h2>
            <p className="text-xs text-gray-600 font-medium mt-1">
              Jawaban singkat untuk hal-hal yang sering ditanyakan:
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-2.5 font-bold text-xs text-gray-900 hover:text-blue-900 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-900' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 pt-0 text-xs text-gray-700 leading-relaxed border-t border-gray-100 font-medium bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Strong Closing Section */}
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-3xl p-5 sm:p-6 text-center shadow-xl relative overflow-hidden">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span>AMBIL KESEMPATAN SEKARANG</span>
          </div>

          {/* Strong Closing Headline */}
          <h2 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug mb-2.5 max-w-xs sm:max-w-md mx-auto">
            JANGAN TUNGGU DITUNJUK JADI AUDITOR BARU MULAI BELAJAR
          </h2>

          {/* Description */}
          <p className="text-xs text-blue-100 leading-relaxed font-medium mb-5 max-w-sm mx-auto">
            Pelajari alur dan teknik audit internal sekarang, sehingga Anda sudah siap dan percaya diri kapan pun ditugaskan menjadi tim audit.
          </p>

          {/* Big CTA Button */}
          <a
            id="final-closing-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFinalCtaClick}
            className="w-full max-w-sm mx-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-4 px-5 rounded-xl font-black text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer min-h-[50px] mb-3 leading-tight"
          >
            <span>KLIK DISINI UNTUK DAFTAR SEKARANG — Rp249.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Guarantee & Lifetime Note */}
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-blue-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Sekali Bayar • Akses Seumur Hidup • Garansi 100% Uang Kembali</span>
          </div>
        </div>

      </div>
    </section>
  );
};
