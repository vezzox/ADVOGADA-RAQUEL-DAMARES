/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Identification from "./components/Identification";
import RightEvenIf from "./components/RightEvenIf";
import Quiz from "./components/Quiz";
import AboutMe from "./components/AboutMe";
import Educational from "./components/Educational";
import HowItWorks from "./components/HowItWorks";
import { CTAIntermediario, CTAFinal } from "./components/CTASection";
import SocialProof from "./components/SocialProof";
import WhyTrustMe from "./components/WhyTrustMe";
import FAQ from "./components/FAQ";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

import { Sparkles, CheckCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-gold-100 selection:text-navy-950 font-sans">
      
      {/* 1. Global Navigation Header */}
      <Header />

      {/* 2. Hero folds - First Fold visual landing */}
      <Hero />

      {/* 3. Identification grids - "Você se identifica com..." */}
      <Identification />

      {/* 4. "Você pode ter direito mesmo se..." highlights */}
      <RightEvenIf />

      {/* 5. IMMERSIVE COMPONENT FOR INTERACTIVE DIALOGUE / QUIZ SECTION */}
      <section className="bg-gradient-to-b from-white via-navy-50/40 to-slate-50 py-16 md:py-24" id="simulador">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/10 px-3 py-1 text-xs font-semibold text-gold-700">
              <Sparkles className="h-4.5 w-4.5 text-gold-500 animate-spin-slow" />
              <span>Simulador Inteligente Rápido</span>
            </span>
            <h2 className="font-display text-2.5xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Descubra em menos de 1 minuto se você tem direito ao Salário-Maternidade
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              Responda a 4 perguntas simples para fazer uma pré-avaliação imediata da viabilidade do seu benefício junto ao INSS.
            </p>
          </div>

          {/* Interactive Core Wizard Applet */}
          <div>
            <Quiz />
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-center max-w-md mx-auto">
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>Diagnóstico automatizado prévio sem compromisso</span>
            </div>
            <p className="text-[10px] text-slate-400 italic">
              Não salvamos ou divulgamos seus dados. De acordo com a Lei Geral de Proteção de Dados (LGPD) e sigilo ético previdenciário.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Educational Grid Category Block */}
      <Educational />

      {/* 7. AboutMe Bio Block */}
      <AboutMe />

      {/* 8. Step layout - How It Works roadmap */}
      <HowItWorks />

      {/* 9. Intermediary High-Tension Call to Action */}
      <CTAIntermediario />

      {/* 10. Social Proof Block with real case outcomes */}
      <SocialProof />

      {/* 11. "Why Trust Me" core authority highlights */}
      <WhyTrustMe />

      {/* 12. Interactive Accordion FAQ */}
      <FAQ />

      {/* 13. Reassuring final bottom hero segment Card */}
      <CTAFinal />

      {/* 14. Detailed contacts & legal footer */}
      <Footer />

      {/* 15. Persistent Conversions Accelerator WhatsApp bubble */}
      <FloatingWhatsApp />

    </div>
  );
}
