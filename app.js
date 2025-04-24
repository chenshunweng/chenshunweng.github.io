import i18next from "i18next";

i18next.init({
  lng: 'de', // 默认语言
  debug: true,
  resources: {
    zh: await (await fetch('assets/i18n/zh.json')).json(),
    en: await (await fetch('assets/i18n/en.json')).json(),
    de: await (await fetch('assets/i18n/de.json')).json()
  }
}, function () {
  renderPage();
});

function renderPage() {
  // 所有多语言标签替换
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  // 多语言切换
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, () => renderPage());
    });
  });

  // 模态框控制
  const modal = document.getElementById('modal');
  const modalTitle = modal.querySelector('h2');
  const modalText = modal.querySelector('p');
  const modalVideo = modal.querySelector('video');
  const closeBtn = modal.querySelector('.modal-close');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalVideo.pause();
    }
  });

  // 项目数据定义（视频和封面）
  const projects = [
    {
      key: 'bsh',
      year: 2025,
      cover: 'assets/images/bsh_project.png',
      video: null
    },
    {
      key: 'bmw',
      year: 2024,
      cover: 'assets/images/VEI_cover.png',
      video: 'assets/videos/VEI_video.mp4'
    },
    {
      key: 'pmf',
      year: 2024,
      cover: 'assets/images/PMF_cover.jpg',
      video: 'assets/videos/PMF_video.mp4'
    },
    {
      key: 'vw',
      year: 2023,
      cover: 'assets/images/ITDF_cover.jpg',
      video: 'assets/videos/ITDF_video.mp4'
    },
    {
      key: 'bach',
      year: 2022,
      cover: 'assets/images/bachelorarbeit_cover.jpg',
      video: 'assets/videos/bachelorarbeit_video.mp4'
    }
  ];

  const container = document.getElementById('projects-container');
  container.innerHTML = '';

  // 按年份分组排序
  const grouped = {};
  projects.forEach(p => {
    if (!grouped[p.year]) grouped[p.year] = [];
    grouped[p.year].push(p);
  });

  Object.keys(grouped).sort((a, b) => b - a).forEach(year => {
    const yearDiv = document.createElement('div');
    yearDiv.classList.add('project-year');

    const label = document.createElement('div');
    label.className = 'year-label';
    label.textContent = year;
    yearDiv.appendChild(label);

    const row = document.createElement('div');
    row.className = 'projects-row';

    grouped[year].forEach(proj => {
      const data = i18next.t(`projects.${proj.key}`, { returnObjects: true });

      const card = document.createElement('div');
      card.className = 'card';

      const media = proj.video
        ? document.createElement('video')
        : document.createElement('img');

      media.src = proj.video || proj.cover;
      if (proj.video) {
        media.controls = false;
        media.muted = true;
        media.loop = true;
        media.autoplay = true;
      } else {
        media.alt = data.title;
      }

      card.appendChild(media);

      const h3 = document.createElement('h3');
      h3.textContent = data.title;
      card.appendChild(h3);

      const p = document.createElement('p');
      p.textContent = data.desc;
      card.appendChild(p);

      card.addEventListener('click', () => {
        modalTitle.textContent = data.title;
        modalText.textContent = data.long;
        if (proj.video) {
          modalVideo.src = proj.video;
          modalVideo.style.display = 'block';
        } else {
          modalVideo.style.display = 'none';
        }
        modal.style.display = 'flex';
      });

      row.appendChild(card);
    });

    yearDiv.appendChild(row);
    container.appendChild(yearDiv);
  });

  // 暗黑模式切换
  const themeBtn = document.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}
