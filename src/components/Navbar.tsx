import React from 'react';

interface NavbarProps {
  onOpenEmergency?: () => void;
  onOpenVisitorInduction?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="bg-blue-50/90 text-slate-900 border-b border-blue-200/80 sticky top-0 z-40 shadow-2xs backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center">
        {/* Brand identity */}
        <div className="flex items-center justify-center">
          <span className="text-sm bg-blue-600 text-white font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xs">
            SGI
          </span>
        </div>
      </div>
    </header>
  );
};
