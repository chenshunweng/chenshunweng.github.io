// i18next 初始化
i18next.init({
  lng: 'de',
  debug: false,
  resources: translations
}, function(err, t) {
  updateText();

  // 切换语言
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, updateText);
    });
  });

  // 语言更新逻辑
  function updateText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = i18next.t(el.getAttribute('data-i18n'));
    });
  }

  // 模态框控制
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.key;
      const proj = i18next.t(`projects.${key}`, { returnObjects: true });

      let videoHTML = '';
      if (proj.video) {
        if (proj.video.includes('.mp4')) {
          videoHTML = `<video controls><source src="${proj.video}" type="video/mp4"></video>`;
        } else if (proj.video.includes('youtube.com')) {
          const id = proj.video.split('v=')[1].split('&')[0];
          videoHTML = `<iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`;
        }
      }

      modalBody.innerHTML = `
        <h2>${proj.title}</h2>
        <p>${proj.long}</p>
        ${videoHTML}
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
