const lessonStage = document.getElementById('lesson-stage');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const currentPageValue = document.getElementById('current-page');
const totalPagesValue = document.getElementById('total-pages');
const completedPagesValue = document.getElementById('completed-pages');
const detectivePointsValue = document.getElementById('detective-points');
const pageStatus = document.getElementById('page-status');
const courseSubtitle = document.getElementById('course-subtitle');
const celebrationLayer = document.getElementById('celebration-layer');
const lessonJumpSelect = document.getElementById('lesson-jump');
const lessonJumpButton = document.getElementById('lesson-jump-btn');

const PAGES_PER_LESSON = 5;
const POINTS_PER_PAGE = 10;

const state = {
  currentPageIndex: 0,
  lessons: [],
  pages: [],
  unlockedPages: new Set(),
  detectivePoints: 0,
  pageQuiz: {},
  nativeChecks: {},
  processTabs: {},
  flashcards: {},
  sortingAssignments: {}
};

function decodeRuntimePayload(payload) {
  const binary = window.atob(payload);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function stripHtml(value) {
  const node = document.createElement('div');
  node.innerHTML = value || '';
  return (node.textContent || '').replace(/\s+/g, ' ').trim();
}

function resolveImagePath(image) {
  if (!image) {
    return '';
  }

  if (image.crushedKey) {
    return `assets/${image.crushedKey}`;
  }
  if (image.originalUrl) {
    return `assets/${image.originalUrl}`;
  }
  if (image.key) {
    return `assets/${image.key.split('/').pop()}`;
  }

  return '';
}

function getLessons() {
  const payload = window.__riseRuntimePayload;
  if (!payload) {
    return [];
  }

  const data = decodeRuntimePayload(payload);
  return (data.course.lessons || [])
    .filter((lesson) => lesson.type === 'blocks' && !lesson.deleted)
    .sort((left, right) => Number(left.position || 0) - Number(right.position || 0));
}

function firstMeaningfulText(lesson) {
  for (const block of lesson.items || []) {
    for (const item of block.items || []) {
      if (item.heading) {
        return stripHtml(item.heading);
      }
      if (item.title) {
        return stripHtml(item.title);
      }
      if (item.paragraph) {
        return stripHtml(item.paragraph);
      }
      if (item.description) {
        return stripHtml(item.description);
      }
    }
  }

  return lesson.title;
}

function splitBlocksIntoFive(blocks) {
  const safeBlocks = blocks || [];
  const chunks = [];

  for (let page = 0; page < PAGES_PER_LESSON; page += 1) {
    const start = Math.floor((page * safeBlocks.length) / PAGES_PER_LESSON);
    const end = Math.floor(((page + 1) * safeBlocks.length) / PAGES_PER_LESSON);
    chunks.push(safeBlocks.slice(start, end));
  }

  return chunks;
}

function buildPages(lessons) {
  const pages = [];

  lessons.forEach((lesson, lessonIndex) => {
    const chunks = splitBlocksIntoFive(lesson.items || []);
    chunks.forEach((blocksSubset, chunkIndex) => {
      pages.push({
        key: `${lesson.id}-${chunkIndex + 1}`,
        lesson,
        lessonIndex,
        chunkIndex,
        blocksSubset
      });
    });
  });

  return pages;
}

function firstMeaningfulTextFromBlocks(blocksSubset) {
  for (const block of blocksSubset || []) {
    for (const item of block.items || []) {
      const candidate = stripHtml(item.heading || item.title || item.paragraph || item.description || '');
      if (candidate) {
        return candidate;
      }
    }
  }

  return '';
}

function getConceptLabel(page) {
  const fromBlocks = firstMeaningfulTextFromBlocks(page.blocksSubset);
  if (fromBlocks) {
    return fromBlocks;
  }

  return `Core idea from ${page.lesson.title}`;
}

function compactText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 3)}...`;
}

function inferConceptType(page) {
  const conceptText = `${getConceptLabel(page)} ${page.lesson.title}`.toLowerCase();

  if (/(evidence|context|citation|cite|texto|evidencia|contextual)/.test(conceptText)) {
    return 'evidence';
  }
  if (/(claim|thesis|argument|tesis|afirmacion|argumento)/.test(conceptText)) {
    return 'claim';
  }
  if (/(counterclaim|rebuttal|refute|refutar|contraargument)/.test(conceptText)) {
    return 'counterclaim';
  }
  if (/(tone|word choice|diction|tono|diccion)/.test(conceptText)) {
    return 'tone';
  }
  if (/(summary|summarize|main idea|resumen|idea principal)/.test(conceptText)) {
    return 'summary';
  }

  return 'analysis';
}

function buildConceptQuestions(page) {
  const type = inferConceptType(page);

  if (type === 'evidence') {
    return {
      q1: {
        id: 'q1',
        prompt: 'Question 1: Which sentence is the strongest contextual evidence for the claim that Maya felt isolated? / Pregunta 1: Que oracion es la evidencia contextual mas fuerte para la afirmacion de que Maya se sentia aislada?',
        correct: '"At lunch, Maya sat alone by the back fence while the others laughed together at the center table."',
        choices: [
          '"Maya wore a blue jacket and carried a heavy backpack."',
          '"At lunch, Maya sat alone by the back fence while the others laughed together at the center table."',
          '"The cafeteria served soup and fruit on Tuesday."'
        ]
      },
      q2: {
        id: 'q2',
        prompt: 'Question 2: Which citation best supports the claim that the character changed over time? / Pregunta 2: Que cita respalda mejor la afirmacion de que el personaje cambio con el tiempo?',
        correct: '"At first I stayed quiet," Luis admits, "but by the final meeting I presented our plan to the whole class."',
        choices: [
          '"At first I stayed quiet," Luis admits, "but by the final meeting I presented our plan to the whole class."',
          '"Luis has brown hair and likes soccer after school."',
          '"The meeting happened on a rainy afternoon in October."'
        ]
      }
    };
  }

  if (type === 'claim') {
    return {
      q1: {
        id: 'q1',
        prompt: 'Question 1: Which statement is a clear claim about school uniforms? / Pregunta 1: Que enunciado es una afirmacion clara sobre los uniformes escolares?',
        correct: 'School uniforms should be optional because students learn better when they can express identity.',
        choices: [
          'School uniforms should be optional because students learn better when they can express identity.',
          'Some students wore uniforms on Monday and others did not.',
          'Uniforms are sold in blue and gray sizes at the office.'
        ]
      },
      q2: {
        id: 'q2',
        prompt: 'Question 2: Which evidence best supports the claim that daily reading improves vocabulary? / Pregunta 2: Que evidencia respalda mejor la afirmacion de que la lectura diaria mejora el vocabulario?',
        correct: 'Students who read 20 minutes daily used 35 percent more academic words in writing by the end of the term.',
        choices: [
          'The school library opens at 7:30 a.m. each day.',
          'Students who read 20 minutes daily used 35 percent more academic words in writing by the end of the term.',
          'Reading logs were printed on green paper this semester.'
        ]
      }
    };
  }

  if (type === 'counterclaim') {
    return {
      q1: {
        id: 'q1',
        prompt: 'Question 1: Which option is a true counterclaim to "Homework should be reduced"? / Pregunta 1: Que opcion es un contraargumento real a "Se debe reducir la tarea"?',
        correct: 'Regular homework builds practice habits and helps students remember new skills.',
        choices: [
          'Regular homework builds practice habits and helps students remember new skills.',
          'Homework is assigned in math, science, and language arts.',
          'Many students complete homework at kitchen tables.'
        ]
      },
      q2: {
        id: 'q2',
        prompt: 'Question 2: Which sentence best rebuts this counterclaim: "Group projects are unfair"? / Pregunta 2: Que oracion refuta mejor este contraargumento: "Los proyectos en grupo son injustos"?',
        correct: 'When teams use clear roles and peer check-ins, group work increases accountability and shared learning.',
        choices: [
          'Group projects usually take place in class.',
          'When teams use clear roles and peer check-ins, group work increases accountability and shared learning.',
          'Some students prefer to work by themselves.'
        ]
      }
    };
  }

  if (type === 'tone') {
    return {
      q1: {
        id: 'q1',
        prompt: 'Question 1: The line "She slammed the notebook shut and stared at the floor" suggests which tone? / Pregunta 1: La linea "Cerro el cuaderno de golpe y miro al suelo" sugiere cual tono?',
        correct: 'Frustrated and discouraged / Frustrado y desanimado',
        choices: [
          'Frustrated and discouraged / Frustrado y desanimado',
          'Celebratory and proud / Celebratorio y orgulloso',
          'Playful and silly / Jugueton y gracioso'
        ]
      },
      q2: {
        id: 'q2',
        prompt: 'Question 2: Which revision creates a more formal tone? / Pregunta 2: Que revision crea un tono mas formal?',
        correct: 'The committee recommends revising the policy to improve student safety.',
        choices: [
          'The committee recommends revising the policy to improve student safety.',
          'The committee is kinda not happy and wants to change stuff fast.',
          'The committee says this rule is super weird and random.'
        ]
      }
    };
  }

  if (type === 'summary') {
    return {
      q1: {
        id: 'q1',
        prompt: 'Question 1: Which summary is most objective? / Pregunta 1: Que resumen es mas objetivo?',
        correct: 'The article explains three causes of water shortages and describes two community solutions.',
        choices: [
          'I loved this article because the writer is brilliant and funny.',
          'The article explains three causes of water shortages and describes two community solutions.',
          'Water is obviously the only issue that matters right now.'
        ]
      },
      q2: {
        id: 'q2',
        prompt: 'Question 2: Which detail should be included in a strong summary? / Pregunta 2: Que detalle debe incluirse en un resumen solido?',
        correct: 'The central idea and key supporting points, without minor trivia.',
        choices: [
          'Every adjective used by the author.',
          'The central idea and key supporting points, without minor trivia.',
          'Personal opinions about whether the text was entertaining.'
        ]
      }
    };
  }

  return {
    q1: {
      id: 'q1',
      prompt: 'Question 1: Which response shows stronger text analysis? / Pregunta 1: Que respuesta muestra un analisis textual mas fuerte?',
      correct: 'The response connects a claim to specific quoted evidence and explains how that evidence supports the idea.',
      choices: [
        'The response repeats the prompt without evidence.',
        'The response connects a claim to specific quoted evidence and explains how that evidence supports the idea.',
        'The response only gives personal preference about the topic.'
      ]
    },
    q2: {
      id: 'q2',
      prompt: 'Question 2: Which revision improves analytical clarity? / Pregunta 2: Que revision mejora la claridad analitica?',
      correct: 'Add precise evidence and explain why the evidence matters to the argument.',
      choices: [
        'Add precise evidence and explain why the evidence matters to the argument.',
        'Use more vague words without examples.',
        'Replace analysis with unrelated background details.'
      ]
    }
  };
}

function getPageQuizModel(page) {
  return buildConceptQuestions(page);
}

function ensurePageQuizState(pageKey) {
  if (!state.pageQuiz[pageKey]) {
    state.pageQuiz[pageKey] = {
      q1Correct: false,
      q2Correct: false,
      q1Feedback: '',
      q2Feedback: ''
    };
  }

  return state.pageQuiz[pageKey];
}

function isPageQuizComplete(pageKey) {
  const quizState = ensurePageQuizState(pageKey);
  return quizState.q1Correct && quizState.q2Correct;
}

function triggerDetectivePointsBurst(anchorElement) {
  const palette = ['#ffcf5c', '#6ed7ff', '#9de7cb', '#ff8f78'];
  const rect = anchorElement.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height - 4;

  for (let i = 0; i < 18; i += 1) {
    const orb = document.createElement('span');
    orb.className = 'point-orb';
    orb.textContent = '+10';
    orb.style.left = `${startX - 20}px`;
    orb.style.top = `${startY - 20}px`;
    orb.style.background = palette[i % palette.length];
    orb.style.setProperty('--x-shift', `${-180 + Math.random() * 360}px`);
    orb.style.setProperty('--y-shift', `${-220 - Math.random() * 180}px`);
    celebrationLayer.appendChild(orb);

    orb.addEventListener('animationend', () => {
      orb.remove();
    });
  }
}

function createRichHtml(tagName, html, className) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.innerHTML = html;
  return element;
}

function renderTextBlock(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'block-card lesson-rich';

  (block.items || []).forEach((item) => {
    if (item.heading) {
      const heading = document.createElement('h3');
      heading.textContent = stripHtml(item.heading);
      wrapper.appendChild(heading);
    }

    if (item.paragraph) {
      wrapper.appendChild(createRichHtml('div', item.paragraph, 'lesson-rich'));
    }
  });

  return wrapper;
}

function renderImageBlock(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'block-card media-figure';

  const firstItem = block.items && block.items[0];
  const firstImage = firstItem && firstItem.media && firstItem.media.image;
  const src = resolveImagePath(firstImage);

  if (src) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = stripHtml((firstItem && (firstItem.caption || firstItem.paragraph)) || 'Lesson image / Imagen de la leccion');
    wrapper.appendChild(image);
  }

  if (firstItem && firstItem.caption) {
    wrapper.appendChild(createRichHtml('div', firstItem.caption, 'lesson-rich'));
  }

  return wrapper;
}

function renderAccordionBlock(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'block-card';

  const list = document.createElement('div');
  list.className = 'accordion-list';

  (block.items || []).forEach((item) => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = stripHtml(item.title || 'Details / Detalles');
    details.appendChild(summary);
    details.appendChild(createRichHtml('div', item.description || '', 'lesson-rich'));
    list.appendChild(details);
  });

  wrapper.appendChild(list);
  return wrapper;
}

function renderFlashcardBlock(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'block-card';

  const grid = document.createElement('div');
  grid.className = 'flashcard-grid';

  (block.items || []).forEach((item) => {
    const cardId = item.id;
    const flipped = Boolean(state.flashcards[cardId]);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `flashcard${flipped ? ' flipped' : ''}`;
    button.dataset.flashcardId = cardId;

    const title = document.createElement('p');
    title.className = 'flashcard-face-title';
    title.textContent = flipped ? 'Back / Reverso' : 'Front / Frente';
    button.appendChild(title);

    const content = document.createElement('div');
    content.className = 'flashcard-face lesson-rich';
    content.innerHTML = flipped ? item.back.description : item.front.description;
    button.appendChild(content);

    grid.appendChild(button);
  });

  wrapper.appendChild(grid);
  return wrapper;
}

function renderProcessBlock(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'process-card';

  const visibleItems = (block.items || []).filter((item) => !item.isHidden);
  const blockId = block.globalBlockId || block.id;
  const activeIndex = state.processTabs[blockId] || 0;

  const tabs = document.createElement('div');
  tabs.className = 'process-tabs';
  visibleItems.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `process-tab${index === activeIndex ? ' active' : ''}`;
    button.dataset.processId = blockId;
    button.dataset.processIndex = String(index);
    button.textContent = stripHtml(item.title || `Step ${index + 1} / Paso ${index + 1}`);
    tabs.appendChild(button);
  });
  wrapper.appendChild(tabs);

  const panel = document.createElement('div');
  panel.className = 'process-content lesson-rich';
  panel.innerHTML = visibleItems[activeIndex] ? visibleItems[activeIndex].description || '' : '';
  wrapper.appendChild(panel);

  return wrapper;
}

function renderKnowledgeCheck(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'native-check';

  const item = block.items[0];
  const questionId = block.globalBlockId || block.id;
  const checkState = state.nativeChecks[questionId] || {};

  const tag = document.createElement('p');
  tag.className = 'block-tag';
  tag.textContent = 'Knowledge Check / Revision de conocimientos';
  wrapper.appendChild(tag);

  const title = document.createElement('h3');
  title.textContent = stripHtml(item.title || 'Question / Pregunta');
  wrapper.appendChild(title);

  const choiceGrid = document.createElement('div');
  choiceGrid.className = 'choice-grid';
  (item.answers || []).forEach((answer) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';
    button.dataset.questionId = questionId;
    button.dataset.answerId = answer.id;
    button.dataset.correct = String(Boolean(answer.correct));
    button.textContent = answer.title;
    choiceGrid.appendChild(button);
  });
  wrapper.appendChild(choiceGrid);

  const feedback = document.createElement('p');
  feedback.className = `feedback-text${checkState.status ? ` ${checkState.status}` : ''}`;
  feedback.textContent = checkState.message || '';
  wrapper.appendChild(feedback);

  return wrapper;
}

function renderSortingBlock(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'sorting-card';

  const blockId = block.globalBlockId || block.id;
  const assignmentState = state.sortingAssignments[blockId] || { selectedItemId: null, assignments: {}, feedback: '' };
  const items = block.items || [];
  const piles = block.piles || [];

  const title = document.createElement('h3');
  title.textContent = 'Sorting Activity / Actividad de clasificacion';
  wrapper.appendChild(title);

  const help = document.createElement('p');
  help.className = 'lesson-rich';
  help.textContent = 'Select a statement, then choose a category. / Selecciona una afirmacion y despues elige una categoria.';
  wrapper.appendChild(help);

  const itemGrid = document.createElement('div');
  itemGrid.className = 'sorting-items';
  items.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `sort-chip${assignmentState.selectedItemId === item.id || assignmentState.assignments[item.id] ? ' assigned' : ''}`;
    button.dataset.sortingBlockId = blockId;
    button.dataset.sortingItemId = item.id;

    const assignedPile = piles.find((pile) => pile.id === assignmentState.assignments[item.id]);
    const assignmentText = assignedPile
      ? `Assigned / Asignado: ${assignedPile.title}`
      : 'Select to place / Selecciona para colocar';

    button.innerHTML = `${item.title}<small>${assignmentText}</small>`;
    itemGrid.appendChild(button);
  });
  wrapper.appendChild(itemGrid);

  const pileGrid = document.createElement('div');
  pileGrid.className = 'sorting-piles';
  piles.forEach((pile) => {
    const pileCard = document.createElement('div');
    pileCard.className = 'pile-card';

    const pileTitle = document.createElement('h4');
    pileTitle.textContent = pile.title;
    pileCard.appendChild(pileTitle);

    const pileButton = document.createElement('button');
    pileButton.type = 'button';
    pileButton.className = 'pile-button';
    pileButton.dataset.sortingBlockId = blockId;
    pileButton.dataset.pileId = pile.id;
    pileButton.textContent = 'Place selected item here / Coloca aqui la opcion seleccionada';
    pileCard.appendChild(pileButton);
    pileGrid.appendChild(pileCard);
  });
  wrapper.appendChild(pileGrid);

  const checkButton = document.createElement('button');
  checkButton.type = 'button';
  checkButton.className = 'check-button';
  checkButton.dataset.sortingCheckId = blockId;
  checkButton.textContent = 'Check sorting / Revisar la clasificacion';
  wrapper.appendChild(checkButton);

  const feedback = document.createElement('p');
  feedback.className = 'sorting-feedback';
  feedback.textContent = assignmentState.feedback || '';
  wrapper.appendChild(feedback);

  return wrapper;
}

function renderGenericBlock(block) {
  const wrapper = document.createElement('section');
  wrapper.className = 'block-card';

  const grid = document.createElement('div');
  grid.className = 'generic-grid';

  (block.items || []).forEach((item) => {
    const card = document.createElement('div');
    card.className = 'generic-item';

    if (item.title) {
      const title = document.createElement('h4');
      title.textContent = stripHtml(item.title);
      card.appendChild(title);
    }
    if (item.heading) {
      const heading = document.createElement('h4');
      heading.textContent = stripHtml(item.heading);
      card.appendChild(heading);
    }
    if (item.description) {
      card.appendChild(createRichHtml('div', item.description, 'lesson-rich'));
    }
    if (item.paragraph) {
      card.appendChild(createRichHtml('div', item.paragraph, 'lesson-rich'));
    }

    grid.appendChild(card);
  });

  wrapper.appendChild(grid);
  return wrapper;
}

function renderBlock(block) {
  if (block.family === 'text') {
    return renderTextBlock(block);
  }
  if (block.family === 'image') {
    return renderImageBlock(block);
  }
  if (block.family === 'flashcard') {
    return renderFlashcardBlock(block);
  }
  if (block.family === 'knowledgeCheck' && block.variant === 'multiple choice') {
    return renderKnowledgeCheck(block);
  }
  if (block.family === 'interactive' && block.variant === 'accordion') {
    return renderAccordionBlock(block);
  }
  if (block.family === 'interactive' && block.variant === 'flashcard') {
    return renderFlashcardBlock(block);
  }
  if ((block.family === 'interactive-fullscreen' || block.family === 'interactive') && block.variant === 'process') {
    return renderProcessBlock(block);
  }
  if ((block.family === 'interactive-fullscreen' || block.family === 'interactive') && block.variant === 'sorting') {
    return renderSortingBlock(block);
  }

  return renderGenericBlock(block);
}

function renderRewardPanel(page) {
  const wrapper = document.createElement('section');
  wrapper.className = 'reward-panel';

  const isUnlocked = state.unlockedPages.has(page.key);
  const quizModel = getPageQuizModel(page);
  const quizState = ensurePageQuizState(page.key);
  const quizComplete = isPageQuizComplete(page.key);

  const quizHeading = document.createElement('h3');
  quizHeading.textContent = 'Page Quiz (2 Questions) / Cuestionario de pagina (2 preguntas)';
  wrapper.appendChild(quizHeading);

  const quizHelp = document.createElement('p');
  quizHelp.className = 'reward-help';
  quizHelp.textContent = 'Complete both concept questions correctly to unlock your reward. / Completa correctamente ambas preguntas de concepto para desbloquear tu recompensa.';
  wrapper.appendChild(quizHelp);

  const quizGrid = document.createElement('div');
  quizGrid.className = 'quiz-grid';

  [quizModel.q1, quizModel.q2].forEach((question) => {
    const questionCard = document.createElement('div');
    questionCard.className = 'quiz-question';

    const questionPrompt = document.createElement('p');
    questionPrompt.className = 'quiz-prompt';
    questionPrompt.textContent = question.prompt;
    questionCard.appendChild(questionPrompt);

    const choiceRow = document.createElement('div');
    choiceRow.className = 'quiz-choices';
    question.choices.forEach((choice) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'choice-button quiz-choice';
      button.dataset.quizPageKey = page.key;
      button.dataset.quizQuestionId = question.id;
      button.dataset.quizIsCorrect = String(choice === question.correct);
      button.textContent = choice;
      choiceRow.appendChild(button);
    });
    questionCard.appendChild(choiceRow);

    const feedback = document.createElement('p');
    feedback.className = `quiz-feedback${quizState[`${question.id}Correct`] ? ' correct' : ''}`;
    feedback.textContent = quizState[`${question.id}Feedback`] || '';
    questionCard.appendChild(feedback);

    quizGrid.appendChild(questionCard);
  });

  wrapper.appendChild(quizGrid);

  const heading = document.createElement('h3');
  heading.textContent = 'Reward Unlock / Desbloqueo de la recompensa';
  wrapper.appendChild(heading);

  const help = document.createElement('p');
  help.className = 'reward-help';
  help.textContent = 'Click the button below to claim points and unlock the next page. / Haz clic en el boton de abajo para reclamar puntos y desbloquear la pagina siguiente.';
  wrapper.appendChild(help);

  const rewardButton = document.createElement('button');
  rewardButton.type = 'button';
  rewardButton.className = 'reward-button';
  rewardButton.dataset.rewardPageKey = page.key;
  rewardButton.disabled = isUnlocked || !quizComplete;
  rewardButton.textContent = isUnlocked
    ? '10 detective points claimed / 10 puntos de detective reclamados'
    : 'You earned 10 detective points / Ganaste 10 puntos de detective';
  wrapper.appendChild(rewardButton);

  const feedback = document.createElement('p');
  feedback.className = `reward-feedback${isUnlocked ? ' correct' : ''}`;
  feedback.textContent = isUnlocked
    ? 'Page unlocked. Continue to the next page when ready. / Pagina desbloqueada. Continua a la pagina siguiente cuando estes listo.'
    : quizComplete
      ? 'Reward ready. Click to claim points and move forward. / Recompensa lista. Haz clic para reclamar puntos y avanzar.'
      : 'Finish both quiz questions first. / Primero termina las dos preguntas del cuestionario.';
  wrapper.appendChild(feedback);

  return wrapper;
}

function renderLessonPage() {
  const current = state.pages[state.currentPageIndex];
  if (!current) {
    lessonStage.textContent = 'Lesson page data not found. / No se encontraron datos de la pagina de la leccion.';
    return;
  }

  const page = document.createElement('article');
  page.className = 'lesson-page';

  const header = document.createElement('header');
  header.className = 'lesson-header';

  const tag = document.createElement('p');
  tag.className = 'section-tag';
  tag.textContent = `Lesson ${current.lessonIndex + 1} / Leccion ${current.lessonIndex + 1}`;
  header.appendChild(tag);

  const row = document.createElement('div');
  row.className = 'lesson-header-row';

  const title = document.createElement('h2');
  title.textContent = current.lesson.title;
  row.appendChild(title);

  const pagePill = document.createElement('div');
  pagePill.className = 'page-pill';
  pagePill.textContent = `Page ${current.chunkIndex + 1} of ${PAGES_PER_LESSON} / Pagina ${current.chunkIndex + 1} de ${PAGES_PER_LESSON}`;
  row.appendChild(pagePill);
  header.appendChild(row);

  const summary = document.createElement('div');
  summary.className = 'lesson-summary';
  summary.textContent = firstMeaningfulText(current.lesson) || 'Review the lesson notes below. / Revisa las notas de la leccion a continuacion.';
  header.appendChild(summary);
  page.appendChild(header);

  const blockGrid = document.createElement('div');
  blockGrid.className = 'blocks-grid';
  if (current.blocksSubset.length === 0) {
    const emptyCard = document.createElement('section');
    emptyCard.className = 'block-card lesson-rich';
    emptyCard.textContent = 'This page has a quick checkpoint and reward. / Esta pagina tiene una verificacion rapida y una recompensa.';
    blockGrid.appendChild(emptyCard);
  } else {
    current.blocksSubset.forEach((block) => {
      blockGrid.appendChild(renderBlock(block));
    });
  }
  page.appendChild(blockGrid);

  page.appendChild(renderRewardPanel(current));
  lessonStage.replaceChildren(page);
}

function updateSortingAssignment(blockId, itemId, pileId) {
  const current = state.sortingAssignments[blockId] || { selectedItemId: null, assignments: {}, feedback: '' };
  current.assignments[itemId] = pileId;
  current.selectedItemId = null;
  state.sortingAssignments[blockId] = current;
  renderLessonPage();
}

function checkSorting(blockId) {
  const currentPage = state.pages[state.currentPageIndex];
  const block = (currentPage.blocksSubset || []).find((entry) => (entry.globalBlockId || entry.id) === blockId);
  const current = state.sortingAssignments[blockId] || { selectedItemId: null, assignments: {}, feedback: '' };
  const allCorrect = block ? (block.items || []).every((item) => current.assignments[item.id] === item.pileId) : false;

  current.feedback = allCorrect
    ? 'Correct sorting. Nice detective work. / Clasificacion correcta. Excelente trabajo de detective.'
    : 'Some statements are still in the wrong pile. / Algunas afirmaciones todavia estan en la categoria incorrecta.';
  state.sortingAssignments[blockId] = current;
  renderLessonPage();
}

function claimPageReward(pageKey, anchorElement) {
  if (state.unlockedPages.has(pageKey)) {
    return;
  }

  if (!isPageQuizComplete(pageKey)) {
    return;
  }

  state.unlockedPages.add(pageKey);
  state.detectivePoints += POINTS_PER_PAGE;
  triggerDetectivePointsBurst(anchorElement);
  render();
}

function submitQuizAnswer(pageKey, questionId, isCorrect) {
  const quizState = ensurePageQuizState(pageKey);
  quizState[`${questionId}Correct`] = isCorrect;
  quizState[`${questionId}Feedback`] = isCorrect
    ? 'Correct. Nice thinking. / Correcto. Buen razonamiento.'
    : 'Try again and review the concept notes. / Intentalo de nuevo y revisa las notas del concepto.';

  state.pageQuiz[pageKey] = quizState;
  renderLessonPage();
}

function updateHeader() {
  const current = state.pages[state.currentPageIndex];
  currentPageValue.textContent = String(state.currentPageIndex + 1);
  totalPagesValue.textContent = String(state.pages.length);
  completedPagesValue.textContent = String(state.unlockedPages.size);
  detectivePointsValue.textContent = String(state.detectivePoints);

  if (current) {
    courseSubtitle.textContent = `Current lesson: ${current.lesson.title} | Page ${current.chunkIndex + 1} of ${PAGES_PER_LESSON} / Leccion actual: ${current.lesson.title} | Pagina ${current.chunkIndex + 1} de ${PAGES_PER_LESSON}`;
    if (lessonJumpSelect) {
      lessonJumpSelect.value = current.lesson.id;
    }
  }

  const isUnlocked = current ? state.unlockedPages.has(current.key) : false;
  const quizComplete = current ? isPageQuizComplete(current.key) : false;
  pageStatus.textContent = isUnlocked
    ? 'Unlocked. Use Next Page to continue. / Desbloqueada. Usa Pagina siguiente para continuar.'
    : quizComplete
      ? 'Quiz complete. Claim your reward at the bottom. / Cuestionario completo. Reclama tu recompensa al final.'
      : 'Complete the 2-question quiz to unlock the reward. / Completa el cuestionario de 2 preguntas para desbloquear la recompensa.';

  prevButton.disabled = state.currentPageIndex === 0;
  nextButton.disabled = state.currentPageIndex === state.pages.length - 1 || !isUnlocked;
}

function bindStageEvents() {
  lessonStage.addEventListener('click', (event) => {
    const flashcard = event.target.closest('[data-flashcard-id]');
    if (flashcard) {
      const flashcardId = flashcard.dataset.flashcardId;
      state.flashcards[flashcardId] = !state.flashcards[flashcardId];
      renderLessonPage();
      return;
    }

    const processTab = event.target.closest('[data-process-id]');
    if (processTab && processTab.dataset.processIndex) {
      state.processTabs[processTab.dataset.processId] = Number(processTab.dataset.processIndex);
      renderLessonPage();
      return;
    }

    const choiceButton = event.target.closest('[data-question-id]');
    if (choiceButton) {
      const questionId = choiceButton.dataset.questionId;
      const isCorrect = choiceButton.dataset.correct === 'true';
      state.nativeChecks[questionId] = {
        status: isCorrect ? 'correct' : 'incorrect',
        message: isCorrect
          ? 'Correct answer. Great detective thinking. / Respuesta correcta. Muy buen razonamiento de detective.'
          : 'Try again. Check the lesson clues first. / Intentalo de nuevo. Revisa primero las pistas de la leccion.'
      };
      renderLessonPage();
      return;
    }

    const sortChip = event.target.closest('[data-sorting-item-id]');
    if (sortChip) {
      const blockId = sortChip.dataset.sortingBlockId;
      const current = state.sortingAssignments[blockId] || { selectedItemId: null, assignments: {}, feedback: '' };
      current.selectedItemId = sortChip.dataset.sortingItemId;
      state.sortingAssignments[blockId] = current;
      renderLessonPage();
      return;
    }

    const pileButton = event.target.closest('[data-pile-id]');
    if (pileButton) {
      const blockId = pileButton.dataset.sortingBlockId;
      const current = state.sortingAssignments[blockId] || { selectedItemId: null, assignments: {}, feedback: '' };
      if (current.selectedItemId) {
        updateSortingAssignment(blockId, current.selectedItemId, pileButton.dataset.pileId);
      }
      return;
    }

    const sortingCheck = event.target.closest('[data-sorting-check-id]');
    if (sortingCheck) {
      checkSorting(sortingCheck.dataset.sortingCheckId);
      return;
    }

    const rewardButton = event.target.closest('[data-reward-page-key]');
    if (rewardButton) {
      claimPageReward(rewardButton.dataset.rewardPageKey, rewardButton);
      return;
    }

    const quizChoice = event.target.closest('[data-quiz-page-key]');
    if (quizChoice) {
      submitQuizAnswer(
        quizChoice.dataset.quizPageKey,
        quizChoice.dataset.quizQuestionId,
        quizChoice.dataset.quizIsCorrect === 'true'
      );
    }
  });
}

function render() {
  updateHeader();
  renderLessonPage();
}

function scrollToTopOfPage() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToLesson(lessonId) {
  const targetIndex = state.pages.findIndex((page) => page.lesson.id === lessonId);
  if (targetIndex === -1) {
    return;
  }

  state.currentPageIndex = targetIndex;
  render();
  scrollToTopOfPage();
}

function populateLessonJump() {
  if (!lessonJumpSelect) {
    return;
  }

  lessonJumpSelect.replaceChildren();
  state.lessons.forEach((lesson, index) => {
    const option = document.createElement('option');
    option.value = lesson.id;
    option.textContent = `Lesson ${index + 1}: ${lesson.title} / Leccion ${index + 1}: ${lesson.title}`;
    lessonJumpSelect.appendChild(option);
  });
}

prevButton.addEventListener('click', () => {
  if (state.currentPageIndex > 0) {
    state.currentPageIndex -= 1;
    render();
  }
});

nextButton.addEventListener('click', () => {
  const current = state.pages[state.currentPageIndex];
  if (!current || !state.unlockedPages.has(current.key)) {
    return;
  }

  if (state.currentPageIndex < state.pages.length - 1) {
    state.currentPageIndex += 1;
    render();
    scrollToTopOfPage();
  }
});

if (lessonJumpButton) {
  lessonJumpButton.addEventListener('click', () => {
    if (lessonJumpSelect && lessonJumpSelect.value) {
      goToLesson(lessonJumpSelect.value);
    }
  });
}

function initialize() {
  state.lessons = getLessons();

  if (!state.lessons.length) {
    lessonStage.textContent = 'Unable to load lesson data from runtime-data.js. / No se pudieron cargar los datos de la leccion desde runtime-data.js.';
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  state.pages = buildPages(state.lessons);
  populateLessonJump();
  bindStageEvents();
  render();
}

initialize();