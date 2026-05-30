/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Sprout, 
  Briefcase, 
  FileSpreadsheet, 
  TrendingUp, 
  HeartHandshake, 
  Baby, 
  AlertTriangle 
} from "lucide-react";
import { EDUCATION_CARDS, WHATSAPP_URL } from "../data";

// Match icons dynamically from Lucide database Safely
const renderIcon = (iconName: string) => {
  const iconProps = { className: "h-6 w-6 text-gold-500" };
  switch (iconName) {
    case "Sprout":
      return <Sprout {...iconProps} />;
    case "Briefcase":
      return <Briefcase {...iconProps} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet {...iconProps} />;
    case "TrendingUp":
      return <TrendingUp {...iconProps} />;
    case "HeartHandshake":
      return <HeartHandshake {...iconProps} />;
    case "Baby":
      return <Baby {...iconProps} />;
    default:
      return <AlertTriangle className="h-6 w-6 text-amber-500" />;
  }
};

export default function Educational() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-gold-600 uppercase">
            Esclarecimento de Dúvidas
          </span>
          <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Quem pode ter direito ao Salário-Maternidade?
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
            O benefício é amplo e acolhe mulheres de diferentes realidades e categorias profissionais de acordo com as normas previdenciárias.
          </p>
        </div>

        {/* 6 Category Cards + INSS Warnings */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {EDUCATION_CARDS.map((card, idx) => {
            const isLast = idx === EDUCATION_CARDS.length - 1;
            return (
              <div
                key={idx}
                className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 ${
                  isLast 
                    ? "sm:col-span-2 lg:col-span-3 border-amber-200 bg-amber-50/20 shadow-sm" 
                    : "border-slate-150 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-gold-300/40"
                }`}
              >
                <div>
                  {/* Category icon header */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    isLast ? "bg-amber-100" : "bg-white border border-slate-100 shadow-sm"
                  }`}>
                    {renderIcon(card.iconName)}
                  </div>

                  {/* Title and details */}
                  <h3 className="font-display text-base font-extrabold text-navy-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Micro CTA label for separate cards */}
                {!isLast && (
                  <div className="mt-5 pt-3 border-t border-slate-150/40">
                    <span className="text-[10px] font-bold text-gold-600 uppercase tracking-wider block">
                      Requer análise de tempo →
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom explanation copy with CTA */}
        <div className="mt-12 text-center max-w-lg mx-auto space-y-4">
          <p className="text-xs sm:text-sm italic text-slate-500">
            &ldquo;O direito ao benefício depende da situação de cada mãe e da documentação apresentada.&rdquo;
          </p>
          <div className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gold-300 bg-gold-50 px-5 py-2.5 text-xs font-bold text-gold-705 hover:bg-gold-100 transition-colors"
            >
              Consultar documentação necessária
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
