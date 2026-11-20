import React from 'react';
import { Layers } from 'lucide-react';

interface HeroProps {
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  totalResourcesCount?: number;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100/70 via-blue-50/50 to-blue-50/20 text-slate-900 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-blue-200/70 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-4">
          <img
            src="/ticline-logo.svg"
            alt="TICLINE EVOLUCIÓN Logo"
            className="h-14 sm:h-20 w-auto object-contain drop-shadow-2xs"
          />
        </div>

        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200/90 mb-4 shadow-2xs">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          Sistema de Gestión Integral (SGI)
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 leading-tight">
          BIENVENIDOS AL SGI
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Selecciona tu perfil o tipo de acceso para ver la documentación y formularios correspondientes.
        </p>
      </div>
    </section>
  );
};
