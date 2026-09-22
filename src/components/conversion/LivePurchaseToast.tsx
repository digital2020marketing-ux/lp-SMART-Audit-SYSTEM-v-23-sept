import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Zap } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  role: string;
  city: string;
  timeAgo: string;
}

const RECENT_PURCHASES: PurchaseEvent[] = [
  { name: 'Wahyu S.', role: 'Auditor Internal', city: 'Cikarang', timeAgo: '2 menit lalu' },
  { name: 'Rina W.', role: 'Quality Assurance', city: 'Surabaya', timeAgo: '5 menit lalu' },
  { name: 'Budi Santoso', role: 'Staff HSE & Mutu', city: 'Karawang', timeAgo: '8 menit lalu' },
  { name: 'Dedi Kurniawan', role: 'Auditor Baru', city: 'Semarang', timeAgo: '12 menit lalu' },
  { name: 'Siti Rahma', role: 'Manajemen Representatif', city: 'Jakarta', timeAgo: '15 menit lalu' },
  { name: 'Agus Triyono', role: 'Lead Auditor Internal', city: 'Bekasi', timeAgo: '19 menit lalu' },
  { name: 'Fajar Nugraha', role: 'Document Controller', city: 'Tangerang', timeAgo: '24 menit lalu' },
  { name: 'Hendra Pratama', role: 'Staff Operasional', city: 'Bandung', timeAgo: '28 menit lalu' },
];

export const LivePurchaseToast: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState<PurchaseEvent | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissedByUser, setIsDismissedByUser] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissedByUser) return;

    // First appearance after 6 seconds
    const initialTimer = setTimeout(() => {
      showRandomEvent();
    }, 6000);

    // Loop every 22 seconds
    const intervalTimer = setInterval(() => {
      showRandomEvent();
    }, 22000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [isDismissedByUser]);

  const showRandomEvent = () => {
    const randomIndex = Math.floor(Math.random() * RECENT_PURCHASES.length);
    setCurrentEvent(RECENT_PURCHASES[randomIndex]);
    setIsVisible(true);

    // Auto hide after 5.5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5500);
  };

  if (!isVisible || !currentEvent || isDismissedByUser) {
    return null;
  }

  return (
    <aside
      aria-live="polite"
      className="fixed bottom-18 sm:bottom-20 left-3 right-3 sm:right-auto sm:left-4 z-45 max-w-[360px] animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-auto"
    >
      <div className="bg-slate-950/95 text-white backdrop-blur-md rounded-2xl border border-emerald-500/60 p-3 shadow-2xl flex items-center gap-3 relative">
        {/* Left Pulse Avatar */}
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 text-emerald-400">
          <Zap className="w-4 h-4 fill-emerald-400" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs font-black text-white truncate">
              {currentEvent.name}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              ({currentEvent.city})
            </span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          </div>
          <p className="text-[11px] text-emerald-300 font-medium leading-tight truncate">
            Baru saja checkout <span className="font-bold text-white">SMART Audit System</span>
          </p>
          <span className="text-[9px] text-slate-400 font-normal block mt-0.5">
            {currentEvent.role} • {currentEvent.timeAgo}
          </span>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            setIsVisible(false);
            setIsDismissedByUser(true);
          }}
          className="absolute top-2 right-2 text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
          aria-label="Tutup pemberitahuan"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
