import React from 'react';

export const CleanAuditFlow: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Persiapan & Rencana Audit',
      desc: 'Menentukan jadwal, ruang lingkup, kriteria standar, dan dokumen acuan yang akan diaudit.',
    },
    {
      num: '2',
      title: 'Penyusunan Checklist & Pertanyaan',
      desc: 'Menyiapkan daftar periksa klausul dan susunan pertanyaan wawancara agar fokus dan terarah.',
    },
    {
      num: '3',
      title: 'Pengumpulan Bukti & Temuan PLOR',
      desc: 'Mengumpulkan bukti objektif dan mencatat temuan dengan format Problem, Location, Objective Evidence, Reference.',
    },
    {
      num: '4',
      title: 'Analisis Root Cause & CAPA',
      desc: 'Mengidentifikasi akar penyebab masalah dan menyusun koreksi serta tindakan korektif yang sesuai.',
    },
    {
      num: '5',
      title: 'Penerbitan Laporan Audit',
      desc: 'Merangkum hasil temuan dan rekomendasi ke dalam laporan resmi yang rapi untuk manajemen.',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-2">
          Alur Pembelajaran Audit
        </h2>
        <p className="text-[16px] sm:text-[17px] text-slate-600 font-medium leading-normal mb-7">
          Alur kerja bertahap yang memandu Anda dari awal hingga menghasilkan laporan audit yang rapi.
        </p>

        {/* 5 Linear Steps */}
        <div className="space-y-5">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-black text-[15px] flex items-center justify-center shrink-0 mt-0.5">
                {step.num}
              </div>
              <div>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-0.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[16px] text-slate-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
