export interface Audience {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
}

export const AUDIENCES: Audience[] = [
  {
    eyebrow: 'Para gestores',
    title: 'Enxergue o que realmente acontece nas ligações',
    description:
      'Pare de gerenciar vendas por relatório preenchido à mão. Acompanhe a qualidade das conversas do time inteiro sem precisar ouvir uma call atrás da outra.',
    benefits: [
      'Score de qualidade por vendedor e por período',
      'Objeções mais recorrentes do funil, ranqueadas',
      'Identificação de quem precisa de coaching antes do fechamento do mês',
      'Onboarding de vendedor novo com base em calls reais',
    ],
  },
  {
    eyebrow: 'Para vendedores',
    title: 'Menos anotação, mais tempo vendendo',
    description:
      'Você conduz a conversa e o Sonar cuida do registro. O resumo, os pontos combinados e os próximos passos ficam prontos assim que a ligação termina.',
    benefits: [
      'Resumo pronto para registrar no CRM',
      'Nada importante se perde entre uma call e outra',
      'Feedback claro sobre o que melhorar na próxima ligação',
      'Histórico completo do cliente antes de cada follow-up',
    ],
  },
];
