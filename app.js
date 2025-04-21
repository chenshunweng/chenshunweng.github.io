// i18next 初始化
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    // 多语言内容已省略（你已经有完整配置）
    // 保留你的原始多语言 JSON
  }
}, function(err, t) {
  // 初始渲染
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  // 多语言切换
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

  const videoMap = {
    bmw: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/dDNO7qBxwFA" frameborder="0" allowfullscreen></iframe>`,
    itdf: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-PeLRJ_0H5c" frameborder="0" allowfullscreen></iframe>`,
    bachelor: `<video controls><source src="assets/videos/bachelorarbeit_video.mp4" type="video/mp4">Your browser does not support the video tag.</video>`,
    pmf: `<video controls><source src="assets/videos/PMF_video.mp4" type="video/mp4">Your browser does not support the video tag.</video>`
  };

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.key;
      const proj = i18next.t(`projects.${key}`, { returnObjects: true });
      const video = videoMap[key] || '';
      modalBody.innerHTML = `
        <h2>${proj.title}</h2>
        <p>${proj.details || ''}</p>
        ${video}
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
