const LANGS = ['de','en','zh'];
let currentLang = localStorage.getItem('lang') || 'de';

// DOM 引用
const htmlEl         = document.documentElement;
const langSwitcher   = document.getElementById('lang-switcher');
const themeToggle    = document.getElementById('theme-toggle');
const cvLink         = document.getElementById('cv-link');
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

// 初始化语言和主题
langSwitcher.value = currentLang;
htmlEl.lang        = currentLang;
htmlEl.setAttribute('data-theme', 'light');

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

// 渲染全部
async function renderAll() {
  try {
    const res  = await fetch(`i18n/${currentLang}.json`);
    const data = await res.json();

    // Header
    headerName.textContent    = data.header.name;
    headerTagline.textContent = data.header.tagline;
    cvLink.textContent        = data.header.cvText;

    // About
    aboutTitle.textContent = data.about.title;
    aboutText.textContent  = data.about.text;

    // Projects
    renderProjects(data.projects);
  } catch (err) {
    console.error('i18n 加载失败：', err);
  }
}

// 按 year 分组并渲染带 flip-card
function renderProjects(projectsObj) {
  projectsEl.innerHTML = '';
  // 将对象条目转数组，过滤 title 字段
  const items = Object.entries(projectsObj)
    .filter(([k]) => k !== 'title')
    .map(([k,p]) => ({ id:k, ...p }));

  const byYear = {};
  items.forEach(p => (byYear[p.year] ||= []).push(p));

  Object.keys(byYear).sort((a,b) => b-a).forEach(year => {
    const group = document.createElement('div');
    group.className = 'year-group';

    const label = document.createElement('div');
    label.className = 'year-label';
    label.textContent = year;
    group.append(label);

    const row = document.createElement('div');
    row.className = 'projects-row';

    byYear[year].forEach(p => {
      const flip = document.createElement('div');
      flip.className = 'flip-card';
      flip.innerHTML = `
        <div class="flip-inner">
          <div class="flip-front card">
            <img src="${p.cover}" alt="${p.title}" />
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
          </div>
          <div class="flip-back">
            <h3>技术栈</h3>
            <p>${p.tech.join(', ')}</p>
            ${p.github ? `<a href="${p.github}" target="_blank">查看 GitHub →</a>` : ''}
          </div>
        </div>
      `;
      // 点击时也可翻转
      flip.addEventListener('click', () => {
        flip.querySelector('.flip-inner').classList.toggle('flipped');
      });
      row.append(flip);
    });

    group.append(row);
    projectsEl.append(group);
  });
}

// 打开 Modal 并注入视频
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
