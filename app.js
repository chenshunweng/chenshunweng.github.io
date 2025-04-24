// app.js
import i18n from './i18n/de.json'; 
const langButtons = document.querySelectorAll('.lang-switch button');
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
let currentLang = 'de';

const t = (key) => {
  const keys = key.split('.');
  return keys.reduce((o, i) => (o ? o[i] : ''), i18n);
};

function updateTexts() {
  document.querySelector('header h1').textContent = t('header.name');
  document.querySelector('header p').textContent = t('header.tagline');
  document.querySelector('.about-title').textContent = t('about.title');
  document.querySelector('.about-text').textContent = t('about.text');
  document.querySelector('.about-cv').textContent = t('about.cv');
  document.querySelector('.projects-title').textContent = t('projects.title');

  document.querySelectorAll('.card').forEach(card => {
    const key = card.dataset.key;
    card.querySelector('h3').textContent = t(`projects.${key}.title`);
    card.querySelector('p').textContent = t(`projects.${key}.desc`);
  });
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    import(`./i18n/${currentLang}.json`).then((mod) => {
      Object.assign(i18n, mod);
      updateTexts();
    });
  });
});

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');
const modalClose = modal.querySelector('.modal-close');

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.querySelector('video')?.pause();
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.key;
    const year = card.dataset.year;

    const videoPath = card.dataset.video;
    const isVideoAvailable = videoPath !== '';

    const videoElement = isVideoAvailable
      ? `<video controls src="${videoPath}"></video>`
      : '<div style="height: 300px; background: #ccc; border-radius: 10px; display: flex; align-items: center; justify-content: center;">No video available</div>';

    modalContent.innerHTML = `
      <button class="modal-close">&times;</button>
      <h2>${t(`projects.${key}.title`)}</h2>
      <p>${t(`projects.${key}.long`)}</p>
      ${videoElement}
    `;
    modal.style.display = 'flex';
    modal.querySelector('.modal-close').addEventListener('click', () => modal.style.display = 'none');
  });
});

updateTexts();
