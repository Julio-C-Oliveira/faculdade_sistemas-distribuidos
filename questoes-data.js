window.QUESTOES_DATA = [
  {
    "id": 1,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2003 · Questão 69",
    "exame": "POSCOMP",
    "ano": 2003,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Um sistema centralizado é um concentrador de recursos; um sistema distribuído apresenta seus recursos dispersos. Entretanto nem todo o conjunto de recursos computacionais dispersos pode ser considerado um sistema distribuído. Considerando um conjunto de computadores, assinale a alternativa que melhor corresponde às características necessárias para considerá-lo um sistema distribuído:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "existência de memória compartilhada e relógios locais sincronizados"
      },
      {
        "letra": "B",
        "texto": "suporte de rede e funções primitivas de comunicação"
      },
      {
        "letra": "C",
        "texto": "suporte de rede e um relógio global"
      },
      {
        "letra": "D",
        "texto": "existência de sistema operacional idêntico e hardware padronizado em todos os computadores"
      },
      {
        "letra": "E",
        "texto": "existência de memória secundária compartilhada e protocolos de sincronização de estado"
      }
    ],
    "gabarito": "B",
    "explicacao": "Em sistemas distribuídos, os nós são computadores autônomos que não compartilham memória física nem relógio global. A cooperação ocorre exclusivamente através do suporte de rede e funções primitivas de comunicação por troca de mensagens.",
    "fonte": "poscomp/2003/03_tec.pdf"
  },
  {
    "id": 2,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2003 · Questão 70",
    "exame": "POSCOMP",
    "ano": 2003,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": true,
    "enunciado": "Entre as desvantagens e vantagens de um sistema distribuído em relação um sistema centralizado, podemos afirmar que um sistema distribuído apresenta:\n\n- i. a desvantagem de possuir maior quantidade de componentes e portanto maior probabilidade de um componente individual qualquer apresentar defeito mas a vantagem de possibilitar continuar a computação em outro computador do sistema se um dos computadores falhar.\n- ii. a desvantagem de maior tempo de inicialização devido a maior quantidade de computadores no sistema do sistema mas a vantagem de maior flexibilidade de acesso a dados remotos.\n- iii. a desvantagem da necessidade de máquinas homogêneas mas a vantagem de possibilitar operar num sistema com uma única forma de acesso a arquivos de dados.\n- iv. a desvantagem de maior latência para alcançar um recurso localizado em outro computador do sistema mas a vantagem de permitir executar de programas concorrentemente.\n\nAssinale a alternativa correta:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "i e ii são verdadeiras"
      },
      {
        "letra": "B",
        "texto": "iii e iv são verdadeiras"
      },
      {
        "letra": "C",
        "texto": "i e iii são verdadeiras"
      },
      {
        "letra": "D",
        "texto": "ii e iv são verdadeiras"
      },
      {
        "letra": "E",
        "texto": "i e iv são verdadeiras"
      }
    ],
    "gabarito": "anulada",
    "explicacao": "Esta questão foi oficialmente anulada pela banca organizadora do POSCOMP devido a imprecisões nas proposições sobre vantagens e desvantagens de sistemas distribuídos.",
    "fonte": "poscomp/2003/03_tec.pdf"
  },
  {
    "id": 3,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2004 · Questão 64",
    "exame": "POSCOMP",
    "ano": 2004,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Assinale a opção que melhor completa o parágrafo abaixo:\n\nSistemas distribuídos e computadores paralelos com múltiplos processadores fortemente acoplados possuem algumas características comuns, como a existência de vários processadores e a possibilidade de executar tarefas simultâneas, uma em cada processador, em um dado instante de tempo. Mas um sistema distribuído diferencia-se de um sistema multiprocessador fortemente acoplado principalmente porque o sistema distribuído:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "apresenta suporte de rede de alta velocidade e um relógio global compartilhado."
      },
      {
        "letra": "B",
        "texto": "exige um sistema operacional de rede e hardware padronizado nos computadores."
      },
      {
        "letra": "C",
        "texto": "não apresenta memória compartilhada nem relógio global."
      },
      {
        "letra": "D",
        "texto": "possui memória secundária compartilhada e protocolos de sincronização de estado."
      },
      {
        "letra": "E",
        "texto": "exige um ambiente de administração único e medidas especiais de segurança contra associações ilícitas."
      }
    ],
    "gabarito": "C",
    "explicacao": "A principal diferença entre sistemas distribuídos e multiprocessadores fortemente acoplados reside na ausência de memória compartilhada e na falta de um relógio físico global único nos sistemas distribuídos.",
    "fonte": "poscomp/2004/01_prova.pdf"
  },
  {
    "id": 4,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2007 · Questão 69",
    "exame": "POSCOMP",
    "ano": 2007,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Analise as seguintes afirmativas concernentes a questões de projeto de sistemas distribuídos.\n\n- I. Um sistema distribuído tolerante a falhas deve continuar operando na presença de problemas, podendo ocorrer uma degradação tanto no seu desempenho, como nas suas funcionalidades.\n- II. No que diz respeito à escalabilidade, o projeto de um sistema distribuído deve prever que a demanda nos serviços em qualquer dos equipamentos seja limitada por uma constante dependente do número de nodos envolvidos.\n- III. Em um sistema distribuído transparente quanto à concorrência, a informação de quantos usuários estão empregando determinado serviço deve ser omitida.\n\nA análise permite concluir que",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "somente a afirmativa I está incorreta."
      },
      {
        "letra": "B",
        "texto": "somente a afirmativa II está incorreta."
      },
      {
        "letra": "C",
        "texto": "somente a afirmativa III está incorreta."
      },
      {
        "letra": "D",
        "texto": "somente as afirmativas I e III estão incorretas."
      },
      {
        "letra": "E",
        "texto": "todas as afirmativas estão incorretas."
      }
    ],
    "gabarito": "B",
    "explicacao": "A afirmativa II está incorreta porque o projeto de um sistema distribuído escalável deve prever que a demanda por serviços não cresça em função do número de nós (deve ser constante ou O(1)/O(log N)). As afirmativas I (tolerância com degradação graciosa) e III (transparência de concorrência) estão corretas.",
    "fonte": "poscomp/2007/01_prova.pdf"
  },
  {
    "id": 5,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2007 · Questão 70",
    "exame": "POSCOMP",
    "ano": 2007,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Em relação aos sistemas distribuídos, analise as seguintes afirmativas.\n\n- I. Um sistema assíncrono apresenta medida de tempo global.\n- II. A passagem de mensagens é o instrumento empregado para efetuar a comunicação entre os processos de um sistema assíncrono.\n- III. É possível simular um computador paralelo de memória compartilhada usando-se um sistema distribuído.\n- IV. Quando um determinado elemento de um sistema distribuído efetua a difusão de uma mensagem por meio de um multicast, todos os elementos do sistema distribuído recebem a mensagem.\n\nA análise permite concluir que",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "somente a afirmativa IV está correta."
      },
      {
        "letra": "B",
        "texto": "somente as afirmativas I e II estão corretas."
      },
      {
        "letra": "C",
        "texto": "somente as afirmativas I e III estão corretas."
      },
      {
        "letra": "D",
        "texto": "somente as afirmativas II e III estão corretas."
      },
      {
        "letra": "E",
        "texto": "somente as afirmativas I e IV estão corretas."
      }
    ],
    "gabarito": "D",
    "explicacao": "Em sistemas distribuídos assíncronos: não há medida de tempo global (I falsa); a comunicação é baseada em passagem de mensagens (II verdadeira); é possível simular memória compartilhada distribuída (DSM) por software (III verdadeira); e o multicast entrega a um grupo específico de nós, e não a todos os nós do sistema (IV falsa). Portanto, II e III estão corretas.",
    "fonte": "poscomp/2007/01_prova.pdf"
  },
  {
    "id": 6,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2011 · Questão 68",
    "exame": "POSCOMP",
    "ano": 2011,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Qual dos parâmetros a seguir tem maior impacto sobre o desempenho de algoritmos distribuídos?",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "O volume total de dados transferidos."
      },
      {
        "letra": "B",
        "texto": "A transparência de dados."
      },
      {
        "letra": "C",
        "texto": "A transparência de execução."
      },
      {
        "letra": "D",
        "texto": "A política de escalonamento de tarefas em cada nó do sistema."
      },
      {
        "letra": "E",
        "texto": "O número de mensagens trocadas."
      }
    ],
    "gabarito": "E",
    "explicacao": "Em algoritmos distribuídos, o número de mensagens trocadas é o parâmetro de maior impacto sobre o desempenho, pois a latência de rede e o custo de comunicação entre nós superam amplamente o tempo de processamento local da CPU.",
    "fonte": "poscomp/2011/01_prova.pdf"
  },
  {
    "id": 7,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2015 · Questão 64",
    "exame": "POSCOMP",
    "ano": 2015,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Um dos objetivos do projeto de um Sistema Distribuído é fornecer transparência, ocultando aspectos distribuídos dos usuários do sistema. Um sistema transparente proporciona um ambiente em que os seus componentes apresentam-se logicamente centralizados, mesmo fisicamente separados. Entre os vários tipos de transparência que os sistemas distribuídos podem fornecer, o ocultamento do fato de que há várias cópias de um recurso disponíveis no sistema é conhecido como",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "transparência de acesso."
      },
      {
        "letra": "B",
        "texto": "transparência de transação."
      },
      {
        "letra": "C",
        "texto": "transparência de replicação."
      },
      {
        "letra": "D",
        "texto": "transparência de concorrência"
      },
      {
        "letra": "E",
        "texto": "transparência de migração."
      }
    ],
    "gabarito": "C",
    "explicacao": "A transparência de replicação oculta dos usuários e aplicações o fato de que existem múltiplas cópias do mesmo recurso distribuídas na rede para fins de desempenho, confiabilidade ou disponibilidade.",
    "fonte": "poscomp/2015/01_prova.pdf"
  },
  {
    "id": 8,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "POSCOMP 2019 · Questão 62",
    "exame": "POSCOMP",
    "ano": 2019,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Sobre transparência em sistemas distribuídos, é correto afirmar que:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Transparência de concorrência trata de ocultar diferenças em representações de dados e do modo como os recursos podem ser acessados pelos usuários."
      },
      {
        "letra": "B",
        "texto": "Transparência de migração é a situação na qual recursos podem ser relocados enquanto estão sendo acessados, sem que o usuário ou a aplicação percebam."
      },
      {
        "letra": "C",
        "texto": "Transparência de replicação oculta o fato de que existem várias cópias do recurso."
      },
      {
        "letra": "D",
        "texto": "Na transparência de relocação, recursos podem ser movimentados sem afetar o modo como podem ser acessados."
      },
      {
        "letra": "E",
        "texto": "Transparência de acesso refere-se ao fato de que os usuários não podem dizer qual é a localização física de um recurso no sistema."
      }
    ],
    "gabarito": "C",
    "explicacao": "A transparência de realocação (relocation transparency) garante que um recurso pode ser movido entre nós enquanto está sendo utilizado ativamente por clientes sem que estes percebam interrupção no acesso.",
    "fonte": "poscomp/2019/01_prova.pdf"
  },
  {
    "id": 9,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "ENADE 2017 · Tecnologia em Análise e Desenv. de Sistemas · Q18",
    "exame": "ENADE",
    "ano": 2017,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "As redes de computadores estão por toda a parte. A internet é uma delas, assim como as várias redes das quais ela é composta, que compartilham recursos por meio de Sistemas Distribuídos. Como o número de dispositivos tem crescido exponencialmente, em vez de paralelizar tarefas em várias máquinas, tornou-se cada vez mais importante empregar sistemas distribuídos, comunicando e coordenando dispositivos e, assim, contribuindo para o cotidiano de empresas, governos e demais instituições.\n\n*(COULOURIS, G. et al. Sistemas Distribuídos: conceitos e projeto, 5. ed. Porto Alegre: Bookman, 2013, adaptado.)*\n\nNesse contexto, assinale a opção que apresenta exemplos atuais de sistemas distribuídos.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Pesquisa na *web*, jogos *on-line*, *E-Commerce* e o banco de dados das agências bancárias."
      },
      {
        "letra": "B",
        "texto": "Jogos *on-line*, *E-Commerce*, pesquisa no *Windows* e *e-mails*."
      },
      {
        "letra": "C",
        "texto": "*E-Commerce*, jogos em mídia física, pesquisa no *Windows* e redes sociais."
      },
      {
        "letra": "D",
        "texto": "Pesquisa na *web*, jogos em mídia física, *E-Commerce* e *e-mails*."
      },
      {
        "letra": "E",
        "texto": "Pesquisa no *Windows*, pesquisa na *web*, jogos *on-line* e o banco de dados das agências bancárias."
      }
    ],
    "gabarito": "A",
    "explicacao": "As afirmativas I e II estão corretas: sistemas distribuídos modernos conectam computadores heterogêneos dispersos em redes públicas e privadas para compartilhar recursos de processamento e dados sob uma visão unificada.",
    "fonte": "provas/41_TEC_ANA_DES_SIS_BAIXA.pdf (p. 23)"
  },
  {
    "id": 10,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "ENADE 2021 · Ciência da Computação (Bacharelado) · Q35",
    "exame": "ENADE",
    "ano": 2021,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Um sistema distribuído é aquele no qual os componentes de hardware ou software, localizados em computadores interligados em rede, comunicam-se e coordenam suas ações apenas enviando mensagens entre si.\n\n*(COULOURIS, G. et al. Sistemas distribuídos: conceitos e projeto. 5. ed., Porto Alegre: Bookman, 2013, adaptado.)*\n\nCom base na definição apresentada e nos conceitos básicos de sistemas distribuídos, assinale a opção correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "A existência de um relógio físico local sincronizado com um relógio global é o que permite aos usuários de um sistema distribuído trocarem mensagens de forma coordenada."
      },
      {
        "letra": "B",
        "texto": "A falha de um componente em um sistema distribuído *peer-to-peer* causa a interrupção de todos os demais componentes até o seu retorno."
      },
      {
        "letra": "C",
        "texto": "O compartilhamento dos recursos distribuídos entre computadores interligados por uma rede é possível desde que os dispositivos sejam homogêneos em termos de hardware e software."
      },
      {
        "letra": "D",
        "texto": "A adição de novos dispositivos em um sistema distribuído para atender a uma demanda temporária ou crescente está ligada à característica de escalabilidade do sistema."
      },
      {
        "letra": "E",
        "texto": "A possibilidade de vários clientes acessarem de forma concorrente um mesmo recurso compartilhado em um servidor é resultado do alto nível de transparência do sistema."
      }
    ],
    "gabarito": "D",
    "explicacao": "As afirmações I e IV são verdadeiras: um sistema distribuído mascara a heterogeneidade das plataformas através de camadas de middleware e provê alta disponibilidade por replicação e redundância de nós.",
    "fonte": "provas/2021_PV_bacharelado_ciencia_computacao.pdf"
  },
  {
    "id": 11,
    "tema_id": 1,
    "tema": "1. Conceitos, características e projeto de sistemas distribuídos",
    "titulo": "ENADE 2023 · Engenharia da Computação · Q38",
    "exame": "ENADE",
    "ano": 2023,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Os sistemas distribuídos consistem em múltiplos componentes de software que se comunicam e que cooperam entre si para realizar tarefas complexas. Um padrão arquitetural comumente utilizado em sistemas distribuídos é o de microsserviços, o qual divide o sistema em componentes independentes e escaláveis, cada um executando sua própria funcionalidade específica. Essa abordagem facilita a manutenção, o teste e a escalabilidade do sistema como um todo.\n\nEm relação a esse tema, qual dos seguintes benefícios é associado à arquitetura de microsserviços em sistemas distribuídos?",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Capacidade de escalabilidade."
      },
      {
        "letra": "B",
        "texto": "Garantia de consistência de dados."
      },
      {
        "letra": "C",
        "texto": "Melhor desempenho de processamento."
      },
      {
        "letra": "D",
        "texto": "Menor consumo de recursos de hardware."
      },
      {
        "letra": "E",
        "texto": "Redução da complexidade de comunicação entre os componentes."
      }
    ],
    "gabarito": "A",
    "explicacao": "A asserção I é verdadeira (sistemas distribuídos exigem protocolos de coordenação robustos para garantir integridade e coerência) e a asserção II é uma justificativa correta (pois os nós autônomos falham de forma independente e não dispõem de estado compartilhado em memória).",
    "fonte": "provas/2023_PV_engenharia_da_computacao.pdf"
  },
  {
    "id": 12,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "POSCOMP 2003 · Questão 64",
    "exame": "POSCOMP",
    "ano": 2003,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Em relação ao paradigma de programação cliente-servidor. Qual das afirmativas abaixo é FALSA?",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Um aplicativo servidor inicia ativamente o contato com clientes arbitrários."
      },
      {
        "letra": "B",
        "texto": "Um aplicativo servidor aceita contato de clientes arbitrários, mas oferece um único serviço."
      },
      {
        "letra": "C",
        "texto": "Um aplicativo cliente é um programa arbitrário que se torna temporariamente um cliente quando for necessário o acesso remoto a um serviço, mas também executa processamento local."
      },
      {
        "letra": "D",
        "texto": "Um aplicativo cliente pode acessar múltiplos serviços quando necessário."
      },
      {
        "letra": "E",
        "texto": "Um aplicativo servidor é um programa de propósito especial dedicado a fornecer um serviço, mas pode tratar de múltiplos clientes remotos ao mesmo tempo."
      }
    ],
    "gabarito": "A",
    "explicacao": "A afirmativa A é FALSA (e portanto o gabarito) porque no paradigma cliente-servidor, clientes e servidores são tipicamente desacoplados e operam em máquinas e sistemas operacionais totalmente diferentes, comunicando-se por protocolos de rede padrão.",
    "fonte": "poscomp/2003/03_tec.pdf"
  },
  {
    "id": 13,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "POSCOMP 2009 · Questão 54",
    "exame": "POSCOMP",
    "ano": 2009,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Em relação à arquitetura cliente/servidor, usada na implementação de sistemas distribuídos, analise as seguintes afirmativas:\n\n- I. A arquitetura cliente/servidor define um modelo de interação entre processos clientes e servidores que resolve o problema do rendezvous: clientes iniciam a comunicação e servidores esperam por requisições.\n- II. Em servidores sem estado (informações de estado não são mantidas entre o processamento de requisições), o significado de uma mensagem do cliente não deve depender da sequência de mensagens anteriores.\n- III. Um programa cliente individual opera como um programa convencional, ele não precisa gerenciar concorrência explicitamente na comunicação com o servidor.\n\nAssinale a alternativa CORRETA:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Apenas a afirmativa I é verdadeira"
      },
      {
        "letra": "B",
        "texto": "Apenas a afirmativa II é verdadeira"
      },
      {
        "letra": "C",
        "texto": "Apenas a afirmativa III é verdadeira"
      },
      {
        "letra": "D",
        "texto": "Apenas as afirmativas I e II são verdadeiras"
      },
      {
        "letra": "E",
        "texto": "Todas as afirmativas são verdadeiras"
      }
    ],
    "gabarito": "E",
    "explicacao": "Na arquitetura cliente-servidor com cliente pesado (fat client), o cliente executa a interface com o usuário e a lógica de processamento da aplicação, utilizando o servidor primariamente para persistência de dados em banco de dados.",
    "fonte": "poscomp/2009/01_prova.pdf"
  },
  {
    "id": 14,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "POSCOMP 2012 · Questão 63",
    "exame": "POSCOMP",
    "ano": 2012,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Sistemas peer-to-peer são uma aplicação de sistemas distribuídos, em que usuários compartilham (transferem) arquivos remotos de forma bastante transparente. Um desses sistemas é o BitTorrent, que faz uso de computadores distribuídos na internet para troca de arquivos. Em particular, este faz uso de uma política chamada tit-for-tat para incentivar o compartilhamento de arquivos (em vez de simples cópias sem retribuição), em que se dá mais prioridade para download aos clientes que estejam também gerando uploads. Além de melhorar o compartilhamento, outra vantagem do BitTorrent é",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "dificultar a identificação de padrões de transferência de arquivos ao misturar fluxos em várias direções."
      },
      {
        "letra": "B",
        "texto": "permitir o download de arquivos de maior tamanho."
      },
      {
        "letra": "C",
        "texto": "reduzir a possibilidade de se perder a conexão com o cliente."
      },
      {
        "letra": "D",
        "texto": "reduzir a quantidade de peers necessários no sistema."
      },
      {
        "letra": "E",
        "texto": "fazer melhor uso da banda de passagem."
      }
    ],
    "gabarito": "E",
    "explicacao": "Em sistemas Peer-to-Peer (P2P), não existe hierarquia rígida: cada nó participante (peer) atua simultaneamente como cliente (requisitando dados) e como servidor (fornecendo dados a outros nós).",
    "fonte": "poscomp/2012/01_prova.pdf"
  },
  {
    "id": 15,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "POSCOMP 2014 · Questão 64",
    "exame": "POSCOMP",
    "ano": 2014,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A correta utilização de processos e threads é fundamental para garantir o desempenho e a transparência de sistemas distribuídos. Sobre esse tema, considere as afirmativas a seguir.\n\n- I. A sobreposição de threads em um processo é o principal recurso para obtenção de alto grau de transparência de distribuição em redes com longos tempos de propagação de mensagens.\n- II. A desvantagem de se estruturar um programa para utilizar múltiplas threads é que ele ficará dependente de sistemas multiprocessadores.\n- III. O modelo de threads implementado pelo sistema operacional deve ser aquele em que o gerenciamento de threads fica inteiramente no espaço de cada processo para evitar trocas de contexto entre processos e o núcleo (kernel) no chaveamento de threads.\n- IV. Servidores multithreaded têm melhor desempenho se estruturados com ao menos uma thread despachante e várias threads operárias para recebimento e processamento de requisições.\n\nAssinale a alternativa correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Somente as afirmativas I e II são corretas."
      },
      {
        "letra": "B",
        "texto": "Somente as afirmativas I e IV são corretas."
      },
      {
        "letra": "C",
        "texto": "Somente as afirmativas III e IV são corretas."
      },
      {
        "letra": "D",
        "texto": "Somente as afirmativas I, II e III são corretas."
      },
      {
        "letra": "E",
        "texto": "Somente as afirmativas II, III e IV são corretas."
      }
    ],
    "gabarito": "B",
    "explicacao": "Servidores concorrentes multithreaded evitam que uma operação bloqueante de E/S de rede ou disco executada para atender um cliente congele todo o processo do servidor, permitindo que outros threads continuem atendendo requisições simultaneamente.",
    "fonte": "poscomp/2014/01_prova.pdf"
  },
  {
    "id": 16,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "POSCOMP 2019 · Questão 67",
    "exame": "POSCOMP",
    "ano": 2019,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Processos, em um sistema distribuído, são divididos em dois grupos, com possível sobreposição. Um servidor é um processo que implementa um serviço específico. Um cliente é um processo que requisita um serviço de um servidor enviando-lhe uma requisição e, na sequência, esperando pela resposta do servidor. Esse é um exemplo de arquitetura:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Multidividida."
      },
      {
        "letra": "B",
        "texto": "Peer-to-peer estruturada."
      },
      {
        "letra": "C",
        "texto": "Descentralizada."
      },
      {
        "letra": "D",
        "texto": "Peer-to-peer não estruturada."
      },
      {
        "letra": "E",
        "texto": "Centralizada."
      }
    ],
    "gabarito": "E",
    "explicacao": "Em sistemas distribuídos, servidores iterativos atendem uma única requisição por vez até sua conclusão, enquanto servidores concorrentes despacham cada requisição para um thread ou processo trabalhador separado.",
    "fonte": "poscomp/2019/01_prova.pdf"
  },
  {
    "id": 17,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "ENADE 2014 · Tecnologia em Redes de Computadores · Q20",
    "exame": "ENADE",
    "ano": 2014,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Os Sistemas Operacionais de Redes (SOR) são uma extensão dos Sistemas Operacionais Locais (SOL), voltados para tornar transparente o uso dos recursos compartilhados, com funções de gerenciamento do acesso ao sistema de comunicação e às estações remotas para utilização de recursos de *hardware* e *software* remotos.\n\nCom relação aos SOR, avalie as afirmações a seguir.\n\nI. A extensão do sistema operacional das estações é feita por meio de um módulo redirecionador que funciona interceptando as chamadas das aplicações ao sistema operacional local, desviando aquelas que dizem respeito a recursos remotos para o módulo do sistema operacional de rede, que providencia o acesso ao dispositivo remoto.\n\nII. A interface entre as aplicações e o sistema operacional baseia-se em interações solicitação/resposta. A aplicação solicita um serviço, por meio de uma chamada ao sistema operacional que executa o serviço solicitado e responde, informando o status da operação e transferindo os dados resultantes da execução para a aplicação, quando for o caso.\n\nIII. A interação cliente-servidor constitui-se no modo básico dos sistemas operacionais de redes. As estações que disponibilizam seus recursos a outras estações devem possuir a entidade (ou módulo) servidor. As estações que permitem que suas aplicações utilizem recursos compartilhados com outras estações devem possuir a entidade (ou módulo) cliente.\n\nIV. Pode-se classificar os módulos de um SOR instalados nas estações em dois tipos: SORC (módulo cliente) e SORS (módulo servidor do sistema operacional).\n\nÉ correto o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I, apenas."
      },
      {
        "letra": "B",
        "texto": "I e II, apenas."
      },
      {
        "letra": "C",
        "texto": "III e IV, apenas."
      },
      {
        "letra": "D",
        "texto": "II, III e IV, apenas."
      },
      {
        "letra": "E",
        "texto": "I, II, III e IV."
      }
    ],
    "gabarito": "E",
    "explicacao": "Todas as afirmativas (I, II e III) são verdadeiras: Sistemas Operacionais de Redes (SOR) estendem os sistemas locais adicionando serviços e utilitários para acesso a recursos de rede mantendo a autonomia local de cada máquina.",
    "fonte": "provas/43_tecnologia_redes_computadores.pdf (p. 21)"
  },
  {
    "id": 18,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "ENADE 2014 · Sistemas de Informação · Q23",
    "exame": "ENADE",
    "ano": 2014,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Uma companhia com abrangência global decidiu implantar um novo sistema de compartilhamento de informações empresariais. Após estudos de campo, a empresa identificou alguns cenários de utilização das informações. No primeiro cenário, detectou-se que um volume massivo de dados relativos a documentos históricos, normas e regulamentos da organização eram consumidos, em escala global, exclusivamente para leitura. No segundo cenário, verificou-se que documentos eram produzidos de forma colaborativa por equipes regionais de colaboradores. Esses colaboradores, na maioria das vezes, estavam na mesma filial ou geograficamente muito próximos. O terceiro cenário envolvia apenas 10% dos documentos da empresa, acessados concorrentemente por todas as regionais do globo, tanto para leitura quanto para atualização.\n\nCom base nesses cenários e em relação às arquiteturas de *software* distribuídas coerentemente com as necessidades da empresa, avalie as afirmações a seguir.\n\nI. A utilização de arquitetura *peer-to-peer* (P2P) para disponibilizar os documentos do cenário 1 poderá reduzir o consumo da rede.\n\nII. O compartilhamento baseado no modelo cliente-servidor com *cache* no cliente pode aumentar o desempenho da edição colaborativa, sem comprometer a consistência no cenário 2.\n\nIII. A utilização de replicação baseada em cópia primária pode aumentar a escalabilidade do sistema, sem comprometer, de forma significativa, a consistência de dados no cenário 3.\n\nIV. Se o modelo cliente-servidor de compartilhamento for empregado no cenário 2, a replicação passiva (*backup* ou *mirroring*) poderá ser utilizada como mecanismo de tolerância a falhas.\n\nV. A arquitetura *peer-to-peer* baseada em rede *overlay*, tal como o DHT, pode oferecer transparência de migração para os documentos compartilhados no cenário 1.\n\nÉ correto o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "III, apenas."
      },
      {
        "letra": "B",
        "texto": "I e II, apenas."
      },
      {
        "letra": "C",
        "texto": "II, IV e V, apenas."
      },
      {
        "letra": "D",
        "texto": "I, III, IV e V, apenas."
      },
      {
        "letra": "E",
        "texto": "I, II, III, IV e V."
      }
    ],
    "gabarito": "D",
    "explicacao": "A arquitetura em três camadas (three-tier) desacopla a camada de apresentação (cliente/browser), a camada de lógica de negócios (servidor de aplicação) e a camada de dados (banco de dados), melhorando manutenibilidade e escalabilidade.",
    "fonte": "provas/39_sistemas_informacao.pdf (p. 21)"
  },
  {
    "id": 19,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "ENADE 2021 · Tecnologia em Redes de Computadores · Q22",
    "exame": "ENADE",
    "ano": 2021,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Em uma arquitetura cliente-servidor, para que uma aplicação ou serviço seja acessado, é necessário que uma comunicação seja estabelecida entre aquele que necessita (cliente) e aquele que disponibiliza o recurso (servidor).\n\nConsiderando o texto apresentado, avalie as asserções a seguir e a relação proposta entre elas.\n\nI. Quando um programador desenvolve uma aplicação ou serviço de rede, é necessário utilizar um *socket* para unir o endereço IP da interface de rede com uma porta específica.\n\n**PORQUE**\n\nII. O *socket* possibilita ao sistema operacional identificar qual porta a aplicação está respondendo, permitindo que o fluxo de dados seja entregue corretamente.\n\nA respeito dessas asserções, assinale a opção correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
      },
      {
        "letra": "B",
        "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
      },
      {
        "letra": "C",
        "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
      },
      {
        "letra": "D",
        "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
      },
      {
        "letra": "E",
        "texto": "As asserções I e II são proposições falsas."
      }
    ],
    "gabarito": "A",
    "explicacao": "Para que uma aplicação cliente acesse um serviço em rede pelo nome de domínio amigável, o Sistema de Nomes de Domínio (DNS) é o serviço essencial responsável pela resolução do nome em endereço IP.",
    "fonte": "provas/2021_PV_tecnologia_redes_computadores.pdf (p. 29)"
  },
  {
    "id": 20,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "ENADE 2017 · Sistemas de Informação · Q22 · _correlata_",
    "exame": "ENADE",
    "ano": 2017,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A tendência atual de desenvolver aplicações que possam ser utilizadas em nuvem otimiza o desempenho de máquinas locais, munidas de poucos recursos computacionais, em uma rede e garante a possibilidade desses computadores utilizarem outros recursos computacionais de maior desempenho, bem como a inserção de novos *hosts* neste ambiente computacional, sem comprometimento do sistema como um todo.\n\nEsse cenário pressupõe a utilização de sistema operacional com",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "arquitetura monolítica."
      },
      {
        "letra": "B",
        "texto": "arquiteturas em camadas."
      },
      {
        "letra": "C",
        "texto": "arquitetura monocamadas."
      },
      {
        "letra": "D",
        "texto": "arquiteturas cliente-servidor."
      },
      {
        "letra": "E",
        "texto": "arquiteturas de máquinas virtuais."
      }
    ],
    "gabarito": "D",
    "explicacao": "A computação em nuvem viabiliza elasticidade e escalabilidade sob demanda, permitindo provisionar nós de computação e balanceamento de carga automaticamente conforme o aumento do tráfego.",
    "fonte": "provas/40_SIS_INFORMACAO_BAIXA.pdf (p. 27)"
  },
  {
    "id": 21,
    "tema_id": 2,
    "tema": "2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads",
    "titulo": "ENADE 2014 · Tecnologia em Análise e Desenv. de Sistemas · Q18 · _correlata_",
    "exame": "ENADE",
    "ano": 2014,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Nos anos 70, os sistemas executavam em *mainframes* com aplicativos escritos em linguagens estruturadas e com todas as funcionalidades em um único módulo, com grande quantidade de linhas de código. Acessos a bancos de dados não relacionais, regras de negócios e tratamento de telas para terminais \"burros\" ficavam no mesmo programa. Posteriormente, uma importante mudança ocorreu: a substituição dos terminais \"burros\" por microcomputadores, permitindo que todo o tratamento da interface, e de algumas regras de negócios, passassem a ser feitas nas estações clientes. Surgiram as aplicações cliente-servidor. A partir dos anos 90, até os dias atuais, as mudanças foram mais radicais, os bancos de dados passaram a ser relacionais e distribuídos. As linguagens passaram a ser orientadas a objetos, cuja modelagem encapsula dados e oferece funcionalidades através de métodos. A interface passou a ser *web*. Vive-se a era das aplicações em três camadas.\n\nConsiderando a evolução da arquitetura de *software* de sistemas de informação, conforme citado no texto acima, avalie as seguintes afirmações.\n\nI. A separação dos sistemas em três camadas lógicas torna os sistemas mais complexos, requerendo pessoal mais especializado.\n\nII. A separação dos sistemas em três camadas lógicas torna os sistemas mais flexíveis, permitindo que as partes possam ser alteradas de forma independente.\n\nIII. A separação dos sistemas em três camadas lógicas aumentou o acoplamento, dificultando a manutenção.\n\nÉ correto o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "II, apenas."
      },
      {
        "letra": "B",
        "texto": "III, apenas."
      },
      {
        "letra": "C",
        "texto": "I e II, apenas."
      },
      {
        "letra": "D",
        "texto": "I e III, apenas."
      },
      {
        "letra": "E",
        "texto": "I, II e III."
      }
    ],
    "gabarito": "C",
    "explicacao": "A evolução histórica dos mainframes centralizados para a computação cliente-servidor permitiu a descentralização do processamento e a distribuição de interfaces gráficas interativas nas estações de trabalho dos usuários.",
    "fonte": "provas/40_tecnologia_analise_desenv_sistemas.pdf (p. 18)"
  },
  {
    "id": 22,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2005 · Questão 68",
    "exame": "POSCOMP",
    "ano": 2005,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Segundo o W3C (World Wide Web Consortium), um Serviço Web é um sistema de software projetado para permitir a interação entre máquinas numa rede. Selecione a afirmação incorreta sobre Serviços Web:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "A interface do Serviço Web é descrita em WSDL."
      },
      {
        "letra": "B",
        "texto": "A representação dos dados é feita em XML."
      },
      {
        "letra": "C",
        "texto": "O transporte das mensagens é feito tipicamente pelo HTTP."
      },
      {
        "letra": "D",
        "texto": "Pode-se compor Serviços Web através de orquestração de serviços."
      },
      {
        "letra": "E",
        "texto": "Cliente e Servidor devem ser escritos na mesma linguagem de programação."
      }
    ],
    "gabarito": "E",
    "explicacao": "A linguagem WSDL (Web Services Description Language), baseada em XML, é o padrão estabelecido pelo W3C para descrever formalmente a interface pública, métodos, tipos de dados e protocolos de comunicação de um Web Service.",
    "fonte": "poscomp/2005/01_prova.pdf"
  },
  {
    "id": 23,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2006 · Questão 68",
    "exame": "POSCOMP",
    "ano": 2006,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A comunicação entre processos em um sistema distribuído pode ser realizada por um mecanismo conhecido como RPC - chamada de procedimento remoto. Sobre este mecanismo, assinale a opção correta abaixo:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Processos comunicantes compartilham o mesmo espaço de endereçamento."
      },
      {
        "letra": "B",
        "texto": "Os stubs cliente e servidor são responsáveis pela conversão de formato dos parâmetros de entrada e saída, caso haja necessidade."
      },
      {
        "letra": "C",
        "texto": "A geração dos stubs é comumente realizada por compilação a partir de uma especificação de interface realizada em uma linguagem de execução de interface (IEL)."
      },
      {
        "letra": "D",
        "texto": "O mecanismo faz uso de uma porta fixa, de número 8080, para comunicar diferentes processos e serviços entre computadores de um sistema distribuído."
      },
      {
        "letra": "E",
        "texto": "A falha de um cliente RPC gera uma chamada dita orfã no servidor que neste caso repassa sempre os resultados do procedimento remoto para um proxy de retorno especificado na chamada"
      }
    ],
    "gabarito": "B",
    "explicacao": "Sockets constituem a primitiva fundamental de comunicação de rede nos sistemas operacionais, fornecendo pontos de extremidade (endpoints) identificados pela combinação de endereço IP e número de porta.",
    "fonte": "poscomp/2006/01_prova.pdf"
  },
  {
    "id": 24,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2008 · Questão 14",
    "exame": "POSCOMP",
    "ano": 2008,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Sobre a comunicação entre processos distribuídos, é CORRETO afirmar",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "que, no modo síncrono de envio de mensagem, o processo que recebe a mensagem terá sua execução desviada por uma interrupção de sistema operacional para tratar uma mensagem recebida."
      },
      {
        "letra": "B",
        "texto": "que um processo tem no máximo uma porta (port) para receber as mensagens dos seus interlocutores."
      },
      {
        "letra": "C",
        "texto": "que multiportas são estruturas do tipo portas multicast que permitem a comunicação N x M entre processos."
      },
      {
        "letra": "D",
        "texto": "que, nos sockets do tipo datagrama, o endereço do socket do processo correspondente acompanha cada envio de mensagem como um parâmetro da primitiva sendto()."
      },
      {
        "letra": "E",
        "texto": "que, nos sockets do tipo datagrama, a primitiva sNew() é usada para aceitar a conexão solicitada por um processo que solicita comunicação."
      }
    ],
    "gabarito": "D",
    "explicacao": "Em sistemas distribuídos, a comunicação síncrona requer que o remetente permaneça bloqueado aguardando confirmação ou resposta do destinatário, enquanto a assíncrona permite que o remetente continue sua execução imediatamente após o envio.",
    "fonte": "poscomp/2008/01_prova.pdf"
  },
  {
    "id": 25,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2010 · Questão 59",
    "exame": "POSCOMP",
    "ano": 2010,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "O mecanismo de RPC é bastante utilizado para a programação em sistemas distribuídos. Implementações mais eficientes desse mecanismo permitem a realização de RPC assíncrono, em que",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "o processo que faz a chamada pode fazer uso de redes assíncronas."
      },
      {
        "letra": "B",
        "texto": "o processo que recebe a chamada pode responder várias chamadas simultaneamente."
      },
      {
        "letra": "C",
        "texto": "o processo que recebe a chamada responde chamadas assíncronas com máxima prioridade."
      },
      {
        "letra": "D",
        "texto": "o processo que faz a chamada pode continuar executando após receber confirmação da transmissão."
      },
      {
        "letra": "E",
        "texto": "os dois processos bloqueiam os demais, a fim de ter acesso exclusivo ao meio de comunicação."
      }
    ],
    "gabarito": "D",
    "explicacao": "Na implementação de RPC, os stubs gerados no cliente empacotam os parâmetros da função em mensagens de rede (marshalling) e os stubs do servidor os desempacotam (unmarshalling), ocultando a complexidade da rede.",
    "fonte": "poscomp/2010/01_prova.pdf"
  },
  {
    "id": 26,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2012 · Questão 61",
    "exame": "POSCOMP",
    "ano": 2012,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "O uso de RPC é considerado um marco no desenvolvimento de sistemas distribuídos por possibilitar que a programação desses sistemas seja semelhante à programação de sistemas convencionais.\nAssinale a alternativa que apresenta, corretamente, as características essenciais para se obter esse status.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Adoção de linguagens orientadas a objetos."
      },
      {
        "letra": "B",
        "texto": "Adoção de linguagens voltadas à internet."
      },
      {
        "letra": "C",
        "texto": "Uso de protocolos eficientes de conexão."
      },
      {
        "letra": "D",
        "texto": "Programação através de interfaces."
      },
      {
        "letra": "E",
        "texto": "Uso de DSM (Distributed Shared Memory )."
      }
    ],
    "gabarito": "D",
    "explicacao": "O RPC (Remote Procedure Call) fornece transparência de acesso, permitindo aos desenvolvedores invocar procedimentos em computadores remotos utilizando a mesma sintaxe semântica de chamadas de funções locais.",
    "fonte": "poscomp/2012/01_prova.pdf"
  },
  {
    "id": 27,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2014 · Questão 67",
    "exame": "POSCOMP",
    "ano": 2014,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A comunicação entre processos de sistemas distribuídos não pode ser por memória compartilhada, somente por trocas de mensagens de baixo nível. Por esse motivo, foram desenvolvidas várias técnicas que permitem expressar a comunicação de formas intermediárias, entre elas a chamada de procedimento remoto (RPC). Em relação à RPC, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.\n\n- (   ) A Interface Definition Language (IDL) é utilizada para declarar e definir os algoritmos e suas variáveis, que estão disponíveis em um servidor para os clientes poderem utilizar.\n- (   ) Máquinas baseadas em processadores little endian não podem realizar RPC com máquinas baseadas em processadores big endian.\n- (   ) O procedimento mínimo de execução de uma RPC envolve o envio dos parâmetros de chamada e das instruções de máquina a serem executadas.\n- (   ) É uma técnica para permitir a comunicação entre dois processos localizados em máquinas distintas, ao mesmo tempo que esconde do programador a troca de mensagens.\n- (   ) Parâmetros passados como valor devem ser copiados e, quando muito, codificados. Já a passagem de parâmetros por referência não tem uma solução geral, precisam ser tratados caso a caso.\n\nAssinale a alternativa que contém, de cima para baixo, a sequência correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "V, V, V, F, F."
      },
      {
        "letra": "B",
        "texto": "V, V, F, V, F."
      },
      {
        "letra": "C",
        "texto": "V, F, F, F, V."
      },
      {
        "letra": "D",
        "texto": "F, V, V, V, F."
      },
      {
        "letra": "E",
        "texto": "F, F, F, V, V."
      }
    ],
    "gabarito": "E",
    "explicacao": "A sequência correta é F, F, F, V, V: IDL define assinaturas de métodos e não implementação de algoritmos (F); RPC converte dados entre big e little-endian (F); RPC não envia código de máquina, apenas parâmetros e ID de procedimento (F); RPC oculta a troca de mensagens (V); passagem por referência requer emulação por cópia ou referências de objetos (V).",
    "fonte": "poscomp/2014/01_prova.pdf"
  },
  {
    "id": 28,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2017 · Questão 62",
    "exame": "POSCOMP",
    "ano": 2017,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Qual é o estilo de comunicação indireta no qual publicadores divulgam eventos estruturados para um serviço de eventos e assinantes expressam interesse em eventos específicos por meio de assinaturas?",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Comunicação em grupo."
      },
      {
        "letra": "B",
        "texto": "Sistema publicar-assinar."
      },
      {
        "letra": "C",
        "texto": "Filas de mensagens."
      },
      {
        "letra": "D",
        "texto": "Memória compartilhada distribuída."
      },
      {
        "letra": "E",
        "texto": "Espaços de tuplas."
      }
    ],
    "gabarito": "B",
    "explicacao": "O modelo de comunicação por Publicação/Subscrição (Publish/Subscribe) desacopla publicadores e subscritores no tempo e no espaço, roteando eventos com base em tópicos ou conteúdo através de um barramento/broker de mensagens.",
    "fonte": "poscomp/2017/01_prova.pdf"
  },
  {
    "id": 29,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2017 · Questão 67",
    "exame": "POSCOMP",
    "ano": 2017,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Analise as seguintes afirmações sobre comunicação entre processos em sistemas distribuídos:\n\n- I. A essência da comunicação persistente é que uma mensagem apresentada para transmissão é armazenada pelo sistema de comunicação pelo tempo que for necessário para entregá-la.\n- II. Em comunicação transiente, nenhuma facilidade de armazenamento é oferecida de modo que o receptor deve estar preparado para aceitar a mensagem quando ela for enviada.\n- III. Em comunicação síncrona, o remetente tem permissão de continuar imediatamente após a mensagem ter sido apresentada para transmissão, possivelmente antes de ela ter sido enviada.\n- IV. Em comunicação assíncrona, o remetente é bloqueado no mínimo até que uma mensagem seja recebida. Alternativamente, o remetente pode ser bloqueado até ocorrer a entrega da mensagem ou, até mesmo, até que o receptor tenha respondido.\n\nQuais estão corretas?",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Apenas I e II."
      },
      {
        "letra": "B",
        "texto": "Apenas III e IV."
      },
      {
        "letra": "C",
        "texto": "Apenas I, II e III."
      },
      {
        "letra": "D",
        "texto": "Apenas II, III e IV."
      },
      {
        "letra": "E",
        "texto": "I, II, III e IV."
      }
    ],
    "gabarito": "A",
    "explicacao": "As afirmativas I e II são verdadeiras: primitivas de sockets e passagem de mensagens constituem os blocos básicos para a construção de mecanismos de alto nível como RPC e middleware orientado a mensagens (MOM).",
    "fonte": "poscomp/2017/01_prova.pdf"
  },
  {
    "id": 30,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "POSCOMP 2018 · Questão 64",
    "exame": "POSCOMP",
    "ano": 2018,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Quando um processo na máquina A chama um procedimento na máquina B, o processo chamador em A é suspenso, e a execução do procedimento chamado ocorre em B. Informações podem ser transportadas do chamador para quem foi chamado nos parâmetros e podem voltar no resultado do procedimento. Absolutamente nada da troca de mensagens é visível para o programador. Esse método é conhecido como:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Chamada de Procedimento Remoto (RPC)."
      },
      {
        "letra": "B",
        "texto": "Protocolo Universal de Datagramas (UDP)."
      },
      {
        "letra": "C",
        "texto": "Protocolo de Transporte em Tempo Real (RTP)."
      },
      {
        "letra": "D",
        "texto": "Middleware Orientado a Mensagem (MOM)."
      },
      {
        "letra": "E",
        "texto": "Linguagem de Programação de Interface (IDL)."
      }
    ],
    "gabarito": "A",
    "explicacao": "Na chamada de procedimento remoto síncrona, o processo cliente na máquina A é colocado em estado de espera (bloqueado) assim que despacha a requisição, retomando sua execução apenas após receber o pacote de resposta da máquina B.",
    "fonte": "poscomp/2018/01_prova.pdf"
  },
  {
    "id": 31,
    "tema_id": 3,
    "tema": "3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web",
    "titulo": "ENADE 2023 · Engenharia da Computação · Q35",
    "exame": "ENADE",
    "ano": 2023,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "O TCP (*Transmission Control Protocol*) e o UDP (*User Datagram Protocol*) são opções frequentemente usadas em sistemas distribuídos para realizar transferência de dados entre máquinas, ainda que não sejam os únicos protocolos que funcionam com base no protocolo IP (*Internet Protocol*).\n\nCom relação a esses protocolos, avalie as afirmações a seguir.\n\nI. O protocolo TCP é usado para implementar o mecanismo de *sockets* utilizado em sistemas distribuídos, como mecanismo de troca de mensagens confiável.\n\nII. O protocolo UDP é mais eficiente do que o protocolo TCP quanto ao tempo de envio de dados entre os nós de um sistema distribuído, pois gera menor *overhead*.\n\nIII. O protocolo UDP é uma escolha adequada para fluxos de dados em tempo real, especialmente daqueles dados que admitem perda ou corrupção de parte de seu conteúdo, tais como vídeos ou voz.\n\nÉ correto o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "II, apenas."
      },
      {
        "letra": "B",
        "texto": "III, apenas."
      },
      {
        "letra": "C",
        "texto": "I e II, apenas."
      },
      {
        "letra": "D",
        "texto": "I e III, apenas."
      },
      {
        "letra": "E",
        "texto": "I, II e III."
      }
    ],
    "gabarito": "E",
    "explicacao": "O protocolo TCP oferece transporte orientado a conexão confiável com garantia de entrega em ordem e controle de fluxo, enquanto o UDP é não orientado a conexão, ideal para dados de tempo real onde baixa latência é prioridade.",
    "fonte": "provas/2023_PV_engenharia_da_computacao.pdf"
  },
  {
    "id": 32,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2003 · Questão 63",
    "exame": "POSCOMP",
    "ano": 2003,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Algoritmos distribuídos podem usar passagem de \"token\"por um anel lógico para implementar exclusão mútua ou ordenação global de mensagens. Nesses algoritmos apenas o processo que possui o \"token\"tem a permissão de usar um recurso compartilhado ou numerar mensagens, por exemplo. Considerando o conceito acima podemos afirmar que:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "a abordagem deve tratar no mínimo dois tipos de defeitos: perda do \"token\"e colapso de processos"
      },
      {
        "letra": "B",
        "texto": "para usar essa a abordagem os computadores precisam estar conectados em uma rede com topologia em anel"
      },
      {
        "letra": "C",
        "texto": "nessa abordagem é impossível evitar a geração espontânea de vários \"tokens\"mesmo em sistemas livre de falhas"
      },
      {
        "letra": "D",
        "texto": "a abordagem é adequada apenas para sistemas onde possa ser controlado o tempo que cada computador permanece com o \"token\""
      },
      {
        "letra": "E",
        "texto": "a abordagem é pouco robusta pois a perda do \"token\"por um processo provoca o bloqueio do algoritmo distribuído que a usa"
      }
    ],
    "gabarito": "A",
    "explicacao": "Algoritmos de exclusão mútua baseados em anel lógico passam continuamente um token sequencialmente entre os nós; apenas o detentor do token pode acessar a região crítica, impedindo starvation e garantindo acesso justo.",
    "fonte": "poscomp/2003/03_tec.pdf"
  },
  {
    "id": 33,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2005 · Questão 69",
    "exame": "POSCOMP",
    "ano": 2005,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Considere o diagrama espaço-tempo da Figura 2; ele representa uma computação distribuída onde os eventos de cada processo são rotulados por relógios lógicos que atendem à definição de relógio lógico realizada por Leslie Lamport. Cada processo implementa o seu relógio lógico e usa um incremento diferente do usado pelos demais; os incrementos utilizados por P0, P1 e P2 podem ser determinados a partir dos rótulos dos eventos rotulados que aparecem na Figura 2. Qual das alternativas apresenta os tempos lógicos para os eventos não rotulados de cada processo?\n\n*(A Figura 2 — diagrama espaço-tempo com os processos P0, P1 e P2 — está no PDF original: `poscomp/2005/01_prova.pdf`.)*",
    "svg_diagrama": "<div class=\"diagram-wrapper\">\n  <div class=\"diagram-caption\"><strong>Figura 2 — Diagrama Espaço-Tempo (Relógios Lógicos de Lamport)</strong></div>\n  <svg viewBox=\"0 0 780 240\" xmlns=\"http://www.w3.org/2000/svg\" class=\"diagram-svg\">\n    <defs>\n      <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#2563eb\" />\n      </marker>\n    </defs>\n    <!-- Background grid/box -->\n    <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"8\" stroke=\"#e2e8f0\" stroke-width=\"1.5\" />\n    \n    <!-- Process Timelines -->\n    <!-- P0 -->\n    <text x=\"35\" y=\"55\" font-family=\"system-ui, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#1e293b\">P0</text>\n    <line x1=\"70\" y1=\"50\" x2=\"740\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"2.5\" />\n    <polygon points=\"745,50 735,45 735,55\" fill=\"#64748b\" />\n    \n    <!-- P1 -->\n    <text x=\"35\" y=\"125\" font-family=\"system-ui, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#1e293b\">P1</text>\n    <line x1=\"70\" y1=\"120\" x2=\"740\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"2.5\" />\n    <polygon points=\"745,120 735,115 735,125\" fill=\"#64748b\" />\n\n    <!-- P2 -->\n    <text x=\"35\" y=\"195\" font-family=\"system-ui, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#1e293b\">P2</text>\n    <line x1=\"70\" y1=\"190\" x2=\"740\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"2.5\" />\n    <polygon points=\"745,190 735,185 735,195\" fill=\"#64748b\" />\n\n    <!-- P0 events (d=10): 10, 20, 30, 40, 50, 60 -->\n    <circle cx=\"110\" cy=\"50\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"110\" y=\"38\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">10</text>\n    <circle cx=\"160\" cy=\"50\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"160\" y=\"38\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">20</text>\n    <circle cx=\"210\" cy=\"50\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"210\" y=\"38\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">30</text>\n    <circle cx=\"260\" cy=\"50\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"260\" y=\"38\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">40</text>\n    <circle cx=\"310\" cy=\"50\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"310\" y=\"38\" font-size=\"11\" text-anchor=\"middle\" fill=\"#475569\">50</text>\n    <circle cx=\"360\" cy=\"50\" r=\"5\" fill=\"#2563eb\" /><text x=\"360\" y=\"38\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">60 (envio)</text>\n\n    <!-- Message from P0(60) to P1(67) -->\n    <line x1=\"360\" y1=\"50\" x2=\"415\" y2=\"116\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4,3\" marker-end=\"url(#arrow)\" />\n\n    <!-- P1 events (d=7): 14, 21, 28, 35, 42 | msg recvd -> 67, 74, 81, 88 -->\n    <circle cx=\"130\" cy=\"120\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"130\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">14</text>\n    <circle cx=\"175\" cy=\"120\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"175\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">21</text>\n    <circle cx=\"220\" cy=\"120\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"220\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">28</text>\n    <circle cx=\"265\" cy=\"120\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"265\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">35</text>\n    <circle cx=\"310\" cy=\"120\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"310\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">42</text>\n    <!-- After msg: 67 -->\n    <circle cx=\"420\" cy=\"120\" r=\"5\" fill=\"#2563eb\" /><text x=\"420\" y=\"108\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">?</text>\n    <circle cx=\"480\" cy=\"120\" r=\"5\" fill=\"#2563eb\" /><text x=\"480\" y=\"108\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">? (envio)</text>\n    <circle cx=\"540\" cy=\"120\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"540\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">?</text>\n    <circle cx=\"600\" cy=\"120\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"600\" y=\"108\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">?</text>\n\n    <!-- Message from P1(?=74) to P2(?=79) -->\n    <line x1=\"480\" y1=\"120\" x2=\"545\" y2=\"186\" stroke=\"#2563eb\" stroke-width=\"2\" stroke-dasharray=\"4,3\" marker-end=\"url(#arrow)\" />\n\n    <!-- P2 events (d=5): 35, 40 | msg recvd -> 79, 84 -->\n    <circle cx=\"240\" cy=\"190\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"240\" y=\"213\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">35</text>\n    <circle cx=\"295\" cy=\"190\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"295\" y=\"213\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">40</text>\n    <circle cx=\"550\" cy=\"190\" r=\"5\" fill=\"#2563eb\" /><text x=\"550\" y=\"213\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2563eb\">?</text>\n    <circle cx=\"620\" cy=\"190\" r=\"4.5\" fill=\"#0f172a\" /><text x=\"620\" y=\"213\" font-size=\"11\" text-anchor=\"middle\" fill=\"#64748b\">?</text>\n  </svg>\n</div>",
    "alternativas": [
      {
        "letra": "A",
        "texto": "P1 (14, 21, 28, 35, 42, 49, 56, 63, 70); P2 (40, 45, 50)"
      },
      {
        "letra": "B",
        "texto": "P1 (14, 21, 28, 35, 42, 67, 74, 81, 88); P2 (40, 79, 84)"
      },
      {
        "letra": "C",
        "texto": "P1 (8, 15, 22, 29, 36, 61, 68, 75, 88); P2 (40, 69, 74)"
      },
      {
        "letra": "D",
        "texto": "P1 (8, 15, 22, 29, 36, 43, 50, 57, 64); P2 (40, 45, 50)"
      },
      {
        "letra": "E",
        "texto": "P1 (8, 15, 22, 29, 36, 49, 56, 63, 70); P2 (40, 45, 50)"
      }
    ],
    "gabarito": "B",
    "explicacao": "No diagrama de Lamport, P0 emite mensagem em t=60. P1 (incremento 7) ao receber a mensagem calcula max(42, 60) + 7 = 67, e em seguida 74, quando envia a P2. P2 (incremento 5) ao receber em t=74 calcula max(40, 74) + 5 = 79, e depois 84. A sequência de valores para P1 e P2 corresponde exatamente à alternativa B.",
    "fonte": "poscomp/2005/01_prova.pdf"
  },
  {
    "id": 34,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2006 · Questão 69",
    "exame": "POSCOMP",
    "ano": 2006,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Sobre algoritmos de exclusão mútua em sistemas distribuídos é correto afirmar que:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "O algoritmo centralizado tem como principal desvantagem o alto número de troca de mensagens."
      },
      {
        "letra": "B",
        "texto": "O algoritmo distribuído é totalmente independente da ordem dos eventos do sistema distribuído."
      },
      {
        "letra": "C",
        "texto": "A maioria simples de permissões dos participantes para entrada em região crítica é suficiente para garantir a exclusão mútua no algoritmo distribuído."
      },
      {
        "letra": "D",
        "texto": "No algoritmo do token , a exclusão mútua é garantida por uma concessão de bloqueio fornecida pelo gerente que mantém uma lista de tokens."
      },
      {
        "letra": "E",
        "texto": "Três mensagens são suficientes para fechar o ciclo de concessão, liberação e nova concessão de acesso no algoritmo do token."
      }
    ],
    "gabarito": "C",
    "explicacao": "Em algoritmos centralizados de exclusão mútua distribuída, o coordenador único é um ponto único de falha: se ele falhar, nenhum processo consegue entrar nem liberar a região crítica.",
    "fonte": "poscomp/2006/01_prova.pdf"
  },
  {
    "id": 35,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2010 · Questão 57",
    "exame": "POSCOMP",
    "ano": 2010,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "O problema de tratamento de regiões críticas é agravado em sistemas distribuídos, nos quais a não existência de um controle centralizado dificulta a exclusão mútua. No algoritmo de Ricart-Agrawala, a entrada na região crítica, quando mais de um processo quer entrar nela, é feita após o processo",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "não ter recebido requisição dos demais processos antes de fazer sua requisição."
      },
      {
        "letra": "B",
        "texto": "passar a ter o menor valor de relógio lógico entre todos os processos."
      },
      {
        "letra": "C",
        "texto": "receber autorização de entrada dos demais processos, sendo a mesma concedida quando o valor do relógio lógico de quem autoriza for maior que o de quem solicita."
      },
      {
        "letra": "D",
        "texto": "receber autorização de entrada dos demais processos, sendo a mesma concedida quando o valor do relógio lógico de quem autoriza for menor que o de quem solicita."
      },
      {
        "letra": "E",
        "texto": "receber autorização de entrada dos processos que tenham valor de relógio lógico menor."
      }
    ],
    "gabarito": "C",
    "explicacao": "O algoritmo de Ricart-Agrawala para exclusão mútua exige que o nó requisitante solicite e receba permissão de todos os outros (n-1) processos do sistema, gerando um custo total de 2*(n-1) mensagens por entrada na região crítica.",
    "fonte": "poscomp/2010/01_prova.pdf"
  },
  {
    "id": 36,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2013 · Questão 64",
    "exame": "POSCOMP",
    "ano": 2013,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Algoritmos de eleição são usados como mecanismo para recuperar a operabilidade de algum serviço dentro de um sistema distribuído. Com base nessa informação, assinale a alternativa correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "O relógio de Lamport é mais eficiente para realizar a eleição por ser baseado em relações temporais."
      },
      {
        "letra": "B",
        "texto": "Serviços providos através de controle central não necessitam de mecanismos de eleição por já determinarem o eleito."
      },
      {
        "letra": "C",
        "texto": "O algoritmo de Maekawa garante a conclusão da eleição com um número de mensagens menor do que o de Bullying."
      },
      {
        "letra": "D",
        "texto": "O algoritmo de Eleição em Anel pode ser aplicado em qualquer situação de falha."
      },
      {
        "letra": "E",
        "texto": "O algoritmo de Bullying garante a definição da eleição se o meio de comunicação for confiável e suficientemente rápido."
      }
    ],
    "gabarito": "E",
    "explicacao": "No algoritmo do Valentão (Bully Algorithm) para eleição distribuída, qualquer nó que detecta a falha do líder inicia uma eleição, e o nó ativo com o maior identificador numérico (maior ID) invariavelmente vence a eleição.",
    "fonte": "poscomp/2013/01_prova.pdf"
  },
  {
    "id": 37,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2014 · Questão 62",
    "exame": "POSCOMP",
    "ano": 2014,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A sincronização entre processos e máquinas de um sistema distribuído é requisito fundamental para o funcionamento de diversos algoritmos e aplicações. Sobre esse tema, assinale a alternativa correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Se o relógio interno de um componente está adiantado em relação aos outros, basta atrasá-lo imediatamente para que volte à sincronia e os aplicativos continuem funcionando."
      },
      {
        "letra": "B",
        "texto": "O problema de sincronização não pode ser resolvido com a troca de mensagens entre os componentes (computadores) do sistema distribuído, uma vez que o próprio deslocamento da mensagem leva tempo indeterminado e impossibilita a operação."
      },
      {
        "letra": "C",
        "texto": "Em um sistema distribuído com necessidade de sincronia, todos os componentes devem estar marcando o mesmo tempo t, que representa a hora coordenada universal (UTC), para que as aplicações funcionem."
      },
      {
        "letra": "D",
        "texto": "Em sistemas distribuídos dependentes de tempo real, os contadores de tempo dos componentes de um sistema não precisam conter o mesmo valor interno, basta haver uma função de transformação coordenada para esses valores."
      },
      {
        "letra": "E",
        "texto": "Computadores sem receptores de hora coordenada universal (UTC) não podem participar de algoritmos dependentes dessa marcação de tempo."
      }
    ],
    "gabarito": "D",
    "explicacao": "No algoritmo de eleição em anel, mensagens de eleição circulam pelo anel lógico coletando os identificadores dos nós ativos; ao completar a volta, o nó com maior identificador é eleito coordenador e divulga o resultado.",
    "fonte": "poscomp/2014/01_prova.pdf"
  },
  {
    "id": 38,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2015 · Questão 62",
    "exame": "POSCOMP",
    "ano": 2015,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Em um Sistema Distribuído, a ordenação causal assegura que todos os processos reconheçam que um evento deve acontecer somente após a ocorrência de todos os eventos dos quais ele é dependente. A ordenação causal pode ser implementada pela relação acontece antes, representada como a → b. Esta relação determina que se a e b são eventos de um mesmo processo e a aconteceu antes de b, então a → b. Esta relação também estabelece que, se o evento a for o envio de uma mensagem e o evento b for o recebimento desta mesma mensagem, então a → b. Finalmente, esta relação é transitiva, ou seja, se a → b e b → c, então a → c. Considere a existência de três processos: P1, P2 e P3, cada um residindo em um nó de processamento distinto. Estes processos estão representados no diagrama espaço-tempo abaixo. A direção vertical representa o espaço (ou seja, processos diferentes) e a direção horizontal representa o tempo. Uma seta em diagonal indica uma mensagem enviada de um processo para outro. As letras minúsculas representam os eventos.\n\n*(O diagrama espaço-tempo dos processos P1, P2 e P3 está no PDF original, p. 23.)*\n\nDe acordo com o diagrama apresentado, uma ordenação causal destes eventos, consistente com a relação acontece antes, seria:",
    "svg_diagrama": "<div class=\"diagram-wrapper\">\n  <div class=\"diagram-caption\"><strong>Diagrama Espaço-Tempo — Ordenação Causal (Relação \"Acontece Antes\" →)</strong></div>\n  <svg viewBox=\"0 0 780 230\" xmlns=\"http://www.w3.org/2000/svg\" class=\"diagram-svg\">\n    <defs>\n      <marker id=\"arrow2\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#0284c7\" />\n      </marker>\n    </defs>\n    <rect width=\"100%\" height=\"100%\" fill=\"#f8fafc\" rx=\"8\" stroke=\"#e2e8f0\" stroke-width=\"1.5\" />\n    \n    <!-- P1 Timeline -->\n    <text x=\"35\" y=\"55\" font-family=\"system-ui, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#1e293b\">P1</text>\n    <line x1=\"70\" y1=\"50\" x2=\"740\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"2.5\" />\n    <polygon points=\"745,50 735,45 735,55\" fill=\"#64748b\" />\n\n    <!-- P2 Timeline -->\n    <text x=\"35\" y=\"125\" font-family=\"system-ui, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#1e293b\">P2</text>\n    <line x1=\"70\" y1=\"120\" x2=\"740\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"2.5\" />\n    <polygon points=\"745,120 735,115 735,125\" fill=\"#64748b\" />\n\n    <!-- P3 Timeline -->\n    <text x=\"35\" y=\"195\" font-family=\"system-ui, sans-serif\" font-weight=\"700\" font-size=\"16\" fill=\"#1e293b\">P3</text>\n    <line x1=\"70\" y1=\"190\" x2=\"740\" y2=\"190\" stroke=\"#64748b\" stroke-width=\"2.5\" />\n    <polygon points=\"745,190 735,185 735,195\" fill=\"#64748b\" />\n\n    <!-- Events on P1: a, b, c, d -->\n    <circle cx=\"160\" cy=\"50\" r=\"5\" fill=\"#0f172a\" /><text x=\"160\" y=\"38\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">a</text>\n    <circle cx=\"230\" cy=\"50\" r=\"5\" fill=\"#0f172a\" /><text x=\"230\" y=\"38\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">b</text>\n    <circle cx=\"430\" cy=\"50\" r=\"5\" fill=\"#0f172a\" /><text x=\"430\" y=\"38\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">c</text>\n    <circle cx=\"560\" cy=\"50\" r=\"5\" fill=\"#0f172a\" /><text x=\"560\" y=\"38\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">d</text>\n\n    <!-- Events on P2: e, f, g, h -->\n    <circle cx=\"100\" cy=\"120\" r=\"5\" fill=\"#0f172a\" /><text x=\"100\" y=\"108\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">e</text>\n    <circle cx=\"360\" cy=\"120\" r=\"5\" fill=\"#0f172a\" /><text x=\"360\" y=\"108\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">f</text>\n    <circle cx=\"490\" cy=\"120\" r=\"5\" fill=\"#0f172a\" /><text x=\"490\" y=\"108\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">g</text>\n    <circle cx=\"700\" cy=\"120\" r=\"5\" fill=\"#0f172a\" /><text x=\"700\" y=\"108\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">h</text>\n\n    <!-- Events on P3: i, k, m -->\n    <circle cx=\"120\" cy=\"190\" r=\"5\" fill=\"#0f172a\" /><text x=\"120\" y=\"213\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">i</text>\n    <circle cx=\"300\" cy=\"190\" r=\"5\" fill=\"#0f172a\" /><text x=\"300\" y=\"213\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">k</text>\n    <circle cx=\"630\" cy=\"190\" r=\"5\" fill=\"#0f172a\" /><text x=\"630\" y=\"213\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#0f172a\">m</text>\n\n    <!-- Message Arrows -->\n    <!-- b (P1, 230, 50) -> k (P3, 300, 190) -->\n    <line x1=\"230\" y1=\"50\" x2=\"295\" y2=\"184\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"4,3\" marker-end=\"url(#arrow2)\" />\n\n    <!-- k (P3, 300, 190) -> f (P2, 360, 120) -->\n    <line x1=\"300\" y1=\"190\" x2=\"355\" y2=\"126\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"4,3\" marker-end=\"url(#arrow2)\" />\n\n    <!-- f (P2, 360, 120) -> c (P1, 430, 50) -->\n    <line x1=\"360\" y1=\"120\" x2=\"425\" y2=\"56\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"4,3\" marker-end=\"url(#arrow2)\" />\n\n    <!-- g (P2, 490, 120) -> m (P3, 630, 190) -->\n    <line x1=\"490\" y1=\"120\" x2=\"625\" y2=\"186\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"4,3\" marker-end=\"url(#arrow2)\" />\n\n    <!-- d (P1, 560, 50) -> h (P2, 700, 120) -->\n    <line x1=\"560\" y1=\"50\" x2=\"695\" y2=\"116\" stroke=\"#0284c7\" stroke-width=\"2\" stroke-dasharray=\"4,3\" marker-end=\"url(#arrow2)\" />\n  </svg>\n</div>",
    "alternativas": [
      {
        "letra": "A",
        "texto": "a b c d e f g h i k m"
      },
      {
        "letra": "B",
        "texto": "a e i b f k m c g d h"
      },
      {
        "letra": "C",
        "texto": "e a b i c d f k g m h"
      },
      {
        "letra": "D",
        "texto": "e i a b k f c g d m h"
      },
      {
        "letra": "E",
        "texto": "i a b e f k m c g h d"
      }
    ],
    "gabarito": "D",
    "explicacao": "No diagrama espaço-tempo, respeitando a ordem interna de cada processo e as mensagens trocadas (a -> b -> k -> f -> c -> g -> d -> m e d -> h, juntamente com os eventos concorrentes iniciais e e i), a ordenação 'e i a b k f c g d m h' é uma ordenação causal válida consistente com a relação acontece antes.",
    "fonte": "poscomp/2015/01_prova.pdf"
  },
  {
    "id": 39,
    "tema_id": 4,
    "tema": "4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição",
    "titulo": "POSCOMP 2018 · Questão 67",
    "exame": "POSCOMP",
    "ano": 2018,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Qual é a classe de algoritmos de sincronização que assegura que, em um conjunto de processos distribuídos, pelo menos, um processo por vez tem acesso a um recurso compartilhado?",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Relógios vetoriais."
      },
      {
        "letra": "B",
        "texto": "Eleição."
      },
      {
        "letra": "C",
        "texto": "Exclusão mútua distribuída."
      },
      {
        "letra": "D",
        "texto": "Relógios lógicos."
      },
      {
        "letra": "E",
        "texto": "Posicionamento global."
      }
    ],
    "gabarito": "C",
    "explicacao": "A classe de algoritmos de sincronização que garante que apenas um nó por vez acesse recursos compartilhados através da circulação contínua de um privilégio de acesso exclusivo é a de passagem de bastão (token-based).",
    "fonte": "poscomp/2018/01_prova.pdf"
  },
  {
    "id": 40,
    "tema_id": 5,
    "tema": "5. Replicação, consistência e sistemas de arquivos distribuídos",
    "titulo": "POSCOMP 2004 · Questão 65",
    "exame": "POSCOMP",
    "ano": 2004,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Considere dois sistemas computacionais formados por múltiplos computadores que manipulam dados comuns. No primeiro, existe um computador central, chamado servidor, que é o único responsável pelos serviços de leitura e escrita desses dados. No segundo, existe um grupo de computadores responsáveis pelos serviços de leitura e escrita, e cada um desses servidores deve manter uma réplica idêntica dos dados.\n\nEntre as vantagens e desvantagens de um único servidor em relação a vários servidores, podemos afirmar que o servidor único apresenta:\n\n- i. Vantagem de maior velocidade de execução das operações de escrita e leitura e desvantagem de maior custo de armazenamento\n- ii. Vantagem de não necessitar de coordenação distribuída para ordenação das operações de escrita e desvantagem de menor velocidade nas leituras devido a serialização de operações\n- iii. Vantagem de manter mais facilmente a consistência dos dados mas desvantagem de perda de disponibilidade em caso de falha do servidor.\n\nDessas afirmativas são verdadeiras:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "(ii) e (iii)"
      },
      {
        "letra": "B",
        "texto": "apenas (ii)"
      },
      {
        "letra": "C",
        "texto": "apenas (i)"
      },
      {
        "letra": "D",
        "texto": "(i), (iii)"
      },
      {
        "letra": "E",
        "texto": "(i), (ii) e (iii)"
      }
    ],
    "gabarito": "A",
    "explicacao": "Na consistência sequencial de Lamport, o resultado de qualquer execução deve ser o mesmo como se as operações de todos os processos tivessem sido executadas em alguma ordem sequencial única respeitada igualmente por todos os participantes.",
    "fonte": "poscomp/2004/01_prova.pdf"
  },
  {
    "id": 41,
    "tema_id": 5,
    "tema": "5. Replicação, consistência e sistemas de arquivos distribuídos",
    "titulo": "POSCOMP 2006 · Questão 70",
    "exame": "POSCOMP",
    "ano": 2006,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Um sistema distribuído pode manter diferentes cópias de um mesmo item de dado a fim de melhorar o desempenho de leitura e aumentar a disponibilidade de acesso. A modificação deste item de dado é realizada de acordo com protocolos de consistência de cópias. Assinale a alternativa correta sobre esses protocolos.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "O protocolo baseado em cópia primária permite sempre a atualização da cópia mais próxima e difunde o novo valor via unicast para todos os nós que mantém uma outra cópia."
      },
      {
        "letra": "B",
        "texto": "A atualização de todas as cópias, no protocolo baseado em cópia primária, é realizada através de um processo síncrono, onde o cliente é liberado para continuar o fluxo de execução imediatamente após ter solicitado a atualização da cópia primária."
      },
      {
        "letra": "C",
        "texto": "Nos protocolos baseados em quorum, os conflitos leitura-escrita e escrita-escrita são evitados por autorizações de bloqueio (lock) emitidas por um coordenador central ou sequenciador."
      },
      {
        "letra": "D",
        "texto": "Protocolos baseados em coerência de cache são mecanismos de consistência de cópias que repassam a responsabilidade de manter essa consistência para os servidores que detém cópias."
      },
      {
        "letra": "E",
        "texto": "No protocolo de replicação ativa, todas as réplicas são atualizadas através de uma única operação de escrita realizada por um mecanismo de multicast totalmente ordenado."
      }
    ],
    "gabarito": "E",
    "explicacao": "O modelo de consistência causal relaxa a consistência sequencial ao exigir apenas que operações de escrita potencialmente causalmente relacionadas sejam vistas na mesma ordem por todos os nós; operações concorrentes podem ser vistas em ordens distintas.",
    "fonte": "poscomp/2006/01_prova.pdf"
  },
  {
    "id": 42,
    "tema_id": 5,
    "tema": "5. Replicação, consistência e sistemas de arquivos distribuídos",
    "titulo": "POSCOMP 2007 · Questão 68",
    "exame": "POSCOMP",
    "ano": 2007,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Considere as afirmativas sobre um Sistema de Arquivos Distribuídos (SAD).\n\n- I. Um “Servidor de Arquivos com Estado”, em um SAD, mantém todo seu estado no caso de uma falha, garantindo a recuperação do mesmo sem a necessidade de diálogo com os clientes.\n- II. II. Na gerência de cache em um SAD, uma das políticas utilizadas é a writethrough. O inconveniente dessa política, comparada com outras, é a pouca confiabilidade no caso de falhas no cliente.\n- III. O uso de replicação em um SAD ao mesmo tempo que provê aumento na confiabilidade, também introduz um gargalo em termos de desempenho.\n\nA esse respeito, pode-se afirmar que",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "nenhuma das afirmativas está correta."
      },
      {
        "letra": "B",
        "texto": "somente a afirmativa I está correta."
      },
      {
        "letra": "C",
        "texto": "somente a afirmativa II está correta."
      },
      {
        "letra": "D",
        "texto": "somente a afirmativa III está correta."
      },
      {
        "letra": "E",
        "texto": "somente as afirmativas I e III estão corretas."
      }
    ],
    "gabarito": "A",
    "explicacao": "Em Sistemas de Arquivos Distribuídos (SAD), manter cópias de arquivos em cache local nos clientes melhora substancialmente a velocidade de leitura, mas impõe a necessidade de protocolos rigorosos de validação e invalidação de cache.",
    "fonte": "poscomp/2007/01_prova.pdf"
  },
  {
    "id": 43,
    "tema_id": 5,
    "tema": "5. Replicação, consistência e sistemas de arquivos distribuídos",
    "titulo": "POSCOMP 2010 · Questão 60",
    "exame": "POSCOMP",
    "ano": 2010,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Sistemas de arquivos distribuídos demandam uma atenção especial pela necessidade de tratamento de requisições múltiplas e garantia de consistência. O sistema CODA (usado em várias versões do UNIX, incluindo o Linux) é eficiente por, entre outras coisas, usar o mecanismo de RPC2 para comunicação. O RPC2 se diferencia de outros mecanismos baseados em RPC por permitir",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "paralelismo de chamadas e chamadas assíncronas."
      },
      {
        "letra": "B",
        "texto": "paralelismo de chamadas e o uso de protocolos específicos de aplicação."
      },
      {
        "letra": "C",
        "texto": "chamadas assíncronas e garantir a entrega de chamadas."
      },
      {
        "letra": "D",
        "texto": "o uso de protocolos específicos de aplicação e garantir a entrega de chamadas."
      },
      {
        "letra": "E",
        "texto": "chamadas assíncronas e o uso de protocolos específicos de aplicação."
      }
    ],
    "gabarito": "B",
    "explicacao": "O protocolo NFS tradicional opera sobre RPCs com um servidor prioritariamente sem estado (stateless) para facilitar recuperação de falhas, enquanto o AFS mantém sessões com cache local de arquivos inteiros e callbacks de invalidação.",
    "fonte": "poscomp/2010/01_prova.pdf"
  },
  {
    "id": 44,
    "tema_id": 5,
    "tema": "5. Replicação, consistência e sistemas de arquivos distribuídos",
    "titulo": "POSCOMP 2011 · Questão 70",
    "exame": "POSCOMP",
    "ano": 2011,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "O Google File System (GFS) é o sistema de arquivos distribuídos usado pela Google em seus sistemas. Uma característica marcante nele é o uso de blocos fixos de 64 megabytes (chunks) para o armazenamento de arquivos, que são replicados através de cópias em chunkservers, gerenciadas por um mestre em cada cluster.\nAssinale a alternativa que contém uma vantagem nessa estrutura.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Permite o acesso sequencial e direto de arquivos completos em um único bloco."
      },
      {
        "letra": "B",
        "texto": "É estritamente compatível com NFS e AFS."
      },
      {
        "letra": "C",
        "texto": "Permite acesso indexado de forma eficiente."
      },
      {
        "letra": "D",
        "texto": "O uso de chunkservers elimina a necessidade de controle de replicação."
      },
      {
        "letra": "E",
        "texto": "Aumenta o volume de metadados para facilitar os processos de busca."
      }
    ],
    "gabarito": "A",
    "explicacao": "No Google File System (GFS), a escolha por blocos grandes de 64 MB (chunks) reduz dramaticamente o número de entradas de metadados que o nó Mestre precisa armazenar em memória RAM e minimiza a necessidade de conexões constantes entre cliente e Mestre.",
    "fonte": "poscomp/2011/01_prova.pdf"
  },
  {
    "id": 45,
    "tema_id": 6,
    "tema": "6. Falhas e tolerância a falhas",
    "titulo": "POSCOMP 2004 · Questão 67",
    "exame": "POSCOMP",
    "ano": 2004,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Os tipos mais comuns de defeitos em sistemas distribuídos provocados por falhas físicas de componentes ou interferência eletro-magnética são:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "perda de arquivos, colapso de servidores, captura de senhas"
      },
      {
        "letra": "B",
        "texto": "captura de senhas, sobrecarga de servidores, mensagens duplicadas"
      },
      {
        "letra": "C",
        "texto": "perda de mensagens, mensagens com vírus e mensagens órfãs"
      },
      {
        "letra": "D",
        "texto": "colapso de servidores, queda do enlace e perda de mensagens"
      },
      {
        "letra": "E",
        "texto": "páginas web com endereço errado, spam e mensagens duplicadas"
      }
    ],
    "gabarito": "D",
    "explicacao": "Os tipos mais comuns de defeitos em sistemas distribuídos causados por problemas físicos e eletromagnéticos são o colapso e parada de servidores (crash), a queda do enlace de transmissão e a perda de pacotes de mensagens na rede.",
    "fonte": "poscomp/2004/01_prova.pdf"
  },
  {
    "id": 46,
    "tema_id": 6,
    "tema": "6. Falhas e tolerância a falhas",
    "titulo": "POSCOMP 2005 · Questão 70",
    "exame": "POSCOMP",
    "ano": 2005,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A abordagem geral para tolerância a falhas é o uso de redundância. Considere as afirmações a seguir:\n\n- (I) Um exemplo de redundância de informação é o uso de bits extras para permitir a recuperação de bits corrompidos.\n- (II) Redundância de tempo é útil principalmente quando as falhas são transientes ou intermitentes.\n- (III) Um exemplo de redundância física é o uso de processadores extras.\n- (IV) O uso de processadores extras pode ser organizado com replicação ativa ou backup primário.\n\nEstão corretas:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Somente as afirmações (I),(II) e (III)."
      },
      {
        "letra": "B",
        "texto": "Somente as afirmações (I), (II) e (IV)."
      },
      {
        "letra": "C",
        "texto": "Somente as afirmações (I), (III) e (IV)."
      },
      {
        "letra": "D",
        "texto": "Somente as afirmações (II), (III) e (IV)."
      },
      {
        "letra": "E",
        "texto": "Todas as afirmações."
      }
    ],
    "gabarito": "E",
    "explicacao": "A tolerância a falhas em sistemas distribuídos envolve múltiplas dimensões de redundância: redundância de hardware/física (múltiplas máquinas), redundância de informação (cópias e códigos de correção de erro) e redundância de tempo (retransmissões).",
    "fonte": "poscomp/2005/01_prova.pdf"
  },
  {
    "id": 47,
    "tema_id": 6,
    "tema": "6. Falhas e tolerância a falhas",
    "titulo": "POSCOMP 2016 · Questão 62",
    "exame": "POSCOMP",
    "ano": 2016,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Uma falha por omissão ocorre quando um processo",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "não responde a requisições que chegam."
      },
      {
        "letra": "B",
        "texto": "simplesmente para prematuramente."
      },
      {
        "letra": "C",
        "texto": "responde muito cedo a uma requisição."
      },
      {
        "letra": "D",
        "texto": "responde a uma requisição que chega de modo errado."
      },
      {
        "letra": "E",
        "texto": "responde muito tarde a uma requisição."
      }
    ],
    "gabarito": "A",
    "explicacao": "Uma falha por omissão ocorre quando um componente (nó ou canal de comunicação) falha ao executar uma ação que deveria executar, como deixar de transmitir, perder pacotes na rede ou ignorar uma mensagem recebida.",
    "fonte": "poscomp/2016/01_prova.pdf"
  },
  {
    "id": 48,
    "tema_id": 6,
    "tema": "6. Falhas e tolerância a falhas",
    "titulo": "POSCOMP 2018 · Questão 62",
    "exame": "POSCOMP",
    "ano": 2018,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Relacione a Coluna 1 à Coluna 2, associando os diferentes tipos de falha com as suas descrições.\n\nColuna 1\n1. Por queda.\n2. Por omissão.\n3. De transição de estado.\n4. Arbitrária.\n\nColuna 2\n\n- ( ) O servidor não consegue responder a requisições que chegam.\n- ( ) O servidor se desvia do fluxo de controle correto.\n- ( ) O servidor produz saídas que nunca deveriam ter produzido, mas não podem ser detectadas como incorretas.\n- ( ) O servidor para de funcionar, mas estava funcionando corretamente até parar.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "1 – 2 – 3 – 4."
      },
      {
        "letra": "B",
        "texto": "4 – 1 – 2 – 3."
      },
      {
        "letra": "C",
        "texto": "3 – 4 – 1 – 2."
      },
      {
        "letra": "D",
        "texto": "2 – 3 – 4 – 1."
      },
      {
        "letra": "E",
        "texto": "4 – 2 – 1 – 3."
      }
    ],
    "gabarito": "D",
    "explicacao": "A classificação de falhas associa: falha de colapso/parada (o nó cessa completamente a execução), falha por omissão (pacotes são perdidos sem aviso), falha temporal (respostas chegam fora da janela de tempo limite) e falha bizantina (comportamento malicioso ou arbitrário com respostas inconsistentes).",
    "fonte": "poscomp/2018/01_prova.pdf"
  },
  {
    "id": 49,
    "tema_id": 7,
    "tema": "7. Transações e bancos de dados distribuídos",
    "titulo": "POSCOMP 2007 · Questão 43",
    "exame": "POSCOMP",
    "ano": 2007,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Considere que um Banco de Dados Distribuído siga o protocolo TWO-PHASED COM-MIT e que o nodo X tenha retornado uma resposta negativa na primeira fase, indicando que não pode realizar a operação que lhe cabe. Nesse caso, durante a segunda fase, o coordenador da transação deverá",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "avisar o nodo X para completar a tarefa de qualquer forma porque os demais nodos participantes também deverão completar a transação."
      },
      {
        "letra": "B",
        "texto": "avisar o nodo X para não completar a tarefa e avisar os demais nodos participantes para completarem a transação."
      },
      {
        "letra": "C",
        "texto": "completar ele mesmo a tarefa que cabia ao nodo X e avisar aos demais nodos participantes para completarem a transação."
      },
      {
        "letra": "D",
        "texto": "avisar a todos os nodos participantes para completarem a transação."
      },
      {
        "letra": "E",
        "texto": "avisar a todos os nodos participantes para não completarem a transação."
      }
    ],
    "gabarito": "E",
    "explicacao": "No protocolo de Two-Phase Commit (2PC), a decisão de abortar a transação distribuída é disparada caso qualquer um dos nós participantes vote NÃO ou caso ocorra timeout na fase de preparação, garantindo a atomicidade global.",
    "fonte": "poscomp/2007/01_prova.pdf"
  },
  {
    "id": 50,
    "tema_id": 7,
    "tema": "7. Transações e bancos de dados distribuídos",
    "titulo": "POSCOMP 2018 · Questão 52",
    "exame": "POSCOMP",
    "ano": 2018,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Com respeito à abordagem de cópia distinguida para o controle de concorrência de banco de dados distribuídos, analise as afirmações abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n- ( ) Uma cópia particular de cada item de dados é eleita como cópia distinguida, para que quaisquer solicitações de bloqueio e desbloqueio sejam desviadas do site que contém tal cópia.\n- ( ) Na técnica de site primário, quando uma transação obtém um read_lock, todas as cópias do item de dados devem ser atualizadas antes de liberar o bloqueio.\n- ( ) A técnica de cópia primária tenta distribuir a carga de coordenação de bloqueio entre vários sites.\n- ( ) O uso de site de backup para a técnica de site primário ameniza o problema de sobrecarga do site primário, o que minimiza gargalos no sistema.\n- ( ) A técnica de cópia primária em geral possui menor confiabilidade e menor disponibilidade do que a técnica de site primário.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "V – F – F – V – V."
      },
      {
        "letra": "B",
        "texto": "F – V – F – F – F."
      },
      {
        "letra": "C",
        "texto": "F – F – V – F – F."
      },
      {
        "letra": "D",
        "texto": "V – F – F – V – F."
      },
      {
        "letra": "E",
        "texto": "F – V – V – F – V."
      }
    ],
    "gabarito": "C",
    "explicacao": "Na abordagem de cópia primária (distinguished copy / primary copy) para controle de concorrência distribuído, todas as requisições de bloqueio e atualização de um item de dado são direcionadas exclusivamente à réplica primária designada.",
    "fonte": "poscomp/2018/01_prova.pdf"
  },
  {
    "id": 51,
    "tema_id": 7,
    "tema": "7. Transações e bancos de dados distribuídos",
    "titulo": "POSCOMP 2019 · Questão 64",
    "exame": "POSCOMP",
    "ano": 2019,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Uma transação, em sistemas distribuídos, pode ser construída com base em uma quantidade de subtransações. A transação do nível mais alto pode se ramificar e gerar “filhos”, que são executados em paralelo, em máquinas diferentes, para obter ganho de desempenho ou simplificar a programação. Esse é um exemplo de:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "Transação aninhada."
      },
      {
        "letra": "B",
        "texto": "Isolamento."
      },
      {
        "letra": "C",
        "texto": "Transação isolada."
      },
      {
        "letra": "D",
        "texto": "Transação atômica."
      },
      {
        "letra": "E",
        "texto": "Durabilidade."
      }
    ],
    "gabarito": "A",
    "explicacao": "Transações aninhadas (nested transactions) decompõem uma transação global em subtransações estruturadas em árvore hierárquica; subtransações podem rodar em paralelo em nós distintos e falhas em nós filhos podem ser recuperadas sem abortar toda a transação mãe.",
    "fonte": "poscomp/2019/01_prova.pdf"
  },
  {
    "id": 52,
    "tema_id": 7,
    "tema": "7. Transações e bancos de dados distribuídos",
    "titulo": "ENADE 2017 · Tecnologia em Gestão da TI · Q15",
    "exame": "ENADE",
    "ano": 2017,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A arquitetura de distribuição diz respeito ao modo como uma organização fisicamente distribui entre os seus computadores, em uma rede, o processamento dos dados e o seu banco de dados. Essa arquitetura traz consequências importantes para o desempenho e o uso do banco de dados. As redes de computadores permitem que um Sistema Gerenciador de Banco de Dados (SGBD), que é executado em um computador, possa acessar dados de outro computador.\n\n*(GORDON S.R.; GORDON J.R. Sistemas de Informação: uma abordagem gerencial. 3. ed. Rio de Janeiro: LTC, 2013, adaptado.)*\n\nConsidere esse contexto, avalie as descrições a seguir, acerca de opções de arquiteturas de dados utilizados por administradores e especialistas em SGBD.\n\nI. Arquitetura descentralizada: não envolve compartilhamento de dados.\n\nII. Arquitetura centralizada: um único SGBD é executado em um único computador e mantém os dados de forma centralizada.\n\nIII. Arquitetura mista: permite, por meio do seu SGBD, que se obtenha um processamento consolidado, com dados distribuídos e centralizados de forma simultânea sem que haja redundância de dados e de processamento.\n\nIV. Arquitetura cliente/servidor: divide as funções de um SGBD entre computadores conectados em uma rede enquanto centraliza o armazenamento permanente para todos os dados em um servidor de banco de dados.\n\nV. Arquitetura distribuída: distribui tanto dados como processamento e não dispõe, necessariamente, de armazenamento centralizado de dados.\n\nÉ correto apenas o que se descreve em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "III e IV."
      },
      {
        "letra": "B",
        "texto": "I, II, e V."
      },
      {
        "letra": "C",
        "texto": "I, III e IV."
      },
      {
        "letra": "D",
        "texto": "II, III e V."
      },
      {
        "letra": "E",
        "texto": "I, II, IV e V."
      }
    ],
    "gabarito": "E",
    "explicacao": "Em arquiteturas de distribuição de dados, a arquitetura distribuída particiona e/ou replica fragmentos do banco de dados em múltiplos nós conectados em rede sob controle coordenado por um SGBD distribuído.",
    "fonte": "provas/43_TEC_GES_TEC_INF_BAIXA.pdf (p. 19)"
  },
  {
    "id": 53,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "POSCOMP 2004 · Questão 66",
    "exame": "POSCOMP",
    "ano": 2004,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Um cluster é definido como um sistema distribuído formado por máquinas homogêneas, executando o mesmo sistema operacional, interligadas por uma rede de alta velocidade. Como vantagens deste cluster em relação a uma máquina de grande porte poderíamos citar:\n\n- i.     melhor escalabilidade de unidades de processamento\n- ii.    possibilidade de executar programas com múltiplas threads\n- iii.   possibilidade de continuar o processamento isolando máquinas defeituosas\n- iv.    possibilidade de executar programas Java usando RMI\n\nDessas afirmativas são verdadeiras:",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "(i) e (iii)"
      },
      {
        "letra": "B",
        "texto": "(ii) e (iv)"
      },
      {
        "letra": "C",
        "texto": "(i) e (iv)"
      },
      {
        "letra": "D",
        "texto": "apenas (iii)"
      },
      {
        "letra": "E",
        "texto": "(i), (ii), (iii) e (iv)"
      }
    ],
    "gabarito": "A",
    "explicacao": "Um cluster computacional (como a arquitetura Beowulf) é composto por computadores convencionais homogêneos (COTS) interconectados por redes de alta velocidade dedicadas, operando cooperativamente sob um sistema operacional compartilhado.",
    "fonte": "poscomp/2004/01_prova.pdf"
  },
  {
    "id": 54,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "POSCOMP 2013 · Questão 62 · _correlata_",
    "exame": "POSCOMP",
    "ano": 2013,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Um conceito relativamente novo na área de sistemas distribuídos é o de virtualização, com a criação de máquinas virtuais para a execução de aplicações em um processador real. Sobre a aplicação de máquinas virtuais, assinale a alternativa correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "As máquinas virtuais devem operar sobre o mesmo tipo de hardware da máquina física."
      },
      {
        "letra": "B",
        "texto": "Diferentes máquinas virtuais podem executar, simultaneamente, sobre a máquina física."
      },
      {
        "letra": "C",
        "texto": "O processo de virtualização implica em grandes problemas de segurança para o sistema operacional nativo."
      },
      {
        "letra": "D",
        "texto": "O sistema operacional nativo deve ser do mesmo tipo usado na máquina virtual."
      },
      {
        "letra": "E",
        "texto": "O uso de máquinas virtuais prejudica, enormemente, a velocidade de execução de processos."
      }
    ],
    "gabarito": "B",
    "explicacao": "A computação em grade (Grid Computing) viabiliza a integração e o compartilhamento coordenado de recursos computacionais heterogêneos pertencentes a múltiplas instituições administrativas geograficamente dispersas.",
    "fonte": "poscomp/2013/01_prova.pdf"
  },
  {
    "id": 55,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2014 · Sistemas de Informação · Q16 · _correlata_",
    "exame": "ENADE",
    "ano": 2014,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A virtualização de servidores, acompanhada de solução para Gerenciamento Eletrônico de Documentos (GED), trouxe uma série de benefícios para as escolas de uma instituição: acumulados ao longo de 50 anos, os prontuários dos estudantes passaram a ser acessados em tempo real, as atividades pedagógicas realizadas em ambiente mais sólido e o gerenciamento centralizado do ambiente passou a permitir que a equipe da instituição se concentre em tarefas estratégicas. No médio prazo, a meta da instituição é virtualizar toda a infraestrutura de servidores e eliminar o uso de papel nos processos, trocando documentos em papel por documentos eletrônicos armazenados nos servidores virtuais e acessíveis em qualquer unidade da rede de escolas.\n\n*(Computerworld. Virtualização: quatro casos de sucesso no Brasil, adaptado.)*\n\nEm relação ao estudo de caso mencionado acima, avalie as asserções a seguir e a relação proposta entre elas.\n\nI. A tecnologia de virtualização de servidores está proporcionando diversos benefícios para as organizações, como redução de custos e de *downtime* e melhoria no desempenho, na segurança e no gerenciamento da infraestrutura de Tecnologia da Informação (TI). No entanto, sozinha, a virtualização não é suficiente para permitir que as organizações se concentrem em tarefas estratégicas.\n\n**PORQUE**\n\nII. A virtualização, se associada a outras tecnologias atuais como GED, *Cloud Computing* e *Grid Computing*, possibilita que as organizações foquem no negócio, eliminando os riscos associados à área de TI.\n\nA respeito dessas asserções, assinale a opção correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
      },
      {
        "letra": "B",
        "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
      },
      {
        "letra": "C",
        "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
      },
      {
        "letra": "D",
        "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
      },
      {
        "letra": "E",
        "texto": "As asserções I e II são proposições falsas."
      }
    ],
    "gabarito": "E",
    "explicacao": "Todas as afirmativas são verdadeiras: a virtualização de servidores reduz custos operacionais com hardware e energia, consolida data centers e fornece alta disponibilidade com migração dinâmica de máquinas virtuais.",
    "fonte": "provas/39_sistemas_informacao.pdf (p. 17)"
  },
  {
    "id": 56,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2017 · Sistemas de Informação · Q31",
    "exame": "ENADE",
    "ano": 2017,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A *cloud computing* (computação em nuvem) tem o objetivo de fornecer recursos de *hardware* e *software* sob demanda a partir de servidores interligados pela internet, seguindo o princípio da computação em *grid* (grade). Uma arquitetura em *grid* é descrita por meio das quatro camadas a seguir.\n\n- Rede: executa a comunicação e se utiliza da parte física;\n- Recursos: formada pelos servidores de armazenamento e/ou processamento;\n- *Middleware*: formada pelo *software* responsável pela troca de informações;\n- Ferramentas e aplicações: representada pelos aplicativos.\n\nDe acordo com o texto, avalie as afirmações a seguir.\n\nI. A camada de ferramentas e aplicações é responsável pela negociação de dados das transações de dados no *grid*.\n\nII. A camada *middleware* é responsável pela interconectividade e comunicação entre os membros do *grid*.\n\nIII. A camada de rede é responsável pela conectividade entre os diferentes membros do *grid*.\n\nIV. A camada de recursos é responsável pela segurança dos dados nas aplicações do *grid*.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e II."
      },
      {
        "letra": "B",
        "texto": "II e III."
      },
      {
        "letra": "C",
        "texto": "III e IV."
      },
      {
        "letra": "D",
        "texto": "I, II e IV."
      },
      {
        "letra": "E",
        "texto": "I, III e IV."
      }
    ],
    "gabarito": "B",
    "explicacao": "Nos modelos de computação em nuvem: SaaS fornece aplicativos prontos ao usuário final; PaaS fornece ambientes de desenvolvimento e bancos de dados gerenciados; e IaaS fornece servidores, redes e armazenamento virtualizados.",
    "fonte": "provas/40_SIS_INFORMACAO_BAIXA.pdf (p. 32)"
  },
  {
    "id": 57,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2017 · Sistemas de Informação · Q34",
    "exame": "ENADE",
    "ano": 2017,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "No contexto de arquitetura e organização de computadores, o termo *cluster* é usado para designar um grupo de computadores interconectados, trabalhando como um recurso de computação unificado. Cada computador pertencente ao *cluster* é usualmente denominado nó. *Clusters* costumam ser utilizados em ambientes corporativos, sendo particularmente adequados para aplicações baseadas em servidores.\n\n*(STALLINGS, W. Arquitetura e organização de computadores. 8. ed. São Paulo: Prentice Hall, 2010, adaptado.)*\n\nConsiderando as informações apresentadas, avalie as afirmações a seguir.\n\nI. Uma falha em um nó de um *cluster* implica em perda total de serviço.\n\nII. A interligação entre os nós de um *cluster* realiza-se por meio de um barramento de controle.\n\nIII. A escalabilidade de um *cluster* é maior do que a de um processador com múltiplos núcleos.\n\nIV. A relação custo/desempenho de um *cluster* é melhor do que a de uma única máquina de grande porte.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e III."
      },
      {
        "letra": "B",
        "texto": "II e IV."
      },
      {
        "letra": "C",
        "texto": "III e IV."
      },
      {
        "letra": "D",
        "texto": "I, II e III."
      },
      {
        "letra": "E",
        "texto": "I, II e IV."
      }
    ],
    "gabarito": "C",
    "explicacao": "No contexto de arquitetura computacional, cluster refere-se a um sistema de múltiplos computadores interconectados que atuam cooperativamente como uma entidade unificada para oferecer alto desempenho e alta disponibilidade.",
    "fonte": "provas/40_SIS_INFORMACAO_BAIXA.pdf (p. 34)"
  },
  {
    "id": 58,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2017 · Tecnologia em Gestão da TI · Questão discursiva 04 · _correlata_",
    "exame": "ENADE",
    "ano": 2017,
    "correlata": true,
    "tipo": "discursiva",
    "anulada": false,
    "enunciado": "Os serviços de computação em nuvem fornecem a Tecnologia da Informação (TI) como serviço pela internet ou por uma rede dedicada, com entrega sob demanda e pagamento com base no uso. Esses serviços variam de aplicativos completos e plataformas de desenvolvimento até servidores, armazenamento e *desktops* virtuais.\n\nPodem-se citar vários serviços de computação em nuvem, por exemplo, a Infraestrutura como Serviço (*Infrastructure as a Service* - IaaS), a Plataforma como Serviço (*Platform as a Service* - PaaS) e o *Software* como Serviço (*Software as a Service* - SaaS).\n\nConsidere que uma empresa planeja contratar um serviço de computação em nuvem (IaaS, PaaS ou SaaS), sob demanda, que forneça servidores virtuais e permita a configuração e administração dos sistemas operacionais necessários via internet. Considere, ainda, que a empresa necessita do controle dos sistemas operacionais, rede e sistemas a serem instalados nos servidores virtuais.\n\nCom base nessa situação, defina o serviço de computação em nuvem que mais se adequa a essa empresa e explique o conceito desse serviço. (valor: 10,0 pontos)",
    "svg_diagrama": null,
    "alternativas": [],
    "gabarito": "discursiva",
    "explicacao": "Na questão discursiva, a modalidade adequada é IaaS (Infraestrutura como Serviço), pois a empresa contratante exige controle administrativo completo sobre os sistemas operacionais, pilhas de rede e programas instalados nos servidores virtuais sob demanda.",
    "fonte": "provas/43_TEC_GES_TEC_INF_BAIXA.pdf (p. 14)"
  },
  {
    "id": 59,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2017 · Engenharia da Computação · Q27 · _correlata_",
    "exame": "ENADE",
    "ano": 2017,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Um sistema monitora o deslocamento de um carro por meio do registro em um banco de dados, de segundo em segundo, das medidas de dois acelerômetros: um na direção longitudinal do movimento do carro, outro na direção transversal.\n\nO projeto desse sistema é decomposto em três subprojetos. O primeiro, denominado MÓDULO_1, formado por *hardware* e *software*, é embarcado no carro e dotado de sistema de comunicação com a internet por GPRS. O segundo, MÓDULO_2, é um projeto de *software* aplicativo executado em plataforma Android para *tablet*, *smartphone* ou celular, para exibição de relatórios para usuários. O terceiro subprojeto, MÓDULO_3, é formado por *hardware* e *software* e instalado em um servidor de banco de dados em nuvem com conexão dedicada permanente com a internet.\n\nO projeto tem as seguintes especificações:\n\n- o MÓDULO_1 comunica-se com o MÓDULO_3 para enviar as leituras obtidas. Como o carro nem sempre está em área de cobertura de celular, é possível que uma comunicação possa enviar as leituras de até um dia inteiro;\n- o MÓDULO_2 comunica-se com o MÓDULO_3 para obter os dados exibidos no relatório;\n- os relatórios indicam os valores máximos de velocidade e aceleração e as respectivas posições do carro quando eles foram atingidos.\n\nA partir dessas informações, avalie as afirmações a seguir.\n\nI. O MÓDULO_1 deve ter capacidade de armazenamento de dados suficiente para um dia de leituras, a serem enviadas para o MÓDULO_3.\n\nII. Todos os subprojetos têm interface de comunicação pela internet e a interface com o usuário é feita no MÓDULO_2.\n\nIII. O melhor local para se executar o processamento dos dados para o relatório é o MÓDULO_1, que está sempre conectado e tem maior capacidade de processamento.\n\nIV. O melhor local para se instalar o banco de dados para as leituras é o MÓDULO_3, que dispõe de maior capacidade de armazenamento e conexão permanente com a internet.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e III."
      },
      {
        "letra": "B",
        "texto": "II e III."
      },
      {
        "letra": "C",
        "texto": "II e IV."
      },
      {
        "letra": "D",
        "texto": "I, II e IV."
      },
      {
        "letra": "E",
        "texto": "I, III e IV."
      }
    ],
    "gabarito": "D",
    "explicacao": "Em sistemas de telemetria distribuída com dispositivos móveis sujeitos a conexões celulares intermitentes, a arquitetura deve suportar buffering local no nó embarcado e sincronização em lote com o banco de dados em nuvem assim que houver conexão.",
    "fonte": "provas/13_ENG_COM_BACHAREL_BAIXA.pdf (p. 28)"
  },
  {
    "id": 60,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2019 · Engenharia da Computação · Q29 · _correlata_",
    "exame": "ENADE",
    "ano": 2019,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A Internet das Coisas (*Internet of Things* (IoT)) pode ser definida como um ambiente de objetos físicos interconectados com a internet por meio de sensores/atuadores embutidos, criando um ecossistema de computação onipresente (ubíqua) e introduzindo soluções funcionais nos processos do dia-a-dia, sejam domésticos ou profissionais. É um conjunto de tecnologias e protocolos associados que permitem que objetos se conectem a uma rede de comunicações e sejam identificados e controlados por essa conexão. A IoT usa conceitos, tecnologias e soluções que envolvem sistemas distribuídos e redes de comunicação.\n\n*(MAGRANI, E. A internet das coisas. Rio de Janeiro: FGV Editora, 2018, adaptado.)*\n\nNesse contexto, avalie as asserções a seguir e a relação proposta entre elas.\n\nI. Em soluções e aplicações para IoT, é preciso garantir que essas funcionarão de forma consistente em um ambiente concorrente, onde ocorrem várias requisições ao mesmo recurso compartilhado.\n\n**PORQUE**\n\nII. Em soluções atuais de IoT existe heterogeneidade, ou seja, dentro do mesmo ecossistema, uma variedade de sistemas operacionais, *hardware*, linguagens de programação e padrões de redes de comunicação são utilizados.\n\nA respeito dessas asserções, assinale a alternativa correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
      },
      {
        "letra": "B",
        "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
      },
      {
        "letra": "C",
        "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
      },
      {
        "letra": "D",
        "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
      },
      {
        "letra": "E",
        "texto": "As asserções I e II são proposições falsas."
      }
    ],
    "gabarito": "A",
    "explicacao": "Na Internet das Coisas (IoT), objetos físicos incorporam sensores, atuadores e interfaces de rede, permitindo coleta contínua de dados ambientais e acionamento remoto através de protocolos de mensagens leves.",
    "fonte": "provas/ENGENHARIA_COMPUTACAO.pdf (p. 32)"
  },
  {
    "id": 61,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2021 · Ciência da Computação (Bacharelado e Licenciatura) · Q25 · _correlata_",
    "exame": "ENADE",
    "ano": 2021,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A computação em nuvem (*cloud computing*) pode ser definida como a infraestrutura de comunicação representada por vários servidores web, responsáveis por armazenar dados e aplicações, em que cada parte desta infraestrutura é provida como um serviço e estes são normalmente alocados em centros de dados, utilizando hardware compartilhado para computação e armazenamento. Segundo o Instituto Nacional de Padrões e Tecnologia (NIST), um modelo de Computação em Nuvem deve apresentar 5 características essenciais, 3 modelos de serviço e 4 modelos de implantação. As características essenciais são: *self-service* sob demanda, acesso à rede ampla, *pooling* de recursos, elasticidade rápida e serviço medido. Os modelos de serviços são: Software como um Serviço (SaaS), Plataforma como um Serviço (PaaS) e Infraestrutura como um Serviço (IaaS) e os modelos de implantação são: Nuvem Privada, Nuvem Pública, Nuvem Comunidade e Nuvem Híbrida.\n\nConsiderando as informações apresentadas, avalie as afirmações a seguir.\n\nI. No modelo SaaS, o usuário não precisa adquirir ou realizar *upgrade* de hardware para rodar as aplicações, não administra ou controla a infraestrutura subjacente e as atualizações de software são de responsabilidade do provedor do serviço em nuvem.\n\nII. A elasticidade é a capacidade de aumentar ou diminuir de forma automática o tempo de disponibilidade dos recursos computacionais que foram provisionados contratualmente para cada usuário.\n\nIII. A Nuvem Comunidade tem como objetivo gerenciar os recursos computacionais pertencentes a cada uma das organizações participantes de uma comunidade de organizações para compartilhar a infraestrutura de software e hardware entre todos.\n\nIV. No modelo IaaS, o usuário não administra ou controla a infraestrutura da nuvem, mas tem controle sobre os sistemas operacionais, armazenamento e aplicativos implantados.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e II."
      },
      {
        "letra": "B",
        "texto": "I e IV."
      },
      {
        "letra": "C",
        "texto": "II e III."
      },
      {
        "letra": "D",
        "texto": "I, III e IV."
      },
      {
        "letra": "E",
        "texto": "II, III e IV."
      }
    ],
    "gabarito": "B",
    "explicacao": "A virtualização baseada em containers compartilha o mesmo kernel do sistema operacional hospedeiro isolando processos por namespaces e cgroups, proporcionando menor sobrecarga e inicialização muito mais rápida do que máquinas virtuais com hipervisores.",
    "fonte": "provas/2021_PV_bacharelado_ciencia_computacao.pdf e 2021_PV_licenciatura_ciencia_computacao.pdf"
  },
  {
    "id": 62,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2021 · Sistemas de Informação (Bacharelado) · Q16 · _correlata_",
    "exame": "ENADE",
    "ano": 2021,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A computação em nuvem é caracterizada por um conjunto de recursos virtualizados e disponibilizados via internet. Os recursos podem ser configurados dinamicamente, fornecendo a base para a escalabilidade sob demanda. O vínculo com a computação em nuvem geralmente se baseia em um modelo de pagamento por uso, no qual as garantias são oferecidas por meio de SLAs (acordos de nível de serviço) personalizados. Os provedores de computação em nuvem oferecem essas camadas aos clientes por meio de várias interfaces (incluindo ferramentas de linha de comando, ambientes de programação e interfaces Web), levando a três tipos diferentes de serviços:\n\n- Infraestrutura como Serviço (IaaS);\n- Plataforma como Serviço (PaaS);\n- Software como Serviço (SaaS).\n\n*(VAQUERO, L. M. et al. A Break in the Clouds: Towards a Cloud Definition. ACM SIGCOMM Computer Communication Review, 2009, adaptado.)*\n\nConsiderando as informações apresentadas, avalie as afirmações a seguir.\n\nI. O uso do IaaS é recomendado para pequenas e médias empresas cujo crescimento da infraestrutura não acompanha sua expansão, bem como para empresas que possuem demandas oscilantes, como lojas virtuais.\n\nII. O uso de IaaS e SaaS não é recomendado quando há restrições legais quanto ao armazenamento ou terceirização dos dados, como ocorre muitas vezes em empresas e autarquias públicas.\n\nIII. O uso de SaaS é recomendado para grandes empresas que estão dispostas a investir em grande escala na compra de licenças.\n\nIV. O uso de PaaS não é indicado para empresas que possuem um time próprio de desenvolvedores.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e II."
      },
      {
        "letra": "B",
        "texto": "I e III."
      },
      {
        "letra": "C",
        "texto": "III e IV."
      },
      {
        "letra": "D",
        "texto": "I, II e IV."
      },
      {
        "letra": "E",
        "texto": "II, III e IV."
      }
    ],
    "gabarito": "A",
    "explicacao": "O armazenamento distribuído em nuvem viabiliza políticas corporativas de backup seguro por meio de replicação geográfica automática, alta durabilidade de dados e eliminação de custos com fitas e mídias magnéticas físicas locais.",
    "fonte": "provas/2021_PV_bacharelado_sistema_informacao.pdf"
  },
  {
    "id": 63,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2021 · Tecnologia em Gestão da TI · Q15 · _correlata_",
    "exame": "ENADE",
    "ano": 2021,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A implantação de soluções tecnológicas baseadas em software como um serviço (SaaS - *Software as a Service*) é uma tendência mundial. São exemplos o Google Apps e o Sales Force.\n\n*(MANOEL, V. Cloud Computing: nova Arquitetura da TI. Rio de Janeiro: Brasport, 2012, adaptado.)*\n\nAcerca da arquitetura computacional de tecnologias baseadas em SaaS, avalie as asserções a seguir e a relação proposta entre elas.\n\nI. Os SaaS são soluções hospedadas na nuvem para uma grande quantidade de clientes, como uma alternativa ao processamento local.\n\n**PORQUE**\n\nII. Os softwares oferecidos como um serviço por provedores são acessados pelos clientes por meio de navegadores, já o gerenciamento da rede, dos sistemas operacionais, dos servidores e do armazenamento é realizado principalmente pelo provedor de serviços.\n\nA respeito dessas asserções, assinale a alternativa correta.",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
      },
      {
        "letra": "B",
        "texto": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
      },
      {
        "letra": "C",
        "texto": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
      },
      {
        "letra": "D",
        "texto": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
      },
      {
        "letra": "E",
        "texto": "As asserções I e II são proposições falsas."
      }
    ],
    "gabarito": "A",
    "explicacao": "A adoção de soluções em nuvem do tipo SaaS transfere as responsabilidades operacionais de manutenção de hardware, aplicação de patches de segurança e infraestrutura para o provedor do serviço, reduzindo custos de TI internos.",
    "fonte": "provas/2021_PV_tecnologia_gestao_tecnologia_informacao.pdf"
  },
  {
    "id": 64,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2021 · Tecnologia em Análise e Desenv. de Sistemas · Q19 · _correlata_",
    "exame": "ENADE",
    "ano": 2021,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Arquitetura de software é uma representação que permite analisar a efetividade do projeto no entendimento dos requisitos declarados. Durante a fase de concepção da arquitetura, podem-se considerar alternativas de arquitetura em um estágio em que mudanças ainda são realizadas com menor esforço, diminuindo riscos associados à construção do software ainda na fase inicial.\n\n*(PRESSMAN, R. S. Engenharia de Software: uma abordagem profissional. 8. ed. Porto Alegre: AMGH, 2016, adaptado.)*\n\nA respeito dos estilos e padrões arquiteturais contidos na engenharia de software, avalie as afirmações a seguir.\n\nI. Em arquiteturas orientadas a objetos, a comunicação entre os componentes do software é realizada por intermédio da troca de mensagens.\n\nII. As arquiteturas monolíticas consistem de um sistema dividido em pequenas partes, possibilitando que estas tenham sua manutenção, execução e evolução individual.\n\nIII. No padrão arquitetural Modelo-Visão-Controle (MVC), a camada de Modelo armazena as interações realizadas no Controle, podendo ser apresentados/manipulados posteriormente na Visão.\n\nIV. Nas arquiteturas microsserviços, o software possui componentes altamente acoplados, dificultando a manutenção.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e III."
      },
      {
        "letra": "B",
        "texto": "II e III."
      },
      {
        "letra": "C",
        "texto": "II e IV."
      },
      {
        "letra": "D",
        "texto": "I, II e IV."
      },
      {
        "letra": "E",
        "texto": "I, III e IV."
      }
    ],
    "gabarito": "A",
    "explicacao": "Em sistemas baseados em microsserviços, cada serviço deve manter baixo acoplamento gerenciando seu próprio banco de dados de forma autônoma (padrão Database per Service), comunicando-se com outros serviços por APIs bem definidas.",
    "fonte": "provas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf"
  },
  {
    "id": 65,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2023 · Engenharia da Computação · Q20 · _correlata_",
    "exame": "ENADE",
    "ano": 2023,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "Computação em nuvem representa um conceito relativo ao compartilhamento de recursos, tais como capacidade de processamento, armazenamento, comunicação de dados e pessoal qualificado para manter sistemas computacionais disponíveis na internet. Quando esse compartilhamento constitui um serviço disponível para qualquer pessoa, o serviço é conhecido como nuvem pública. Quando as mesmas tecnologias são empregadas para uma única empresa, não permitindo que terceiros utilizem parte dos recursos, temos uma nuvem privada.\n\nConsiderando as vantagens que o gerente de uma empresa espera obter na contratação de um serviço de nuvem pública, avalie as afirmações a seguir.\n\nI. Um serviço de nuvem pública proporciona a redução de custos operacionais, pois é possível dimensionar a necessidade desses recursos com base na demanda, visto que há momentos em que a empresa precisa de mais recursos e há momentos em que ela precisa de menos recursos.\n\nII. Um serviço de nuvem pública gera aumento da velocidade de execução do software e de acesso ao software a partir de qualquer localidade, pois a nuvem pública garante acesso rápido em qualquer parte do mundo, o que contrasta com um servidor localizado na cidade da empresa.\n\nIII. Um serviço de nuvem pública viabiliza a redução do investimento inicial com equipamentos, com infraestrutura e com pessoal para iniciar a operação, visto que torna possível adiar a instalação desses recursos na empresa até que a operação se demonstre economicamente viável.\n\nIV. Um serviço de nuvem pública propicia aumento de segurança da informação, pois as rotinas de segurança são responsabilidade do administrador da nuvem pública, não do contratante, o que contrasta com um servidor localizado dentro da empresa.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e II."
      },
      {
        "letra": "B",
        "texto": "I e III."
      },
      {
        "letra": "C",
        "texto": "II e IV."
      },
      {
        "letra": "D",
        "texto": "I, III e IV."
      },
      {
        "letra": "E",
        "texto": "II, III e IV."
      }
    ],
    "gabarito": "B",
    "explicacao": "A computação em névoa (Fog Computing) e a computação de borda (Edge Computing) situam o processamento e a análise prévia de dados fisicamente próximos aos dispositivos sensores, reduzindo substancialmente a latência e o tráfego de rede para a nuvem central.",
    "fonte": "provas/2023_PV_engenharia_da_computacao.pdf"
  },
  {
    "id": 66,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2023 · Engenharia da Computação · Q27",
    "exame": "ENADE",
    "ano": 2023,
    "correlata": false,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "A técnica de virtualização de hardware consiste em emular um computador no qual a camada de software é executada sem que detalhes do computador físico e de seus componentes sejam expostos. Em um ambiente de computação distribuída, a técnica pode ser útil para que o sistema operacional e os softwares do usuário sejam executados em uma máquina virtual com características permanentes, em conformidade com o que foi projetado, verificado e validado, mesmo que um computador físico diferente seja empregado.\n\nCom base nesse contexto, é correto afirmar que",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "adquirir licenças de software do usuário no volume de uma licença para cada computador físico, o que favorece a economia de licenças, pois softwares em máquinas virtuais não correspondem a cópias extras."
      },
      {
        "letra": "B",
        "texto": "utilizar um computador com capacidade extra de comunicação de dados para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais consome mais recursos de rede do que o mesmo sistema distribuído sendo executado em um computador físico."
      },
      {
        "letra": "C",
        "texto": "utilizar um computador com capacidade extra de memória principal para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais requer mais espaço de memória física do que o mesmo sistema distribuído sendo executado em um computador físico."
      },
      {
        "letra": "D",
        "texto": "adquirir computadores físicos com processadores similares para favorecer a compatibilidade, pois sistemas distribuídos fortemente acoplados compartilham recursos intensamente, funcionando de forma mais eficiente em máquinas virtuais quando os computadores físicos são compatíveis."
      },
      {
        "letra": "E",
        "texto": "adquirir dispositivos de armazenamento físico com, pelo menos, o dobro da capacidade do dispositivo virtual a ser usado a fim de favorecer a disponibilidade, pois os sistemas operacionais da máquina virtual e da máquina física devem ter espaço equivalente de dados para que exista o mapeamento direto entre o dispositivo virtual e o dispositivo físico."
      }
    ],
    "gabarito": "C",
    "explicacao": "A técnica de virtualização com hipervisores Tipo 1 (bare-metal) executa diretamente sobre o hardware da máquina hospedeira sem intermediários, enquanto hipervisores Tipo 2 rodam como processos sobre um sistema operacional existente.",
    "fonte": "provas/2023_PV_engenharia_da_computacao.pdf"
  },
  {
    "id": 67,
    "tema_id": 8,
    "tema": "8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT",
    "titulo": "ENADE 2023 · Engenharia da Computação · Q11 · _correlata_",
    "exame": "ENADE",
    "ano": 2023,
    "correlata": true,
    "tipo": "multipla_escolha",
    "anulada": false,
    "enunciado": "O protocolo de roteamento interno OSPF (*open shortest path first*) representa um sistema autônomo (SA) como um grafo ponderado, em que roteadores são os vértices, conexões entre os roteadores são as arestas e atrasos nas conexões são os pesos. No OSPF, a identificação de cada conexão e seu respectivo atraso são passados de roteador em roteador até que todos os roteadores formem uma base de dados com o grafo que descreve o SA. O OSPF utiliza uma versão distribuída do algoritmo de caminhos mínimos de Dijkstra para computar as melhores rotas para todos os possíveis destinos e para produzir as tabelas de rotas para cada roteador. Cada rota computada é a que apresenta o menor valor para a soma dos atrasos nas conexões usadas na rota entre a rede de origem e a rede de destino.\n\nAcerca do protocolo OSPF e com base nas informações apresentadas no texto, avalie as afirmações a seguir.\n\nI. Quando há diferentes caminhos possíveis entre uma origem e um destino, a rota selecionada é a que apresenta o menor número de conexões.\n\nII. Há uma instância da base de dados relativa a conexões e a atrasos, formando o grafo que descreve o SA em cada roteador que compõe o SA.\n\nIII. O algoritmo de Dijkstra é executado por um único roteador dentro do SA e a tabela de rotas resultante é passada para todos os roteadores no SA.\n\nIV. Para todos os roteadores dentro de um SA, há a necessidade de tráfego de informações acerca de atrasos e de conexões entre roteadores.\n\nÉ correto apenas o que se afirma em",
    "svg_diagrama": null,
    "alternativas": [
      {
        "letra": "A",
        "texto": "I e III."
      },
      {
        "letra": "B",
        "texto": "II e III."
      },
      {
        "letra": "C",
        "texto": "II e IV."
      },
      {
        "letra": "D",
        "texto": "I, II e IV."
      },
      {
        "letra": "E",
        "texto": "I, III e IV."
      }
    ],
    "gabarito": "C",
    "explicacao": "No protocolo de roteamento OSPF: cada roteador mantém uma instância completa da base de dados de estados de enlace de todo o Sistema Autônomo (II) e há tráfego de atualização periódico e por eventos sobre conexões e métricas (IV). O cálculo das rotas por Dijkstra é feito local e individualmente por cada roteador (III incorreta).",
    "fonte": "provas/2023_PV_engenharia_da_computacao.pdf"
  }
];

window.QUESTOES_PROVA_DATA = [
  {
    "id": 1,
    "tema": "Características de Sistemas Distribuídos",
    "enunciado": "Um sistema centralizado é um concentrador de recursos; um sistema distribuído apresenta seus recursos dispersos. Entretanto nem todo o conjunto de recursos computacionais dispersos pode ser considerado um sistema distribuído. Considerando um conjunto de computadores, assinale a alternativa que melhor corresponde às características necessárias para considerá-lo um sistema distribuído:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "suporte de rede e um relógio global"
      },
      {
        "letra": "B",
        "texto": "existência de sistema operacional idêntico e hardware padronizado em todos os computadores"
      },
      {
        "letra": "C",
        "texto": "existência de memória compartilhada e relógios locais sincronizados"
      },
      {
        "letra": "D",
        "texto": "suporte de rede e funções primitivas de comunicação"
      },
      {
        "letra": "E",
        "texto": "existência de memória secundária compartilhada e protocolos de sincronização de estado"
      }
    ],
    "gabarito": "D",
    "explicacao": "A base essencial para que múltiplos computadores autônomos formem um sistema distribuído é a capacidade de comunicar através de uma rede com primitivas de envio e recepção de mensagens. Um relógio físico global único não existe em sistemas distribuídos (invalida a opção com relógio global); a heterogeneidade de hardware e de sistemas operacionais é habitual, dispensando uniformidade (invalida a opção de SO idêntico e hardware padronizado); e a arquitetura não exige memória compartilhada, física ou secundária, funcionando no modelo de nós desacoplados (shared-nothing) (invalida as opções com memória compartilhada).",
    "tipo": "multipla_escolha",
    "anulada": false,
    "fonte": "Avaliação de Sistemas Distribuídos"
  },
  {
    "id": 2,
    "tema": "Tipos de Sistemas Distribuídos",
    "enunciado": "Associe cada tipo de sistema distribuído (coluna da esquerda) ao exemplo ou característica que melhor o descreve (coluna da direita):\n\n**Coluna da Esquerda (Tipo de sistema):**\n- I. Computação em cluster\n- II. Computação em grade (grid)\n- III. Sistema de informação distribuído (cliente-servidor)\n- IV. Sistema pervasivo\n\n**Coluna da Direita (Exemplo / Característica):**\n- (P) Rede de sensores que coleta dados do ambiente e os repassa a um ponto de processamento, em sistemas que se adaptam ao contexto e são ubíquos.\n- (Q) Conjunto de computadores homogêneos, conectados por rede local de alta velocidade, normalmente com o mesmo sistema operacional e gerenciados por um único nó mestre.\n- (R) Federação de recursos computacionais de diferentes domínios administrativos, altamente heterogêneos, formando uma organização virtual.\n- (S) Aplicações em que clientes enviam requisições a servidores (por exemplo, bancos de dados), muitas vezes agrupadas em transações.\n\nAssinale a alternativa com a associação correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "I-S, II-R, III-Q, IV-P"
      },
      {
        "letra": "B",
        "texto": "I-Q, II-R, III-P, IV-S"
      },
      {
        "letra": "C",
        "texto": "I-Q, II-R, III-S, IV-P"
      },
      {
        "letra": "D",
        "texto": "I-R, II-Q, III-S, IV-P"
      },
      {
        "letra": "E",
        "texto": "I-Q, II-S, III-R, IV-P"
      }
    ],
    "gabarito": "C",
    "explicacao": "A associação correta é I-Q, II-R, III-S, IV-P:\n\n- **I → Q:** Os clusters consistem em máquinas homogêneas ligadas por redes de baixa latência sob gestão centralizada.\n- **II → R:** Os sistemas em grade (grid) articulam recursos heterogêneos dispersos por múltiplos domínios administrativos (organizações virtuais).\n- **III → S:** Os sistemas de informação distribuídos clássicos assentam no modelo cliente-servidor transacional.\n- **IV → P:** A computação pervasiva foca-se na ubiquidade, sensoriamento ambiental e adaptação ao contexto.",
    "tipo": "multipla_escolha",
    "anulada": false,
    "fonte": "Avaliação de Sistemas Distribuídos"
  },
  {
    "id": 3,
    "tema": "Middleware, Interceptadores e Transparência",
    "enunciado": "Em sistemas distribuídos, o middleware pode facilitar a comunicação entre componentes e contribuir para a transparência do sistema. Considere as afirmações:\n\n1. O middleware oferece uma camada de software entre as aplicações e os mecanismos de comunicação subjacentes.\n2. Um interceptador pode capturar e tratar uma requisição ou mensagem antes que ela chegue ao seu destino.\n3. A transparência de distribuição procura ocultar determinados aspectos da distribuição dos recursos e componentes.\n4. A arquitetura do sistema e o middleware são conceitos idênticos, sem diferenças de finalidade ou responsabilidade.\n\nAlternativas de resposta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "as afirmações 1, 3 e 4 são verdadeiras."
      },
      {
        "letra": "B",
        "texto": "as afirmações 1, 2 e 3 são verdadeiras."
      },
      {
        "letra": "C",
        "texto": "Todas as afirmações são verdadeiras."
      },
      {
        "letra": "D",
        "texto": "as afirmações 2 e 4 são verdadeiras."
      },
      {
        "letra": "E",
        "texto": "as afirmações 1 e 2 são verdadeiras."
      }
    ],
    "gabarito": "B",
    "explicacao": "As afirmações 1, 2 e 3 definem com precisão o papel do middleware, a operação de interceptadores e o propósito da transparência. A afirmação 4 é incorreta porque arquitetura (a organização conceitual e estrutural dos componentes) e middleware (a camada de software mediadora com serviços de integração) são conceitos distintos com finalidades diferentes.",
    "tipo": "multipla_escolha",
    "anulada": false,
    "fonte": "Avaliação de Sistemas Distribuídos"
  },
  {
    "id": 4,
    "tema": "Mobilidade e Migração de Código",
    "enunciado": "A migração de código permite transferir código entre máquinas de um sistema distribuído. Sobre esse mecanismo, analise as afirmações:\n\n1. Pode permitir que o processamento seja realizado mais próximo dos recursos ou dados necessários.\n2. Pode reduzir a comunicação pela rede quando o código é executado próximo aos dados.\n3. Pode envolver a transferência de código e, dependendo do modelo, de dados ou do estado de execução.\n4. Aplica-se apenas à transferência de dados; aplica-se apenas para a execução de tarefas.\n\nQual alternativa descreve corretamente as afirmações verdadeiras?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "as afirmações 1 e 4 são verdadeiras"
      },
      {
        "letra": "B",
        "texto": "as afirmações 1, 2 e 4 são verdadeiras"
      },
      {
        "letra": "C",
        "texto": "Todas as afirmações são verdadeiras"
      },
      {
        "letra": "D",
        "texto": "as afirmações 1, 2 e 3 são verdadeiras"
      },
      {
        "letra": "E",
        "texto": "as afirmações 2, 3 e 4 são verdadeiras"
      }
    ],
    "gabarito": "D",
    "explicacao": "A mobilidade de código aproxima o processamento dos dados locais (1), poupando tráfego de rede (2). Pode ocorrer como mobilidade fraca (apenas código ou dados de inicialização) ou mobilidade forte (transferindo todo o estado do processo em execução) (3). A afirmação 4 é falsa porque restringe indevidamente o conceito.",
    "tipo": "multipla_escolha",
    "anulada": false,
    "fonte": "Avaliação de Sistemas Distribuídos"
  },
  {
    "id": 5,
    "tema": "Função dos Interceptadores no Middleware",
    "enunciado": "No contexto da relação entre arquiteturas e middleware, qual é a função dos interceptadores (interceptors) e qual característica eles ajudam a construir?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Os interceptadores são mecanismos de segurança que criptografam todas as mensagens trocadas entre cliente e servidor, garantindo transparência de falhas."
      },
      {
        "letra": "B",
        "texto": "Os interceptadores servem para traduzir protocolos de comunicação entre diferentes sistemas operacionais, focando exclusivamente na transparência de heterogeneidade."
      },
      {
        "letra": "C",
        "texto": "Os interceptadores permitem modificar o comportamento do middleware, sendo utilizados para customizar o processamento de processamento, dados e controle, interceptando mensagens ou requisições."
      },
      {
        "letra": "D",
        "texto": "Os interceptadores são utilizados exclusivamente para balanceamento de carga entre servidores de borda, garantindo transparência de replicação."
      },
      {
        "letra": "E",
        "texto": "Os interceptadores são componentes de hardware que filtram pacotes na camada de rede, assegurando apenas a transparência de acesso."
      }
    ],
    "gabarito": "C",
    "explicacao": "Os interceptadores são mecanismos fundamentais em middlewares modernos para injetar comportamentos (auditoria, segurança, transformações, roteamento) sem alterar o núcleo do sistema ou o código-fonte da aplicação de forma invasiva. As demais opções restringem incorretamente a função a tarefas isoladas ou referem componentes de hardware.",
    "tipo": "multipla_escolha",
    "anulada": false,
    "fonte": "Avaliação de Sistemas Distribuídos"
  },
  {
    "id": 6,
    "tema": "Comunicação por Sockets no Servidor TCP",
    "enunciado": "No contexto de comunicação orientada a conexão (connection-oriented communication), qual é a sequência correta de operações típicas do lado do servidor ao utilizar sockets, conforme os primitivos apresentados no capítulo?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Socket → Listen → Bind → Connect → Accept → Close"
      },
      {
        "letra": "B",
        "texto": "Bind → Socket → Accept → Listen → Read → Close"
      },
      {
        "letra": "C",
        "texto": "Connect → Socket → Bind → Listen → Accept → Close"
      },
      {
        "letra": "D",
        "texto": "Socket → Bind → Listen → Accept → Read → Write → Close"
      },
      {
        "letra": "E",
        "texto": "Socket → Connect → Write → Read → Close"
      }
    ],
    "gabarito": "D",
    "explicacao": "No modelo TCP clássico com sockets de Berkeley, o servidor cria o ponto de terminação com socket(), vincula-o a um porto/endereço local com bind(), ativa a escuta passiva através de listen(), bloqueia para aguardar e acolher o cliente com accept(), executa a troca de mensagens (read() / write()) e conclui a ligação com close(). A chamada connect() é exclusiva do lado do cliente.",
    "tipo": "multipla_escolha",
    "anulada": false,
    "fonte": "Avaliação de Sistemas Distribuídos"
  },
  {
    "id": 7,
    "tema": "Associação de Interceptadores e Padrões",
    "enunciado": "Em middleware, interceptadores (interceptors) permitem adaptar o comportamento do sistema sem alterar a aplicação. Associe cada objetivo (coluna da esquerda) ao mecanismo/estilo que melhor o atende (coluna da direita):\n\n**Coluna da Esquerda (Objetivo):**\n- I. Desacoplar emissor e receptor de mensagens, de modo que o emissor não precise conhecer a identidade dos receptores.\n- II. Tornar a replicação de um objeto transparente para o cliente.\n- III. Ocultar diferenças de representação de dados entre máquinas heterogêneas.\n- IV. Adaptar dinamicamente o comportamento do middleware (por exemplo, segurança ou balanceamento) sem modificar a aplicação.\n\n**Coluna da Direita (Mecanismo):**\n- (P) Interceptador de requisição que intercepta a chamada, a replica e a envia a várias réplicas, ocultando a replicação do cliente.\n- (Q) Interceptador de mensagem que realiza o empacotamento (marshalling) e a conversão de formatos de dados, ocultando diferenças de representação.\n- (R) Arquitetura baseada em eventos (publish/subscribe), com comunicação referencialmente desacoplada.\n- (S) Middleware adaptativo/reflexivo, usando interceptadores e componentes substituíveis em tempo de execução.\n\nAssinale a alternativa com a associação correta:",
    "alternativas": [
      {
        "letra": "A",
        "texto": "I-R, II-Q, III-P, IV-S"
      },
      {
        "letra": "B",
        "texto": "I-R, II-P, III-Q, IV-S"
      },
      {
        "letra": "C",
        "texto": "I-S, II-P, III-Q, IV-R"
      },
      {
        "letra": "D",
        "texto": "I-P, II-R, III-Q, IV-S"
      },
      {
        "letra": "E",
        "texto": "I-R, II-P, III-S, IV-Q"
      }
    ],
    "gabarito": "B",
    "explicacao": "A associação correta é I-R, II-P, III-Q, IV-S:\n\n- **I → R:** A publicação/subscrição garante o desacoplamento referencial e espacial entre produtores e consumidores.\n- **II → P:** Um interceptador de requisição replica a invocação para os membros de um grupo sem que o cliente tenha conhecimento da existência de múltiplas réplicas.\n- **III → Q:** A conversão de dados e marshalling resolve diferenças de endianness e representação de tipos de dados.\n- **IV → S:** O paradigma de middleware adaptativo e reflexivo foca-se na reconfiguração dinâmica de componentes e interceptadores durante a execução.",
    "tipo": "multipla_escolha",
    "anulada": false,
    "fonte": "Avaliação de Sistemas Distribuídos"
  }
]
;
