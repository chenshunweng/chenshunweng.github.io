const LANGS = ['de','en','zh'];
let currentLang = localStorage.getItem('lang') || 'de';

// DOM 引用
const htmlEl         = document.documentElement;
const langSwitcher   = document.getElementById('lang-switcher');
const themeToggle    = document.getElementById('theme-toggle');
const cvLink         = document.getElementById('cv-link');
const cvViewBtn      = document.getElementById('cv-view-btn');
const cvCounterEl    = document.getElementById('cv-counter');
const headerName     = document.getElementById('header-name');
const headerTagline  = document.getElementById('header-tagline');
const aboutTitle     = document.getElementById('about-title');
const aboutText      = document.getElementById('about-text');
const projectsEl     = document.getElementById('projects');
const modal          = document.getElementById('modal');
const modalTitle     = document.getElementById('modal-title');
const modalDesc      = document.getElementById('modal-desc');
const videoContainer = document.getElementById('modal-video-container');
const btnClose       = document.querySelector('.modal-close');

// 初始化
langSwitcher.value = currentLang;
htmlEl.lang        = currentLang;
htmlEl.setAttribute('data-theme', 'light');

// 预览/下载计数
const CV_VIEW_KEY = 'cv_view_count';
const CV_DL_KEY   = 'cv_download_count';
function updateCvCounter() {
  const views = parseInt(localStorage.getItem(CV_VIEW_KEY) || '0', 10);
  const dls   = parseInt(localStorage.getItem(CV_DL_KEY)   || '0', 10);
  cvCounterEl.textContent = `预览: ${views} 次 | 下载: ${dls} 次`;
}

// 语言切换
langSwitcher.addEventListener('change', e => {
  currentLang = e.target.value;
  localStorage.setItem('lang', currentLang);
  htmlEl.lang = currentLang;
  renderAll();
});

// 主题切换
themeToggle.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
});

// 关闭 Modal
btnClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// 初始按钮事件：预览 & 下载
cvViewBtn.addEventListener('click', () => {
  const viewer = document.getElementById('cv-viewer');
  const isOpen = viewer.style.display === 'block';
  if (isOpen) {
    viewer.style.display = 'none';
  } else {
    viewer.style.display = 'block';
    // 增加预览计数
    localStorage.setItem(CV_VIEW_KEY, (parseInt(localStorage.getItem(CV_VIEW_KEY) || '0',10) + 1));
    updateCvCounter();
  }
});
cvLink.addEventListener('click', () => {
  localStorage.setItem(CV_DL_KEY, (parseInt(localStorage.getItem(CV_DL_KEY) || '0',10) + 1));
  updateCvCounter();
});

// 渲染全部：Header / About / Projects
async function renderAll() {
  try {
    const res  = await fetch(`i18n/${currentLang}.json`);
    const data = await res.json();

    // Header
    headerName.textContent    = data.header.name;
    headerTagline.textContent = data.header.tagline;
    cvLink.textContent        = data.header.cvText;
    cvViewBtn.textContent     = data.header.cvText.replace(/下载|Download|Herunterladen/, '预览');

    // About
    aboutTitle.textContent = data.about.title;
    aboutText.textContent  = data.about.text;

    // 更新计数显示
    updateCvCounter();

    // Projects
    renderProjects(data.projects);
  } catch (err) {
    console.error('i18n 加载失败：', err);
  }
}

// 按 year 分组渲染项目卡片
function renderProjects(projectsObj) {
  projectsEl.innerHTML = '';
  const items = Object.entries(projectsObj)
    .filter(([key]) => key !== 'title')
    .map(([key, p]) => ({ id: key, ...p }));

  const byYear = {};
  items.forEach(p => {
    (byYear[p.year] ||= []).push(p);
  });

  Object.keys(byYear).sort((a,b) => b - a).forEach(year => {
    const group = document.createElement('div');
    group.className = 'year-group';

    const label = document.createElement('div');
    label.className = 'year-label';
    label.textContent = year;
    group.append(label);

    const row = document.createElement('div');
    row.className = 'projects-row';
    byYear[year].forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.cover}" alt="${p.title}" />
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      `;
      card.addEventListener('click', () => openModal(p));
      row.append(card);
    });
    group.append(row);
    projectsEl.append(group);
  });
}

// 打开 Modal 并注入长描述+视频
function openModal(p) {
  modalTitle.textContent = p.title;
  modalDesc.textContent  = p.long;
  videoContainer.innerHTML = '';
  const vid = document.createElement('video');
  vid.src = p.video;
  vid.controls = true;
  vid.autoplay = true;
  videoContainer.append(vid);
  modal.classList.add('open');
}

// 关闭 Modal 并停止视频
function closeModal() {
  const vid = videoContainer.querySelector('video');
  if (vid) {
    vid.pause();
    vid.currentTime = 0;
  }
  videoContainer.innerHTML = '';
  modal.classList.remove('open');
}

// 首次渲染
renderAll();
