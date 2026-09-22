import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackWhatsAppClick } from '../../constants';

export const GaransiSection: React.FC = () => {
  const handleWaClick = () => {
    trackWhatsAppClick('garansi_section', 'Tanya Ketentuan Garansi 7 Hari');
  };

  return (
    <section id="garansi" className="bg-slate-900 text-white py-8 px-4 sm:px-6 border-b border-slate-800">
      <div className="max-w-md mx-auto">
        <div className="bg-slate-800/90 border-2 border-emerald-500/50 rounded-2xl p-5 sm:p-6 shadow-xl text-center">
          
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto mb-3 text-emerald-400 shadow-xs">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block mb-1">
            COBA DENGAN RISIKO LEBIH RENDAH
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2.5 uppercase">
            GARANSI 7 HARI
          </h3>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-4">
            Pelajari alurnya, buka worksheet, dan coba simulasinya. Jika produk tidak membantu kebutuhan persiapan audit Anda, pengajuan pengembalian dana dapat dilakukan sesuai ketentuan garansi.
          </p>

          <a
            href={getWhatsAppUrl('garansi_section', 'Halo Admin, saya ingin menanyakan ketentuan garansi 7 hari SMART Audit System')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWaClick}
            className="inline-flex items-center justify-center gap-2 py-2 px-3.5 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold border border-slate-600 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tanya Ketentuan Garansi via WhatsApp</span>
          </a>

        </div>
      </div>
    </section>
  );
};
