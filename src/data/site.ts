export const SITE = {
  name: 'Sonar',
  tagline: 'Sales Call Intelligence',
  url: 'https://sonar.gume.app',
  locale: 'pt-BR',
  title: 'Sonar — Inteligência de IA para suas ligações de vendas',
  description:
    'O Sonar transcreve, analisa e pontua cada ligação do seu time comercial. Descubra objeções, acompanhe a qualidade das conversas e transforme cada call em coaching acionável.',
  ogImage: '/og-image.png',
} as const;

/** ⚠️ CONFIRMAR: e-mail de contato comercial exibido no rodapé. */
export const CONTACT_EMAIL = 'contato@gumeinteligencia.com.br';

export const COMPANY = 'Gume Inteligência';

export const APP_URLS = {
  login: 'https://sonar.gume.app/login',
  register: 'https://sonar.gume.app/register',
} as const;

export const NAV_LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
] as const;
