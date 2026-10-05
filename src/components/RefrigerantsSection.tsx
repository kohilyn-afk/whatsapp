import React, { useState } from 'react';
import { ShieldCheck, Plus, Check, Droplets, Info } from 'lucide-react';
import { REFRIGERANTS, RefrigerantItem } from '../data/catalogData';

interface RefrigerantsSectionProps {
  onAddToCart: (item: { id: string; name: string; specs: string }) => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const RefrigerantsSection: React.FC<RefrigerantsSectionProps> = ({
  onAddToCart,
  lang,
}) => {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAdd = (item: RefrigerantItem) => {
    onAddToCart({
      id: item.id,
      name: `Refrigerant ${item.name}`,
      specs: `${item.formula} | Boiling Point: ${item.boilingPoint} | Application: ${item.application}`,
    });
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="refrigerants" className="py-16 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Droplets className="w-4 h-4" />
              <span>Catalog Page 07 · Eco-Friendly Refrigerant Cylinders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              制冷剂 <span className="text-cyan-400 font-light">| Refrigerant</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              High-purity commercial and industrial refrigerants supplied in certified high-pressure steel cylinders.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Purity ≥ 99.9% · Moisture ≤ 10ppm · Acidity ≤ 0.1ppm
          </div>
        </div>

        {/* Refrigerant Cylinder Photography matching PDF Page 7 */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <img
              src="/src/assets/images/pdf_refrigerant_four_cylinders_1791181288587.jpg"
              alt="Refrigerant Cylinders (PDF Page 07)"
              referrerPolicy="no-referrer"
              className="w-36 h-24 sm:w-44 sm:h-28 object-contain rounded-xl border border-slate-700 shrink-0 bg-white p-1"
            />
            <div className="space-y-1">
              <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
                Catalog Page 07 · Official Refrigerant Lineup
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                R134a · R507A · R410A · R404A Sealed Steel Cylinders
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Supplied in protective branded cartons with tamper-evident safety seals. Pre-charged with certified high-purity virgin gas for optimal thermodynamic stability.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0 text-xs font-mono">
            <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">ARI-700 Grade</span>
            <span className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-300">Zero ODP Options</span>
          </div>
        </div>

        {/* 4 Refrigerant Cards strictly matching Page 7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REFRIGERANTS.map((gas) => {
            return (
              <div
                key={gas.id}
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: gas.color }}
                ></div>

                <div className="space-y-4">
                  {/* Cylinder Icon & Gas Name */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                        Refrigerant
                      </span>
                      <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {gas.name}
                      </h3>
                    </div>

                    {/* Cylinder representation */}
                    <div
                      className="w-12 h-16 rounded-t-xl rounded-b-md border-2 flex flex-col items-center justify-center p-1 relative shadow-inner"
                      style={{ borderColor: gas.color, backgroundColor: `${gas.color}15` }}
                    >
                      <div className="w-4 h-1.5 rounded-full bg-slate-400 -mt-2.5 mb-1"></div>
                      <span className="text-[10px] font-bold font-mono" style={{ color: gas.color }}>
                        {gas.name}
                      </span>
                      <div className="w-full h-1 bg-slate-700/60 rounded mt-auto"></div>
                    </div>
                  </div>

                  {/* Formula */}
                  <div className="p-2 rounded bg-slate-900 border border-slate-800/80 text-[11px] font-mono text-slate-300">
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-sans">Formula:</span>
                    {gas.formula}
                  </div>

                  {/* Boiling Point Badge */}
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-slate-900/50 border border-slate-800">
                    <span className="text-slate-400">Boiling Point:</span>
                    <span className="font-mono font-bold text-cyan-300 tabular-nums">
                      {gas.boilingPoint}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'zh' ? gas.descriptionZh : gas.description}
                  </p>

                  {/* Applications */}
                  <div className="pt-2 text-xs border-t border-slate-800/60">
                    <span className="font-semibold text-slate-300 block mb-1">Typical Applications:</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {lang === 'zh' ? gas.applicationZh : gas.application}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">13.6kg / 11.3kg</span>
                  <button
                    onClick={() => handleAdd(gas)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    {addedItem === gas.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Quality Guarantee */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <span className="font-bold text-white">Full Certificate of Analysis (COA) Provided</span>
              <span className="text-slate-400 ml-2">Compliant with ARI-700 international refrigerant purity standards. Available in disposable and refillable cylinders.</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] shrink-0">
            <span>Packaging: 13.6kg / 11.3kg / 10kg DOT-39</span>
          </div>
        </div>

      </div>
    </section>
  );
};
