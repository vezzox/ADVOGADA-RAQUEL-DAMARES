/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MessageCircle, Mail, MapPin, Scale, Heart } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-900">
      
      {/* Upper footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Presentation column */}
          <div className="md:col-span-6 space-y-4">
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                Raquel Damares
              </h3>
              <p className="font-sans text-xs text-gold-400 uppercase tracking-widest font-semibold">
                Advogada Previdenciarista
              </p>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Atuação especializada na defesa de benefícios previdenciários e direitos fundamentais das mães de todo o Brasil. Atendimento acolhedor, rápido e online.
            </p>

            {/* OAB Credentials */}
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Scale className="h-4 w-4 text-gold-400 shrink-0" />
              <span>Inscrita regularmente na OAB/TO • Advocacia Especializada</span>
            </div>
          </div>

          {/* Specialization links column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gold-400">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="hover:text-gold-300 transition-colors">✔ Salário-Maternidade</li>
              <li className="hover:text-gold-300 transition-colors">✔ Salário-Maternidade Rural</li>
              <li className="hover:text-gold-300 transition-colors">✔ Benefícios junto ao INSS</li>
              <li className="hover:text-gold-300 transition-colors">✔ Direitos das Mães</li>
            </ul>
          </div>

          {/* Contact coordinates column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-gold-400">
              Canais de Contato
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-emerald-500 fill-emerald-500/10" />
                  <span>(63) 99214-5617</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-pink-500" />
                  <span>@advraquel.damares</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold-400 mt-0.5" />
                <span className="leading-tight">Atendimento 100% Online para todo o Brasil • Presencial em Tocantins</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-navy-900 text-center space-y-6">
          
          {/* MANDATORY CODE OF ETHICS DISCLAIMER */}
          <div className="max-w-2xl mx-auto rounded-xl bg-navy-900/60 p-4 border border-navy-800">
            <p className="font-sans text-[10px] sm:text-xs text-slate-400 leading-normal italic">
              <strong>AVISO LEGAL OBRIGATÓRIO:</strong> Este site possui caráter exclusivamente informativo e segue as normas do Código de Ética e Disciplina da OAB, não constituindo promessa de resultados de qualquer espécie.
            </p>
          </div>

          {/* Copyright claims */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <p>
              &copy; {currentYear} Dra. Raquel Damares. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1 bg-navy-900 px-3 py-1 rounded-full border border-navy-850">
              Desenvolvido com <Heart className="h-3 w-3 text-rose-500 fill-rose-500 animate-pulse" /> para auxiliar mães brasileiras.
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}
