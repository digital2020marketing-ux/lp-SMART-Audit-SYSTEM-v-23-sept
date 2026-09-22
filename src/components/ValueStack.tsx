import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Zap, FileSpreadsheet, BookOpen, Gift, CheckCircle2, Sparkles, Headphones, Award } from 'lucide-react';
import { CHECKOUT_URL, trackCheckoutClick } from '../constants';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import img5AiToolsWebp from '../assets/images/5-AI-TOOLS-dan-SIMULASI.webp';
import img5AiToolsJpg from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';
import imgWorksheetWebp from '../assets/images/worksheet-dan-formulir-AMI.webp';
import imgWorksheetJpg from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import img9ModulWebp from '../assets/images/9-modul.webp';
import img9ModulJpg from '../assets/images/9-modul.jpg';
import imgPodcastWebp from '../assets/images/podcast-audio-ulasan-mendalam.webp';
import imgPodcastJpg from '../assets/images/podcast-audio-ulasan-mendalam.jpg';
import imgPrePostTestWebp from '../assets/images/EVALUASI-PRE-TEST-DAN-POST-TEST.webp';
import imgPrePostTestJpg from '../assets/images/EVALUASI-PRE-TEST-DAN-POST-TEST.jpg';

export const ValueStack: React.FC = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('value_stack_buy', 'Value Stack - Beli SMART Audit System Rp197.000');
  };

  const coreSystem = [
    { title: 'AI Checklist & 5W+1H Generator', desc: 'Draf pertanyaan audit komprehensif open-ended & bukti objektif otomatis.' },
    { title: 'AI PLOR Formulator', desc: 'Standarisasi temuan ketidaksesuaian (Problem, Location, Evidence, Requirement).' },
    { title: 'AI CAPA & 5-Why Root Cause Assistant', desc: 'Eksplorasi akar masalah sistemik dan formulasi tindakan korektif/preventif.' },
    { title: 'ISO 19011 Co-Pilot Assistant', desc: 'Panduan tata cara, prinsip, dan etika audit internal profesional.' },
    { title: 'All-in-One Cloud Web Dashboard', desc: 'Akses instan di laptop/smartphone tanpa perlu instalasi rumit.' }
  ];

  const workingDocuments = [
    { title: 'Formulir Program Audit Tahunan (Word)', desc: 'Template perencanaan jadwal audit organisasi' },
    { title: 'Audit Plan / Rencana Audit Spesifik (Word)', desc: 'Matriks alur audit divisi, auditor & waktu' },
    { title: 'Jadwal Audit Matriks Terintegrasi (Excel)', desc: 'Timeline & monitoring kehadiran auditee' },
    { title: 'Daftar Pertanyaan Checklist Audit (Word & Excel)', desc: 'Format pencatatan hasil verifikasi lapangan' },
    { title: 'Formulir PTKP / Ketidaksesuaian (Word)', desc: 'Format baku penerbitan temuan audit internal' },
    { title: 'CAPA Monitoring & Verification Tracker (Excel)', desc: 'Dashboard tracking status tindak lanjut perbaikan' },
    { title: 'Format Laporan Ringkasan Eksekutif Audit (Word)', desc: 'Format laporan resmi untuk Top Management & RTM' }
  ];

  const knowledgeSystem = [
    { title: '9 Modul Lengkap Audit Mutu Internal', desc: 'Panduan step-by-step dari dasar ISO 9001 hingga pelaporan' },
    { title: 'Slide Presentasi Sosialisasi Audit', desc: 'Bahan tayang siap pakai untuk briefing internal' },
    { title: 'Mind Map Visual Alur Siklus Audit Mutu', desc: 'Peta grafis alur kerja audit dari awal hingga akhir' },
    { title: 'Paket Pre-Test & Post-Test Audit Mutu', desc: 'Instrumen evaluasi pemahaman tim auditor internal' }
  ];

  const bonusItems = [
    { title: 'Podcast & Audio Learning Series', desc: 'Ringkasan audio penjelasan audit yang bisa didengar kapan saja' },
    { title: 'Lembar Referensi Cepat Klausul ISO 9001:2015 & 2026', desc: 'Cheat sheet cepat interpretasi klausul standar' }
  ];

  return (
    <section id="komponen-sistem" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-blue-900/60 border border-blue-700/60 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>VALUE STACK & KOMPONEN LENGKAP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Seluruh Komponen yang Anda Dapatkan di SMART Audit SYSTEM
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Satu kesatuan ekosistem kerja yang menggabungkan <strong className="text-white">Core AI System</strong>, <strong className="text-white">Worksheet Operasional</strong>, dan <strong className="text-white">Knowledge System</strong>.
          </p>
        </div>

        {/* 1. CORE SYSTEM (MOST DOMINANT) */}
        <div className="mb-8 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border-2 border-blue-500 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-500 text-slate-950 font-black text-[11px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
            KOMPONEN UTAMA (CORE ENGINE)
          </div>

          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-800/80">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                1. CORE SYSTEM — AI-Assisted Audit Engine
              </h3>
              <p className="text-xs text-blue-300 font-semibold">
                Mesin utama untuk mendapatkan starting point terstruktur dalam setiap tahapan audit
              </p>
            </div>
          </div>

          {/* Core System Image Banner */}
          <div className="mb-6 rounded-2xl overflow-hidden border border-blue-500/40 bg-slate-950 shadow-xl aspect-16/9">
            <picture>
              <source srcSet={img5AiToolsWebp} type="image/webp" />
              <img 
                src={img5AiToolsJpg}
                onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.aiToolsSuite.local, SMARTBOOK_IMAGES.aiToolsSuite.url, SMARTBOOK_IMAGES.aiToolsSuite.urlAlt)}
                referrerPolicy="no-referrer"
                alt={SMARTBOOK_IMAGES.aiToolsSuite.alt}
                width={1200}
                height={675}
                className="w-full h-auto object-cover block"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {coreSystem.map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-blue-800/50 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <div className="text-xs text-slate-300 font-normal mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. WORKING DOCUMENTS & 3. KNOWLEDGE SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* 2. WORKING DOCUMENTS */}
          <div className="rounded-3xl p-6 bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-emerald-900/60 text-emerald-400 border border-emerald-700/50 flex items-center justify-center">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    2. WORKING DOCUMENTS
                  </h3>
                  <p className="text-[11px] text-emerald-400 font-bold">
                    7 Worksheet Word & Excel (100% Editable)
                  </p>
                </div>
              </div>

              {/* Worksheet Preview Image */}
              <div className="mb-4 rounded-xl overflow-hidden border border-emerald-800/40 bg-slate-900 shadow-md aspect-16/9">
                <picture>
                  <source srcSet={imgWorksheetWebp} type="image/webp" />
                  <img 
                    src={imgWorksheetJpg}
                    onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.worksheet.webpLocal, SMARTBOOK_IMAGES.worksheet.local, SMARTBOOK_IMAGES.worksheet.url)}
                    referrerPolicy="no-referrer"
                    alt={SMARTBOOK_IMAGES.worksheet.alt}
                    width={600}
                    height={338}
                    className="w-full h-auto max-h-48 object-cover block"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <div className="space-y-2.5">
                {workingDocuments.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white leading-tight">{item.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. KNOWLEDGE SYSTEM & 4. BONUS */}
          <div className="space-y-6 flex flex-col justify-between">
            
            {/* KNOWLEDGE SYSTEM */}
            <div className="rounded-3xl p-6 bg-slate-950 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="w-9 h-9 rounded-xl bg-indigo-900/60 text-indigo-400 border border-indigo-700/50 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    3. KNOWLEDGE SYSTEM
                  </h3>
                  <p className="text-[11px] text-indigo-300 font-bold">
                    9 Modul Pembelajaran, Slide & Mind Map
                  </p>
                </div>
              </div>

              {/* 9 Modul and Pre/Post Test Visual Previews */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="rounded-xl overflow-hidden border border-indigo-800/40 bg-slate-900">
                  <picture>
                    <source srcSet={img9ModulWebp} type="image/webp" />
                    <img 
                      src={img9ModulJpg}
                      onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.modul9.webpLocal, SMARTBOOK_IMAGES.modul9.local, SMARTBOOK_IMAGES.modul9.url)}
                      referrerPolicy="no-referrer"
                      alt={SMARTBOOK_IMAGES.modul9.alt}
                      width={300}
                      height={100}
                      className="w-full h-24 object-cover block"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="p-1.5 text-center text-[10px] font-bold text-indigo-300 truncate">9 Modul Panduan</div>
                </div>
                <div className="rounded-xl overflow-hidden border border-amber-800/40 bg-slate-900">
                  <picture>
                    <source srcSet={imgPrePostTestWebp} type="image/webp" />
                    <img 
                      src={imgPrePostTestJpg}
                      onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.evaluasi.webpLocal, SMARTBOOK_IMAGES.evaluasi.local, SMARTBOOK_IMAGES.evaluasi.url)}
                      referrerPolicy="no-referrer"
                      alt={SMARTBOOK_IMAGES.evaluasi.alt}
                      width={300}
                      height={100}
                      className="w-full h-24 object-cover block"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="p-1.5 text-center text-[10px] font-bold text-amber-300 truncate">Pre & Post Test</div>
                </div>
              </div>

              <div className="space-y-2.5">
                {knowledgeSystem.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/70 flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white leading-tight">{item.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. BONUS */}
            <div className="rounded-3xl p-5 bg-gradient-to-r from-amber-950/40 to-slate-950 border border-amber-800/40 shadow-lg">
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-amber-900/40">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider">
                  4. BONUS TAMBAHAN
                </span>
              </div>

              {/* Podcast Audio Visual Preview */}
              <div className="mb-3 rounded-xl overflow-hidden border border-amber-700/40 bg-slate-900 shadow-sm">
                <div className="flex items-center gap-3 p-2">
                  <picture>
                    <source srcSet={imgPodcastWebp} type="image/webp" />
                    <img 
                      src={imgPodcastJpg}
                      onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.podcast.webpLocal, SMARTBOOK_IMAGES.podcast.local, SMARTBOOK_IMAGES.podcast.url)}
                      referrerPolicy="no-referrer"
                      alt={SMARTBOOK_IMAGES.podcast.alt}
                      width={80}
                      height={56}
                      className="w-20 h-14 rounded-lg object-cover border border-amber-600/30 shrink-0"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-400 uppercase">
                      <Headphones className="w-3 h-3" />
                      <span>9 Seri Audio MP3</span>
                    </div>
                    <div className="text-xs font-bold text-white leading-tight mt-0.5">Podcast Audio Ulasan Mendalam</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Dengarkan fleksibel di smartphone/laptop</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {bonusItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <span className="text-amber-400 font-bold">★</span>
                    <div>
                      <strong className="text-white">{item.title}:</strong> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* CTA 4: Consistent Action Button */}
        <div className="max-w-md mx-auto text-center space-y-3 pt-4">
          <a
            id="valuestack-buy-cta"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 border border-red-500/40 cursor-pointer"
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

