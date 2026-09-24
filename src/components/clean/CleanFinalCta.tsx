import React from 'react';
import { CtaButton } from './CtaButton';
import { getWhatsAppConfirmUrl, trackWhatsAppClick } from '../../constants';

export const CleanFinalCta: React.FC = () => {
  const handleWaClick = () => {
    trackWhatsAppClick('final_cta', 'WhatsApp Bantuan Closing');
  };

  return (
    <section className="w-full bg-slate-900 text-white py-12 px-5">
      <div className="w-full text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800 text-white text-[12px] font-extrabold tracking-wider uppercase mb-3">
          KESIMPULAN AKHIR
        </div>

        {/* Section Heading */}
        <h2 className="text-[25px] sm:text-[30px] font-black text-white leading-tight mb-3">
          Audit Berikutnya Tidak Harus Dimulai dengan Bingung.
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-[16px] text-slate-300 font-medium leading-relaxed mb-6 max-w-[440px]">
          Miliki sistem kerja yang membantu kamu mengetahui apa yang harus dipersiapkan, ditanyakan, diverifikasi, dan didokumentasikan.
        </p>

        {/* Core Product Summary Box */}
        <div className="w-full bg-slate-800/90 border border-slate-700 rounded-2xl p-5 mb-5 text-center shadow-lg">
          <h3 className="text-[18px] sm:text-[20px] font-black text-amber-400 uppercase tracking-wide mb-1">
            SMART AUDIT SYSTEM
          </h3>
          <p className="text-[14px] text-slate-300 font-bold mb-4">
            9 Modul • 7 Worksheet • 5 AI Tools • Simulasi Audit
          </p>

          <div className="text-[14px] text-slate-400 line-through font-bold mb-1">
            Rp299.000
          </div>
          <div className="text-[40px] sm:text-[46px] font-black text-red-500 leading-none mb-2">
            Rp99.000
          </div>
          <p className="text-[13.5px] text-slate-200 font-bold mb-5">
            Sekali Bayar • Akses Seumur Hidup • Garansi 7 Hari
          </p>

          {/* CTA Button */}
          <CtaButton
            position="closing_section"
            label="DAPATKAN SMART AUDIT SYSTEM SEKARANG →"
            sublabel="Akses langsung setelah pembayaran."
          />
        </div>

        {/* WhatsApp Help Link */}
        <a
          href={getWhatsAppConfirmUrl('Halo Admin, saya ingin bertanya tentang SMART AUDIT SYSTEM (Rp99.000) sebelum membeli.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="text-[14px] font-bold text-slate-400 hover:text-white underline underline-offset-4 mb-8 block transition-colors"
        >
          Butuh bantuan atau ingin tanya admin? Chat WhatsApp
        </a>

        {/* Simple Footer */}
        <div className="w-full pt-5 border-t border-slate-800 text-[13px] text-slate-500 text-center space-y-1">
          <p>© {new Date().getFullYear()} SMART AUDIT SYSTEM.</p>
          <p>Panduan Pembelajaran dan Instrumen Praktik Audit Internal ISO 9001 &amp; ISO 19011</p>
        </div>
      </div>
    </section>
  );
};
