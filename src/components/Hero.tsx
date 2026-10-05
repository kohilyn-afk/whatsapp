import React from 'react';
import { ArrowRight, Snowflake, ShieldCheck, Factory, Award, Download, Sliders } from 'lucide-react';
import { COMPANY_INFO } from '../data/catalogData';

interface HeroProps {
  onNavigate: (tab: string) => void;
  onOpenSelector: () => void;
  onToggleBrochureMode: () => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenSelector,
  onToggleBrochureMode,
  lang,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Graphic Effect: Ice mountain gradient & subtle mesh */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600 via-slate-900 to-slate-950"></div>
      
      {/* Subtle snow/frost ice glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand & Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top brand tagline kicker */}
            <div className="flex items-center gap-2 text-cyan-400 font-semibold tracking-wider text-xs sm:text-sm uppercase">
              <Snowflake className="w-4 h-4 animate-spin-slow text-cyan-400" />
              <span>{COMPANY_INFO.slogan}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Est. 2013 · Jinan, China</span>
            </div>

            {/* Main Title - Bilingual exact matching from PDF Page 1 */}
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-sans">
                huafeng <span className="text-cyan-400">华风制冷</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-200 uppercase font-mono">
                SHANDONG HUAFENG REFRIGERATION EQUIPMENT CO., LTD.
              </h1>
              <p className="text-sm sm:text-base text-slate-400 font-medium">
                山东华风制冷设备有限公司
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {lang === 'zh'
                ? "专注于生产高品质D型冷风机(DD/DJ/DL)、风冷冷凝器(FNH/FNV)、螺杆并联机组、环保制冷剂及全套工业制冷配件。集生产、研发、销售、服务为一体。"
                : lang === 'en'
                ? "Premier manufacturer of Air cooled Condenser Units, D-Type Air Cooler Evaporators (DD, DJ, DL), Parallel Compressor Racks, Refrigerants, and complete industrial refrigeration fittings."
                : "Professional manufacturer of Air cooled Condensers, D-Type Air Coolers (DD, DJ, DL), Parallel Compressor Racks, Refrigerants and full-line refrigeration fittings · 集研发、生产、销售、服务为一体"}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('air-coolers')}
                className="px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-lg shadow-lg shadow-cyan-950 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Explore Technical Specs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenSelector}
                className="px-5 py-3 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Quick Unit Sizing Tool</span>
              </button>

              <button
                onClick={onToggleBrochureMode}
                className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg border border-transparent hover:border-slate-700 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>PDF Catalog Mode</span>
              </button>
            </div>

            {/* Verified Trust Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                  2013
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {lang === 'zh' ? '成立年份 (China)' : 'Established'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                  60+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {lang === 'zh' ? '标准冷风机/冷凝器型号' : 'Standard Product Models'}
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                  3 Hubs
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {lang === 'zh' ? '济南工场 / 雅加达 / 泗水' : 'Jinan · Jakarta · Sidoarjo'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur">
              <div className="aspect-[4/3] w-full overflow-hidden relative group">
                <img
                  src="/src/assets/images/pdf_cover_mountain_units_1791181244105.jpg"
                  alt="Shandong Huafeng Refrigeration Equipment Catalog"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                    <Factory className="w-3.5 h-3.5" />
                    <span>Huafeng Refrigeration Products (PDF Cover Showcase)</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Air Coolers · Condensers · Compressors &amp; Parallel Racks
                  </p>
                </div>
              </div>

              {/* Sub-strip with catalog highlights */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-400 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Mechanical expansion coil tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full-line non-standard customization</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
