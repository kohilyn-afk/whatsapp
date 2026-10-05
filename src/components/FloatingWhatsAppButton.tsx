import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/60194352738?text=Hello%20Shandong%20Huafeng%20Refrigeration%2C%20I%20would%20like%20to%20inquire%20about%20your%20refrigeration%20equipment.";

  return (
    <aside aria-label="WhatsApp Inquiry" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-900/50 hover:scale-105 transition-all duration-300 font-semibold text-xs group border border-emerald-400/40"
        title="Chat on WhatsApp with Shandong Huafeng (+60194352738)"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline">WhatsApp Inquiries</span>
        <span className="font-mono font-bold text-[11px] bg-emerald-700/80 px-2 py-0.5 rounded-full">
          +60194352738
        </span>
      </a>
    </aside>
  );
};
