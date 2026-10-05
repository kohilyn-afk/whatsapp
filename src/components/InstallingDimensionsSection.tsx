import React, { useState } from 'react';
import { Ruler, Compass, Download, ArrowRight, Eye, Check } from 'lucide-react';
import { COOLER_DIMENSIONS, FNH_DIMENSIONS, CoolerDimension, FNHDimension } from '../data/catalogData';

interface InstallingDimensionsSectionProps {
  initialSelectedModel?: string;
  lang: 'bilingual' | 'en' | 'zh';
}

export const InstallingDimensionsSection: React.FC<InstallingDimensionsSectionProps> = ({
  initialSelectedModel,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'cooler' | 'fnh'>('cooler');
  const [selectedCoolerIndex, setSelectedCoolerIndex] = useState<number>(0);
  const [selectedFNHIndex, setSelectedFNHIndex] = useState<number>(0);

  const selectedCooler = COOLER_DIMENSIONS[selectedCoolerIndex];
  const selectedFNH = FNH_DIMENSIONS[selectedFNHIndex];

  return (
    <section id="dimensions" className="py-16 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Ruler className="w-4 h-4" />
              <span>Catalog Pages 05 & 08 · Blueprint & Engineering Dimensions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              安装与外形尺寸 <span className="text-cyan-400 font-light">| Installing Dimensions</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Precision dimensional blueprints and hole positions for ceiling air coolers and air-cooled condenser units.
            </p>
          </div>

          {/* Sub-selector tabs */}
          <div className="flex items-center p-1 bg-slate-950 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('cooler')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'cooler'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              D-Type Air Cooler (D型冷风机)
            </button>
            <button
              onClick={() => setActiveTab('fnh')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'fnh'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FNH Condenser (FNH型冷凝器)
            </button>
          </div>
        </div>

        {/* View 1: D Type Cooler Dimensions (Page 5) */}
        {activeTab === 'cooler' && (
          <div className="space-y-8">
            {/* Interactive Blueprint Schematic for D Type Cooler */}
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      D型冷风机安装图纸 | D Type Air Cooler Engineering Blueprint
                    </h3>
                    <p className="text-xs text-slate-400">
                      Selected: <strong className="text-cyan-300 font-mono">{selectedCooler.modelDL} / {selectedCooler.modelDD} / {selectedCooler.modelDJ}</strong>
                    </p>
                  </div>
                </div>

                {/* Quick Model Selector Dropdown */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Jump to model:</span>
                  <select
                    value={selectedCoolerIndex}
                    onChange={(e) => setSelectedCoolerIndex(Number(e.target.value))}
                    className="bg-slate-900 border border-slate-700 text-cyan-300 rounded px-2.5 py-1.5 font-mono text-xs focus:outline-none focus:border-cyan-400"
                  >
                    {COOLER_DIMENSIONS.map((item, idx) => (
                      <option key={idx} value={idx}>
                        {item.modelDD} ({item.modelDL} / {item.modelDJ})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Technical Drawing SVG */}
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-800/80 flex flex-col items-center">
                <div className="w-full max-w-3xl aspect-[16/7] relative flex items-center justify-center">
                  <svg viewBox="0 0 800 320" className="w-full h-full text-slate-400">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
                      </marker>
                    </defs>

                    {/* Outer Casing / Front elevation */}
                    <rect x="80" y="70" width="380" height="160" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                    
                    {/* Air Discharge Fan Orifices */}
                    <circle cx="170" cy="150" r="48" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                    <circle cx="170" cy="150" r="16" fill="#334155" stroke="#38bdf8" strokeWidth="1.5" />
                    <circle cx="370" cy="150" r="48" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                    <circle cx="370" cy="150" r="16" fill="#334155" stroke="#38bdf8" strokeWidth="1.5" />

                    {/* Wind direction indicator */}
                    <line x1="500" y1="150" x2="560" y2="150" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
                    <text x="500" y="135" fill="#38bdf8" fontSize="12" fontWeight="bold">风向 (Wind direction)</text>

                    {/* Top Mounting Plate / Plan View (Right Side) */}
                    <rect x="580" y="70" width="160" height="160" rx="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
                    <circle cx="610" cy="90" r="5" fill="#38bdf8" />
                    <circle cx="710" cy="90" r="5" fill="#38bdf8" />
                    <circle cx="610" cy="210" r="5" fill="#38bdf8" />
                    <circle cx="710" cy="210" r="5" fill="#38bdf8" />
                    <line x1="610" y1="90" x2="710" y2="90" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="610" y1="210" x2="710" y2="210" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="635" y="155" fill="#94a3b8" fontSize="11">安装孔 (Mounting)</text>

                    {/* Dimension A: Length */}
                    <line x1="80" y1="40" x2="460" y2="40" stroke="#38bdf8" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
                    <text x="245" y="32" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
                      A (长 Length) = {selectedCooler.a} mm
                    </text>

                    {/* Dimension C: Height */}
                    <line x1="50" y1="70" x2="50" y2="230" stroke="#38bdf8" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
                    <text x="35" y="155" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle" transform="rotate(-90 35 155)">
                      C (高 Height) = {selectedCooler.c} mm
                    </text>

                    {/* Dimension B: Width */}
                    <line x1="580" y1="40" x2="740" y2="40" stroke="#38bdf8" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
                    <text x="660" y="32" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
                      B (宽 Width) = {selectedCooler.b} mm
                    </text>

                    {/* Dimension D & E Annotations */}
                    <line x1="80" y1="260" x2="460" y2="260" stroke="#94a3b8" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
                    <text x="270" y="278" fill="#cbd5e1" fontSize="11" textAnchor="middle">
                      E (安装孔跨度) = {selectedCooler.e} mm | D = {selectedCooler.d} mm
                    </text>
                  </svg>
                </div>

                {/* Key dynamic values badges */}
                <div className="w-full mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-center text-xs">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">A (Length)</span>
                    <span className="font-mono font-bold text-cyan-400 text-sm">{selectedCooler.a} mm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">B (Width)</span>
                    <span className="font-mono font-bold text-cyan-400 text-sm">{selectedCooler.b} mm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">C (Height)</span>
                    <span className="font-mono font-bold text-cyan-400 text-sm">{selectedCooler.c} mm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">D Dimension</span>
                    <span className="font-mono font-bold text-slate-200 text-sm">{selectedCooler.d} mm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">E Dimension</span>
                    <span className="font-mono font-bold text-slate-200 text-sm">{selectedCooler.e} mm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">进液管 Inlet</span>
                    <span className="font-mono font-bold text-amber-400 text-sm">φ{selectedCooler.inletTubeSize} mm</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">出液管 Outlet</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">φ{selectedCooler.outletTubeSize} mm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* D Type Cooler Dimension Lookup Table (Page 5) */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
              <table className="w-full text-left text-xs border-collapse font-mono">
                <thead>
                  <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-sans font-semibold">
                    <th rowSpan={2} className="py-3 px-3 border-r border-slate-800">型号 Model (DL / DD / DJ)</th>
                    <th colSpan={3} className="py-2 px-3 border-r border-slate-800 text-center text-cyan-400">外形尺寸 Overall (mm)</th>
                    <th colSpan={6} className="py-2 px-3 border-r border-slate-800 text-center text-slate-300">安装孔位置尺寸 Hole Position (mm)</th>
                    <th colSpan={2} className="py-2 px-3 text-center text-amber-400">接管尺寸 Pipe Size (mm)</th>
                    <th rowSpan={2} className="py-3 px-3 text-center font-sans">选择 Select</th>
                  </tr>
                  <tr className="bg-slate-900/70 text-slate-400 border-b border-slate-800 text-[11px]">
                    <th className="py-2 px-2 text-right">长 A</th>
                    <th className="py-2 px-2 text-right">宽 B</th>
                    <th className="py-2 px-2 text-right border-r border-slate-800">高 C</th>
                    <th className="py-2 px-2 text-right">D</th>
                    <th className="py-2 px-2 text-right">E</th>
                    <th className="py-2 px-2 text-center">E1</th>
                    <th className="py-2 px-2 text-center">E2</th>
                    <th className="py-2 px-2 text-center">E3</th>
                    <th className="py-2 px-2 text-center border-r border-slate-800">E4</th>
                    <th className="py-2 px-2 text-center">进液管 inlet</th>
                    <th className="py-2 px-2 text-center">出液管 outlet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {COOLER_DIMENSIONS.map((row, idx) => {
                    const isSelected = selectedCoolerIndex === idx;
                    return (
                      <tr
                        key={idx}
                        onClick={() => setSelectedCoolerIndex(idx)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-cyan-950/40 text-cyan-200 border-l-4 border-l-cyan-400'
                            : idx % 2 === 0
                            ? 'bg-slate-950 hover:bg-slate-900/60'
                            : 'bg-slate-900/30 hover:bg-slate-900/60'
                        }`}
                      >
                        <td className="py-2.5 px-3 font-bold border-r border-slate-800 text-white whitespace-nowrap">
                          {row.modelDD} <span className="text-slate-500 font-normal">({row.modelDL}/{row.modelDJ})</span>
                        </td>
                        <td className="py-2.5 px-2 text-right text-slate-300">{row.a}</td>
                        <td className="py-2.5 px-2 text-right text-slate-300">{row.b}</td>
                        <td className="py-2.5 px-2 text-right text-slate-300 border-r border-slate-800">{row.c}</td>
                        <td className="py-2.5 px-2 text-right text-slate-400">{row.d}</td>
                        <td className="py-2.5 px-2 text-right text-cyan-300 font-bold">{row.e}</td>
                        <td className="py-2.5 px-2 text-center text-slate-400">{row.e1}</td>
                        <td className="py-2.5 px-2 text-center text-slate-400">{row.e2}</td>
                        <td className="py-2.5 px-2 text-center text-slate-400">{row.e3}</td>
                        <td className="py-2.5 px-2 text-center text-slate-400 border-r border-slate-800">{row.e4}</td>
                        <td className="py-2.5 px-2 text-center text-amber-300 font-bold">{row.inletTubeSize}</td>
                        <td className="py-2.5 px-2 text-center text-emerald-300 font-bold">{row.outletTubeSize}</td>
                        <td className="py-2.5 px-3 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCoolerIndex(idx);
                            }}
                            className={`p-1 rounded text-xs ${
                              isSelected ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
                            }`}
                          >
                            {isSelected ? 'Active' : 'Inspect'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* View 2: FNH Condenser Overall & Installing Dimensions (Page 6 & 8) */}
        {activeTab === 'fnh' && (
          <div className="space-y-8">
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      FNH外形尺寸及安装尺寸 | FNH Overall and Installing Dimensions
                    </h3>
                    <p className="text-xs text-slate-400">
                      Selected: <strong className="text-cyan-300 font-mono">{selectedFNH.model}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-400">Jump to model:</span>
                  <select
                    value={selectedFNHIndex}
                    onChange={(e) => setSelectedFNHIndex(Number(e.target.value))}
                    className="bg-slate-900 border border-slate-700 text-cyan-300 rounded px-2.5 py-1.5 font-mono text-xs focus:outline-none focus:border-cyan-400"
                  >
                    {FNH_DIMENSIONS.map((item, idx) => (
                      <option key={idx} value={idx}>
                        {item.model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* FNH Technical Schematic */}
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-800/80 flex flex-col items-center">
                <div className="w-full max-w-2xl aspect-[16/7] relative flex items-center justify-center">
                  <svg viewBox="0 0 700 280" className="w-full h-full text-slate-400">
                    <defs>
                      <marker id="fnh-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
                      </marker>
                    </defs>

                    {/* FNH Box Condenser Body */}
                    <rect x="120" y="50" width="360" height="180" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                    <line x1="300" y1="50" x2="300" y2="230" stroke="#334155" strokeWidth="1.5" />
                    
                    {/* Two Large Axial Fans */}
                    <circle cx="210" cy="140" r="45" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                    <circle cx="390" cy="140" r="45" fill="#1e293b" stroke="#64748b" strokeWidth="2" />

                    {/* Base Legs */}
                    <rect x="120" y="230" width="360" height="15" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                    <circle cx="150" cy="237" r="4" fill="#38bdf8" />
                    <circle cx="450" cy="237" r="4" fill="#38bdf8" />

                    {/* Dimension A (Length) */}
                    <line x1="120" y1="25" x2="480" y2="25" stroke="#38bdf8" strokeWidth="1.5" markerStart="url(#fnh-arrow)" markerEnd="url(#fnh-arrow)" />
                    <text x="300" y="18" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
                      A (长 Length) = {selectedFNH.a} mm
                    </text>

                    {/* Dimension C (Height) */}
                    <line x1="90" y1="50" x2="90" y2="230" stroke="#38bdf8" strokeWidth="1.5" markerStart="url(#fnh-arrow)" markerEnd="url(#fnh-arrow)" />
                    <text x="75" y="145" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle" transform="rotate(-90 75 145)">
                      C (高 Height) = {selectedFNH.c} mm
                    </text>

                    {/* Dimension D (Hole Span) */}
                    <line x1="150" y1="265" x2="450" y2="265" stroke="#94a3b8" strokeWidth="1.5" markerStart="url(#fnh-arrow)" markerEnd="url(#fnh-arrow)" />
                    <text x="300" y="260" fill="#cbd5e1" fontSize="11" textAnchor="middle">
                      D (安装孔间距) = {selectedFNH.d} mm · E = {selectedFNH.e} mm · 孔径 = {selectedFNH.holeSizeMM} mm
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* FNH Dimension Table (Page 6 & 8) */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
              <table className="w-full text-left text-xs border-collapse font-mono">
                <thead>
                  <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-sans font-semibold">
                    <th className="py-3 px-4 border-r border-slate-800">型号 Model</th>
                    <th className="py-3 px-4 text-right">A (mm)</th>
                    <th className="py-3 px-4 text-right">B (mm)</th>
                    <th className="py-3 px-4 text-right">C (mm)</th>
                    <th className="py-3 px-4 text-right">D (mm)</th>
                    <th className="py-3 px-4 text-right">E (mm)</th>
                    <th className="py-3 px-4 text-center border-l border-slate-800">安装孔尺寸 (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {FNH_DIMENSIONS.map((row, idx) => {
                    const isSelected = selectedFNHIndex === idx;
                    return (
                      <tr
                        key={idx}
                        onClick={() => setSelectedFNHIndex(idx)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-cyan-950/40 text-cyan-200 border-l-4 border-l-cyan-400'
                            : idx % 2 === 0
                            ? 'bg-slate-950 hover:bg-slate-900/60'
                            : 'bg-slate-900/30 hover:bg-slate-900/60'
                        }`}
                      >
                        <td className="py-2.5 px-4 font-bold border-r border-slate-800 text-white">
                          {row.model}
                        </td>
                        <td className="py-2.5 px-4 text-right text-cyan-300 font-bold">{row.a}</td>
                        <td className="py-2.5 px-4 text-right text-slate-300">{row.b}</td>
                        <td className="py-2.5 px-4 text-right text-slate-300">{row.c}</td>
                        <td className="py-2.5 px-4 text-right text-slate-400">{row.d}</td>
                        <td className="py-2.5 px-4 text-right text-slate-400">{row.e}</td>
                        <td className="py-2.5 px-4 text-center text-amber-300 font-bold border-l border-slate-800">
                          {row.holeSizeMM} mm
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
