import React from 'react';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Sparkles,
  Lock,
  CreditCard,
  Zap
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const PricingOffer: React.FC = () => {
  const handlePricingCtaClick = () => {
    trackCheckoutClick('pricing_cta_main', 'Pricing Offer - DAPATKAN PROMO SEPTEMBER — Rp97.000');
  };

  const stackItems = [
    'SMART Audit System Platform',
    '9 Modul Panduan Audit ISO 9001 & ISO 19011',
    '7 Worksheet Word & Excel Siap Edit',
    'Simulasi Praktik Audit',
    '5 AI Tools: Pertanyaan, PLOR, 5-Why & CAPA',
    'Ebook Ringkasan Audit',
    'Podcast / Audio Pendalaman',
    'Pre-Test & Post-Test',
    'AI Assistant',
    'Support Penggunaan Setelah Pembelian',
    'Akses Seumur Hidup',
    'Garansi 100% Uang Kembali 7 Hari',
  ];

  return (
    <section id="penawaran-harga" className="py-8 bg-slate-100 border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>PROMO KHUSUS SEPTEMBER</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            DAPATKAN SMART AUDIT SYSTEM DAN JANGAN MULAI AUDIT DARI NOL
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="bg-white border-2 border-red-600 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden max-w-md mx-auto">
          {/* Top Banner Tag */}
          <div className="bg-red-600 text-white text-center py-1.5 -mx-6 -mt-6 mb-5 font-black text-[11px] tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>PROMO SEPTEMBER — HANYA BEBERAPA HARI</span>
          </div>

          {/* Pricing Display */}
          <div className="text-center mb-5 pb-4 border-b border-gray-100">
            <div className="text-xs text-gray-500 font-semibold mb-1">
              Harga Normal: <span className="line-through font-bold">Rp249.000</span>
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-xs font-black text-red-600 uppercase tracking-wider">Sekarang:</span>
              <span className="text-4xl sm:text-5xl font-black text-red-600 tracking-tight">
                Rp97.000
              </span>
            </div>
            <p className="text-[11px] font-extrabold text-emerald-700 mt-1.5">
              Sekali Bayar • Akses Seumur Hidup • Support Setelah Pembelian • Garansi 7 Hari
            </p>
            <div className="mt-2.5 p-2 bg-amber-50 border border-amber-200/80 rounded-xl">
              <p className="text-[10px] text-gray-700 font-medium leading-snug">
                Promo ini merupakan penawaran khusus periode September dan hanya berlaku dalam waktu terbatas.
              </p>
            </div>
          </div>

          {/* Value Stack Checklist Sesuai Instruksi 8 */}
          <div className="space-y-2 mb-6">
            <p className="text-[10px] font-extrabold uppercase text-gray-500 tracking-wider mb-2">
              SEMUA YANG ANDA DAPATKAN:
            </p>
            {stackItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs font-semibold text-gray-800 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Main Direct CTA Button */}
          <a
            id="pricing-main-cta-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePricingCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/25 transition-all cursor-pointer mb-2 min-h-[48px] leading-tight"
          >
            <span>DAPATKAN PROMO SEPTEMBER — Rp97.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {/* Supporting text under CTA */}
          <p className="text-[10px] text-gray-500 text-center font-medium mb-3">
            Sekali Bayar • Akses Seumur Hidup • Support Setelah Pembelian • Garansi 7 Hari
          </p>

          {/* Payment & Security Methods Note */}
          <div className="bg-slate-50 border border-gray-200/80 rounded-xl p-3 text-center space-y-1.5">
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-gray-700">
              <CreditCard className="w-3.5 h-3.5 text-blue-900 shrink-0" />
              <span>Metode Pembayaran Otomatis & Cepat</span>
            </div>
            <p className="text-[9px] text-gray-500">
              QRIS (GoPay, OVO, Dana, ShopeePay) • Transfer Bank (BCA, Mandiri, BRI, BNI, Permata)
            </p>
          </div>

          {/* Detailed Guarantee Box Sesuai Instruksi 7 */}
          <div className="mt-3.5 bg-emerald-50/90 border border-emerald-300 rounded-2xl p-4 text-left shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
              <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                GARANSI 100% UANG KEMBALI 7 HARI
              </h4>
            </div>
            <p className="text-[11px] text-emerald-900 leading-relaxed font-medium">
              Pelajari dan gunakan SMART Audit System. Jika produk yang diterima tidak sesuai dengan penawaran yang dijelaskan pada landing page ini, pengguna dapat mengajukan garansi dalam waktu 7 hari sesuai ketentuan yang berlaku.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
