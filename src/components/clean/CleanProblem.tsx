import React from 'react';

export const CleanProblem: React.FC = () => {
  const painQuotes = [
    '“Saya harus mulai dari mana?”',
    '“Pertanyaan apa yang harus saya tanyakan ke auditee?”',
    '“Evidence apa yang harus saya minta?”',
    '“Ini termasuk temuan atau bukan?”',
    '“Bagaimana menulis temuan supaya objektif dan nyambung dengan klausul?”',
    '“Sudah menemukan masalah... terus CAPA-nya bagaimana?”',
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[12px] font-extrabold uppercase tracking-wider text-red-600 block mb-1.5">
          PROBLEM / KENDALA LAPANGAN
        </span>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[29px] font-black text-slate-900 leading-tight mb-4">
          Kalau Kamu Pernah Mengalami Ini Saat Mau Audit...
        </h2>

        {/* Scenario Hook */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 mb-5">
          <p className="text-[16px] text-amber-950 font-bold leading-snug">
            Besok jadwal audit sudah mulai.
          </p>
          <p className="text-[15px] text-slate-700 font-medium mt-1">
            Tapi di kepala masih muncul pertanyaan:
          </p>
        </div>

        {/* 6 Inner Monologue Quotes */}
        <div className="space-y-2.5 mb-6">
          {painQuotes.map((quote, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80"
            >
              <span className="text-amber-500 font-bold text-[18px] leading-none shrink-0 mt-0.5">💬</span>
              <p className="text-[15px] sm:text-[15.5px] text-slate-800 font-semibold italic leading-snug">
                {quote}
              </p>
            </div>
          ))}
        </div>

        {/* Agitation & Realization */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <p className="text-[15.5px] sm:text-[16px] text-slate-800 font-semibold leading-relaxed">
            Masalahnya sering kali bukan karena kamu belum membaca standar.
          </p>
          <p className="text-[15.5px] sm:text-[16px] text-slate-700 font-medium leading-relaxed">
            Tapi karena <strong className="text-slate-950 font-bold">memahami klausul</strong> dan <strong className="text-slate-950 font-bold">mengeksekusi audit di lapangan</strong> adalah dua hal yang berbeda.
          </p>
          <p className="text-[15.5px] sm:text-[16px] text-slate-700 font-medium leading-relaxed">
            Dan ketika belum punya alur kerja yang jelas, persiapan audit yang seharusnya sederhana bisa terasa membingungkan.
          </p>
        </div>
      </div>
    </section>
  );
};
