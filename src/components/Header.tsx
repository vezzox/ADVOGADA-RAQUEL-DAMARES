/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageCircle, ShieldCheck } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Name - Female focus and modern typography */}
        <div className="flex flex-col">
          <span className="font-display text-lg font-bold tracking-tight text-navy-800 sm:text-xl">
            Raquel Damares
          </span>
          <span className="flex items-center gap-1 font-sans text-[10px] font-medium tracking-wider text-gold-600 uppercase">
            <ShieldCheck className="h-3 w-3" /> Advocacia Previdenciária
          </span>
        </div>

        {/* Social / Direct Channels */}
        <div className="flex items-center gap-2 sm:gap-4_">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            title="Siga no Instagram"
          >
            <Instagram className="h-4 w-4 text-pink-600" />
            <span className="hidden sm:inline">@advraquel.damares</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600 transition-all duration-300 transform active:scale-95"
          >
            <MessageCircle className="h-4 w-4 fill-white text-emerald-500" />
            <span>Fale Comigo</span>
          </a>
        </div>
      </div>
    </header>
  );
}
