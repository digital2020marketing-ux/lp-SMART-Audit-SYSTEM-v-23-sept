import React, { useState } from 'react';
import { Play, CheckCircle2, Video } from 'lucide-react';
import { SMART_AUDIT_DEMO_VIDEOS, AuditDemoVideo } from '../../data/videoData';
import { CtaButton } from './CtaButton';

export const CleanVideoShowcase: React.FC = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  return (
    <section id="video-demo-section" className="w-full bg-slate-900 text-white py-8 sm:py-10 px-4 sm:px-5 border-b border-slate-800 content-auto">
      <div className="w-full text-left">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/80 border border-red-700/60 text-red-300 text-[11px] font-extrabold tracking-wider uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          BUKTI REKAMAN LAYAR ASLI
        </div>

        {/* Section Heading */}
        <h2 className="text-[22px] sm:text-[26px] font-black text-white leading-tight mb-2">
          Lihat Langsung Isi SMART AUDIT SYSTEM Sebelum Membeli
        </h2>

        <p className="text-[13.5px] sm:text-[14.5px] text-slate-300 font-medium leading-relaxed mb-3">
          Supaya Anda yakin 100% tanpa ragu, saksikan rekaman layar asli dari 9 bagian sistem di bawah ini.
        </p>

        {/* Notice on non-autoplay requirement */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 mb-6 flex items-center gap-2 text-[12px] text-amber-300">
          <span className="text-base shrink-0">💡</span>
          <span className="leading-snug font-medium text-slate-200">
            Video <strong className="text-amber-300">tidak berputar otomatis</strong> untuk hemat kuota data. Silakan tekan tombol <span className="font-mono font-bold text-amber-400">&gt;&gt;&gt;&gt;</span> pada video yang ingin Anda tonton.
          </span>
        </div>

        {/* ============================================================== */}
        {/* 9-VIDEO CARDS LIST (Clean, Direct, Non-Autoplay) */}
        {/* ============================================================== */}
        <div className="space-y-4 mb-6">
          {SMART_AUDIT_DEMO_VIDEOS.map((video: AuditDemoVideo) => {
            const isPlayingThis = playingVideoId === video.id;

            return (
              <div
                key={video.id}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all ${
                  isPlayingThis
                    ? 'bg-slate-950 border-red-500 shadow-lg shadow-red-950/50'
                    : 'bg-slate-800/80 border-slate-700 hover:border-slate-600'
                }`}
              >
                {/* Header of Video Item */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-red-600 text-white font-black text-[12px] flex items-center justify-center shrink-0">
                      {video.number}
                    </span>
                    <div>
                      <h3 className="text-[14.5px] sm:text-[15.5px] font-black text-white leading-snug">
                        {video.title}
                      </h3>
                      <span className="text-[11px] font-bold text-red-400 block mt-0.5">
                        {video.badge} • {video.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[12.5px] text-slate-300 font-medium leading-relaxed mb-3">
                  {video.description}
                </p>

                {/* Inline Video Player or Thumbnail Trigger with >>>> */}
                <div className="rounded-xl overflow-hidden bg-black border border-slate-700/80 aspect-video relative flex items-center justify-center">
                  {isPlayingThis ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div
                      onClick={() => handlePlayVideo(video.id)}
                      className="relative w-full h-full cursor-pointer group flex flex-col items-center justify-center text-center p-2.5"
                    >
                      <img
                        src={`/images/yt-thumbs/${video.id}.jpg`}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.fallback) {
                            target.dataset.fallback = '1';
                            target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                          }
                        }}
                        alt={video.title}
                        width={480}
                        height={270}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-black/20" />

                      {/* Play Button */}
                      <div className="relative z-10 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-transform mb-1.5 border border-white/20">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>

                      {/* Action Button Label with >>>> */}
                      <span className="relative z-10 bg-slate-900/90 border border-slate-700 px-3 py-1 rounded-full text-[11.5px] font-bold text-white group-hover:border-red-500 transition-colors shadow-sm">
                        TEKAN UNTUK MEMUTAR <span className="text-amber-400 font-mono">&gt;&gt;&gt;&gt;</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Trigger Button */}
                {!isPlayingThis && (
                  <button
                    type="button"
                    onClick={() => handlePlayVideo(video.id)}
                    className="w-full mt-2.5 py-2 px-3 bg-slate-700/80 hover:bg-red-600 active:bg-red-700 text-white font-bold text-[12.5px] rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Tonton Video #{video.number}</span>
                    <span className="font-mono text-amber-300 font-extrabold">&gt;&gt;&gt;&gt;</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Highlights of System Reality */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-3.5 mb-6 text-slate-200">
          <div className="text-[12px] font-black uppercase text-amber-400 mb-2 tracking-wide flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Semua Yang Anda Lihat di Video Sudah Termasuk:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[12px] font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span> Dashboard Terpusat
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span> 9 Modul &amp; Audio
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span> 7 Worksheet Praktik
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span> 5 AI Tools Spesialis
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span> Simulasi &amp; Kasus
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-black">✓</span> Akses Seumur Hidup
            </div>
          </div>
        </div>

        {/* CTA Strategis setelah Video Proof */}
        <div className="w-full">
          <CtaButton
            position="after_video_proof"
            label="YA, SAYA MAU SMART AUDIT SYSTEM →"
            sublabel="Hanya Rp99.000 • Akses Instan ke Semua Fitur di Atas"
          />
        </div>
      </div>
    </section>
  );
};
