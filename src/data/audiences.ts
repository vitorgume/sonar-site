export interface Audience {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
}

export const AUDIENCES: Audience[] = [
  {
    eyebrow: 'Para liderança e enablement',
    title: 'Treine o time inteiro com base em dado',
    description:
      'Pare de montar treinamento a partir de percepção. Veja onde o playbook não está sendo aplicado, priorize quem precisa de apoio e meça se o coaching mudou o número.',
    benefits: [
      'Score por vendedor e por critério do playbook',
      'Objeções mais recorrentes do funil, ranqueadas',
      'Quem precisa de coaching identificado antes do fim do mês',
      'Rampagem de vendedor novo com uma biblioteca de calls reais',
    ],
  },
  {
    eyebrow: 'Para vendedores',
    title: 'Feedback específico, não conselho genérico',
    description:
      'Você conduz a conversa e o Sonar cuida do registro e da leitura. Depois da call você sabe exatamente o que funcionou, o que travou e o que treinar antes da próxima.',
    benefits: [
      'Feedback com o trecho exato da ligação, não com impressão',
      'Resumo pronto para registrar no CRM',
      'Respostas de objeção que já funcionaram com outros clientes',
      'Evolução do próprio score visível ligação após ligação',
    ],
  },
];
