import React from 'react';

export const CleanTargetAudience: React.FC = () => {
  const audiences = [
    {
      title: 'Auditor Internal Pemula',
      desc: 'Baru pertama kali bertugas dan ingin panduan langkah demi langkah yang jelas dan mudah dipahami.',
    },
    {
      title: 'Auditor Internal yang Baru Ditunjuk',
      desc: 'Diberi tugas mengaudit proses lain dalam waktu dekat tanpa sempat mengikuti pelatihan berhari-hari.',
    },
    {
      title: 'Tim Manajemen Mutu & QA',
      desc: 'Membutuhkan standarisasi instrumen audit organisasi agar seluruh tim bekerja dengan format seragam.',
    },
    {
      title: 'Praktisi & Koordinator Standar',
      desc: 'Memerlukan template worksheet siap pakai dan bantuan AI untuk mempercepat pembuatan draf dokumen audit.',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-2">
          Siapa yang Membutuhkan Sistem Ini?
        </h2>
        <p className="text-[16px] sm:text-[17px] text-slate-600 font-medium leading-normal mb-7">
          Dirancang praktis untuk Anda yang membutuhkan panduan operasional tanpa teori bertele-tele.
        </p>

        {/* 4 Audience Items */}
        <div className="space-y-4">
          {audiences.map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="text-[16px] text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
