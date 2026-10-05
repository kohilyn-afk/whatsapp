import React, { useState } from 'react';
import { Search, SlidersHorizontal, Check, Plus, Snowflake, Thermometer, Wind, Zap } from 'lucide-react';
import { CoolerModel, DD_PARAMETERS, DJ_PARAMETERS, DL_PARAMETERS } from '../data/catalogData';

interface AirCoolersSectionProps {
  onSelectModelForDimension: (modelName: string) => void;
  onAddToCart: (item: { id: string; name: string; specs: string }) => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const AirCoolersSection: React.FC<AirCoolersSectionProps> = ({
  onSelectModelForDimension,
  onAddToCart,
  lang,
}) => {
  const [activeSeries, setActiveSeries] = useState<'DD' | 'DJ' | 'DL'>('DD');
  const [searchTerm, setSearchTerm] = useState('');
  const [minCapacity, setMinCapacity] = useState<number>(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const seriesInfo = {
    DD: {
      titleEn: "DD in-temperature Ceiling Type Air Cooler",
      titleZh: "DD型中高温吊顶式冷风机",
      targetTemp: "-18 °C",
      applicationEn: "Cold storage rooms, frozen meat/poultry, standard freezer warehouses",
      applicationZh: "主要适用于-18℃左右的冷藏库、肉类海鲜冷冻间、标准冷库",
      badgeColor: "bg-blue-900/60 text-blue-300 border-blue-700",
      data: DD_PARAMETERS,
      page: 3,
    },
    DJ: {
      titleEn: "DJ Cryogenic Ceiling Type Air Cooler",
      titleZh: "DJ型低温吊顶式冷风机",
      targetTemp: "Below -25 °C",
      applicationEn: "Blast freezing tunnels, cryogenic storage, deep-freeze facilities",
      applicationZh: "主要适用于-25℃以下的速冻库、深冷冷库、急冻车间",
      badgeColor: "bg-indigo-900/60 text-indigo-300 border-indigo-700",
      data: DJ_PARAMETERS,
      page: 4,
    },
    DL: {
      titleEn: "DL High Temperature Ceiling Type Air Cooler",
      titleZh: "DL型高温吊顶式冷风机",
      targetTemp: "Approx. 0 °C",
      applicationEn: "Fresh fruit & vegetable preservation, chilled packaging workshops",
      applicationZh: "主要适用于0℃左右的果蔬保鲜库、药品阴凉库、食品加工车间",
      badgeColor: "bg-emerald-900/60 text-emerald-300 border-emerald-700",
      data: DL_PARAMETERS,
      page: 4,
    },
  };

  const currentInfo = seriesInfo[activeSeries];

  // Filtering data
  const filteredData = currentInfo.data.filter((item) => {
    const matchesSearch = item.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCapacity = item.capacityKW >= minCapacity;
    return matchesSearch && matchesCapacity;
  });

  const handleAdd = (model: CoolerModel) => {
    onAddToCart({
      id: `${model.model}`,
      name: `${model.model} Air Cooler (${activeSeries} Series)`,
      specs: `${model.capacityKW} kW | ${model.areaM2} m² | ${model.airVolumeM3H} m³/h | Fans: ${model.fanQty}xφ${model.fanDiameterMM}`,
    });
    setAddedItem(model.model);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="air-coolers" className="py-16 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Top Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Snowflake className="w-4 h-4" />
              <span>Catalog Pages 03 – 04 · Technical Parameters</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              D型冷风机 <span className="text-cyan-400 font-light">| D type Air cooler</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              High-efficiency ceiling evaporators engineered with mechanical expansion staggered copper coils and uniform electric defrost elements.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">Series:</span>
            <span className="text-xs font-semibold text-slate-300 font-mono">DL (0°C) · DD (-18°C) · DJ (-25°C)</span>
          </div>
        </div>

        {/* Nomenclature Diagram (冷风机型号说明 Cold air machine type) & Features Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Model Nomenclature Box (Page 3 Diagram) */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span>冷风机型号说明</span>
                <span className="text-slate-500 font-normal">| Cold air machine type</span>
              </h3>
              <span className="text-xs font-mono text-cyan-400">PDF Page 03</span>
            </div>

            {/* Visual Model Code Diagram: D D S 19 / 100 */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-800">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 sm:gap-4 font-mono font-black text-xl sm:text-3xl tracking-widest text-cyan-400 px-4 py-2 rounded-lg bg-slate-900 border border-cyan-800/50 shadow-inner">
                  <span className="hover:text-white transition-colors" title="冷却面积 Cooling area">D</span>
                  <span className="hover:text-white transition-colors" title="名义制冷量 Nominal cooling capacity">D</span>
                  <span className="text-amber-400 hover:text-white transition-colors" title="水化霜/电化霜 Water/Electric defrost">S</span>
                  <span className="text-indigo-400 hover:text-white transition-colors" title="使用温度代号 Temperature code">19</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-emerald-400 hover:text-white transition-colors" title="表示产品代号 Product code">100</span>
                </div>
              </div>

              {/* Explanatory breakdown strictly from Page 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-cyan-400 font-mono">D: </span>
                  <span className="text-slate-300">冷却面积 m² (Cooling area)</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-cyan-400 font-mono">D: </span>
                  <span className="text-slate-300">名义制冷量 kW (Nominal cooling capacity)</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-amber-400 font-mono">S: </span>
                  <span className="text-slate-300">水化霜/电化霜 (Water/Electric defrost)</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-indigo-400 font-mono">19: </span>
                  <span className="text-slate-300">使用温度代号 (L: 高温, D: 中温, J: 低温)</span>
                </div>
                <div className="sm:col-span-2 p-2.5 rounded bg-slate-900/60 border border-slate-800/80">
                  <span className="font-bold text-emerald-400 font-mono">100: </span>
                  <span className="text-slate-300">表示产品代号 (Product code)</span>
                </div>
              </div>
            </div>

            {/* Application Range Callout */}
            <div className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
              <div className="font-semibold text-slate-300">适用库温范围说明 (Temperature Application Guide):</div>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li><strong className="text-emerald-400">DL型: </strong>适用于 0℃ 左右的保鲜库 (Fresh storage)</li>
                <li><strong className="text-blue-400">DD型: </strong>适用于 -18℃ 的冷藏库 (Cold storage)</li>
                <li><strong className="text-indigo-400">DJ型: </strong>适用于 -25℃ 以下的速冻库 (Deep freeze storage)</li>
              </ul>
            </div>
          </div>

          {/* Right: Product Main Features (产品主要特点 - Page 3) + Photo */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  产品主要特点 | Product main features
                </h3>
                <span className="text-xs font-mono text-cyan-400">High Efficiency</span>
              </div>

              {/* 5 Points from PDF Page 3 */}
              <div className="mt-4 space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5 font-bold">1</div>
                  <div>
                    <span className="font-semibold text-white">机械胀管高效换热：</span>
                    <span className="text-slate-300">盘管采用排错方式，结构合理，利用机械胀管，使铜管与铝翅片紧密结合，换热效率高。</span>
                    <p className="text-slate-500 mt-0.5">Coil using staggered mode. Mechanical expansion pipe tightly bonds copper pipe and aluminum fin for high heat exchange efficiency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5 font-bold">2</div>
                  <div>
                    <span className="font-semibold text-white">防腐耐用坚固外壳：</span>
                    <span className="text-slate-300">外壳采用优质钢板表面喷塑耐腐蚀，或铝板及不锈钢板，外观整洁，美观大方。</span>
                    <p className="text-slate-500 mt-0.5">Shells made of high quality coated steel, aluminum, or stainless steel plate to meet different customer needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5 font-bold">3</div>
                  <div>
                    <span className="font-semibold text-white">高效大风量长射程风机：</span>
                    <span className="text-slate-300">选用高效风机，风量大，射程远，耗电量小，噪音低，使用寿命长。</span>
                    <p className="text-slate-500 mt-0.5">High efficiency fans deliver large air volume, long throw range, low power consumption, and low noise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5 font-bold">4</div>
                  <div>
                    <span className="font-semibold text-white">不锈钢管电热管均匀除霜：</span>
                    <span className="text-slate-300">选用优质不锈钢管电热管均匀分布于翅片中，融霜时间短，效果好。</span>
                    <p className="text-slate-500 mt-0.5">Uniformly distributed stainless steel electric heating tubes ensure fast and thorough defrosting.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center shrink-0 mt-0.5 font-bold">5</div>
                  <div>
                    <span className="font-semibold text-white">支持非标非标准定制：</span>
                    <span className="text-slate-300">可以根据客户要求进行非标产品的设计生产。</span>
                    <p className="text-slate-500 mt-0.5">Full engineering customization available according to specific project demands.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Air Cooler Visual Preview matching PDF Page 3 */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-4 bg-slate-950/60 p-3 rounded-xl">
              <img
                src="/src/assets/images/pdf_air_cooler_3fan_1791181257616.jpg"
                alt="D type Air Cooler Unit (PDF Page 03)"
                referrerPolicy="no-referrer"
                className="w-24 h-16 object-cover rounded-lg border border-slate-700 shrink-0 bg-white"
              />
              <div className="text-xs text-slate-300">
                <div className="font-bold text-white">D-Series Ceiling Air Cooler (Catalog Page 03)</div>
                <div className="text-slate-400 mt-0.5">3-Fan configuration · Mechanical tube expansion · Stainless heaters</div>
              </div>
            </div>
          </div>

        </div>

        {/* Series Selection Segmented Controls (DD, DJ, DL) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveSeries('DD')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeSeries === 'DD'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                DD Series (-18°C 冷藏库)
              </button>
              <button
                onClick={() => setActiveSeries('DJ')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeSeries === 'DJ'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                DJ Series (&lt;-25°C 速冻库)
              </button>
              <button
                onClick={() => setActiveSeries('DL')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeSeries === 'DL'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                DL Series (~0°C 保鲜库)
              </button>
            </div>

            {/* Live Search & Filter Bar */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Filter model (e.g. 100, 200)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-48 sm:w-56"
                />
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Min kW:</span>
                <select
                  value={minCapacity}
                  onChange={(e) => setMinCapacity(Number(e.target.value))}
                  className="bg-slate-900 border border-slate-800 text-white rounded px-2 py-1 text-xs focus:outline-none"
                >
                  <option value={0}>All</option>
                  <option value={10}>≥ 10 kW</option>
                  <option value={25}>≥ 25 kW</option>
                  <option value={50}>≥ 50 kW</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Series Banner */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-white text-sm">{currentInfo.titleEn}</span>
              <span className="text-slate-400 ml-2">({currentInfo.titleZh})</span>
              <div className="text-slate-400 mt-1">{currentInfo.applicationEn} · {currentInfo.applicationZh}</div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-cyan-400 font-mono font-bold">
                Target: {currentInfo.targetTemp}
              </span>
              <span className="text-slate-500 font-mono">Catalog Page 0{currentInfo.page}</span>
            </div>
          </div>
        </div>

        {/* Technical Parameters Table matching PDF Page 3 & Page 4 */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 shadow-2xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              {/* Main table top categories */}
              <tr className="bg-slate-900/90 text-slate-300 border-b border-slate-800 font-semibold">
                <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 whitespace-nowrap sticky left-0 bg-slate-900 z-10">
                  型号<br /><span className="text-[10px] text-slate-400 font-normal">Model</span>
                </th>
                <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 text-right whitespace-nowrap">
                  制冷量<br /><span className="text-[10px] text-slate-400 font-normal">Capacity (kW)</span>
                </th>
                <th rowSpan={2} className="py-3 px-3 border-r border-slate-800 text-right whitespace-nowrap">
                  冷却面积<br /><span className="text-[10px] text-slate-400 font-normal">Area (m²)</span>
                </th>
                <th colSpan={6} className="py-2 px-3 border-r border-slate-800 text-center bg-slate-900/60 text-cyan-400">
                  风机 Fan
                </th>
                <th colSpan={3} className="py-2 px-3 border-r border-slate-800 text-center bg-slate-900/60 text-amber-400">
                  融霜加热管 Defrost heating pipe
                </th>
                <th rowSpan={2} className="py-3 px-3 text-center whitespace-nowrap">
                  操作<br /><span className="text-[10px] text-slate-400 font-normal">Action</span>
                </th>
              </tr>
              {/* Fan & Defrost subcolumns */}
              <tr className="bg-slate-900/70 text-slate-400 border-b border-slate-800 text-[11px]">
                <th className="py-2 px-2 text-right">直径 (mm)</th>
                <th className="py-2 px-2 text-right">风量 (m³/h)</th>
                <th className="py-2 px-2 text-center">数量 (N)</th>
                <th className="py-2 px-2 text-center">电压 (V)</th>
                <th className="py-2 px-2 text-right">功率 (W)</th>
                <th className="py-2 px-2 text-right border-r border-slate-800">射程 (m)</th>
                <th className="py-2 px-2 text-right">翅片融霜 (W)</th>
                <th className="py-2 px-2 text-right">水盘融霜 (W)</th>
                <th className="py-2 px-2 text-center border-r border-slate-800">融霜电压 (V)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-mono">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={13} className="py-8 text-center text-slate-500 font-sans">
                    No models matching filter criteria.
                  </td>
                </tr>
              ) : (
                filteredData.map((item, idx) => (
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
                      {item.capacityKW.toFixed(1)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-200 tabular-nums border-r border-slate-800/80">
                      {item.areaM2}
                    </td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums">
                      {item.fanDiameterMM}
                    </td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums">
                      {item.airVolumeM3H}
                    </td>
                    <td className="py-2.5 px-2 text-center text-slate-300 tabular-nums">
                      {item.fanQty}
                    </td>
                    <td className="py-2.5 px-2 text-center text-slate-400 text-[11px]">
                      {item.fanVoltage}
                    </td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums">
                      {item.fanPowerW}
                    </td>
                    <td className="py-2.5 px-2 text-right text-slate-300 tabular-nums border-r border-slate-800/80">
                      {item.rangeM}
                    </td>
                    <td className="py-2.5 px-2 text-right text-amber-300 tabular-nums">
                      {item.finDefrostPowerW}
                    </td>
                    <td className="py-2.5 px-2 text-right text-amber-300 tabular-nums">
                      {item.waterDefrostPowerW}
                    </td>
                    <td className="py-2.5 px-2 text-center text-slate-400 tabular-nums border-r border-slate-800/80">
                      {item.defrostVoltageV}
                    </td>
                    <td className="py-2.5 px-3 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1.5 font-sans">
                        <button
                          onClick={() => onSelectModelForDimension(item.model)}
                          className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] transition-colors"
                          title="View installation dimensions"
                        >
                          Dimensions
                        </button>
                        <button
                          onClick={() => handleAdd(item)}
                          className="p-1 rounded bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white transition-colors"
                          title="Add to quotation inquiry"
                        >
                          {addedItem === item.model ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="text-xs text-slate-500 flex items-center justify-between border-t border-slate-800/60 pt-4">
          <span>* All models available with standard electric defrost (E) or water defrost (S). Non-standard fan voltages (e.g. 220V 3-phase, 440V) available on request.</span>
          <span className="font-mono text-cyan-400">Total {filteredData.length} models listed</span>
        </div>

      </div>
    </section>
  );
};
