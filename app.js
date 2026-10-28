/**
 * Simulado de Sistemas Distribuídos — ENADE & POSCOMP
 * Lógica principal da aplicação web
 */

(function () {
  'use strict';

  // Chaves de armazenamento local
  const STORAGE_KEY_ANSWERS = 'simulado_sd_answers_v1';
  const STORAGE_KEY_DISCURSIVE = 'simulado_sd_discursive_v1';
  const STORAGE_KEY_THEME = 'simulado_sd_theme_v1';

  // Estado da aplicação
  let allQuestions = [];
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

  // Header
  const answeredCountEl = document.getElementById('answered-count');
  const totalEvaluableEl = document.getElementById('total-evaluable-count');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconEl = document.getElementById('theme-icon');
  const restartHeaderBtn = document.getElementById('btn-restart-header');

  // Question Card
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
  const btnSidebarFinish = document.getElementById('btn-sidebar-finish');
  const btnExitRetry = document.getElementById('btn-exit-retry');

  // Sidebar
  const filterExam = document.getElementById('filter-exam');
  const filterTheme = document.getElementById('filter-theme');
  const questionsGrid = document.getElementById('questions-grid');
  const sidebarSummaryBadge = document.getElementById('sidebar-summary-badge');

  // Modal Finish
  const modalFinish = document.getElementById('modal-finish');
  const modalFinishMsg = document.getElementById('modal-finish-msg');
  const btnModalCancel = document.getElementById('btn-modal-cancel');
  const btnModalConfirm = document.getElementById('btn-modal-confirm');

  // Results Elements
  const finalPercentage = document.getElementById('final-percentage');
  const finalScoreFraction = document.getElementById('final-score-fraction');
  const finalCorrectCount = document.getElementById('final-correct-count');
  const finalWrongCount = document.getElementById('final-wrong-count');
  const finalEmptyCount = document.getElementById('final-empty-count');
  const retryErrorBadge = document.getElementById('retry-error-badge');
  const themeProgressList = document.getElementById('theme-progress-list');
  const reviewList = document.getElementById('review-list');
  const btnRetryErrors = document.getElementById('btn-retry-errors');
  const btnRestartAll = document.getElementById('btn-restart-all');
  const btnBackToTest = document.getElementById('btn-back-to-test');

  const filterWrongCount = document.getElementById('filter-wrong-count');
  const filterAllCount = document.getElementById('filter-all-count');
  const filterCorrectCount = document.getElementById('filter-correct-count');

  // --------------------------------------------------------------------------
  // Inicialização
  // --------------------------------------------------------------------------

  async function init() {
    initTheme();
    loadStoredAnswers();

    try {
      if (window.QUESTOES_DATA && Array.isArray(window.QUESTOES_DATA) && window.QUESTOES_DATA.length > 0) {
        allQuestions = window.QUESTOES_DATA;
      } else {
        const resp = await fetch('questoes.json');
        if (!resp.ok) throw new Error('Falha ao carregar questoes.json');
        allQuestions = await resp.json();
      }
    } catch (err) {
      console.error('Erro ao carregar questões:', err);
      qStatement.innerHTML = `<div class="empty-review-msg">Erro ao carregar a base de questões (${err.message}). Certifique-se de executar via servidor local ou abrir com o arquivo questoes-data.js presente.</div>`;
      return;
    }

    filteredQuestions = [...allQuestions];
    activeQuestions = [...filteredQuestions];

    setupEventListeners();
    updateHeaderProgress();
    renderSidebarGrid();
    renderCurrentQuestion();
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
  // Persistência Local
  // --------------------------------------------------------------------------

  function loadStoredAnswers() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ANSWERS);
      if (saved) userAnswers = JSON.parse(saved);
      const savedDiscursive = localStorage.getItem(STORAGE_KEY_DISCURSIVE);
      if (savedDiscursive) discursiveAnswers = JSON.parse(savedDiscursive);
    } catch (e) {
      console.warn('Erro ao carregar respostas salvas:', e);
      userAnswers = {};
      discursiveAnswers = {};
    }
  }

  function saveAnswers() {
    try {
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(userAnswers));
      localStorage.setItem(STORAGE_KEY_DISCURSIVE, JSON.stringify(discursiveAnswers));
    } catch (e) {
      console.warn('Erro ao salvar respostas:', e);
    }
  }

  // --------------------------------------------------------------------------
  // Markdown Simplificado
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
          // Destacar algarismos romanos ou itens i., ii., I., II.
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
      qTitle.textContent = 'Nenhuma questão encontrada com os filtros selecionados';
      qStatement.innerHTML = '<p class="empty-review-msg">Ajuste os filtros de Banca ou Tema na barra lateral para carregar questões.</p>';
      alternativesArea.innerHTML = '';
      qDiagramContainer.style.display = 'none';
      discursiveArea.style.display = 'none';
      return;
    }

    if (currentIndex >= activeQuestions.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = activeQuestions.length - 1;

    const q = activeQuestions[currentIndex];

    // Meta Tags
    badgeExam.textContent = `${q.exame} ${q.ano || ''}`.trim();
    badgeTheme.textContent = `Tema ${q.tema_id}`;
    badgeTheme.title = q.tema;

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
    qSource.textContent = `Fonte oficial: ${q.fonte}`;

    // Diagrama Espaço-Tempo em SVG (para Q33 e Q38)
    if (q.svg_diagrama) {
      qDiagramContainer.innerHTML = q.svg_diagrama;
      qDiagramContainer.style.display = 'block';
    } else {
      qDiagramContainer.innerHTML = '';
      qDiagramContainer.style.display = 'none';
    }

    // Tratamento de Questão Discursiva (Q58)
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

    // Atualizar estado dos botões de navegação
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
      // Desmarcar se clicar na mesma
      delete userAnswers[questionId];
    } else {
      userAnswers[questionId] = letter;
    }
    saveAnswers();
    renderCurrentQuestion();
    renderSidebarGrid();
  }

  window.gradeDiscursive = function (result) {
    const q = activeQuestions[currentIndex];
    if (!discursiveAnswers[q.id]) discursiveAnswers[q.id] = {};
    discursiveAnswers[q.id].draft = discursiveInput.value;
    discursiveAnswers[q.id].status = result;
    saveAnswers();
    renderSidebarGrid();
    updateHeaderProgress();
    alert(result === 'acertou' ? 'Marcado como compreendido com sucesso!' : 'Marcado para reforço teórico!');
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
      btn.textContent = q.id;
      btn.title = `Q${q.id}: ${q.titulo}`;

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
    // Avalia apenas as 65 objetivas válidas para o placar oficial
    const evaluable = allQuestions.filter(q => q.tipo === 'multipla_escolha' && !q.anulada);
    const answeredCount = evaluable.filter(q => userAnswers[q.id] !== undefined).length;

    answeredCountEl.textContent = answeredCount;
    totalEvaluableEl.textContent = evaluable.length;
  }

  // --------------------------------------------------------------------------
  // Filtros de Banca e Tema
  // --------------------------------------------------------------------------

  function applyFilters() {
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
  // Finalização e Cálculo do Resultado
  // --------------------------------------------------------------------------

  function showFinishConfirmation() {
    const evaluable = allQuestions.filter(q => q.tipo === 'multipla_escolha' && !q.anulada);
    const unanswered = evaluable.filter(q => userAnswers[q.id] === undefined).length;

    if (unanswered > 0) {
      modalFinishMsg.textContent = `Você ainda possui ${unanswered} questão(ões) em branco dentre as ${evaluable.length} avaliadas. Deseja realmente finalizar e ver seu gabarito comentado?`;
    } else {
      modalFinishMsg.textContent = `Parabéns! Você respondeu todas as ${evaluable.length} questões objetivas. Pronto para conferir seu resultado e a revisão completa?`;
    }
    modalFinish.style.display = 'flex';
  }

  function calculateAndDisplayResults() {
    modalFinish.style.display = 'none';

    // 65 questões válidas
    const evaluable = allQuestions.filter(q => q.tipo === 'multipla_escolha' && !q.anulada);
    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;

    const themeStats = {};
    for (let t = 1; t <= 8; t++) {
      themeStats[t] = { total: 0, correct: 0, name: '' };
    }

    evaluable.forEach(q => {
      const tid = q.tema_id;
      themeStats[tid].total++;
      themeStats[tid].name = q.tema;

      const userChoice = userAnswers[q.id];
      if (!userChoice) {
        emptyCount++;
      } else if (userChoice === q.gabarito) {
        correctCount++;
        themeStats[tid].correct++;
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

    // Renderizar gráfico por Tema
    renderThemeProgress(themeStats);

    // Contadores dos botões de filtro de revisão
    filterWrongCount.textContent = wrongCount;
    filterAllCount.textContent = allQuestions.length;
    filterCorrectCount.textContent = correctCount;

    // Renderizar lista de revisão
    currentReviewFilter = wrongCount > 0 ? 'wrong' : 'all';
    updateReviewFilterButtons();
    renderReviewList();

    // Mudar para tela de resultados
    quizView.classList.remove('active');
    resultView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderThemeProgress(themeStats) {
    themeProgressList.innerHTML = '';

    for (let tid = 1; tid <= 8; tid++) {
      const item = themeStats[tid];
      if (item.total === 0) continue;

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
  // Revisão Detalhada com Explicações Teóricas
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

      card.innerHTML = `
        <div class="card-meta-bar">
          <div class="meta-tags">
            <span class="badge badge-exam">${q.exame} ${q.ano || ''}</span>
            <span class="badge badge-theme">Tema ${q.tema_id}</span>
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
          <div class="explanation-title">💡 Explicação Teórica:</div>
          <div class="explanation-text">${q.explicacao}</div>
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
  // Modo Focado: Refazer Apenas as que Errei
  // --------------------------------------------------------------------------

  function startRetryErrorsMode() {
    const wrongQuestions = allQuestions.filter(q => {
      if (q.anulada || q.tipo === 'discursiva') return false;
      const ans = userAnswers[q.id];
      return ans && ans !== q.gabarito;
    });

    if (wrongQuestions.length === 0) {
      alert('Você não possui questões erradas no momento para refazer!');
      return;
    }

    // Limpa as respostas anteriores apenas das questões erradas
    wrongQuestions.forEach(q => {
      delete userAnswers[q.id];
    });
    saveAnswers();

    isRetryMode = true;
    activeQuestions = [...wrongQuestions];
    currentIndex = 0;

    retryCountSpan.textContent = activeQuestions.length;
    retryBanner.style.display = 'flex';

    // Voltar para a visualização do Simulado
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

  // --------------------------------------------------------------------------
  // Reiniciar Tudo
  // --------------------------------------------------------------------------

  function resetAll() {
    if (confirm('Tem certeza que deseja reiniciar todo o simulado e apagar todas as respostas salvas?')) {
      userAnswers = {};
      discursiveAnswers = {};
      localStorage.removeItem(STORAGE_KEY_ANSWERS);
      localStorage.removeItem(STORAGE_KEY_DISCURSIVE);

      isRetryMode = false;
      retryBanner.style.display = 'none';

      filteredQuestions = [...allQuestions];
      activeQuestions = [...filteredQuestions];
      currentIndex = 0;

      filterExam.value = 'all';
      filterTheme.value = 'all';

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
        saveAnswers();
        renderCurrentQuestion();
        renderSidebarGrid();
      }
    });

    btnFinish.addEventListener('click', showFinishConfirmation);
    btnSidebarFinish.addEventListener('click', showFinishConfirmation);
    restartHeaderBtn.addEventListener('click', resetAll);
    btnRestartAll.addEventListener('click', resetAll);

    // Modal
    btnModalCancel.addEventListener('click', () => {
      modalFinish.style.display = 'none';
    });

    btnModalConfirm.addEventListener('click', calculateAndDisplayResults);

    // Retry Errors
    btnRetryErrors.addEventListener('click', startRetryErrorsMode);
    btnExitRetry.addEventListener('click', exitRetryMode);

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
      saveAnswers();
    });

    // Botões de filtro da revisão
    document.querySelectorAll('.review-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentReviewFilter = e.currentTarget.getAttribute('data-filter');
        updateReviewFilterButtons();
        renderReviewList();
      });
    });

    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
      // Ignorar se estiver digitando em campo de texto
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
          // Teclas A, B, C, D, E para marcar alternativas
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
