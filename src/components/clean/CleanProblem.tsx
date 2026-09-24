import React from 'react';

export const CleanProblem: React.FC = () => {
  const painQuotes = [
    {
      q: '“Saya harus mulai dari mana?”',
      sub: 'Mau audit besok tapi bingung langkah pembukanya',
    },
    {
      q: '“Pertanyaan apa yang harus saya tanyakan ke auditee?”',
      sub: 'Takut kehabisan bahan tanya atau salah arah',
    },
    {
      q: '“Evidence apa yang harus saya minta?”',
      sub: 'Bingung dokumen & bukti konkret apa yang sah',
    },
    {
      q: '“Ini termasuk temuan atau bukan?”',
      sub: 'Ragu mengkategorikan Minor, Major, atau OFI',
    },
    {
      q: '“Bagaimana menulis temuan supaya objektif dan nyambung dengan klausul?”',
      sub: 'Takut rumusan temuan dibantah oleh auditee',
    },
    {
      q: '“Sudah menemukan masalah... terus CAPA-nya bagaimana?”',
      sub: 'Bingung merumuskan root cause 5-Why dan koreksinya',
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <span className="text-[11.5px] font-extrabold uppercase tracking-wider text-red-600 block mb-1">
          PROBLEM / KENDALA LAPANGAN
        </span>

        {/* Section Heading */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-tight mb-3">
          Kalau Kamu Pernah Mengalami Ini Saat Mau Audit...
        </h2>

        {/* Scenario Hook */}
        <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/90 mb-4">
          <p className="text-[15.5px] text-amber-950 font-black leading-snug">
            Besok jadwal audit sudah mulai.
          </p>
          <p className="text-[14px] text-amber-900 font-medium mt-0.5">
            Tapi di kepala masih muncul pertanyaan:
          </p>
        </div>

        {/* Scannable Conversation / Thought Cards */}
        <div className="space-y-2.5 mb-5">
          {painQuotes.map((item, idx) => (
            <div
              key={idx}
              className="relative p-3 sm:p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-colors"
            >
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-[13px] shrink-0 mt-0.5">
                  💭
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14.5px] sm:text-[15.5px] text-slate-950 font-bold leading-snug italic">
                    {item.q}
                  </p>
                  <p className="text-[12px] text-slate-500 font-medium mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agitation & Realization */}
        <div className="space-y-2.5 pt-3 border-t border-slate-100 text-[14.5px] sm:text-[15.5px] leading-relaxed">
          <p className="text-slate-800 font-semibold">
            Masalahnya sering kali bukan karena kamu belum membaca standar.
          </p>
          <p className="text-slate-700 font-medium">
            Tapi karena <strong className="text-slate-950 font-bold">memahami klausul</strong> dan <strong className="text-slate-950 font-bold">mengeksekusi audit di lapangan</strong> adalah dua hal yang berbeda.
          </p>
          <p className="text-slate-700 font-medium">
            Dan ketika belum punya alur kerja yang jelas, persiapan audit yang seharusnya sederhana bisa terasa membingungkan.
          </p>
        </div>
      </div>
    </section>
  );
};
