import React, { useState } from 'react';

export const CleanFooter: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="bg-slate-100 border-t-2 border-slate-300 py-10 px-5 sm:px-8 text-center text-[14.5px] text-slate-700 pb-28 sm:pb-12">
      <div className="max-w-xl mx-auto space-y-3.5">
        <div className="text-center">
          <p className="font-black text-slate-950 text-[16px] tracking-tight">
            SMART AUDIT SYSTEM
          </p>
          <p className="text-[14px] font-bold text-slate-600 mt-0.5">
            Professional Audit Execution Framework • ISO 9001 &amp; ISO 19011
          </p>
        </div>

        <div className="pt-2">
          <p className="text-slate-600 font-medium text-[13.5px]">
            © 2026 SMART AUDIT SYSTEM. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>

        {/* 4 Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-1 text-[13.5px] font-bold text-slate-700">
          <button
            type="button"
            onClick={() => setActiveModal('privacy')}
            className="hover:text-blue-800 hover:underline cursor-pointer"
          >
            Kebijakan Privasi
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setActiveModal('terms')}
            className="hover:text-blue-800 hover:underline cursor-pointer"
          >
            Syarat &amp; Ketentuan
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setActiveModal('guarantee')}
            className="hover:text-blue-800 hover:underline cursor-pointer"
          >
            Kebijakan Garansi
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setActiveModal('contact')}
            className="hover:text-blue-800 hover:underline cursor-pointer"
          >
            Kontak Resmi
          </button>
        </div>
      </div>

      {/* Legal Information Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs text-left"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-[480px] w-full p-6 shadow-2xl border border-slate-200 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-extrabold text-slate-900 text-[18px]">
                {activeModal === 'privacy' && 'Kebijakan Privasi'}
                {activeModal === 'terms' && 'Syarat & Ketentuan'}
                {activeModal === 'guarantee' && 'Kebijakan Garansi 7 Hari'}
                {activeModal === 'contact' && 'Kontak Resmi Support'}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Tutup modal informasi hukum"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="text-[14px] text-slate-600 space-y-3 leading-relaxed">
              {activeModal === 'privacy' && (
                <>
                  <p>
                    Kami menghargai privasi data Anda. Informasi kontak dan email yang Anda gunakan saat proses pembelian hanya dimanfaatkan untuk keperluan pengiriman kredensial akses digital, pembaruan materi sistem audit, dan komunikasi layanan pelanggan resmi.
                  </p>
                  <p>
                    Kami tidak pernah membagikan atau menjual data Anda kepada pihak ketiga mana pun tanpa persetujuan Anda.
                  </p>
                </>
              )}

              {activeModal === 'terms' && (
                <>
                  <p>
                    Akses produk SMART AUDIT SYSTEM diberikan untuk satu lisensi pengguna (personal / internal organisasi pengguna) seumur hidup sesuai ketentuan produk.
                  </p>
                  <p>
                    Dilarang mendistribusikan ulang, menjual kembali, atau membagikan materi ini secara publik tanpa izin tertulis dari manajemen SMART AUDIT SYSTEM.
                  </p>
                </>
              )}

              {activeModal === 'guarantee' && (
                <>
                  <p>
                    Silakan pelajari dan akses SMART AUDIT SYSTEM. Jika dalam periode 7 hari sejak pembelian terdapat kendala teknis valid atau sistem tidak dapat diakses dan tim kami tidak mampu mengatasinya, Anda dapat mengajukan permohonan klaim sesuai prosedur resmi.
                  </p>
                  <p>
                    Pengajuan dilakukan via layanan dukungan resmi dengan melampirkan invoice pembayaran.
                  </p>
                </>
              )}

              {activeModal === 'contact' && (
                <>
                  <p>
                    Untuk bantuan aktivasi akses akun atau kendala teknis sistem, silakan hubungi tim customer service kami:
                  </p>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                    <p className="font-bold text-slate-900 text-[14px]">Layanan Pelanggan:</p>
                    <p className="text-slate-700 font-semibold text-[14px]">Senin – Sabtu, 08.00 – 21.00 WIB</p>
                    <p className="text-[13px] text-slate-500">Respon cepat dalam jam operasional kerja.</p>
                  </div>
                </>
              )}
            </div>

            <div className="mt-5">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-xl text-[14px]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
