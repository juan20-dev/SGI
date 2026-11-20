import React from 'react';
import { Building2, Users, Wrench } from 'lucide-react';
import { CategorySection } from '../data/ticlineData';

interface CategoryCardsProps {
  categories: CategorySection[];
  activeCategoryId: string;
  onSelectCategory: (id: 'interno' | 'visitantes' | 'contratistas') => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      {categories.map((cat) => {
        const isActive = activeCategoryId === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`category-card group text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer bg-white shadow-2xs hover:shadow-md border-slate-200 hover:border-blue-400 ${
              isActive ? 'border-blue-600 ring-2 ring-blue-500/20' : ''
            }`}
          >
            <div className="flex items-start gap-3.5">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-blue-50 text-blue-600 border border-blue-100'
                }`}
              >
                {getIcon(cat.iconName)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                  <h3
                    className={`text-sm sm:text-base font-extrabold tracking-tight ${
                      isActive ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-600'
                    } transition-colors`}
                  >
                    {cat.title}
                  </h3>
                  {cat.badge && (
                    <span
                      className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${cat.colorTheme.badgeBg} ${cat.colorTheme.badgeText} shrink-0`}
                    >
                      {cat.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 leading-normal font-normal">
                  {cat.subtitle}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
