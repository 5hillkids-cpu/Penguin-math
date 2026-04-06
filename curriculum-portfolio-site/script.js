const editableNodes = Array.from(document.querySelectorAll('[data-editable]'));
const cardGrid = document.querySelector('.card-grid');
const cards = Array.from(document.querySelectorAll('[data-card-id]'));
const saveButton = document.getElementById('save-btn');
const resetButton = document.getElementById('reset-btn');
const saveStatus = document.getElementById('save-status');
const bodyFontControl = document.getElementById('body-font-control');
const headingFontControl = document.getElementById('heading-font-control');
const bgColorControl = document.getElementById('bg-color-control');
const accentColorControl = document.getElementById('accent-color-control');
const textColorControl = document.getElementById('text-color-control');
const panelColorControl = document.getElementById('panel-color-control');
const gapControl = document.getElementById('gap-control');
const radiusControl = document.getElementById('radius-control');
const widthControl = document.getElementById('width-control');
const columnsControl = document.getElementById('columns-control');
const moveCardButtons = Array.from(document.querySelectorAll('[data-move-card]'));

const STORAGE_KEY = 'curriculum-portfolio-site-content';
const SETTINGS_KEY = 'curriculum-portfolio-site-settings';
const defaults = Object.fromEntries(
  editableNodes.map((node) => [node.dataset.editable, node.innerHTML])
);
const defaultSettings = {
  bodyFont: bodyFontControl.value,
  headingFont: headingFontControl.value,
  bgColor: bgColorControl.value,
  accentColor: accentColorControl.value,
  textColor: textColorControl.value,
  panelColor: panelColorControl.value,
  gap: gapControl.value,
  radius: radiusControl.value,
  width: widthControl.value,
  columns: columnsControl.value,
  cardOrder: cards.map((card) => card.dataset.cardId)
};

function setStatus(message) {
  saveStatus.textContent = message;
}

function collectContent() {
  return Object.fromEntries(
    editableNodes.map((node) => [node.dataset.editable, node.innerHTML])
  );
}

function collectSettings() {
  return {
    bodyFont: bodyFontControl.value,
    headingFont: headingFontControl.value,
    bgColor: bgColorControl.value,
    accentColor: accentColorControl.value,
    textColor: textColorControl.value,
    panelColor: panelColorControl.value,
    gap: gapControl.value,
    radius: radiusControl.value,
    width: widthControl.value,
    columns: columnsControl.value,
    cardOrder: Array.from(cardGrid.children).map((card) => card.dataset.cardId)
  };
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace('#', '');
  const chunk = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized;
  const red = parseInt(chunk.slice(0, 2), 16);
  const green = parseInt(chunk.slice(2, 4), 16);
  const blue = parseInt(chunk.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function applySettings(settings) {
  document.documentElement.style.setProperty('--body-font', settings.bodyFont);
  document.documentElement.style.setProperty('--display-font', settings.headingFont);
  document.documentElement.style.setProperty('--bg-deep', settings.bgColor);
  document.documentElement.style.setProperty('--bg-mid', settings.bgColor);
  document.documentElement.style.setProperty('--gold', settings.accentColor);
  document.documentElement.style.setProperty('--text', settings.textColor);
  document.documentElement.style.setProperty('--muted', hexToRgba(settings.textColor, 0.74));
  document.documentElement.style.setProperty('--panel', hexToRgba(settings.panelColor, 0.78));
  document.documentElement.style.setProperty('--panel-strong', hexToRgba(settings.panelColor, 0.92));
  document.documentElement.style.setProperty('--card-gap', `${settings.gap}px`);
  document.documentElement.style.setProperty('--panel-radius', `${settings.radius}px`);
  document.documentElement.style.setProperty('--shell-width', `${settings.width}px`);
  document.documentElement.style.setProperty('--card-columns', settings.columns);
}

function syncControls(settings) {
  bodyFontControl.value = settings.bodyFont;
  headingFontControl.value = settings.headingFont;
  bgColorControl.value = settings.bgColor;
  accentColorControl.value = settings.accentColor;
  textColorControl.value = settings.textColor;
  panelColorControl.value = settings.panelColor;
  gapControl.value = settings.gap;
  radiusControl.value = settings.radius;
  widthControl.value = settings.width;
  columnsControl.value = settings.columns;
}

function applyCardOrder(cardOrder) {
  cardOrder.forEach((cardId) => {
    const card = cardGrid.querySelector(`[data-card-id="${cardId}"]`);
    if (card) {
      cardGrid.appendChild(card);
    }
  });
}

function applyContent(contentMap) {
  editableNodes.forEach((node) => {
    const value = contentMap[node.dataset.editable];
    if (typeof value === 'string') {
      node.innerHTML = value;
    }
  });
}

function saveContent() {
  const current = collectContent();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(collectSettings()));
  setStatus('Changes saved in this browser.');
}

function loadContent() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  const savedSettings = window.localStorage.getItem(SETTINGS_KEY);

  if (saved) {
    try {
      applyContent(JSON.parse(saved));
      setStatus('Saved content loaded.');
    } catch {
      setStatus('Saved content could not be loaded.');
    }
  }

  if (savedSettings) {
    try {
      const settings = { ...defaultSettings, ...JSON.parse(savedSettings) };
      syncControls(settings);
      applySettings(settings);
      applyCardOrder(settings.cardOrder || defaultSettings.cardOrder);
      setStatus('Saved content loaded.');
    } catch {
      setStatus('Saved settings could not be loaded.');
    }
  }
}

function resetContent() {
  applyContent(defaults);
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(SETTINGS_KEY);
  syncControls(defaultSettings);
  applySettings(defaultSettings);
  applyCardOrder(defaultSettings.cardOrder);
  setStatus('Layout reset to original content.');
}

function updatePreviewSettings() {
  applySettings(collectSettings());
  setStatus('Visual edits updated. Click Save Changes to keep them.');
}

function moveCard(button) {
  const card = button.closest('[data-card-id]');
  if (!card) {
    return;
  }

  if (button.dataset.moveCard === 'left' && card.previousElementSibling) {
    cardGrid.insertBefore(card, card.previousElementSibling);
  }

  if (button.dataset.moveCard === 'right' && card.nextElementSibling) {
    cardGrid.insertBefore(card.nextElementSibling, card);
  }

  setStatus('Card order updated. Click Save Changes to keep it.');
}

editableNodes.forEach((node) => {
  node.addEventListener('input', () => {
    setStatus('Unsaved edits in progress.');
  });
});

[
  bodyFontControl,
  headingFontControl,
  bgColorControl,
  accentColorControl,
  textColorControl,
  panelColorControl,
  gapControl,
  radiusControl,
  widthControl,
  columnsControl
].forEach((control) => {
  control.addEventListener('input', updatePreviewSettings);
  control.addEventListener('change', updatePreviewSettings);
});

moveCardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    moveCard(button);
  });
});

saveButton.addEventListener('click', saveContent);
resetButton.addEventListener('click', resetContent);

applySettings(defaultSettings);
loadContent();