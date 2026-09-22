export const CHECKOUT_WHATSAPP_NUMBER = '6282227771941';
export const CHECKOUT_WHATSAPP_DISPLAY = '082227771941';
// KONFIGURASI CHECKOUT TUNGGAL:
// Seluruh tombol CTA 100% menggunakan getCheckoutUrl() atau link myscalev.
export const BASE_CHECKOUT_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CHECKOUT_URL) ||
  'https://smartbook.myscalev.com/smart-audit-system';

export const SCALEV_FALLBACK_URL = BASE_CHECKOUT_URL;
export const CHECKOUT_URL = BASE_CHECKOUT_URL;
export const META_PIXEL_ID = '1031140289908433';
export const CHECKOUT_PRICE = 99000;
export const CHECKOUT_PRICE_LABEL = 'Rp99.000';
export const PACKAGE_VALUE_PRICE = 99000;
export const PACKAGE_VALUE_LABEL = 'Rp99.000';

/**
 * Helper to get checkout URL pointing to the official checkout page
 */
export function getCheckoutUrl(): string {
  return CHECKOUT_URL;
}

export const WA_SUPPORT_MESSAGE = 
  'Halo Admin, saya ingin bertanya mengenai SMART AUDIT SYSTEM (Rp99.000). Mohon bantuannya. Terima kasih!';

/**
 * Helper to get direct WhatsApp URL for questions/support
 */
export function getWhatsAppConfirmUrl(customMessage?: string): string {
  const message = customMessage || WA_SUPPORT_MESSAGE;
  return `https://wa.me/${CHECKOUT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface PaymentMethodOption {
  id: string;
  name: string;
  category: 'ewallet' | 'qris' | 'va';
  badge?: string;
  iconType: 'dana' | 'gopay' | 'qris' | 'bni' | 'bri' | 'mandiri' | 'ovo';
}

export const PAYMENT_METHODS: PaymentMethodOption[] = [
  {
    id: 'dana',
    name: 'Dana',
    category: 'ewallet',
    iconType: 'dana',
    badge: 'Instan',
  },
  {
    id: 'gopay',
    name: 'GoPay',
    category: 'ewallet',
    iconType: 'gopay',
    badge: 'Instan',
  },
  {
    id: 'qris',
    name: 'QRIS',
    category: 'qris',
    iconType: 'qris',
    badge: 'Semua Bank & e-Wallet',
  },
  {
    id: 'bni_va',
    name: 'BNI Virtual Account',
    category: 'va',
    iconType: 'bni',
    badge: 'Verifikasi Otomatis',
  },
  {
    id: 'bri_va',
    name: 'BRI Virtual Account',
    category: 'va',
    iconType: 'bri',
    badge: 'Verifikasi Otomatis',
  },
  {
    id: 'mandiri_va',
    name: 'Bank Mandiri Virtual Account',
    category: 'va',
    iconType: 'mandiri',
    badge: 'Verifikasi Otomatis',
  },
  {
    id: 'ovo',
    name: 'OVO',
    category: 'ewallet',
    iconType: 'ovo',
    badge: 'Instan',
  },
];

export const DEFAULT_PREFILLED_MESSAGE = 
  'Halo Admin, saya ingin membeli SMART AUDIT SYSTEM seharga Rp99.000. Mohon info nomor rekening / cara pembayarannya untuk akses instan.';

export const DEFAULT_QUESTION_MESSAGE = 
  'Assalamualaikum Admin SMART AUDIT SYSTEM, saya mau tanya tentang SMART AUDIT SYSTEM...';

export interface WhatsAppTrackingProps {
  position?: string;
  customMessage?: string;
}

export function getWhatsAppUrl(position: string = 'general', customMessage?: string): string {
  const message = customMessage !== undefined ? customMessage : DEFAULT_QUESTION_MESSAGE;
  if (message && message.trim().length > 0) {
    return `https://wa.me/${CHECKOUT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${CHECKOUT_WHATSAPP_NUMBER}`;
}

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
}

async function sendServerEvent(eventName: string, eventId: string, customData?: Record<string, any>) {
  try {
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    await fetch('/api/fb-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        eventSourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        userData: { fbp, fbc },
        customData,
      }),
      keepalive: true,
    });
  } catch (err) {
    // Non-blocking tracking fallback
    console.debug('CAPI server tracking notice:', err);
  }
}

export function trackViewContent(): void {
  const eventId = `vc_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  try {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq(
        'track',
        'ViewContent',
        {
          content_name: 'SMART AUDIT SYSTEM Framework',
          content_ids: ['smart-audit-system'],
          content_type: 'product',
          value: CHECKOUT_PRICE,
          currency: 'IDR',
        },
        { eventID: eventId }
      );
    }
    sendServerEvent('ViewContent', eventId, {
      content_name: 'SMART AUDIT SYSTEM Framework',
      content_ids: ['smart-audit-system'],
      content_type: 'product',
      value: CHECKOUT_PRICE,
      currency: 'IDR',
    });
  } catch (err) {
    console.debug('ViewContent tracking error', err);
  }
}

export function trackPurchase(orderId?: string): void {
  const eventId = `pur_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  try {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq(
        'track',
        'Purchase',
        {
          content_name: 'SMART AUDIT SYSTEM Framework',
          content_ids: ['smart-audit-system'],
          content_type: 'product',
          value: CHECKOUT_PRICE,
          currency: 'IDR',
          order_id: orderId || `ORD-${Date.now()}`,
        },
        { eventID: eventId }
      );
    }
    sendServerEvent('Purchase', eventId, {
      content_name: 'SMART AUDIT SYSTEM Framework',
      content_ids: ['smart-audit-system'],
      content_type: 'product',
      value: CHECKOUT_PRICE,
      currency: 'IDR',
      order_id: orderId || `ORD-${Date.now()}`,
    });
  } catch (err) {
    console.debug('Purchase tracking error', err);
  }
}

export function trackCheckoutClick(position: string = 'general', label?: string): void {
  const eventId = `chk_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  
  try {
    // 1. Browser-side Meta Pixel InitiateCheckout
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq(
        'track',
        'InitiateCheckout',
        {
          content_name: 'SMART Audit SYSTEM',
          content_ids: ['smart-audit-system'],
          content_type: 'product',
          position: position,
          label: label || 'Checkout Direct Link',
          value: CHECKOUT_PRICE,
          currency: 'IDR',
        },
        { eventID: eventId }
      );

      // Dedicated CTA_Click Event for Granular Funnel Attribution
      (window as any).fbq(
        'trackCustom',
        'CTA_Click',
        {
          cta_position: position,
          cta_id: position,
          label: label || 'Checkout Direct Link',
          value: CHECKOUT_PRICE,
          currency: 'IDR',
        },
        { eventID: `${eventId}_cta_click` }
      );

      // Dedicated CTA Click Event for Granular Attribution & Conversion Optimization
      (window as any).fbq(
        'trackCustom',
        'CtaCheckoutClick',
        {
          cta_position: position,
          cta_id: position,
          label: label || 'Checkout Direct Link',
          value: CHECKOUT_PRICE,
          currency: 'IDR',
        },
        { eventID: `${eventId}_cta` }
      );
    }

    // 2. Server-side Meta Conversions API (CAPI)
    sendServerEvent('InitiateCheckout', eventId, {
      content_name: 'SMART Audit SYSTEM Direct Checkout',
      content_ids: ['smart-audit-system'],
      content_type: 'product',
      position,
      label: label || 'Checkout Direct Link',
      value: CHECKOUT_PRICE,
      currency: 'IDR',
    });
  } catch (err) {
    console.debug('Checkout tracking error', err);
  }
}

export function trackWhatsAppClick(position: string = 'general', label?: string): void {
  const eventId = `wa_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  
  try {
    // 1. Browser-side Meta Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq(
        'track',
        'Contact',
        {
          content_name: `WhatsApp Question - ${position}`,
          content_category: 'Customer Support / Lead',
          position: position,
          label: label || 'WA Chat',
          value: CHECKOUT_PRICE,
          currency: 'IDR',
        },
        { eventID: eventId }
      );

      (window as any).fbq(
        'track',
        'Lead',
        {
          content_name: 'SMART Audit SYSTEM WhatsApp Lead',
          content_ids: ['smart-audit-system'],
          content_type: 'product',
          position: position,
          value: CHECKOUT_PRICE,
          currency: 'IDR',
        },
        { eventID: `${eventId}_lead` }
      );

      (window as any).fbq(
        'trackCustom',
        'WhatsAppClick',
        {
          position: position,
          label: label || 'WA Chat',
          timestamp: new Date().toISOString(),
        },
        { eventID: `${eventId}_custom` }
      );
    }

    // 2. Server-side Meta Conversions API (CAPI)
    sendServerEvent('Contact', eventId, {
      content_name: `WhatsApp Question - ${position}`,
      content_category: 'Customer Support / Lead',
      position,
      label: label || 'WA Chat',
      value: CHECKOUT_PRICE,
      currency: 'IDR',
    });

    sendServerEvent('Lead', `${eventId}_lead`, {
      content_name: 'SMART Audit SYSTEM WhatsApp Lead',
      content_ids: ['smart-audit-system'],
      content_type: 'product',
      position,
      value: CHECKOUT_PRICE,
      currency: 'IDR',
    });
  } catch (err) {
    console.debug('Tracking error', err);
  }
}


