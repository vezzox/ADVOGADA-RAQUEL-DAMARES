/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { WHATSAPP_URL } from "../data";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 2.5 seconds to avoid immediate pop-up jar
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    // Show text tooltip after 5 seconds to invite action
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Dynamic Invitation Tooltip */}
      {showTooltip && (
        <div className="animate-fade-in relative flex items-center gap-1 bg-white border border-emerald-100 rounded-2xl py-2.5 px-4 shadow-xl max-w-[240px] text-left">
          <button 
            onClick={handleCloseTooltip}
            className="absolute -top-1.5 -left-1.5 p-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 border border-slate-200 transition"
            title="Fechar"
          >
            <X className="h-3 w-3" />
          </button>
          
          <div className="space-y-0.5">
            <span className="text-[9px] font-extrabold text-emerald-600 block flex items-center gap-1 uppercase tracking-wider">
              <Sparkles className="h-3 w-3 animate-pulse" /> Atendimento Online
            </span>
            <p className="text-[11px] font-sans font-medium text-slate-700 leading-tight">
              Olá! Vamos descobrir se você tem direito ao Salário-Maternidade?
            </p>
          </div>
        </div>
      )}

      {/* Floating pulsing button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-115 active:scale-95 transition-all duration-300 group"
        title="Falar no WhatsApp"
      >
        {/* Double pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="h-7 w-7 text-white fill-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
}
