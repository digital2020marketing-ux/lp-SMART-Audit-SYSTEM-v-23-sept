import React from 'react';
import { QrCode, ShieldCheck } from 'lucide-react';

interface PaymentMethodsDisplayProps {
  theme?: 'dark' | 'light';
  title?: string;
  showPreviewList?: boolean;
}

export const PaymentMethodsDisplay: React.FC<PaymentMethodsDisplayProps> = ({ 
  theme = 'light',
  title = 'Pilihan Metode Pembayaran Resmi Saat Checkout:',
  showPreviewList = true,
}) => {
  const isDark = theme === 'dark';

  const checkoutMethods = [
    {
      id: 'dana',
      name: 'Dana',
      sub: 'e-Wallet Instan',
      logoBg: 'bg-[#118eea]',
      logo: (
        <div className="w-7 h-7 rounded-full bg-[#118eea] flex items-center justify-center text-white shadow-xs">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 3C6.48 3 2 7.48 2 13c0 3.09 1.41 5.86 3.63 7.7.16.14.37.21.58.21.24 0 .47-.09.64-.26.33-.33.35-.85.05-1.21C5.15 17.89 4 15.58 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.58-1.15 4.89-2.9 6.44-.3.36-.28.88.05 1.21.17.17.4.26.64.26.21 0 .42-.07.58-.21C20.59 18.86 22 16.09 22 13c0-5.52-4.48-10-10-10z" />
            <path d="M15.5 12h-7c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z" />
          </svg>
        </div>
      ),
      badge: 'Verifikasi Otomatis',
    },
    {
      id: 'gopay',
      name: 'GoPay',
      sub: 'e-Wallet Instan',
      logoBg: 'bg-[#00aed6]',
      logo: (
        <div className="w-7 h-7 rounded-full bg-[#00aed6] flex items-center justify-center text-white font-black text-[9px] shadow-xs">
          <span>go</span>
        </div>
      ),
      badge: 'Verifikasi Otomatis',
    },
    {
      id: 'qris',
      name: 'QRIS',
      sub: 'Semua Bank & e-Wallet (BCA, Mandiri, BRI, BNI, dll)',
      logoBg: 'bg-slate-900',
      logo: (
        <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center text-white border border-slate-700 shadow-xs">
          <QrCode className="w-4 h-4 text-rose-400" />
        </div>
      ),
      badge: 'Scan Langsung Aktif',
      popular: true,
    },
    {
      id: 'bni_va',
      name: 'BNI Virtual Account',
      sub: 'Transfer VA Resmi BNI',
      logoBg: 'bg-[#f15a24]',
      logo: (
        <div className="w-7 h-7 rounded-lg bg-[#f15a24] text-white flex items-center justify-center font-black text-[9.5px] shadow-xs">
          <span>BNI</span>
        </div>
      ),
      badge: 'Otomatis 24 Jam',
    },
    {
      id: 'bri_va',
      name: 'BRI Virtual Account',
      sub: 'Transfer VA Resmi Bank BRI / BRIMO',
      logoBg: 'bg-[#00529c]',
      logo: (
        <div className="w-7 h-7 rounded-lg bg-[#00529c] text-white flex items-center justify-center font-black text-[8.5px] shadow-xs tracking-tighter">
          <span>BRI</span>
        </div>
      ),
      badge: 'Otomatis 24 Jam',
    },
    {
      id: 'mandiri_va',
      name: 'Bank Mandiri Virtual Account',
      sub: 'Transfer VA Resmi Livin\' Mandiri',
      logoBg: 'bg-[#002f6c]',
      logo: (
        <div className="w-7 h-7 rounded-lg bg-[#002f6c] text-amber-300 flex items-center justify-center font-black text-[8px] shadow-xs">
          <span>MDR</span>
        </div>
      ),
      badge: 'Otomatis 24 Jam',
    },
    {
      id: 'ovo',
      name: 'OVO',
      sub: 'e-Wallet Instan',
      logoBg: 'bg-[#4c2a86]',
      logo: (
        <div className="w-7 h-7 rounded-full bg-[#4c2a86] border border-purple-300 flex items-center justify-center text-white font-black text-[9px] shadow-xs">
          <span>OVO</span>
        </div>
      ),
      badge: 'Verifikasi Otomatis',
    },
  ];

  return (
    <div className={`w-full rounded-2xl p-4 sm:p-5 border transition-all text-left ${
      isDark 
        ? 'bg-slate-900 border-slate-800 text-slate-200' 
        : 'bg-white border-slate-200 shadow-sm text-slate-800'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-1.5 mb-3 pb-2.5 border-b border-slate-200/80">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span className="text-[13px] sm:text-[13.5px] font-black text-slate-900">
          {title}
        </span>
      </div>

      {/* Replicating the Exact Checkout Radio List from Image */}
      {showPreviewList ? (
        <div className="space-y-1.5 mb-3.5">
          {checkoutMethods.map((method, idx) => (
            <div 
              key={method.id} 
              className={`flex items-center justify-between p-2 sm:p-2.5 rounded-xl border transition-all ${
                idx === 2 
                  ? 'border-blue-300 bg-blue-50/50 shadow-2xs' 
                  : 'border-slate-200/90 bg-slate-50/70 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                {/* Fake Radio Bullet matching image */}
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                  idx === 0 
                    ? 'border-[#118eea] bg-white' 
                    : idx === 2
                    ? 'border-blue-600 bg-white'
                    : 'border-slate-400 bg-white'
                }`}>
                  {idx === 0 && <div className="w-2 h-2 rounded-full bg-[#118eea]" />}
                  {idx === 2 && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                </div>

                {/* Logo & Name */}
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  {method.logo}
                  <div className="truncate">
                    <div className="text-[12.5px] sm:text-[13px] font-black text-slate-900 leading-tight">
                      {method.name}
                    </div>
                    <div className="text-[10.5px] text-slate-500 font-medium truncate">
                      {method.sub}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Compact Badges Row */
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
          {checkoutMethods.map((method) => (
            <div 
              key={method.id}
              className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-200"
            >
              {method.logo}
              <span className="text-[11.5px] font-black text-slate-800 truncate">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
