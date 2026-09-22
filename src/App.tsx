import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HighConvertingLandingPage } from './HighConvertingLandingPage';
import { trackViewContent, trackPurchase, CHECKOUT_WHATSAPP_DISPLAY, getWhatsAppUrl } from './constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const OriginalLandingPage = lazy(() =>
  import('./OriginalLandingPage').then((m) => ({ default: m.OriginalLandingPage }))
);
const CopilotLandingPage = lazy(() =>
  import('./CopilotLandingPage').then((m) => ({ default: m.CopilotLandingPage }))
);

export default function App() {
  const [activeView, setActiveView] = useState<'high_converting' | 'original' | 'copilot' | 'success'>('high_converting');

  useEffect(() => {
    // Check URL query parameters
    if (typeof window !== 'undefined') {
      const search = window.location.search.toLowerCase();
      if (search.includes('status=success') || search.includes('payment=success') || search.includes('purchase=true')) {
        setActiveView('success');
        trackPurchase();
      } else if (search.includes('v=original') || search.includes('variant=original')) {
        setActiveView('original');
        trackViewContent();
      } else if (search.includes('v=copilot') || search.includes('variant=copilot')) {
        setActiveView('copilot');
        trackViewContent();
      } else {
        setActiveView('high_converting');
        trackViewContent();
      }
    }
  }, []);

  if (activeView === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-gray-200 p-6 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-black text-slate-900">
            Pembayaran Berhasil!
          </h1>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Terima kasih telah membeli <strong>SMART AUDIT SYSTEM</strong>. Akses digital sedang dikirimkan ke email aktif Anda.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-[14px] text-slate-700 space-y-2">
            <div>✓ 9 Modul Audit Terstruktur</div>
            <div>✓ 7 Audit Workbooks Siap Implementasi</div>
            <div>✓ 5 AI Audit Frameworks</div>
            <div>✓ Simulasi &amp; Studi Kasus Audit</div>
            <div>✓ Podcast Audio Pendalaman Materi</div>
            <div>✓ Akses Seumur Hidup</div>
          </div>
          <a
            href={getWhatsAppUrl('post_purchase', 'Halo Admin, saya sudah menyelesaikan pembayaran SMART AUDIT SYSTEM Rp99.000. Mohon bantuan aktivasi akses.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center"
          >
            Hubungi Admin WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100/70 text-gray-900 flex flex-col items-center selection:bg-blue-600 selection:text-white antialiased relative">
      {activeView === 'original' ? (
        <Suspense fallback={<div className="text-gray-700 p-8 text-center font-sans">Memuat...</div>}>
          <OriginalLandingPage />
        </Suspense>
      ) : activeView === 'copilot' ? (
        <Suspense fallback={<div className="text-gray-700 p-8 text-center font-sans">Memuat...</div>}>
          <CopilotLandingPage />
        </Suspense>
      ) : (
        <HighConvertingLandingPage />
      )}
    </div>
  );
}
