/**
 * ⚠️ VALORES PROVISÓRIOS — CONFIRMAR ANTES DE PUBLICAR.
 * Os preços abaixo são placeholders para estruturar a página.
 * Substitua `price` e `limits` pelos valores comerciais reais do Sonar.
 */

export interface Plan {
  name: string;
  description: string;
  price: string;
  priceSuffix: string;
  highlighted: boolean;
  ctaLabel: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    name: 'Essencial',
    description: 'Para quem está começando a estruturar o processo comercial.',
    price: 'R$ 149',
    priceSuffix: '/mês por usuário',
    highlighted: false,
    ctaLabel: 'Começar agora',
    features: [
      'Transcrição automática das ligações',
      'Resumo por IA de cada call',
      'Score de qualidade da ligação',
      'Histórico pesquisável',
      'Até 3 usuários',
    ],
  },
  {
    name: 'Pro',
    description: 'Para times de vendas que fazem coaching com constância.',
    price: 'R$ 249',
    priceSuffix: '/mês por usuário',
    highlighted: true,
    ctaLabel: 'Criar conta',
    features: [
      'Tudo do plano Essencial',
      'Análise de objeções e sinais de compra',
      'Painel de desempenho por vendedor',
      'Comparativo de evolução por período',
      'Usuários ilimitados',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Para operações com múltiplos times e volume alto de calls.',
    price: 'Sob consulta',
    priceSuffix: '',
    highlighted: false,
    ctaLabel: 'Falar com o time',
    features: [
      'Tudo do plano Pro',
      'Critérios de score personalizados',
      'Gestão de acessos por equipe',
      'Suporte prioritário',
      'Onboarding acompanhado',
    ],
  },
];
