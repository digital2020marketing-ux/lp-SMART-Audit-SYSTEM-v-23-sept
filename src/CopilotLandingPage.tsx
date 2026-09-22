import React from 'react';
import { NavbarCopilot } from './components/copilot/NavbarCopilot';
import { HeroCopilot } from './components/copilot/HeroCopilot';
import { ProductVisualShowcaseCopilot } from './components/copilot/ProductVisualShowcaseCopilot';
import { BeginnerProblemsCopilot } from './components/copilot/BeginnerProblemsCopilot';
import { PracticeSystemWorkflow } from './components/copilot/PracticeSystemWorkflow';
import { AiToolsSuiteCopilot } from './components/copilot/AiToolsSuiteCopilot';
import { AllInclusiveStack } from './components/copilot/AllInclusiveStack';
import { TestimonialsCopilot } from './components/copilot/TestimonialsCopilot';
import { WhyNotGeneralAi } from './components/copilot/WhyNotGeneralAi';
import { FaqCopilot } from './components/copilot/FaqCopilot';
import { GuaranteeCopilot } from './components/copilot/GuaranteeCopilot';
import { FinalClosingCopilot } from './components/copilot/FinalClosingCopilot';
import { StickyMobileBarCopilot } from './components/copilot/StickyMobileBarCopilot';
import { LivePurchaseToast } from './components/conversion/LivePurchaseToast';
import { Footer } from './components/Footer';

export const CopilotLandingPage: React.FC = () => {
  return (
    <div className="w-full max-w-[480px] min-h-screen bg-white text-gray-800 flex flex-col shadow-2xl relative border-x border-gray-200/50 pb-16">
      {/* Top Sticky Navigation with Copilot Branding */}
      <NavbarCopilot />

      {/* Main Streamlined Conversion Flow Sesuai Urutan 13-Point Instruksi Final:
          1. Hero + Harga + CTA
          2. Visual Produk
          3. Masalah Auditor Pemula
          4. Workflow 7 Tahap
          5. 5 AI Powered Audit Tools
          6. Semua Isi Paket
          7. Testimonial Asli
          8. Kenapa Sistem Ini Berbeda (Why Not General AI)
          9. FAQ
          10. Garansi 7 Hari
          11. Final Offer Rp97.000
          + Sticky CTA Mobile
      */}
      <main className="flex-1 w-full">
        {/* 1. Hero + Harga + CTA */}
        <HeroCopilot />

        {/* 2. Visual Produk */}
        <ProductVisualShowcaseCopilot />

        {/* 3. Masalah Auditor Pemula */}
        <BeginnerProblemsCopilot />

        {/* 4. Workflow 7 Tahap + CTA */}
        <PracticeSystemWorkflow />

        {/* 5. 5 AI Powered Audit Tools */}
        <AiToolsSuiteCopilot />

        {/* 6. Semua Isi Paket */}
        <AllInclusiveStack />

        {/* 7. Testimonial Asli */}
        <TestimonialsCopilot />

        {/* 8. Kenapa Sistem Ini Berbeda (Why Not General AI) */}
        <WhyNotGeneralAi />

        {/* 9. FAQ Penghilang Keraguan */}
        <FaqCopilot />

        {/* 10. Garansi 7 Hari */}
        <GuaranteeCopilot />

        {/* 11. Final Offer Rp97.000 */}
        <FinalClosingCopilot />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* REASSURING LIVE SOCIAL PROOF PURCHASE TOAST */}
      <LivePurchaseToast />

      {/* 12. STICKY MOBILE CTA BAR: DAPATKAN SEKARANG — Rp97.000 */}
      <StickyMobileBarCopilot />
    </div>
  );
};
