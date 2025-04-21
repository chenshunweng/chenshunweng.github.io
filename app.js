// i18next 初始化
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    /* ===================  Deutsch  =================== */
    de: {
      translation: { ... } // 保持不变，已省略
    },
    /* ===================  English  =================== */
    en: {
      translation: { ... } // 保持不变，已省略
    },
    /* ===================  中文  =================== */
    zh: {
      translation: { ... } // 保持不变，已省略
    }
  }
}, function(err, t) {
  // 渲染页面
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  // 语言切换
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          el.textContent = i18next.t(el.getAttribute('data-i18n'));
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

      let media = '';
      if (key === 'pmf') {
        media = `<video controls src="assets/videos/PMF_video.mp4"></video>`;
      } else if (key === 'bachelor') {
        media = `<video controls src="assets/videos/bachelorarbeit_video.mp4"></video>`;
      } else if (key === 'bmw') {
        media = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/dDNO7qBxwFA" frameborder="0" allowfullscreen></iframe>`;
      } else if (key === 'itdf') {
        media = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-PeLRJ_0H5c" frameborder="0" allowfullscreen></iframe>`;
      }

      modalBody.innerHTML = `
        <h2>${proj.title}</h2>
        <p>${proj.details}</p>
        ${media}
      `;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // 主题切换
  const themeBtn = document.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
});
