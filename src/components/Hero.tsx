/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, ArrowRight, MessageCircle, Shield } from "lucide-react";
import { WHATSAPP_URL } from "../data";

export default function Hero() {
  const handleScrollToQuiz = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const quizElem = document.getElementById("diagnostico-quiz");
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white py-12 md:py-20 lg:py-24">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gold-100/15),theme(colors.white))]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Text and Copy elements (Left side on big screens) */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            {/* OAB Status badge */}
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-navy-900/5 px-3 py-1 font-sans text-[11px] font-semibold text-navy-800 backdrop-blur-sm border border-navy-100">
              <Shield className="h-3.5 w-3.5 text-gold-500 fill-gold-500/10" />
              <span>Atendimento Digital para todo o Brasil</span>
            </div>

            {/* Core Headline */}
            <h1 className="font-display text-3.5xl font-extrabold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Teve filho nos últimos <span className="text-gold-500 underline decoration-gold-300 decoration-wavy underline-offset-6">5 anos</span>? Você pode ter direito ao Salário-Maternidade.
            </h1>

            {/* Subheadline description */}
            <p className="font-sans text-base leading-relaxed text-slate-600 sm:text-lg">
              Mesmo sem carteira assinada, muitas mães conseguem receber o benefício do INSS. Faça uma análise gratuita e descubra se você tem direito.
            </p>

            {/* High Impact Calls to Action (visible immediately) */}
            <div className="flex flex-col gap-3.5 sm:flex-row pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 px-7 py-4.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="h-5 w-5 fill-white text-emerald-500" />
                <span>Quero descobrir se tenho direito</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </a>

              <button
                onClick={handleScrollToQuiz}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-navy-200 bg-white px-6 py-4.5 font-bold text-navy-800 hover:bg-navy-50/50 hover:border-navy-300 transition-colors"
              >
                <span>Simular Direito no Site</span>
              </button>
            </div>

            {/* Authority Microtext features - clean and visual */}
            <div className="grid grid-cols-3 gap-1 pt-4 border-t border-slate-150 max-w-lg">
              <div className="flex items-center gap-1.5 text-slate-700">
                <Check className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold">Resposta rápida</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Check className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold">Atendimento humano</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Check className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold">Sem compromisso</span>
              </div>
            </div>
          </div>

          {/* Large Hero Image of the Specialist (Right side) */}
          <div className="relative lg:col-span-5 flex justify-center">
            {/* Visual Backdrops / Glowing elements */}
            <div className="absolute -bottom-8 left-12 right-12 top-12 -z-10 rounded-full bg-gold-200/20 blur-3xl" />
            
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-none w-full">
              {/* Gold frame decorations */}
              <div className="absolute bottom-0 left-0 right-0 h-[80%] rounded-3xl bg-gradient-to-b from-navy-700 to-navy-950 p-[1px]">
                <div className="h-full w-full rounded-3xl bg-navy-900/95" />
              </div>

              {/* Specialist Main Photo */}
              <img
                src="https://i.imgur.com/dLb92Gz.png"
                alt="Dra. Raquel Damares"
                referrerPolicy="no-referrer"
                className="relative z-10 mx-auto aspect-[11/14] w-[90%] md:w-[85%] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(15,23,30,0.45)] transform hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Interactive badge over photo */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur-md border border-gold-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400">
                  <span className="font-display font-extrabold text-navy-900 text-sm">OAB</span>
                </div>
                <div>
                  <h4 className="font-display text-xs font-extrabold text-navy-950">Dra. Raquel Damares</h4>
                  <p className="font-sans text-[10px] text-slate-500 leading-tight">Advocacia de Proteção às Mães</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
