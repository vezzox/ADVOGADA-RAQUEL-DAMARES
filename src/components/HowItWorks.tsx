/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, Headphones, CheckCircle, ClipboardList } from "lucide-react";
import { HOW_IT_WORKS_STEPS, WHATSAPP_URL } from "../data";

const stepIcons = [
  <MessageCircle key="1" className="h-5 w-5 text-gold-400" />,
  <ClipboardList key="2" className="h-5 w-5 text-gold-400" />,
  <Headphones key="3" className="h-5 w-5 text-gold-400" />,
  <CheckCircle key="4" className="h-5 w-5 text-gold-400" />
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold tracking-widest text-gold-600 uppercase">
            Sem Burocracias Chatas
          </span>
          <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Como funciona a análise do seu caso?
          </h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto">
            Processo rápido, digital e transparente em apenas 4 etapas descomplicadas para garantir o seu amparo.
          </p>
        </div>

        {/* Step-by-Step roadmap track */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line on desktop */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 border-t border-dashed border-slate-250 -translate-y-1/2 -z-1 hidden lg:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-150 bg-white p-6 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow group"
              >
                {/* Step badge overlay */}
                <span className="absolute -top-3.5 left-6 bg-navy-900 text-gold-400 text-[10px] font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Etapa 0{step.step}
                </span>

                {/* Animated Icon circle */}
                <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform duration-300">
                  {stepIcons[idx]}
                </div>

                {/* Info titles */}
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-extrabold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sm font-semibold text-navy-800 bg-white px-6 py-3.5 rounded-full border border-slate-150 w-fit mx-auto shadow-sm tracking-wide">
            ✨ Atendimento simples, rápido e sem burocracia.
          </p>
          <div className="mt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold text-gold-600 underline hover:text-gold-700 transition"
            >
              Iniciar primeira etapa agora mesmo pelo WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
