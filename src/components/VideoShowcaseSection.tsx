import React, { useState } from 'react';
import { Play, Video } from 'lucide-react';

export const VideoShowcaseSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const mainVideoId = 'TgVG0K9X2zk';
  const videoTitle = 'Demo Penggunaan SMART Audit SYSTEM';

  return (
    <section id="preview-dashboard" className="py-8 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 relative z-10 text-center">
        
        {/* Eyebrow & Headline Sesuai Brief */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 bg-indigo-950 text-indigo-300 border border-indigo-700/60 px-3 py-1 rounded-full text-xs font-bold mb-2">
            <Video className="w-3.5 h-3.5 text-indigo-400" />
            <span>DEMONSTRASI PENGGUNAAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2 max-w-sm mx-auto">
            LIHAT LANGSUNG BAGAIMANA SMART AUDIT SYSTEM DIGUNAKAN
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed max-w-sm mx-auto">
            Saksikan bagaimana materi, formulir kerja, dan alat bantu AI bekerja bersama mendampingi persiapan audit Anda.
          </p>
        </div>

        {/* Video Player Container (Non-autoplay) */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2.5 shadow-xl mb-4 max-w-md mx-auto">
          <div className="relative rounded-xl overflow-hidden bg-black border border-slate-800/80 aspect-video flex items-center justify-center">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title={videoTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div 
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer group flex flex-col items-center justify-center text-center p-3 bg-slate-900/90"
              >
                <img
                  src={`https://img.youtube.com/vi/${mainVideoId}/hqdefault.jpg`}
                  alt={videoTitle}
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                />
                <div className="relative z-10 w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-2">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
                <div className="relative z-10 bg-slate-950/95 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-slate-700 max-w-[90%]">
                  <span className="text-xs font-bold text-amber-400 block mb-0.5">
                    ▶️ Putar Video Demo
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white leading-tight">
                    Walkthrough Sistem & Fitur Praktik
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3 Quick Highlight Pills */}
        <div className="grid grid-cols-3 gap-2 mb-4 max-w-md mx-auto text-left">
          <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-2.5 text-center">
            <span className="text-xs font-bold text-slate-100 block">📱 Akses Web</span>
            <span className="text-[11px] text-slate-300 font-medium">HP & Laptop</span>
          </div>
          <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-2.5 text-center">
            <span className="text-xs font-bold text-slate-100 block">📂 7 File Kerja</span>
            <span className="text-[11px] text-slate-300 font-medium">Word & Excel</span>
          </div>
          <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-2.5 text-center">
            <span className="text-xs font-bold text-slate-100 block">⚡ 5 AI Tools</span>
            <span className="text-[11px] text-slate-300 font-medium">Siap Pakai</span>
          </div>
        </div>

      </div>
    </section>
  );
};
