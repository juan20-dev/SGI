import React from 'react';
import { X, PhoneCall, MapPin, ExternalLink, ShieldAlert } from 'lucide-react';
import { EMERGENCY_NUMBERS } from '../data/ticlineData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-red-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center border border-red-400/30">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                Líneas y Directorio de Emergencia
              </h3>
              <p className="text-xs text-red-200">
                Atención inmediata e información de contacto por sede
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-red-200 hover:text-white p-1 rounded-lg hover:bg-red-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-900 text-xs flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">En caso de urgencia médica o contingencia:</p>
              <p className="text-[11px] text-red-800">
                Contacta de inmediato a un brigadista en la sede e informa a la línea única 123.
              </p>
            </div>
          </div>

          {/* Sede Medellín */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" /> Sede Medellín
              </h4>
              <a
                href="https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQBOi6veiB2XTJomUrrXOW0vARezWW_bN5xq6V8W8bCLTIA?e=1IGFLX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline font-semibold"
              >
                <span>Ver afiche oficial SharePoint</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {EMERGENCY_NUMBERS.medellin.map((num, i) => (
                <div
                  key={i}
                  className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between"
                >
                  <span className="text-slate-700 font-medium">{num.label}</span>
                  <a
                    href={`tel:${num.number.replace(/[^0-9]/g, '')}`}
                    className="font-bold text-blue-700 hover:underline"
                  >
                    {num.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sede Pereira */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" /> Sede Pereira
              </h4>
              <a
                href="https://ticlinevolucion.sharepoint.com/:i:/s/Administracin/IQCTFuKZ5VSBR5s0MWSZ9iyAAe5EHgA7u8QjYn3f5bSNxr4?e=KoNbYR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline font-semibold"
              >
                <span>Ver afiche oficial SharePoint</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {EMERGENCY_NUMBERS.pereira.map((num, i) => (
                <div
                  key={i}
                  className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between"
                >
                  <span className="text-slate-700 font-medium">{num.label}</span>
                  <a
                    href={`tel:${num.number.replace(/[^0-9]/g, '')}`}
                    className="font-bold text-blue-700 hover:underline"
                  >
                    {num.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
