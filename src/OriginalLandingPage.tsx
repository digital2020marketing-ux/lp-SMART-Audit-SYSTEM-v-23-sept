import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeginnerProblemsSection } from './components/BeginnerProblemsSection';
import { ProblemAgitateSection } from './components/ProblemAgitateSection';
import { DesiredOutcomeSection } from './components/DesiredOutcomeSection';
import { SolutionIntroSection } from './components/SolutionIntroSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AuditProcessCaseStudySection } from './components/AuditProcessCaseStudySection';
import { ThreeBenefitsSection } from './components/ThreeBenefitsSection';
import { ProductStackSection } from './components/ProductStackSection';
import { AfterSalesSupportSection } from './components/AfterSalesSupportSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { TargetAudience } from './components/TargetAudience';
import { ObjectionHandlingSection } from './components/ObjectionHandlingSection';
import { PricingOffer } from './components/PricingOffer';
import { FinalClosingSection } from './components/FinalClosingSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export const OriginalLandingPage: React.FC = () => {
  return (
    <div className="w-full max-w-[480px] min-h-screen bg-white text-gray-800 flex flex-col shadow-2xl relative border-x border-gray-200/50">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Flow: Urutan Final 14 Sections Sesuai Brief Revisi Asli */}
      <main className="flex-1 w-full">
        {/* SECTION 1 — HERO */}
        <Hero />

        {/* SECTION 2 — PROBLEM (5 Pain Paling Kuat) */}
        <BeginnerProblemsSection />

        {/* SECTION 3 — AGITATE (Audit Tetap Harus Jalan) */}
        <ProblemAgitateSection />

        {/* SECTION 4 — DESIRED OUTCOME (Starting Point yang Jelas) */}
        <DesiredOutcomeSection />

        {/* SECTION 5 — PERKENALKAN SOLUSI (Inilah SMART Audit System) */}
        <SolutionIntroSection />

        {/* SECTION 6 — SOCIAL PROOF (3 Testimoni Screenshot Besar) */}
        <TestimonialsSection />

        {/* SECTION 6B — STUDI KASUS SINGKAT (Contoh Penggunaan Dari Lapangan ke CAPA) */}
        <AuditProcessCaseStudySection />

        {/* SECTION 7 — 3 BENEFIT UTAMA (Apa yang Berubah) */}
        <ThreeBenefitsSection />

        {/* SECTION 8 — PRODUCT STACK / DONE-FOR-YOU (3 Komponen Utama Sistem Praktik) */}
        <ProductStackSection />

        {/* SECTION 8B — AFTER SALES SERVICE (Tidak Ditinggal Setelah Membeli) */}
        <AfterSalesSupportSection />

        {/* SECTION 9 — ALUR AUDIT (7 Step Alur Kerja Lengkap) */}
        <LearningJourneySection />

        {/* SECTION 10 — PREVIEW DASHBOARD (Demo Penggunaan) */}
        <VideoShowcaseSection />

        {/* SECTION 11 — UNTUK SIAPA (Kualifikasi Auditor Pemula) */}
        <TargetAudience />

        {/* SECTION 12 — OBJECTION HANDLING (6 FAQ Menjual) */}
        <ObjectionHandlingSection />

        {/* SECTION 13 — OFFER (Penawaran Promo September Rp97.000 + Garansi) */}
        <PricingOffer />

        {/* SECTION 14 — FINAL CLOSING (Audit Sudah Semakin Dekat?) */}
        <FinalClosingSection />
      </main>

      {/* FOOTER & SECONDARY CS WHATSAPP */}
      <Footer />

      {/* STICKY MOBILE CTA BAR (Muncul Setelah Scroll Melewati Hero) */}
      <StickyMobileBar />
    </div>
  );
};
