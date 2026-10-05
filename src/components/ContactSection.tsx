import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe2, Building, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ContactSectionProps {
  lang: 'bilingual' | 'en' | 'zh';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    location: 'Malaysia / China',
    message: '',
    selectedProducts: 'D Type Air Coolers (DD / DJ / DL)',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waText = `*Shandong Huafeng Inquiry from Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Equipment Category:* ${formData.selectedProducts}\n` +
      `*Requirements:* ${formData.message || 'Product catalog & price quotation request'}`;

    const url = getWhatsAppUrl(waText);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" className="py-16 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Phone className="w-4 h-4" />
              <span>Catalog Page 01 · Global Contact Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              请联系我们 <span className="text-cyan-400 font-light">| Contact us</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Connect directly with our engineering sales teams in Malaysia, Jinan (China HQ), and Indonesia.
            </p>
          </div>
          <div className="text-xs text-cyan-400 font-mono font-bold">
            Malaysia Hotline: +60194352738
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Addresses from Page 1 of the PDF */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-cyan-400" />
                <span>Direct Inquiries &amp; Technical Support</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-cyan-800/60 space-y-1">
                  <div className="text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Malaysia Hotline</span>
                  </div>
                  <a
                    href="tel:+60194352738"
                    className="font-mono text-white hover:text-cyan-300 text-base font-black block pt-0.5"
                  >
                    +60194352738
                  </a>
                  <span className="text-[10px] text-slate-400 block">Direct Call &amp; WhatsApp</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>China HQ Phone</span>
                  </div>
                  <a
                    href="tel:+8613225312519"
                    className="font-mono text-cyan-400 hover:underline text-sm font-bold block pt-0.5"
                  >
                    +86-13225312519
                  </a>
                  <span className="text-[10px] text-slate-400 block">Jinan Factory Dispatch</span>
                </div>
              </div>

              {/* Indonesia Hotlines */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                <div className="text-slate-500 font-semibold uppercase">Indonesia Hub Hotlines (Jakarta &amp; Surabaya)</div>
                <div className="flex flex-wrap items-center gap-4 font-mono text-slate-200">
                  <a href="tel:+6282210514493" className="hover:text-cyan-400 font-bold">+62-82210514493</a>
                  <span className="text-slate-600">·</span>
                  <a href="tel:+6287842927992" className="hover:text-cyan-400 font-bold">+62-87842927992</a>
                </div>
              </div>
            </div>

            {/* 3 Facility Location Cards (Factory, Shop, Warehouse) */}
            <div className="space-y-4">
              {/* 1. Factory Address */}
              <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/90 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>Factory Address (工厂地址 · China HQ)</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {COMPANY_INFO.contact.factoryAddress.en}
                </p>
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.contact.factoryAddress.zh}
                </p>
              </div>

              {/* 2. Shop Address */}
              <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/90 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Shop Address (雅加达销售处 · Indonesia)</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {COMPANY_INFO.contact.shopAddress.en}
                </p>
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.contact.shopAddress.zh}
                </p>
              </div>

              {/* 3. Warehouse Address */}
              <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800/90 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Warehouse Address (东爪哇仓库 · Indonesia)</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {COMPANY_INFO.contact.warehouseAddress.en}
                </p>
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.contact.warehouseAddress.zh}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Working Engineering Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="pb-4 mb-6 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white">
                Request Product Pricing & Engineering Consultation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                获取制冷设备选型报价与技术规格书
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Inquiry Received Successfully</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you for contacting Shandong Huafeng Refrigeration Equipment Co., Ltd. Our engineering sales team will follow up via phone / WhatsApp (+60194352738) promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Your Name / 联系人 *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Zhang"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Company Name / 公司名称</label>
                    <input
                      type="text"
                      placeholder="e.g. Cold Chain Logistics Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Phone / WhatsApp / 电话 *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +60 19... or +86 132..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-300 font-medium">Your Region / 地区</label>
                    <input
                      type="text"
                      placeholder="e.g. Malaysia / Indonesia / China"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Equipment Type / 意向产品</label>
                  <select
                    value={formData.selectedProducts}
                    onChange={(e) => setFormData({ ...formData, selectedProducts: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="D Type Air Coolers (DD / DJ / DL)">D-Type Air Coolers (DD / DJ / DL)</option>
                    <option value="Air Cooled Condensers (FNH / FNV)">Air-Cooled Condensers (FNH / FNV)</option>
                    <option value="Compressors & Parallel Racks">Compressors & Parallel Condensing Units</option>
                    <option value="Refrigerant Gas (R134a / R507A / R410A / R404A)">Refrigerant Gas (R134a / R507A / R410A / R404A)</option>
                    <option value="Refrigeration Fittings & Valves">Refrigeration Fittings & Valves (All 24 items)</option>
                    <option value="Complete Cold Room Engineering Package">Complete Cold Room Engineering Package</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-medium">Project Specifications & Questions / 需求描述</label>
                  <textarea
                    rows={4}
                    placeholder="Provide your target room temperature (e.g. 0°C, -18°C, -25°C), room dimensions, capacity requirement, or custom voltage needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 disabled:opacity-50"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{loading ? 'Opening WhatsApp...' : 'Send Inquiry via WhatsApp (+60194352738)'}</span>
                  </button>
                  <a
                    href="https://wa.me/60194352738?text=Hello%20Shandong%20Huafeng%20Refrigeration%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Direct Chat</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
