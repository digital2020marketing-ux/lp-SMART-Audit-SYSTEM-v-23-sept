import React from 'react';
import { 
  Check, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../../constants';

export const AllInclusiveStack: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('all_stack_copilot', 'All Inclusive Stack - DAPATKAN SEMUA AKSES — Rp97.000');
  };

  const stackItems = [
    { title: 'Platform SMART Audit System', desc: 'Akses sistem terpadu kapan saja dari laptop maupun smartphone' },
    { title: '9 Modul Panduan Audit', desc: 'Panduan lengkap standar klausul ISO 9001:2015 & pedoman audit ISO 19011' },
    { title: '7 Worksheet Word & Excel Siap Pakai', desc: 'Checklist audit, formulir temuan PLOR, 5-Why, CAPA, & template laporan' },
    { title: 'Simulasi Praktik Audit', desc: 'Latihan interaktif skenario audit untuk mengasah kesiapan lapangan' },
    { title: 'AI Checklist & Simulation', desc: 'AI penyusun daftar periksa & simulasi skenario audit terarah' },
    { title: 'AI PLOR Generator', desc: 'AI penyusun formulasi draf temuan audit berbasis Problem, Location, Objective Evidence, Reference' },
    { title: 'CAPA Generator PTKP', desc: 'AI analisis akar masalah 5-Why & perumus tindakan koreksi/korektif' },
    { title: 'AI Asisten AMI-GPT 2026', desc: 'Asisten cerdas tanya jawab klausul dan panduan audit mutu internal' },
    { title: 'ISO 19011 Audit Assistant AI 2026 (GPT Co-Pilot)', desc: 'AI co-pilot panduan prinsip, program, dan teknik audit sistem manajemen' },
    { title: 'Ebook + Audio Tambahan', desc: 'Bahan bacaan ringkas dan podcast audio untuk dipelajari di mana saja' },
    { title: 'Evaluasi Pemahaman (Pre-Test & Post-Test)', desc: 'Uji mandiri pemahaman sebelum dan sesudah mempelajari sistem' },
  ];

  return (
    <section id="semua-yang-didapatkan" className="py-7 bg-slate-50 border-b border-gray-200">
      <div className="w-full px-4 max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>SATU PAKET LENGKAP</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-snug">
            BUKAN HANYA AI — SATU PAKET SISTEM PRAKTIK AUDIT
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1 leading-relaxed">
            Seluruh komponen terintegrasi untuk mendampingi alur kerja audit Anda dari awal hingga akhir:
          </p>
        </div>

        {/* 11 Items Checklist */}
        <div className="bg-white rounded-2xl border border-gray-200 p-3.5 shadow-2xs mb-4 space-y-2.5">
          {stackItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 pb-2.5 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs sm:text-sm font-black text-gray-900 leading-snug">
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-600 font-medium leading-relaxed mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Access & Guarantee Micro-bar */}
        <div className="mb-3.5 p-2.5 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-[11px] font-bold text-blue-900">
          <span>✓ Akses Seumur Hidup</span>
          <span>✓ Support Penggunaan</span>
          <span>✓ Garansi 7 Hari</span>
        </div>

        {/* Action Button */}
        <a
          id="stack-copilot-cta"
          href={getCheckoutUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer min-h-[48px] leading-tight text-center"
        >
          <span>DAPATKAN SEMUA AKSES — Rp97.000</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </section>
  );
};
