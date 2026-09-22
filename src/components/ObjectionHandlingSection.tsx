import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

export const ObjectionHandlingSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Saya belum pernah melakukan audit sama sekali. Apakah bisa mengikuti?',
      a: 'Bisa. Sistem disusun dari dasar dan diarahkan khusus untuk auditor pemula, mulai dari alur persiapan, pembuatan checklist, perumusan pertanyaan, hingga pembuatan laporan.'
    },
    {
      q: 'Saya bukan orang Quality. Apakah tetap bisa?',
      a: 'Bisa. Auditor internal bisa berasal dari berbagai fungsi (Produksi, PPIC, Warehouse, Purchasing, Engineering, HR, HSE, dll) selama ditugaskan perusahaan dan memahami proses yang diaudit.'
    },
    {
      q: 'Apakah AI akan mengambil keputusan audit untuk saya?',
      a: 'Tidak. AI hanya digunakan sebagai alat bantu untuk menyusun draft pertanyaan, merapikan kalimat temuan PLOR, dan mengeksplorasi kemungkinan akar masalah. Keputusan dan penilaian audit tetap 100% berada di tangan Anda sebagai auditor.'
    },
    {
      q: 'Apakah worksheet bisa diedit?',
      a: 'Ya. Seluruh file Word (.docx) dan Excel (.xlsx) 100% dapat diedit, diunduh, dan disesuaikan langsung dengan logo serta format operasional perusahaan Anda.'
    },
    {
      q: 'Apakah ada biaya bulanan?',
      a: 'Tidak. Akses berlaku seumur hidup (lifetime access) hanya dengan sekali bayar, tanpa biaya langganan bulanan maupun biaya tersembunyi lainnya.'
    },
    {
      q: 'Bagaimana garansi uang kembali bekerja?',
      a: 'Anda memiliki waktu 7 hari sejak pembelian untuk mencoba dan mempelajari SMART Audit System. Jika produk tidak sesuai dengan yang dijanjikan, Anda dapat menghubungi CS untuk mengajukan refund sesuai syarat dan ketentuan garansi yang berlaku.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1 rounded-full text-[10px] font-extrabold mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>PERTANYAAN SERING DIAJUKAN</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            HAL YANG SERING DITANYAKAN AUDITOR PEMULA
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 max-w-md mx-auto">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-blue-900 bg-blue-50/20 shadow-xs' : 'border-gray-200 bg-slate-50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-2.5 focus:outline-hidden"
                >
                  <span className="font-extrabold text-xs sm:text-sm text-gray-900 leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-900 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 text-xs text-gray-700 leading-relaxed font-normal border-t border-blue-100 bg-white/70">
                    <p>{item.a}</p>
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
