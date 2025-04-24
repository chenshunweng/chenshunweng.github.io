// i18next 初始化
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    // JSON 文件资源结构已经通过独立的 de.json, en.json, zh.json 支持
  },
}, function(err, t) {
  // 文本内容初始化渲染
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  // 语言切换按钮绑定
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          el.textContent = i18next.t(el.getAttribute('data-i18n'));
        });
      });
    });
  });

  // 模态框控制逻辑
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.key;
      const proj = i18next.t(`projects.${key}`, { returnObjects: true });

      const localVideoPath = proj.video ? `assets/videos/${proj.video}` : null;
      const youtubeEmbed = proj.youtube ? `<iframe src="https://www.youtube.com/embed/${proj.youtube}" frameborder="0" allowfullscreen></iframe>` : '';
      const videoEmbed = localVideoPath ? `<video controls src="${localVideoPath}"></video>` : youtubeEmbed;

      modalBody.innerHTML = `
        <h2>${proj.title}</h2>
        <p>${proj.details}</p>
        ${videoEmbed}
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
