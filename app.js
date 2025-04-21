// 初始化 i18next
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    de: { translation: await (await fetch('./i18n/de.json')).json() },
    en: { translation: await (await fetch('./i18n/en.json')).json() },
    zh: { translation: await (await fetch('./i18n/zh.json')).json() }
  }
}, function (err, t) {
  updateContent();
});

// 多语言切换
document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.addEventListener('click', () => {
    i18next.changeLanguage(btn.dataset.lang, updateContent);
  });
});

// 主题切换
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const isLight = root.getAttribute('data-theme') === 'light';
  root.setAttribute('data-theme', isLight ? 'dark' : 'light');
  document.querySelector('.theme-toggle').textContent = isLight ? '☀️' : '🌙';
});

// 内容更新
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  // 动态更新所有卡片（project-year 下 .card）
  document.querySelectorAll('.card').forEach(card => {
    const key = card.dataset.key;
    const data = i18next.t(`projects.${key}`, { returnObjects: true });

    card.querySelector('h3').textContent = data.title;
    card.querySelector('p').textContent = data.desc;
  });
}

// 模态框逻辑
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.modal-close');

closeBtn.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// 卡片点击显示详情 + 视频
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.key;
    const data = i18next.t(`projects.${key}`, { returnObjects: true });

    // 视频逻辑（本地 / YouTube 区分）
    let videoHTML = '';
    if (data.video) {
      if (data.video.includes('youtube.com')) {
        const videoID = new URL(data.video).searchParams.get('v');
        videoHTML = `
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoID}"
            frameborder="0" allowfullscreen></iframe>`;
      } else {
        videoHTML = `
          <video controls style="width:100%;border-radius:12px;margin-top:1em;">
            <source src="${data.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>`;
      }
    }

    modalBody.innerHTML = `
      <h2>${data.title}</h2>
      <p style="margin-bottom: 1em;">${data.details || ''}</p>
      ${videoHTML}
    `;
    modal.style.display = 'flex';
  });
});
