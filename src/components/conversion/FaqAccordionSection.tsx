import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqAccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      q: 'Kenapa tidak cukup menggunakan AI umum seperti ChatGPT saja?',
      a: 'AI umum tidak dirancang khusus untuk alur audit sistem manajemen. 5 AI Tools di SMART Audit System sudah diprogram dengan prompt arsitektur audit (ISO 9001:2015 & ISO 19011:2026), format matriks 5W+1H, struktur temuan PLOR, serta analisis 5-Why untuk CAPA sehingga langsung menghasilkan output terstruktur yang siap dipakai.',
    },
    {
      q: 'Apakah cocok untuk pemula yang belum pernah audit?',
      a: 'Sangat cocok. Anda dipandu langkah demi langkah mulai dari persiapan, penyusunan pertanyaan, pengumpulan evidence, perumusan temuan PLOR, hingga pembuatan laporan akhir tanpa harus bingung memulai dari file kosong.',
    },
    {
      q: 'Apakah hanya berupa materi video/e-course?',
      a: 'Tidak. E-course hanya salah satu pilar. Anda juga mendapatkan 7 worksheet Word & Excel siap edit, simulasi kasus audit interaktif, dan 5 AI Tools khusus termasuk AI GPT Co-Pilot ISO 19011:2026.',
    },
    {
      q: 'Apakah worksheet bisa diedit dan disesuaikan di kantor?',
      a: 'Ya, 100% bisa diedit. Format Word dan Excel dapat langsung Anda sesuaikan dengan format penomoran, logo, atau prosedur internal organisasi Anda.',
    },
    {
      q: 'Apakah AI menggantikan peran auditor internal?',
      a: 'Tidak. AI berfungsi sebagai Co-Pilot untuk mempercepat drafting checklist, menyusun kalimat temuan, dan memetakan alternatif akar masalah. Verifikasi bukti di lapangan dan keputusan audit final tetap berada di tangan auditor.',
    },
    {
      q: 'Bagaimana cara pemesanan dan cara mendapatkan link aksesnya?',
      a: 'Cukup klik tombol checkout untuk diarahkan ke halaman pemesanan resmi (https://smartbook.myscalev.com/smart-audit-system). Setelah menyelesaikan pengisian data dan pembayaran Rp97.000, link akses modul, worksheet, dan 5 AI Tools langsung dikirimkan secara instan dan otomatis ke WhatsApp serta email Anda.',
    },
    {
      q: 'Apakah ada biaya langganan bulanan?',
      a: 'Tidak ada. Cukup bayar satu kali (Rp97.000 promo saat ini) untuk mendapatkan akses seumur hidup sesuai ketentuan.',
    },
    {
      q: 'Apakah bisa diakses lewat smartphone/HP?',
      a: 'Ya, modul, audio, panduan, dan AI Co-Pilot bisa diakses langsung melalui browser smartphone maupun laptop. Untuk pengisian form kompleks seperti CAPA, disarankan menggunakan laptop/PC.',
    },
    {
      q: 'Bagaimana ketentuan garansi 7 hari?',
      a: 'Jika setelah mempelajari modul dan mencoba worksheet serta AI Tools Anda merasa sistem ini tidak memberikan manfaat bagi persiapan audit Anda, silakan ajukan klaim pengembalian dana dalam 7 hari sesuai ketentuan garansi.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-slate-50 py-8 px-4 sm:px-6 border-b border-gray-200">
      <div className="max-w-md mx-auto">
        
        {/* Headline */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-900 text-xs sm:text-sm font-black uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-4 h-4 text-blue-700 shrink-0" />
            <span>FAQ</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
            PERTANYAAN SERING DIAJUKAN
          </h2>
          <p className="text-[13px] sm:text-sm text-gray-600 font-medium mt-1">
            Jawaban lengkap seputar SMART Audit System &amp; AI Co-Pilot.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3.5 text-sm sm:text-[15px] font-bold text-gray-900 focus:outline-hidden cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-[13px] sm:text-sm text-gray-700 font-medium leading-relaxed border-t border-gray-100 bg-slate-50/50">
                    <p>{faq.a}</p>
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
