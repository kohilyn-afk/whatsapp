import React, { useState, useMemo } from 'react';
import { X, Sliders, CheckCircle, ArrowRight, Snowflake, Wind, Calculator } from 'lucide-react';
import { DD_PARAMETERS, DJ_PARAMETERS, DL_PARAMETERS, FNH_PARAMETERS, FNV_PARAMETERS } from '../data/catalogData';

interface CoolingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModel: (modelName: string) => void;
  onAddToCart: (item: { id: string; name: string; specs: string }) => void;
}

export const CoolingCalculatorModal: React.FC<CoolingCalculatorModalProps> = ({
  isOpen,
  onClose,
  onSelectModel,
  onAddToCart,
}) => {
  const [roomType, setRoomType] = useState<'fresh' | 'frozen' | 'freeze'>('frozen');
  const [length, setLength] = useState<number>(6);
  const [width, setWidth] = useState<number>(4);
  const [height, setHeight] = useState<number>(3);

  if (!isOpen) return null;

  const volume = length * width * height;

  // Industrial estimation factor:
  // Fresh (0°C): ~35-40 W/m³ for room maintenance + load => approx factor ~ 0.045 kW/m³
  // Cold (-18°C): ~50-60 W/m³ => approx factor ~ 0.065 kW/m³
  // Deep Freeze (-25°C): ~75-90 W/m³ => approx factor ~ 0.095 kW/m³
  const estimatedKW = useMemo(() => {
    let factor = 0.065;
    if (roomType === 'fresh') factor = 0.045;
    if (roomType === 'freeze') factor = 0.095;
    return Math.max(3, Number((volume * factor).toFixed(1)));
  }, [roomType, volume]);

  // Recommended Air Cooler
  const recommendedCooler = useMemo(() => {
    if (roomType === 'fresh') {
      const match = DL_PARAMETERS.find((m) => m.capacityKW >= estimatedKW) || DL_PARAMETERS[DL_PARAMETERS.length - 1];
      return { series: 'DL', item: match };
    }
    if (roomType === 'freeze') {
      const match = DJ_PARAMETERS.find((m) => m.capacityKW >= estimatedKW) || DJ_PARAMETERS[DJ_PARAMETERS.length - 1];
      return { series: 'DJ', item: match };
    }
    const match = DD_PARAMETERS.find((m) => m.capacityKW >= estimatedKW) || DD_PARAMETERS[DD_PARAMETERS.length - 1];
    return { series: 'DD', item: match };
  }, [roomType, estimatedKW]);

  // Recommended Condenser (Heat rejection ~ 1.3 - 1.4x of cooling capacity)
  const condenserKW = Number((estimatedKW * 1.35).toFixed(1));
  const recommendedCondenser = useMemo(() => {
    if (condenserKW <= 100) {
      const match = FNH_PARAMETERS.find((m) => m.heatExchangeKW >= condenserKW) || FNH_PARAMETERS[FNH_PARAMETERS.length - 1];
      return { type: 'FNH', item: match };
    }
    const match = FNV_PARAMETERS.find((m) => m.heatExchangeKW >= condenserKW) || FNV_PARAMETERS[FNV_PARAMETERS.length - 1];
    return { type: 'FNV', item: match };
  }, [condenserKW]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Huafeng Quick Unit Sizing Calculator
              </h3>
              <p className="text-xs text-slate-400">
                冷风机与风冷冷凝器快速工程选型估算工具
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-4 text-xs">
          {/* Room Type Selector */}
          <div>
            <label className="text-slate-300 font-semibold block mb-1.5">
              1. Select Storage Room Temperature & Type (库温类型):
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRoomType('fresh')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  roomType === 'fresh'
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-sm'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-white">DL Series (~0°C)</div>
                <div className="text-[11px] text-emerald-400 mt-0.5">Fresh Fruits & Vegetables</div>
                <div className="text-[10px] text-slate-500 mt-1">保鲜库 / 0℃左右</div>
              </button>

              <button
                type="button"
                onClick={() => setRoomType('frozen')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  roomType === 'frozen'
                    ? 'bg-blue-950/60 border-blue-500 text-blue-200 shadow-sm'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-white">DD Series (-18°C)</div>
                <div className="text-[11px] text-blue-400 mt-0.5">Cold Storage & Meat</div>
                <div className="text-[10px] text-slate-500 mt-1">冷藏库 / -18℃</div>
              </button>

              <button
                type="button"
                onClick={() => setRoomType('freeze')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  roomType === 'freeze'
                    ? 'bg-indigo-950/60 border-indigo-500 text-indigo-200 shadow-sm'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-white">DJ Series (&lt;-25°C)</div>
                <div className="text-[11px] text-indigo-400 mt-0.5">Blast Freeze / Seafood</div>
                <div className="text-[10px] text-slate-500 mt-1">速冻库 / -25℃以下</div>
              </button>
            </div>
          </div>

          {/* Dimension Sliders */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-300">2. Cold Room Internal Dimensions:</span>
              <span className="font-mono text-cyan-400 font-bold">
                Volume: {volume} m³ ({length}m × {width}m × {height}m)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                  <span>Length (长):</span>
                  <span className="font-mono text-white font-bold">{length} m</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={25}
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                  <span>Width (宽):</span>
                  <span className="font-mono text-white font-bold">{width} m</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={20}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                  <span>Height (高):</span>
                  <span className="font-mono text-white font-bold">{height} m</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={8}
                  step={0.5}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Box */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-cyan-800/60 space-y-4">
          <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
            <span className="text-slate-400">Estimated Required Cooling Capacity:</span>
            <span className="text-lg font-mono font-black text-cyan-400">
              ≈ {estimatedKW} kW
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Air Cooler Pick */}
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Snowflake className="w-4 h-4" />
                <span>Recommended Air Cooler</span>
              </div>
              <div className="text-xl font-bold font-mono text-white">
                {recommendedCooler.item.model}
              </div>
              <div className="text-[11px] text-slate-400 space-y-0.5">
                <div>Capacity: <strong className="text-cyan-300 font-mono">{recommendedCooler.item.capacityKW} kW</strong></div>
                <div>Area: <strong className="text-slate-200 font-mono">{recommendedCooler.item.areaM2} m²</strong></div>
                <div>Fans: {recommendedCooler.item.fanQty} × φ{recommendedCooler.item.fanDiameterMM}mm ({recommendedCooler.item.airVolumeM3H} m³/h)</div>
              </div>
              <button
                onClick={() => {
                  onSelectModel(recommendedCooler.item.model);
                  onClose();
                }}
                className="w-full mt-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
              >
                <span>Inspect Dimensions</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Condenser Pick */}
            <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <Wind className="w-4 h-4" />
                <span>Recommended Condenser</span>
              </div>
              <div className="text-xl font-bold font-mono text-white">
                {recommendedCondenser.item.model}
              </div>
              <div className="text-[11px] text-slate-400 space-y-0.5">
                <div>Heat Ex: <strong className="text-amber-300 font-mono">{recommendedCondenser.item.heatExchangeKW} kW</strong></div>
                <div>Area: <strong className="text-slate-200 font-mono">{recommendedCondenser.item.areaM2} m²</strong></div>
                <div>Fans: {recommendedCondenser.item.fanQty} Units ({recommendedCondenser.item.airVolumeM3H} m³/h)</div>
              </div>
              <button
                onClick={() => {
                  onAddToCart({
                    id: `${recommendedCooler.item.model}+${recommendedCondenser.item.model}`,
                    name: `Matched Set: ${recommendedCooler.item.model} Cooler + ${recommendedCondenser.item.model} Condenser`,
                    specs: `Cooling: ${recommendedCooler.item.capacityKW} kW | Condenser: ${recommendedCondenser.item.heatExchangeKW} kW for ${volume} m³ room`,
                  });
                  onClose();
                }}
                className="w-full mt-2 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded text-[11px] transition-colors flex items-center justify-center gap-1 shadow-md"
              >
                <span>Add Set to Inquiry</span>
                <CheckCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
