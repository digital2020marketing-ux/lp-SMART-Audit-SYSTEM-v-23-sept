import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const ObjectionHandlingCopilot: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apa itu Bonus GPT Co-Pilot ISO 19011:2026 dan bagaimana cara menggunakannya?',
      a: 'GPT Co-Pilot ISO 19011:2026 adalah asisten AI pendamping yang dirancang khusus untuk memandu Anda memahami prinsip, tahapan, pendekatan, dan etika audit berdasarkan standar panduan audit ISO 19011. Anda bisa langsung bertanya seputar situasi audit, cara merumuskan pertanyaan, hingga pendekatan terhadap auditee tanpa harus membaca standar ratusan halaman dari nol.'
    },
    {
      q: 'Saya belum pernah melakukan audit sama sekali. Apakah bisa mengikuti?',
      a: 'Sangat bisa. SMART Audit System dirancang khusus dari sudut pandang pemula. Mulai dari alur persiapan, pembuatan checklist 5W+1H, formulasi temuan PLOR, sampai pembuatan laporan audit internal.'
    },
    {
      q: 'Saya bukan orang Quality / QA. Apakah tetap bisa jadi auditor internal?',
      a: 'Bisa. Di dunia industri dan organisasi, auditor internal justru sering ditugaskan lintas departemen (Produksi, Maintenance, Warehouse, HR, Purchasing, HSE, dll). Sistem ini memberikan panduan terarah agar Anda percaya diri mengaudit proses apapun.'
    },
    {
      q: 'Apakah AI akan mengambil alih keputusan audit saya?',
      a: 'Tidak. AI Tools dan GPT Co-Pilot berfungsi murni sebagai alat bantu drafting (membuat draft pertanyaan, merapikan narasi temuan PLOR, dan menelusuri kemungkinan akar masalah). Kesimpulan dan keputusan audit tetap 100% berada pada auditor berdasarkan bukti objektif yang Anda temukan di lapangan.'
    },
    {
      q: 'Apakah worksheet format Word & Excel bisa langsung diedit?',
      a: 'Ya. Seluruh 7 worksheet Word (.docx) dan Excel (.xlsx) siap pakai, dapat diunduh langsung, dan 100% bisa diedit serta disesuaikan dengan logo dan nama instansi/perusahaan Anda.'
    },
    {
      q: 'Apakah ada biaya langganan bulanan?',
      a: 'Tidak ada. Pembayaran Rp97.000 adalah sekali bayar untuk akses seumur hidup (lifetime access), termasuk seluruh modul, worksheet, 5 AI tools, dan Bonus GPT Co-Pilot ISO 19011:2026.'
    },
    {
      q: 'Bagaimana ketentuan garansi 7 hari bekerja?',
      a: 'Anda memiliki jaminan garansi 100% uang kembali selama 7 hari sejak tanggal pembelian. Jika materi dan sistem tidak sesuai dengan penjelasan yang ada di landing page ini, Anda dapat mengajukan refund langsung ke tim support kami.'
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
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800 shrink-0" />
            <span>OBJECTION HANDLING & FAQ</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            HAL YANG SERING DITANYAKAN AUDITOR PEMULA
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-md mx-auto">
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
                  className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-hidden"
                >
                  <span className="font-extrabold text-sm sm:text-base text-gray-900 leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-900 text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-2 text-xs sm:text-sm text-gray-800 leading-relaxed font-normal border-t border-blue-100 bg-white/70">
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
