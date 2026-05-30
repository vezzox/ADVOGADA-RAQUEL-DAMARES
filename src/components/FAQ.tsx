/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, WHATSAPP_URL } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24" id="perguntas-frequentes">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title content */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold tracking-widest text-gold-600 uppercase">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-500">
            Veja as respostas para as principais dúvidas sobre o Salário-Maternidade e consulte como a Dra. Raquel pode ajudar.
          </p>
        </div>

        {/* Dynamic Accordion list */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-150 overflow-hidden hover:border-gold-300 transition-all shadow-sm"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-5 transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="font-display text-sm sm:text-base font-extrabold text-navy-900 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-gold-400 text-navy-900" : ""
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Expanded Answer block */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <div className="p-5 font-sans text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Support banner */}
        <div className="mt-12 text-center rounded-2xl bg-white border border-slate-200 p-6 shadow-sm max-w-xl mx-auto space-y-4">
          <p className="font-sans text-xs sm:text-sm text-slate-600">
            Ficou com alguma outra dúvida sobre o seu caso específico ou documentação?
          </p>
          <div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-5 py-3 transition-colors shadow-sm"
            >
              <MessageCircle className="h-4 w-4 fill-white text-emerald-500" />
              <span>Fazer pergunta para a Dra. Raquel</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
