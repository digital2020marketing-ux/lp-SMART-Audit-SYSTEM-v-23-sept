import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Cpu, 
  Lock, 
  Zap 
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const FinalClosingCopilot: React.FC = () => {
  const handleFinalCtaClick = () => {
    trackCheckoutClick('final_closing_copilot', 'Final Closing - DAPATKAN SMART AUDIT SYSTEM — Rp97.000');
  };

  const packageItems = [
    'SMART Audit System Platform',
    '9 Modul Panduan Audit',
    '7 Worksheet Word & Excel',
    'Simulasi Praktik Audit',
    'AI Checklist & Simulation',
    'AI PLOR Generator',
    'CAPA Generator PTKP',
    'AI Asisten AMI-GPT 2026',
    'ISO 19011 Audit Assistant AI 2026 / GPT Co-Pilot',
    'Ebook + Audio',
    'Pre-Test & Post-Test',
    'Support Penggunaan',
    'Akses Seumur Hidup',
  ];

  return (
    <section id="final-offer-copilot" className="py-8 bg-slate-900 border-b border-gray-800 text-white">
      <div className="w-full px-4 max-w-md mx-auto text-center">
        {/* Headline Section 11 */}
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight mb-2">
          AUDIT SUDAH SEMAKIN DEKAT?<br />
          <span className="text-red-500">JANGAN KEMBALI MEMULAI DARI FILE KOSONG.</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-4">
          Gunakan SMART Audit System sebagai starting point terstruktur untuk membantu Anda dari persiapan sampai dokumentasi hasil audit.
        </p>

        {/* Package Checklist Box */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-left shadow-lg mb-4">
          <p className="text-xs font-black uppercase text-amber-400 tracking-wider mb-2.5">
            RANGKUMAN ISI PAKET:
          </p>

          <div className="space-y-2 mb-3.5">
            {packageItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-xs font-bold text-slate-200 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Kotak Penegas 5 AI Powered Tools */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/60 rounded-xl p-3 flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-left">
              <span className="text-xs font-black text-amber-300 tracking-wide uppercase">
                5 AI POWERED AUDIT TOOLS TERMASUK DALAM PAKET
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Offer */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 mb-4">
          <div className="text-xs text-slate-400 font-semibold mb-0.5">
            Harga Normal <span className="line-through font-bold">Rp249.000</span>
          </div>
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="text-xs font-black text-red-400 uppercase">HARI INI</span>
            <span className="text-3xl sm:text-4xl font-black text-red-500 tracking-tight">
              Rp97.000
            </span>
          </div>
          <p className="text-xs font-bold text-slate-300">
            Sekali Bayar • Tidak Ada Biaya Bulanan
          </p>
        </div>

        {/* Big CTA */}
        <div className="mb-2">
          <a
            id="final-offer-cta-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFinalCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-4 px-4 rounded-xl font-black text-xs sm:text-sm shadow-xl shadow-red-600/30 transition-all cursor-pointer min-h-[50px] leading-tight text-center"
          >
            <span>DAPATKAN SMART AUDIT SYSTEM — Rp97.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Micro-copy below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-3 text-[11px] font-semibold text-slate-300">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Checkout Aman</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Akses Otomatis Setelah Pembayaran Berhasil</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garansi 7 Hari Sesuai Ketentuan</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
