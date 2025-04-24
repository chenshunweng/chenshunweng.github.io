console.log('🌟 app.js loaded');

window.addEventListener('DOMContentLoaded', () => {
  // 内嵌 i18n 数据
  const I18N = {
    de: {
      header: {
        name: "Chenshun Weng",
        tagline: "Systems Engineer | Robotik | Simulation",
        cvText: "📄 Lebenslauf herunterladen (PDF)"
      },
      about: {
        title: "Über mich",
        text: "Zuverlässiger Ingenieur mit Schwerpunkt Automatisierung, Robotik und MBSE. Erfahrungen bei BSH, BMW, Volkswagen verbinden Theorie und Praxis."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH Testsystem",
          desc: "Waschmaschinen-Testautomation >80 % Abdeckung",
          long: "Entwicklung eines robotergestützten Systems zur automatisierten Prüfung von Waschmaschinen…",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtuelle Fabrik",
          desc: "Plant Simulation & Layout-Optimierung (+20 %)",
          long: "Optimierung der Layouts mit Tecnomatix Plant Simulation…",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS",
          desc: "MBSE-Sicherheitssystem gegen Türunfälle",
          long: "Modellierung eines Safe Door Opening Systems für den BMW i3…",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e Modul",
          desc: "Kameraloses Bin-Picking, –60 % Störeinflüsse",
          long: "Drehbarer UR10e-Endeffektor mit Vakuumgreifer und passiven Gelenken…",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "Bachelorarbeit",
          desc: "Robotik-Programmkonzept für CNC-Beladung",
          long: "Modulares Programmsystem zur automatisierten Beladung von Werkzeugmaschinen…",
          cover: "assets/images/bachelorarbeit_cover.jpg",
          video: "assets/videos/bachelorarbeit_video.mp4"
        }
      }
    },
    en: { /* 同结构英文本，略 */ },
    zh: { /* 同结构中文本，略 */ }
  };

  // DOM 引用
  const htmlEl        = document.documentElement;
  const langSwitcher  = document.getElementById('lang-switcher');
  const themeToggle   = document.getElementById('theme-toggle');
  const cvLink        = document.getElementById('cv-link');
  const headerName    = document.getElementById('header-name');
  const headerTagline = document.getElementById('header-tagline');
  const aboutTitle    = document.getElementById('about-title');
  const aboutText     = document.getElementById('about-text');
  const projectsEl    = document.getElementById('projects');

  // 初始语言 & 主题
  let currentLang = localStorage.getItem('lang') || 'de';
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

  // 渲染所有
  function renderAll() {
    console.log('✨ renderAll for', currentLang);
    const data = I18N[currentLang];

    // Header
    headerName.textContent    = data.header.name;
    headerTagline.textContent = data.header.tagline;
    cvLink.textContent        = data.header.cvText;

    // About
    aboutTitle.textContent = data.about.title;
    aboutText.textContent  = data.about.text;

    // Projects
    renderProjects(data.projects);
  }

  // 渲染 flip-cards
  function renderProjects(projObj) {
    console.log('✅ renderProjects', projObj);
    projectsEl.innerHTML = '';
    const items = Object.values(projObj);

    // 按年份分组
    const byYear = {};
    items.forEach(p => (byYear[p.year] ||= []).push(p));

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
              <h3>Projekt Details</h3>
              <p>${p.long}</p>
              <video src="${p.video}" controls></video>
            </div>
          </div>
        `;
        flip.addEventListener('click', () => {
          flip.querySelector('.flip-inner').classList.toggle('flipped');
        });
        row.append(flip);
      });

      group.append(row);
      projectsEl.append(group);
    });
  }

  // 初次渲染
  renderAll();
});
