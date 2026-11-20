import React, { useState } from 'react';
import {
  X,
  FileText,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  PhoneCall,
  Scale,
  Gavel,
  Users,
  Clock,
  Lock,
  Heart,
  Smile,
  AlertTriangle,
  Frown,
  UserX,
  Layers,
  Target,
  FileSpreadsheet,
  CheckSquare,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Phone,
  ImageIcon
} from 'lucide-react';
import { ResourceItem, EMERGENCY_NUMBERS } from '../data/ticlineData';

interface ImageModalProps {
  item: ResourceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ item, isOpen, onClose }) => {
  const [zoom, setZoom] = useState<number>(1);

  if (!isOpen || !item) return null;

  const isProcedimientoQueja =
    item.code === 'PROCEDIMIENTO' ||
    item.title.toLowerCase().includes('queja') ||
    item.id === 'int-4' ||
    item.title.toLowerCase().includes('acoso');

  const isEmergencyImage = item.type === 'emergency' || item.title.toLowerCase().includes('emergencia');
  const isPereira = item.code === 'PEREIRA' || item.title.toLowerCase().includes('pereira');
  const isMedellin = item.code === 'MEDELLÍN' || item.title.toLowerCase().includes('medellín') || item.title.toLowerCase().includes('medellin');

  const emergencyContacts = isPereira
    ? EMERGENCY_NUMBERS.pereira
    : isMedellin
    ? EMERGENCY_NUMBERS.medellin
    : [...EMERGENCY_NUMBERS.pereira, ...EMERGENCY_NUMBERS.medellin];

  const sharepointUrl = item.url || '';

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 w-full max-w-5xl overflow-hidden flex flex-col my-auto max-h-[95vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-3.5 sm:p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {item.typeLabel || 'Infografía / Imagen'}
                </span>
                {item.code && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {item.code}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-800/80 border border-slate-700/80 rounded-xl p-1 gap-1">
              <button
                onClick={handleZoomOut}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition"
                title="Alejar (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="px-2 py-1 text-[11px] font-mono font-bold text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition"
                title="Restablecer tamaño"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition"
                title="Acercar (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {sharepointUrl && (
              <a
                href={sharepointUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-xs"
                title="Abrir imagen original en SharePoint"
              >
                <span className="hidden sm:inline">Abrir SharePoint</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition cursor-pointer"
              title="Cerrar imagen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Main Image Body - Pure Image Viewer Canvas */}
        <div className="p-3 sm:p-6 overflow-auto flex-grow bg-slate-950 flex items-center justify-center min-h-[450px]">
          <div
            className="transition-transform duration-200 ease-out origin-center w-full max-w-4xl flex justify-center"
            style={{ transform: `scale(${zoom})` }}
          >
            {isProcedimientoQueja ? (
              /* Pure High-Resolution PNG / SVG Infographic Image Display */
              <div className="relative group w-full flex justify-center">
                <img
                  src="/procedimiento_queja_laboral.svg"
                  alt="Infografía Procedimiento Queja Laboral - Comité de Convivencia Laboral"
                  className="w-full max-w-3xl h-auto object-contain rounded-2xl shadow-2xl border border-slate-700 bg-white p-1"
                />
              </div>
            ) : isEmergencyImage ? (
              /* Emergency Direct Contact Image / Directory Viewer */
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 text-slate-900 space-y-5 max-w-2xl mx-auto w-full">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-red-600" />
                    <h4 className="font-extrabold text-slate-900 text-base">
                      Directorio de Emergencias {isPereira ? 'Sede Pereira' : isMedellin ? 'Sede Medellín' : ''}
                    </h4>
                  </div>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                    Línea 123
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {emergencyContacts.map((contact, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-200 flex items-center justify-between gap-3 transition"
                    >
                      <span className="font-semibold text-slate-800">{contact.label}</span>
                      <a
                        href={`tel:${contact.number.replace(/\D/g, '')}`}
                        className="font-mono font-bold text-blue-700 bg-white border border-blue-200 px-3 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition shadow-2xs"
                      >
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Generic Image Placeholder / Viewer */
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center space-y-4 text-white w-full max-w-xl">
                <ImageIcon className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto">{item.description}</p>
                {sharepointUrl && (
                  <a
                    href={sharepointUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition"
                  >
                    <span>Abrir Documento / Imagen en SharePoint</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-400 shrink-0">
          <span className="font-semibold text-[11px] truncate">
            {item.title} - SGI TICLINE
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition cursor-pointer"
            >
              Cerrar Imagen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

