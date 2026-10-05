import React from 'react';
import { Snowflake, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onToggleBrochureMode: () => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onToggleBrochureMode,
  lang,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1 & 2: Brand Lockup & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                ❄
              </div>
              <span className="text-base font-extrabold text-white tracking-tight">
                {COMPANY_INFO.brandName}
              </span>
            </div>

            <div className="text-slate-300 font-semibold text-xs uppercase font-mono tracking-wider">
              {COMPANY_INFO.nameEn}
            </div>
            <div className="text-slate-400 text-xs">
              {COMPANY_INFO.nameZh}
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Established 2013 in Jinan, China. Professional manufacturer integrating R&amp;D, precision manufacturing, sales, and technical service for air coolers, air-cooled condensers, parallel condensing units, and full-spectrum refrigeration fittings.
            </p>

            <div className="text-cyan-400 font-serif italic text-sm pt-1">
              &ldquo;{COMPANY_INFO.slogan}&rdquo;
            </div>
          </div>

          {/* Col 3: Product Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Product Categories
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('air-coolers')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  D-Type Air Coolers (DD, DJ, DL)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('condensers')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  FNH &amp; FNV Condensers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dimensions')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Installing Dimensions &amp; Blueprints
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('refrigerants')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Refrigerants (R134a, R507A, R410A)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('fittings')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Refrigeration Fittings (1 &amp; 2)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Catalog & Hubs */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Facilities &amp; Hubs
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-300">China HQ: </strong>
                <span>Jinan, Shandong</span>
              </li>
              <li>
                <strong className="text-slate-300">Jakarta Hub: </strong>
                <span>LTC Glodok 2nd Fl, Blok A1</span>
              </li>
              <li>
                <strong className="text-slate-300">East Java Hub: </strong>
                <span>Tritan Point Wedi, Sidoarjo</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onToggleBrochureMode}
                  className="text-cyan-400 hover:text-cyan-300 underline font-medium"
                >
                  Open Original PDF Catalog Mode
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Communication */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="tel:+60194352738"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+60194352738 (Malaysia)</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+86-13225312519 (China HQ)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-mono">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+62-82210514493 (Jakarta)</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded border border-slate-800 text-xs transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Hairline & Legal Notices */}
        <div className="pt-8 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.nameEn}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Mechanical Coil Expansion Technology</span>
            <span>·</span>
            <span>Non-standard Customization Supported</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
