import React from 'react';
import { CleanHero } from './components/clean/CleanHero';
import { CleanProblem } from './components/clean/CleanProblem';
import { CleanProductContents } from './components/clean/CleanProductContents';
import { CleanAuditFlow } from './components/clean/CleanAuditFlow';
import { CleanProductVisuals } from './components/clean/CleanProductVisuals';
import { CleanTargetAudience } from './components/clean/CleanTargetAudience';
import { CleanTestimonials } from './components/clean/CleanTestimonials';
import { CleanOffer } from './components/clean/CleanOffer';
import { CleanFaq } from './components/clean/CleanFaq';
import { CleanFinalCta } from './components/clean/CleanFinalCta';
import { StickyMobileBar } from './components/clean/StickyMobileBar';

export const HighConvertingLandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100/70 sm:py-6 overflow-x-hidden pb-16 sm:pb-0">
      {/* Single column mobile-first container */}
      <main className="w-full max-w-full sm:max-w-[480px] md:max-w-[500px] min-h-screen bg-white text-slate-900 flex flex-col mx-auto antialiased relative shadow-xl overflow-x-hidden sm:rounded-3xl sm:border sm:border-slate-200/80">
        {/* Top Product Header Bar */}
        <header className="w-full bg-slate-900 text-white py-2.5 px-4 text-center border-b border-slate-800 shrink-0">
          <span className="text-[14px] sm:text-[15px] font-black tracking-wider uppercase block">
            SMART AUDIT SYSTEM
          </span>
        </header>

        {/* 1. Hero dan tombol pembelian */}
        <CleanHero />

        {/* 2. Masalah auditor pemula */}
        <CleanProblem />

        {/* 3. Isi SMART AUDIT SYSTEM (4 kartu + tombol) */}
        <CleanProductContents />

        {/* 4. Alur pembelajaran audit */}
        <CleanAuditFlow />

        {/* 5. Screenshot dashboard dan contoh worksheet (3 gambar asli + tombol) */}
        <CleanProductVisuals />

        {/* 6. Testimoni dan bukti nyata pengguna */}
        <CleanTestimonials />

        {/* 7. Target pengguna */}
        <CleanTargetAudience />

        {/* 8. Harga dan garansi (Rp99.000 + garansi 7 hari + tombol) */}
        <CleanOffer />

        {/* 9. FAQ */}
        <CleanFaq />

        {/* 10. CTA penutup */}
        <CleanFinalCta />
      </main>

      {/* Floating Sticky Buy Button for Mobile Users */}
      <StickyMobileBar />
    </div>
  );
};
