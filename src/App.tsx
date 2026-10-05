/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyProfileAndContents } from './components/CompanyProfileAndContents';
import { AirCoolersSection } from './components/AirCoolersSection';
import { InstallingDimensionsSection } from './components/InstallingDimensionsSection';
import { CondensersSection } from './components/CondensersSection';
import { RefrigerantsSection } from './components/RefrigerantsSection';
import { FittingsSection } from './components/FittingsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrochureMode } from './components/BrochureMode';
import { CoolingCalculatorModal } from './components/CoolingCalculatorModal';
import { QuoteModal, CartItem } from './components/QuoteModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('overview');
  const [isBrochureMode, setIsBrochureMode] = useState<boolean>(false);
  const [lang, setLang] = useState<'bilingual' | 'en' | 'zh'>('bilingual');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [selectedDimensionModel, setSelectedDimensionModel] = useState<string>('DD100');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    if (tab === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(tab);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (item: { id: string; name: string; specs: string }) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectModelForDimension = (modelName: string) => {
    setSelectedDimensionModel(modelName);
    const elem = document.getElementById('dimensions');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Header Contract */}
      <Header
        currentTab={currentTab}
        onTabChange={handleTabChange}
        isBrochureMode={isBrochureMode}
        onToggleBrochureMode={() => setIsBrochureMode(!isBrochureMode)}
        lang={lang}
        onLangChange={setLang}
        cartCount={cartItems.length}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {isBrochureMode ? (
          <BrochureMode
            onClose={() => setIsBrochureMode(false)}
            lang={lang}
          />
        ) : (
          <div className="space-y-0">
            {/* 1. Hero Section (Page 1 Motif) */}
            <Hero
              onNavigate={handleTabChange}
              onOpenSelector={() => setIsCalculatorOpen(true)}
              onToggleBrochureMode={() => setIsBrochureMode(true)}
              lang={lang}
            />

            {/* 2. Company Profile & Table of Contents (Page 2) */}
            <CompanyProfileAndContents
              onSelectSection={handleTabChange}
              lang={lang}
            />

            {/* 3. D Type Air Coolers: DL, DD, DJ (Pages 3 & 4) */}
            <AirCoolersSection
              onSelectModelForDimension={handleSelectModelForDimension}
              onAddToCart={handleAddToCart}
              lang={lang}
            />

            {/* 4. Installing Dimensions & Blueprints (Pages 5 & 6) */}
            <InstallingDimensionsSection
              initialSelectedModel={selectedDimensionModel}
              lang={lang}
            />

            {/* 5. Air-Cooled Condensers: FNH & FNV (Pages 5, 6, 7) */}
            <CondensersSection
              onAddToCart={handleAddToCart}
              lang={lang}
            />

            {/* 6. Refrigerants: R134a, R507A, R410A, R404A (Page 7) */}
            <RefrigerantsSection
              onAddToCart={handleAddToCart}
              lang={lang}
            />

            {/* 7. Refrigeration Fittings: 24 Core Parts (Pages 8 & 9) */}
            <FittingsSection
              onAddToCart={handleAddToCart}
              lang={lang}
            />

            {/* 8. Global Contact & Inquiry (Page 1) */}
            <ContactSection
              lang={lang}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      {!isBrochureMode && (
        <Footer
          onNavigate={handleTabChange}
          onToggleBrochureMode={() => setIsBrochureMode(!isBrochureMode)}
          lang={lang}
        />
      )}

      {/* Calculator Modal */}
      <CoolingCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onSelectModel={handleSelectModelForDimension}
        onAddToCart={handleAddToCart}
      />

      {/* Quotation / Inquiry Cart Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Persistent WhatsApp Inquiries Action */}
      <FloatingWhatsAppButton />
    </div>
  );
}
