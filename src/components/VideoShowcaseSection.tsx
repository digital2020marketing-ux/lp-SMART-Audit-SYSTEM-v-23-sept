import React, { useState, useRef } from 'react';
import { Play, Video, CheckCircle2 } from 'lucide-react';
import { SMART_AUDIT_DEMO_VIDEOS, AuditDemoVideo } from '../data/videoData';

export const VideoShowcaseSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<AuditDemoVideo>(SMART_AUDIT_DEMO_VIDEOS[0]);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectVideo = (video: AuditDemoVideo) => {
    setSelectedVideo(video);
    setPlayingVideoId(video.id);
    if (playerContainerRef.current) {
      playerContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="preview-dashboard" className="py-8 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 relative z-10 text-center">
        {/* Eyebrow & Headline Sesuai Brief */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 bg-indigo-950 text-indigo-300 border border-indigo-700/60 px-3 py-1 rounded-full text-xs font-bold mb-2">
            <Video className="w-3.5 h-3.5 text-indigo-400" />
            <span>9 VIDEO DEMONSTRASI PENGGUNAAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-2 max-w-sm mx-auto">
            LIHAT LANGSUNG BAGAIMANA SMART AUDIT SYSTEM DIGUNAKAN
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed max-w-sm mx-auto mb-3">
            Saksikan rekaman layar asli dari 9 bagian sistem. Video tidak otomatis berputar untuk hemat kuota data.
          </p>

          <div className="inline-block bg-slate-800/90 border border-amber-400/40 rounded-xl px-3 py-1.5 text-[12px] text-amber-300">
            Tekan tombol <span className="font-mono font-bold text-amber-400">&gt;&gt;&gt;&gt;</span> untuk memutar video pilihan Anda.
          </div>
        </div>

        {/* Video Player Container (Non-autoplay) */}
        <div ref={playerContainerRef} className="bg-slate-950 border border-slate-800 rounded-2xl p-2.5 shadow-xl mb-4 max-w-md mx-auto text-left">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
            <span className="font-bold text-red-400">
              Video #{selectedVideo.number}: {selectedVideo.title}
            </span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px]">
              {selectedVideo.badge}
            </span>
          </div>

          <div className="relative rounded-xl overflow-hidden bg-black border border-slate-800/80 aspect-video flex items-center justify-center">
            {playingVideoId === selectedVideo.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div 
                onClick={() => setPlayingVideoId(selectedVideo.id)}
                className="relative w-full h-full cursor-pointer group flex flex-col items-center justify-center text-center p-3 bg-slate-900/90"
              >
                <img
                  src={`https://img.youtube.com/vi/${selectedVideo.id}/hqdefault.jpg`}
                  alt={selectedVideo.title}
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                />
                <div className="relative z-10 w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-2">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
                <div className="relative z-10 bg-slate-950/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-red-500/70 max-w-[90%]">
                  <span className="text-xs font-black text-amber-300 block">
                    TEKAN UNTUK MEMUTAR &gt;&gt;&gt;&gt;
                  </span>
                  <span className="text-[12px] font-bold text-white leading-tight">
                    {selectedVideo.title}
                  </span>
                </div>
              </div>
            )}
          </div>

          <p className="text-xs text-slate-300 mt-2 px-1 leading-relaxed">
            {selectedVideo.description}
          </p>
        </div>

        {/* 9 Video Quick Selector Grid */}
        <div className="max-w-md mx-auto mb-4 text-left">
          <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider block mb-2 px-1">
            DAFTAR 9 VIDEO REKAMAN LAYAR (KLIK UNTUK MEMUTAR):
          </span>
          <div className="space-y-2">
            {SMART_AUDIT_DEMO_VIDEOS.map((v) => {
              const isCurrent = selectedVideo.id === v.id;
              return (
                <div
                  key={v.id}
                  onClick={() => handleSelectVideo(v)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                    isCurrent
                      ? 'bg-slate-800/90 border-red-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-red-600/80 text-white flex items-center justify-center text-xs font-black shrink-0">
                      {v.number}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-bold truncate text-white">
                        {v.title}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {v.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-black font-mono px-2 py-1 rounded bg-slate-800 text-amber-300 shrink-0 border border-slate-700">
                    &gt;&gt;&gt;&gt;
                  </span>
                </div>
              );
            })}
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
