import React, { useState } from 'react';
import {
  ExternalLink,
  Presentation,
  FormInput,
  Image as ImageIcon,
  PhoneCall,
  BookOpen,
  Clock,
  Video,
  FileText,
  Copy,
  Check,
  AlertTriangle
} from 'lucide-react';
import { ResourceItem } from '../data/ticlineData';

interface ResourceCardProps {
  item: ResourceItem;
  onOpenVisitorInduction?: () => void;
  onOpenImageModal?: (item: ResourceItem) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  item,
  onOpenVisitorInduction,
  onOpenImageModal
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (!item.url) return;
    navigator.clipboard.writeText(item.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = () => {
    switch (item.type) {
      case 'form':
        return <FormInput className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'sharepoint':
        return <Presentation className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'image':
        return <ImageIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'emergency':
        return <PhoneCall className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'info':
        return <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'video':
        return <Video className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'document':
      default:
        return <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between gap-4 h-full group">
      {/* Content Header & Body */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
            {getIcon()}
          </div>
          {item.code && (
            <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
              {item.code}
            </span>
          )}
        </div>

        <div>
          <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider block mb-1">
            {item.typeLabel}
          </span>
          {item.status === 'active' && item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug hover:underline block"
            >
              {item.title}
            </a>
          ) : (
            <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
              {item.title}
            </h4>
          )}
          <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer Action buttons & status badges */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        {item.url && item.status === 'active' && (
          <button
            onClick={handleCopyLink}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition cursor-pointer"
            title="Copiar enlace"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}

        {item.status === 'active' && item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs hover:shadow ml-auto"
          >
            <span>{item.type === 'image' ? 'Ver Imagen' : 'Abrir Enlace'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-xs font-semibold shadow-2xs ml-auto">
            {item.type === 'video' ? (
              <Clock className="w-3.5 h-3.5 text-amber-600" />
            ) : (
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            )}
            <span>{item.statusBadge || 'Pendiente por cargar inducción'}</span>
          </div>
        )}
      </div>
    </div>
  );
};
