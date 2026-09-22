import React from 'react';

export const CleanFaq: React.FC = () => {
  const faqs = [
    {
      q: 'Apakah materi ini cocok untuk pemula yang belum pernah mengaudit?',
      a: 'Sangat cocok. Panduan disusun sistematis dari persiapan, cara wawancara, hingga penulisan laporan dengan bahasa praktis tanpa teori berbelit-belit.',
    },
    {
      q: 'Apakah ada biaya langganan bulanan?',
      a: 'Tidak. Pembayaran hanya satu kali dan Anda mendapatkan akses seumur hidup.',
    },
    {
      q: 'Format file apa saja yang disediakan?',
      a: 'Worksheet tersedia dalam format Microsoft Word dan Excel yang dapat diedit.',
    },
    {
      q: 'Apakah AI Tools memerlukan aplikasi berbayar?',
      a: 'AI Tools digunakan sebagai panduan atau framework penyusunan draf. Pengguna memerlukan akses ke platform AI yang kompatibel. Biaya platform AI, jika ada, tidak termasuk dalam pembelian.',
    },
    {
      q: 'Bagaimana cara mengakses materi?',
      a: 'Setelah pembayaran berhasil, link akses dikirimkan secara otomatis ke email yang digunakan saat checkout.',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-2">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-[16px] sm:text-[17px] text-slate-600 font-medium leading-normal mb-7">
          Informasi ringkas seputar materi, format file, dan cara akses.
        </p>

        {/* FAQ Items - Clean Open Cards for 100% Visibility on Mobile */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-4"
            >
              <h3 className="text-slate-900 font-bold text-[17px] leading-snug mb-2">
                {item.q}
              </h3>
              <p className="text-[16px] text-slate-700 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
