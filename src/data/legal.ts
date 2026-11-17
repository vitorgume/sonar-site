import { COMPANY } from './site';

/** E-mail de contato exclusivo das páginas legais (privacidade, termos e exclusão de dados). */
export const LEGAL_CONTACT_EMAIL = 'vitorvieira@gumeinteligencia.com.br';

/**
 * ⚠️ CONFIRMAR — valores provisórios dos documentos legais.
 * Revisar com o jurídico/DPO antes de publicar. Cada valor abaixo é citado no texto
 * das páginas /privacidade, /termos e /exclusao-de-dados.
 */
export const LEGAL_LAST_UPDATED = '17 de novembro de 2026';

/** Prazo para responder pedidos de titulares e concluir exclusões (LGPD art. 19, II: até 15 dias). */
export const REQUEST_DEADLINE_DAYS = 15;

/** Por quanto tempo o conteúdo do cliente é mantido após o encerramento do contrato. */
export const POST_CONTRACT_RETENTION_DAYS = 90;

export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: ListItem[] }
  | { type: 'ol'; items: ListItem[] }
  | { type: 'note'; text: string }
  | { type: 'contact'; label: string; subject: string }
  | { type: 'link'; label: string; href: string };

export type ListItem = string | { term: string; text: string };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface LegalDocument {
  path: string;
  shortTitle: string;
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
}

const DATA_PROTECTION_LAW = 'Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)';

export const PRIVACY_POLICY: LegalDocument = {
  path: '/privacidade',
  shortTitle: 'Política de Privacidade',
  title: 'Política de Privacidade',
  description:
    'Como o Sonar trata dados de ligações, reuniões e conversas de WhatsApp: finalidades, armazenamento, compartilhamento, retenção e como pedir a exclusão.',
  intro:
    'Transparência sobre os dados que passam pelo Sonar: quais tratamos, para quê, onde ficam guardados, com quem são compartilhados, por quanto tempo permanecem e como você pode pedir a exclusão.',
  sections: [
    {
      id: 'quem-somos',
      heading: 'Quem somos',
      blocks: [
        {
          type: 'p',
          text: `O Sonar é uma plataforma de Sales Enablement operada pela ${COMPANY} ("Sonar", "nós"). Ela analisa as ligações, reuniões e conversas de WhatsApp dos times comerciais das empresas clientes e as transforma em dados, treinamento e coaching.`,
        },
        {
          type: 'p',
          text: `Esta Política explica, em linguagem direta, como tratamos dados pessoais em conformidade com a ${DATA_PROTECTION_LAW}.`,
        },
      ],
    },
    {
      id: 'nosso-papel',
      heading: 'Nosso papel: operador e controlador',
      blocks: [
        {
          type: 'ul',
          items: [
            {
              term: 'Operador',
              text: 'Sobre as ligações, reuniões e conversas de WhatsApp que a empresa cliente conecta ao Sonar, a empresa cliente é a controladora dos dados e o Sonar atua como operador: trata esses dados apenas para prestar o serviço contratado e conforme as instruções da empresa.',
            },
            {
              term: 'Controlador',
              text: 'Sobre os dados de cadastro e acesso dos usuários da plataforma, os contatos comerciais e os visitantes deste site, o Sonar atua como controlador.',
            },
          ],
        },
      ],
    },
    {
      id: 'dados-tratados',
      heading: 'Quais dados tratamos',
      blocks: [
        {
          type: 'ul',
          items: [
            {
              term: 'Conta e acesso',
              text: 'nome, e-mail corporativo, cargo ou perfil de acesso, empresa e credenciais de login.',
            },
            {
              term: 'Ligações e reuniões',
              text: 'gravações de áudio (inclusive de reuniões online gravadas por um bot que entra na chamada), transcrições, data, duração, participantes e números de telefone envolvidos.',
            },
            {
              term: 'Agenda conectada',
              text: 'quando o usuário conecta o Google Agenda ou o Microsoft Outlook, tratamos os eventos da agenda: título, horário e participantes, usados para identificar e vincular as reuniões.',
            },
            {
              term: 'Conversas de WhatsApp',
              text: 'mensagens, áudios e arquivos trocados entre os vendedores dos clientes e seus contatos, com os metadados correspondentes (horário, número de telefone e identificação da conversa).',
            },
            {
              term: 'Análises geradas pelo Sonar',
              text: 'resumos, notas por critério do playbook, pontos de melhoria e sugestões de coaching produzidos a partir do conteúdo acima.',
            },
            {
              term: 'Dados técnicos',
              text: 'endereço IP, tipo de navegador e registros de acesso (logs), usados para segurança e funcionamento da plataforma.',
            },
            {
              term: 'Métricas de uso do aplicativo',
              text: 'páginas acessadas, funcionalidades utilizadas e informações do dispositivo, coletadas por uma ferramenta de análise de produto (PostHog) para entender e melhorar o uso da plataforma.',
            },
            {
              term: 'Contato comercial',
              text: 'nome, e-mail, telefone e a mensagem que você nos envia por e-mail ou WhatsApp.',
            },
          ],
        },
        {
          type: 'note',
          text: 'As ligações e conversas envolvem também pessoas que não usam o Sonar, como clientes e prospects das empresas que contratam a plataforma. Os dados dessas pessoas aparecem apenas porque elas participam das conversas dos vendedores e são tratados somente para as finalidades descritas nesta Política.',
        },
      ],
    },
    {
      id: 'finalidades',
      heading: 'Para que usamos os dados',
      blocks: [
        {
          type: 'ul',
          items: [
            'Transcrever e analisar ligações, reuniões e conversas de WhatsApp dos times comerciais.',
            'Identificar e vincular reuniões a partir da agenda conectada pelo usuário.',
            'Gerar notas por critério do playbook, resumos e sugestões de coaching para os gestores e vendedores da empresa cliente.',
            'Autenticar usuários, controlar acessos e administrar a conta.',
            'Prestar suporte, responder contatos e enviar comunicados sobre o serviço.',
            'Manter a segurança da plataforma, prevenir fraudes e cumprir obrigações legais.',
            'Medir o uso do aplicativo para manter a estabilidade e melhorar o serviço.',
          ],
        },
      ],
    },
    {
      id: 'bases-legais',
      heading: 'Bases legais',
      blocks: [
        {
          type: 'p',
          text: 'Como operador, tratamos o conteúdo dos clientes conforme as instruções da empresa controladora, que é responsável por ter base legal adequada para o tratamento e por informar os participantes das conversas, quando aplicável.',
        },
        {
          type: 'p',
          text: 'Como controlador, tratamos dados com base na execução de contrato, no cumprimento de obrigação legal ou regulatória, no legítimo interesse (por exemplo, segurança e estabilidade do serviço) e, quando necessário, no consentimento.',
        },
      ],
    },
    {
      id: 'armazenamento',
      heading: 'Onde os dados ficam guardados',
      blocks: [
        {
          type: 'p',
          text: 'Os dados ficam distribuídos entre os seguintes provedores de infraestrutura:',
        },
        {
          type: 'ul',
          items: [
            {
              term: 'Railway',
              text: 'banco de dados, onde ficam os dados de cadastro, transcrições, conversas e análises.',
            },
            {
              term: 'Amazon Web Services (AWS)',
              text: 'armazenamento dos arquivos de áudio e filas de processamento.',
            },
            {
              term: 'Render',
              text: 'hospedagem da API e dos serviços da aplicação.',
            },
            {
              term: 'Cloudflare',
              text: 'proteção e entrega do tráfego entre o seu navegador e a plataforma.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Cada empresa acessa apenas os próprios dados, com login individual por usuário, controle de acesso por perfil e separação dos dados entre empresas clientes. Os áudios e as transcrições ficam restritos à conta da empresa.',
        },
      ],
    },
    {
      id: 'compartilhamento',
      heading: 'Com quem compartilhamos',
      blocks: [
        {
          type: 'p',
          text: 'Compartilhamos dados somente quando necessário para operar o serviço:',
        },
        {
          type: 'ul',
          items: [
            {
              term: 'Meta (WhatsApp)',
              text: 'para a integração com o WhatsApp, que permite receber e enviar as mensagens e os dados das conversas conectadas pela empresa cliente.',
            },
            {
              term: 'OpenAI',
              text: 'inteligência artificial para analisar o conteúdo e gerar notas, resumos e coaching.',
            },
            {
              term: 'AssemblyAI',
              text: 'transcrição do áudio de ligações e reuniões em texto.',
            },
            {
              term: 'Recall.ai',
              text: 'bot que entra nas reuniões online para gravá-las e obter o áudio.',
            },
            {
              term: 'Google e Microsoft',
              text: 'acesso à agenda (Google Agenda e Microsoft Outlook), quando o usuário a conecta.',
            },
            {
              term: 'PostHog',
              text: 'análise de uso do aplicativo.',
            },
            {
              term: 'Railway, Render, Cloudflare e Amazon Web Services (AWS)',
              text: 'hospedagem, armazenamento e entrega da plataforma, conforme descrito na seção anterior.',
            },
            {
              term: 'Autoridades públicas',
              text: 'quando houver obrigação legal ou ordem judicial.',
            },
          ],
        },
        {
          type: 'p',
          text: 'Esses fornecedores atuam como suboperadores e só podem tratar os dados para prestar o serviço ao Sonar. Não vendemos dados pessoais.',
        },
      ],
    },
    {
      id: 'transferencia-internacional',
      heading: 'Transferência internacional',
      blocks: [
        {
          type: 'p',
          text: 'Alguns dos fornecedores acima podem tratar dados em servidores localizados fora do Brasil. Nesses casos, a transferência é feita nas hipóteses previstas no art. 33 da LGPD, com garantias adequadas de proteção dos dados.',
        },
      ],
    },
    {
      id: 'retencao',
      heading: 'Por quanto tempo guardamos',
      blocks: [
        {
          type: 'ul',
          items: [
            {
              term: 'Conteúdo dos clientes',
              text: `(áudios, transcrições, conversas, eventos de agenda e análises) enquanto o contrato estiver ativo. Após o encerramento, por até ${POST_CONTRACT_RETENTION_DAYS} dias, para exportação ou reativação, e depois são eliminados.`,
            },
            {
              term: 'Dados de conta',
              text: 'enquanto a conta existir e, depois, pelo prazo necessário para cumprir obrigações legais.',
            },
            {
              term: 'Contato comercial',
              text: 'durante a negociação e o relacionamento comercial.',
            },
            {
              term: 'Registros de acesso (logs)',
              text: 'pelo prazo mínimo exigido pelo Marco Civil da Internet (seis meses).',
            },
          ],
        },
        {
          type: 'p',
          text: 'A empresa cliente pode pedir a exclusão antes desses prazos, conforme descrito abaixo. As cópias de segurança são eliminadas no ciclo regular de rotação.',
        },
      ],
    },
    {
      id: 'seguranca',
      heading: 'Segurança',
      blocks: [
        {
          type: 'p',
          text: 'Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda e uso indevido, como autenticação individual, controle de acesso por perfil e separação dos dados entre empresas clientes. Se ocorrer um incidente de segurança que possa causar risco relevante aos titulares, comunicaremos a empresa cliente e as autoridades competentes nos termos da lei.',
        },
      ],
    },
    {
      id: 'direitos',
      heading: 'Seus direitos',
      blocks: [
        {
          type: 'p',
          text: 'A LGPD garante a você, como titular de dados, o direito de solicitar:',
        },
        {
          type: 'ul',
          items: [
            'confirmação de que tratamos seus dados e acesso a eles;',
            'correção de dados incompletos, inexatos ou desatualizados;',
            'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;',
            'portabilidade dos dados;',
            'informação sobre com quem compartilhamos seus dados;',
            'revogação do consentimento, quando essa for a base legal;',
            'revisão de decisões tomadas unicamente com base em tratamento automatizado.',
          ],
        },
        {
          type: 'p',
          text: `Se os seus dados aparecem em conversas de uma empresa que usa o Sonar, essa empresa é a controladora e o pedido deve ser feito a ela. Se você nos procurar, encaminhamos o pedido e auxiliamos a empresa no atendimento. Respondemos aos pedidos em até ${REQUEST_DEADLINE_DAYS} dias.`,
        },
      ],
    },
    {
      id: 'exclusao',
      heading: 'Como pedir a exclusão dos dados',
      blocks: [
        {
          type: 'p',
          text: `Para pedir a exclusão, envie um e-mail para ${LEGAL_CONTACT_EMAIL} com o assunto "Exclusão de dados". O passo a passo completo, o prazo e o que acontece depois estão na página dedicada.`,
        },
        {
          type: 'link',
          label: 'Ver como pedir a exclusão de dados',
          href: '/exclusao-de-dados',
        },
      ],
    },
    {
      id: 'cookies',
      heading: 'Cookies e métricas de uso',
      blocks: [
        {
          type: 'p',
          text: 'Este site institucional não utiliza cookies de publicidade nem de rastreamento de terceiros.',
        },
        {
          type: 'p',
          text: 'Já o aplicativo do Sonar utiliza o PostHog para medir o uso da plataforma (páginas acessadas, funcionalidades utilizadas e dados técnicos do dispositivo), o que pode envolver cookies ou armazenamento local no seu navegador. Esses dados servem para manter e melhorar o serviço, e não para publicidade.',
        },
        {
          type: 'p',
          text: 'Se isso mudar, atualizaremos esta Política antes da alteração entrar em vigor.',
        },
      ],
    },
    {
      id: 'menores',
      heading: 'Menores de idade',
      blocks: [
        {
          type: 'p',
          text: 'O Sonar é um serviço para empresas e não é direcionado a menores de 18 anos.',
        },
      ],
    },
    {
      id: 'alteracoes',
      heading: 'Alterações desta Política',
      blocks: [
        {
          type: 'p',
          text: 'Podemos atualizar esta Política para refletir mudanças no serviço ou na legislação. A data da última atualização aparece no topo da página e, em mudanças relevantes, avisaremos os clientes pelos canais de contato cadastrados.',
        },
      ],
    },
    {
      id: 'contato',
      heading: 'Contato',
      blocks: [
        {
          type: 'p',
          text: 'Dúvidas, pedidos de titulares e assuntos de privacidade devem ser enviados para o canal abaixo, que também é o contato do encarregado pelo tratamento de dados pessoais.',
        },
        {
          type: 'contact',
          label: LEGAL_CONTACT_EMAIL,
          subject: 'Privacidade e proteção de dados',
        },
      ],
    },
  ],
};

export const TERMS_OF_USE: LegalDocument = {
  path: '/termos',
  shortTitle: 'Termos de Uso',
  title: 'Termos de Uso',
  description:
    'Regras de uso da plataforma Sonar, responsabilidades de cada parte e papéis de controlador e operador de dados conforme a LGPD.',
  intro:
    'As regras para usar o Sonar, o que esperamos de cada parte e como funciona a divisão de responsabilidades sobre os dados tratados na plataforma.',
  sections: [
    {
      id: 'aceitacao',
      heading: 'Aceitação e objeto',
      blocks: [
        {
          type: 'p',
          text: `Estes Termos regulam o uso da plataforma Sonar, operada pela ${COMPANY}, por empresas clientes e seus usuários. Ao acessar ou usar o Sonar, você declara que leu e concorda com estes Termos e com a Política de Privacidade. Se você usa o Sonar em nome de uma empresa, declara ter poderes para vinculá-la.`,
        },
        {
          type: 'p',
          text: 'Condições comerciais específicas (planos, preços, prazos e volume) constam na proposta ou no contrato firmado com o Sonar e prevalecem sobre estes Termos em caso de conflito.',
        },
      ],
    },
    {
      id: 'definicoes',
      heading: 'Definições',
      blocks: [
        {
          type: 'ul',
          items: [
            {
              term: 'Plataforma',
              text: 'o software Sonar, incluindo o site, o aplicativo web e as integrações.',
            },
            {
              term: 'Cliente',
              text: 'a empresa que contrata o Sonar.',
            },
            {
              term: 'Usuário',
              text: 'a pessoa autorizada pelo Cliente a acessar a Plataforma.',
            },
            {
              term: 'Conteúdo do Cliente',
              text: 'ligações, reuniões, conversas de WhatsApp, transcrições e demais dados que o Cliente conecta ou envia à Plataforma, e as análises geradas a partir deles.',
            },
          ],
        },
      ],
    },
    {
      id: 'acesso',
      heading: 'Acesso e contas',
      blocks: [
        {
          type: 'p',
          text: 'O acesso à Plataforma é liberado após a contratação com o time comercial do Sonar. Cada Usuário tem login individual, que é pessoal e intransferível. O Cliente é responsável por manter os dados de acesso em sigilo, por conceder e revogar permissões de seus Usuários e por todas as atividades realizadas em suas contas.',
        },
      ],
    },
    {
      id: 'uso-permitido',
      heading: 'Uso permitido e proibido',
      blocks: [
        {
          type: 'p',
          text: 'A Plataforma deve ser usada para fins comerciais legítimos, como analisar a performance e treinar times de vendas. É proibido:',
        },
        {
          type: 'ul',
          items: [
            'usar a Plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros;',
            'enviar conteúdo coletado sem a base legal ou sem o aviso exigidos por lei;',
            'tentar acessar dados de outros clientes, burlar controles de segurança ou testar vulnerabilidades sem autorização;',
            'copiar, revender, sublicenciar ou fazer engenharia reversa da Plataforma;',
            'usar a Plataforma para monitorar pessoas fora do contexto da atividade comercial do Cliente.',
          ],
        },
      ],
    },
    {
      id: 'responsabilidades-cliente',
      heading: 'Responsabilidades do Cliente',
      blocks: [
        {
          type: 'ul',
          items: [
            'Ter base legal adequada para tratar o Conteúdo do Cliente e para enviá-lo ao Sonar.',
            'Informar os participantes de ligações, reuniões e conversas sobre a gravação, transcrição e análise, quando exigido por lei.',
            'Respeitar os termos e políticas do WhatsApp (Meta) ao conectar suas conversas à Plataforma.',
            'Orientar seus Usuários sobre o uso adequado da Plataforma.',
            'Atender os pedidos dos titulares de dados na condição de controlador.',
          ],
        },
      ],
    },
    {
      id: 'responsabilidades-sonar',
      heading: 'Responsabilidades do Sonar',
      blocks: [
        {
          type: 'ul',
          items: [
            'Disponibilizar a Plataforma e as funcionalidades contratadas.',
            'Adotar medidas técnicas e organizacionais de segurança para proteger os dados.',
            'Tratar o Conteúdo do Cliente apenas para prestar o serviço, conforme as instruções do Cliente.',
            'Prestar suporte pelos canais de contato informados.',
          ],
        },
      ],
    },
    {
      id: 'protecao-de-dados',
      heading: 'Proteção de dados (LGPD)',
      blocks: [
        {
          type: 'ul',
          items: [
            {
              term: 'Cliente = controlador',
              text: 'Em relação ao Conteúdo do Cliente, o Cliente é o controlador e define as finalidades do tratamento.',
            },
            {
              term: 'Sonar = operador',
              text: 'O Sonar trata o Conteúdo do Cliente em nome do Cliente, apenas para prestar o serviço contratado e seguindo as instruções documentadas do Cliente.',
            },
            {
              term: 'Suboperadores',
              text: 'O Sonar pode contratar suboperadores, como provedores de hospedagem, inteligência artificial, transcrição, gravação de reuniões, agenda e análise de uso, além da Meta para a integração com o WhatsApp. A lista com os nomes e a função de cada um está na Política de Privacidade.',
            },
            {
              term: 'Direitos dos titulares',
              text: 'O Sonar auxilia o Cliente a atender os pedidos dos titulares, e encaminha ao Cliente os pedidos que receber diretamente.',
            },
            {
              term: 'Incidentes',
              text: 'Em caso de incidente de segurança que afete o Conteúdo do Cliente, o Sonar comunica o Cliente sem demora injustificada.',
            },
            {
              term: 'Fim do contrato',
              text: `Encerrado o contrato, o Sonar elimina o Conteúdo do Cliente em até ${POST_CONTRACT_RETENTION_DAYS} dias, salvo se a lei exigir a guarda.`,
            },
            {
              term: 'Dados de cadastro',
              text: 'Em relação aos dados de cadastro e acesso dos Usuários e ao contato comercial, o Sonar atua como controlador, conforme a Política de Privacidade.',
            },
          ],
        },
        {
          type: 'link',
          label: 'Ler a Política de Privacidade',
          href: '/privacidade',
        },
      ],
    },
    {
      id: 'inteligencia-artificial',
      heading: 'Uso de inteligência artificial',
      blocks: [
        {
          type: 'p',
          text: 'As notas, resumos e sugestões de coaching são gerados com apoio de inteligência artificial e podem conter imprecisões. Eles servem como apoio à gestão comercial e não substituem a avaliação humana. O Cliente é responsável pelas decisões tomadas com base nesses resultados, especialmente as que afetem pessoas, e pode solicitar a revisão de decisões baseadas apenas em tratamento automatizado.',
        },
      ],
    },
    {
      id: 'planos-e-pagamento',
      heading: 'Planos e pagamento',
      blocks: [
        {
          type: 'p',
          text: 'Os planos, valores, formas e prazos de pagamento são os da proposta ou do contrato firmado com o Sonar. A falta de pagamento pode levar à suspensão do acesso, conforme previsto no contrato.',
        },
      ],
    },
    {
      id: 'propriedade-intelectual',
      heading: 'Propriedade intelectual',
      blocks: [
        {
          type: 'p',
          text: 'A Plataforma, sua marca, código, interface e demais elementos pertencem ao Sonar e à Gume Inteligência. O Cliente recebe uma licença limitada, não exclusiva e intransferível para usá-la durante o contrato. O Conteúdo do Cliente continua sendo do Cliente, e o Sonar o utiliza apenas para prestar o serviço.',
        },
      ],
    },
    {
      id: 'disponibilidade',
      heading: 'Disponibilidade e manutenção',
      blocks: [
        {
          type: 'p',
          text: 'Trabalhamos para manter a Plataforma disponível, mas não garantimos funcionamento ininterrupto. Podem ocorrer manutenções programadas ou indisponibilidades causadas por terceiros, como provedores de infraestrutura e a própria Meta. Sempre que possível, avisaremos com antecedência.',
        },
      ],
    },
    {
      id: 'limitacao-de-responsabilidade',
      heading: 'Limitação de responsabilidade',
      blocks: [
        {
          type: 'p',
          text: 'Na máxima extensão permitida pela lei, o Sonar não responde por danos indiretos, lucros cessantes ou por decisões tomadas pelo Cliente com base nos resultados da Plataforma, nem por falhas em serviços de terceiros fora de seu controle. Os limites específicos de responsabilidade constam no contrato firmado com o Cliente.',
        },
      ],
    },
    {
      id: 'suspensao-e-encerramento',
      heading: 'Suspensão e encerramento',
      blocks: [
        {
          type: 'p',
          text: 'O Sonar pode suspender ou encerrar o acesso em caso de descumprimento destes Termos, uso ilícito ou risco à segurança da Plataforma. O Cliente pode encerrar o contrato conforme as condições nele previstas. Após o encerramento, aplica-se o prazo de eliminação dos dados descrito na seção de proteção de dados.',
        },
      ],
    },
    {
      id: 'alteracoes',
      heading: 'Alterações dos Termos',
      blocks: [
        {
          type: 'p',
          text: 'Podemos atualizar estes Termos. A data da última atualização aparece no topo da página e, em mudanças relevantes, avisaremos os clientes pelos canais cadastrados. O uso continuado da Plataforma após a atualização indica concordância com a nova versão.',
        },
      ],
    },
    {
      id: 'lei-e-foro',
      heading: 'Lei aplicável e foro',
      blocks: [
        {
          type: 'p',
          text: `Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro da comarca da sede da ${COMPANY} para resolver eventuais conflitos, salvo disposição diversa no contrato firmado com o Cliente.`,
        },
      ],
    },
    {
      id: 'contato',
      heading: 'Contato',
      blocks: [
        {
          type: 'p',
          text: 'Dúvidas sobre estes Termos podem ser enviadas para o e-mail abaixo.',
        },
        {
          type: 'contact',
          label: LEGAL_CONTACT_EMAIL,
          subject: 'Dúvida sobre os Termos de Uso',
        },
      ],
    },
  ],
};

export const DATA_DELETION: LegalDocument = {
  path: '/exclusao-de-dados',
  shortTitle: 'Exclusão de dados',
  title: 'Exclusão de dados',
  description:
    'Como pedir a exclusão dos seus dados no Sonar, em quanto tempo ela é feita e o que acontece depois.',
  intro:
    'Você pode pedir a exclusão dos seus dados no Sonar a qualquer momento. Veja como fazer o pedido, o que precisamos para atendê-lo e em quanto tempo ele é concluído.',
  sections: [
    {
      id: 'quem-pode-pedir',
      heading: 'Quem pode pedir',
      blocks: [
        {
          type: 'ul',
          items: [
            {
              term: 'Usuários da plataforma',
              text: 'que querem excluir a própria conta e os dados associados a ela.',
            },
            {
              term: 'Empresas clientes',
              text: 'que querem excluir o Conteúdo do Cliente (ligações, reuniões, conversas de WhatsApp, transcrições e análises) total ou parcialmente.',
            },
            {
              term: 'Pessoas que participaram de conversas',
              text: 'tratadas pelo Sonar a pedido de uma empresa cliente, como clientes e prospects. Nesse caso a empresa é a controladora dos dados: encaminhe o pedido a ela e, se preferir, envie também ao Sonar, que o repassa e auxilia no atendimento.',
            },
          ],
        },
      ],
    },
    {
      id: 'como-pedir',
      heading: 'Como pedir a exclusão',
      blocks: [
        {
          type: 'ol',
          items: [
            `Envie um e-mail para ${LEGAL_CONTACT_EMAIL} com o assunto "Exclusão de dados".`,
            'Informe seu nome completo, o e-mail usado no Sonar e o nome da empresa.',
            'Se o pedido envolver conversas de WhatsApp, informe também o número de telefone relacionado.',
            'Diga o que deseja excluir: apenas a sua conta, conteúdos específicos ou todos os dados.',
          ],
        },
        {
          type: 'contact',
          label: 'Enviar pedido de exclusão',
          subject: 'Exclusão de dados',
        },
      ],
    },
    {
      id: 'verificacao',
      heading: 'Verificação de identidade',
      blocks: [
        {
          type: 'p',
          text: 'Para proteger seus dados, podemos pedir informações adicionais para confirmar que o pedido vem de você ou de alguém autorizado. Pedidos de exclusão do Conteúdo do Cliente inteiro devem partir de um representante da empresa contratante.',
        },
      ],
    },
    {
      id: 'prazo',
      heading: 'Prazo',
      blocks: [
        {
          type: 'p',
          text: `Respondemos ao pedido e concluímos a exclusão em até ${REQUEST_DEADLINE_DAYS} dias a partir da confirmação da sua identidade. Se precisarmos de mais tempo ou de mais informações, avisamos você dentro desse prazo.`,
        },
      ],
    },
    {
      id: 'o-que-e-excluido',
      heading: 'O que é excluído',
      blocks: [
        {
          type: 'p',
          text: 'Eliminamos os dados pessoais indicados no pedido dos sistemas do Sonar, incluindo áudios, transcrições, conversas, eventos de agenda e análises associadas. As cópias de segurança são eliminadas no ciclo regular de rotação.',
        },
        {
          type: 'p',
          text: 'Podemos manter apenas os dados que a lei exige ou permite guardar, como registros de acesso (Marco Civil da Internet), dados necessários para cumprir obrigações fiscais e contratuais ou para o exercício regular de direitos em processos. Nesses casos, informamos quais dados foram mantidos e por quê.',
        },
      ],
    },
    {
      id: 'parar-whatsapp',
      heading: 'Como parar o envio de conversas do WhatsApp',
      blocks: [
        {
          type: 'p',
          text: 'Você não precisa esperar a conclusão de um pedido de exclusão para interromper o recebimento de novas conversas. Há duas formas, que podem ser combinadas:',
        },
        {
          type: 'ol',
          items: [
            'Dentro do Sonar, desligue ou exclua o número de WhatsApp conectado, nas configurações da integração. A partir daí, o Sonar deixa de receber novas mensagens desse número.',
            'Na Meta, remova o aplicativo Sonar nas configurações de integrações da sua empresa. Isso revoga o acesso do Sonar à sua conta do WhatsApp.',
          ],
        },
        {
          type: 'p',
          text: 'Interromper o envio não apaga as conversas já recebidas. Para excluí-las, faça o pedido descrito acima.',
        },
      ],
    },
    {
      id: 'terceiros',
      heading: 'Dados em outras plataformas',
      blocks: [
        {
          type: 'p',
          text: 'A exclusão no Sonar não apaga os dados que a Meta (WhatsApp) ou outros serviços mantêm em suas próprias plataformas. Para isso, consulte as políticas e os canais de cada serviço.',
        },
      ],
    },
    {
      id: 'confirmacao',
      heading: 'Confirmação',
      blocks: [
        {
          type: 'p',
          text: 'Quando a exclusão for concluída, enviamos uma confirmação por e-mail para o endereço que fez o pedido.',
        },
      ],
    },
    {
      id: 'saiba-mais',
      heading: 'Saiba mais',
      blocks: [
        {
          type: 'p',
          text: 'Para entender quais dados tratamos, por quanto tempo os guardamos e quais são os seus demais direitos, leia a Política de Privacidade.',
        },
        {
          type: 'link',
          label: 'Ler a Política de Privacidade',
          href: '/privacidade',
        },
      ],
    },
  ],
};

export const LEGAL_DOCS = [PRIVACY_POLICY, TERMS_OF_USE, DATA_DELETION] as const;
