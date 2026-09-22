import React from 'react';
import { 
  HelpCircle, 
  FileText, 
  SearchCheck, 
  Layers, 
  FileSpreadsheet, 
  Sparkles
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {

  const benefitsList = [
    {
      title: 'AI Pertanyaan Audit',
      benefit: 'Membantu Anda menyusun pertanyaan sehingga tidak bingung saat bertemu auditee.',
      icon: HelpCircle,
      color: 'bg-blue-600'
    },
    {
      title: 'AI Temuan Audit',
      benefit: 'Membantu Anda menyusun kalimat temuan dengan lebih jelas dan terstruktur.',
      icon: FileText,
      color: 'bg-indigo-600'
    },
    {
      title: 'AI Akar Masalah & Perbaikan',
      benefit: 'Membantu memahami penyebab masalah dan menentukan tindakan perbaikan yang tepat.',
      icon: SearchCheck,
      color: 'bg-cyan-700'
    },
    {
      title: 'Simulasi Audit',
      benefit: 'Membantu berlatih sebelum melakukan audit sebenarnya di lapangan.',
      icon: Layers,
      color: 'bg-amber-600'
    },
    {
      title: 'Form Audit Siap Pakai',
      benefit: 'Tidak perlu membuat format audit dari awal (langsung pakai Word & Excel).',
      icon: FileSpreadsheet,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section id="manfaat-fitur" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3 py-1 rounded-full text-[10px] font-extrabold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>MANFAAT NYATA UNTUK ANDA</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-tight">
            Bagaimana Setiap Alat Bantu Mempermudah Tugas Anda?
          </h2>
          <p className="text-xs text-gray-600 font-medium mt-1 max-w-sm mx-auto">
            Bukan sekadar fitur, tapi solusi praktis saat Anda menjalankan audit:
          </p>
        </div>

        {/* 5 Clear Benefit Cards */}
        <div className="space-y-2.5 mb-5">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-gray-200/90 rounded-xl p-3.5 shadow-2xs flex items-start gap-3"
              >
                <div className={`w-8 h-8 rounded-lg ${item.color} text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-xs text-gray-900 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-snug font-medium">
                    {item.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Note */}
        <div className="mt-3 bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 text-center">
          <p className="text-xs font-bold text-emerald-950 leading-relaxed">
            Semua alat bantu di atas dirancang untuk mendampingi Anda di setiap tahap pelaksanaan audit internal.
          </p>
        </div>
      </div>
    </section>
  );
};
