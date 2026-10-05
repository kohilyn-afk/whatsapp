import React from 'react';
import { ArrowUpRight, BookOpen, Building2, MapPin } from 'lucide-react';
import { COMPANY_INFO, CATALOG_TABLE_OF_CONTENTS } from '../data/catalogData';

interface CompanyProfileAndContentsProps {
  onSelectSection: (sectionId: string) => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const CompanyProfileAndContents: React.FC<CompanyProfileAndContentsProps> = ({
  onSelectSection,
  lang,
}) => {
  return (
    <section className="py-16 bg-slate-900 border-t border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              Catalog Page 02 · Company Profile & Directory
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Company Overview & Catalog Index
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              公司简介与产品目录检索
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-xs text-slate-400 font-mono">
            SHANDONG HUAFENG REFRIGERATION EQUIPMENT CO., LTD.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Authentic Company Profile matching Page 2 text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400 font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {COMPANY_INFO.nameZh}
                  </h3>
                  <div className="text-xs text-slate-400">
                    {COMPANY_INFO.nameEn}
                  </div>
                </div>
              </div>

              {/* Chinese original paragraph from Page 2 */}
              <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800/60 text-slate-200 text-sm leading-relaxed space-y-2">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                  企业简介 (Company Profile)
                </div>
                <p>
                  {COMPANY_INFO.introZh}
                </p>
              </div>

              {/* English original paragraph from Page 2 */}
              <div className="text-slate-300 text-sm leading-relaxed space-y-2">
                <p>
                  {COMPANY_INFO.introEn}
                </p>
              </div>

              {/* Global Branches & Facilities */}
              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">China Factory: </span>
                    <span className="text-slate-400">{COMPANY_INFO.contact.factoryAddress.en}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Jakarta Shop: </span>
                    <span className="text-slate-400">{COMPANY_INFO.contact.shopAddress.en}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">East Java Warehouse: </span>
                    <span className="text-slate-400">{COMPANY_INFO.contact.warehouseAddress.en}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Table of CONTENTS matching Page 2 */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/80 rounded-xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-bold tracking-tight text-white uppercase">
                    CONTENTS 目录
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400">
                  Pages 01 – 12
                </span>
              </div>

              {/* The 12-item list strictly matching PDF Page 2 */}
              <div className="divide-y divide-slate-800/80">
                {CATALOG_TABLE_OF_CONTENTS.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onSelectSection(item.sectionId)}
                    className="w-full py-3 sm:py-3.5 px-3 flex items-center justify-between group hover:bg-slate-900 rounded-lg transition-all text-left"
                  >
                    <div className="flex items-center gap-4">
                      {/* Editorial page number */}
                      <span className="text-xs font-mono font-bold text-cyan-400 w-6 tabular-nums">
                        {String(item.page).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {item.titleEn}
                        </div>
                        <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                          {item.titleZh}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <span className="hidden sm:inline text-xs font-mono">View Specs</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
