// app.js

// i18next 初始化
i18next.init({
  lng: 'de',
  debug: false,
  resources: translations
}, function (err, t) {
  updateContent();

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      i18next.changeLanguage(lang, updateContent);
    });
  });
});

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('.card').forEach(card => {
    const key = card.dataset.key;
    card.querySelector('h3').textContent = i18next.t(`projects.${key}.title`);
    card.querySelector('p').textContent = i18next.t(`projects.${key}.desc`);
  });
}

// 模态框逻辑
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = modal.querySelector('.modal-close');

closeBtn.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.key;
    const proj = i18next.t(`projects.${key}`, { returnObjects: true });
    let videoContent = '';
    if (card.dataset.video) {
      const src = card.dataset.video;
      if (src.endsWith('.mp4')) {
        videoContent = `<video controls><source src="${src}" type="video/mp4"></video>`;
      } else {
        videoContent = `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`;
      }
    }
    modalBody.innerHTML = `
      <h2>${proj.title}</h2>
      <p>${proj.long}</p>
      ${videoContent}
    `;
    modal.style.display = 'flex';
  });
});

// 主题切换
const themeBtn = document.querySelector('.theme-toggle');
themeBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', nextTheme);
  themeBtn.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
});

// i18n 字典定义
const translations = {
  de: {
    translation: JSON_DE
  },
  en: {
    translation: JSON_EN
  },
  zh: {
    translation: JSON_ZH
  }
};
