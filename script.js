const slides = Array.from(document.querySelectorAll('.slide-card'));
const slideValue = document.getElementById('slide-value');
const scoreValue = document.getElementById('score-value');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const summaryMessage = document.getElementById('summary-message');
const restartButton = document.getElementById('restart-btn');
const timerValue = document.getElementById('timer-value');
const timerToggle = document.getElementById('timer-toggle');
const timerReset = document.getElementById('timer-reset');
const soundToggle = document.getElementById('sound-toggle');

let activeSlideIndex = 0;
let score = 0;
const awardedChecks = new Set();
let timerSecondsRemaining = 300;
let timerIntervalId = null;
let soundEnabled = false;
let audioContext = null;

function renderSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === activeSlideIndex);
  });

  slideValue.textContent = String(activeSlideIndex + 1);
  prevButton.disabled = activeSlideIndex === 0;
  nextButton.disabled = activeSlideIndex === slides.length - 1;

  if (activeSlideIndex === slides.length - 1) {
    summaryMessage.textContent = `You earned ${score} fish points. Penny stayed on the number line, Pablo approved the equal parts, and Peaches stopped inventing banana fractions.`;
  }
}

function celebrateActiveSlide() {
  const activeSlide = slides[activeSlideIndex];
  activeSlide.classList.remove('celebrate');
  void activeSlide.offsetWidth;
  activeSlide.classList.add('celebrate');
}

function spawnBubbles() {
  const palette = ['#8fd8f6', '#5dc4f0', '#ffd97a', '#b8f2de'];

  for (let i = 0; i < 12; i += 1) {
    const bubble = document.createElement('span');
    bubble.className = 'bubble-burst';
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
    bubble.style.top = `${window.innerHeight * 0.72 + Math.random() * 120}px`;
    bubble.style.background = palette[i % palette.length];
    bubble.style.animationDelay = `${i * 18}ms`;
    document.body.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }
}

function spawnConfetti(originElement) {
  const palette = ['#ff835c', '#ffc94a', '#5dc4f0', '#b8f2de', '#16324f'];
  const origin = originElement.getBoundingClientRect();
  const startX = origin.left + origin.width / 2;
  const startY = origin.top + origin.height / 2;

  for (let index = 0; index < 24; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${startX}px`;
    piece.style.top = `${startY}px`;
    piece.style.background = palette[index % palette.length];
    piece.style.setProperty('--drift-x', `${-180 + Math.random() * 360}px`);
    piece.style.setProperty('--fall-y', `${140 + Math.random() * 140}px`);
    piece.style.setProperty('--spin', `${-240 + Math.random() * 480}deg`);
    piece.style.animationDelay = `${index * 12}ms`;
    document.body.appendChild(piece);

    piece.addEventListener('animationend', () => {
      piece.remove();
    });
  }
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return null;
    }

    audioContext = new AudioContextClass();
  }

  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  return audioContext;
}

function playTone(type, duration, from, to, volume) {
  if (!soundEnabled) {
    return;
  }

  const context = ensureAudioContext();
  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  const now = context.currentTime;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(from, now);
  oscillator.frequency.exponentialRampToValueAtTime(to, now + duration);

  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function playCorrectSound() {
  playTone('triangle', 0.16, 440, 660, 0.05);
  setTimeout(() => playTone('triangle', 0.19, 660, 900, 0.05), 95);
}

function playWrongSound() {
  playTone('square', 0.22, 260, 180, 0.03);
}

function playNavSound() {
  playTone('sine', 0.1, 320, 400, 0.025);
}

function playTimerEndSound() {
  playTone('sawtooth', 0.28, 720, 420, 0.04);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  timerValue.textContent = formatTime(timerSecondsRemaining);
  timerValue.classList.toggle('timer-warning', timerSecondsRemaining <= 30 && timerIntervalId !== null);
}

function stopTimer() {
  if (timerIntervalId !== null) {
    window.clearInterval(timerIntervalId);
    timerIntervalId = null;
  }

  timerToggle.textContent = 'Start';
}

function startTimer() {
  if (timerIntervalId !== null) {
    return;
  }

  timerIntervalId = window.setInterval(() => {
    if (timerSecondsRemaining > 0) {
      timerSecondsRemaining -= 1;
      updateTimerDisplay();
      return;
    }

    stopTimer();
    updateTimerDisplay();
    summaryMessage.textContent = 'Time is up. Great effort, Fraction Rescue Rangers. Tap reset and try to beat your score.';
    playTimerEndSound();
  }, 1000);

  timerToggle.textContent = 'Pause';
}

function updateScore(points) {
  score += points;
  scoreValue.textContent = String(score);
}

function awardPoints(checkElement) {
  const checkId = checkElement.closest('.slide-card').dataset.slide + '-' + checkElement.querySelector('h3').textContent;
  if (awardedChecks.has(checkId)) {
    return;
  }

  awardedChecks.add(checkId);
  updateScore(Number(checkElement.dataset.points || 0));
}

function setFeedback(target, isCorrect, correctMessage, retryMessage) {
  target.textContent = isCorrect ? correctMessage : retryMessage;
  target.classList.remove('correct', 'incorrect');
  target.classList.add(isCorrect ? 'correct' : 'incorrect');
}

function markChoiceButtons(choiceRow, pickedButton, isCorrect) {
  choiceRow.querySelectorAll('.choice-btn').forEach((button) => {
    button.classList.remove('choice-correct', 'choice-wrong');
  });

  pickedButton.classList.add(isCorrect ? 'choice-correct' : 'choice-wrong');
}

document.querySelectorAll('.choice-row').forEach((choiceRow) => {
  const answer = choiceRow.dataset.answer;
  const feedback = choiceRow.parentElement.querySelector('.feedback');
  const checkElement = choiceRow.closest('.cfu');

  choiceRow.addEventListener('click', (event) => {
    const button = event.target.closest('.choice-btn');
    if (!button) {
      return;
    }

    const isCorrect = button.dataset.choice === answer;
    markChoiceButtons(choiceRow, button, isCorrect);
    setFeedback(
      feedback,
      isCorrect,
      'Correct. The penguins are sliding in the right direction.',
      'Try again. Check the equal parts or count from 0.'
    );

    if (isCorrect) {
      awardPoints(checkElement);
      playCorrectSound();
      spawnBubbles();
      celebrateActiveSlide();
    } else {
      playWrongSound();
    }
  });
});

const denominatorDisplay = document.getElementById('denominator-display');
document.querySelectorAll('.denominator-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.denominator-chip').forEach((button) => {
      button.classList.remove('active-chip');
    });

    chip.classList.add('active-chip');
    denominatorDisplay.textContent = `${chip.textContent} means split the whole into ${chip.dataset.denominator} equal parts.`;
  });
});

const hopRange = document.getElementById('hop-range');
const hopPenguin = document.getElementById('hop-penguin');
function updatePenguinHop() {
  const percent = (Number(hopRange.value) / Number(hopRange.max)) * 100;
  hopPenguin.style.left = `${percent}%`;
}

hopRange.addEventListener('input', updatePenguinHop);
updatePenguinHop();

const interactiveLine = document.querySelector('.interactive-line');
const lineFeedback = interactiveLine.querySelector('.line-feedback');
const lineCheck = interactiveLine.parentElement.querySelector('.cfu');
const placementLine = document.getElementById('thirds-placement-line');
const placementMarker = document.getElementById('thirds-marker');
const checkPlacementButton = document.getElementById('check-placement-btn');
const resetPlacementButton = document.getElementById('reset-placement-btn');
const thirdsLabels = ['0', '1/3', '2/3', '1'];
let selectedThird = 0;

function updatePlacementMarker(position) {
  selectedThird = position;
  placementMarker.style.left = `${(position / 3) * 100}%`;
  placementLine.setAttribute('aria-valuenow', String(position));
  placementLine.setAttribute('aria-valuetext', thirdsLabels[position]);
}

function clearPlacementState() {
  placementMarker.classList.remove('correct-stop', 'wrong-stop');
  lineFeedback.textContent = '';
  lineFeedback.classList.remove('correct', 'incorrect');
}

function positionToThird(clientX) {
  const { left, width } = placementLine.getBoundingClientRect();
  const rawPosition = ((clientX - left) / width) * 3;
  return Math.max(0, Math.min(3, Math.round(rawPosition)));
}

function placeMarkerAt(clientX) {
  updatePlacementMarker(positionToThird(clientX));
  clearPlacementState();
}

function checkPlacement() {
  placementMarker.classList.remove('correct-stop', 'wrong-stop');

  const isCorrect = String(selectedThird) === interactiveLine.dataset.correct;
  placementMarker.classList.add(isCorrect ? 'correct-stop' : 'wrong-stop');

  setFeedback(
    lineFeedback,
    isCorrect,
    'Yes. Two equal parts from 0 lands on 2/3.',
    'Not quite. Split into thirds, then count two parts from 0.'
  );

  if (isCorrect) {
    awardPoints(lineCheck);
    playCorrectSound();
    spawnBubbles();
    celebrateActiveSlide();
  } else {
    playWrongSound();
  }
}

placementLine.addEventListener('click', (event) => {
  placeMarkerAt(event.clientX);
});

placementLine.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
    event.preventDefault();
    updatePlacementMarker(Math.min(3, selectedThird + 1));
    clearPlacementState();
  }

  if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
    event.preventDefault();
    updatePlacementMarker(Math.max(0, selectedThird - 1));
    clearPlacementState();
  }

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    checkPlacement();
  }
});

placementMarker.addEventListener('click', (event) => {
  event.stopPropagation();
});

checkPlacementButton.addEventListener('click', checkPlacement);

resetPlacementButton.addEventListener('click', () => {
  updatePlacementMarker(0);
  clearPlacementState();
  placementLine.focus();
});

updatePlacementMarker(0);

const challengeButton = document.querySelector('.check-challenge-btn');
const challengeInputs = Array.from(document.querySelectorAll('.challenge-labels input'));
const challengeFeedback = document.querySelector('.challenge-feedback');
const challengeCheck = challengeButton.closest('.challenge-grid').parentElement.querySelector('.cfu');
const slideSixConfettiButton = document.getElementById('slide-six-confetti-btn');

slideSixConfettiButton.addEventListener('click', () => {
  spawnConfetti(slideSixConfettiButton);
  playCorrectSound();
  celebrateActiveSlide();
});

challengeButton.addEventListener('click', () => {
  const allCorrect = challengeInputs.every((input) => input.value.trim() === input.dataset.blank);

  setFeedback(
    challengeFeedback,
    allCorrect,
    'Mission complete. You labeled 1/4, 2/4, and 3/4 correctly.',
    'One or more labels are off. Check the order from 0 to 1.'
  );

  if (allCorrect) {
    awardPoints(challengeCheck);
    playCorrectSound();
    spawnBubbles();
    celebrateActiveSlide();
  } else {
    playWrongSound();
  }
});

prevButton.addEventListener('click', () => {
  if (activeSlideIndex > 0) {
    activeSlideIndex -= 1;
    renderSlide();
    playNavSound();
  }
});

nextButton.addEventListener('click', () => {
  if (activeSlideIndex < slides.length - 1) {
    activeSlideIndex += 1;
    renderSlide();
    playNavSound();
  }
});

timerToggle.addEventListener('click', () => {
  if (timerIntervalId === null) {
    startTimer();
  } else {
    stopTimer();
  }
});

timerReset.addEventListener('click', () => {
  stopTimer();
  timerSecondsRemaining = 300;
  updateTimerDisplay();
});

soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundToggle.setAttribute('aria-pressed', String(soundEnabled));
  soundToggle.textContent = soundEnabled ? 'Sound: On' : 'Sound: Off';

  if (soundEnabled) {
    ensureAudioContext();
    playNavSound();
  }
});

restartButton.addEventListener('click', () => {
  stopTimer();
  timerSecondsRemaining = 300;
  updateTimerDisplay();

  awardedChecks.clear();
  score = 0;
  scoreValue.textContent = '0';
  activeSlideIndex = 0;

  document.querySelectorAll('.feedback, .line-feedback, .challenge-feedback').forEach((node) => {
    node.textContent = '';
    node.classList.remove('correct', 'incorrect');
  });

  document.querySelectorAll('.point-btn').forEach((button) => {
    button.classList.remove('correct-stop', 'wrong-stop');
  });

  document.querySelectorAll('.choice-btn').forEach((button) => {
    button.classList.remove('choice-correct', 'choice-wrong');
  });

  document.querySelectorAll('.denominator-chip').forEach((button) => {
    button.classList.remove('active-chip');
  });

  denominatorDisplay.textContent = 'Click a fraction to see how many equal parts to make.';
  challengeInputs.forEach((input) => {
    input.value = '';
  });

  hopRange.value = '0';
  updatePenguinHop();
  renderSlide();
});

updateTimerDisplay();
renderSlide();