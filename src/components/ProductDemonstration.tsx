import React from 'react';
import { Play, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgPlorWebp from '../assets/images/Generator-Laporan-Temuan-PLOR.webp';
import imgPlorJpg from '../assets/images/Generator-Laporan-Temuan-PLOR.jpg';

export const ProductDemonstration: React.FC = () => {
  return (
    <section id="demonstrasi" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            <span>DEMO NYATA ALUR KERJA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            Dari Input Sederhana → Starting Point Audit yang Bisa Langsung Dikembangkan
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto">
            Bukan teori abstrak. Lihat bagaimana sistem memproses input kebutuhan audit menjadi draf kerja konkret:
          </p>
        </div>

        {/* Real Demo Case Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6 mb-8">
          
          {/* Skenario Header */}
          <div className="border-b border-slate-800 pb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                CONTOH KASUS NYATA
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Audit Departemen Purchasing — Kontrol & Evaluasi Supplier
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Klausul 8.4 ISO 9001:2015
            </span>
          </div>

          {/* INPUT AUDITOR */}
          <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>INPUT SEDERHANA AUDITOR:</span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm text-emerald-400">
              Proses: <strong>Purchasing</strong> | Fokus: <strong>Kontrol & Evaluasi Supplier</strong> | Klausul: <strong>8.4</strong>
            </div>
          </div>

          {/* OUTPUT SISTEM */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-5 sm:p-6 border border-emerald-900/60 shadow-inner space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>OUTPUT SMART AUDIT SYSTEM (STARTING POINT SIAP PAKAI):</span>
            </div>

            {/* Questions Generated */}
            <div>
              <span className="font-bold text-white text-xs sm:text-sm block mb-2">
                📌 Rekomendasi Pertanyaan Open-Ended (5W+1H):
              </span>
              <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                  • <em>“Bagaimana organisasi menentukan kriteria seleksi supplier sebelum supplier masuk ke dalam Approved Vendor List?”</em>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                  • <em>“Kapan evaluasi berkala terhadap kinerja supplier terakhir kali dilakukan, dan bagaimana hasilnya ditindaklanjuti jika ada penurunan performa?”</em>
                </div>
              </div>
            </div>

            {/* Evidences to verify */}
            <div className="pt-3 border-t border-slate-800">
              <span className="font-bold text-white text-xs sm:text-sm block mb-2">
                🔍 Bukti Objektif yang Perlu Diverifikasi di Lapangan:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Approved Vendor List (AVL) termutakhir</span>
                </div>
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Formulir rekaman evaluasi kinerja supplier</span>
                </div>
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sampel Purchase Order (PO) acak</span>
                </div>
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Bukti verifikasi kesesuaian spesifikasi</span>
                </div>
              </div>
            </div>

          </div>

          {/* VISUAL WAJIB #3: Screenshot Generator Laporan Temuan PLOR */}
          <div className="pt-2">
            <span className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider">
              Tangkapan Layar Formulator Temuan & PLOR Engine:
            </span>
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-lg aspect-16/9 sm:aspect-16/9">
              <picture>
                <source srcSet={imgPlorWebp} type="image/webp" />
                <img
                  src={imgPlorJpg}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.plor.webpLocal, SMARTBOOK_IMAGES.plor.local, SMARTBOOK_IMAGES.plor.url)}
                  alt="Screenshot Asli Generator Temuan PLOR SMART Audit SYSTEM"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>

        </div>

        {/* Big Mindset Statement */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800 rounded-2xl p-5 sm:p-7 text-center shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Perubahan Cara Berpikir Auditor:
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-xs sm:text-sm text-red-300 line-through">
              Bukan lagi: “Pertanyaan apa yang harus saya buat dari nol?”
            </p>
            <p className="text-base sm:text-lg font-black text-emerald-400">
              Tetapi: “Mana yang relevan untuk saya verifikasi di lapangan?”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

