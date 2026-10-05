import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Printer, ZoomIn, ZoomOut, RotateCcw, X, ExternalLink } from 'lucide-react';
import {
  COMPANY_INFO,
  CATALOG_TABLE_OF_CONTENTS,
  DD_PARAMETERS,
  DJ_PARAMETERS,
  DL_PARAMETERS,
  COOLER_DIMENSIONS,
  FNH_PARAMETERS,
  FNH_DIMENSIONS,
  FNV_PARAMETERS,
  REFRIGERANTS,
  REFRIGERATION_FITTINGS,
} from '../data/catalogData';

interface BrochureModeProps {
  onClose: () => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const BrochureMode: React.FC<BrochureModeProps> = ({ onClose, lang }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 9;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 flex flex-col">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-50 bg-slate-950/95 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Return to Web View</span>
          </button>
          <div className="hidden sm:block text-xs text-slate-400 font-mono">
            Original PDF Catalog Replica · Shandong Huafeng Refrigeration Equipment
          </div>
        </div>

        {/* Page Nav */}
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200"
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono text-cyan-400 px-2 font-bold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-slate-200"
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Utility buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Main Page Viewer Canvas */}
      <div className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 lg:p-8 flex justify-center">
        <div className="w-full bg-white text-slate-900 rounded shadow-2xl overflow-hidden border border-slate-300 min-h-[900px] flex flex-col justify-between p-6 sm:p-8 md:p-10 font-sans print:shadow-none print:border-none print:m-0 print:p-4">
          
          {/* PAGE 1: Cover & Back Cover (Contact & Brand) */}
          {currentPage === 1 && (
            <div className="h-full flex flex-col justify-between space-y-8">
              {/* Top Contact Box matching PDF Page 1 */}
              <div className="border border-sky-300 rounded-lg p-6 bg-sky-50/40 relative">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  {/* Left: Contact Info */}
                  <div className="space-y-4">
                    <div className="text-right sm:text-left">
                      <h2 className="text-xl font-black text-sky-800 tracking-tight">
                        请联系我们
                      </h2>
                      <div className="text-sm font-bold text-sky-900 tracking-wider">
                        Contact us
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-slate-700">
                      <div className="flex items-center gap-2 font-mono">
                        <strong className="text-slate-900 font-sans">Tel (Malaysia): </strong>
                        <span className="font-bold text-sky-900">+60194352738</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono">
                        <strong className="text-slate-900 font-sans">Tel (China): </strong>
                        <span>86-13225312519</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono">
                        <strong className="text-slate-900 font-sans">Tel (Indonesia): </strong>
                        <span>62-82210514493</span>
                      </div>
                      <div className="font-mono pl-24">
                        <span>62-87842927992</span>
                      </div>
                    </div>
                  </div>

                  {/* QR codes placeholder */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-slate-900 p-1.5 rounded shadow flex items-center justify-center text-[10px] text-white font-mono text-center">
                        [ WeChat QR ]
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 block">WeChat QR</span>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-emerald-800 p-1.5 rounded shadow flex items-center justify-center text-[10px] text-white font-mono text-center">
                        [ WhatsApp ]
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 block">WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Addresses */}
                <div className="mt-6 pt-4 border-t border-sky-200/80 space-y-2 text-xs text-slate-700">
                  <div>
                    <strong className="text-slate-900">Factory Address:</strong>
                    <p className="text-slate-600">{COMPANY_INFO.contact.factoryAddress.en}</p>
                  </div>
                  <div>
                    <strong className="text-slate-900">Shop Address:</strong>
                    <p className="text-slate-600">{COMPANY_INFO.contact.shopAddress.en}</p>
                  </div>
                  <div>
                    <strong className="text-slate-900">Warehouse Address:</strong>
                    <p className="text-slate-600">{COMPANY_INFO.contact.warehouseAddress.en}</p>
                  </div>
                </div>
              </div>

              {/* Bottom: Cover Banner with Mountains & Brand Logo */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-sky-600 to-sky-900 text-white p-8 sm:p-12 shadow-inner min-h-[400px] flex flex-col justify-between">
                {/* Background image matching PDF Cover */}
                <img
                  src="/src/assets/images/pdf_cover_mountain_units_1791181244105.jpg"
                  alt="Huafeng Refrigeration PDF Cover"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 pointer-events-none"
                />

                <div className="relative z-10 text-right space-y-2">
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-white flex items-center justify-end gap-2">
                    <span>huafeng</span>
                    <span className="text-sky-200">华风制冷</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif italic text-sky-100 font-light tracking-wide">
                    To Be Cool
                  </div>
                </div>

                <div className="relative z-10 pt-16">
                  <div className="border-t border-sky-400/50 pt-4">
                    <h3 className="text-base sm:text-lg font-bold tracking-widest uppercase font-mono text-sky-100">
                      SHANDONG HUAFENG REFRIGERATION EQUIPMENT CO., LTD.
                    </h3>
                    <p className="text-xs text-sky-200 mt-1">
                      山东华风制冷设备有限公司
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PAGE 2: Company Profile & Table of Contents */}
          {currentPage === 2 && (
            <div className="h-full flex flex-col justify-between space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left: Company Description */}
                <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                  <div className="border-b-2 border-sky-600 pb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {COMPANY_INFO.nameZh}
                    </h3>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {COMPANY_INFO.nameEn}
                    </div>
                  </div>

                  <p className="text-slate-800 text-justify">
                    {COMPANY_INFO.introEn}
                  </p>

                  <p className="text-slate-800 text-justify font-sans">
                    {COMPANY_INFO.introZh}
                  </p>

                  <div className="pt-4 border-t border-slate-200">
                    <img
                      src="/src/assets/images/hero_huafeng_factory_1791180506048.jpg"
                      alt="Factory Entrance"
                      referrerPolicy="no-referrer"
                      className="w-full h-44 object-cover rounded border border-slate-300 shadow-sm"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block text-center">
                      华风制冷设备生产基地 (Factory Plant & Headquarter)
                    </span>
                  </div>
                </div>

                {/* Right: Table of CONTENTS matching Page 2 */}
                <div className="bg-sky-50/60 p-6 rounded-lg border border-sky-200 space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-sky-700 pb-2">
                    <h3 className="text-xl font-black text-sky-900 tracking-wider">
                      CONTENTS
                    </h3>
                    <span className="text-xs font-mono font-bold text-sky-700">目录</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {CATALOG_TABLE_OF_CONTENTS.map((item) => (
                      <div
                        key={item.page}
                        onClick={() => {
                          if (item.page === 1) setCurrentPage(3);
                          else if (item.page === 2) setCurrentPage(3);
                          else if (item.page === 3) setCurrentPage(4);
                          else if (item.page === 4) setCurrentPage(4);
                          else if (item.page === 5) setCurrentPage(5);
                          else if (item.page === 6) setCurrentPage(5);
                          else if (item.page === 7) setCurrentPage(6);
                          else if (item.page === 8) setCurrentPage(6);
                          else if (item.page === 9) setCurrentPage(7);
                          else if (item.page === 10) setCurrentPage(7);
                          else if (item.page === 11) setCurrentPage(8);
                          else if (item.page === 12) setCurrentPage(9);
                        }}
                        className="flex items-baseline justify-between group cursor-pointer hover:text-sky-700 py-0.5 border-b border-sky-100"
                      >
                        <div className="pr-2">
                          <span className="font-semibold text-slate-800 group-hover:text-sky-700">
                            {item.titleEn}
                          </span>
                          <span className="text-slate-500 text-[11px] block font-sans">
                            {item.titleZh}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-sky-800 tabular-nums shrink-0">
                          {String(item.page).padStart(2, '0')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 02
              </div>
            </div>
          )}

          {/* PAGE 3: D Type Air Cooler (Model Breakdown + Features + DD Parameters) */}
          {currentPage === 3 && (
            <div className="h-full flex flex-col justify-between space-y-6 text-xs">
              <div>
                <div className="flex items-center justify-between border-b-2 border-sky-700 pb-2 mb-4">
                  <h2 className="text-xl font-black text-sky-900">
                    D型冷风机 <span className="font-normal text-slate-600 text-sm">D type Air cooler</span>
                  </h2>
                  <span className="font-mono text-sky-800 font-bold">Catalog Page 03</span>
                </div>

                {/* Nomenclature & Features in 2 columns + Product Image */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-center">
                  <div className="md:col-span-4 p-3 bg-slate-50 border border-slate-200 rounded">
                    <h4 className="font-bold text-slate-900 mb-2">冷风机型号说明 Cold air machine type</h4>
                    <div className="font-mono font-bold text-sm text-sky-700 mb-2 text-center bg-white p-1 rounded border">
                      D D S 19 / 100
                    </div>
                    <ul className="text-[10px] space-y-0.5 text-slate-600">
                      <li><strong>D: </strong>冷却面积 m² (Cooling area)</li>
                      <li><strong>D: </strong>名义制冷量 kW (Nominal cooling capacity)</li>
                      <li><strong>S: </strong>水化霜/电化霜 (Water/Electric defrost)</li>
                      <li><strong>19: </strong>使用温度代号: L型高温, D型中温, J型低温</li>
                      <li><strong>100: </strong>表示产品代号 (Product code)</li>
                    </ul>
                  </div>

                  <div className="md:col-span-5 p-3 bg-slate-50 border border-slate-200 rounded">
                    <h4 className="font-bold text-slate-900 mb-1">产品主要特点 Product main features</h4>
                    <ul className="text-[10px] space-y-1 text-slate-600 list-disc list-inside">
                      <li>盘管采用排错方式，机械胀管，铜管与铝翅片紧密结合</li>
                      <li>外壳采用优质钢板表面喷塑耐腐蚀，或铝板及不锈钢板</li>
                      <li>选用高效风机，风量大，射程远，耗电小，噪音低</li>
                      <li>不锈钢管电热管均匀分布于翅片中，融霜时间短效果好</li>
                      <li>支持客户非标产品设计定制生产</li>
                    </ul>
                  </div>

                  <div className="md:col-span-3 flex justify-center">
                    <img
                      src="/src/assets/images/pdf_air_cooler_3fan_1791181257616.jpg"
                      alt="D type Air Cooler"
                      referrerPolicy="no-referrer"
                      className="w-36 h-28 object-contain rounded border border-slate-200 bg-white p-1 shadow-sm"
                    />
                  </div>
                </div>

                {/* DD Table */}
                <h3 className="font-bold text-slate-900 mb-1">
                  DD型中高温吊顶式冷风机技术参数 (DD in temperature Ceiling Type Air Cooler Technical Parameters)
                </h3>
                <div className="overflow-x-auto border border-slate-300">
                  <table className="w-full text-[10px] text-left border-collapse">
                    <thead>
                      <tr className="bg-sky-100/80 text-slate-800 border-b border-slate-300 font-semibold">
                        <th className="p-1 border-r border-slate-300">型号 Model</th>
                        <th className="p-1 border-r border-slate-300 text-right">制冷量(kW)</th>
                        <th className="p-1 border-r border-slate-300 text-right">冷却面积(m²)</th>
                        <th className="p-1 border-r border-slate-300 text-right">风机直径(mm)</th>
                        <th className="p-1 border-r border-slate-300 text-right">风量(m³/h)</th>
                        <th className="p-1 border-r border-slate-300 text-center">数量</th>
                        <th className="p-1 border-r border-slate-300 text-center">电压(V)</th>
                        <th className="p-1 border-r border-slate-300 text-right">功率(W)</th>
                        <th className="p-1 border-r border-slate-300 text-right">射程(m)</th>
                        <th className="p-1 border-r border-slate-300 text-right">翅片融霜(W)</th>
                        <th className="p-1 border-r border-slate-300 text-right">水盘融霜(W)</th>
                        <th className="p-1 text-center">融霜电压(V)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 font-mono">
                      {DD_PARAMETERS.map((row) => (
                        <tr key={row.model} className="hover:bg-slate-50">
                          <td className="p-1 font-bold text-slate-900 border-r border-slate-200">{row.model}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.capacityKW}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.areaM2}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.fanDiameterMM}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.airVolumeM3H}</td>
                          <td className="p-1 text-center border-r border-slate-200">{row.fanQty}</td>
                          <td className="p-1 text-center border-r border-slate-200">{row.fanVoltage}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.fanPowerW}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.rangeM}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.finDefrostPowerW}</td>
                          <td className="p-1 text-right border-r border-slate-200">{row.waterDefrostPowerW}</td>
                          <td className="p-1 text-center">{row.defrostVoltageV}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 03
              </div>
            </div>
          )}

          {/* PAGE 4: DJ Cryogenic & DL High Temperature Parameters */}
          {currentPage === 4 && (
            <div className="h-full flex flex-col justify-between space-y-6 text-xs">
              <div className="space-y-5">
                {/* DJ Table */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-1">
                    DJ型低温吊顶式冷风机技术参数 (DJ Cryogenic Ceiling Type Air Cooler Technical Parameters)
                  </h3>
                  <div className="overflow-x-auto border border-slate-300">
                    <table className="w-full text-[10px] text-left border-collapse">
                      <thead>
                        <tr className="bg-indigo-50 text-slate-800 border-b border-slate-300 font-semibold">
                          <th className="p-1 border-r border-slate-300">型号 Model</th>
                          <th className="p-1 border-r border-slate-300 text-right">制冷量(kW)</th>
                          <th className="p-1 border-r border-slate-300 text-right">冷却面积(m²)</th>
                          <th className="p-1 border-r border-slate-300 text-right">风机直径(mm)</th>
                          <th className="p-1 border-r border-slate-300 text-right">风量(m³/h)</th>
                          <th className="p-1 border-r border-slate-300 text-center">数量</th>
                          <th className="p-1 border-r border-slate-300 text-center">电压(V)</th>
                          <th className="p-1 border-r border-slate-300 text-right">功率(W)</th>
                          <th className="p-1 border-r border-slate-300 text-right">射程(m)</th>
                          <th className="p-1 border-r border-slate-300 text-right">翅片融霜(W)</th>
                          <th className="p-1 border-r border-slate-300 text-right">水盘融霜(W)</th>
                          <th className="p-1 text-center">融霜电压(V)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono">
                        {DJ_PARAMETERS.map((row) => (
                          <tr key={row.model} className="hover:bg-slate-50">
                            <td className="p-1 font-bold text-slate-900 border-r border-slate-200">{row.model}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.capacityKW}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.areaM2}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.fanDiameterMM}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.airVolumeM3H}</td>
                            <td className="p-1 text-center border-r border-slate-200">{row.fanQty}</td>
                            <td className="p-1 text-center border-r border-slate-200">{row.fanVoltage}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.fanPowerW}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.rangeM}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.finDefrostPowerW}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.waterDefrostPowerW}</td>
                            <td className="p-1 text-center">{row.defrostVoltageV}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* DL Table */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-1">
                    DL型高温吊顶式冷风机技术参数 (DL High Temperature Ceiling Type Air Cooler Technical Parameters)
                  </h3>
                  <div className="overflow-x-auto border border-slate-300">
                    <table className="w-full text-[10px] text-left border-collapse">
                      <thead>
                        <tr className="bg-emerald-50 text-slate-800 border-b border-slate-300 font-semibold">
                          <th className="p-1 border-r border-slate-300">型号 Model</th>
                          <th className="p-1 border-r border-slate-300 text-right">制冷量(kW)</th>
                          <th className="p-1 border-r border-slate-300 text-right">冷却面积(m²)</th>
                          <th className="p-1 border-r border-slate-300 text-right">风机直径(mm)</th>
                          <th className="p-1 border-r border-slate-300 text-right">风量(m³/h)</th>
                          <th className="p-1 border-r border-slate-300 text-center">数量</th>
                          <th className="p-1 border-r border-slate-300 text-center">电压(V)</th>
                          <th className="p-1 border-r border-slate-300 text-right">功率(W)</th>
                          <th className="p-1 border-r border-slate-300 text-right">射程(m)</th>
                          <th className="p-1 border-r border-slate-300 text-right">翅片融霜(W)</th>
                          <th className="p-1 border-r border-slate-300 text-right">水盘融霜(W)</th>
                          <th className="p-1 text-center">融霜电压(V)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono">
                        {DL_PARAMETERS.map((row) => (
                          <tr key={row.model} className="hover:bg-slate-50">
                            <td className="p-1 font-bold text-slate-900 border-r border-slate-200">{row.model}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.capacityKW}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.areaM2}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.fanDiameterMM}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.airVolumeM3H}</td>
                            <td className="p-1 text-center border-r border-slate-200">{row.fanQty}</td>
                            <td className="p-1 text-center border-r border-slate-200">{row.fanVoltage}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.fanPowerW}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.rangeM}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.finDefrostPowerW}</td>
                            <td className="p-1 text-right border-r border-slate-200">{row.waterDefrostPowerW}</td>
                            <td className="p-1 text-center">{row.defrostVoltageV}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 04
              </div>
            </div>
          )}

          {/* PAGE 5: D Type Installing Dimensions & Condenser Types */}
          {currentPage === 5 && (
            <div className="h-full flex flex-col justify-between space-y-6 text-xs">
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-1">
                    D型冷风机安装尺寸 (D type cooler installing dimensions)
                  </h3>
                  <div className="overflow-x-auto border border-slate-300">
                    <table className="w-full text-[10px] text-left border-collapse font-mono">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 border-b border-slate-300 font-sans font-semibold">
                          <th className="p-1 border-r border-slate-300">型号 Model</th>
                          <th className="p-1 text-right">长 A</th>
                          <th className="p-1 text-right">宽 B</th>
                          <th className="p-1 text-right border-r border-slate-300">高 C</th>
                          <th className="p-1 text-right">D</th>
                          <th className="p-1 text-right">E</th>
                          <th className="p-1 text-center">E1</th>
                          <th className="p-1 text-center">E2</th>
                          <th className="p-1 text-center">E3</th>
                          <th className="p-1 text-center border-r border-slate-300">E4</th>
                          <th className="p-1 text-center">进液管</th>
                          <th className="p-1 text-center">出液管</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {COOLER_DIMENSIONS.map((r, i) => (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="p-1 font-bold text-slate-900 border-r border-slate-200 font-sans">
                              {r.modelDD} ({r.modelDL}/{r.modelDJ})
                            </td>
                            <td className="p-1 text-right">{r.a}</td>
                            <td className="p-1 text-right">{r.b}</td>
                            <td className="p-1 text-right border-r border-slate-200">{r.c}</td>
                            <td className="p-1 text-right">{r.d}</td>
                            <td className="p-1 text-right font-bold text-sky-800">{r.e}</td>
                            <td className="p-1 text-center">{r.e1}</td>
                            <td className="p-1 text-center">{r.e2}</td>
                            <td className="p-1 text-center">{r.e3}</td>
                            <td className="p-1 text-center border-r border-slate-200">{r.e4}</td>
                            <td className="p-1 text-center font-bold text-amber-700">{r.inletTubeSize}</td>
                            <td className="p-1 text-center font-bold text-emerald-700">{r.outletTubeSize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Condenser Types intro matching PDF Page 5 */}
                <div className="p-4 bg-sky-50/50 rounded border border-sky-200 space-y-2">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="font-bold text-sky-900 text-sm">
                        风冷冷凝器 Types of air-cooled condenser
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] text-slate-700">
                        <div>
                          <div className="font-mono font-bold text-sky-800">FN H G 14.8 / 49</div>
                          <p className="text-[10px] text-slate-600">
                            FN: 产品代号 · H: 平横侧出风(H)/V型顶出风(V)/U型(U)/W型(W) · G: 带壳半封闭式 · 14.8: 换热面积(m²) · 49: 换热量(kW)
                          </p>
                        </div>
                        <div>
                          <strong>特点 Characteristics: </strong>
                          <p className="text-[10px] text-slate-600">
                            盘管排错方式，机械胀管紧密结合；外壳磷化喷塑处理，经久耐腐蚀。
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <img
                        src="/src/assets/images/pdf_condenser_types_1791181275783.jpg"
                        alt="Condenser Types (PDF Page 05)"
                        referrerPolicy="no-referrer"
                        className="w-40 h-24 object-contain rounded border border-sky-200 bg-white p-1 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 05
              </div>
            </div>
          )}

          {/* PAGE 6: FNH Parameters & FNH Dimensions */}
          {currentPage === 6 && (
            <div className="h-full flex flex-col justify-between space-y-6 text-xs">
              <div className="space-y-5">
                {/* FNH Parameters */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-1">
                    FNH型冷凝器技术参数 (FNH type condenser technology parameters)
                  </h3>
                  <div className="overflow-x-auto border border-slate-300">
                    <table className="w-full text-[10px] text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 border-b border-slate-300 font-semibold">
                          <th className="p-1 border-r border-slate-300">型号 Model</th>
                          <th className="p-1 text-right">换热量(kW)</th>
                          <th className="p-1 text-right">面积(m²)</th>
                          <th className="p-1 text-center border-r border-slate-300">排圈数</th>
                          <th className="p-1 text-center">风扇数量</th>
                          <th className="p-1 text-right">功率(W)</th>
                          <th className="p-1 text-right">风量(m³/h)</th>
                          <th className="p-1 text-center">风叶(φ mm)</th>
                          <th className="p-1 text-center border-r border-slate-300">电压(V)</th>
                          <th className="p-1 text-center">进管(mm)</th>
                          <th className="p-1 text-center">出管(mm)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono">
                        {FNH_PARAMETERS.map((row) => (
                          <tr key={row.model} className="hover:bg-slate-50">
                            <td className="p-1 font-bold text-slate-900 border-r border-slate-200">{row.model}</td>
                            <td className="p-1 text-right font-bold text-sky-800">{row.heatExchangeKW}</td>
                            <td className="p-1 text-right">{row.areaM2}</td>
                            <td className="p-1 text-center border-r border-slate-200">{row.rowRings}</td>
                            <td className="p-1 text-center">{row.fanQty}</td>
                            <td className="p-1 text-right">{row.fanPowerW}</td>
                            <td className="p-1 text-right">{row.airVolumeM3H}</td>
                            <td className="p-1 text-center">{row.windLeafMM}</td>
                            <td className="p-1 text-center border-r border-slate-200">{row.voltageV}</td>
                            <td className="p-1 text-center font-bold text-amber-700">{row.inletTubeMM}</td>
                            <td className="p-1 text-center font-bold text-emerald-700">{row.outletTubeMM}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* FNH Dimensions */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-1">
                    FNH外形尺寸及安装尺寸 (FNH overall and installing dimensions)
                  </h3>
                  <div className="overflow-x-auto border border-slate-300">
                    <table className="w-full text-[10px] text-left border-collapse font-mono">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 border-b border-slate-300 font-sans font-semibold">
                          <th className="p-1 border-r border-slate-300">型号 Model</th>
                          <th className="p-1 text-right">A (mm)</th>
                          <th className="p-1 text-right">B (mm)</th>
                          <th className="p-1 text-right">C (mm)</th>
                          <th className="p-1 text-right">D (mm)</th>
                          <th className="p-1 text-right">E (mm)</th>
                          <th className="p-1 text-center">安装孔尺寸(mm)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {FNH_DIMENSIONS.map((row) => (
                          <tr key={row.model} className="hover:bg-slate-50">
                            <td className="p-1 font-bold text-slate-900 border-r border-slate-200">{row.model}</td>
                            <td className="p-1 text-right font-bold text-sky-800">{row.a}</td>
                            <td className="p-1 text-right">{row.b}</td>
                            <td className="p-1 text-right">{row.c}</td>
                            <td className="p-1 text-right">{row.d}</td>
                            <td className="p-1 text-right">{row.e}</td>
                            <td className="p-1 text-center font-bold text-amber-700">{row.holeSizeMM}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 06
              </div>
            </div>
          )}

          {/* PAGE 7: FNV Parameters & Refrigerants */}
          {currentPage === 7 && (
            <div className="h-full flex flex-col justify-between space-y-6 text-xs">
              <div className="space-y-5">
                {/* FNV Parameters */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 border-b border-slate-300 pb-1">
                    FNV型冷凝器技术参数 (FNV type condenser technology parameters)
                  </h3>
                  <div className="overflow-x-auto border border-slate-300">
                    <table className="w-full text-[10px] text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 border-b border-slate-300 font-semibold">
                          <th className="p-1 border-r border-slate-300">型号 Model</th>
                          <th className="p-1 text-right">换热量(kW)</th>
                          <th className="p-1 text-right">面积(m²)</th>
                          <th className="p-1 text-center">风扇数量</th>
                          <th className="p-1 text-right">功率(W)</th>
                          <th className="p-1 text-right">风量(m³/h)</th>
                          <th className="p-1 text-center">风叶(φ mm)</th>
                          <th className="p-1 text-center border-r border-slate-300">电压(V)</th>
                          <th className="p-1 text-center">进管(mm)</th>
                          <th className="p-1 text-center">出管(mm)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono">
                        {FNV_PARAMETERS.map((row) => (
                          <tr key={row.model} className="hover:bg-slate-50">
                            <td className="p-1 font-bold text-slate-900 border-r border-slate-200">{row.model}</td>
                            <td className="p-1 text-right font-bold text-sky-800">{row.heatExchangeKW}</td>
                            <td className="p-1 text-right">{row.areaM2}</td>
                            <td className="p-1 text-center">{row.fanQty}</td>
                            <td className="p-1 text-right">{row.fanPowerW}</td>
                            <td className="p-1 text-right">{row.airVolumeM3H}</td>
                            <td className="p-1 text-center">{row.windLeafMM}</td>
                            <td className="p-1 text-center border-r border-slate-200">{row.voltageV}</td>
                            <td className="p-1 text-center font-bold text-amber-700">{row.inletTubeMM}</td>
                            <td className="p-1 text-center font-bold text-emerald-700">{row.outletTubeMM}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Refrigerants matching PDF Page 7 */}
                <div>
                  <div className="flex items-center justify-between border-b border-slate-300 pb-1 mb-2">
                    <h3 className="font-bold text-slate-900">
                      制冷剂 Refrigerant
                    </h3>
                    <span className="text-[10px] text-slate-500 font-mono">Catalog Page 07</span>
                  </div>

                  <div className="mb-3 flex items-center justify-center p-2 bg-slate-50 rounded border border-slate-200">
                    <img
                      src="/src/assets/images/pdf_refrigerant_four_cylinders_1791181288587.jpg"
                      alt="R134a, R507A, R410A, R404A Cylinders (PDF Page 07)"
                      referrerPolicy="no-referrer"
                      className="h-24 w-auto object-contain rounded"
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {REFRIGERANTS.map((gas) => (
                      <div key={gas.id} className="p-3 rounded border border-slate-200 bg-slate-50 flex flex-col justify-between">
                        <div>
                          <div className="text-lg font-black" style={{ color: gas.color }}>
                            {gas.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-600 mt-1">
                            {gas.formula}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1">
                            BP: {gas.boilingPoint}
                          </div>
                        </div>
                        <div className="text-[9px] text-slate-600 mt-2 pt-2 border-t border-slate-200">
                          {gas.application}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 07
              </div>
            </div>
          )}

          {/* PAGE 8: Refrigeration Fittings (1) */}
          {currentPage === 8 && (
            <div className="h-full flex flex-col justify-between space-y-6 text-xs">
              <div>
                <div className="flex items-center justify-between border-b-2 border-sky-700 pb-2 mb-4">
                  <h2 className="text-xl font-black text-sky-900">
                    制冷配件 (一) <span className="font-normal text-slate-600 text-sm">Refrigeration fittings (1)</span>
                  </h2>
                  <span className="font-mono text-sky-800 font-bold">Catalog Page 08</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {REFRIGERATION_FITTINGS.filter((f) => f.page === 1).map((item) => (
                    <div key={item.id} className="p-3 rounded border border-slate-200 bg-slate-50/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>#{item.num}</span>
                          <span>{item.category}</span>
                        </div>
                        <div className="font-bold text-slate-900 mt-1 text-sm">
                          {item.nameZh}
                        </div>
                        <div className="text-slate-600 text-xs">
                          {item.nameEn}
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-mono">
                        {item.specs}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 08
              </div>
            </div>
          )}

          {/* PAGE 9: Refrigeration Fittings (2) */}
          {currentPage === 9 && (
            <div className="h-full flex flex-col justify-between space-y-6 text-xs">
              <div>
                <div className="flex items-center justify-between border-b-2 border-sky-700 pb-2 mb-4">
                  <h2 className="text-xl font-black text-sky-900">
                    制冷配件 (二) <span className="font-normal text-slate-600 text-sm">Refrigeration fittings (2)</span>
                  </h2>
                  <span className="font-mono text-sky-800 font-bold">Catalog Page 09</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {REFRIGERATION_FITTINGS.filter((f) => f.page === 2).map((item) => (
                    <div key={item.id} className="p-3 rounded border border-slate-200 bg-slate-50/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>#{item.num}</span>
                          <span>{item.category}</span>
                        </div>
                        <div className="font-bold text-slate-900 mt-1 text-sm">
                          {item.nameZh}
                        </div>
                        <div className="text-slate-600 text-xs">
                          {item.nameEn}
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-200 text-[10px] text-slate-500 font-mono">
                        {item.specs}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-right text-xs font-mono text-slate-400 border-t border-slate-200 pt-2">
                Page 09
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Bottom Page Thumbnail Strip */}
      <div className="bg-slate-950 border-t border-slate-800 py-3 px-4 overflow-x-auto flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
          <button
            key={pg}
            onClick={() => setCurrentPage(pg)}
            className={`px-3 py-1.5 rounded text-xs font-mono font-medium transition-all ${
              currentPage === pg
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            P{pg}
          </button>
        ))}
      </div>
    </div>
  );
};
