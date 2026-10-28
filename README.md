# Simulado de Sistemas Distribuídos — ENADE e POSCOMP

Plataforma interativa de estudos e banco de questões estruturado em JSON contendo **67 questões** de Sistemas Distribuídos compiladas de exames oficiais do **POSCOMP** (2002–2022) e **ENADE** (2014, 2017, 2019, 2021 e 2023), organizadas por temas com gabarito oficial e fundamentação teórica comentada.

---

## 🌐 Acesso Online

Você pode acessar o simulado diretamente pelo seu navegador através do GitHub Pages:
👉 **[https://julio-c-oliveira.github.io/faculdade_sistemas-distribuidos/](https://julio-c-oliveira.github.io/faculdade_sistemas-distribuidos/)**

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
Abra o arquivo `index.html` diretamente em qualquer navegador moderno. Graças ao carregamento auxiliar de `questoes-data.js`, o simulado funciona mesmo sem servidor local ativo.

---

## 📊 Estrutura e Distribuição dos Temas

As 67 questões estão categorizadas em 8 tópicos fundamentais da literatura de Sistemas Distribuídos:

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

---

## ✨ Funcionalidades do Site

- 🎯 **Navegação Intuitiva por Cards**: Resolução questão a questão, com atalhos de teclado (setas para navegar e teclas `A`, `B`, `C`, `D`, `E` para marcar).
- 🗺️ **Mapa Lateral de Questões (1–67)**: Acompanhamento em tempo real das questões respondidas e em branco, com filtros rápidos por Banca (POSCOMP / ENADE) e por Tema.
- 📐 **Diagramas Espaço-Tempo em SVG**: As questões `POSCOMP 2005 · Questão 69` (Relógios Lógicos de Lamport) e `POSCOMP 2015 · Questão 62` (Ordenação Causal e Relação *Happens-Before*) possuem seus diagramas vetoriais reconstruídos e integrados diretamente na interface.
- 📈 **Painel de Resultados com Gráficos**: Exibe a porcentagem geral de acertos sobre as 65 questões válidas e o aproveitamento específico em cada um dos 8 temas.
- 💡 **Revisão Detalhada com Explicação Teórica**:
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
├── questoes.json                        # Banco de dados estruturado das 67 questões
├── questoes-data.js                     # Carga auxiliar para execução offline
├── questoes_sistemas_distribuidos.md    # Compilação original das questões em Markdown
├── scripts/
│   ├── build_json.py                    # Script de extração e validação do JSON
│   ├── explanations.py                  # Dicionário de explicações teóricas
│   └── diagrams.py                      # Vetores SVG dos diagramas espaço-tempo
├── .gitignore
└── README.md
```

---

## 🛠️ Regenerando o JSON

Caso você adicione novas questões ao arquivo `questoes_sistemas_distribuidos.md`, basta rodar:

```bash
python3 scripts/build_json.py
```

O script realiza o parsing, valida todos os gabaritos contra o resumo oficial e atualiza `questoes.json` e `questoes-data.js` automaticamente.
