// Image assets map with direct URLs provided by user and local fallback paths
import React from 'react';

export interface ImageAssetInfo {
  url: string;
  urlAlt?: string;
  local: string;
  webpLocal: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
}

export const SMARTBOOK_IMAGES: Record<string, ImageAssetInfo> = {
  heroMockup: {
    url: 'https://i.ibb.co.com/xqtkxhYg/Chat-GPT-Image-Sep-22-2026-10-04-25-PM.png',
    local: '/images/hero-mockup-sas.webp',
    webpLocal: '/images/hero-mockup-sas.webp',
    alt: 'Mockup SMART AUDIT SYSTEM',
    title: 'SMART AUDIT SYSTEM — 9 Modul, 7 Worksheet, 5 AI Tools',
    width: 720,
    height: 460,
  },

  // 1. Gambar Dashboard Link
  dashboard: {
    url: 'https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/gambar-dashbord-SAS.jpg',
    local: '/images/gambar-dashbord-SAS.jpg',
    webpLocal: '/images/gambar-dashbord-SAS.webp',
    alt: 'Dashboard SMART Audit SYSTEM',
    title: 'Dashboard Terpadu SMART Audit SYSTEM',
    width: 1200,
    height: 675,
  },

  // 2. Gambar 5 AI TOOLS dan SIMULASI
  aiToolsSuite: {
    url: 'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan%20-SIMULASI.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan-SIMULASI.jpg',
    local: '/images/5-AI-TOOLS-dan-SIMULASI.jpg',
    webpLocal: '/images/5-AI-TOOLS-dan-SIMULASI.webp',
    alt: '5 AI Tools dan Simulasi Kasus Audit',
    title: '5 AI Tools & Simulasi Kasus Audit Mutu',
    width: 1200,
    height: 675,
  },

  // 3. Gambar 9 Modul
  modul9: {
    url: 'https://smartbook.id/kumpulan-gambar/9-modul.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/9-modul-dan-audio.jpg',
    local: '/images/9-modul.jpg',
    webpLocal: '/images/9-modul.webp',
    alt: '9 Modul Panduan Praktis Audit Internal',
    title: '9 E-Book Modul Panduan Audit Mutu Internal',
    width: 1200,
    height: 675,
  },

  // 4. Gambar CAPA
  capa: {
    url: 'https://smartbook.id/kumpulan-gambar/CAPA%20.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/CAPA.jpg',
    local: '/images/CAPA.jpg',
    webpLocal: '/images/CAPA.webp',
    alt: 'AI CAPA & 5-Why Root Cause Analysis',
    title: 'AI CAPA & 5-Why Root Cause Assistant',
    width: 1200,
    height: 675,
  },

  // 5. Gambar Cek List Audit dan Simulasi
  cekList: {
    url: 'https://smartbook.id/kumpulan-gambar/Cek-List-Audit-dan-Simulasi.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/Cek-List-Audit-dan-Simulasi.jpg',
    local: '/images/Cek-List-Audit-dan-Simulasi.jpg',
    webpLocal: '/images/Cek-List-Audit-dan-Simulasi.webp',
    alt: 'AI Checklist & Pertanyaan 5W+1H Audit',
    title: 'AI Checklist & Simulasi Pertanyaan Audit',
    width: 1200,
    height: 675,
  },

  // 6. Gambar Evaluasi Pre Test dan Post Test
  evaluasi: {
    url: 'https://smartbook.id/kumpulan-gambar/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg',
    local: '/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg',
    webpLocal: '/images/EVALUASI-PRE-TEST-DAN-POST-TEST.webp',
    alt: 'Evaluasi Pre-Test dan Post-Test Audit',
    title: 'Instrumen Evaluasi Pre-Test & Post-Test',
    width: 1200,
    height: 675,
  },

  // 7. Gambar ISO 19011
  iso19011: {
    url: 'https://smartbook.id/kumpulan-gambar/ISO-19011.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/ISO-19011.jpg',
    local: '/images/ISO-19011.jpg',
    webpLocal: '/images/ISO-19011.webp',
    alt: 'ISO 19011:2026 Audit Co-Pilot Assistant',
    title: 'ISO 19011:2026 Audit Co-Pilot Assistant',
    width: 1200,
    height: 675,
  },

  // 8. Gambar Podcast Audio Ulasan Mendalam
  podcast: {
    url: 'https://smartbook.id/kumpulan-gambar/podcast-audio-ulasan-mendalam.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/podcast-audio-ulasan-mendalam.jpg',
    local: '/images/podcast-audio-ulasan-mendalam.jpg',
    webpLocal: '/images/podcast-audio-ulasan-mendalam.webp',
    alt: 'Podcast Audio Ulasan Mendalam Audit Internal',
    title: 'Podcast Audio Seri Ulasan Mendalam Audit',
    width: 1200,
    height: 675,
  },

  // 9. Gambar Worksheet dan Formulir AMI
  worksheet: {
    url: 'https://smartbook.id/kumpulan-gambar/worksheet-dan-formulir-AMI.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/worksheet-dan-formulir-AMI.jpg',
    local: '/images/worksheet-dan-formulir-AMI.jpg',
    webpLocal: '/images/worksheet-dan-formulir-AMI.webp',
    alt: '7 Worksheet dan Formulir Standar AMI ISO 9001',
    title: '7 Format Worksheet & Formulir Standar AMI',
    width: 1200,
    height: 675,
  },

  // 10. AI PLOR (Generator Laporan Temuan PLOR)
  plor: {
    url: 'https://smartbook.id/kumpulan-gambar/Generator-Laporan-Temuan-PLOR.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/Generator-Laporan-Temuan-PLOR.jpg',
    local: '/images/Generator-Laporan-Temuan-PLOR.jpg',
    webpLocal: '/images/Generator-Laporan-Temuan-PLOR.webp',
    alt: 'AI Generator Temuan Audit PLOR',
    title: 'AI Generator Laporan Temuan PLOR',
    width: 1200,
    height: 675,
  },

  // 11. Simulasi Praktik Audit (Alias to Cek-List-Audit-dan-Simulasi)
  simulasi: {
    url: 'https://smartbook.id/kumpulan-gambar/Cek-List-Audit-dan-Simulasi.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/Cek-List-Audit-dan-Simulasi.jpg',
    local: '/images/Cek-List-Audit-dan-Simulasi.jpg',
    webpLocal: '/images/Cek-List-Audit-dan-Simulasi.webp',
    alt: 'Simulasi Praktik Audit',
    title: 'Simulasi Praktik Audit',
    width: 1200,
    height: 675,
  },

  // 12. 5 AI Tools Audit (Alias to 5-AI-TOOLS-dan-SIMULASI)
  aiTools: {
    url: 'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan%20-SIMULASI.jpg',
    urlAlt: 'https://smartbook.id/kumpulan-gambar/5-AI-TOOLS-dan-SIMULASI.jpg',
    local: '/images/5-AI-TOOLS-dan-SIMULASI.jpg',
    webpLocal: '/images/5-AI-TOOLS-dan-SIMULASI.webp',
    alt: '5 AI Tools Audit',
    title: '5 AI Tools Audit',
    width: 1200,
    height: 675,
  },

  // Testimonials
  testi1: {
    url: 'https://smartbook.id/kumpulan-gambar/testi1.png',
    local: '/images/testi1.png',
    webpLocal: '/images/testi1.webp',
    alt: 'Testimoni 1 SMART Audit System',
    width: 600,
    height: 800,
  },
  testi2: {
    url: 'https://smartbook.id/kumpulan-gambar/testi2.png',
    local: '/images/testi2.png',
    webpLocal: '/images/testi2.webp',
    alt: 'Testimoni 2 SMART Audit System',
    width: 600,
    height: 800,
  },
  testi3: {
    url: 'https://smartbook.id/kumpulan-gambar/testi3.png',
    local: '/images/testi3.png',
    webpLocal: '/images/testi3.webp',
    alt: 'Testimoni 3 SMART Audit System',
    width: 600,
    height: 800,
  },
  testi4: {
    url: 'https://smartbook.id/kumpulan-gambar/testi4.png',
    local: '/images/testi4.png',
    webpLocal: '/images/testi4.webp',
    alt: 'Testimoni 4 SMART Audit System',
    width: 600,
    height: 800,
  },
  testi5: {
    url: 'https://smartbook.id/kumpulan-gambar/testi5.png',
    local: '/images/testi5.png',
    webpLocal: '/images/testi5.webp',
    alt: 'Testimoni 5 SMART Audit System',
    width: 600,
    height: 800,
  },
  testi6: {
    url: 'https://smartbook.id/kumpulan-gambar/testi6.png',
    local: '/images/testi6.png',
    webpLocal: '/images/testi6.webp',
    alt: 'Testimoni 6 SMART Audit System',
    width: 600,
    height: 800,
  },
};

/**
 * Robust multi-tier fallback handler for image loading
 * Stage 0: Initial src (Bundled asset or WebP)
 * Stage 1: Local compressed JPEG/PNG (/images/...)
 * Stage 2: Remote primary CDN URL
 * Stage 3: Remote alternate CDN URL (if available)
 */
export const handleImageFallback = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  localFallback?: string,
  remoteFallback?: string,
  altRemoteFallback?: string
) => {
  const target = e.currentTarget;
  const stage = parseInt(target.dataset.fallbackStage || '0', 10);

  if (stage === 0 && localFallback && target.src !== localFallback && !target.src.endsWith(localFallback)) {
    target.dataset.fallbackStage = '1';
    target.src = localFallback;
  } else if (stage <= 1 && remoteFallback && target.src !== remoteFallback) {
    target.dataset.fallbackStage = '2';
    target.src = remoteFallback;
  } else if (stage === 2 && altRemoteFallback && target.src !== altRemoteFallback) {
    target.dataset.fallbackStage = '3';
    target.src = altRemoteFallback;
  } else {
    target.dataset.fallbackStage = '4';
  }
};


