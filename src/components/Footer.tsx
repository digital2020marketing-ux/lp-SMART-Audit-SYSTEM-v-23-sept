import React from 'react';
import { TrendingUp, Lock, ShieldCheck, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 pb-24 sm:py-16 sm:pb-24 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* 14. WHATSAPP CS */}
        <div className="mb-10 max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-3">
            <Headphones className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mb-1.5">
            Ada pertanyaan sebelum membeli?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
            Silakan hubungi WhatsApp:
          </p>
          
          <div className="py-2.5 px-5 bg-slate-800/90 border border-slate-700/80 rounded-xl inline-block">
            <span className="text-base sm:text-lg font-black text-emerald-400 tracking-wider select-all font-mono">
              082227771941
            </span>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm">
            <TrendingUp className="w-4 h-4 text-blue-200" />
          </div>
          <span className="font-black text-2xl tracking-tight text-white">
            SMART<span className="text-blue-400">Audit</span> <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">SYSTEM</span>
          </span>
        </div>

        <p className="text-gray-300 text-sm font-semibold mb-1.5">
          Sistem Praktik Audit Internal untuk Auditor Pemula
        </p>
        <p className="text-xs text-gray-500 max-w-lg mx-auto mb-8">
          9 Modul Panduan • 7 Dokumen Kerja Word & Excel • Simulasi Audit • 5 AI Tools • ISO 9001 & ISO 19011
        </p>

        <div className="border-t border-gray-800/80 pt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© 2026 SMART Audit SYSTEM. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Transaksi Digital Terverifikasi
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Lock className="w-3.5 h-3.5 text-blue-400" /> 100% Akses Terproteksi
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
