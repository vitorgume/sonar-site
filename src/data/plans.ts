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
    description:
      'Para quem está começando a estruturar o treinamento do time comercial.',
    price: 'R$ 69',
    priceSuffix: '/mês por usuário',
    highlighted: false,
    ctaLabel: 'Começar agora',
    features: [
      'Transcrição automática das ligações',
      'Leitura da conversa por IA',
      'Score da ligação por critério do playbook',
      'Biblioteca de calls pesquisável',
      'Até 3 usuários',
    ],
  },
  {
    name: 'Pro',
    description: 'Para times que fazem treinamento e coaching com constância.',
    price: 'R$ 99',
    priceSuffix: '/mês por usuário',
    highlighted: true,
    ctaLabel: 'Criar conta',
    features: [
      'Tudo do plano Essencial',
      'Mapa de objeções e sinais de compra',
      'Painel de desempenho por vendedor',
      'Dados de evolução do treinamento por período',
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
      'Critérios de score do seu próprio playbook',
      'Gestão de acessos por equipe',
      'Suporte prioritário',
      'Onboarding e desenho do programa de enablement',
    ],
  },
];
