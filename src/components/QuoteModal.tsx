import React, { useState } from 'react';
import { X, Trash2, Send, CheckCircle2, ShoppingCart, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export interface CartItem {
  id: string;
  name: string;
  specs: string;
  qty?: number;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onClearCart,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const buildWhatsAppMessage = () => {
    let msg = `*Shandong Huafeng Refrigeration Equipment Inquiry*\n\n`;
    if (formData.name) msg += `*Name:* ${formData.name}\n`;
    if (formData.company) msg += `*Company:* ${formData.company}\n`;
    if (formData.phone) msg += `*Contact:* ${formData.phone}\n`;
    if (formData.note) msg += `*Notes:* ${formData.note}\n`;
    
    msg += `\n*Selected Products (${cartItems.length}):*\n`;
    if (cartItems.length === 0) {
      msg += `- General Product & Pricing Inquiry\n`;
    } else {
      cartItems.forEach((item, index) => {
        msg += `${index + 1}. *${item.name}*\n   Specs: ${item.specs}\n`;
      });
    }
    return msg;
  };

  const handleDirectWhatsApp = () => {
    const text = buildWhatsAppMessage();
    const url = getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const text = buildWhatsAppMessage();
    const url = getWhatsAppUrl(text);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, '_blank', 'noopener,noreferrer');
      onClearCart();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Equipment Quotation & Specification List
              </h3>
              <p className="text-xs text-slate-400">
                已选设备规格清单与在线询价
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Request Dispatched to Engineering</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Your inquiry has been logged for our Shandong Huafeng engineering dispatch team (Hotline: +60194352738 / +86-13225312519). You will receive an official PDF quotation and technical drawings shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6 text-xs">
            {/* Cart Items List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-300">Selected Products ({cartItems.length}):</span>
                {cartItems.length > 0 && (
                  <button
                    onClick={onClearCart}
                    className="text-slate-400 hover:text-rose-400 text-[11px]"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-center text-slate-500">
                  No equipment added yet. Click &quot;Inquire&quot; or &quot;+&quot; on any Air Cooler, Condenser, Refrigerant, or Fitting in the catalog to add items here.
                </div>
              ) : (
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-bold text-white text-xs">{item.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.specs}</div>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-slate-500 hover:text-rose-400 p-1 rounded"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Client Info Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Pacific Cold Logistics"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. procurement@coldchain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+86 / +62 / other"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-medium">Project Notes / Quantities / Destination Port</label>
                <textarea
                  rows={2}
                  placeholder="Specify units required, custom voltages, port of delivery, or special engineering notes..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 disabled:opacity-50"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{loading ? 'Opening WhatsApp...' : 'Send Inquiry via WhatsApp (+60194352738)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Quick WhatsApp Chat</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
