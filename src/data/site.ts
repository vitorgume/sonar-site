export const SITE = {
  name: 'Sonar',
  tagline: 'Sales Call Intelligence',
  url: 'https://sonar.gume.app',
  locale: 'pt-BR',
  title: 'Sonar — Sales Enablement: treine seu time comercial com dados',
  description:
    'O Sonar é a plataforma de Sales Enablement que transforma as ligações do seu time em treinamento contínuo. Dados de cada conversa, score por critério do playbook e coaching com evidência — não com achismo.',
  ogImage: '/og-image.png',
} as const;

/** ⚠️ CONFIRMAR: e-mail de contato comercial exibido no rodapé. */
export const CONTACT_EMAIL = 'vitorvieira@gumeinteligencia.com.br';

export const COMPANY = 'Gume Inteligência';

export const APP_URLS = {
  login: 'https://sonar.gume.app/login',
  register: 'https://sonar.gume.app/register',
  comercial: 'https://wa.me/5544991214486',
 } as const;

export const NAV_LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
] as const;
