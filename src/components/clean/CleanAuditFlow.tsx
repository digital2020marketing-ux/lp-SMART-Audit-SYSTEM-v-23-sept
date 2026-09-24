import React from 'react';

export const CleanAuditFlow: React.FC = () => {
  const benefits = [
    {
      num: '01',
      title: 'Lebih Jelas Memulai Audit',
      desc: 'Punya alur untuk menentukan ruang lingkup, jadwal, kriteria, dan dokumen yang perlu dipersiapkan.',
    },
    {
      num: '02',
      title: 'Tidak Bingung Menyiapkan Pertanyaan',
      desc: 'Gunakan checklist dan panduan pertanyaan untuk membantu proses wawancara lebih terarah.',
    },
    {
      num: '03',
      title: 'Lebih Terarah Saat Mengecek Evidence',
      desc: 'Pahami apa yang perlu diverifikasi dan bagaimana menghubungkannya dengan kriteria audit.',
    },
    {
      num: '04',
      title: 'Lebih Mudah Menyusun Temuan & CAPA',
      desc: 'Gunakan format PLOR, root cause, dan CAPA agar dokumentasi audit lebih sistematis.',
    },
    {
      num: '05',
      title: 'Lebih Cepat Menyusun Laporan',
      desc: 'Tidak perlu terus-menerus membuat format kerja dari halaman kosong.',
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-10 sm:py-12 px-5 border-b border-slate-200/90">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-1.5">
          MANFAAT UTAMA
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-6">
          Yang Akan Kamu Dapatkan dari SMART AUDIT SYSTEM
        </h2>

        {/* 5 Numbered Benefits */}
        <div className="space-y-4 mb-6">
          {benefits.map((item) => (
            <div
              key={item.num}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5"
            >
              <span className="text-[18px] sm:text-[20px] font-black text-blue-900 leading-none shrink-0 pt-0.5 font-mono">
                {item.num}
              </span>
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-black text-slate-900 leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Transformation Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-950 text-white text-center">
          <p className="text-[13px] font-bold uppercase tracking-wider text-blue-200 mb-1">
            Intinya:
          </p>
          <div className="text-[16px] sm:text-[17px] font-medium leading-relaxed">
            Dari <span className="text-red-300 font-bold">“Saya harus ngapain?”</span>
            <br />
            menjadi <span className="text-amber-300 font-black">“Saya tahu langkah berikutnya.”</span>
          </div>
        </div>
      </div>
    </section>
  );
};
