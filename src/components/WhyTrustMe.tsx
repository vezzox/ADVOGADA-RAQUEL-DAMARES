/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { WHY_TRUST_CARDS } from "../data";

export default function WhyTrustMe() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Photos of authority (Left on desktop) */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div className="relative max-w-xs md:max-w-sm w-full">
              {/* Premium shadow backdrop frame */}
              <div className="absolute top-4 left-4 right-4 bottom-4 -z-10 rounded-full bg-gold-200/40 blur-3xl" />
              
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-navy-800 to-navy-950 shadow-xl overflow-hidden">
                <img
                  src="https://i.imgur.com/knKLOu0.png"
                  alt="Dra. Raquel Damares em destaque"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Copywriting grid (Right on desktop) */}
          <div className="flex flex-col space-y-6 lg:col-span-7">
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-widest text-gold-600 uppercase flex items-center gap-1">
                <ShieldCheck className="h-4.5 w-4.5 text-navy-800" /> Segurança Integrada
              </span>
              <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Por que você deve confiar o seu caso a mim?
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Sabemos que a gestação e o pós-parto são momentos delicados. Por isso, ofereço um suporte que preza pelo seu bem-estar, conduzido com integridade, técnica e dedicação.
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
              {WHY_TRUST_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-150 bg-white p-4.5 flex items-start gap-3 hover:border-gold-300/50 hover:shadow-sm transition-all"
                >
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <strong className="font-sans text-xs sm:text-sm text-slate-800 font-bold italic leading-tight">
                    {card.title}
                  </strong>
                </div>
              ))}
            </div>

            {/* Reassurance text */}
            <div className="pt-2">
              <p className="font-sans text-[11px] text-slate-400 italic">
                *O segredo profissional é resguardado de acordo com as normas da OAB.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
