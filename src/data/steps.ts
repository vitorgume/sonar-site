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
      'Suba o áudio da call direto no Sonar. Sem instalar nada na máquina do vendedor e sem tirar ninguém do ritmo de vendas.',
  },
  {
    number: '02',
    title: 'A IA transforma em dado',
    description:
      'O Sonar gera a transcrição completa, as objeções levantadas e o score da ligação nos critérios do seu playbook comercial.',
  },
  {
    number: '03',
    title: 'Você treina com evidência',
    description:
      'Leve o dado para o 1:1, corrija o discurso com o trecho na mão e acompanhe a evolução do vendedor ligação após ligação.',
  },
];
