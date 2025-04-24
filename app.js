// 支持的语言
const langs = ['de','en','zh'];
let currentLang = localStorage.getItem('lang') || 'de';

// DOM 元素
const langSwitcher = document.getElementById('lang-switcher');
const themeToggle  = document.getElementById('theme-toggle');
const projectsEl   = document.getElementById('projects');
const modal        = document.getElementById('modal');
const modalTitle   = document.getElementById('modal-title');
const modalDesc    = document.getElementById('modal-desc');
const videoCnt     = document.getElementById('modal-video-container');
const btnClose     = document.querySelector('.modal-close');

// 1. 语言切换逻辑
langSwitcher.value = currentLang;
langSwitcher.addEventListener('change', e => {
  currentLang = e.target.value;
  localStorage.setItem('lang', currentLang);
  renderProjects();
});

// 2. 主题切换逻辑
themeToggle.addEventListener('click', () => {
  const next = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
});

// 3. 渲染项目列表
async function renderProjects() {
  try {
    const res = await fetch(`i18n/${currentLang}.json`);
    const { projects } = await res.json();

    projectsEl.innerHTML = '';
    projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${p.cover}" alt="${p.name}" />
        <div class="info">
          <h3>${p.name}</h3>
          <p>${p.shortDesc}</p>
        </div>
      `;
      card.addEventListener('click', () => openModal(p));
      projectsEl.append(card);
    });
  } catch (err) {
    console.error('加载项目数据出错：', err);
  }
}

// 4. 弹窗打开/关闭
btnClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('open');
});

function openModal(p) {
  modalTitle.textContent = p.name;
  modalDesc.textContent  = p.longDesc;
  videoCnt.innerHTML     = `<video src="${p.video}" controls></video>`;
  modal.classList.add('open');
}

// 页面初始化
document.body.setAttribute('data-theme', 'light');
renderProjects();
