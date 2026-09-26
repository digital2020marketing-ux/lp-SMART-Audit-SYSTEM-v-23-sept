import React from 'react';
import { CleanHero } from './components/clean/CleanHero';
import { CleanProblem } from './components/clean/CleanProblem';
import { CleanSolution } from './components/clean/CleanSolution';
import { CleanProductVisuals } from './components/clean/CleanProductVisuals';
import { CleanVideoShowcase } from './components/clean/CleanVideoShowcase';
import { CleanAuditFlow } from './components/clean/CleanAuditFlow';
import { CleanProductContents } from './components/clean/CleanProductContents';
import { CleanTestimonials } from './components/clean/CleanTestimonials';
import { CleanTargetAudience } from './components/clean/CleanTargetAudience';
import { CleanOffer } from './components/clean/CleanOffer';
import { CleanCostComparison } from './components/clean/CleanCostComparison';
import { CleanGuarantee } from './components/clean/CleanGuarantee';
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
          <span className="text-[13px] sm:text-[14px] font-black tracking-wider uppercase block">
            SMART AUDIT SYSTEM • ISO 9001 &amp; ISO 19011
          </span>
        </header>

        {/* SECTION 1 — HERO */}
        <CleanHero />

        {/* SECTION 2 — PROBLEM / AGITATE */}
        <CleanProblem />

        {/* SECTION 3 — BRIDGING */}
        <div className="content-auto">
          <CleanSolution />
        </div>

        {/* SECTION 4 — PROOF PRODUK */}
        <div className="content-auto">
          <CleanProductVisuals />
        </div>

        {/* SECTION 4B — 9 VIDEO DEMONSTRASI (NON-AUTOPLAY) */}
        <CleanVideoShowcase />

        {/* SECTION 5 — BENEFIT */}
        <div className="content-auto">
          <CleanAuditFlow />
        </div>

        {/* SECTION 6 — WHAT YOU GET */}
        <div className="content-auto">
          <CleanProductContents />
        </div>

        {/* SECTION 7 — SOCIAL PROOF */}
        <div className="content-auto">
          <CleanTestimonials />
        </div>

        {/* SECTION 8 — TARGET MARKET */}
        <div className="content-auto">
          <CleanTargetAudience />
        </div>

        {/* SECTION 9 — VALUE STACK */}
        <div className="content-auto">
          <CleanOffer />
        </div>

        {/* SECTION 10 — HANDLING OBJECTION */}
        <div className="content-auto">
          <CleanCostComparison />
        </div>

        {/* SECTION 11 — GUARANTEE */}
        <div className="content-auto">
          <CleanGuarantee />
        </div>

        {/* SECTION 12 — FAQ */}
        <div className="content-auto">
          <CleanFaq />
        </div>

        {/* SECTION 13 — FINAL CLOSE */}
        <div className="content-auto">
          <CleanFinalCta />
        </div>
      </main>

      {/* Floating Sticky Buy Button for Mobile Users */}
      <StickyMobileBar />
    </div>
  );
};
