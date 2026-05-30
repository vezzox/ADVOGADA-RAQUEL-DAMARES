/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelpCircle } from "lucide-react";
import { IDENTIFICATION_CARDS, WHATSAPP_URL } from "../data";

export default function Identification() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title metadata */}
        <span className="text-[11px] font-bold tracking-widest text-gold-600 uppercase block mb-2">
          Faça o teste rápido
        </span>
        <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          Você se identifica com alguma dessas situações?
        </h2>
        <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto">
          Muitas vezes as mães têm direito ao benefício e o perdem por mera falta de informação. Veja se você se enquadra abaixo.
        </p>

        {/* Dynamic Card Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6 justify-center">
          {IDENTIFICATION_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-slate-150 p-5 bg-slate-50/50 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-100/20 hover:border-gold-300/60 hover:bg-white cursor-pointer group ${
                idx === IDENTIFICATION_CARDS.length - 1 
                  ? "col-span-2 sm:col-span-1 border-rose-100 bg-rose-50/10 hover:border-rose-300 hover:bg-white" 
                  : ""
              }`}
            >
              {/* Visual emoji wrapper */}
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>

              {/* Title label */}
              <h4 className="font-display text-sm font-bold text-navy-900 leading-snug group-hover:text-gold-600 transition-colors">
                {card.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Closing microcopy and CTA redirection link */}
        <div className="mt-10 max-w-2xl mx-auto rounded-2xl bg-navy-50/70 py-4 px-6 border border-navy-100/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="h-5 w-5 text-gold-500 shrink-0" />
            <p className="font-sans text-sm font-medium text-navy-950 leading-snug">
              Se você se identificou com alguma dessas situações, vale a pena analisar seu caso.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-extrabold text-white bg-navy-900 px-4 py-2.5 rounded-xl hover:bg-gold-500 transition-all shadow-md active:scale-95"
          >
            Quero uma Análise Gratis
          </a>
        </div>

      </div>
    </section>
  );
}
