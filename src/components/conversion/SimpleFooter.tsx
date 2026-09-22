import React from 'react';

export const SimpleFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-7 px-4 text-center text-xs sm:text-sm border-t border-slate-900 pb-28">
      <div className="max-w-md mx-auto space-y-4">
        {/* Support WhatsApp Contact Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-center shadow-xs">
          <p className="text-slate-300 font-semibold text-xs sm:text-sm">
            Butuh bantuan transaksi atau pertanyaan teknis?
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-slate-400 text-xs sm:text-sm">Kontak Support:</span>
            <a
              href="https://wa.me/6282227771941?text=Assalamaualaikum%20Admin%20SMART%20Audit%20System"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 font-bold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>082227771941</span>
            </a>
          </div>
        </div>

        <p className="font-bold text-slate-300">
          SMART Audit System • Sistem Praktik Audit Internal
        </p>
        <p className="leading-relaxed text-slate-400 text-xs">
          Disclaimer: SMART Audit System merupakan perangkat kerja dan sistem panduan pendukung audit internal ISO 9001 & ISO 19011. Pengambilan keputusan dan verifikasi bukti objektif tetap berada pada tanggung jawab auditor.
        </p>
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} SMART Audit System. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
};
