import React from 'react';

export const CleanCostComparison: React.FC = () => {
  const comparisonItems = [
    {
      trigger: 'Saat butuh menyusun checklist',
      action: 'buka templatenya.',
      icon: '📋',
    },
    {
      trigger: 'Saat bingung menyusun pertanyaan',
      action: 'gunakan panduannya.',
      icon: '❓',
    },
    {
      trigger: 'Saat harus menulis temuan',
      action: 'buka format PLOR.',
      icon: '📝',
    },
    {
      trigger: 'Saat menyusun tindakan korektif',
      action: 'gunakan worksheet root cause & CAPA.',
      icon: '🔍',
    },
    {
      trigger: 'Saat butuh membuat draf lebih cepat',
      action: 'gunakan AI Tools.',
      icon: '⚡',
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1.5">
          HANDLING OBJECTION
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-3">
          Coba Bandingkan...
        </h2>

        {/* Reassurance text */}
        <p className="text-[15.5px] sm:text-[16px] text-slate-700 font-medium leading-relaxed mb-4">
          <strong className="text-slate-950 font-bold">Rp99.000</strong> bukan sekadar untuk mendapatkan materi yang kemudian tersimpan dan tidak pernah dibuka.
        </p>

        <p className="text-[15.5px] sm:text-[16px] text-slate-800 font-semibold leading-relaxed mb-6">
          Kamu mendapatkan sistem + worksheet + tools yang dirancang untuk membantu saat belajar dan mempersiapkan audit.
        </p>

        {/* Action Triggers List */}
        <div className="space-y-3 mb-6">
          {comparisonItems.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3"
            >
              <span className="text-[20px] leading-none shrink-0 mt-0.5">{item.icon}</span>
              <p className="text-[15px] sm:text-[15.5px] text-slate-800 leading-snug">
                <span className="font-semibold text-slate-700">{item.trigger}</span>
                {' → '}
                <strong className="text-blue-900 font-black">{item.action}</strong>
              </p>
            </div>
          ))}
        </div>

        {/* Core Objective Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white">
          <p className="text-[13px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Tujuannya sederhana:
          </p>
          <p className="text-[15.5px] sm:text-[16.5px] font-semibold text-slate-100 leading-relaxed">
            supaya setiap kali menghadapi audit, kamu tidak harus kembali memulai semuanya dari halaman kosong.
          </p>
        </div>
      </div>
    </section>
  );
};
