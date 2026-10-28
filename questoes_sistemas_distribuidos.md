# Questões de Sistemas Distribuídos — ENADE e POSCOMP

Compilação das questões de **sistemas distribuídos** encontradas nos documentos do projeto (provas e gabaritos do ENADE 2014, 2017, 2019, 2021 e 2023, e do POSCOMP 2002–2022). Foram selecionadas **67 questões** (44 do POSCOMP e 23 do ENADE), organizadas por tema e com o gabarito oficial de cada uma.

## Como ler este documento

- **Núcleo**: a questão trata diretamente de conceitos de sistemas distribuídos (transparência, RPC, relógios lógicos, exclusão mútua distribuída, replicação, tolerância a falhas, cliente-servidor, P2P etc.).
- **_correlata_**: a questão aborda tecnologias normalmente vistas em SD (nuvem, virtualização, microsserviços, IoT, arquitetura em camadas, SGBD distribuído) mas com foco mais amplo. São 13 das 67.
- O campo **Fonte** indica o PDF de origem, relativo à raiz do projeto.
- O gabarito segue os arquivos oficiais de gabarito presentes no projeto. Questões anuladas estão sinalizadas.

## Alinhamento com o programa do POSCOMP

O edital do POSCOMP 2019 (`poscomp/2019/edital.pdf`) lista o tópico **Sistemas Distribuídos** em Tecnologia da Computação:

> Problemas Básicos em Computação Distribuída: Coordenação e Sincronização de Processos, Exclusão Mútua, Difusão de Mensagens. Compartilhamento de Informação: Controle de Concorrência, Transações Distribuídas. Comunicação entre Processos. Tolerância a Falhas. Sistemas Operacionais Distribuídos: Sistemas de Arquivos, Servidores de Nomes, Memória Compartilhada, Segurança.

Os temas 3 a 7 abaixo seguem essa mesma divisão.

## Distribuição por tema

| Tema | POSCOMP | ENADE | Total |
|---|---:|---:|---:|
| 1. Conceitos, características e projeto de sistemas distribuídos | 8 | 3 | 11 |
| 2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads | 5 | 5 | 10 |
| 3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web | 9 | 1 | 10 |
| 4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição | 8 | 0 | 8 |
| 5. Replicação, consistência e sistemas de arquivos distribuídos | 5 | 0 | 5 |
| 6. Falhas e tolerância a falhas | 4 | 0 | 4 |
| 7. Transações e bancos de dados distribuídos | 3 | 1 | 4 |
| 8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT | 2 | 13 | 15 |
| **Total** | **44** | **23** | **67** |

Observação: no POSCOMP, as questões de SD aparecem de forma recorrente nas últimas posições da área de Tecnologia da Computação (aproximadamente as questões 61–70 entre 2004 e 2019). Em 2022 não há questão de SD, e a edição de 2002 também não traz nenhuma.

---

## 1. Conceitos, características e projeto de sistemas distribuídos

#### POSCOMP 2003 · Questão 69

Um sistema centralizado é um concentrador de recursos; um sistema distribuído apresenta seus recursos dispersos. Entretanto nem todo o conjunto de recursos computacionais dispersos pode ser considerado um sistema distribuído. Considerando um conjunto de computadores, assinale a alternativa que melhor corresponde às características necessárias para considerá-lo um sistema distribuído:

- (a) existência de memória compartilhada e relógios locais sincronizados
- (b) suporte de rede e funções primitivas de comunicação
- (c) suporte de rede e um relógio global
- (d) existência de sistema operacional idêntico e hardware padronizado em todos os computadores
- (e) existência de memória secundária compartilhada e protocolos de sincronização de estado

**Fonte:** `poscomp/2003/03_tec.pdf`  
**Gabarito oficial:** B

#### POSCOMP 2003 · Questão 70

Entre as desvantagens e vantagens de um sistema distribuído em relação um sistema centralizado, podemos afirmar que um sistema distribuído apresenta:

- i. a desvantagem de possuir maior quantidade de componentes e portanto maior probabilidade de um componente individual qualquer apresentar defeito mas a vantagem de possibilitar continuar a computação em outro computador do sistema se um dos computadores falhar.
- ii. a desvantagem de maior tempo de inicialização devido a maior quantidade de computadores no sistema do sistema mas a vantagem de maior flexibilidade de acesso a dados remotos.
- iii. a desvantagem da necessidade de máquinas homogêneas mas a vantagem de possibilitar operar num sistema com uma única forma de acesso a arquivos de dados.
- iv. a desvantagem de maior latência para alcançar um recurso localizado em outro computador do sistema mas a vantagem de permitir executar de programas concorrentemente.

Assinale a alternativa correta:

- (a) i e ii são verdadeiras
- (b) iii e iv são verdadeiras
- (c) i e iii são verdadeiras
- (d) ii e iv são verdadeiras
- (e) i e iv são verdadeiras

**Fonte:** `poscomp/2003/03_tec.pdf`  
**Gabarito oficial:** questão anulada

#### POSCOMP 2004 · Questão 64

Assinale a opção que melhor completa o parágrafo abaixo:

Sistemas distribuídos e computadores paralelos com múltiplos processadores fortemente acoplados possuem algumas características comuns, como a existência de vários processadores e a possibilidade de executar tarefas simultâneas, uma em cada processador, em um dado instante de tempo. Mas um sistema distribuído diferencia-se de um sistema multiprocessador fortemente acoplado principalmente porque o sistema distribuído:

- a) apresenta suporte de rede de alta velocidade e um relógio global compartilhado.
- b) exige um sistema operacional de rede e hardware padronizado nos computadores.
- c) não apresenta memória compartilhada nem relógio global.
- d) possui memória secundária compartilhada e protocolos de sincronização de estado.
- e) exige um ambiente de administração único e medidas especiais de segurança contra associações ilícitas.

**Fonte:** `poscomp/2004/01_prova.pdf`  
**Gabarito oficial:** C

#### POSCOMP 2007 · Questão 69

Analise as seguintes afirmativas concernentes a questões de projeto de sistemas distribuídos.

- I. Um sistema distribuído tolerante a falhas deve continuar operando na presença de problemas, podendo ocorrer uma degradação tanto no seu desempenho, como nas suas funcionalidades.
- II. No que diz respeito à escalabilidade, o projeto de um sistema distribuído deve prever que a demanda nos serviços em qualquer dos equipamentos seja limitada por uma constante dependente do número de nodos envolvidos.
- III. Em um sistema distribuído transparente quanto à concorrência, a informação de quantos usuários estão empregando determinado serviço deve ser omitida.

A análise permite concluir que

- (a) somente a afirmativa I está incorreta.
- (b) somente a afirmativa II está incorreta.
- (c) somente a afirmativa III está incorreta.
- (d) somente as afirmativas I e III estão incorretas.
- (e) todas as afirmativas estão incorretas.

**Fonte:** `poscomp/2007/01_prova.pdf`  
**Gabarito oficial:** B

#### POSCOMP 2007 · Questão 70

Em relação aos sistemas distribuídos, analise as seguintes afirmativas.

- I. Um sistema assíncrono apresenta medida de tempo global.
- II. A passagem de mensagens é o instrumento empregado para efetuar a comunicação entre os processos de um sistema assíncrono.
- III. É possível simular um computador paralelo de memória compartilhada usando-se um sistema distribuído.
- IV. Quando um determinado elemento de um sistema distribuído efetua a difusão de uma mensagem por meio de um multicast, todos os elementos do sistema distribuído recebem a mensagem.

A análise permite concluir que

- (a) somente a afirmativa IV está correta.
- (b) somente as afirmativas I e II estão corretas.
- (c) somente as afirmativas I e III estão corretas.
- (d) somente as afirmativas II e III estão corretas.
- (e) somente as afirmativas I e IV estão corretas.

**Fonte:** `poscomp/2007/01_prova.pdf`  
**Gabarito oficial:** D

#### POSCOMP 2011 · Questão 68

Qual dos parâmetros a seguir tem maior impacto sobre o desempenho de algoritmos distribuídos?

- a) O volume total de dados transferidos.
- b) A transparência de dados.
- c) A transparência de execução.
- d) A política de escalonamento de tarefas em cada nó do sistema.
- e) O número de mensagens trocadas.

**Fonte:** `poscomp/2011/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2015 · Questão 64

Um dos objetivos do projeto de um Sistema Distribuído é fornecer transparência, ocultando aspectos distribuídos dos usuários do sistema. Um sistema transparente proporciona um ambiente em que os seus componentes apresentam-se logicamente centralizados, mesmo fisicamente separados. Entre os vários tipos de transparência que os sistemas distribuídos podem fornecer, o ocultamento do fato de que há várias cópias de um recurso disponíveis no sistema é conhecido como

- (A) transparência de acesso.
- (B) transparência de transação.
- (C) transparência de replicação.
- (D) transparência de concorrência
- (E) transparência de migração.

**Fonte:** `poscomp/2015/01_prova.pdf`  
**Gabarito oficial:** C

#### POSCOMP 2019 · Questão 62

Sobre transparência em sistemas distribuídos, é correto afirmar que:

- A) Transparência de concorrência trata de ocultar diferenças em representações de dados e do modo como os recursos podem ser acessados pelos usuários.
- B) Transparência de migração é a situação na qual recursos podem ser relocados enquanto estão sendo acessados, sem que o usuário ou a aplicação percebam.
- C) Transparência de replicação oculta o fato de que existem várias cópias do recurso.
- D) Na transparência de relocação, recursos podem ser movimentados sem afetar o modo como podem ser acessados.
- E) Transparência de acesso refere-se ao fato de que os usuários não podem dizer qual é a localização física de um recurso no sistema.

**Fonte:** `poscomp/2019/01_prova.pdf`  
**Gabarito oficial:** C

#### ENADE 2017 · Tecnologia em Análise e Desenv. de Sistemas · Q18

As redes de computadores estão por toda a parte. A internet é uma delas, assim como as várias redes das quais ela é composta, que compartilham recursos por meio de Sistemas Distribuídos. Como o número de dispositivos tem crescido exponencialmente, em vez de paralelizar tarefas em várias máquinas, tornou-se cada vez mais importante empregar sistemas distribuídos, comunicando e coordenando dispositivos e, assim, contribuindo para o cotidiano de empresas, governos e demais instituições.

*(COULOURIS, G. et al. Sistemas Distribuídos: conceitos e projeto, 5. ed. Porto Alegre: Bookman, 2013, adaptado.)*

Nesse contexto, assinale a opção que apresenta exemplos atuais de sistemas distribuídos.

- A) Pesquisa na *web*, jogos *on-line*, *E-Commerce* e o banco de dados das agências bancárias.
- B) Jogos *on-line*, *E-Commerce*, pesquisa no *Windows* e *e-mails*.
- C) *E-Commerce*, jogos em mídia física, pesquisa no *Windows* e redes sociais.
- D) Pesquisa na *web*, jogos em mídia física, *E-Commerce* e *e-mails*.
- E) Pesquisa no *Windows*, pesquisa na *web*, jogos *on-line* e o banco de dados das agências bancárias.

**Fonte:** `provas/41_TEC_ANA_DES_SIS_BAIXA.pdf` (p. 23)  
**Gabarito oficial:** A

#### ENADE 2021 · Ciência da Computação (Bacharelado) · Q35

Um sistema distribuído é aquele no qual os componentes de hardware ou software, localizados em computadores interligados em rede, comunicam-se e coordenam suas ações apenas enviando mensagens entre si.

*(COULOURIS, G. et al. Sistemas distribuídos: conceitos e projeto. 5. ed., Porto Alegre: Bookman, 2013, adaptado.)*

Com base na definição apresentada e nos conceitos básicos de sistemas distribuídos, assinale a opção correta.

- A) A existência de um relógio físico local sincronizado com um relógio global é o que permite aos usuários de um sistema distribuído trocarem mensagens de forma coordenada.
- B) A falha de um componente em um sistema distribuído *peer-to-peer* causa a interrupção de todos os demais componentes até o seu retorno.
- C) O compartilhamento dos recursos distribuídos entre computadores interligados por uma rede é possível desde que os dispositivos sejam homogêneos em termos de hardware e software.
- D) A adição de novos dispositivos em um sistema distribuído para atender a uma demanda temporária ou crescente está ligada à característica de escalabilidade do sistema.
- E) A possibilidade de vários clientes acessarem de forma concorrente um mesmo recurso compartilhado em um servidor é resultado do alto nível de transparência do sistema.

**Fonte:** `provas/2021_PV_bacharelado_ciencia_computacao.pdf`  
**Gabarito oficial:** D

#### ENADE 2023 · Engenharia da Computação · Q38

Os sistemas distribuídos consistem em múltiplos componentes de software que se comunicam e que cooperam entre si para realizar tarefas complexas. Um padrão arquitetural comumente utilizado em sistemas distribuídos é o de microsserviços, o qual divide o sistema em componentes independentes e escaláveis, cada um executando sua própria funcionalidade específica. Essa abordagem facilita a manutenção, o teste e a escalabilidade do sistema como um todo.

Em relação a esse tema, qual dos seguintes benefícios é associado à arquitetura de microsserviços em sistemas distribuídos?

- A) Capacidade de escalabilidade.
- B) Garantia de consistência de dados.
- C) Melhor desempenho de processamento.
- D) Menor consumo de recursos de hardware.
- E) Redução da complexidade de comunicação entre os componentes.

**Fonte:** `provas/2023_PV_engenharia_da_computacao.pdf`  
**Gabarito oficial:** A

## 2. Modelos arquiteturais: cliente-servidor, P2P, centralizado, processos e threads

#### POSCOMP 2003 · Questão 64

Em relação ao paradigma de programação cliente-servidor. Qual das afirmativas abaixo é FALSA?

- (a) Um aplicativo servidor inicia ativamente o contato com clientes arbitrários.
- (b) Um aplicativo servidor aceita contato de clientes arbitrários, mas oferece um único serviço.
- (c) Um aplicativo cliente é um programa arbitrário que se torna temporariamente um cliente quando for necessário o acesso remoto a um serviço, mas também executa processamento local.
- (d) Um aplicativo cliente pode acessar múltiplos serviços quando necessário.
- (e) Um aplicativo servidor é um programa de propósito especial dedicado a fornecer um serviço, mas pode tratar de múltiplos clientes remotos ao mesmo tempo.

**Fonte:** `poscomp/2003/03_tec.pdf`  
**Gabarito oficial:** A

#### POSCOMP 2009 · Questão 54

Em relação à arquitetura cliente/servidor, usada na implementação de sistemas distribuídos, analise as seguintes afirmativas:

- I. A arquitetura cliente/servidor define um modelo de interação entre processos clientes e servidores que resolve o problema do rendezvous: clientes iniciam a comunicação e servidores esperam por requisições.
- II. Em servidores sem estado (informações de estado não são mantidas entre o processamento de requisições), o significado de uma mensagem do cliente não deve depender da sequência de mensagens anteriores.
- III. Um programa cliente individual opera como um programa convencional, ele não precisa gerenciar concorrência explicitamente na comunicação com o servidor.

Assinale a alternativa CORRETA:

- A) Apenas a afirmativa I é verdadeira
- B) Apenas a afirmativa II é verdadeira
- C) Apenas a afirmativa III é verdadeira
- D) Apenas as afirmativas I e II são verdadeiras
- E) Todas as afirmativas são verdadeiras

**Fonte:** `poscomp/2009/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2012 · Questão 63

Sistemas peer-to-peer são uma aplicação de sistemas distribuídos, em que usuários compartilham (transferem) arquivos remotos de forma bastante transparente. Um desses sistemas é o BitTorrent, que faz uso de computadores distribuídos na internet para troca de arquivos. Em particular, este faz uso de uma política chamada tit-for-tat para incentivar o compartilhamento de arquivos (em vez de simples cópias sem retribuição), em que se dá mais prioridade para download aos clientes que estejam também gerando uploads. Além de melhorar o compartilhamento, outra vantagem do BitTorrent é

- a) dificultar a identificação de padrões de transferência de arquivos ao misturar fluxos em várias direções.
- b) permitir o download de arquivos de maior tamanho.
- c) reduzir a possibilidade de se perder a conexão com o cliente.
- d) reduzir a quantidade de peers necessários no sistema.
- e) fazer melhor uso da banda de passagem.

**Fonte:** `poscomp/2012/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2014 · Questão 64

A correta utilização de processos e threads é fundamental para garantir o desempenho e a transparência de sistemas distribuídos. Sobre esse tema, considere as afirmativas a seguir.

- I. A sobreposição de threads em um processo é o principal recurso para obtenção de alto grau de transparência de distribuição em redes com longos tempos de propagação de mensagens.
- II. A desvantagem de se estruturar um programa para utilizar múltiplas threads é que ele ficará dependente de sistemas multiprocessadores.
- III. O modelo de threads implementado pelo sistema operacional deve ser aquele em que o gerenciamento de threads fica inteiramente no espaço de cada processo para evitar trocas de contexto entre processos e o núcleo (kernel) no chaveamento de threads.
- IV. Servidores multithreaded têm melhor desempenho se estruturados com ao menos uma thread despachante e várias threads operárias para recebimento e processamento de requisições.

Assinale a alternativa correta.
- a) Somente as afirmativas I e II são corretas.
- b) Somente as afirmativas I e IV são corretas.
- c) Somente as afirmativas III e IV são corretas.
- d) Somente as afirmativas I, II e III são corretas.
- e) Somente as afirmativas II, III e IV são corretas.

**Fonte:** `poscomp/2014/01_prova.pdf`  
**Gabarito oficial:** B

#### POSCOMP 2019 · Questão 67

Processos, em um sistema distribuído, são divididos em dois grupos, com possível sobreposição. Um servidor é um processo que implementa um serviço específico. Um cliente é um processo que requisita um serviço de um servidor enviando-lhe uma requisição e, na sequência, esperando pela resposta do servidor. Esse é um exemplo de arquitetura:

- A) Multidividida.
- B) Peer-to-peer estruturada.
- C) Descentralizada.
- D) Peer-to-peer não estruturada.
- E) Centralizada.

**Fonte:** `poscomp/2019/01_prova.pdf`  
**Gabarito oficial:** E

#### ENADE 2014 · Tecnologia em Redes de Computadores · Q20

Os Sistemas Operacionais de Redes (SOR) são uma extensão dos Sistemas Operacionais Locais (SOL), voltados para tornar transparente o uso dos recursos compartilhados, com funções de gerenciamento do acesso ao sistema de comunicação e às estações remotas para utilização de recursos de *hardware* e *software* remotos.

Com relação aos SOR, avalie as afirmações a seguir.

I. A extensão do sistema operacional das estações é feita por meio de um módulo redirecionador que funciona interceptando as chamadas das aplicações ao sistema operacional local, desviando aquelas que dizem respeito a recursos remotos para o módulo do sistema operacional de rede, que providencia o acesso ao dispositivo remoto.

II. A interface entre as aplicações e o sistema operacional baseia-se em interações solicitação/resposta. A aplicação solicita um serviço, por meio de uma chamada ao sistema operacional que executa o serviço solicitado e responde, informando o status da operação e transferindo os dados resultantes da execução para a aplicação, quando for o caso.

III. A interação cliente-servidor constitui-se no modo básico dos sistemas operacionais de redes. As estações que disponibilizam seus recursos a outras estações devem possuir a entidade (ou módulo) servidor. As estações que permitem que suas aplicações utilizem recursos compartilhados com outras estações devem possuir a entidade (ou módulo) cliente.

IV. Pode-se classificar os módulos de um SOR instalados nas estações em dois tipos: SORC (módulo cliente) e SORS (módulo servidor do sistema operacional).

É correto o que se afirma em

- A) I, apenas.
- B) I e II, apenas.
- C) III e IV, apenas.
- D) II, III e IV, apenas.
- E) I, II, III e IV.

**Fonte:** `provas/43_tecnologia_redes_computadores.pdf` (p. 21)  
**Gabarito oficial:** E

#### ENADE 2014 · Sistemas de Informação · Q23

Uma companhia com abrangência global decidiu implantar um novo sistema de compartilhamento de informações empresariais. Após estudos de campo, a empresa identificou alguns cenários de utilização das informações. No primeiro cenário, detectou-se que um volume massivo de dados relativos a documentos históricos, normas e regulamentos da organização eram consumidos, em escala global, exclusivamente para leitura. No segundo cenário, verificou-se que documentos eram produzidos de forma colaborativa por equipes regionais de colaboradores. Esses colaboradores, na maioria das vezes, estavam na mesma filial ou geograficamente muito próximos. O terceiro cenário envolvia apenas 10% dos documentos da empresa, acessados concorrentemente por todas as regionais do globo, tanto para leitura quanto para atualização.

Com base nesses cenários e em relação às arquiteturas de *software* distribuídas coerentemente com as necessidades da empresa, avalie as afirmações a seguir.

I. A utilização de arquitetura *peer-to-peer* (P2P) para disponibilizar os documentos do cenário 1 poderá reduzir o consumo da rede.

II. O compartilhamento baseado no modelo cliente-servidor com *cache* no cliente pode aumentar o desempenho da edição colaborativa, sem comprometer a consistência no cenário 2.

III. A utilização de replicação baseada em cópia primária pode aumentar a escalabilidade do sistema, sem comprometer, de forma significativa, a consistência de dados no cenário 3.

IV. Se o modelo cliente-servidor de compartilhamento for empregado no cenário 2, a replicação passiva (*backup* ou *mirroring*) poderá ser utilizada como mecanismo de tolerância a falhas.

V. A arquitetura *peer-to-peer* baseada em rede *overlay*, tal como o DHT, pode oferecer transparência de migração para os documentos compartilhados no cenário 1.

É correto o que se afirma em

- A) III, apenas.
- B) I e II, apenas.
- C) II, IV e V, apenas.
- D) I, III, IV e V, apenas.
- E) I, II, III, IV e V.

**Fonte:** `provas/39_sistemas_informacao.pdf` (p. 21)  
**Gabarito oficial:** D

#### ENADE 2021 · Tecnologia em Redes de Computadores · Q22

Em uma arquitetura cliente-servidor, para que uma aplicação ou serviço seja acessado, é necessário que uma comunicação seja estabelecida entre aquele que necessita (cliente) e aquele que disponibiliza o recurso (servidor).

Considerando o texto apresentado, avalie as asserções a seguir e a relação proposta entre elas.

I. Quando um programador desenvolve uma aplicação ou serviço de rede, é necessário utilizar um *socket* para unir o endereço IP da interface de rede com uma porta específica.

**PORQUE**

II. O *socket* possibilita ao sistema operacional identificar qual porta a aplicação está respondendo, permitindo que o fluxo de dados seja entregue corretamente.

A respeito dessas asserções, assinale a opção correta.

- A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
- B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.
- C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
- D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
- E) As asserções I e II são proposições falsas.

**Fonte:** `provas/2021_PV_tecnologia_redes_computadores.pdf` (p. 29)  
**Gabarito oficial:** A

#### ENADE 2017 · Sistemas de Informação · Q22 · _correlata_

A tendência atual de desenvolver aplicações que possam ser utilizadas em nuvem otimiza o desempenho de máquinas locais, munidas de poucos recursos computacionais, em uma rede e garante a possibilidade desses computadores utilizarem outros recursos computacionais de maior desempenho, bem como a inserção de novos *hosts* neste ambiente computacional, sem comprometimento do sistema como um todo.

Esse cenário pressupõe a utilização de sistema operacional com

- A) arquitetura monolítica.
- B) arquiteturas em camadas.
- C) arquitetura monocamadas.
- D) arquiteturas cliente-servidor.
- E) arquiteturas de máquinas virtuais.

**Fonte:** `provas/40_SIS_INFORMACAO_BAIXA.pdf` (p. 27)  
**Gabarito oficial:** D

#### ENADE 2014 · Tecnologia em Análise e Desenv. de Sistemas · Q18 · _correlata_

Nos anos 70, os sistemas executavam em *mainframes* com aplicativos escritos em linguagens estruturadas e com todas as funcionalidades em um único módulo, com grande quantidade de linhas de código. Acessos a bancos de dados não relacionais, regras de negócios e tratamento de telas para terminais "burros" ficavam no mesmo programa. Posteriormente, uma importante mudança ocorreu: a substituição dos terminais "burros" por microcomputadores, permitindo que todo o tratamento da interface, e de algumas regras de negócios, passassem a ser feitas nas estações clientes. Surgiram as aplicações cliente-servidor. A partir dos anos 90, até os dias atuais, as mudanças foram mais radicais, os bancos de dados passaram a ser relacionais e distribuídos. As linguagens passaram a ser orientadas a objetos, cuja modelagem encapsula dados e oferece funcionalidades através de métodos. A interface passou a ser *web*. Vive-se a era das aplicações em três camadas.

Considerando a evolução da arquitetura de *software* de sistemas de informação, conforme citado no texto acima, avalie as seguintes afirmações.

I. A separação dos sistemas em três camadas lógicas torna os sistemas mais complexos, requerendo pessoal mais especializado.

II. A separação dos sistemas em três camadas lógicas torna os sistemas mais flexíveis, permitindo que as partes possam ser alteradas de forma independente.

III. A separação dos sistemas em três camadas lógicas aumentou o acoplamento, dificultando a manutenção.

É correto o que se afirma em

- A) II, apenas.
- B) III, apenas.
- C) I e II, apenas.
- D) I e III, apenas.
- E) I, II e III.

**Fonte:** `provas/40_tecnologia_analise_desenv_sistemas.pdf` (p. 18)  
**Gabarito oficial:** C

## 3. Comunicação entre processos: RPC, sockets, mensagens, publish/subscribe, serviços web

#### POSCOMP 2005 · Questão 68

Segundo o W3C (World Wide Web Consortium), um Serviço Web é um sistema de software projetado para permitir a interação entre máquinas numa rede. Selecione a afirmação incorreta sobre Serviços Web:

- (a) A interface do Serviço Web é descrita em WSDL.
- (b) A representação dos dados é feita em XML.
- (c) O transporte das mensagens é feito tipicamente pelo HTTP.
- (d) Pode-se compor Serviços Web através de orquestração de serviços.
- (e) Cliente e Servidor devem ser escritos na mesma linguagem de programação.

**Fonte:** `poscomp/2005/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2006 · Questão 68

A comunicação entre processos em um sistema distribuído pode ser realizada por um mecanismo conhecido como RPC - chamada de procedimento remoto. Sobre este mecanismo, assinale a opção correta abaixo:

- (a) Processos comunicantes compartilham o mesmo espaço de endereçamento.
- (b) Os stubs cliente e servidor são responsáveis pela conversão de formato dos parâmetros de entrada e saída, caso haja necessidade.
- (c) A geração dos stubs é comumente realizada por compilação a partir de uma especificação de interface realizada em uma linguagem de execução de interface (IEL).
- (d) O mecanismo faz uso de uma porta fixa, de número 8080, para comunicar diferentes processos e serviços entre computadores de um sistema distribuído.
- (e) A falha de um cliente RPC gera uma chamada dita orfã no servidor que neste caso repassa sempre os resultados do procedimento remoto para um proxy de retorno especificado na chamada

**Fonte:** `poscomp/2006/01_prova.pdf`  
**Gabarito oficial:** B

#### POSCOMP 2008 · Questão 14

Sobre a comunicação entre processos distribuídos, é CORRETO afirmar

- A) que, no modo síncrono de envio de mensagem, o processo que recebe a mensagem terá sua execução desviada por uma interrupção de sistema operacional para tratar uma mensagem recebida.
- B) que um processo tem no máximo uma porta (port) para receber as mensagens dos seus interlocutores.
- C) que multiportas são estruturas do tipo portas multicast que permitem a comunicação N x M entre processos.
- D) que, nos sockets do tipo datagrama, o endereço do socket do processo correspondente acompanha cada envio de mensagem como um parâmetro da primitiva sendto().
- E) que, nos sockets do tipo datagrama, a primitiva sNew() é usada para aceitar a conexão solicitada por um processo que solicita comunicação.

**Fonte:** `poscomp/2008/01_prova.pdf`  
**Gabarito oficial:** D

#### POSCOMP 2010 · Questão 59

O mecanismo de RPC é bastante utilizado para a programação em sistemas distribuídos. Implementações mais eficientes desse mecanismo permitem a realização de RPC assíncrono, em que

- a) o processo que faz a chamada pode fazer uso de redes assíncronas.
- b) o processo que recebe a chamada pode responder várias chamadas simultaneamente.
- c) o processo que recebe a chamada responde chamadas assíncronas com máxima prioridade.
- d) o processo que faz a chamada pode continuar executando após receber confirmação da transmissão.
- e) os dois processos bloqueiam os demais, a fim de ter acesso exclusivo ao meio de comunicação.

**Fonte:** `poscomp/2010/01_prova.pdf`  
**Gabarito oficial:** D

#### POSCOMP 2012 · Questão 61

O uso de RPC é considerado um marco no desenvolvimento de sistemas distribuídos por possibilitar que a programação desses sistemas seja semelhante à programação de sistemas convencionais.
Assinale a alternativa que apresenta, corretamente, as características essenciais para se obter esse status.

- a) Adoção de linguagens orientadas a objetos.
- b) Adoção de linguagens voltadas à internet.
- c) Uso de protocolos eficientes de conexão.
- d) Programação através de interfaces.
- e) Uso de DSM (Distributed Shared Memory ).

**Fonte:** `poscomp/2012/01_prova.pdf`  
**Gabarito oficial:** D

#### POSCOMP 2014 · Questão 67

A comunicação entre processos de sistemas distribuídos não pode ser por memória compartilhada, somente por trocas de mensagens de baixo nível. Por esse motivo, foram desenvolvidas várias técnicas que permitem expressar a comunicação de formas intermediárias, entre elas a chamada de procedimento remoto (RPC). Em relação à RPC, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir.

- (   ) A Interface Definition Language (IDL) é utilizada para declarar e definir os algoritmos e suas variáveis, que estão disponíveis em um servidor para os clientes poderem utilizar.
- (   ) Máquinas baseadas em processadores little endian não podem realizar RPC com máquinas baseadas em processadores big endian.
- (   ) O procedimento mínimo de execução de uma RPC envolve o envio dos parâmetros de chamada e das instruções de máquina a serem executadas.
- (   ) É uma técnica para permitir a comunicação entre dois processos localizados em máquinas distintas, ao mesmo tempo que esconde do programador a troca de mensagens.
- (   ) Parâmetros passados como valor devem ser copiados e, quando muito, codificados. Já a passagem de parâmetros por referência não tem uma solução geral, precisam ser tratados caso a caso.

Assinale a alternativa que contém, de cima para baixo, a sequência correta.

- a) V, V, V, F, F.       b) V, V, F, V, F.        c) V, F, F, F, V.          d) F, V, V, V, F.   e) F, F, F, V, V.

**Fonte:** `poscomp/2014/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2017 · Questão 62

Qual é o estilo de comunicação indireta no qual publicadores divulgam eventos estruturados para um serviço de eventos e assinantes expressam interesse em eventos específicos por meio de assinaturas?

- A) Comunicação em grupo.
- B) Sistema publicar-assinar.
- C) Filas de mensagens.
- D) Memória compartilhada distribuída.
- E) Espaços de tuplas.

**Fonte:** `poscomp/2017/01_prova.pdf`  
**Gabarito oficial:** B

#### POSCOMP 2017 · Questão 67

Analise as seguintes afirmações sobre comunicação entre processos em sistemas distribuídos:

- I. A essência da comunicação persistente é que uma mensagem apresentada para transmissão é armazenada pelo sistema de comunicação pelo tempo que for necessário para entregá-la.
- II. Em comunicação transiente, nenhuma facilidade de armazenamento é oferecida de modo que o receptor deve estar preparado para aceitar a mensagem quando ela for enviada.
- III. Em comunicação síncrona, o remetente tem permissão de continuar imediatamente após a mensagem ter sido apresentada para transmissão, possivelmente antes de ela ter sido enviada.
- IV. Em comunicação assíncrona, o remetente é bloqueado no mínimo até que uma mensagem seja recebida. Alternativamente, o remetente pode ser bloqueado até ocorrer a entrega da mensagem ou, até mesmo, até que o receptor tenha respondido.

Quais estão corretas?

- A) Apenas I e II.
- B) Apenas III e IV.
- C) Apenas I, II e III.
- D) Apenas II, III e IV.
- E) I, II, III e IV.

**Fonte:** `poscomp/2017/01_prova.pdf`  
**Gabarito oficial:** A

#### POSCOMP 2018 · Questão 64

Quando um processo na máquina A chama um procedimento na máquina B, o processo chamador em A é suspenso, e a execução do procedimento chamado ocorre em B. Informações podem ser transportadas do chamador para quem foi chamado nos parâmetros e podem voltar no resultado do procedimento. Absolutamente nada da troca de mensagens é visível para o programador. Esse método é conhecido como:

- A) Chamada de Procedimento Remoto (RPC).
- B) Protocolo Universal de Datagramas (UDP).
- C) Protocolo de Transporte em Tempo Real (RTP).
- D) Middleware Orientado a Mensagem (MOM).
- E) Linguagem de Programação de Interface (IDL).

**Fonte:** `poscomp/2018/01_prova.pdf`  
**Gabarito oficial:** A

#### ENADE 2023 · Engenharia da Computação · Q35

O TCP (*Transmission Control Protocol*) e o UDP (*User Datagram Protocol*) são opções frequentemente usadas em sistemas distribuídos para realizar transferência de dados entre máquinas, ainda que não sejam os únicos protocolos que funcionam com base no protocolo IP (*Internet Protocol*).

Com relação a esses protocolos, avalie as afirmações a seguir.

I. O protocolo TCP é usado para implementar o mecanismo de *sockets* utilizado em sistemas distribuídos, como mecanismo de troca de mensagens confiável.

II. O protocolo UDP é mais eficiente do que o protocolo TCP quanto ao tempo de envio de dados entre os nós de um sistema distribuído, pois gera menor *overhead*.

III. O protocolo UDP é uma escolha adequada para fluxos de dados em tempo real, especialmente daqueles dados que admitem perda ou corrupção de parte de seu conteúdo, tais como vídeos ou voz.

É correto o que se afirma em

- A) II, apenas.
- B) III, apenas.
- C) I e II, apenas.
- D) I e III, apenas.
- E) I, II e III.

**Fonte:** `provas/2023_PV_engenharia_da_computacao.pdf`  
**Gabarito oficial:** E

## 4. Tempo, ordenação de eventos, sincronização, exclusão mútua e eleição

#### POSCOMP 2003 · Questão 63

Algoritmos distribuídos podem usar passagem de "token"por um anel lógico para implementar exclusão mútua ou ordenação global de mensagens. Nesses algoritmos apenas o processo que possui o "token"tem a permissão de usar um recurso compartilhado ou numerar mensagens, por exemplo. Considerando o conceito acima podemos afirmar que:

- (a) a abordagem deve tratar no mínimo dois tipos de defeitos: perda do "token"e colapso de processos
- (b) para usar essa a abordagem os computadores precisam estar conectados em uma rede com topologia em anel
- (c) nessa abordagem é impossível evitar a geração espontânea de vários "tokens"mesmo em sistemas livre de falhas
- (d) a abordagem é adequada apenas para sistemas onde possa ser controlado o tempo que cada computador permanece com o "token"
- (e) a abordagem é pouco robusta pois a perda do "token"por um processo provoca o bloqueio do algoritmo distribuído que a usa

**Fonte:** `poscomp/2003/03_tec.pdf`  
**Gabarito oficial:** A

#### POSCOMP 2005 · Questão 69

Considere o diagrama espaço-tempo da Figura 2; ele representa uma computação distribuída onde os eventos de cada processo são rotulados por relógios lógicos que atendem à definição de relógio lógico realizada por Leslie Lamport. Cada processo implementa o seu relógio lógico e usa um incremento diferente do usado pelos demais; os incrementos utilizados por P0, P1 e P2 podem ser determinados a partir dos rótulos dos eventos rotulados que aparecem na Figura 2. Qual das alternativas apresenta os tempos lógicos para os eventos não rotulados de cada processo?

*(A Figura 2 — diagrama espaço-tempo com os processos P0, P1 e P2 — está no PDF original: `poscomp/2005/01_prova.pdf`.)*

- (a) P1 (14, 21, 28, 35, 42, 49, 56, 63, 70); P2 (40, 45, 50)
- (b) P1 (14, 21, 28, 35, 42, 67, 74, 81, 88); P2 (40, 79, 84)
- (c) P1 (8, 15, 22, 29, 36, 61, 68, 75, 88); P2 (40, 69, 74)
- (d) P1 (8, 15, 22, 29, 36, 43, 50, 57, 64); P2 (40, 45, 50)
- (e) P1 (8, 15, 22, 29, 36, 49, 56, 63, 70); P2 (40, 45, 50)

**Fonte:** `poscomp/2005/01_prova.pdf`  
**Gabarito oficial:** B

#### POSCOMP 2006 · Questão 69

Sobre algoritmos de exclusão mútua em sistemas distribuídos é correto afirmar que:

- (a) O algoritmo centralizado tem como principal desvantagem o alto número de troca de mensagens.
- (b) O algoritmo distribuído é totalmente independente da ordem dos eventos do sistema distribuído.
- (c) A maioria simples de permissões dos participantes para entrada em região crítica é suficiente para garantir a exclusão mútua no algoritmo distribuído.
- (d) No algoritmo do token , a exclusão mútua é garantida por uma concessão de bloqueio fornecida pelo gerente que mantém uma lista de tokens.
- (e) Três mensagens são suficientes para fechar o ciclo de concessão, liberação e nova concessão de acesso no algoritmo do token.

**Fonte:** `poscomp/2006/01_prova.pdf`  
**Gabarito oficial:** C

#### POSCOMP 2010 · Questão 57

O problema de tratamento de regiões críticas é agravado em sistemas distribuídos, nos quais a não existência de um controle centralizado dificulta a exclusão mútua. No algoritmo de Ricart-Agrawala, a entrada na região crítica, quando mais de um processo quer entrar nela, é feita após o processo

- a) não ter recebido requisição dos demais processos antes de fazer sua requisição.
- b) passar a ter o menor valor de relógio lógico entre todos os processos.
- c) receber autorização de entrada dos demais processos, sendo a mesma concedida quando o valor do relógio lógico de quem autoriza for maior que o de quem solicita.
- d) receber autorização de entrada dos demais processos, sendo a mesma concedida quando o valor do relógio lógico de quem autoriza for menor que o de quem solicita.
- e) receber autorização de entrada dos processos que tenham valor de relógio lógico menor.

**Fonte:** `poscomp/2010/01_prova.pdf`  
**Gabarito oficial:** C

#### POSCOMP 2013 · Questão 64

Algoritmos de eleição são usados como mecanismo para recuperar a operabilidade de algum serviço dentro de um sistema distribuído. Com base nessa informação, assinale a alternativa correta.

- a) O relógio de Lamport é mais eficiente para realizar a eleição por ser baseado em relações temporais.
- b) Serviços providos através de controle central não necessitam de mecanismos de eleição por já determinarem o eleito.
- c) O algoritmo de Maekawa garante a conclusão da eleição com um número de mensagens menor do que o de Bullying.
- d) O algoritmo de Eleição em Anel pode ser aplicado em qualquer situação de falha.
- e) O algoritmo de Bullying garante a definição da eleição se o meio de comunicação for confiável e suficientemente rápido.

**Fonte:** `poscomp/2013/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2014 · Questão 62

A sincronização entre processos e máquinas de um sistema distribuído é requisito fundamental para o funcionamento de diversos algoritmos e aplicações. Sobre esse tema, assinale a alternativa correta.

- a) Se o relógio interno de um componente está adiantado em relação aos outros, basta atrasá-lo imediatamente para que volte à sincronia e os aplicativos continuem funcionando.
- b) O problema de sincronização não pode ser resolvido com a troca de mensagens entre os componentes (computadores) do sistema distribuído, uma vez que o próprio deslocamento da mensagem leva tempo indeterminado e impossibilita a operação.
- c) Em um sistema distribuído com necessidade de sincronia, todos os componentes devem estar marcando o mesmo tempo t, que representa a hora coordenada universal (UTC), para que as aplicações funcionem.
- d) Em sistemas distribuídos dependentes de tempo real, os contadores de tempo dos componentes de um sistema não precisam conter o mesmo valor interno, basta haver uma função de transformação coordenada para esses valores.
- e) Computadores sem receptores de hora coordenada universal (UTC) não podem participar de algoritmos dependentes dessa marcação de tempo.

**Fonte:** `poscomp/2014/01_prova.pdf`  
**Gabarito oficial:** D

#### POSCOMP 2015 · Questão 62

Em um Sistema Distribuído, a ordenação causal assegura que todos os processos reconheçam que um evento deve acontecer somente após a ocorrência de todos os eventos dos quais ele é dependente. A ordenação causal pode ser implementada pela relação acontece antes, representada como a → b. Esta relação determina que se a e b são eventos de um mesmo processo e a aconteceu antes de b, então a → b. Esta relação também estabelece que, se o evento a for o envio de uma mensagem e o evento b for o recebimento desta mesma mensagem, então a → b. Finalmente, esta relação é transitiva, ou seja, se a → b e b → c, então a → c. Considere a existência de três processos: P1, P2 e P3, cada um residindo em um nó de processamento distinto. Estes processos estão representados no diagrama espaço-tempo abaixo. A direção vertical representa o espaço (ou seja, processos diferentes) e a direção horizontal representa o tempo. Uma seta em diagonal indica uma mensagem enviada de um processo para outro. As letras minúsculas representam os eventos.

*(O diagrama espaço-tempo dos processos P1, P2 e P3 está no PDF original, p. 23.)*

De acordo com o diagrama apresentado, uma ordenação causal destes eventos, consistente com a relação acontece antes, seria:

- (A) a b c d e f g h i k m
- (B) a e i b f k m c g d h
- (C) e a b i c d f k g m h
- (D) e i a b k f c g d m h
- (E) i a b e f k m c g h d

**Fonte:** `poscomp/2015/01_prova.pdf`  
**Gabarito oficial:** D

#### POSCOMP 2018 · Questão 67

Qual é a classe de algoritmos de sincronização que assegura que, em um conjunto de processos distribuídos, pelo menos, um processo por vez tem acesso a um recurso compartilhado?

- A) Relógios vetoriais.
- B) Eleição.
- C) Exclusão mútua distribuída.
- D) Relógios lógicos.
- E) Posicionamento global.

**Fonte:** `poscomp/2018/01_prova.pdf`  
**Gabarito oficial:** C

## 5. Replicação, consistência e sistemas de arquivos distribuídos

#### POSCOMP 2004 · Questão 65

Considere dois sistemas computacionais formados por múltiplos computadores que manipulam dados comuns. No primeiro, existe um computador central, chamado servidor, que é o único responsável pelos serviços de leitura e escrita desses dados. No segundo, existe um grupo de computadores responsáveis pelos serviços de leitura e escrita, e cada um desses servidores deve manter uma réplica idêntica dos dados.

Entre as vantagens e desvantagens de um único servidor em relação a vários servidores, podemos afirmar que o servidor único apresenta:

- i. Vantagem de maior velocidade de execução das operações de escrita e leitura e desvantagem de maior custo de armazenamento
- ii. Vantagem de não necessitar de coordenação distribuída para ordenação das operações de escrita e desvantagem de menor velocidade nas leituras devido a serialização de operações
- iii. Vantagem de manter mais facilmente a consistência dos dados mas desvantagem de perda de disponibilidade em caso de falha do servidor.

Dessas afirmativas são verdadeiras:
- a) (ii) e (iii)
- b) apenas (ii)
- c) apenas (i)
- d) (i), (iii)
- e) (i), (ii) e (iii)

**Fonte:** `poscomp/2004/01_prova.pdf`  
**Gabarito oficial:** A

#### POSCOMP 2006 · Questão 70

Um sistema distribuído pode manter diferentes cópias de um mesmo item de dado a fim de melhorar o desempenho de leitura e aumentar a disponibilidade de acesso. A modificação deste item de dado é realizada de acordo com protocolos de consistência de cópias. Assinale a alternativa correta sobre esses protocolos.

- (a) O protocolo baseado em cópia primária permite sempre a atualização da cópia mais próxima e difunde o novo valor via unicast para todos os nós que mantém uma outra cópia.
- (b) A atualização de todas as cópias, no protocolo baseado em cópia primária, é realizada através de um processo síncrono, onde o cliente é liberado para continuar o fluxo de execução imediatamente após ter solicitado a atualização da cópia primária.
- (c) Nos protocolos baseados em quorum, os conflitos leitura-escrita e escrita-escrita são evitados por autorizações de bloqueio (lock) emitidas por um coordenador central ou sequenciador.
- (d) Protocolos baseados em coerência de cache são mecanismos de consistência de cópias que repassam a responsabilidade de manter essa consistência para os servidores que detém cópias.
- (e) No protocolo de replicação ativa, todas as réplicas são atualizadas através de uma única operação de escrita realizada por um mecanismo de multicast totalmente ordenado.

**Fonte:** `poscomp/2006/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2007 · Questão 68

Considere as afirmativas sobre um Sistema de Arquivos Distribuídos (SAD).

- I. Um “Servidor de Arquivos com Estado”, em um SAD, mantém todo seu estado no caso de uma falha, garantindo a recuperação do mesmo sem a necessidade de diálogo com os clientes.
- II. II. Na gerência de cache em um SAD, uma das políticas utilizadas é a writethrough. O inconveniente dessa política, comparada com outras, é a pouca confiabilidade no caso de falhas no cliente.
- III. O uso de replicação em um SAD ao mesmo tempo que provê aumento na confiabilidade, também introduz um gargalo em termos de desempenho.

A esse respeito, pode-se afirmar que

- (a) nenhuma das afirmativas está correta.
- (b) somente a afirmativa I está correta.
- (c) somente a afirmativa II está correta.
- (d) somente a afirmativa III está correta.
- (e) somente as afirmativas I e III estão corretas.

**Fonte:** `poscomp/2007/01_prova.pdf`  
**Gabarito oficial:** A

#### POSCOMP 2010 · Questão 60

Sistemas de arquivos distribuídos demandam uma atenção especial pela necessidade de tratamento de requisições múltiplas e garantia de consistência. O sistema CODA (usado em várias versões do UNIX, incluindo o Linux) é eficiente por, entre outras coisas, usar o mecanismo de RPC2 para comunicação. O RPC2 se diferencia de outros mecanismos baseados em RPC por permitir

- a) paralelismo de chamadas e chamadas assíncronas.
- b) paralelismo de chamadas e o uso de protocolos específicos de aplicação.
- c) chamadas assíncronas e garantir a entrega de chamadas.
- d) o uso de protocolos específicos de aplicação e garantir a entrega de chamadas.
- e) chamadas assíncronas e o uso de protocolos específicos de aplicação.

**Fonte:** `poscomp/2010/01_prova.pdf`  
**Gabarito oficial:** B

#### POSCOMP 2011 · Questão 70

O Google File System (GFS) é o sistema de arquivos distribuídos usado pela Google em seus sistemas. Uma característica marcante nele é o uso de blocos fixos de 64 megabytes (chunks) para o armazenamento de arquivos, que são replicados através de cópias em chunkservers, gerenciadas por um mestre em cada cluster.
Assinale a alternativa que contém uma vantagem nessa estrutura.

- a) Permite o acesso sequencial e direto de arquivos completos em um único bloco.
- b) É estritamente compatível com NFS e AFS.
- c) Permite acesso indexado de forma eficiente.
- d) O uso de chunkservers elimina a necessidade de controle de replicação.
- e) Aumenta o volume de metadados para facilitar os processos de busca.

24 / 24

**Fonte:** `poscomp/2011/01_prova.pdf`  
**Gabarito oficial:** A

## 6. Falhas e tolerância a falhas

#### POSCOMP 2004 · Questão 67

Os tipos mais comuns de defeitos em sistemas distribuídos provocados por falhas físicas de componentes ou interferência eletro-magnética são:

- a) perda de arquivos, colapso de servidores, captura de senhas
- b) captura de senhas, sobrecarga de servidores, mensagens duplicadas
- c) perda de mensagens, mensagens com vírus e mensagens órfãs
- d) colapso de servidores, queda do enlace e perda de mensagens
- e) páginas web com endereço errado, spam e mensagens duplicadas

**Fonte:** `poscomp/2004/01_prova.pdf`  
**Gabarito oficial:** D

#### POSCOMP 2005 · Questão 70

A abordagem geral para tolerância a falhas é o uso de redundância. Considere as afirmações a seguir:

- (I) Um exemplo de redundância de informação é o uso de bits extras para permitir a recuperação de bits corrompidos.
- (II) Redundância de tempo é útil principalmente quando as falhas são transientes ou intermitentes.
- (III) Um exemplo de redundância física é o uso de processadores extras.
- (IV) O uso de processadores extras pode ser organizado com replicação ativa ou backup primário.

Estão corretas:

- (a) Somente as afirmações (I),(II) e (III).
- (b) Somente as afirmações (I), (II) e (IV).
- (c) Somente as afirmações (I), (III) e (IV).
- (d) Somente as afirmações (II), (III) e (IV).
- (e) Todas as afirmações.

**Fonte:** `poscomp/2005/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2016 · Questão 62

Uma falha por omissão ocorre quando um processo

- A) não responde a requisições que chegam.
- B) simplesmente para prematuramente.
- C) responde muito cedo a uma requisição.
- D) responde a uma requisição que chega de modo errado.
- E) responde muito tarde a uma requisição.

**Fonte:** `poscomp/2016/01_prova.pdf`  
**Gabarito oficial:** A

#### POSCOMP 2018 · Questão 62

Relacione a Coluna 1 à Coluna 2, associando os diferentes tipos de falha com as suas descrições.

Coluna 1
1. Por queda.
2. Por omissão.
3. De transição de estado.
4. Arbitrária.

Coluna 2

- ( ) O servidor não consegue responder a requisições que chegam.
- ( ) O servidor se desvia do fluxo de controle correto.
- ( ) O servidor produz saídas que nunca deveriam ter produzido, mas não podem ser detectadas como incorretas.
- ( ) O servidor para de funcionar, mas estava funcionando corretamente até parar.

A ordem correta de preenchimento dos parênteses, de cima para baixo, é:

- A) 1 – 2 – 3 – 4.
- B) 4 – 1 – 2 – 3.
- C) 3 – 4 – 1 – 2.
- D) 2 – 3 – 4 – 1.
- E) 4 – 2 – 1 – 3.

**Fonte:** `poscomp/2018/01_prova.pdf`  
**Gabarito oficial:** D

## 7. Transações e bancos de dados distribuídos

#### POSCOMP 2007 · Questão 43

Considere que um Banco de Dados Distribuído siga o protocolo TWO-PHASED COM-MIT e que o nodo X tenha retornado uma resposta negativa na primeira fase, indicando que não pode realizar a operação que lhe cabe. Nesse caso, durante a segunda fase, o coordenador da transação deverá

- (a) avisar o nodo X para completar a tarefa de qualquer forma porque os demais nodos participantes também deverão completar a transação.
- (b) avisar o nodo X para não completar a tarefa e avisar os demais nodos participantes para completarem a transação.
- (c) completar ele mesmo a tarefa que cabia ao nodo X e avisar aos demais nodos participantes para completarem a transação.
- (d) avisar a todos os nodos participantes para completarem a transação.
- (e) avisar a todos os nodos participantes para não completarem a transação.

**Fonte:** `poscomp/2007/01_prova.pdf`  
**Gabarito oficial:** E

#### POSCOMP 2018 · Questão 52

Com respeito à abordagem de cópia distinguida para o controle de concorrência de banco de dados distribuídos, analise as afirmações abaixo e assinale V, se verdadeiras, ou F, se falsas.

- ( ) Uma cópia particular de cada item de dados é eleita como cópia distinguida, para que quaisquer solicitações de bloqueio e desbloqueio sejam desviadas do site que contém tal cópia.
- ( ) Na técnica de site primário, quando uma transação obtém um read_lock, todas as cópias do item de dados devem ser atualizadas antes de liberar o bloqueio.
- ( ) A técnica de cópia primária tenta distribuir a carga de coordenação de bloqueio entre vários sites.
- ( ) O uso de site de backup para a técnica de site primário ameniza o problema de sobrecarga do site primário, o que minimiza gargalos no sistema.
- ( ) A técnica de cópia primária em geral possui menor confiabilidade e menor disponibilidade do que a técnica de site primário.

A ordem correta de preenchimento dos parênteses, de cima para baixo, é:

- A) V – F – F – V – V.
- B) F – V – F – F – F.
- C) F – F – V – F – F.
- D) V – F – F – V – F.
- E) F – V – V – F – V.

**Fonte:** `poscomp/2018/01_prova.pdf`  
**Gabarito oficial:** C

#### POSCOMP 2019 · Questão 64

Uma transação, em sistemas distribuídos, pode ser construída com base em uma quantidade de subtransações. A transação do nível mais alto pode se ramificar e gerar “filhos”, que são executados em paralelo, em máquinas diferentes, para obter ganho de desempenho ou simplificar a programação. Esse é um exemplo de:

- A) Transação aninhada.
- B) Isolamento.
- C) Transação isolada.
- D) Transação atômica.
- E) Durabilidade.

518_EXAME_POSCOMP_NS_15/8/201910:15:04

**Fonte:** `poscomp/2019/01_prova.pdf`  
**Gabarito oficial:** A

#### ENADE 2017 · Tecnologia em Gestão da TI · Q15

A arquitetura de distribuição diz respeito ao modo como uma organização fisicamente distribui entre os seus computadores, em uma rede, o processamento dos dados e o seu banco de dados. Essa arquitetura traz consequências importantes para o desempenho e o uso do banco de dados. As redes de computadores permitem que um Sistema Gerenciador de Banco de Dados (SGBD), que é executado em um computador, possa acessar dados de outro computador.

*(GORDON S.R.; GORDON J.R. Sistemas de Informação: uma abordagem gerencial. 3. ed. Rio de Janeiro: LTC, 2013, adaptado.)*

Considere esse contexto, avalie as descrições a seguir, acerca de opções de arquiteturas de dados utilizados por administradores e especialistas em SGBD.

I. Arquitetura descentralizada: não envolve compartilhamento de dados.

II. Arquitetura centralizada: um único SGBD é executado em um único computador e mantém os dados de forma centralizada.

III. Arquitetura mista: permite, por meio do seu SGBD, que se obtenha um processamento consolidado, com dados distribuídos e centralizados de forma simultânea sem que haja redundância de dados e de processamento.

IV. Arquitetura cliente/servidor: divide as funções de um SGBD entre computadores conectados em uma rede enquanto centraliza o armazenamento permanente para todos os dados em um servidor de banco de dados.

V. Arquitetura distribuída: distribui tanto dados como processamento e não dispõe, necessariamente, de armazenamento centralizado de dados.

É correto apenas o que se descreve em

- A) III e IV.
- B) I, II, e V.
- C) I, III e IV.
- D) II, III e V.
- E) I, II, IV e V.

**Fonte:** `provas/43_TEC_GES_TEC_INF_BAIXA.pdf` (p. 19)  
**Gabarito oficial:** E

## 8. Cluster, grade (grid), nuvem, virtualização, microsserviços e IoT

#### POSCOMP 2004 · Questão 66

Um cluster é definido como um sistema distribuído formado por máquinas homogêneas, executando o mesmo sistema operacional, interligadas por uma rede de alta velocidade. Como vantagens deste cluster em relação a uma máquina de grande porte poderíamos citar:

- i.     melhor escalabilidade de unidades de processamento
- ii.    possibilidade de executar programas com múltiplas threads
- iii.   possibilidade de continuar o processamento isolando máquinas defeituosas
- iv.    possibilidade de executar programas Java usando RMI

Dessas afirmativas são verdadeiras:
- a) (i) e (iii)
- b) (ii) e (iv)
- c) (i) e (iv)
- d) apenas (iii)
- e) (i), (ii), (iii) e (iv)

**Fonte:** `poscomp/2004/01_prova.pdf`  
**Gabarito oficial:** A

#### POSCOMP 2013 · Questão 62 · _correlata_

Um conceito relativamente novo na área de sistemas distribuídos é o de virtualização, com a criação de máquinas virtuais para a execução de aplicações em um processador real. Sobre a aplicação de máquinas virtuais, assinale a alternativa correta.

- a) As máquinas virtuais devem operar sobre o mesmo tipo de hardware da máquina física.
- b) Diferentes máquinas virtuais podem executar, simultaneamente, sobre a máquina física.
- c) O processo de virtualização implica em grandes problemas de segurança para o sistema operacional nativo.
- d) O sistema operacional nativo deve ser do mesmo tipo usado na máquina virtual.
- e) O uso de máquinas virtuais prejudica, enormemente, a velocidade de execução de processos.

**Fonte:** `poscomp/2013/01_prova.pdf`  
**Gabarito oficial:** B

#### ENADE 2014 · Sistemas de Informação · Q16 · _correlata_

A virtualização de servidores, acompanhada de solução para Gerenciamento Eletrônico de Documentos (GED), trouxe uma série de benefícios para as escolas de uma instituição: acumulados ao longo de 50 anos, os prontuários dos estudantes passaram a ser acessados em tempo real, as atividades pedagógicas realizadas em ambiente mais sólido e o gerenciamento centralizado do ambiente passou a permitir que a equipe da instituição se concentre em tarefas estratégicas. No médio prazo, a meta da instituição é virtualizar toda a infraestrutura de servidores e eliminar o uso de papel nos processos, trocando documentos em papel por documentos eletrônicos armazenados nos servidores virtuais e acessíveis em qualquer unidade da rede de escolas.

*(Computerworld. Virtualização: quatro casos de sucesso no Brasil, adaptado.)*

Em relação ao estudo de caso mencionado acima, avalie as asserções a seguir e a relação proposta entre elas.

I. A tecnologia de virtualização de servidores está proporcionando diversos benefícios para as organizações, como redução de custos e de *downtime* e melhoria no desempenho, na segurança e no gerenciamento da infraestrutura de Tecnologia da Informação (TI). No entanto, sozinha, a virtualização não é suficiente para permitir que as organizações se concentrem em tarefas estratégicas.

**PORQUE**

II. A virtualização, se associada a outras tecnologias atuais como GED, *Cloud Computing* e *Grid Computing*, possibilita que as organizações foquem no negócio, eliminando os riscos associados à área de TI.

A respeito dessas asserções, assinale a opção correta.

- A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
- B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.
- C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
- D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
- E) As asserções I e II são proposições falsas.

**Fonte:** `provas/39_sistemas_informacao.pdf` (p. 17)  
**Gabarito oficial:** E

#### ENADE 2017 · Sistemas de Informação · Q31

A *cloud computing* (computação em nuvem) tem o objetivo de fornecer recursos de *hardware* e *software* sob demanda a partir de servidores interligados pela internet, seguindo o princípio da computação em *grid* (grade). Uma arquitetura em *grid* é descrita por meio das quatro camadas a seguir.

- Rede: executa a comunicação e se utiliza da parte física;
- Recursos: formada pelos servidores de armazenamento e/ou processamento;
- *Middleware*: formada pelo *software* responsável pela troca de informações;
- Ferramentas e aplicações: representada pelos aplicativos.

De acordo com o texto, avalie as afirmações a seguir.

I. A camada de ferramentas e aplicações é responsável pela negociação de dados das transações de dados no *grid*.

II. A camada *middleware* é responsável pela interconectividade e comunicação entre os membros do *grid*.

III. A camada de rede é responsável pela conectividade entre os diferentes membros do *grid*.

IV. A camada de recursos é responsável pela segurança dos dados nas aplicações do *grid*.

É correto apenas o que se afirma em

- A) I e II.
- B) II e III.
- C) III e IV.
- D) I, II e IV.
- E) I, III e IV.

**Fonte:** `provas/40_SIS_INFORMACAO_BAIXA.pdf` (p. 32)  
**Gabarito oficial:** B

#### ENADE 2017 · Sistemas de Informação · Q34

No contexto de arquitetura e organização de computadores, o termo *cluster* é usado para designar um grupo de computadores interconectados, trabalhando como um recurso de computação unificado. Cada computador pertencente ao *cluster* é usualmente denominado nó. *Clusters* costumam ser utilizados em ambientes corporativos, sendo particularmente adequados para aplicações baseadas em servidores.

*(STALLINGS, W. Arquitetura e organização de computadores. 8. ed. São Paulo: Prentice Hall, 2010, adaptado.)*

Considerando as informações apresentadas, avalie as afirmações a seguir.

I. Uma falha em um nó de um *cluster* implica em perda total de serviço.

II. A interligação entre os nós de um *cluster* realiza-se por meio de um barramento de controle.

III. A escalabilidade de um *cluster* é maior do que a de um processador com múltiplos núcleos.

IV. A relação custo/desempenho de um *cluster* é melhor do que a de uma única máquina de grande porte.

É correto apenas o que se afirma em

- A) I e III.
- B) II e IV.
- C) III e IV.
- D) I, II e III.
- E) I, II e IV.

**Fonte:** `provas/40_SIS_INFORMACAO_BAIXA.pdf` (p. 34)  
**Gabarito oficial:** C

#### ENADE 2017 · Tecnologia em Gestão da TI · Questão discursiva 04 · _correlata_

Os serviços de computação em nuvem fornecem a Tecnologia da Informação (TI) como serviço pela internet ou por uma rede dedicada, com entrega sob demanda e pagamento com base no uso. Esses serviços variam de aplicativos completos e plataformas de desenvolvimento até servidores, armazenamento e *desktops* virtuais.

Podem-se citar vários serviços de computação em nuvem, por exemplo, a Infraestrutura como Serviço (*Infrastructure as a Service* - IaaS), a Plataforma como Serviço (*Platform as a Service* - PaaS) e o *Software* como Serviço (*Software as a Service* - SaaS).

Considere que uma empresa planeja contratar um serviço de computação em nuvem (IaaS, PaaS ou SaaS), sob demanda, que forneça servidores virtuais e permita a configuração e administração dos sistemas operacionais necessários via internet. Considere, ainda, que a empresa necessita do controle dos sistemas operacionais, rede e sistemas a serem instalados nos servidores virtuais.

Com base nessa situação, defina o serviço de computação em nuvem que mais se adequa a essa empresa e explique o conceito desse serviço. (valor: 10,0 pontos)

**Fonte:** `provas/43_TEC_GES_TEC_INF_BAIXA.pdf` (p. 14)  
**Gabarito oficial:** — (discursiva, sem gabarito)

#### ENADE 2017 · Engenharia da Computação · Q27 · _correlata_

Um sistema monitora o deslocamento de um carro por meio do registro em um banco de dados, de segundo em segundo, das medidas de dois acelerômetros: um na direção longitudinal do movimento do carro, outro na direção transversal.

O projeto desse sistema é decomposto em três subprojetos. O primeiro, denominado MÓDULO_1, formado por *hardware* e *software*, é embarcado no carro e dotado de sistema de comunicação com a internet por GPRS. O segundo, MÓDULO_2, é um projeto de *software* aplicativo executado em plataforma Android para *tablet*, *smartphone* ou celular, para exibição de relatórios para usuários. O terceiro subprojeto, MÓDULO_3, é formado por *hardware* e *software* e instalado em um servidor de banco de dados em nuvem com conexão dedicada permanente com a internet.

O projeto tem as seguintes especificações:

- o MÓDULO_1 comunica-se com o MÓDULO_3 para enviar as leituras obtidas. Como o carro nem sempre está em área de cobertura de celular, é possível que uma comunicação possa enviar as leituras de até um dia inteiro;
- o MÓDULO_2 comunica-se com o MÓDULO_3 para obter os dados exibidos no relatório;
- os relatórios indicam os valores máximos de velocidade e aceleração e as respectivas posições do carro quando eles foram atingidos.

A partir dessas informações, avalie as afirmações a seguir.

I. O MÓDULO_1 deve ter capacidade de armazenamento de dados suficiente para um dia de leituras, a serem enviadas para o MÓDULO_3.

II. Todos os subprojetos têm interface de comunicação pela internet e a interface com o usuário é feita no MÓDULO_2.

III. O melhor local para se executar o processamento dos dados para o relatório é o MÓDULO_1, que está sempre conectado e tem maior capacidade de processamento.

IV. O melhor local para se instalar o banco de dados para as leituras é o MÓDULO_3, que dispõe de maior capacidade de armazenamento e conexão permanente com a internet.

É correto apenas o que se afirma em

- A) I e III.
- B) II e III.
- C) II e IV.
- D) I, II e IV.
- E) I, III e IV.

**Fonte:** `provas/13_ENG_COM_BACHAREL_BAIXA.pdf` (p. 28)  
**Gabarito oficial:** D

#### ENADE 2019 · Engenharia da Computação · Q29 · _correlata_

A Internet das Coisas (*Internet of Things* (IoT)) pode ser definida como um ambiente de objetos físicos interconectados com a internet por meio de sensores/atuadores embutidos, criando um ecossistema de computação onipresente (ubíqua) e introduzindo soluções funcionais nos processos do dia-a-dia, sejam domésticos ou profissionais. É um conjunto de tecnologias e protocolos associados que permitem que objetos se conectem a uma rede de comunicações e sejam identificados e controlados por essa conexão. A IoT usa conceitos, tecnologias e soluções que envolvem sistemas distribuídos e redes de comunicação.

*(MAGRANI, E. A internet das coisas. Rio de Janeiro: FGV Editora, 2018, adaptado.)*

Nesse contexto, avalie as asserções a seguir e a relação proposta entre elas.

I. Em soluções e aplicações para IoT, é preciso garantir que essas funcionarão de forma consistente em um ambiente concorrente, onde ocorrem várias requisições ao mesmo recurso compartilhado.

**PORQUE**

II. Em soluções atuais de IoT existe heterogeneidade, ou seja, dentro do mesmo ecossistema, uma variedade de sistemas operacionais, *hardware*, linguagens de programação e padrões de redes de comunicação são utilizados.

A respeito dessas asserções, assinale a alternativa correta.

- A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
- B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.
- C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
- D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
- E) As asserções I e II são proposições falsas.

**Fonte:** `provas/ENGENHARIA_COMPUTACAO.pdf` (p. 32)  
**Gabarito oficial:** A

#### ENADE 2021 · Ciência da Computação (Bacharelado e Licenciatura) · Q25 · _correlata_

A computação em nuvem (*cloud computing*) pode ser definida como a infraestrutura de comunicação representada por vários servidores web, responsáveis por armazenar dados e aplicações, em que cada parte desta infraestrutura é provida como um serviço e estes são normalmente alocados em centros de dados, utilizando hardware compartilhado para computação e armazenamento. Segundo o Instituto Nacional de Padrões e Tecnologia (NIST), um modelo de Computação em Nuvem deve apresentar 5 características essenciais, 3 modelos de serviço e 4 modelos de implantação. As características essenciais são: *self-service* sob demanda, acesso à rede ampla, *pooling* de recursos, elasticidade rápida e serviço medido. Os modelos de serviços são: Software como um Serviço (SaaS), Plataforma como um Serviço (PaaS) e Infraestrutura como um Serviço (IaaS) e os modelos de implantação são: Nuvem Privada, Nuvem Pública, Nuvem Comunidade e Nuvem Híbrida.

Considerando as informações apresentadas, avalie as afirmações a seguir.

I. No modelo SaaS, o usuário não precisa adquirir ou realizar *upgrade* de hardware para rodar as aplicações, não administra ou controla a infraestrutura subjacente e as atualizações de software são de responsabilidade do provedor do serviço em nuvem.

II. A elasticidade é a capacidade de aumentar ou diminuir de forma automática o tempo de disponibilidade dos recursos computacionais que foram provisionados contratualmente para cada usuário.

III. A Nuvem Comunidade tem como objetivo gerenciar os recursos computacionais pertencentes a cada uma das organizações participantes de uma comunidade de organizações para compartilhar a infraestrutura de software e hardware entre todos.

IV. No modelo IaaS, o usuário não administra ou controla a infraestrutura da nuvem, mas tem controle sobre os sistemas operacionais, armazenamento e aplicativos implantados.

É correto apenas o que se afirma em

- A) I e II.
- B) I e IV.
- C) II e III.
- D) I, III e IV.
- E) II, III e IV.

**Fonte:** `provas/2021_PV_bacharelado_ciencia_computacao.pdf e 2021_PV_licenciatura_ciencia_computacao.pdf`  
**Gabarito oficial:** B

#### ENADE 2021 · Sistemas de Informação (Bacharelado) · Q16 · _correlata_

A computação em nuvem é caracterizada por um conjunto de recursos virtualizados e disponibilizados via internet. Os recursos podem ser configurados dinamicamente, fornecendo a base para a escalabilidade sob demanda. O vínculo com a computação em nuvem geralmente se baseia em um modelo de pagamento por uso, no qual as garantias são oferecidas por meio de SLAs (acordos de nível de serviço) personalizados. Os provedores de computação em nuvem oferecem essas camadas aos clientes por meio de várias interfaces (incluindo ferramentas de linha de comando, ambientes de programação e interfaces Web), levando a três tipos diferentes de serviços:

- Infraestrutura como Serviço (IaaS);
- Plataforma como Serviço (PaaS);
- Software como Serviço (SaaS).

*(VAQUERO, L. M. et al. A Break in the Clouds: Towards a Cloud Definition. ACM SIGCOMM Computer Communication Review, 2009, adaptado.)*

Considerando as informações apresentadas, avalie as afirmações a seguir.

I. O uso do IaaS é recomendado para pequenas e médias empresas cujo crescimento da infraestrutura não acompanha sua expansão, bem como para empresas que possuem demandas oscilantes, como lojas virtuais.

II. O uso de IaaS e SaaS não é recomendado quando há restrições legais quanto ao armazenamento ou terceirização dos dados, como ocorre muitas vezes em empresas e autarquias públicas.

III. O uso de SaaS é recomendado para grandes empresas que estão dispostas a investir em grande escala na compra de licenças.

IV. O uso de PaaS não é indicado para empresas que possuem um time próprio de desenvolvedores.

É correto apenas o que se afirma em

- A) I e II.
- B) I e III.
- C) III e IV.
- D) I, II e IV.
- E) II, III e IV.

**Fonte:** `provas/2021_PV_bacharelado_sistema_informacao.pdf`  
**Gabarito oficial:** A

#### ENADE 2021 · Tecnologia em Gestão da TI · Q15 · _correlata_

A implantação de soluções tecnológicas baseadas em software como um serviço (SaaS - *Software as a Service*) é uma tendência mundial. São exemplos o Google Apps e o Sales Force.

*(MANOEL, V. Cloud Computing: nova Arquitetura da TI. Rio de Janeiro: Brasport, 2012, adaptado.)*

Acerca da arquitetura computacional de tecnologias baseadas em SaaS, avalie as asserções a seguir e a relação proposta entre elas.

I. Os SaaS são soluções hospedadas na nuvem para uma grande quantidade de clientes, como uma alternativa ao processamento local.

**PORQUE**

II. Os softwares oferecidos como um serviço por provedores são acessados pelos clientes por meio de navegadores, já o gerenciamento da rede, dos sistemas operacionais, dos servidores e do armazenamento é realizado principalmente pelo provedor de serviços.

A respeito dessas asserções, assinale a alternativa correta.

- A) As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.
- B) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I.
- C) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.
- D) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.
- E) As asserções I e II são proposições falsas.

**Fonte:** `provas/2021_PV_tecnologia_gestao_tecnologia_informacao.pdf`  
**Gabarito oficial:** A

#### ENADE 2021 · Tecnologia em Análise e Desenv. de Sistemas · Q19 · _correlata_

Arquitetura de software é uma representação que permite analisar a efetividade do projeto no entendimento dos requisitos declarados. Durante a fase de concepção da arquitetura, podem-se considerar alternativas de arquitetura em um estágio em que mudanças ainda são realizadas com menor esforço, diminuindo riscos associados à construção do software ainda na fase inicial.

*(PRESSMAN, R. S. Engenharia de Software: uma abordagem profissional. 8. ed. Porto Alegre: AMGH, 2016, adaptado.)*

A respeito dos estilos e padrões arquiteturais contidos na engenharia de software, avalie as afirmações a seguir.

I. Em arquiteturas orientadas a objetos, a comunicação entre os componentes do software é realizada por intermédio da troca de mensagens.

II. As arquiteturas monolíticas consistem de um sistema dividido em pequenas partes, possibilitando que estas tenham sua manutenção, execução e evolução individual.

III. No padrão arquitetural Modelo-Visão-Controle (MVC), a camada de Modelo armazena as interações realizadas no Controle, podendo ser apresentados/manipulados posteriormente na Visão.

IV. Nas arquiteturas microsserviços, o software possui componentes altamente acoplados, dificultando a manutenção.

É correto apenas o que se afirma em

- A) I e III.
- B) II e III.
- C) II e IV.
- D) I, II e IV.
- E) I, III e IV.

**Fonte:** `provas/2021_PV_tecnologia_analise_desenvolvimento_sistemas.pdf`  
**Gabarito oficial:** A

#### ENADE 2023 · Engenharia da Computação · Q20 · _correlata_

Computação em nuvem representa um conceito relativo ao compartilhamento de recursos, tais como capacidade de processamento, armazenamento, comunicação de dados e pessoal qualificado para manter sistemas computacionais disponíveis na internet. Quando esse compartilhamento constitui um serviço disponível para qualquer pessoa, o serviço é conhecido como nuvem pública. Quando as mesmas tecnologias são empregadas para uma única empresa, não permitindo que terceiros utilizem parte dos recursos, temos uma nuvem privada.

Considerando as vantagens que o gerente de uma empresa espera obter na contratação de um serviço de nuvem pública, avalie as afirmações a seguir.

I. Um serviço de nuvem pública proporciona a redução de custos operacionais, pois é possível dimensionar a necessidade desses recursos com base na demanda, visto que há momentos em que a empresa precisa de mais recursos e há momentos em que ela precisa de menos recursos.

II. Um serviço de nuvem pública gera aumento da velocidade de execução do software e de acesso ao software a partir de qualquer localidade, pois a nuvem pública garante acesso rápido em qualquer parte do mundo, o que contrasta com um servidor localizado na cidade da empresa.

III. Um serviço de nuvem pública viabiliza a redução do investimento inicial com equipamentos, com infraestrutura e com pessoal para iniciar a operação, visto que torna possível adiar a instalação desses recursos na empresa até que a operação se demonstre economicamente viável.

IV. Um serviço de nuvem pública propicia aumento de segurança da informação, pois as rotinas de segurança são responsabilidade do administrador da nuvem pública, não do contratante, o que contrasta com um servidor localizado dentro da empresa.

É correto apenas o que se afirma em

- A) I e II.
- B) I e III.
- C) II e IV.
- D) I, III e IV.
- E) II, III e IV.

**Fonte:** `provas/2023_PV_engenharia_da_computacao.pdf`  
**Gabarito oficial:** B

#### ENADE 2023 · Engenharia da Computação · Q27

A técnica de virtualização de hardware consiste em emular um computador no qual a camada de software é executada sem que detalhes do computador físico e de seus componentes sejam expostos. Em um ambiente de computação distribuída, a técnica pode ser útil para que o sistema operacional e os softwares do usuário sejam executados em uma máquina virtual com características permanentes, em conformidade com o que foi projetado, verificado e validado, mesmo que um computador físico diferente seja empregado.

Com base nesse contexto, é correto afirmar que

- A) adquirir licenças de software do usuário no volume de uma licença para cada computador físico, o que favorece a economia de licenças, pois softwares em máquinas virtuais não correspondem a cópias extras.
- B) utilizar um computador com capacidade extra de comunicação de dados para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais consome mais recursos de rede do que o mesmo sistema distribuído sendo executado em um computador físico.
- C) utilizar um computador com capacidade extra de memória principal para favorecer o seu desempenho, pois um sistema distribuído em máquinas virtuais requer mais espaço de memória física do que o mesmo sistema distribuído sendo executado em um computador físico.
- D) adquirir computadores físicos com processadores similares para favorecer a compatibilidade, pois sistemas distribuídos fortemente acoplados compartilham recursos intensamente, funcionando de forma mais eficiente em máquinas virtuais quando os computadores físicos são compatíveis.
- E) adquirir dispositivos de armazenamento físico com, pelo menos, o dobro da capacidade do dispositivo virtual a ser usado a fim de favorecer a disponibilidade, pois os sistemas operacionais da máquina virtual e da máquina física devem ter espaço equivalente de dados para que exista o mapeamento direto entre o dispositivo virtual e o dispositivo físico.

**Fonte:** `provas/2023_PV_engenharia_da_computacao.pdf`  
**Gabarito oficial:** C

#### ENADE 2023 · Engenharia da Computação · Q11 · _correlata_

O protocolo de roteamento interno OSPF (*open shortest path first*) representa um sistema autônomo (SA) como um grafo ponderado, em que roteadores são os vértices, conexões entre os roteadores são as arestas e atrasos nas conexões são os pesos. No OSPF, a identificação de cada conexão e seu respectivo atraso são passados de roteador em roteador até que todos os roteadores formem uma base de dados com o grafo que descreve o SA. O OSPF utiliza uma versão distribuída do algoritmo de caminhos mínimos de Dijkstra para computar as melhores rotas para todos os possíveis destinos e para produzir as tabelas de rotas para cada roteador. Cada rota computada é a que apresenta o menor valor para a soma dos atrasos nas conexões usadas na rota entre a rede de origem e a rede de destino.

Acerca do protocolo OSPF e com base nas informações apresentadas no texto, avalie as afirmações a seguir.

I. Quando há diferentes caminhos possíveis entre uma origem e um destino, a rota selecionada é a que apresenta o menor número de conexões.

II. Há uma instância da base de dados relativa a conexões e a atrasos, formando o grafo que descreve o SA em cada roteador que compõe o SA.

III. O algoritmo de Dijkstra é executado por um único roteador dentro do SA e a tabela de rotas resultante é passada para todos os roteadores no SA.

IV. Para todos os roteadores dentro de um SA, há a necessidade de tráfego de informações acerca de atrasos e de conexões entre roteadores.

É correto apenas o que se afirma em

- A) I e III.
- B) II e III.
- C) II e IV.
- D) I, II e IV.
- E) I, III e IV.

**Fonte:** `provas/2023_PV_engenharia_da_computacao.pdf`  
**Gabarito oficial:** C

---

## Resumo de gabaritos

| Questão | Gabarito |
|---|:---:|
| POSCOMP 2003 — Questão 69 | B |
| POSCOMP 2003 — Questão 70 | anulada |
| POSCOMP 2004 — Questão 64 | C |
| POSCOMP 2007 — Questão 69 | B |
| POSCOMP 2007 — Questão 70 | D |
| POSCOMP 2011 — Questão 68 | E |
| POSCOMP 2015 — Questão 64 | C |
| POSCOMP 2019 — Questão 62 | C |
| ENADE 2017 — Tecnologia em Análise e Desenv. de Sistemas — Q18 | A |
| ENADE 2021 — Ciência da Computação (Bacharelado) — Q35 | D |
| ENADE 2023 — Engenharia da Computação — Q38 | A |
| POSCOMP 2003 — Questão 64 | A |
| POSCOMP 2009 — Questão 54 | E |
| POSCOMP 2012 — Questão 63 | E |
| POSCOMP 2014 — Questão 64 | B |
| POSCOMP 2019 — Questão 67 | E |
| ENADE 2014 — Tecnologia em Redes de Computadores — Q20 | E |
| ENADE 2014 — Sistemas de Informação — Q23 | D |
| ENADE 2021 — Tecnologia em Redes de Computadores — Q22 | A |
| ENADE 2017 — Sistemas de Informação — Q22 | D |
| ENADE 2014 — Tecnologia em Análise e Desenv. de Sistemas — Q18 | C |
| POSCOMP 2005 — Questão 68 | E |
| POSCOMP 2006 — Questão 68 | B |
| POSCOMP 2008 — Questão 14 | D |
| POSCOMP 2010 — Questão 59 | D |
| POSCOMP 2012 — Questão 61 | D |
| POSCOMP 2014 — Questão 67 | E |
| POSCOMP 2017 — Questão 62 | B |
| POSCOMP 2017 — Questão 67 | A |
| POSCOMP 2018 — Questão 64 | A |
| ENADE 2023 — Engenharia da Computação — Q35 | E |
| POSCOMP 2003 — Questão 63 | A |
| POSCOMP 2005 — Questão 69 | B |
| POSCOMP 2006 — Questão 69 | C |
| POSCOMP 2010 — Questão 57 | C |
| POSCOMP 2013 — Questão 64 | E |
| POSCOMP 2014 — Questão 62 | D |
| POSCOMP 2015 — Questão 62 | D |
| POSCOMP 2018 — Questão 67 | C |
| POSCOMP 2004 — Questão 65 | A |
| POSCOMP 2006 — Questão 70 | E |
| POSCOMP 2007 — Questão 68 | A |
| POSCOMP 2010 — Questão 60 | B |
| POSCOMP 2011 — Questão 70 | A |
| POSCOMP 2004 — Questão 67 | D |
| POSCOMP 2005 — Questão 70 | E |
| POSCOMP 2016 — Questão 62 | A |
| POSCOMP 2018 — Questão 62 | D |
| POSCOMP 2007 — Questão 43 | E |
| POSCOMP 2018 — Questão 52 | C |
| POSCOMP 2019 — Questão 64 | A |
| ENADE 2017 — Tecnologia em Gestão da TI — Q15 | E |
| POSCOMP 2004 — Questão 66 | A |
| POSCOMP 2013 — Questão 62 | B |
| ENADE 2014 — Sistemas de Informação — Q16 | E |
| ENADE 2017 — Sistemas de Informação — Q31 | B |
| ENADE 2017 — Sistemas de Informação — Q34 | C |
| ENADE 2017 — Tecnologia em Gestão da TI — Questão discursiva 04 | — |
| ENADE 2017 — Engenharia da Computação — Q27 | D |
| ENADE 2019 — Engenharia da Computação — Q29 | A |
| ENADE 2021 — Ciência da Computação (Bacharelado e Licenciatura) — Q25 | B |
| ENADE 2021 — Sistemas de Informação (Bacharelado) — Q16 | A |
| ENADE 2021 — Tecnologia em Gestão da TI — Q15 | A |
| ENADE 2021 — Tecnologia em Análise e Desenv. de Sistemas — Q19 | A |
| ENADE 2023 — Engenharia da Computação — Q20 | B |
| ENADE 2023 — Engenharia da Computação — Q27 | C |
| ENADE 2023 — Engenharia da Computação — Q11 | C |

## Questões vistas e não incluídas (fronteira com concorrência e SO)

Estas questões tratam de **concorrência, exclusão mútua local, threads ou deadlock** em um único computador. São pré-requisito de SD, mas não envolvem distribuição, por isso ficaram de fora:

- ENADE 2014, Ciência da Computação: Q20 (threads), Q21 (exclusão mútua com *locks*) e Q34 (sincronização produtor-consumidor).
- ENADE 2017, Ciência da Computação: Q31 (condição de corrida com `pthread`) e Q35 (*deadlock* com semáforos).
- ENADE 2019, Engenharia da Computação: Q30 (condição de corrida em *Servlet*).
- ENADE 2021, Ciência da Computação (Bacharelado e Licenciatura): Q17 (região crítica e exclusão mútua).
- ENADE 2023, Engenharia da Computação: Q26 (multiprocessadores e semáforos).
- POSCOMP 2005 Q44 e POSCOMP 2018 Q45 (*deadlock*).

## Cobertura e limitações

- **Documentos avaliados:** todos os PDFs de provas e gabaritos do projeto (`provas/` e `poscomp/`). O arquivo `poscomp/consolidado/poscomp_consolidado.pdf` repete as provas individuais e não foi usado como fonte separada.
- **ENADE 2014 e 2017:** a extração de texto desses PDFs vem com fonte corrompida. Para essas provas, a busca foi feita sobre o texto decodificado e as questões incluídas foram **transcritas a partir das imagens das páginas**. Vale conferir contra o PDF se for usar o texto literalmente.
- **Figuras:** POSCOMP 2005 Q69 e POSCOMP 2015 Q62 dependem de um diagrama espaço-tempo que só existe no PDF original.
- **Critério de seleção:** foi feito por leitura das questões encontradas por busca de termos de SD. Questões de redes puras (IP, roteamento, TCP/UDP isolados, VPN) e de bancos de dados centralizados não foram incluídas. Alguma questão de fronteira pode ter ficado de fora.
