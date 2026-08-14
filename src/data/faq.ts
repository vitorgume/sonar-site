export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: 'Preciso instalar algo na máquina do vendedor?',
    answer:
      'Não. O Sonar funciona no navegador. Você envia o áudio da ligação pela plataforma e recebe a transcrição e a análise em seguida — sem plugin, sem agente instalado e sem tirar o time da rotina de vendas.',
  },
  {
    question: 'O Sonar funciona com ligações em português?',
    answer:
      'Sim. O Sonar foi construído para times comerciais brasileiros, com transcrição e análise em português, incluindo gírias e vocabulário comercial do dia a dia.',
  },
  {
    question: 'Como é calculado o score da ligação?',
    answer:
      'A IA avalia a conversa nos critérios de uma boa call comercial — abertura, descoberta da dor, apresentação de valor, condução das objeções e definição de próximos passos — e transforma isso em uma nota comparável entre ligações e vendedores. É o que permite medir, com dado, se o treinamento está sendo aplicado.',
  },
  {
    question: 'O Sonar substitui o treinamento do meu time?',
    answer:
      'Não substitui: ele dá base para o treinamento existir de verdade. Em vez de montar o conteúdo por percepção, você parte do que apareceu nas ligações — objeções reais, critérios do playbook que estão caindo e trechos concretos para usar no 1:1 e no onboarding.',
  },
  {
    question: 'Dá para usar o meu próprio playbook como critério?',
    answer:
      'Sim. Os critérios de avaliação seguem a lógica de uma call comercial bem conduzida e, no plano Enterprise, podem ser ajustados para refletir exatamente o playbook e a metodologia que o seu time já treina.',
  },
  {
    question: 'Meus dados e os áudios ficam seguros?',
    answer:
      'Sim. Cada empresa acessa apenas os próprios dados, com login individual por usuário e controle de acesso por perfil. Os áudios e transcrições ficam restritos à sua conta.',
  },
  {
    question: 'Quanto tempo leva para começar a usar?',
    answer:
      'Poucos minutos. Você cria sua conta, convida o time e já pode enviar a primeira ligação. Não há projeto de implantação nem integração obrigatória — na primeira semana já dá para levar dado para o 1:1.',
  },
  {
    question: 'Serve para time pequeno?',
    answer:
      'Serve. Se você tem pelo menos um vendedor fazendo ligações, já existe dado suficiente para estruturar treinamento. Times pequenos costumam sentir o ganho ainda mais rápido, porque cada call pesa mais no resultado.',
  },
];
