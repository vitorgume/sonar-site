export type FeatureIcon =
  | 'audio-lines'
  | 'sparkles'
  | 'gauge'
  | 'message-square-warning'
  | 'graduation-cap'
  | 'bar-chart-3';

export interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: 'audio-lines',
    title: 'Transcrição automática',
    description:
      'Cada ligação vira texto pesquisável, com identificação de quem falou e marcação de tempo. Nunca mais dependa da memória do vendedor sobre o que foi combinado.',
  },
  {
    icon: 'sparkles',
    title: 'Resumo gerado por IA',
    description:
      'Em segundos você tem o resumo da conversa, a dor do cliente, o que ficou pendente e os próximos passos — pronto para colar no CRM.',
  },
  {
    icon: 'gauge',
    title: 'Score de qualidade',
    description:
      'Cada call recebe uma nota baseada nos critérios do seu playbook: descoberta, apresentação de valor, condução e fechamento.',
  },
  {
    icon: 'message-square-warning',
    title: 'Objeções e sinais de compra',
    description:
      'O Sonar destaca as objeções que aparecem com mais frequência e os sinais de interesse do cliente, para você ajustar o discurso com base em dado, não em achismo.',
  },
  {
    icon: 'graduation-cap',
    title: 'Coaching acionável',
    description:
      'Feedback objetivo por vendedor, com trechos exatos da ligação. O 1:1 deixa de ser opinião e passa a ser evidência.',
  },
  {
    icon: 'bar-chart-3',
    title: 'Visão do time',
    description:
      'Compare desempenho entre vendedores, acompanhe a evolução do score ao longo do tempo e identifique quem precisa de apoio antes do fim do mês.',
  },
];
