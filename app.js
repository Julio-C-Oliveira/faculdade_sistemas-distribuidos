/**
 * Simulado de Sistemas Distribuídos — ENADE, POSCOMP e Modo Prova
 * Lógica principal da aplicação web
 */

(function () {
  'use strict';

  // Chaves de armazenamento local
  const STORAGE_KEY_MODE = 'simulado_sd_mode_v2';
  const STORAGE_KEY_PROVA_ANSWERS = 'simulado_sd_prova_answers_v2';
  const STORAGE_KEY_PROVA_ORDER = 'simulado_sd_prova_order_v2';
  const STORAGE_KEY_GERAL_ANSWERS = 'simulado_sd_answers_v1';
  const STORAGE_KEY_DISCURSIVE = 'simulado_sd_discursive_v1';
  const STORAGE_KEY_THEME = 'simulado_sd_theme_v1';

  // Bases de dados
  let geralQuestions = [];
  let provaQuestionsRaw = [];

  // Estado da aplicação
  let currentMode = 'prova'; // 'prova' ou 'geral'
  let allQuestions = []; // Conjunto ativo do modo selecionado
  let filteredQuestions = [];
  let activeQuestions = [];
  let currentIndex = 0;
  let userAnswers = {};
  let discursiveAnswers = {};
  let isRetryMode = false;
  let currentReviewFilter = 'wrong';

  // Elementos do DOM
  const quizView = document.getElementById('quiz-view');
  const resultView = document.getElementById('result-view');
  const retryBanner = document.getElementById('retry-mode-banner');
  const retryCountSpan = document.getElementById('retry-count');

  // Header Elements
  const headerLogoSubtitle = document.getElementById('header-logo-subtitle');
  const btnModeSwitch = document.getElementById('btn-mode-switch');
  const headerModeIcon = document.getElementById('header-mode-icon');
  const headerModeText = document.getElementById('header-mode-text');
  const headerModeBadge = document.getElementById('header-mode-badge');
  const answeredCountEl = document.getElementById('answered-count');
  const totalEvaluableEl = document.getElementById('total-evaluable-count');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconEl = document.getElementById('theme-icon');
  const restartHeaderBtn = document.getElementById('btn-restart-header');

  // Question Card Elements
  const badgeExam = document.getElementById('badge-exam');
  const badgeTheme = document.getElementById('badge-theme');
  const badgeCorrelata = document.getElementById('badge-correlata');
  const badgeStatus = document.getElementById('badge-status');
  const currentQNum = document.getElementById('current-q-num');
  const totalQNum = document.getElementById('total-q-num');
  const qTitle = document.getElementById('q-title');
  const qStatement = document.getElementById('q-statement');
  const qDiagramContainer = document.getElementById('q-diagram-container');
  const alternativesArea = document.getElementById('alternatives-area');
  const qSource = document.getElementById('q-source');

  // Discursive Elements
  const discursiveArea = document.getElementById('discursive-area');
  const discursiveInput = document.getElementById('discursive-input');
  const btnShowDiscursiveKey = document.getElementById('btn-show-discursive-key');
  const discursiveExpectedBox = document.getElementById('discursive-expected-box');
  const discursiveExpectedText = document.getElementById('discursive-expected-text');

  // Navigation Buttons
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnClear = document.getElementById('btn-clear');
  const btnFinish = document.getElementById('btn-finish');
  const btnFinishText = document.getElementById('btn-finish-text');
  const btnSidebarFinish = document.getElementById('btn-sidebar-finish');
  const sidebarFinishText = document.getElementById('sidebar-finish-text');
  const btnExitRetry = document.getElementById('btn-exit-retry');

  // Sidebar Elements
  const sidebarTitle = document.getElementById('sidebar-title');
  const sidebarFiltersContainer = document.getElementById('sidebar-filters-container');
  const sidebarProvaNotice = document.getElementById('sidebar-prova-notice');
  const filterExam = document.getElementById('filter-exam');
  const filterTheme = document.getElementById('filter-theme');
  const questionsGrid = document.getElementById('questions-grid');
  const sidebarSummaryBadge = document.getElementById('sidebar-summary-badge');

  // Modal Finish
  const modalFinish = document.getElementById('modal-finish');
  const modalFinishMsg = document.getElementById('modal-finish-msg');
  const btnModalCancel = document.getElementById('btn-modal-cancel');
  const btnModalConfirm = document.getElementById('btn-modal-confirm');

  // Modal Mode Select
  const modalModeSelect = document.getElementById('modal-mode-select');
  const cardSelectProva = document.getElementById('card-select-prova');
  const cardSelectGeral = document.getElementById('card-select-geral');

  // Results Elements
  const resultTitle = document.getElementById('result-title');
  const resultSubtitle = document.getElementById('result-subtitle');
  const finalPercentage = document.getElementById('final-percentage');
  const finalScoreFraction = document.getElementById('final-score-fraction');
  const finalCorrectCount = document.getElementById('final-correct-count');
  const finalWrongCount = document.getElementById('final-wrong-count');
  const finalEmptyCount = document.getElementById('final-empty-count');
  const retryErrorBadge = document.getElementById('retry-error-badge');
  const themeBreakdownCard = document.getElementById('theme-breakdown-card');
  const themeProgressList = document.getElementById('theme-progress-list');
  const reviewList = document.getElementById('review-list');
  const btnReshuffleTest = document.getElementById('btn-reshuffle-test');
  const btnRetryErrors = document.getElementById('btn-retry-errors');
  const btnRestartAll = document.getElementById('btn-restart-all');
  const btnBackToTest = document.getElementById('btn-back-to-test');

  const filterWrongCount = document.getElementById('filter-wrong-count');
  const filterAllCount = document.getElementById('filter-all-count');
  const filterCorrectCount = document.getElementById('filter-correct-count');

  // --------------------------------------------------------------------------
  // Fisher-Yates Shuffle
  // --------------------------------------------------------------------------

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --------------------------------------------------------------------------
  // Inicialização
  // --------------------------------------------------------------------------

  async function init() {
    initTheme();

    // Carregar bases de dados
    await loadDataSources();

    // Determinar modo ativo (Modo Prova é padrão ou lido do storage)
    const storedMode = localStorage.getItem(STORAGE_KEY_MODE);

    setupEventListeners();

    if (!storedMode) {
      // Primeira visita: abre o modal de boas-vindas para seleção de modo
      setMode('prova', true);
      showModeSelectModal();
    } else {
      setMode(storedMode, false);
    }
  }

  async function loadDataSources() {
    // 1. Carrega Simulado Geral (67 questões)
    try {
      if (window.QUESTOES_DATA && Array.isArray(window.QUESTOES_DATA) && window.QUESTOES_DATA.length > 0) {
        geralQuestions = window.QUESTOES_DATA;
      } else {
        const resp = await fetch('questoes.json');
        if (!resp.ok) throw new Error('Falha ao carregar questoes.json');
        geralQuestions = await resp.json();
      }
    } catch (err) {
      console.warn('Erro ao carregar questoes.json:', err);
    }

    // 2. Carrega Modo Prova (7 questões)
    try {
      if (window.QUESTOES_PROVA_DATA && Array.isArray(window.QUESTOES_PROVA_DATA) && window.QUESTOES_PROVA_DATA.length > 0) {
        provaQuestionsRaw = window.QUESTOES_PROVA_DATA;
      } else {
        const resp = await fetch('questoes_prova.json');
        if (!resp.ok) throw new Error('Falha ao carregar questoes_prova.json');
        provaQuestionsRaw = await resp.json();
      }
    } catch (err) {
      console.warn('Erro ao carregar questoes_prova.json:', err);
    }
  }

  // --------------------------------------------------------------------------
  // Seleção e Troca de Modo
  // --------------------------------------------------------------------------

  function showModeSelectModal() {
    modalModeSelect.style.display = 'flex';
  }

  function hideModeSelectModal() {
    modalModeSelect.style.display = 'none';
  }

  function setMode(mode, reshuffle = false) {
    currentMode = mode;
    localStorage.setItem(STORAGE_KEY_MODE, mode);
    hideModeSelectModal();

    isRetryMode = false;
    retryBanner.style.display = 'none';

    if (mode === 'prova') {
      // UI Header para Modo Prova
      headerLogoSubtitle.textContent = 'Modo Prova · 7 Questões Embaralhadas';
      headerModeIcon.textContent = '🎯';
      headerModeText.textContent = 'Modo Prova';
      headerModeBadge.textContent = '7 Qs';
      btnModeSwitch.title = 'Modo atual: Prova (7 Qs). Clique para alternar para o Simulado Geral.';

      btnFinishText.textContent = 'Finalizar Prova 🏁';
      sidebarFinishText.textContent = 'Concluir Prova 🏁';
      sidebarTitle.textContent = 'Mapa da Prova';

      sidebarFiltersContainer.style.display = 'none';
      sidebarProvaNotice.style.display = 'block';
      themeBreakdownCard.style.display = 'none';
      btnReshuffleTest.style.display = 'inline-flex';

      resultTitle.textContent = 'Resultado da Prova';
      resultSubtitle.textContent = 'Desempenho nas 7 questões avaliadas da disciplina';

      // Gerenciar embaralhamento
      setupProvaQuestions(reshuffle);
      loadStoredAnswersForCurrentMode();

    } else {
      // UI Header para Simulado Geral
      headerLogoSubtitle.textContent = 'Simulado Geral · ENADE & POSCOMP · 67 Questões';
      headerModeIcon.textContent = '🌐';
      headerModeText.textContent = 'Simulado Geral';
      headerModeBadge.textContent = '67 Qs';
      btnModeSwitch.title = 'Modo atual: Simulado Geral (67 Qs). Clique para alternar para o Modo Prova.';

      btnFinishText.textContent = 'Finalizar Simulado 🏁';
      sidebarFinishText.textContent = 'Concluir Simulado 🏁';
      sidebarTitle.textContent = 'Mapa de Questões';

      sidebarFiltersContainer.style.display = 'block';
      sidebarProvaNotice.style.display = 'none';
      themeBreakdownCard.style.display = 'block';
      btnReshuffleTest.style.display = 'none';

      resultTitle.textContent = 'Resultado do Simulado Geral';
      resultSubtitle.textContent = 'Confira seu desempenho nas questões válidas de Sistemas Distribuídos';

      allQuestions = [...geralQuestions];
      filteredQuestions = [...allQuestions];
      activeQuestions = [...filteredQuestions];
      currentIndex = 0;

      filterExam.value = 'all';
      filterTheme.value = 'all';

      loadStoredAnswersForCurrentMode();
    }

    // Retorna para a tela de teste
    resultView.classList.remove('active');
    quizView.classList.add('active');

    updateHeaderProgress();
    renderSidebarGrid();
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setupProvaQuestions(forceReshuffle) {
    if (provaQuestionsRaw.length === 0) return;

    let ordered = [];
    const savedOrderJson = localStorage.getItem(STORAGE_KEY_PROVA_ORDER);

    if (!forceReshuffle && savedOrderJson) {
      try {
        const savedIds = JSON.parse(savedOrderJson);
        const map = new Map(provaQuestionsRaw.map(q => [q.id, q]));
        ordered = savedIds.map(id => map.get(id)).filter(Boolean);
      } catch (e) {
        ordered = [];
      }
    }

    if (ordered.length !== provaQuestionsRaw.length) {
      // Embaralhar usando Fisher-Yates
      ordered = shuffleArray(provaQuestionsRaw);
      const newIds = ordered.map(q => q.id);
      localStorage.setItem(STORAGE_KEY_PROVA_ORDER, JSON.stringify(newIds));
    }

    allQuestions = ordered;
    filteredQuestions = [...allQuestions];
    activeQuestions = [...filteredQuestions];
    currentIndex = 0;
  }

  // --------------------------------------------------------------------------
  // Persistência Local por Modo
  // --------------------------------------------------------------------------

  function loadStoredAnswersForCurrentMode() {
    try {
      if (currentMode === 'prova') {
        const saved = localStorage.getItem(STORAGE_KEY_PROVA_ANSWERS);
        userAnswers = saved ? JSON.parse(saved) : {};
        discursiveAnswers = {};
      } else {
        const saved = localStorage.getItem(STORAGE_KEY_GERAL_ANSWERS);
        userAnswers = saved ? JSON.parse(saved) : {};
        const savedDisc = localStorage.getItem(STORAGE_KEY_DISCURSIVE);
        discursiveAnswers = savedDisc ? JSON.parse(savedDisc) : {};
      }
    } catch (e) {
      console.warn('Erro ao carregar respostas:', e);
      userAnswers = {};
      discursiveAnswers = {};
    }
  }

  function saveCurrentAnswers() {
    try {
      if (currentMode === 'prova') {
        localStorage.setItem(STORAGE_KEY_PROVA_ANSWERS, JSON.stringify(userAnswers));
      } else {
        localStorage.setItem(STORAGE_KEY_GERAL_ANSWERS, JSON.stringify(userAnswers));
        localStorage.setItem(STORAGE_KEY_DISCURSIVE, JSON.stringify(discursiveAnswers));
      }
    } catch (e) {
      console.warn('Erro ao salvar respostas:', e);
    }
  }

  // --------------------------------------------------------------------------
  // Tema Claro / Escuro
  // --------------------------------------------------------------------------

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIconEl.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(STORAGE_KEY_THEME, theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // --------------------------------------------------------------------------
  // Renderização Markdown
  // --------------------------------------------------------------------------

  function renderMarkdown(md) {
    if (!md) return '';
    let html = md
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Negrito **texto**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Itálico *texto*
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Código `code`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Setas e símbolos comuns
    html = html.replace(/\\rightarrow/g, '→');

    // Listas e quebras de linha
    const lines = html.split('\n');
    let inList = false;
    const output = [];

    for (let line of lines) {
      const trimmed = line.trim();
      const listMatch = trimmed.match(/^-\s+(.*)$/);

      if (listMatch) {
        if (!inList) {
          output.push('<ul>');
          inList = true;
        }
        output.push(`<li>${listMatch[1]}</li>`);
      } else {
        if (inList) {
          output.push('</ul>');
          inList = false;
        }
        if (trimmed.length > 0) {
          const romanMatch = trimmed.match(/^([I|V|X|i|v|x]+\.|\(\s*\))\s*(.*)$/);
          if (romanMatch) {
            output.push(`<p><strong>${romanMatch[1]}</strong> ${romanMatch[2]}</p>`);
          } else {
            output.push(`<p>${trimmed}</p>`);
          }
        }
      }
    }
    if (inList) output.push('</ul>');

    return output.join('');
  }

  // --------------------------------------------------------------------------
  // Renderização da Questão Atual
  // --------------------------------------------------------------------------

  function renderCurrentQuestion() {
    if (activeQuestions.length === 0) {
      qTitle.textContent = 'Nenhuma questão encontrada';
      qStatement.innerHTML = '<p class="empty-review-msg">Ajuste os filtros ou selecione outro modo.</p>';
      alternativesArea.innerHTML = '';
      qDiagramContainer.style.display = 'none';
      discursiveArea.style.display = 'none';
      return;
    }

    if (currentIndex >= activeQuestions.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = activeQuestions.length - 1;

    const q = activeQuestions[currentIndex];

    // Tags
    if (currentMode === 'prova') {
      badgeExam.textContent = 'PROVA';
      badgeTheme.textContent = 'Sistemas Distribuídos';
      badgeTheme.title = q.tema;
    } else {
      badgeExam.textContent = `${q.exame} ${q.ano || ''}`.trim();
      badgeTheme.textContent = `Tema ${q.tema_id}`;
      badgeTheme.title = q.tema;
    }

    if (q.correlata) {
      badgeCorrelata.style.display = 'inline-block';
    } else {
      badgeCorrelata.style.display = 'none';
    }

    if (q.anulada) {
      badgeStatus.textContent = 'Questão Anulada';
      badgeStatus.style.display = 'inline-block';
    } else if (q.tipo === 'discursiva') {
      badgeStatus.textContent = 'Discursiva';
      badgeStatus.style.display = 'inline-block';
    } else {
      badgeStatus.style.display = 'none';
    }

    currentQNum.textContent = (currentIndex + 1);
    totalQNum.textContent = activeQuestions.length;
    qTitle.textContent = q.titulo;
    qStatement.innerHTML = renderMarkdown(q.enunciado);
    qSource.textContent = `Fonte: ${q.fonte}`;

    // Diagrama SVG
    if (q.svg_diagrama) {
      qDiagramContainer.innerHTML = q.svg_diagrama;
      qDiagramContainer.style.display = 'block';
    } else {
      qDiagramContainer.innerHTML = '';
      qDiagramContainer.style.display = 'none';
    }

    // Discursiva
    if (q.tipo === 'discursiva') {
      alternativesArea.style.display = 'none';
      discursiveArea.style.display = 'block';

      const savedDisc = discursiveAnswers[q.id] || { draft: '', status: null };
      discursiveInput.value = savedDisc.draft || '';
      discursiveExpectedText.textContent = q.explicacao;
      discursiveExpectedBox.style.display = savedDisc.status ? 'block' : 'none';
    } else {
      discursiveArea.style.display = 'none';
      alternativesArea.style.display = 'flex';
      renderAlternatives(q);
    }

    // Navegação
    btnPrev.disabled = (currentIndex === 0);
    btnNext.disabled = (currentIndex === activeQuestions.length - 1);

    updateHeaderProgress();
    updateSidebarGridHighlight();
  }

  function renderAlternatives(q) {
    alternativesArea.innerHTML = '';
    const selectedLetter = userAnswers[q.id];

    q.alternativas.forEach(alt => {
      const optEl = document.createElement('div');
      optEl.className = 'alt-option' + (selectedLetter === alt.letra ? ' selected' : '');
      optEl.setAttribute('role', 'radio');
      optEl.setAttribute('aria-checked', selectedLetter === alt.letra ? 'true' : 'false');
      optEl.setAttribute('tabindex', '0');

      optEl.innerHTML = `
        <span class="alt-letter">${alt.letra}</span>
        <span class="alt-text">${renderMarkdown(alt.texto)}</span>
      `;

      optEl.addEventListener('click', () => {
        selectAlternative(q.id, alt.letra);
      });

      optEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectAlternative(q.id, alt.letra);
        }
      });

      alternativesArea.appendChild(optEl);
    });
  }

  function selectAlternative(questionId, letter) {
    if (userAnswers[questionId] === letter) {
      delete userAnswers[questionId];
    } else {
      userAnswers[questionId] = letter;
    }
    saveCurrentAnswers();
    renderCurrentQuestion();
    renderSidebarGrid();
  }

  window.gradeDiscursive = function (result) {
    const q = activeQuestions[currentIndex];
    if (!discursiveAnswers[q.id]) discursiveAnswers[q.id] = {};
    discursiveAnswers[q.id].draft = discursiveInput.value;
    discursiveAnswers[q.id].status = result;
    saveCurrentAnswers();
    renderSidebarGrid();
    updateHeaderProgress();
    alert(result === 'acertou' ? 'Marcado como compreendido com sucesso!' : 'Marcado para reforço!');
  };

  // --------------------------------------------------------------------------
  // Barra Lateral & Mapa de Questões
  // --------------------------------------------------------------------------

  function renderSidebarGrid() {
    questionsGrid.innerHTML = '';
    let answeredTotal = 0;

    activeQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'grid-btn';
      btn.textContent = (idx + 1);
      btn.title = `Questão ${idx + 1}: ${q.titulo}`;

      const isAnswered = q.tipo === 'discursiva'
        ? (discursiveAnswers[q.id] && discursiveAnswers[q.id].status)
        : (userAnswers[q.id] !== undefined);

      if (isAnswered) {
        btn.classList.add('answered');
        answeredTotal++;
      }

      if (idx === currentIndex) {
        btn.classList.add('current');
      }

      btn.addEventListener('click', () => {
        currentIndex = idx;
        renderCurrentQuestion();
      });

      questionsGrid.appendChild(btn);
    });

    sidebarSummaryBadge.textContent = `${answeredTotal} / ${activeQuestions.length}`;
  }

  function updateSidebarGridHighlight() {
    const buttons = questionsGrid.querySelectorAll('.grid-btn');
    buttons.forEach((btn, idx) => {
      if (idx === currentIndex) {
        btn.classList.add('current');
      } else {
        btn.classList.remove('current');
      }
    });
  }

  function updateHeaderProgress() {
    let evaluable = [];
    if (currentMode === 'prova') {
      evaluable = allQuestions;
    } else {
      evaluable = allQuestions.filter(q => q.tipo === 'multipla_escolha' && !q.anulada);
    }

    const answeredCount = evaluable.filter(q => userAnswers[q.id] !== undefined).length;
    answeredCountEl.textContent = answeredCount;
    totalEvaluableEl.textContent = evaluable.length;
  }

  // --------------------------------------------------------------------------
  // Filtros (Apenas no Simulado Geral)
  // --------------------------------------------------------------------------

  function applyFilters() {
    if (currentMode === 'prova') return;

    const examVal = filterExam.value;
    const themeVal = filterTheme.value;

    filteredQuestions = allQuestions.filter(q => {
      const matchExam = (examVal === 'all') || (q.exame === examVal);
      const matchTheme = (themeVal === 'all') || (String(q.tema_id) === themeVal);
      return matchExam && matchTheme;
    });

    activeQuestions = [...filteredQuestions];
    currentIndex = 0;
    renderSidebarGrid();
    renderCurrentQuestion();
  }

  // --------------------------------------------------------------------------
  // Finalização e Cálculo de Resultados
  // --------------------------------------------------------------------------

  function showFinishConfirmation() {
    let evaluable = [];
    if (currentMode === 'prova') {
      evaluable = allQuestions;
    } else {
      evaluable = allQuestions.filter(q => q.tipo === 'multipla_escolha' && !q.anulada);
    }

    const unanswered = evaluable.filter(q => userAnswers[q.id] === undefined).length;

    if (unanswered > 0) {
      modalFinishMsg.textContent = `Você ainda possui ${unanswered} questão(ões) em branco dentre as ${evaluable.length} avaliadas. Deseja realmente finalizar e ver o gabarito comentado?`;
    } else {
      modalFinishMsg.textContent = `Parabéns! Você respondeu todas as ${evaluable.length} questões. Deseja conferir agora a sua nota e a revisão comentada?`;
    }
    modalFinish.style.display = 'flex';
  }

  function calculateAndDisplayResults() {
    modalFinish.style.display = 'none';

    let evaluable = [];
    if (currentMode === 'prova') {
      evaluable = allQuestions;
    } else {
      evaluable = allQuestions.filter(q => q.tipo === 'multipla_escolha' && !q.anulada);
    }

    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;

    const themeStats = {};
    if (currentMode === 'geral') {
      for (let t = 1; t <= 8; t++) {
        themeStats[t] = { total: 0, correct: 0, name: '' };
      }
    }

    evaluable.forEach(q => {
      if (currentMode === 'geral') {
        const tid = q.tema_id;
        themeStats[tid].total++;
        themeStats[tid].name = q.tema;
      }

      const userChoice = userAnswers[q.id];
      if (!userChoice) {
        emptyCount++;
      } else if (userChoice === q.gabarito) {
        correctCount++;
        if (currentMode === 'geral') themeStats[q.tema_id].correct++;
      } else {
        wrongCount++;
      }
    });

    const percent = Math.round((correctCount / evaluable.length) * 100);
    finalPercentage.textContent = `${percent}%`;
    finalScoreFraction.textContent = `${correctCount} de ${evaluable.length} acertos`;
    finalCorrectCount.textContent = correctCount;
    finalWrongCount.textContent = wrongCount;
    finalEmptyCount.textContent = emptyCount;

    retryErrorBadge.textContent = wrongCount;

    if (currentMode === 'geral') {
      renderThemeProgress(themeStats);
      themeBreakdownCard.style.display = 'block';
    } else {
      themeBreakdownCard.style.display = 'none';
    }

    // Filtros de revisão
    filterWrongCount.textContent = wrongCount;
    filterAllCount.textContent = allQuestions.length;
    filterCorrectCount.textContent = correctCount;

    currentReviewFilter = wrongCount > 0 ? 'wrong' : 'all';
    updateReviewFilterButtons();
    renderReviewList();

    quizView.classList.remove('active');
    resultView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderThemeProgress(themeStats) {
    themeProgressList.innerHTML = '';

    for (let tid = 1; tid <= 8; tid++) {
      const item = themeStats[tid];
      if (!item || item.total === 0) continue;

      const pct = Math.round((item.correct / item.total) * 100);
      const row = document.createElement('div');
      row.className = 'theme-row';

      row.innerHTML = `
        <div class="theme-row-header">
          <span class="theme-row-title">${item.name}</span>
          <span class="theme-row-stats">${item.correct}/${item.total} (${pct}%)</span>
        </div>
        <div class="theme-bar-bg">
          <div class="theme-bar-fill" style="width: ${pct}%; background-color: ${pct >= 70 ? 'var(--success)' : (pct >= 50 ? 'var(--warning)' : 'var(--danger)')};"></div>
        </div>
      `;
      themeProgressList.appendChild(row);
    }
  }

  // --------------------------------------------------------------------------
  // Revisão Detalhada com Justificativas
  // --------------------------------------------------------------------------

  function renderReviewList() {
    reviewList.innerHTML = '';

    let questionsToReview = allQuestions;

    if (currentReviewFilter === 'wrong') {
      questionsToReview = allQuestions.filter(q => {
        if (q.anulada || q.tipo === 'discursiva') return false;
        const ans = userAnswers[q.id];
        return ans && ans !== q.gabarito;
      });
    } else if (currentReviewFilter === 'correct') {
      questionsToReview = allQuestions.filter(q => {
        if (q.anulada || q.tipo === 'discursiva') return false;
        return userAnswers[q.id] === q.gabarito;
      });
    }

    if (questionsToReview.length === 0) {
      reviewList.innerHTML = `
        <div class="card empty-review-msg">
          🎉 Nenhuma questão encontrada para este filtro!
        </div>
      `;
      return;
    }

    questionsToReview.forEach(q => {
      const card = document.createElement('div');
      const userChoice = userAnswers[q.id];

      let cardClass = 'review-card ';
      let statusBadge = '';

      if (q.anulada) {
        cardClass += 'review-card-neutral';
        statusBadge = '<span class="review-status-badge badge-neutral">Anulada Oficialmente</span>';
      } else if (q.tipo === 'discursiva') {
        cardClass += 'review-card-neutral';
        statusBadge = '<span class="review-status-badge badge-neutral">Discursiva</span>';
      } else if (!userChoice) {
        cardClass += 'review-card-neutral';
        statusBadge = '<span class="review-status-badge badge-neutral">⚪ Em Branco</span>';
      } else if (userChoice === q.gabarito) {
        cardClass += 'review-card-correct';
        statusBadge = '<span class="review-status-badge badge-correct">✓ Você Acertou</span>';
      } else {
        cardClass += 'review-card-wrong';
        statusBadge = `<span class="review-status-badge badge-wrong">✗ Você Marcou: ${userChoice}</span>`;
      }

      card.className = cardClass;

      let optionsHtml = '';
      if (q.tipo === 'multipla_escolha') {
        optionsHtml = '<div class="review-options">';
        q.alternativas.forEach(alt => {
          let optClass = 'review-opt';
          let indicator = `<span class="alt-letter">${alt.letra}</span>`;

          const isOfficial = alt.letra === q.gabarito;
          const isUser = alt.letra === userChoice;

          if (isOfficial) {
            optClass += ' opt-correct';
            indicator = `<span class="review-opt-indicator">✓ Gabarito (${alt.letra})</span>`;
          } else if (isUser && !isOfficial) {
            optClass += ' opt-wrong-picked';
            indicator = `<span class="review-opt-indicator">✗ Sua Escolha (${alt.letra})</span>`;
          }

          optionsHtml += `
            <div class="${optClass}">
              ${indicator}
              <span class="alt-text">${renderMarkdown(alt.texto)}</span>
            </div>
          `;
        });
        optionsHtml += '</div>';
      }

      let diagramHtml = '';
      if (q.svg_diagrama) {
        diagramHtml = `<div class="q-diagram-container">${q.svg_diagrama}</div>`;
      }

      const metaBadgeExam = currentMode === 'prova' ? 'PROVA' : `${q.exame} ${q.ano || ''}`;
      const metaBadgeTheme = currentMode === 'prova' ? 'Sistemas Distribuídos' : `Tema ${q.tema_id}`;

      card.innerHTML = `
        <div class="card-meta-bar">
          <div class="meta-tags">
            <span class="badge badge-exam">${metaBadgeExam}</span>
            <span class="badge badge-theme">${metaBadgeTheme}</span>
            ${q.correlata ? '<span class="badge badge-correlata">Correlata</span>' : ''}
            ${statusBadge}
          </div>
          <div class="meta-nav-indicator">Q${q.id}</div>
        </div>

        <h3 class="q-title">${q.titulo}</h3>
        <div class="q-statement">${renderMarkdown(q.enunciado)}</div>
        ${diagramHtml}
        ${optionsHtml}

        <div class="explanation-card">
          <div class="explanation-title">💡 Justificativa Fundamentada:</div>
          <div class="explanation-text">${renderMarkdown(q.explicacao)}</div>
        </div>

        <div class="card-source-bar">Fonte: ${q.fonte}</div>
      `;

      reviewList.appendChild(card);
    });
  }

  function updateReviewFilterButtons() {
    const buttons = document.querySelectorAll('.review-filter-btn');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-filter') === currentReviewFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // Refazer Erradas / Nova Tentativa com Reembaralhamento
  // --------------------------------------------------------------------------

  function startRetryErrorsMode() {
    const wrongQuestions = allQuestions.filter(q => {
      if (q.anulada || q.tipo === 'discursiva') return false;
      const ans = userAnswers[q.id];
      return ans && ans !== q.gabarito;
    });

    if (wrongQuestions.length === 0) {
      alert('Você não possui questões erradas para refazer!');
      return;
    }

    wrongQuestions.forEach(q => {
      delete userAnswers[q.id];
    });
    saveCurrentAnswers();

    isRetryMode = true;
    activeQuestions = [...wrongQuestions];
    currentIndex = 0;

    retryCountSpan.textContent = activeQuestions.length;
    retryBanner.style.display = 'flex';

    resultView.classList.remove('active');
    quizView.classList.add('active');

    renderSidebarGrid();
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function exitRetryMode() {
    isRetryMode = false;
    retryBanner.style.display = 'none';
    activeQuestions = [...filteredQuestions];
    currentIndex = 0;
    renderSidebarGrid();
    renderCurrentQuestion();
  }

  function reshuffleAndRestartProva() {
    if (confirm('Deseja iniciar uma nova tentativa com as 7 questões em uma nova ordem embaralhada?')) {
      userAnswers = {};
      localStorage.removeItem(STORAGE_KEY_PROVA_ANSWERS);
      setupProvaQuestions(true); // Forçar novo embaralhamento
      saveCurrentAnswers();

      resultView.classList.remove('active');
      quizView.classList.add('active');

      renderSidebarGrid();
      renderCurrentQuestion();
      updateHeaderProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function resetCurrentMode() {
    const label = currentMode === 'prova' ? 'a prova atual' : 'o simulado completo';
    if (confirm(`Tem certeza que deseja reiniciar ${label} e limpar suas respostas?`)) {
      userAnswers = {};
      if (currentMode === 'prova') {
        localStorage.removeItem(STORAGE_KEY_PROVA_ANSWERS);
        setupProvaQuestions(true); // Reembaralhar
      } else {
        discursiveAnswers = {};
        localStorage.removeItem(STORAGE_KEY_GERAL_ANSWERS);
        localStorage.removeItem(STORAGE_KEY_DISCURSIVE);
        activeQuestions = [...filteredQuestions];
      }

      isRetryMode = false;
      retryBanner.style.display = 'none';
      currentIndex = 0;

      resultView.classList.remove('active');
      quizView.classList.add('active');

      renderSidebarGrid();
      renderCurrentQuestion();
      updateHeaderProgress();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --------------------------------------------------------------------------
  // Event Listeners
  // --------------------------------------------------------------------------

  function setupEventListeners() {
    // Tema
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Botão de Trocar Modo
    btnModeSwitch.addEventListener('click', showModeSelectModal);

    // Cards do Modal de Seleção de Modo
    cardSelectProva.addEventListener('click', () => setMode('prova', false));
    cardSelectGeral.addEventListener('click', () => setMode('geral', false));

    cardSelectProva.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setMode('prova', false);
      }
    });

    cardSelectGeral.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setMode('geral', false);
      }
    });

    // Navegação
    btnPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderCurrentQuestion();
      }
    });

    btnNext.addEventListener('click', () => {
      if (currentIndex < activeQuestions.length - 1) {
        currentIndex++;
        renderCurrentQuestion();
      }
    });

    btnClear.addEventListener('click', () => {
      const q = activeQuestions[currentIndex];
      if (q && userAnswers[q.id]) {
        delete userAnswers[q.id];
        saveCurrentAnswers();
        renderCurrentQuestion();
        renderSidebarGrid();
      }
    });

    btnFinish.addEventListener('click', showFinishConfirmation);
    btnSidebarFinish.addEventListener('click', showFinishConfirmation);
    restartHeaderBtn.addEventListener('click', resetCurrentMode);
    btnRestartAll.addEventListener('click', resetCurrentMode);

    // Modal Finish
    btnModalCancel.addEventListener('click', () => {
      modalFinish.style.display = 'none';
    });

    btnModalConfirm.addEventListener('click', calculateAndDisplayResults);

    // Retry / Reshuffle
    btnRetryErrors.addEventListener('click', startRetryErrorsMode);
    btnExitRetry.addEventListener('click', exitRetryMode);
    btnReshuffleTest.addEventListener('click', reshuffleAndRestartProva);

    btnBackToTest.addEventListener('click', () => {
      resultView.classList.remove('active');
      quizView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Filtros
    filterExam.addEventListener('change', applyFilters);
    filterTheme.addEventListener('change', applyFilters);

    // Discursiva
    btnShowDiscursiveKey.addEventListener('click', () => {
      discursiveExpectedBox.style.display =
        discursiveExpectedBox.style.display === 'none' ? 'block' : 'none';
    });

    discursiveInput.addEventListener('input', (e) => {
      const q = activeQuestions[currentIndex];
      if (!discursiveAnswers[q.id]) discursiveAnswers[q.id] = {};
      discursiveAnswers[q.id].draft = e.target.value;
      saveCurrentAnswers();
    });

    // Filtros de Revisão
    document.querySelectorAll('.review-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentReviewFilter = e.currentTarget.getAttribute('data-filter');
        updateReviewFilterButtons();
        renderReviewList();
      });
    });

    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

      if (quizView.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          if (currentIndex > 0) {
            currentIndex--;
            renderCurrentQuestion();
          }
        } else if (e.key === 'ArrowRight') {
          if (currentIndex < activeQuestions.length - 1) {
            currentIndex++;
            renderCurrentQuestion();
          }
        } else {
          const keyUpper = e.key.toUpperCase();
          if (['A', 'B', 'C', 'D', 'E'].includes(keyUpper)) {
            const q = activeQuestions[currentIndex];
            if (q && q.tipo === 'multipla_escolha') {
              selectAlternative(q.id, keyUpper);
            }
          }
        }
      }
    });
  }

  // Executar ao carregar DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
