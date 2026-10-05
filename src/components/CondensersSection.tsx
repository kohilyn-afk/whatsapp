import React, { useState } from 'react';
import { Search, Wind, Plus, Check, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { FNH_PARAMETERS, FNV_PARAMETERS, FNHCondenserModel, FNVCondenserModel } from '../data/catalogData';

interface CondensersSectionProps {
  onAddToCart: (item: { id: string; name: string; specs: string }) => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const CondensersSection: React.FC<CondensersSectionProps> = ({
  onAddToCart,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'FNH' | 'FNV'>('FNH');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const filteredFNH = FNH_PARAMETERS.filter((item) =>
    item.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFNV = FNV_PARAMETERS.filter((item) =>
    item.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddFNH = (item: FNHCondenserModel) => {
    onAddToCart({
      id: `${item.model}`,
      name: `${item.model} Air-Cooled Condenser (FNH)`,
      specs: `${item.heatExchangeKW} kW | ${item.areaM2} m² | Fans: ${item.fanQty}x${item.fanPowerW} | Tube: in φ${item.inletTubeMM}/out φ${item.outletTubeMM}`,
    });
    setAddedItem(item.model);
    setTimeout(() => setAddedItem(null), 1800);
  };

  const handleAddFNV = (item: FNVCondenserModel) => {
    onAddToCart({
      id: `${item.model}`,
      name: `${item.model} V-Type Air-Cooled Condenser (FNV)`,
      specs: `${item.heatExchangeKW} kW | ${item.areaM2} m² | Fans: ${item.fanQty}x${item.fanPowerW} | Air: ${item.airVolumeM3H} m³/h`,
    });
    setAddedItem(item.model);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="condensers" className="py-16 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Wind className="w-4 h-4" />
              <span>Catalog Pages 05 – 07 · Air-Cooled Condensers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              风冷冷凝器 <span className="text-cyan-400 font-light">| Types of air-cooled condenser</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              High heat dissipation condensers featuring phosphor-treated corrosion-proof shells, staggered copper tubes, and aerodynamic axial fan arrays.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">Configurations:</span>
            <span className="text-xs font-semibold text-slate-300 font-mono">H-Horizontal · V-Type · U-Type · W-Type</span>
          </div>
        </div>

        {/* Nomenclature Diagram (风冷冷凝器型号说明 - Page 5) & Characteristics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Nomenclature Box (FN H G 14.8 / 49) */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span>风冷冷凝器型号说明</span>
                <span className="text-slate-500 font-normal">| Condenser Model Code</span>
              </h3>
              <span className="text-xs font-mono text-cyan-400">PDF Page 05</span>
            </div>

            {/* Model code visualization */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-800">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 sm:gap-4 font-mono font-black text-xl sm:text-3xl tracking-widest text-cyan-400 px-4 py-2 rounded-lg bg-slate-900 border border-cyan-800/50 shadow-inner">
                  <span className="hover:text-white transition-colors" title="表示产品代号 Product code">FN</span>
                  <span className="text-amber-400 hover:text-white transition-colors" title="出风方式 Air discharge">H</span>
                  <span className="text-indigo-400 hover:text-white transition-colors" title="结构形式 Enclosure structure">G</span>
                  <span className="text-emerald-400 hover:text-white transition-colors" title="换热面积 Heat exchange area">14.8</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-cyan-300 hover:text-white transition-colors" title="换热量 Heat exchange kW">49</span>
                </div>
              </div>

              {/* Explanatory breakdown strictly from Page 5 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-cyan-400 font-mono">FN: </span>
                  <span className="text-slate-300">表示产品代号 (Product code)</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-amber-400 font-mono">H: </span>
                  <span className="text-slate-300">H: 平横式侧出风式 / V: V型顶出风 / U: U型 / W: W型</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-indigo-400 font-mono">G: </span>
                  <span className="text-slate-300">G: 带壳半封闭式 / T: 其它</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-emerald-400 font-mono">14.8: </span>
                  <span className="text-slate-300">换热面积 m² (Heat exchange area)</span>
                </div>
                <div className="sm:col-span-2 p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-cyan-300 font-mono">49: </span>
                  <span className="text-slate-300">换热量 kW (Heat exchange capacity)</span>
                </div>
              </div>
            </div>

            {/* Types Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="font-bold text-cyan-400 font-mono">H-Type</div>
                <div className="text-[11px] text-slate-400 mt-0.5">平横式侧出风</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="font-bold text-cyan-400 font-mono">V-Type</div>
                <div className="text-[11px] text-slate-400 mt-0.5">V型顶出风</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="font-bold text-cyan-400 font-mono">U-Type</div>
                <div className="text-[11px] text-slate-400 mt-0.5">U型顶出风</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <div className="font-bold text-cyan-400 font-mono">W-Type</div>
                <div className="text-[11px] text-slate-400 mt-0.5">W型顶出风</div>
              </div>
            </div>
          </div>

          {/* Right: Characteristics & Visual (风冷冷凝器的特点 - Page 5) */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  风冷冷凝器的特点 | Characteristics
                </h3>
                <span className="text-xs font-mono text-cyan-400">PDF Page 05</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">排错管路与机械胀管：</span>
                    <span className="text-slate-300">盘管采用排错方式，结构合理，利用机械胀管，使铜管与铝翅片紧密结合，换热效率高。</span>
                    <p className="text-slate-500 mt-1">Coil using staggered mode, reasonable structure, using mechanical expansion pipe, the copper pipe and aluminium fin closely, high heat exchange efficiency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">磷化耐蚀喷塑钢壳：</span>
                    <span className="text-slate-300">外壳采用优质钢板，表面经过磷化、喷塑处理，耐腐蚀。</span>
                    <p className="text-slate-500 mt-1">The appearance of the use of high-quality steel, phosphating, surface spray treatment, corrosion resistance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photorealistic Condenser Image Asset from PDF Page 5 & 7 */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-4 bg-slate-950/60 p-3 rounded-xl">
              <img
                src="/src/assets/images/pdf_condenser_types_1791181275783.jpg"
                alt="Air-Cooled Condenser Units (PDF Page 05 & 07)"
                referrerPolicy="no-referrer"
                className="w-24 h-16 object-cover rounded-lg border border-slate-700 shrink-0 bg-white"
              />
              <div className="text-xs text-slate-300">
                <div className="font-bold text-white">FNH &amp; FNV Air Cooled Condensers (Catalog Page 05 &amp; 07)</div>
                <div className="text-slate-400 mt-0.5">Green box-type &amp; V-type configurations · 10.6 kW – 129 kW</div>
              </div>
            </div>
          </div>

        </div>

        {/* Tab Controls: FNH vs FNV */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveTab('FNH')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'FNH'
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                FNH Horizontal Condenser (FNH型冷凝器 · 15 Models)
              </button>
              <button
                onClick={() => setActiveTab('FNV')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'FNV'
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                FNV V-Type Condenser (FNV型冷凝器 · 9 Models)
              </button>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search condenser model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-48 sm:w-56"
              />
            </div>
          </div>

          {/* Active Banner */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-300">
              {activeTab === 'FNH'
                ? 'FNH Series Side-Discharge Horizontal Condensers (Catalog Page 06)'
                : 'FNV Series Top-Discharge V-Type High Capacity Condensers (Catalog Page 07)'}
            </span>
            <span className="font-mono text-cyan-400 font-semibold">
              {activeTab === 'FNH' ? `${filteredFNH.length} Models` : `${filteredFNV.length} Models`}
            </span>
          </div>
        </div>

        {/* FNH Table (Page 6) */}
        {activeTab === 'FNH' && (
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 shadow-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-semibold">
                  <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 sticky left-0 bg-slate-900 z-10">型号 Model</th>
                  <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 text-right">换热量<br /><span className="text-[10px] text-slate-400 font-normal">Heat Ex (kW)</span></th>
                  <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 text-right">面积<br /><span className="text-[10px] text-slate-400 font-normal">Area (m²)</span></th>
                  <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 text-center">排圈数<br /><span className="text-[10px] text-slate-400 font-normal">Row rings</span></th>
                  <th colSpan={5} className="py-2 px-3 border-r border-slate-800 text-center bg-slate-900/60 text-cyan-400">风扇电机 Fan motor</th>
                  <th colSpan={2} className="py-2 px-3 border-r border-slate-800 text-center bg-slate-900/60 text-amber-400">接管尺寸 Pipe size</th>
                  <th rowSpan={2} className="py-3 px-3 text-center">操作 Action</th>
                </tr>
                <tr className="bg-slate-900/70 text-slate-400 border-b border-slate-800 text-[11px]">
                  <th className="py-2 px-2 text-center">数量 (N)</th>
                  <th className="py-2 px-2 text-right">功率 (W)</th>
                  <th className="py-2 px-2 text-right">风量 (m³/h)</th>
                  <th className="py-2 px-2 text-center">风叶 (φ mm)</th>
                  <th className="py-2 px-2 text-center border-r border-slate-800">电压 (V)</th>
                  <th className="py-2 px-2 text-center">进液管 (φ mm)</th>
                  <th className="py-2 px-2 text-center border-r border-slate-800">出液管 (φ mm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono">
                {filteredFNH.map((item, idx) => (
                  <tr
                    key={item.model}
                    className={`hover:bg-slate-900/70 transition-colors ${
                      idx % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/30'
                    }`}
                  >
                    <td className="py-2.5 px-3 font-bold text-white sticky left-0 bg-slate-950 border-r border-slate-800/80 whitespace-nowrap">
                      {item.model}
                    </td>
                    <td className="py-2.5 px-3 text-right text-cyan-300 font-bold tabular-nums border-r border-slate-800/80">
                      {item.heatExchangeKW.toFixed(1)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-200 tabular-nums border-r border-slate-800/80">
                      {item.areaM2}
                    </td>
                    <td className="py-2.5 px-3 text-center text-slate-400 border-r border-slate-800/80">
                      {item.rowRings}
                    </td>
                    <td className="py-2.5 px-2 text-center text-slate-300 tabular-nums">{item.fanQty}</td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums">{item.fanPowerW}</td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums">{item.airVolumeM3H}</td>
                    <td className="py-2.5 px-2 text-center text-slate-300 tabular-nums">{item.windLeafMM}</td>
                    <td className="py-2.5 px-2 text-center text-slate-400 tabular-nums border-r border-slate-800/80">{item.voltageV}</td>
                    <td className="py-2.5 px-2 text-center text-amber-300 font-bold tabular-nums">{item.inletTubeMM}</td>
                    <td className="py-2.5 px-2 text-center text-emerald-300 font-bold tabular-nums border-r border-slate-800/80">{item.outletTubeMM}</td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => handleAddFNH(item)}
                        className="px-2.5 py-1 rounded bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white text-xs font-sans transition-colors inline-flex items-center gap-1"
                      >
                        {addedItem === item.model ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3" />}
                        <span>Inquire</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* FNV Table (Page 7) */}
        {activeTab === 'FNV' && (
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 shadow-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-semibold">
                  <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 sticky left-0 bg-slate-900 z-10">型号 Model</th>
                  <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 text-right">换热量<br /><span className="text-[10px] text-slate-400 font-normal">Heat Ex (kW)</span></th>
                  <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 text-right">面积<br /><span className="text-[10px] text-slate-400 font-normal">Area (m²)</span></th>
                  <th colSpan={5} className="py-2 px-3 border-r border-slate-800 text-center bg-slate-900/60 text-cyan-400">风扇电机 Fan motor</th>
                  <th colSpan={2} className="py-2 px-3 border-r border-slate-800 text-center bg-slate-900/60 text-amber-400">接管尺寸 Pipe size</th>
                  <th rowSpan={2} className="py-3 px-3 text-center">操作 Action</th>
                </tr>
                <tr className="bg-slate-900/70 text-slate-400 border-b border-slate-800 text-[11px]">
                  <th className="py-2 px-2 text-center">数量 (N)</th>
                  <th className="py-2 px-2 text-right">功率 (W)</th>
                  <th className="py-2 px-2 text-right">风量 (m³/h)</th>
                  <th className="py-2 px-2 text-center">风叶 (φ mm)</th>
                  <th className="py-2 px-2 text-center border-r border-slate-800">电压 (V)</th>
                  <th className="py-2 px-2 text-center">进液管 (φ mm)</th>
                  <th className="py-2 px-2 text-center border-r border-slate-800">出液管 (φ mm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono">
                {filteredFNV.map((item, idx) => (
                  <tr
                    key={item.model}
                    className={`hover:bg-slate-900/70 transition-colors ${
                      idx % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/30'
                    }`}
                  >
                    <td className="py-2.5 px-3 font-bold text-white sticky left-0 bg-slate-950 border-r border-slate-800/80 whitespace-nowrap">
                      {item.model}
                    </td>
                    <td className="py-2.5 px-3 text-right text-cyan-300 font-bold tabular-nums border-r border-slate-800/80">
                      {item.heatExchangeKW.toFixed(1)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-200 tabular-nums border-r border-slate-800/80">
                      {item.areaM2}
                    </td>
                    <td className="py-2.5 px-2 text-center text-slate-300 tabular-nums">{item.fanQty}</td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums">{item.fanPowerW}</td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums">{item.airVolumeM3H}</td>
                    <td className="py-2.5 px-2 text-center text-slate-300 tabular-nums">{item.windLeafMM}</td>
                    <td className="py-2.5 px-2 text-center text-slate-400 tabular-nums border-r border-slate-800/80">{item.voltageV}</td>
                    <td className="py-2.5 px-2 text-center text-amber-300 font-bold tabular-nums">{item.inletTubeMM}</td>
                    <td className="py-2.5 px-2 text-center text-emerald-300 font-bold tabular-nums border-r border-slate-800/80">{item.outletTubeMM}</td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => handleAddFNV(item)}
                        className="px-2.5 py-1 rounded bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white text-xs font-sans transition-colors inline-flex items-center gap-1"
                      >
                        {addedItem === item.model ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3" />}
                        <span>Inquire</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
