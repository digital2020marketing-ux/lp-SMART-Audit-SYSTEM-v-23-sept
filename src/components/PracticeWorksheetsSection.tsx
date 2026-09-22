import React from 'react';
import { FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgWorksheetWebp from '../assets/images/worksheet-dan-formulir-AMI.webp';
import imgWorksheetJpg from '../assets/images/worksheet-dan-formulir-AMI.jpg';

export const PracticeWorksheetsSection: React.FC = () => {
  const documentList = [
    'Program Audit',
    'Audit Plan & Jadwal',
    'Surat Notifikasi Audit',
    'Checklist Audit',
    'Daftar Hadir',
    'PTKP & CAPA',
    'Laporan Audit'
  ];

  return (
    <section id="worksheet-audit" className="py-8 bg-white border-b border-gray-200">
      <div className="w-full px-4">
        <div className="text-center mb-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
            7 WORKSHEET AUDIT
          </span>
          <h2 className="text-xl font-black text-gray-900 tracking-tight mt-2 leading-tight">
            Tidak Hanya Belajar — Anda Juga Mendapatkan Worksheet Audit
          </h2>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Dokumen kerja audit yang siap digunakan untuk latihan dan tugas audit internal.
          </p>
        </div>

        {/* Worksheet Image Preview */}
        <div className="mb-4 rounded-2xl overflow-hidden border border-gray-200 bg-slate-900 aspect-16/9 shadow-sm">
          <picture>
            <source srcSet={imgWorksheetWebp} type="image/webp" />
            <img
              src={imgWorksheetJpg}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.worksheet.webpLocal, SMARTBOOK_IMAGES.worksheet.local, SMARTBOOK_IMAGES.worksheet.url)}
              alt="7 Worksheet Dokumen Kerja Audit"
              width={600}
              height={338}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>

        {/* 7 Worksheets Card */}
        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold shrink-0">
              <FileSpreadsheet className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">
              7 Dokumen Kerja Siap Pakai:
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-1.5 mb-4">
            {documentList.map((doc, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-bold text-gray-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          <div className="bg-emerald-100/80 border border-emerald-300/80 text-emerald-950 rounded-xl p-2.5 text-center text-xs font-bold">
            Word & Excel • 100% Dapat Diedit • Dapat Disesuaikan
          </div>
        </div>
      </div>
    </section>
  );
};

