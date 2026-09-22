import React from 'react';
import { BookOpen, FileSpreadsheet, Target, Bot, Infinity, CheckCircle2 } from 'lucide-react';

export const ValueStackSection: React.FC = () => {
  const stackItems = [
    {
      icon: BookOpen,
      title: '📚 9 MODUL PEMBELAJARAN',
      desc: 'Belajar audit internal bertahap dari pemahaman klausul ISO 9001 hingga pelaporan ke manajemen.',
      badge: 'Slide, mind map, pre/post-test & audio',
      color: 'border-blue-200',
      iconBg: 'bg-blue-900 text-white'
    },
    {
      icon: FileSpreadsheet,
      title: '📝 7 WORKSHEET AUDIT',
      desc: 'Berlatih menggunakan dokumen kerja resmi (Word & Excel 100% siap edit tanpa proteksi).',
      badge: 'Program, Jadwal, Checklist, PTKP, CAPA',
      color: 'border-emerald-200',
      iconBg: 'bg-emerald-800 text-white'
    },
    {
      icon: Target,
      title: '🎯 SIMULASI PROSES AUDIT',
      desc: 'Memahami penerapan audit melalui alur simulasi studi kasus dari observasi hingga perumusan tindakan.',
      badge: 'Melihat cara audit dilakukan di lapangan',
      color: 'border-amber-200',
      iconBg: 'bg-amber-800 text-white'
    },
    {
      icon: Bot,
      title: '🤖 5 AI TOOLS AUDIT',
      desc: 'Membantu proses belajar & praktik: generator pertanyaan 5W+1H, bukti objektif, PLOR, dan 5-Why & CAPA.',
      badge: 'Alat bantu pintar mempercepat administrasi',
      color: 'border-indigo-200',
      iconBg: 'bg-indigo-800 text-white'
    },
    {
      icon: Infinity,
      title: '♾️ AKSES SEUMUR HIDUP',
      desc: 'Pelajari kembali materi dan gunakan seluruh tools kapan saja Anda ditugaskan menjadi auditor.',
      badge: 'Sekali bayar, tanpa langganan',
      color: 'border-purple-200',
      iconBg: 'bg-purple-800 text-white'
    }
  ];

  return (
    <section id="isi-program" className="py-10 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
            RINGKASAN TOTAL NILAI
          </span>
          <h2 className="text-xl font-black text-gray-900 tracking-tight mt-2 leading-tight">
            SATU AKSES, LENGKAP UNTUK BELAJAR & PRAKTIK AUDIT
          </h2>
          <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
            Seluruh kebutuhan dasar auditor pemula dikemas dalam satu ekosistem terpadu.
          </p>
        </div>

        {/* Stack items */}
        <div className="space-y-3">
          {stackItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl p-4 shadow-xs bg-white ${item.color}`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`w-7 h-7 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-black text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] text-gray-700 leading-relaxed mb-2">
                  {item.desc}
                </p>
                <span className="inline-block text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">
                  {item.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
