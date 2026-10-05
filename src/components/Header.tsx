import React, { useState } from 'react';
import { FileText, Globe, ShoppingCart, Menu, X, PhoneCall, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogData';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  isBrochureMode: boolean;
  onToggleBrochureMode: () => void;
  lang: 'bilingual' | 'en' | 'zh';
  onLangChange: (lang: 'bilingual' | 'en' | 'zh') => void;
  cartCount: number;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  isBrochureMode,
  onToggleBrochureMode,
  lang,
  onLangChange,
  cartCount,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'overview', labelEn: 'Overview', labelZh: '首页概览' },
    { id: 'air-coolers', labelEn: 'Air Coolers', labelZh: 'D型冷风机' },
    { id: 'condensers', labelEn: 'Condensers', labelZh: '风冷冷凝器' },
    { id: 'dimensions', labelEn: 'Dimensions', labelZh: '安装尺寸' },
    { id: 'refrigerants', labelEn: 'Refrigerants', labelZh: '制冷剂' },
    { id: 'fittings', labelEn: 'Fittings', labelZh: '制冷配件' },
    { id: 'contact', labelEn: 'Contact', labelZh: '联系我们' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      {/* Top Utility Bar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 text-xs text-slate-400 bg-slate-950/80 border-b border-slate-800/60">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>{COMPANY_INFO.slogan}</span>
            <span className="text-slate-600">·</span>
            <span>Est. {COMPANY_INFO.establishedYear}</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300 font-mono">
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400 font-sans">Malaysia:</span>
            <a href="tel:+60194352738" className="hover:text-cyan-300 font-bold">+60194352738</a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 font-mono">HQ China: +86-13225312519</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400 font-mono">Jakarta: +62-82210514493</span>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (Nav links) — Zone 3 (Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            onTabChange('overview');
            if (isBrochureMode) onToggleBrochureMode();
          }}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-base shadow-sm group-hover:brightness-110 transition-all">
            ❄
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-white text-lg leading-tight group-hover:text-cyan-300 transition-colors">
              huafeng 华风制冷
            </span>
          </div>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id && !isBrochureMode;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onTabChange(link.id);
                  if (isBrochureMode) onToggleBrochureMode();
                }}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-400 bg-slate-800/80 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {lang === 'zh' ? link.labelZh : lang === 'en' ? link.labelEn : `${link.labelEn}`}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Brochure Mode Switcher */}
          <button
            onClick={onToggleBrochureMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all whitespace-nowrap ${
              isBrochureMode
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-semibold shadow-sm'
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
            title="Switch between modern web layout and original PDF brochure pages"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {isBrochureMode ? 'Web View' : 'PDF Brochure'}
            </span>
          </button>

          {/* Language selector */}
          <div className="relative flex items-center bg-slate-800 border border-slate-700 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => onLangChange('bilingual')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'bilingual' ? 'bg-slate-700 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Dual Chinese & English"
            >
              中/EN
            </button>
            <button
              onClick={() => onLangChange('en')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'en' ? 'bg-slate-700 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLangChange('zh')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'zh' ? 'bg-slate-700 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              中文
            </button>
          </div>

          {/* Quote / Inquiries Button */}
          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all shadow-sm shadow-cyan-900/30 whitespace-nowrap"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Inquire Specs</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-white text-slate-900 font-bold rounded-full text-[10px]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onTabChange(link.id);
                setMobileMenuOpen(false);
                if (isBrochureMode) onToggleBrochureMode();
              }}
              className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 rounded-md"
            >
              <span className="font-medium">{link.labelEn}</span>
              <span className="text-slate-400 ml-2 text-xs">({link.labelZh})</span>
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
            <span>MY: +60194352738</span>
            <span>CN: +86-13225312519</span>
          </div>
        </div>
      )}
    </header>
  );
};
