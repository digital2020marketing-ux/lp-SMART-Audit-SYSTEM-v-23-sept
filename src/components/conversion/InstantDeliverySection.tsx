import React from 'react';
import { Send, CheckCircle2, ShieldCheck, Smartphone, Laptop, Zap, ArrowRight } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const InstantDeliverySection: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('instant_delivery_cta', 'Instant Delivery - DAPATKAN AKSES SEKARANG');
  };

  const steps = [
    {
      num: '1',
      title: 'Klik Tombol Checkout & Selesaikan Pembayaran',
      desc: 'Isi formulir pemesanan dan pilih metode pembayaran favorit Anda di halaman checkout resmi Scalev.',
      badge: 'Cepat & Aman',
    },
    {
      num: '2',
      title: 'Pembayaran Terverifikasi Otomatis',
      desc: 'Sistem payment gateway kami bekerja otomatis 24 jam nonstop. Anda TIDAK perlu repot kirim bukti transfer manual ke admin.',
      badge: 'Detik Ini Juga',
    },
    {
      num: '3',
      title: 'Akses Langsung Masuk ke WhatsApp & Email',
      desc: 'Link login portal dan link download seluruh file Word, Excel, serta akses AI Tools langsung terbuka di layar dan terkirim otomatis.',
      badge: 'Siap Pakai 24/7',
    },
  ];

  return (
    <section id="cara-akses-instan" className="py-8 bg-blue-50/60 border-b border-blue-200/80">
      <div className="w-full px-4">
        {/* Eyebrow & Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 bg-blue-900 text-blue-100 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 shrink-0" />
            <span>AKSES OTOMATIS & INSTAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug max-w-sm mx-auto">
            BAGAIMANA CARA MENGAKSESNYA SETELAH PEMBAYARAN?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1.5 leading-relaxed max-w-sm mx-auto">
            Hanya butuh 3 langkah mudah. Anda bisa langsung download dan gunakan malam ini juga:
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="space-y-3 max-w-md mx-auto mb-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-200 rounded-2xl p-4 shadow-2xs flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                {step.num}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xs sm:text-sm font-black text-gray-950 leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-medium mb-1.5">
                  {step.desc}
                </p>
                <span className="inline-block bg-blue-100/90 text-blue-950 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                  ✓ {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Compatibility & Device Flexibility Box */}
        <div className="max-w-md mx-auto bg-white border-2 border-emerald-300 rounded-2xl p-4 shadow-xs mb-5">
          <div className="flex items-center gap-2 mb-2 text-emerald-900 font-black text-xs sm:text-sm">
            <CheckCircle2 className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
            <span>FORMAT PRAKTIS 100% BEBAS EDIT</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-800 font-semibold mb-3">
            <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-xl border border-gray-100">
              <Laptop className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Bisa Buka di Laptop / PC</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 bg-slate-50 rounded-xl border border-gray-100">
              <Smartphone className="w-4 h-4 text-blue-900 shrink-0" />
              <span>Bisa Buka di Smartphone / HP</span>
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed font-medium">
            Format file Word (.docx) & Excel (.xlsx) murni tanpa proteksi password. Anda bebas mengisi kop nama perusahaan, logo, dan menyesuaikan kebutuhan audit Anda sendiri.
          </p>
        </div>

        {/* Reassurance Call-to-Action */}
        <div className="max-w-md mx-auto text-center">
          <a
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-4 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer min-h-[50px] leading-tight"
          >
            <span>DAPATKAN AKSES SEKARANG — RP97.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
          <p className="text-xs text-gray-600 mt-2 font-medium">
            🔒 Checkout Aman • Akses Otomatis 24 Jam • Garansi 7 Hari
          </p>
        </div>
      </div>
    </section>
  );
};
