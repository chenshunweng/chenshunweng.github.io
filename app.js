console.log('🛠 app.js loaded');
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOMContentLoaded');

  // 懒加载观察者：图片
  const imgObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.src = img.dataset.src;
        obs.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  // 懒加载观察者：视频
  const videoObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const vid = e.target;
        vid.src = vid.dataset.src;
        vid.load();
        obs.unobserve(vid);
      }
    });
  }, { rootMargin: '200px' });

  const I18N = {
    de: {
      header: { name: "Chenshun Weng", tagline: "Systems Engineer | Robotik | Simulation", cvText: "📄 Lebenslauf herunterladen (PDF)" },
      about:  { title: "Über mich", text: "Zuverlässiger Ingenieur mit Schwerpunkt Automatisierung, Robotik und MBSE..." },
      projects: {
        bsh: { year:2025, title:"BSH Testsystem", desc:"Testautomation >80%", long:"详细描述…", cover:"assets/images/bsh_project.png", video:"assets/videos/bsh_video.mp4" },
        vw:  { year:2023, title:"VW Virtuelle Fabrik", desc:"布局优化 +20%", long:"详细描述…", cover:"assets/images/ITDF_cover.jpg",  video:"assets/videos/ITDF_video.mp4" },
        bmw: { year:2024, title:"BMW SDOS", desc:"MBSE 安全系统", long:"详细描述…", cover:"assets/images/VEI_cover.jpg",  video:"assets/videos/VEI_video.mp4" },
        pmf: { year:2024, title:"PMF UR10e Modul", desc:"Bin-Picking –60%", long:"详细描述…", cover:"assets/images/PMF_cover.jpg",  video:"assets/videos/PMF_video.mp4" },
        bach:{ year:2022, title:"Bachelorarbeit", desc:"CNC 程序概念", long:"详细描述…", cover:"assets/images/bachelorarbeit_cover.jpg", video:"assets/videos/bachelorarbeit_video.mp4" }
      }
    },
    en: { /* ...英文同结构... */ },
    zh: { /* ...中文同结构... */ }
  };

  // DOM 引用
  const htmlEl        = document.documentElement;
  const langSwitcher  = document.getElementById('lang-switcher');
  const themeToggle   = document.getElementById('theme-toggle');
  const headerName    = document.getElementById('header-name');
  const headerTagline = document.getElementById('header-tagline');
  const aboutTitle    = document.getElementById('about-title');
  const aboutText     = document.getElementById('about-text');
  const cvLink        = document.getElementById('cv-link');
  const projectsEl    = document.getElementById('projects');

  // 初始化语言 & 主题
  let currentLang = localStorage.getItem('lang') || 'de';
  htmlEl.lang        = currentLang;
  langSwitcher.value = currentLang;
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

  // 渲染整页
  function renderAll() {
    console.log('🔄 renderAll()', currentLang);
    const data = I18N[currentLang];
    headerName.textContent    = data.header.name;
    headerTagline.textContent = data.header.tagline;
    cvLink.textContent        = data.header.cvText;
    aboutTitle.textContent    = data.about.title;
    aboutText.textContent     = data.about.text;
    renderProjects(data.projects);
  }

  // 渲染并懒加载卡片
  function renderProjects(projObj) {
    console.log('📦 renderProjects()', projObj);
    projectsEl.innerHTML = '';
    Object.values(projObj)
      .sort((a,b) => b.year - a.year)
      .forEach(p => {
        // 年份分组
        let group = projectsEl.querySelector(`[data-year="${p.year}"]`);
        if (!group) {
          group = document.createElement('div');
          group.setAttribute('data-year', p.year);
          group.innerHTML = `<div class="year-label">${p.year}</div><div class="projects-row"></div>`;
          projectsEl.append(group);
        }
        const row = group.querySelector('.projects-row');

        // 卡片
        const flip = document.createElement('div');
        flip.className = 'flip-card';
        flip.innerHTML = `
          <div class="flip-inner">
            <div class="flip-front card">
              <img data-src="${p.cover}" alt="${p.title}" loading="lazy"/>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
            <div class="flip-back">
              <h3>Projekt Details</h3>
              <p>${p.long}</p>
              <video data-src="${p.video}" controls preload="none"></video>
            </div>
          </div>
        `;
        const inner = flip.querySelector('.flip-inner');
        const img   = flip.querySelector('img');
        const vid   = flip.querySelector('video');

        // 懒加载观察
        imgObserver.observe(img);
        videoObserver.observe(vid);

        // 防止点击视频时翻转
        vid.addEventListener('click', e => e.stopPropagation());
        // 点击卡片时翻转
        flip.addEventListener('click', () => inner.classList.toggle('flipped'));
        row.append(flip);
      });
  }

  // 首次渲染
  renderAll();
});
