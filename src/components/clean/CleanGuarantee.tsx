import React, { useState } from 'react';

export const CleanGuarantee: React.FC = () => {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  return (
    <section className="bg-white py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="garansi">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase">
            <span>KEBIJAKAN GARANSI RESMI</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[22px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-3 text-center uppercase break-words px-1">
          GARANSI 7 HARI
        </h2>

        {/* Concrete Copy */}
        <div className="text-[15px] sm:text-[16.5px] text-slate-800 leading-relaxed mb-5 text-center font-medium space-y-2 bg-slate-50 border border-slate-200/90 rounded-2xl p-5">
          <p>
            Jika dalam 7 hari Anda merasa <strong className="text-slate-950 font-black">SMART AUDIT SYSTEM</strong> tidak memberikan manfaat nyata untuk proses audit internal Anda, hubungi kami untuk pengembalian dana 100%.
          </p>
          <p className="text-[14px] text-slate-500 font-bold">
            Tanpa ribet. Investasi Anda sepenuhnya bebas risiko.
          </p>
        </div>

        {/* Tombol Kebijakan Garansi */}
        <div>
          <button
            type="button"
            onClick={() => setShowPolicyModal(true)}
            className="inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] font-bold text-slate-600 hover:text-slate-900 hover:underline cursor-pointer transition-colors py-1.5 px-3 bg-white border border-slate-300 rounded-lg"
          >
            <span>Lihat Ketentuan Lengkap Garansi</span>
            <span className="text-[13px]">→</span>
          </button>
        </div>
      </div>

      {/* Modal Kebijakan Garansi */}
      {showPolicyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
          onClick={() => setShowPolicyModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-[460px] w-full p-6 text-left shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-extrabold text-slate-900 text-[18px]">
                Kebijakan Garansi 7 Hari
              </h3>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                aria-label="Tutup modal kebijakan garansi"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-[14px] text-slate-600 leading-relaxed space-y-3">
              <p>
                SMART AUDIT SYSTEM disusun sebagai framework kerja audit profesional yang terstruktur dan aplikatif.
              </p>
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-800 text-[14px]">Ketentuan Pengajuan Garansi:</div>
                <ul className="list-disc pl-5 space-y-1.5 text-[13px] text-slate-700">
                  <li>Pengajuan diajukan maksimal 7 hari kalender sejak tanggal pembelian produk.</li>
                  <li>Pengguna telah mengakses sistem dan mempelajari modul serta workbook yang disediakan.</li>
                  <li>Pengajuan disampaikan melalui kontak resmi WhatsApp dengan menyampaikan konfirmasi pemesanan dan alasan substantif ketidaksesuaian.</li>
                </ul>
              </div>
              <p className="text-[13px] text-slate-500">
                Pengajuan yang memenuhi ketentuan akan diverifikasi dan diproses pengembalian dananya dalam 1-3 hari kerja perbankan.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="px-5 py-2 bg-slate-900 text-white font-bold text-[14px] rounded-xl hover:bg-slate-800 cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
