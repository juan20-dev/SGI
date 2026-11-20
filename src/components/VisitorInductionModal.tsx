import React from 'react';
import {
  X,
  BookOpen,
  Info,
  Shield,
  HardHat,
  AlertOctagon,
  LogOut,
  ExternalLink
} from 'lucide-react';

interface VisitorInductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitorInductionModal: React.FC<VisitorInductionModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/ticline-logo.svg"
              alt="TICLINE EVOLUCIÓN Logo"
              className="h-8 w-auto object-contain bg-white/10 p-1 rounded-lg"
            />
            <div>
              <h3 className="font-bold text-white text-base">
                Inducción SGI – Visitantes
              </h3>
              <p className="text-xs text-slate-400">
                Sistema de Gestión Integral TICLINE
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700 leading-relaxed">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-900 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-bold flex items-center gap-1.5 mb-1 text-sm">
                  <Info className="w-4 h-4 text-emerald-600" /> ¡Bienvenido a TICLINE!
                </p>
                Como visitante en nuestras instalaciones, tu seguridad y salud son nuestra mayor prioridad. Por favor lee atentamente las siguientes pautas o visualiza el video de inducción.
              </div>
              <a
                href="https://ticlinevolucion.sharepoint.com/:v:/s/Administracin/IQC0fRJY2E7NR5mQg8YCyQavAYgcPBoVl5-7U7JmTSXruHo?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=ewcbHk"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition"
              >
                <span>Ver Video Inducción</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
              <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 mb-0.5 text-xs">
                  1. Registro e Identificación
                </h4>
                <p className="text-xs text-slate-600">
                  Debes registrarte en la recepción de la sede y portar en un lugar visible tu escarapela de visitante durante toda la permanencia. Permanece en compañía de tu anfitrión.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
              <HardHat className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 mb-0.5 text-xs">
                  2. Equipos de Protección Personal (EPP)
                </h4>
                <p className="text-xs text-slate-600">
                  Para el ingreso a centros de datos, cuartos de servidores o áreas operativas, es indispensable portar los EPP obligatorios indicados por el personal de SST.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
              <LogOut className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 mb-0.5 text-xs">
                  3. Plan de Evacuación y Emergencias
                </h4>
                <p className="text-xs text-slate-600">
                  En caso de alarma de evacuación, suspenda actividades, conserve la calma y siga las indicaciones de la Brigada de Emergencias identificada hacia el Punto de Encuentro.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
              <AlertOctagon className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 mb-0.5 text-xs">
                  4. Prohibiciones y Salud
                </h4>
                <p className="text-xs text-slate-600">
                  Está prohibido fumar dentro de las instalaciones, ingresar armas o asistir bajo los efectos de alcohol o sustancias psicoactivas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            ¿Completaste la lectura? Presenta la evaluación requerida:
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg text-xs font-medium transition"
            >
              Cerrar
            </button>
            <a
              href="https://forms.office.com/r/nWDCmVFde1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5 transition"
            >
              <span>Ir a Evaluación de Inducción</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
