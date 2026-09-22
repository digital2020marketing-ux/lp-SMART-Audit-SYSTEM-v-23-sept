import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCtaClick = () => {
    trackCheckoutClick('nav_cta', 'Navbar - DAPATKAN PROMO SEPTEMBER — Rp97.000');
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 flex justify-center bg-white/98 backdrop-blur-md ${
        isScrolled
          ? 'shadow-md border-b border-gray-200/90 py-2'
          : 'shadow-xs border-b border-gray-100 py-2.5'
      }`}
    >
      <div className="w-full max-w-[480px] px-3.5">
        <div className="flex justify-between items-center h-11 gap-2">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm font-bold text-sm shrink-0">
              <BookOpen className="w-4 h-4 text-blue-200" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm tracking-tight text-gray-900 leading-none">
                SMART<span className="text-blue-900">Audit</span> <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 py-0.5 rounded ml-0.5">SYSTEM</span>
              </span>
              <span className="text-[10px] font-semibold text-blue-900 tracking-tight mt-0.5">
                Untuk Auditor Pemula • ISO 9001 & 19011
              </span>
            </div>
          </a>

          {/* Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              id="nav-cta-btn"
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavCtaClick}
              className="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 active:scale-95 text-white px-2.5 py-1.5 rounded-full font-black text-[10px] sm:text-[11px] whitespace-nowrap transition-all shadow-md shadow-red-600/25 cursor-pointer leading-none min-h-[34px]"
            >
              <span>DAPATKAN PROMO SEPTEMBER — Rp97.000</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none shrink-0"
              aria-label="Buka navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gray-900" /> : <Menu className="w-5 h-5 text-gray-900" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 pt-3 pb-4 border-t border-gray-200 bg-white rounded-2xl shadow-xl px-4 space-y-2 text-xs font-semibold">
            <a
              href="#solusi-smart-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              ⚡ SMART Audit System
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              💬 Pengalaman Pengguna
            </a>
            <a
              href="#manfaat-utama"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              🌟 3 Benefit Utama
            </a>
            <a
              href="#isi-paket"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              📦 Isi Paket & Alat Bantu
            </a>
            <a
              href="#alur-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              🔄 7 Alur Kerja Audit
            </a>
            <a
              href="#preview-dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              🎥 Demo Penggunaan
            </a>
            <a
              href="#penawaran-harga"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              🏷️ Promo September Rp97.000
            </a>
            <a
              href="#faq-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              ❓ Pertanyaan Sering Diajukan
            </a>
            <div className="pt-2">
              <a
                href={getCheckoutUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavCtaClick();
                }}
                className="w-full text-center flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 text-white py-3.5 rounded-xl font-black text-xs shadow-md"
              >
                <span>DAPATKAN PROMO SEPTEMBER — Rp97.000</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
