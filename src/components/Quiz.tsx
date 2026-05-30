/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  MessageCircle, 
  HelpCircle, 
  ArrowRight,
  RefreshCw,
  Baby,
  Sparkles
} from "lucide-react";
import { QUIZ_QUESTIONS, WHATSAPP_URL } from "../data";

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, { label: string; points: number; value: string }>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleOptionSelect = (questionId: string, optionLabel: string, optionPoints: number, optionValue: string) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: { label: optionLabel, points: optionPoints, value: optionValue }
    };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate diagnosis result based on points
  const getDiagnosis = () => {
    let totalPoints = 0;
    for (const key in answers) {
      const answerVal = answers[key];
      if (answerVal) {
        totalPoints += answerVal.points;
      }
    }
    const maxPoints = QUIZ_QUESTIONS.length * 10;
    const ratio = totalPoints / maxPoints;

    // Check if the user selected child > 5 years, which severely impacts rights due to statute of limitations (prescrição de 5 anos)
    const childAgeAns = answers["child_age"]?.value;
    const isOver5Years = childAgeAns === "mais_5_anos";

    if (isOver5Years) {
      return {
        status: "Prazo Excedido",
        color: "bg-amber-50 text-amber-800 border-amber-200",
        percentage: 15,
        heading: "Atenção ao prazo de 5 anos",
        description: "O prazo máximo legal para pedir o benefício é de 5 anos a contar do nascimento. Como seu filho já completou esse tempo, a solicitação tradicional pode ser difícil, mas o INSS possui exceções. Recomenda-se uma análise jurídica personalizada para avaliar seu caso."
      };
    }

    if (ratio >= 0.8) {
      return {
        status: "Altíssima Probabilidade",
        color: "bg-emerald-50 text-emerald-800 border-emerald-200",
        percentage: 95,
        heading: "Excelente notícia!",
        description: "Seu perfil atende aos principais requisitos exigidos pela Previdência Social para a concessão do Salário-Maternidade, mesmo se você estiver desempregada ou for trabalhadora autônoma/rural. Garanta seu benefício passando pela análise jurídica agora mesmo."
      };
    } else if (ratio >= 0.5) {
      return {
        status: "Média/Alta Probabilidade",
        color: "bg-indigo-50 text-indigo-800 border-indigo-200",
        percentage: 75,
        heading: "Seu caso tem grandes chances!",
        description: "Você possui histórico de trabalho ou contribuição e enquadramento temporal válido. Precisamos apenas conferir suas datas de carência e documentos específicos para liberar a entrada no benefício com segurança."
      };
    } else {
      return {
        status: "Análise Recomendada",
        color: "bg-slate-50 text-slate-800 border-slate-200",
        percentage: 50,
        heading: "Ainda existem caminhos!",
        description: "A legislação do INSS possui diversas saídas jurídicas (como o período de graça que mantém a qualidade de segurada por muitos meses, ou acúmulo de tempo rural). Uma análise manual detalhada pela Dra. Raquel é essencial para o seu caso."
      };
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progressRatio = ((currentStep) / QUIZ_QUESTIONS.length) * 100;

  // Build a highly persuasive personalized WhatsApp link
  const getWhatsAppLink = () => {
    const diagnosis = getDiagnosis();
    const ageText = answers["child_age"]?.label || "Não informado";
    const workText = answers["work_status"]?.label || "Não informado";
    const inssText = answers["inss_contribs"]?.label || "Não informado";
    const appliedText = answers["already_applied"]?.label || "Não informado";

    const text = `Olá Dra. Raquel Damares! Acabei de realizar a simulação automática do meu Salário-Maternidade e obtive o resultado: *${diagnosis.status}* (${diagnosis.percentage}% de compatibilidade).\n\n*Aqui estão os meus dados para análise gratuita:*\n\n1. *Situação de Nascimento/Gravidez:* ${ageText}\n2. *Situação Profissional:* ${workText}\n3. *Contribuição INSS:* ${inssText}\n4. *Pedido Anterior:* ${appliedText}\n\nGostaria de agendar minha análise de caso detalhada sem compromisso!`;
    
    return `https://api.whatsapp.com/send?phone=5563992145617&text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-navy-100 bg-white shadow-xl shadow-navy-100/30 overflow-hidden" id="diagnostico-quiz">
      {/* Header and branding */}
      <div className="bg-navy-900 px-6 py-5 text-white">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gold-400 text-navy-900">
            <Baby className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] font-semibold text-gold-300 tracking-widest uppercase block">Análise Especializada</span>
            <h3 className="font-display font-bold text-lg leading-tight">Simulador de Salário-Maternidade</h3>
          </div>
        </div>
      </div>

      {!isCompleted ? (
        <div className="p-6">
          {/* Progress bar */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="h-2 flex-1 rounded-full bg-slate-100 overflow-hidden">
              <div 
                className="h-full bg-gold-400 transition-all duration-300"
                style={{ width: `${progressRatio}%` }}
              />
            </div>
            <span className="font-mono text-xs font-semibold text-slate-400">
              Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
          </div>

          {/* Animated Question block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-start gap-2.5">
                <HelpCircle className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                <h4 className="font-display text-base font-bold text-navy-900 leading-snug sm:text-lg">
                  {currentQuestion.text}
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id]?.label === option.label;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(currentQuestion.id, option.label, option.points, option.value)}
                      className={`w-full text-left rounded-2xl p-4 border text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                        isSelected 
                          ? "border-navy-600 bg-navy-50/50 text-navy-900 shadow-sm" 
                          : "border-slate-200 bg-white hover:border-navy-200 hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span className="leading-normal pr-4">{option.label}</span>
                      <div className={`w-5 h-5 shrink-0 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isSelected ? "border-navy-600 bg-navy-600 text-white" : "border-slate-300 group-hover:border-navy-300"
                      }`}>
                        {isSelected && <Check className="h-3 w-3 inline" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Footer */}
          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                currentStep === 0 
                  ? "text-slate-300 cursor-not-allowed" 
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <ChevronLeft className="h-4 w-4" /> Voltar
            </button>
            <span className="text-[11px] text-slate-400 italic">
              *Análise confidencial de acordo com a OAB
            </span>
          </div>
        </div>
      ) : (
        <div className="p-6">
          {/* Result Block */}
          {(() => {
            const diag = getDiagnosis();
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className={`rounded-2xl border p-5 ${diag.color} flex flex-col items-center text-center space-y-3`}>
                  <div className="relative inline-flex items-center justify-center">
                    {/* Visual Meter Circular Indicator */}
                    <div className="w-20 h-20 rounded-full border-4 border-navy-100 flex items-center justify-center bg-white relative">
                      <span className="font-display font-extrabold text-2xl text-navy-900">{diag.percentage}%</span>
                      <Sparkles className="absolute -top-1.5 -right-1.5 h-5 w-5 text-gold-400 animate-pulse" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider block opacity-75">Compatibilidade</span>
                    <strong className="text-xl font-display font-extrabold">{diag.status}</strong>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-display font-bold text-navy-900 text-base leading-snug">
                    {diag.heading}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {diag.description}
                  </p>
                  <p className="text-xs text-slate-500 italic bg-amber-50/50 rounded-xl p-3 border border-amber-100/50">
                    💡 <strong>O que fazer agora?</strong> Como o INSS possui regulamentos rigorosos de carência e datas, falar diretamente com a especialista é o caminho mais seguro para não cometer erros na documentação judicial ou administrativa.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 text-white rounded-2xl py-4 px-4 font-bold text-sm hover:bg-emerald-600 transition-all duration-300 shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2.5 animate-bounce-subtle"
                  >
                    <MessageCircle className="h-5 w-5 fill-white text-emerald-500" />
                    <span>Enviar Resumo para a Dra. Raquel por WhatsApp</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 text-xs text-slate-500 font-semibold hover:text-navy-600 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="h-3 w-3" /> Reiniciar Simulação
                  </button>
                </div>
              </motion.div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
