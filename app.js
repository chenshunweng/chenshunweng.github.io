// 支持的语言列表
const LANGS = ['de','en','zh'];
let currentLang = localStorage.getItem('lang') || 'de';

// DOM 引用
const htmlEl        = document.documentElement;
const langSwitcher  = document.getElementById('lang-switcher');
const themeToggle   = document.getElementById('theme-toggle');
const projectsEl    = document.getElementById('projects');
const modal         = document.getElementById('modal');
const modalTitle    = document.getElementById('modal-title');
const modalDesc     = document.getElementById('modal-desc');
const videoContainer= document.getElementById('modal-video-container');
const btnClose      = document.querySelector('.modal-close');

// 1. 初始化语言 & html lang 属性
langSwitcher.value = currentLang;
htmlEl.lang        = currentLang;
langSwitcher.addEventListener('change', e => {
  currentLang = e.target.value;
  localStorage.setItem('lang', currentLang);
  htmlEl.lang = currentLang;
  renderProjects();
});

// 2. 主题切换（在 <html> 上切 data-theme）
themeToggle.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
});

// 3. 打开／关闭 Modal
btnClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('open');
});

// 4. 根据 JSON 渲染项目（并按 year 分组）
async function renderProjects() {
  projectsEl.innerHTML = '';  // 清空
  try {
    const res  = await fetch(`i18n/${currentLang}.json`);
    const data = await res.json();
    const byYear = {};

    // 按 year 收集
    data.projects.forEach(p => {
      const y = p.year;
      if (!byYear[y]) byYear[y] = [];
      byYear[y].push(p);
    });

    // 年份从大到小排序
    Object.keys(byYear)
      .sort((a,b) => b - a)
      .forEach(year => {
        // 年标签
        const yearGroup = document.createElement('div');
        yearGroup.className = 'year-group';

        const label = document.createElement('div');
        label.className = 'year-label';
        label.textContent = year;
        yearGroup.append(label);

        // 卡片行
        const row = document.createElement('div');
        row.className = 'projects-row';

        byYear[year].forEach(p => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${p.cover}" alt="${p.name}" />
            <h3>${p.name}</h3>
            <p>${p.shortDesc}</p>
          `;
          card.addEventListener('click', () => openModal(p));
          row.append(card);
        });

        yearGroup.append(row);
        projectsEl.append(yearGroup);
      });
  } catch (err) {
    console.error('加载项目失败：', err);
  }
}

// 5. 打开 Modal 填充内容
function openModal(p) {
  modalTitle.textContent = p.name;
  modalDesc.textContent  = p.longDesc;

  // 清空旧视频，再插入新视频
  videoContainer.innerHTML = '';
  const vid = document.createElement('video');
  vid.src = p.video;
  vid.controls = true;
  videoContainer.append(vid);

  modal.classList.add('open');
}

// 6. 页面初始化
htmlEl.setAttribute('data-theme', 'light');
renderProjects();
