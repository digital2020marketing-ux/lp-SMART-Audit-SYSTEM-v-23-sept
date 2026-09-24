import React from 'react';
import { CtaButton } from './CtaButton';

export const CleanProblem: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-12 px-5 border-b border-slate-100">
      <div className="w-full text-left">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] font-black text-slate-900 leading-tight mb-2">
          Kendala yang Sering Dialami Auditor Pemula
        </h2>
        <p className="text-[16px] sm:text-[17px] text-slate-600 font-medium leading-normal mb-7">
          Banyak auditor baru merasa cemas bukan karena tidak membaca standar, melainkan bingung bagaimana cara mengeksekusinya di lapangan.
        </p>

        {/* 3 Simple Problem Items - Paragraphs max 2-3 lines */}
        <div className="space-y-5">
          <div className="border-l-4 border-slate-300 pl-4">
            <h3 className="text-[18px] font-bold text-slate-900 mb-1">
              Bingung Harus Mulai dari Mana
            </h3>
            <p className="text-[16px] text-slate-700 leading-relaxed">
              Memahami teori klausul, tetapi bingung menyusun langkah awal dan membagi ruang lingkup saat jadwal audit tiba.
            </p>
          </div>

          <div className="border-l-4 border-slate-300 pl-4">
            <h3 className="text-[18px] font-bold text-slate-900 mb-1">
              Ragu Menentukan Pertanyaan &amp; Bukti
            </h3>
            <p className="text-[16px] text-slate-700 leading-relaxed">
              Khawatir salah mengajukan pertanyaan wawancara dan tidak yakin bukti dokumen apa yang wajib diminta untuk verifikasi.
            </p>
          </div>

          <div className="border-l-4 border-slate-300 pl-4">
            <h3 className="text-[18px] font-bold text-slate-900 mb-1">
              Kesulitan Menulis Temuan &amp; CAPA
            </h3>
            <p className="text-[16px] text-slate-700 leading-relaxed">
              Sulit merumuskan temuan audit secara objektif tanpa terkesan mencari kesalahan, serta bingung mengarahkan tindakan korektif.
            </p>
          </div>
        </div>

        {/* CTA Bridge */}
        <div className="mt-7 pt-5 border-t border-slate-100">
          <CtaButton
            position="problem_section"
            label="SOLUSINYA: MILIKI SMART AUDIT SYSTEM"
            sublabel="Akses Panduan & Template Siap Pakai — Rp99.000"
          />
        </div>
      </div>
    </section>
  );
};
