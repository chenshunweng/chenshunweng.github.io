// i18next 初始化
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    de: { translation: {} },
    en: { translation: {} },
    zh: { translation: {} }
  }
}, function(err, t) {
  // 文本渲染函数
  function renderContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = i18next.t(key);
    });
  }

  // 初始化渲染
  renderContent();

  // 多语言切换事件
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      i18next.changeLanguage(lang, () => {
        fetch(`i18n/${lang}.json`)
          .then(res => res.json())
          .then(data => {
            i18next.addResourceBundle(lang, 'translation', data, true, true);
            renderContent();
          });
      });
    });
  });

  // 模态框逻辑
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.key;
      const proj = i18next.t(`projects.${key}`, { returnObjects: true });

      let videoContent = '';
      if (card.dataset.video) {
        videoContent = `<video src="${card.dataset.video}" controls></video>`;
      } else if (card.dataset.youtube) {
        videoContent = `<iframe src="${card.dataset.youtube}" frameborder="0" allowfullscreen></iframe>`;
      }

      modalBody.innerHTML = `
        <h2>${proj.title || ''}</h2>
        <p>${proj.details || ''}</p>
        ${videoContent}
      `;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalBody.innerHTML = '';
    }
  });

  // 主题切换按钮
  const themeBtn = document.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const isLight = root.getAttribute('data-theme') === 'light';
    root.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
  });

  // 默认加载当前语言文件
  const currentLang = i18next.language || 'de';
  fetch(`i18n/${currentLang}.json`)
    .then(res => res.json())
    .then(data => {
      i18next.addResourceBundle(currentLang, 'translation', data, true, true);
      renderContent();
    });
});
