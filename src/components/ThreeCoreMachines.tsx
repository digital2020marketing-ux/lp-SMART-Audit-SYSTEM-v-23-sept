import React from 'react';
import { Sparkles, CheckCircle2, ShoppingBag, ArrowRight, ShieldCheck, Compass, HelpCircle, FileCheck, CheckSquare, Zap, Crosshair } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgChecklistWebp from '../assets/images/Cek-List-Audit-dan-Simulasi.webp';
import imgChecklistJpg from '../assets/images/Cek-List-Audit-dan-Simulasi.jpg';
import imgIso19011Webp from '../assets/images/ISO-19011.webp';
import imgIso19011Jpg from '../assets/images/ISO-19011.jpg';
import imgPlorWebp from '../assets/images/Generator-Laporan-Temuan-PLOR.webp';
import imgPlorJpg from '../assets/images/Generator-Laporan-Temuan-PLOR.jpg';
import imgCapaWebp from '../assets/images/CAPA.webp';
import imgCapaJpg from '../assets/images/CAPA.jpg';

export const ThreeCoreMachines: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('machines_cta', '3 Core Machines - Dapatkan SMART Audit System Rp197.000');
  };

  const machines = [
    {
      badge: 'MESIN 1',
      phase: 'PREPARE',
      title: 'Mulai Pekerjaan Audit Tanpa File Kosong',
      benefit: 'Anda tidak perlu selalu memulai persiapan audit dari halaman kosong.',
      color: 'from-blue-950 via-slate-900 to-indigo-950',
      accentBorder: 'border-blue-700/60',
      tagColor: 'bg-blue-500/20 text-blue-300 border-blue-600/40',
      imageWebp: imgChecklistWebp,
      imageJpg: imgChecklistJpg,
      imageWebpLocal: SMARTBOOK_IMAGES.cekList.webpLocal,
      imageLocal: SMARTBOOK_IMAGES.cekList.local,
      imageUrl: SMARTBOOK_IMAGES.cekList.url,
      imageAlt: SMARTBOOK_IMAGES.cekList.alt,
      subImageWebp: imgIso19011Webp,
      subImageJpg: imgIso19011Jpg,
      subImageWebpLocal: SMARTBOOK_IMAGES.iso19011.webpLocal,
      subImageLocal: SMARTBOOK_IMAGES.iso19011.local,
      subImageUrl: SMARTBOOK_IMAGES.iso19011.url,
      subImageAlt: SMARTBOOK_IMAGES.iso19011.alt,
      components: [
        { name: 'AI Checklist & 5W+1H Generator', desc: 'Draf pertanyaan terarah sesuai proses spesifik' },
        { name: 'Starting Point Pertanyaan Audit', desc: 'Tidak bingung menyusun kalimat wawancara' },
        { name: 'Rekomendasi Bukti Objektif (Evidence)', desc: 'Panduan dokumen & rekaman yang relevan untuk diverifikasi' },
        { name: 'ISO 19011 Co-Pilot Assistant', desc: 'Panduan tata cara & etika audit sesuai standar internasional' }
      ]
    },
    {
      badge: 'MESIN 2',
      phase: 'FIND',
      title: 'Bantu Merapikan Catatan Lapangan Menjadi Temuan Terstruktur',
      benefit: 'Catatan lapangan lebih mudah diarahkan menjadi struktur temuan yang jelas.',
      color: 'from-slate-900 via-slate-950 to-amber-950',
      accentBorder: 'border-amber-700/60',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-600/40',
      imageWebp: imgPlorWebp,
      imageJpg: imgPlorJpg,
      imageWebpLocal: SMARTBOOK_IMAGES.plor.webpLocal,
      imageLocal: SMARTBOOK_IMAGES.plor.local,
      imageUrl: SMARTBOOK_IMAGES.plor.url,
      imageAlt: SMARTBOOK_IMAGES.plor.alt,
      components: [
        { name: 'AI PLOR Formulator', desc: 'Standarisasi perumusan temuan ketidaksesuaian' },
        { name: 'Problem (Masalah)', desc: 'Pernyataan ketidaksesuaian yang objektif & faktual' },
        { name: 'Location (Lokasi)', desc: 'Spesifik area, departemen, atau lini kerja' },
        { name: 'Objective Evidence (Bukti Objektif)', desc: 'Fakta rekaman atau observasi yang tidak terbantahkan' },
        { name: 'Requirement (Persyaratan)', desc: 'Rujukan klausul ISO 9001 atau SOP internal yang dilanggar' }
      ]
    },
    {
      badge: 'MESIN 3',
      phase: 'FIX',
      title: 'Bantu Mengeksplorasi Akar Masalah & CAPA Mendalam',
      benefit: 'Analisis tidak berhenti pada gejala, tetapi diarahkan untuk mengeksplorasi akar masalah dan tindakan perbaikan.',
      color: 'from-slate-900 via-slate-950 to-emerald-950',
      accentBorder: 'border-emerald-700/60',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-600/40',
      imageWebp: imgCapaWebp,
      imageJpg: imgCapaJpg,
      imageWebpLocal: SMARTBOOK_IMAGES.capa.webpLocal,
      imageLocal: SMARTBOOK_IMAGES.capa.local,
      imageUrl: SMARTBOOK_IMAGES.capa.url,
      imageAlt: SMARTBOOK_IMAGES.capa.alt,
      components: [
        { name: 'AI CAPA Assistant & 5-Why Analysis', desc: 'Menelusuri akar masalah sistemik di balik temuan' },
        { name: 'Corrective Action (Tindakan Koreksi)', desc: 'Menghilangkan penyebab ketidaksesuaian' },
        { name: 'Preventive Action (Tindakan Pencegahan)', desc: 'Mencegah potensi keberulangan di masa depan' },
        { name: 'CAPA Monitoring & Tracker Worksheet', desc: 'Pantau status perbaikan auditee secara terpusat' }
      ]
    }
  ];

  return (
    <section id="tiga-mesin" className="py-14 sm:py-20 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header (Product Bridging & Core System) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-900/60 border border-blue-700/60 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>SISTEM KERJA UTAMA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            Inilah SMART Audit SYSTEM
          </h2>
          <p className="text-base sm:text-xl font-bold text-blue-300 mb-3">
            Satu Workflow Terintegrasi untuk Auditor Internal ISO 9001 & ISO 19011
          </p>
          <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-2xl mx-auto italic mb-6">
            Bukan sekadar prompt AI, bukan sekadar ebook, dan bukan sekadar kumpulan template terpisah.
          </p>

          {/* Workflow Sequence */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-900/90 border border-slate-800 p-2.5 sm:p-3 rounded-2xl text-xs sm:text-sm font-black text-white shadow-inner">
            <span className="text-blue-400">PREPARE</span>
            <span className="text-slate-600">→</span>
            <span className="text-amber-400">AUDIT</span>
            <span className="text-slate-600">→</span>
            <span className="text-rose-400">FIND</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-400">FIX</span>
            <span className="text-slate-600">→</span>
            <span className="text-teal-300">REPORT</span>
          </div>
        </div>

        {/* 3 Machines Cards */}
        <div className="space-y-8 mb-12">
          {machines.map((m, idx) => (
            <div 
              key={idx}
              className={`bg-gradient-to-br ${m.color} rounded-3xl p-6 sm:p-8 border ${m.accentBorder} shadow-2xl transition-all relative overflow-hidden`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left Side: Title, Benefit & Visual Preview */}
                <div className="lg:w-5/12 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-black tracking-widest px-2.5 py-1 rounded-md border ${m.tagColor}`}>
                      {m.badge}
                    </span>
                    <span className="text-xs font-black text-white/80 tracking-wider">
                      PHASE: {m.phase}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    {m.title}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
                    <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">
                      Key Benefit
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-300 leading-relaxed">
                      “{m.benefit}”
                    </p>
                  </div>

                  {/* Screenshot Visual Asset Preview */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 shadow-md aspect-16/9">
                    <picture>
                      <source srcSet={m.imageWebp} type="image/webp" />
                      <img 
                        src={m.imageJpg} 
                        onError={(e) => handleImageFallback(e, m.imageWebpLocal, m.imageLocal, m.imageUrl)}
                        referrerPolicy="no-referrer"
                        alt={m.imageAlt}
                        width={600}
                        height={338}
                        className="w-full h-auto max-h-48 object-cover block"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>

                {/* Right Side: Components List */}
                <div className="lg:w-7/12 bg-black/40 rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-slate-300 uppercase tracking-wider pb-2 border-b border-white/10 flex items-center justify-between">
                      <span>Komponen & Fitur di Dalamnya</span>
                      <span className="text-[10px] text-emerald-400 font-bold">Siap Pakai</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      {m.components.map((comp, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                              {comp.name}
                            </div>
                            <div className="text-[11px] text-slate-300 font-normal mt-0.5 leading-snug">
                              {comp.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sub-image for Mesin 1 (ISO 19011 Assistant) */}
                  {m.subImageWebp && (
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/80 border border-teal-500/30">
                        <picture>
                          <source srcSet={m.subImageWebp} type="image/webp" />
                          <img 
                            src={m.subImageJpg}
                            onError={(e) => handleImageFallback(e, m.subImageWebpLocal, m.subImageLocal, m.subImageUrl)}
                            referrerPolicy="no-referrer"
                            alt={m.subImageAlt}
                            width={64}
                            height={48}
                            className="w-16 h-12 rounded-lg object-cover border border-teal-500/40 shrink-0"
                            loading="lazy"
                            decoding="async"
                          />
                        </picture>
                        <div className="text-left">
                          <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">Bonus Co-Pilot Asisten</span>
                          <span className="text-xs font-bold text-white">ISO 19011:2026 Audit Assistant</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA: Direct Consistent Call to Action */}
        <div className="max-w-md mx-auto text-center space-y-3">
          <a
            id="machines-buy-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <span>DAPATKAN SMART AUDIT SYSTEM — Rp97.000</span>
            <ArrowRight className="w-4 h-4 hidden sm:inline shrink-0" />
          </a>

          <p className="text-xs text-slate-400 font-medium">
            Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
          </p>
        </div>

      </div>
    </section>
  );
};

