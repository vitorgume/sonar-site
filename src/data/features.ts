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
    title: 'Biblioteca de calls reais',
    description:
      'Cada ligação vira texto pesquisável, com identificação de quem falou e marcação de tempo. É a sua base de treinamento com conversas de verdade, não com role-play.',
  },
  {
    icon: 'sparkles',
    title: 'Leitura da conversa por IA',
    description:
      'Em segundos você tem a dor do cliente, o que foi combinado e o que ficou pendente — dado estruturado para revisar a call sem precisar ouvir os 40 minutos.',
  },
  {
    icon: 'gauge',
    title: 'Score por critério do playbook',
    description:
      'Cada call é avaliada nos critérios que você treina: descoberta, apresentação de valor, condução de objeções e fechamento. O playbook vira métrica.',
  },
  {
    icon: 'message-square-warning',
    title: 'Mapa de objeções do time',
    description:
      'As objeções mais recorrentes aparecem ranqueadas, com os trechos em que surgiram. Você treina a resposta certa para o que o mercado realmente está dizendo.',
  },
  {
    icon: 'graduation-cap',
    title: 'Coaching 1:1 com evidência',
    description:
      'Feedback objetivo por vendedor, apontando o momento exato da ligação. O 1:1 sai da opinião e vira plano de desenvolvimento com prioridade clara.',
  },
  {
    icon: 'bar-chart-3',
    title: 'Dados de evolução do time',
    description:
      'Acompanhe o score por vendedor e por período para medir se o treinamento está funcionando — e identifique quem precisa de apoio antes do fim do mês.',
  },
];
