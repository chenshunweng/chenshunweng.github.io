// i18next 初始化
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    // 保留原始多语言结构
  }
}, function(err, t) {
  // 文本多语言绑定
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  // 切换语言按钮
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

      // 视频路径与封面图片路径
      const videoMap = {
        bsh: ['assets/videos/bachelorarbeit_video.mp4', 'assets/images/bsh_project.png'],
        bachelor: ['assets/videos/bachelorarbeit_video.mp4', 'assets/images/bachelorarbeit_cover.jpg'],
        pmf: ['assets/videos/PMF_video.mp4', 'assets/images/PMF_cover.jpg'],
        itdf: ['assets/videos/ITDF_video.mp4', 'assets/images/ITDF_cover.jpg'],
        bmw: ['assets/videos/VEI_video.mp4', 'assets/images/VEI_cover.jpg']
      };

      let videoHTML = '';
      if (videoMap[key]) {
        const [videoPath] = videoMap[key];
        videoHTML = `
          <video controls autoplay>
            <source src="${videoPath}" type="video/mp4">
            Your browser does not support the video tag.
          </video>`;
      }

      modalBody.innerHTML = `
        <h2>${proj.title}</h2>
        <p>${proj.details}</p>
        ${videoHTML}
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

  // 主题切换
  const themeBtn = document.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', nextTheme);
    themeBtn.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
  });
});
