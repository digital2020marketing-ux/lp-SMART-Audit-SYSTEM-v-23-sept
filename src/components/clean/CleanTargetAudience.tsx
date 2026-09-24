import React from 'react';

export const CleanTargetAudience: React.FC = () => {
  const audiences = [
    {
      title: 'Auditor Internal Pemula',
      desc: 'Baru pertama mendapat tugas audit dan membutuhkan panduan langkah demi langkah.',
    },
    {
      title: 'Staff QA/QC & Tim Mutu',
      desc: 'Ingin proses persiapan dan dokumentasi audit lebih terstruktur.',
    },
    {
      title: 'Auditor Internal yang Baru Ditunjuk',
      desc: 'Sudah memahami dasar ISO, tapi masih bingung menerapkannya saat audit.',
    },
    {
      title: 'Koordinator / Praktisi Sistem Manajemen',
      desc: 'Membutuhkan worksheet dan instrumen yang bisa disesuaikan dengan kebutuhan organisasi.',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-blue-900 block mb-1.5">
          TARGET PENGGUNA
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-6">
          SMART AUDIT SYSTEM Cocok Buat Siapa?
        </h2>

        {/* 4 Audience Cards */}
        <div className="space-y-3.5 mb-6">
          {audiences.map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200/90">
              <h3 className="text-[16.5px] sm:text-[17.5px] font-black text-slate-900 mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-slate-700 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Positioning & Credibility Filter Box */}
        <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300/80 text-amber-950">
          <div className="flex items-center gap-2 mb-1 text-[13px] font-black tracking-wider uppercase text-amber-900">
            <span>⚠️</span>
            <span>CATATAN PENTING &amp; TRANSPARANSI</span>
          </div>
          <p className="text-[14px] sm:text-[14.5px] font-medium leading-relaxed">
            SMART AUDIT SYSTEM bukan pengganti kompetensi, pelatihan, atau sertifikasi auditor. Sistem ini dirancang sebagai panduan dan instrumen kerja untuk membantu proses belajar dan praktik audit internal.
          </p>
        </div>
      </div>
    </section>
  );
};
