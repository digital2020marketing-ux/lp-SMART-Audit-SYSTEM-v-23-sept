import React from 'react';
import { CtaButton } from './CtaButton';
import { getWhatsAppConfirmUrl, trackWhatsAppClick } from '../../constants';

export const CleanFinalCta: React.FC = () => {
  const handleWaClick = () => {
    trackWhatsAppClick('final_cta', 'WhatsApp Bantuan Closing');
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5">
      <div className="w-full text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900 text-white text-[12px] font-bold tracking-wider uppercase mb-2.5">
          SMART AUDIT SYSTEM
        </div>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-2.5">
          Mulai Belajar &amp; Siap Jalankan Audit
        </h2>

        {/* Short Paragraph (max 2-3 lines) */}
        <p className="text-[16px] sm:text-[17px] text-slate-600 font-medium leading-relaxed mb-4 max-w-[440px]">
          Panduan pembelajaran audit internal lengkap untuk auditor pemula, berisi 9 modul, 7 worksheet, 5 AI tools, dan simulasi audit.
        </p>

        {/* Price & Guarantee Pill */}
        <div className="mb-5">
          <div className="text-[36px] sm:text-[40px] font-black text-red-600 leading-none mb-1">
            Rp99.000
          </div>
          <p className="text-[15px] font-semibold text-slate-700">
            Sekali Bayar • Akses Seumur Hidup • Garansi 7 Hari
          </p>
        </div>

        {/* CTA Button */}
        <div className="w-full mb-4">
          <CtaButton position="closing_section" />
        </div>

        {/* WhatsApp Help Link */}
        <a
          href={getWhatsAppConfirmUrl('Halo Admin, saya ingin bertanya tentang SMART AUDIT SYSTEM (Rp99.000) sebelum membeli.')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="text-[15px] font-bold text-slate-600 hover:text-slate-900 underline underline-offset-4 mb-8 block"
        >
          Butuh bantuan atau ingin tanya admin? Chat WhatsApp
        </a>

        {/* Simple Footer */}
        <div className="w-full pt-5 border-t border-slate-200 text-[14px] text-slate-600 text-center space-y-1">
          <p>© {new Date().getFullYear()} SMART AUDIT SYSTEM.</p>
          <p>Panduan Pembelajaran dan Instrumen Audit Internal</p>
        </div>
      </div>
    </section>
  );
};
