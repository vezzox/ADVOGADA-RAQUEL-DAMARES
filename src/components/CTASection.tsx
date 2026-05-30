/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, ArrowUpRight, HelpCircle, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "../data";

export function CTAIntermediario() {
  return (
    <section className="bg-gradient-to-r from-navy-900 to-navy-950 py-16 text-white text-center relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold-400">
          Consulta gratuita e sem burocracia
        </span>
        
        <h2 className="font-display text-2.5xl font-extrabold tracking-tight sm:text-4xl">
          Descubra se você possui direito ao benefício.
        </h2>
        
        <p className="font-sans text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Uma simples análise gratuita de poucos minutos pelo WhatsApp com a Dra. Raquel pode esclarecer todas as suas dúvidas.
        </p>

        <div className="pt-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm px-8 py-4.5 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="h-5 w-5 fill-white text-emerald-500" />
            <span>Falar com a Dra. Raquel</span>
            <ArrowUpRight className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function CTAFinal() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="rounded-3xl bg-slate-50 border border-slate-150 p-8 sm:p-12 relative overflow-hidden shadow-xl shadow-navy-100/10">
          {/* Top subtle golden crown or visual */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400" />
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-600">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-navy-900 leading-tight">
              Você pode estar deixando um benefício importante sem saber.
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
              Muitas leis amparam as mães sob condições variadas, mas o prazo para requerer o benefício é limitado. Não corra o risco de ver seu direito expirar.
            </p>

            <blockquote className="font-display font-bold text-navy-800 text-base sm:text-lg italic bg-white/70 py-4 px-6 rounded-2xl border border-slate-100 uppercase tracking-tight">
              &ldquo;Converse agora com a Dra. Raquel Damares e descubra se possui direito ao Salário-Maternidade.&rdquo;
            </blockquote>

            <div className="pt-4 flex flex-col items-center space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm px-8 py-4.5 shadow-lg shadow-emerald-500/25 transition-all duration-300 animate-bounce-subtle"
              >
                <MessageCircle className="h-5 w-5 fill-white text-emerald-500" />
                <span>Quero minha análise gratuita</span>
              </a>
              
              <span className="text-[11px] font-sans text-slate-400">
                ✔ Resposta no mesmo dia • ✔ Sigilo 100% garantido • ✔ OAB/TO
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
