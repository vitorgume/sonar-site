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
    name: 'Free',
    description: 'Para quem está começando a usar o Sonar.',
    price: 'Gratuito',
    priceSuffix: '',
    highlighted: false,
    ctaLabel: 'Começar agora',
    features: [
      '5 ligações/mês',
      '2 usuários operacionais',
      '1 gestores'
    ],
  },
  {
    name: 'Essencial',
    description:
      'Para quem está começando a estruturar o treinamento do time comercial.',
    price: 'R$ 69',
    priceSuffix: '/mês por usuário',
    highlighted: false,
    ctaLabel: 'Começar agora',
    features: [
      '30 ligações/mês',
      '3 usuários operacionais',
      '2 gestores',
      'Integração com centrais de VoIP',
      'Sales Enablement',
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
      '100 ligações/mês',
      '6 usuários operacionais',
      '3 gestores',
      'Integração com centrais de VoIP',
      'Integração com CRM',
      'Sales Enablement',
      'Aba Estratégia'
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
      'Tudo do plano Pro de forma ilimitada',
    ],
  },
];
