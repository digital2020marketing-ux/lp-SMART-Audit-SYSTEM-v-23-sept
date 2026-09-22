import React from 'react';
import { 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Sparkles,
  CreditCard,
  Zap,
  Gift
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const PricingOfferCopilot: React.FC = () => {
  const handlePricingCtaClick = () => {
    trackCheckoutClick('pricing_cta_copilot', 'Pricing Copilot - DAPATKAN SEKARANG — Rp97.000');
  };

  const stackItems = [
    { text: 'SMART Audit System', highlight: false },
    { text: '9 Modul Panduan Audit ISO 9001 & ISO 19011', highlight: false },
    { text: '7 Worksheet Word & Excel Siap Edit', highlight: false },
    { text: 'Simulasi Audit Skenario Lapangan', highlight: false },
    { text: '5 AI Tools: Pertanyaan, PLOR, 5-Why & CAPA', highlight: false },
    { text: 'Ebook & Audio Podcast Ulasan Mendalam', highlight: false },
    { text: 'BONUS GPT Co-Pilot ISO 19011 versi 2026', highlight: true },
  ];

  return (
    <section id="penawaran-harga-copilot" className="py-8 bg-slate-100 border-b border-gray-200">
      <div className="w-full px-4">
        {/* Section Header Sesuai Brief */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>PENAWARAN SPESIAL LENGKAP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            MULAI AUDIT TANPA FILE KOSONG
          </h2>
          <p className="text-sm text-gray-700 font-medium mt-1">
            Dapatkan sistem lengkap dan bonus co-pilot hari ini.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white border-2 border-red-600 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden max-w-md mx-auto">
          {/* Top Banner Tag */}
          <div className="bg-red-600 text-white text-center py-2 -mx-6 -mt-6 mb-5 font-black text-xs tracking-wider uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>TERMASUK BONUS GPT CO-PILOT ISO 19011:2026</span>
          </div>

          {/* Pricing Display */}
          <div className="text-center mb-5 pb-4 border-b border-gray-100">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-black uppercase mb-2">
              <Zap className="w-3.5 h-3.5 fill-red-600 text-red-600 animate-pulse" />
              <span>SISA KUOTA PROMO HARI INI TERBATAS</span>
            </div>

            <div className="text-sm text-gray-500 font-semibold mb-1">
              Harga Normal: <span className="line-through font-bold">Rp249.000</span> (Total Nilai Rp2.050.000)
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-xs sm:text-sm font-black text-red-600 uppercase tracking-wider">HANYA:</span>
              <span className="text-4xl sm:text-5xl font-black text-red-600 tracking-tight">
                Rp97.000
              </span>
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-emerald-800 mt-1.5">
              Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
            </p>

            {/* Instant Delivery Callout */}
            <div className="mt-2.5 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-left flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
              <p className="text-xs text-emerald-900 font-bold leading-tight">
                ⚡ Akses langsung otomatis masuk ke WhatsApp & Email detik ini juga setelah bayar!
              </p>
            </div>
          </div>

          {/* Value Checklist Sesuai Brief */}
          <div className="space-y-2 mb-6">
            <p className="text-xs font-black uppercase text-gray-600 tracking-wider mb-1.5">
              DAPATKAN SISTEM LENGKAP:
            </p>
            {stackItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-2.5 p-2.5 rounded-xl transition-colors ${
                  item.highlight 
                    ? 'bg-amber-50/90 border border-amber-300 text-amber-950 font-black' 
                    : 'bg-slate-50 border border-gray-200/80 text-gray-800'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  item.highlight 
                    ? 'bg-amber-500 text-slate-950 font-bold' 
                    : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {item.highlight ? <Gift className="w-3 h-3" /> : <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs sm:text-sm font-bold leading-snug">
                    {item.text}
                  </span>
                  {item.highlight && (
                    <span className="ml-1.5 inline-block text-xs font-black uppercase bg-amber-200 text-amber-950 px-2 py-0.5 rounded">
                      Bonus Baru
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Direct CTA Button Sesuai Brief */}
          <a
            id="pricing-copilot-cta-btn"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePricingCtaClick}
            className="w-full inline-flex flex-col items-center justify-center bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl shadow-lg shadow-red-600/30 transition-all cursor-pointer mb-2 min-h-[54px] text-center"
          >
            <span className="flex items-center justify-center gap-2 font-black text-sm sm:text-base leading-tight">
              <span>KLIK DI SINI UNTUK AKSES SEKARANG — Rp97.000</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </span>
            <span className="text-[11px] font-medium text-amber-200 mt-0.5">
              ⚡ Akses Langsung Dikirim ke WhatsApp & Email
            </span>
          </a>

          {/* Under-button Guarantee Note */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800 mb-3 bg-emerald-50 py-2 px-3 rounded-xl border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Garansi 100% Uang Kembali 7 Hari • Sekali Bayar Seumur Hidup</span>
          </div>

          {/* Payment Note */}
          <div className="bg-slate-50 border border-gray-200 rounded-xl p-3 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-gray-800">
              <CreditCard className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Metode Pembayaran Otomatis & Cepat</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              QRIS (GoPay, OVO, Dana, ShopeePay) • Transfer Bank (BCA, Mandiri, BRI, BNI, BSI, BJB)
            </p>
          </div>

          {/* Detailed Guarantee Box */}
          <div className="mt-3.5 bg-emerald-50/90 border border-emerald-300 rounded-2xl p-4 text-left shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
              <h4 className="text-xs sm:text-sm font-black text-emerald-950 uppercase tracking-wide">
                KOMITMEN GARANSI 7 HARI
              </h4>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed font-medium">
              Pelajari dan gunakan SMART Audit System. Jika produk yang diterima tidak sesuai dengan yang dijelaskan pada halaman ini, Anda dapat mengajukan klaim pengembalian dana 100% dalam 7 hari.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
