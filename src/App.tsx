import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { ResourceCard } from './components/ResourceCard';
import { VisitorInductionModal } from './components/VisitorInductionModal';
import { EmergencyModal } from './components/EmergencyModal';
import { ImageModal } from './components/ImageModal';
import { Footer } from './components/Footer';
import { TICLINE_DATA, ResourceItem } from './data/ticlineData';
import { Building2, Users, Wrench, SearchX, ArrowLeft, Search, X } from 'lucide-react';

// Helper function to normalize text (remove accents / tildes and lowercase)
const normalizeText = (text: string): string => {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

export default function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<'interno' | 'visitantes' | 'contratistas' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [selectedImageItem, setSelectedImageItem] = useState<ResourceItem | null>(null);

  // Global listener to prevent key repeat (tecla sostenida)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  // Active category object when a category is selected
  const activeCategory = useMemo(() => {
    if (!selectedCategoryId) return null;
    return TICLINE_DATA.find((c) => c.id === selectedCategoryId) || null;
  }, [selectedCategoryId]);

  // Filtered resources for the selected category (accent/tilde insensitive)
  const displayedResources = useMemo(() => {
    if (!activeCategory) return [];
    const q = normalizeText(searchQuery.trim());
    if (!q) {
      return activeCategory.items;
    }

    return activeCategory.items.filter((item) =>
      normalizeText(item.title).includes(q) ||
      (item.code && normalizeText(item.code).includes(q)) ||
      normalizeText(item.description).includes(q) ||
      normalizeText(item.typeLabel).includes(q)
    );
  }, [searchQuery, activeCategory]);

  const getSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-white" />;
      case 'Users':
        return <Users className="w-6 h-6 text-white" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-white" />;
      default:
        return <Building2 className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50/40 text-slate-800 font-sans flex flex-col antialiased">
      {/* Top Navbar */}
      <Navbar
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
        onOpenVisitorInduction={() => setIsVisitorModalOpen(true)}
      />

      {/* Show Hero only on Home view */}
      {!selectedCategoryId && <Hero />}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        {!selectedCategoryId ? (
          /* Home View: Show Category Cards only */
          <div className="space-y-6">
            <CategoryCards
              categories={TICLINE_DATA}
              activeCategoryId=""
              onSelectCategory={(id) => {
                setSelectedCategoryId(id);
                setSearchQuery('');
              }}
            />
          </div>
        ) : (
          /* Category View: Dedicated section page */
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Top Navigation & Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedCategoryId(null);
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl transition shadow-2xs cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 text-blue-600 transition-transform group-hover:-translate-x-1" />
                <span>Volver al inicio</span>
              </button>
            </div>

            {/* Category Header Banner */}
            {activeCategory && (
              <div className="bg-white rounded-2xl border border-blue-200/80 shadow-2xs overflow-hidden">
                <div className="bg-gradient-to-r from-blue-100/80 via-blue-50/60 to-white text-slate-900 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-blue-200/60">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-blue-600 text-white shadow-sm shrink-0">
                      {getSectionIcon(activeCategory.iconName)}
                    </div>
                    <div>
                      {activeCategory.badge && (
                        <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2 ${activeCategory.colorTheme.badgeBg} ${activeCategory.colorTheme.badgeText}`}>
                          {activeCategory.badge}
                        </span>
                      )}
                      <h2 className="text-2xl font-extrabold text-slate-900">
                        {activeCategory.title}
                      </h2>
                      <p className="text-xs text-slate-600 mt-1 max-w-xl font-normal">
                        {activeCategory.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 bg-white border border-blue-200/80 px-4 py-2.5 rounded-xl text-center shadow-2xs">
                    <span className="block text-2xl font-extrabold text-blue-600">
                      {activeCategory.items.length}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      Recursos disponibles
                    </span>
                  </div>
                </div>

                {/* Local Category Search */}
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Search className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.repeat) {
                          e.preventDefault();
                          e.stopPropagation();
                        }
                      }}
                      placeholder={`Buscar en ${activeCategory.title}...`}
                      className="w-full pl-9 pr-8 py-2 bg-white text-slate-800 placeholder-slate-400 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs transition"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Resources Grid */}
                {displayedResources.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6 bg-slate-50/50">
                    {displayedResources.map((item) => (
                      <ResourceCard
                        key={item.id}
                        item={item}
                        onOpenVisitorInduction={() => setIsVisitorModalOpen(true)}
                        onOpenImageModal={(selectedItem) => setSelectedImageItem(selectedItem)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center text-slate-400">
                    <SearchX className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                    <p className="font-bold text-slate-700 text-sm">
                      No se encontraron elementos con la búsqueda
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Intenta buscar con otras palabras o limpia el filtro.
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold transition"
                    >
                      Limpiar búsqueda
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <VisitorInductionModal
        isOpen={isVisitorModalOpen}
        onClose={() => setIsVisitorModalOpen(false)}
      />

      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      <ImageModal
        item={selectedImageItem}
        isOpen={!!selectedImageItem}
        onClose={() => setSelectedImageItem(null)}
      />
    </div>
  );
}
