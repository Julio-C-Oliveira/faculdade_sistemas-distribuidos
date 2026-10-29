# Simulado & Prova de Sistemas Distribuídos

Plataforma interativa de estudos e banco de questões estruturado em JSON com dois modos de resolução:
1. **🎯 Modo Prova (Avaliação Rápida)**: Conjunto exclusivo de **7 questões essenciais** da disciplina com **ordem aleatória (embaralhada)** a cada tentativa e justificativas teóricas detalhadas.
2. **🌐 Modo Simulado Geral**: Banco completo de **67 questões** do **POSCOMP** (2002–2022) e **ENADE** (2014, 2017, 2019, 2021 e 2023), divididas em 8 temas com gabarito oficial e diagramas espaço-tempo em SVG.

---

## 🌐 Acesso Online

Você pode acessar o simulado diretamente pelo seu navegador através do GitHub Pages:
👉 **[https://julio-c-oliveira.github.io/faculdade_sistemas-distribuidos/](https://julio-c-oliveira.github.io/faculdade_sistemas-distribuidos/)**

---

## 🎮 Modos de Estudo

### 1. 🎯 Modo Prova (7 Questões Selecionadas)
- Selecionado na tela inicial ao entrar no site ou pelo botão seletor no cabeçalho.
- **Embaralhamento obrigatório**: a cada nova tentativa, as 7 questões são reordenadas aleatoriamente (algoritmo *Fisher-Yates*), testando sua retenção real sem vícios de memorização da ordem.
- Placar final sobre 7 pontos (`X / 7 acertos`).
- Revisão detalhada com fundamentação teórica completa para cada alternativa.
- Ações no resultado: **"🎯 Refazer Apenas as que Errei"** e **"🎲 Nova Tentativa (Reembaralhar)"**.

### 2. 🌐 Modo Simulado Geral (67 Questões POSCOMP & ENADE)
- Banco completo dividido nos 8 temas do POSCOMP:
  1. Conceitos, características e projeto de sistemas distribuídos (11)
  2. Modelos arquiteturais: cliente-servidor, P2P, processos e threads (10)
  3. Comunicação entre processos: RPC, sockets, mensagens, pub/sub (10)
  4. Tempo, sincronização, exclusão mútua e eleição (8)
  5. Replicação, consistência e sistemas de arquivos distribuídos (5)
  6. Falhas e tolerância a falhas (4)
  7. Transações e bancos de dados distribuídos (4)
  8. Cluster, grade, nuvem, virtualização, microsserviços e IoT (15)
- Diagramas espaço-tempo em SVG (Relógios de Lamport e Relação *Happens-Before*).
- Estatísticas e gráficos de aproveitamento por tema.

---

## 🚀 Como Executar Localmente

Como a aplicação foi construída com tecnologias web puras (HTML5, CSS3 moderno e Vanilla JavaScript), ela não exige instalação de dependências ou build:

### Opção 1: Servidor HTTP Local (Recomendado)
Execute no terminal a partir da raiz do repositório:

```bash
# Com Python 3
python3 -m http.server 8000
```

Em seguida, abra seu navegador em `http://localhost:8000`.

### Opção 2: Node.js / npx
```bash
npx serve .
```

### Opção 3: Abertura Direta
Abra o arquivo `index.html` diretamente em qualquer navegador moderno. Graças ao carregamento auxiliar de `questoes-data.js`, a aplicação funciona perfeitamente mesmo sem servidor local ativo.

---

## ✨ Funcionalidades do Site

- 🔀 **Modal Inicial de Seleção de Modo**: Permite escolher entre o Modo Prova e o Simulado Geral logo na primeira visita.
- 🔄 **Seletor Rápido no Cabeçalho**: Alterne entre Modo Prova e Simulado Geral a qualquer momento sem perder o progresso salvo de cada um.
- 🎯 **Navegação Intuitiva por Cards**: Resolução questão a questão, com atalhos de teclado (setas para navegar e teclas `A`, `B`, `C`, `D`, `E` para marcar).
- 🗺️ **Mapa Lateral de Questões**: Acompanhamento em tempo real das questões respondidas e em branco.
- 📐 **Diagramas Espaço-Tempo em SVG**: Gráficos vetoriais inline nas questões que dependem de análise visual.
- 💡 **Revisão Detalhada com Justificativa Teórica**:
  - Destaque em **verde** com ícone para a resposta correta.
  - Destaque em **vermelho** com ícone caso tenha marcado a alternativa errada.
  - Caixa de fundamentação teórica comentando a razão do gabarito oficial para cada item.
- 🔁 **Modo "Refazer apenas as que errei"**: Permite iniciar uma rodada de estudo focada exclusivamente nas questões em que houve erro.
- 💾 **Persistência Automática (`localStorage`)**: Seu progresso não é perdido ao recarregar ou fechar a aba.
- 🌓 **Modo Escuro / Claro**: Alternância de tema com contraste acessível.

---

## 📁 Estrutura de Arquivos

```
faculdade_sistemas-distribuidos/
├── index.html                           # Interface da aplicação web
├── style.css                            # Folha de estilos e variáveis de tema
├── app.js                               # Lógica do simulado, estado e revisão
├── questoes_prova.json                  # Banco de dados das 7 questões do Modo Prova
├── questoes.json                        # Banco de dados das 67 questões do Simulado Geral
├── questoes-data.js                     # Carga auxiliar para execução offline sem CORS
├── questoes_sistemas_distribuidos.md    # Compilação original das questões em Markdown
├── scripts/
│   ├── build_json.py                    # Script de extração e validação do JSON
│   ├── explanations.py                  # Dicionário de explicações teóricas
│   └── diagrams.py                      # Vetores SVG dos diagramas espaço-tempo
├── .gitignore
└── README.md
```
