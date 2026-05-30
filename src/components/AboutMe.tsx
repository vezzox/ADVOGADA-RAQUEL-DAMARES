/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Heart, ShieldAlert, Award } from "lucide-react";
import { WHATSAPP_URL } from "../data";

export default function AboutMe() {
  const differentials = [
    "Atendimento direto comigo",
    "Linguagem simples",
    "Atendimento online para todo Brasil",
    "Análise personalizada",
    "Atendimento humanizado",
    "Especialização em Direito Previdenciário"
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24" id="sobre-dra-raquel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Large portrait image with editorial styling */}
          <div className="relative lg:col-span-5 flex justify-center">
            <div className="relative max-w-xs md:max-w-sm w-full">
              {/* Premium shadow card framing */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-gold-300 via-navy-100 to-gold-400 p-[1px] rotate-1 shadow-xl">
                <div className="h-full w-full rounded-2.5xl bg-white" />
              </div>

              {/* Bio Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-slate-200">
                <img
                  src="https://i.imgur.com/CSX1tYl.jpeg"
                  alt="Dra. Raquel Damares no escritório"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Suspended rating badge */}
              <div className="absolute -bottom-5 -right-4 bg-navy-900 text-white rounded-2xl py-2 px-4 shadow-xl border border-navy-800 flex items-center gap-2">
                <Award className="h-5 w-5 text-gold-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">OAB Tocantins</span>
                  <span className="text-xs font-bold font-display text-white">Raquel Damares</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copywriting in first-person */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase flex items-center gap-1.5">
                <Heart className="h-4.5 w-4.5 text-rose-500 fill-rose-500" /> Especialista no Cuidado de Mães
              </span>
              <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Ajudo você a conquistar o amparo que é seu por direito
              </h2>
            </div>

            {/* First-Person Copy */}
            <div className="font-sans text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
              <span className="font-semibold block text-navy-900 text-lg sm:text-xl">
                Sou Raquel Damares, advogada previdenciarista.
              </span>
              <p>
                Ajudo mulheres a garantirem seus direitos junto ao INSS, especialmente em casos de <strong>Salário-Maternidade</strong>.
              </p>
              <p>
                Muitas mães deixam de receber valores importantes simplesmente porque não sabem que possuem esse direito.
              </p>
              <p>
                Meu trabalho é analisar cada situação com atenção, orientar de forma clara e buscar a melhor solução para cada caso.
              </p>
            </div>

            {/* Key list differentials */}
            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-display text-xs font-extrabold text-navy-950 uppercase tracking-widest mb-3">
                Por que fazer sua análise comigo?
              </h4>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {differentials.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct action layout */}
            <div className="pt-2 flex">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-navy-900 text-white px-6 py-3 font-bold text-xs hover:bg-gold-500 transition-colors shadow-md active:scale-95"
              >
                Garantir Atendimento Exclusivo
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
