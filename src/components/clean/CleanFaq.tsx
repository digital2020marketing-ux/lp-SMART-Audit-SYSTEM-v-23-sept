import React from 'react';

export const CleanFaq: React.FC = () => {
  const faqs = [
    {
      q: 'Apakah SMART AUDIT SYSTEM merupakan sertifikasi auditor?',
      a: 'Tidak. SMART AUDIT SYSTEM adalah panduan dan instrumen pembelajaran/praktik audit internal. Produk ini bukan program sertifikasi auditor.',
    },
    {
      q: 'Apakah template bisa langsung digunakan tanpa penyesuaian?',
      a: 'Template disediakan dalam format yang dapat diedit sehingga dapat disesuaikan dengan ruang lingkup, proses, prosedur, dan kebutuhan organisasi masing-masing.',
    },
    {
      q: 'Apakah materi ini cocok untuk pemula yang belum pernah mengaudit?',
      a: 'Ya, sangat cocok. Panduan disusun sistematis dari persiapan, cara wawancara, verifikasi bukti, hingga penulisan laporan dengan bahasa praktis tanpa teori berbelit-belit.',
    },
    {
      q: 'Apakah ada biaya langganan bulanan?',
      a: 'Tidak. Pembayaran hanya satu kali (Rp99.000) dan Anda mendapatkan akses seumur hidup tanpa tagihan berulang.',
    },
    {
      q: 'Format file apa saja yang disediakan?',
      a: 'Worksheet dan instrumen audit tersedia dalam format Microsoft Word (.docx) dan Excel (.xlsx) yang siap diedit sesuai kebutuhan organisasi.',
    },
    {
      q: 'Apakah AI Tools memerlukan aplikasi berbayar?',
      a: 'AI Tools digunakan sebagai panduan atau framework prompt penyusunan draf. Pengguna dapat menjalankannya di platform AI gratis (seperti ChatGPT versi gratis). Biaya platform pihak ketiga jika ingin berlangganan tidak termasuk dalam paket ini.',
    },
    {
      q: 'Bagaimana cara mengakses materi setelah pembayaran?',
      a: 'Setelah pembayaran diverifikasi secara otomatis, link akses instan ke seluruh materi, modul, worksheet, dan tools langsung dikirimkan ke email dan nomor WhatsApp yang dimasukkan saat checkout.',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1.5">
          FREQUENTLY ASKED QUESTIONS
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>

        {/* FAQ Items - Clean Open Cards */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4"
            >
              <h3 className="text-slate-900 font-bold text-[16px] leading-snug mb-2 flex items-start gap-2">
                <span className="text-blue-900 font-black shrink-0">Q:</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-[14.5px] text-slate-700 leading-relaxed font-medium pl-6">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
