/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, AlertCircle } from "lucide-react";
import { RIGHT_EVEN_IF_CARDS, WHATSAPP_URL } from "../data";

export default function RightEvenIf() {
  return (
    <section className="bg-navy-950 py-16 md:py-24 text-white relative overflow-hidden">
      {/* Decorative premium elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl -z-1" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-navy-500/20 blur-3xl -z-1" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-gold-400 uppercase">
            Sem restrições bobas
          </span>
          <h2 className="font-display text-2.5xl font-extrabold tracking-tight sm:text-4xl text-white">
            Você pode ter direito ao Salário-Maternidade mesmo se...
          </h2>
          <p className="text-sm sm:text-base text-navy-200 leading-relaxed">
            Muitas mães deixam de receber esse benefício IMPORTANTE por acreditar que não preenchem critérios formais ou que o processo é exclusivo para empregadas registradas.
          </p>
        </div>

        {/* Checked Grid elements */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {RIGHT_EVEN_IF_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-navy-900 border border-navy-800 p-5 flex items-start gap-3 hover:border-gold-400/40 hover:bg-navy-900/80 transition-all duration-300"
            >
              <div className="p-1 rounded-full bg-gold-400/10 text-gold-400 mt-0.5">
                <CheckCircle2 className="h-4.5 w-4.5" />
              </div>
              <p className="font-sans text-sm font-semibold text-slate-100 italic pr-2">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Final contextual notice */}
        <div className="mt-12 max-w-2xl mx-auto bg-navy-900/50 rounded-2xl p-5 border border-navy-800/80 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gold-400">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider">Aviso importante</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xl mx-auto">
            Cada caso possui suas particularidades legais que garantem a manutenção de direitos. A lei previdenciária ampara mães mesmo após meses de desligamento.
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-400 text-navy-950 px-6 py-3 font-bold text-xs hover:bg-gold-350 active:scale-95 transition-all shadow-md"
            >
              Consultar Minha Situação
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
