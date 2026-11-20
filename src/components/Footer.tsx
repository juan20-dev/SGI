import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100/80 text-slate-600 text-xs py-8 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-6 border-b border-slate-200 text-center">
          <img
            src="/ticline-logo.svg"
            alt="TICLINE EVOLUCIÓN Logo"
            className="h-10 w-auto object-contain shrink-0"
          />
          <div className="text-center sm:text-left">
            <p className="font-bold text-slate-900 text-sm">
              TICLINE S.A.S. - Sistema de Gestión Integral
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Plataforma corporativa de redirección, documentación y acceso rápido
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-slate-500 text-[11px] text-center">
          <p>© {year} TICLINE. Todos los derechos reservados.</p>
          <span className="hidden sm:inline">•</span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="hover:text-slate-800 transition cursor-default">
              Seguridad y Salud en el Trabajo
            </span>
            <span>•</span>
            <span className="hover:text-slate-800 transition cursor-default">
              Comité de Convivencia Laboral
            </span>
            <span>•</span>
            <span className="hover:text-slate-800 transition cursor-default">
              Gestión Ambiental y Calidad
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
