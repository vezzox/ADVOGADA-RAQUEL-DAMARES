/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquareQuote, ShieldAlert } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Layout Content (Left on desktop) */}
          <div className="flex flex-col space-y-6 lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-gold-600 uppercase flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
              ))}
              <span className="ml-2">Compromisso Real</span>
            </span>

            <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Mais mulheres descobrindo seus direitos
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Cada atendimento representa uma oportunidade de orientar mães sobre benefícios que muitas vezes passam despercebidos.
              </p>
              
              {/* Supporting Blockquote container */}
              <div className="rounded-2xl bg-slate-50 border-l-4 border-gold-400 p-4 italic text-slate-700 relative">
                <MessageSquareQuote className="h-10 w-10 text-gold-300 opacity-20 absolute top-2 right-2 -z-1" />
                <p className="text-xs sm:text-sm">
                  &ldquo;A segurança financeira das mães nos primeiros meses de vida do bebê é um direito garantido por lei. Nosso papel é aproximar a mãe desse direito com total acolhimento.&rdquo;
                </p>
              </div>
            </div>

            {/* OAB Warning metadata */}
            <div className="flex items-start gap-2.5 rounded-xl border border-rose-100 bg-rose-50/20 p-3.5">
              <ShieldAlert className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
              <p className="text-[11px] font-sans text-slate-500 leading-tight">
                <strong>Observação:</strong> Cada caso possui características próprias de tempo e carências previdenciárias e deve ser analisado individualmente.
              </p>
            </div>
          </div>

          {/* Screenshot / Conversation Proof container (Right on desktop) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Golden layout glowing accents */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-gold-300 to-navy-200 opacity-30 blur-xl" />
              
              {/* Image Frame panel */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50">
                <img
                  src="https://i.imgur.com/mDfzjoV.jpeg"
                  alt="Prova Social - Dra. Raquel Damares"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
