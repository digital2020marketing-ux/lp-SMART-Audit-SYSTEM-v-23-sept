import React, { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

export const CleanFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Pertanyaan pertama terbuka default

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs: FaqItem[] = [
    {
      q: 'Apakah SMART AUDIT SYSTEM merupakan sertifikasi auditor?',
      a: 'Bukan. SMART AUDIT SYSTEM adalah sistem kerja, panduan terapan, dan instrumen operasional untuk membantu auditor internal menjalankan audit di lapangan. Ini bukan sertifikasi bergelar.',
    },
    {
      q: 'Apakah template bisa langsung diedit dan disesuaikan?',
      a: 'Ya, seluruh template disediakan dalam format Word (.docx) dan Excel (.xlsx) yang dapat langsung diedit sesuai proses bisnis dan prosedur perusahaan Anda.',
    },
    {
      q: 'Apakah materi ini cocok untuk pemula yang baru pertama kali mengaudit?',
      a: 'Sangat cocok. Panduan ini dirancang dari tahap awal persiapan, teknik interview, cara memeriksa evidence, hingga penulisan temuan PLOR dan laporan resmi dengan bahasa terapan yang mudah dipahami.',
    },
    {
      q: 'Apakah ada biaya langganan bulanan?',
      a: 'Tidak ada. Pembayaran Rp99.000 dilakukan satu kali saja untuk akses seumur hidup (lifetime access) tanpa biaya tersembunyi.',
    },
    {
      q: 'Apakah AI Tools memerlukan langganan AI berbayar?',
      a: 'Tidak. Framework prompt AI yang kami sediakan dapat langsung digunakan di akun ChatGPT versi gratis tanpa perlu upgrade ke langganan berbayar.',
    },
    {
      q: 'Bagaimana cara mengakses materinya setelah pembayaran?',
      a: 'Akses instan langsung dikirimkan ke email dan nomor WhatsApp Anda segera setelah konfirmasi pembayaran berhasil.',
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
          FREQUENTLY ASKED QUESTIONS
        </span>

        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-tight mb-5">
          Pertanyaan yang Sering Diajukan
        </h2>

        {/* Accordion List — User Klik Pertanyaan → Jawaban Terbuka */}
        <div className="space-y-2.5">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-slate-50 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full bg-slate-200/80 text-slate-700 flex items-center justify-center text-[16px] font-black shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-blue-900' : ''
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 text-[13.5px] sm:text-[14px] text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-2.5">
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
