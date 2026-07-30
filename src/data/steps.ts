export interface Step {
  number: string;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Envie a ligação',
    description:
      'Suba o áudio da call direto no Sonar. Sem instalar nada na máquina do vendedor e sem mudar a rotina do time comercial.',
  },
  {
    number: '02',
    title: 'A IA transcreve e analisa',
    description:
      'O Sonar gera a transcrição completa, o resumo da conversa, as objeções levantadas e o score de qualidade da ligação.',
  },
  {
    number: '03',
    title: 'Você age com evidência',
    description:
      'Use os insights para fazer coaching, priorizar follow-ups e corrigir o discurso do time enquanto o negócio ainda está aberto.',
  },
];
