// Static content and data structures for the Salário-Maternidade Landing Page

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IdentificationCard {
  icon: string;
  title: string;
  description?: string;
}

export interface RightEvenIfCard {
  title: string;
}

export interface EducatorCard {
  title: string;
  iconName: string;
  description: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface TrustItem {
  title: string;
}

export const WHATSAPP_URL = "https://api.whatsapp.com/send?l=pt_pt&phone=5563992145617";
export const INSTAGRAM_URL = "https://www.instagram.com/advraquel.damares/";

export const IDENTIFICATION_CARDS: IdentificationCard[] = [
  { icon: "👶", title: "Teve bebê nos últimos 5 anos" },
  { icon: "🤰", title: "Está grávida" },
  { icon: "👩‍🍼", title: "Adotou uma criança" },
  { icon: "🌾", title: "Trabalha ou trabalhou na zona rural" },
  { icon: "💼", title: "Trabalha por conta própria" },
  { icon: "📄", title: "Não sabe se possui direito ao benefício" },
  { icon: "❌", title: "Teve pedido negado pelo INSS" },
];

export const RIGHT_EVEN_IF_CARDS: RightEvenIfCard[] = [
  { title: "Trabalha ou trabalhou na zona rural" },
  { title: "Não possui carteira assinada" },
  { title: "É trabalhadora rural" },
  { title: "É autônoma" },
  { title: "É MEI" },
  { title: "Está desempregada" },
  { title: "Nunca solicitou o benefício" },
  { title: "Teve o benefício negado" },
];

export const EDUCATION_CARDS: EducatorCard[] = [
  { 
    title: "Trabalhadora Rural", 
    iconName: "Sprout", 
    description: "Mães que exercem atividades rurais, sejam lavradoras, pescadoras artesanais ou extrativistas." 
  },
  { 
    title: "Empregada", 
    iconName: "Briefcase", 
    description: "Trabalhadoras de empresas privadas com carteira assinada ou contratos ativos." 
  },
  { 
    title: "MEI", 
    iconName: "FileSpreadsheet", 
    description: "Microempreendedoras individuais que realizam contribuições em dia com o Simples Nacional." 
  },
  { 
    title: "Autônoma", 
    iconName: "TrendingUp", 
    description: "Profissionais liberais e prestadoras de serviço sem vínculo empregatício formal." 
  },
  { 
    title: "Contribuinte Individual", 
    iconName: "HeartHandshake", 
    description: "Mulheres que pagam o carnê do INSS por conta própria de forma opcional (facultativas) ou obrigatória." 
  },
  { 
    title: "Mãe adotante", 
    iconName: "Baby", 
    description: "Mães que adotaram recentemente crianças e precisam se dedicar aos cuidados iniciais." 
  },
  { 
    title: "⚠️ Regras gerais do INSS", 
    iconName: "AlertTriangle", 
    description: "Todas as mulheres que se enquadrem nos requisitos de carência e qualidade de segurada exigidos pelo órgão previdenciário." 
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: 1,
    title: "Clique no WhatsApp",
    description: "Você será direcionada para uma conversa direta, acolhedora e sem intermediários com a especialista.",
  },
  {
    step: 2,
    title: "Conte sua situação",
    description: "Fale de forma simples se você já teve filho, se está gestante ou se trabalhou recentemente.",
  },
  {
    step: 3,
    title: "Análise Inicial Gratuita",
    description: "Estudamos o seu histórico de contribuição e de trabalho para encontrar o seu direito.",
  },
  {
    step: 4,
    title: "Descubra seu Direito",
    description: "Te damos a resposta definitiva se você tem direito ao benefício e como fazer para recebê-lo.",
  },
];

export const WHY_TRUST_CARDS: TrustItem[] = [
  { title: "Atendimento humanizado" },
  { title: "Transparência em todo processo" },
  { title: "Especialização em benefícios do INSS" },
  { title: "Atendimento online em todo Brasil" },
  { title: "Comunicação clara" },
  { title: "Acompanhamento personalizado" },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Posso receber mesmo sem carteira assinada?",
    answer: "Sim! Muitas situações permitem o recebimento do benefício, como desempregadas dentro do período de graça, seguradas facultativas, contribuintes individuais, autônomas, MEIs e trabalhadoras rurais. É fundamental analisar o histórico de cada mãe individualmente.",
  },
  {
    question: "Sou trabalhadora rural. Tenho direito?",
    answer: "Sim! A trabalhadora rural (segurada especial) tem direito ao benefício desde que comprove a atividade no campo nos meses anteriores ao nascimento ou adoção, mesmo que nunca tenha recolhido contribuições diretamente por carnê. É necessário analisar os documentos cabíveis de cada situação.",
  },
  {
    question: "Meu pedido foi negado pelo INSS. Vale a pena tentar de novo?",
    answer: "Com certeza! É extremamente comum o INSS negar pedidos por falta de documentos corretos, erro no sistema ou análise inadequada. O seu caso pode ser minuciosamente reavaliado legalmente para reverter a decisão administrativa.",
  },
  {
    question: "Moro em outro estado. Como funciona o atendimento?",
    answer: "O INSS hoje é 100% digital através do sistema Meu INSS. Isso permite que eu realize todo o seu atendimento de forma totalmente online no conforto da sua casa, em qualquer estado do Brasil, com total rapidez, segurança e proximidade.",
  },
  {
    question: "A análise é realmente gratuita?",
    answer: "Sim! A análise inicial do seu histórico previdenciário e direito ao Salário-Maternidade é 100% gratuita e sem qualquer tipo de compromisso. O objetivo é unicamente orientar você com máxima clareza se existe um caso viável.",
  },
];

// Interactive Quiz/Diagnostic configuration to boost conversion ratios
export interface QuizQuestion {
  id: string;
  text: string;
  options: {
    label: string;
    value: string;
    points: number;
    nextQuestionId?: string | null;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "child_age",
    text: "Você teve filho(s), adotou ou está grávida?",
    options: [
      { label: "Sim, tive bebê nos últimos 5 anos", value: "pos_5_anos", points: 10 },
      { label: "Estou grávida atualmente", value: "gestante", points: 8 },
      { label: "Adotei uma criança recentemente", value: "adocao", points: 10 },
      { label: "Tive filho há mais de 5 anos", value: "mais_5_anos", points: 0 },
    ],
  },
  {
    id: "work_status",
    text: "Qual era sua situação profissional na época de nascimento/gravidez?",
    options: [
      { label: "Trabalhava com carteira assinada", value: "clt", points: 10 },
      { label: "Trabalhava por conta própria / Autônoma / MEI", value: "autonoma", points: 9 },
      { label: "Trabalhava na zona rural (sítio, lavoura, campo)", value: "rural", points: 10 },
      { label: "Estava desempregada", value: "desempregada", points: 7 },
      { label: "Dona de casa ou Estudante", value: "facultativa", points: 5 },
    ],
  },
  {
    id: "inss_contribs",
    text: "Em algum momento você já pagou INSS ou trabalhou registrada?",
    options: [
      { label: "Sim, já trabalhei registrada no passado", value: "clt_passado", points: 8 },
      { label: "Pago ou já paguei carnê do INSS (GPS / MEI)", value: "mei_carne", points: 9 },
      { label: "Nunca paguei INSS, mas trabalhava na lavoura / terra", value: "apenas_rural", points: 10 },
      { label: "Nunca paguei INSS e nunca trabalhei registrada", value: "nunca", points: 2 },
    ],
  },
  {
    id: "already_applied",
    text: "Você já solicitou este Salário-Maternidade no INSS?",
    options: [
      { label: "Não, nunca solicitei", value: "nunca_pediu", points: 10 },
      { label: "Sim, e foi aprovado", value: "aprovado", points: 0 },
      { label: "Sim, mas o INSS negou o pedido", value: "negado", points: 8 },
    ],
  }
];
