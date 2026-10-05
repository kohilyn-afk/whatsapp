import React, { useState } from 'react';
import { Search, Wrench, Plus, Check, Filter, Layers, Info } from 'lucide-react';
import { REFRIGERATION_FITTINGS, FittingItem } from '../data/catalogData';

interface FittingsSectionProps {
  onAddToCart: (item: { id: string; name: string; specs: string }) => void;
  lang: 'bilingual' | 'en' | 'zh';
}

export const FittingsSection: React.FC<FittingsSectionProps> = ({
  onAddToCart,
  lang,
}) => {
  const [activePage, setActivePage] = useState<1 | 2 | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [detailModalItem, setDetailModalItem] = useState<FittingItem | null>(null);

  // Extract unique categories
  const categories = Array.from(new Set(REFRIGERATION_FITTINGS.map((f) => f.category)));

  // Filter items
  const filteredFittings = REFRIGERATION_FITTINGS.filter((item) => {
    const matchesPage = activePage === 'all' || item.page === activePage;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nameZh.includes(searchTerm) ||
      item.specs.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPage && matchesCategory && matchesSearch;
  });

  const handleAdd = (item: FittingItem) => {
    onAddToCart({
      id: item.id,
      name: `${item.nameEn} (${item.nameZh})`,
      specs: `${item.category} | ${item.specs}`,
    });
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section id="fittings" className="py-16 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4" />
              <span>Catalog Pages 08 – 09 · Complete Refrigeration Parts Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              制冷配件 <span className="text-cyan-400 font-light">| Refrigeration fittings</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              24 core industrial refrigeration components covering compressors, brass valves, vibration dampers, pressure controls, manifolds, copper fittings, and lubricants.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>24 Full-Line Accessories</span>
          </div>
        </div>

        {/* Studio Equipment Photo Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <img
              src="/src/assets/images/refrigeration_parts_1791180544739.jpg"
              alt="Precision Refrigeration Fittings"
              referrerPolicy="no-referrer"
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl border border-slate-700 shrink-0"
            />
            <div className="space-y-1">
              <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">
                Quality Parts & Field Accessories
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Genuine Replacement & Construction Grade Fittings
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                All components are pressure-tested and engineered to pair seamlessly with Huafeng condensing units, cold room evaporators, and multi-compressor parallel racks.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setActivePage(1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activePage === 1 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Part 1 (Page 08 · #1 - #12)
            </button>
            <button
              onClick={() => setActivePage(2)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activePage === 2 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Part 2 (Page 09 · #13 - #24)
            </button>
            <button
              onClick={() => setActivePage('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activePage === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              All 24 Items
            </button>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Category Filter Chips (Interactive Segmented buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-slate-800 text-white border border-slate-700 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              All Categories
            </button>
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-800 text-cyan-400 border border-slate-700 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search fittings (e.g. valve, KM, oil)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-full sm:w-64"
            />
          </div>
        </div>

        {/* 24 Fittings Grid directly matching Pages 8 & 9 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredFittings.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 rounded-xl p-5 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                {/* Header: Number & Category */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 font-bold">
                    #{String(item.num).padStart(2, '0')} · Page 0{item.page === 1 ? '8' : '9'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.nameEn}
                  </h4>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {item.nameZh}
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-[11px] text-slate-300 font-mono leading-relaxed">
                  <span className="text-slate-500 block text-[9px] uppercase font-sans tracking-wider">Specifications:</span>
                  {item.specs}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {lang === 'zh' ? item.descriptionZh : item.description}
                </p>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-slate-400"
                    >
                      {idx > 0 && <span className="text-slate-600 mr-1.5">·</span>}
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setDetailModalItem(item)}
                  className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>

                <button
                  onClick={() => handleAdd(item)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  {addedItem === item.id ? (
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
          ))}
        </div>

        {/* Modal for item detail */}
        {detailModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    Catalog Item #{detailModalItem.num} (Page 0{detailModalItem.page === 1 ? '8' : '9'})
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {detailModalItem.nameEn} · {detailModalItem.nameZh}
                  </h3>
                </div>
                <button
                  onClick={() => setDetailModalItem(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Category / Classification:</span>
                  <span className="text-slate-200">{detailModalItem.category} ({detailModalItem.categoryZh})</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Technical Specifications:</span>
                  <p className="text-cyan-300 font-mono p-2.5 rounded bg-slate-950 border border-slate-800 mt-1">
                    {detailModalItem.specs}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Engineering Description:</span>
                  <p className="text-slate-300 leading-relaxed mt-1">
                    {detailModalItem.description}
                  </p>
                  <p className="text-slate-400 leading-relaxed mt-1">
                    {detailModalItem.descriptionZh}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold mb-1">Key Features:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {detailModalItem.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setDetailModalItem(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleAdd(detailModalItem);
                    setDetailModalItem(null);
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md"
                >
                  Add to Quotation
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
