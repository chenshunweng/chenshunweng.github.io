// 内嵌多语言数据
const I18N = {
  de: {
    header: {
      name: "Chenshun Weng",
      tagline: "Systems Engineer | Robotik | Simulation",
      cvText: "📄 Lebenslauf herunterladen (PDF)"
    },
    about: {
      title: "Über mich",
      text: "Zuverlässiger Ingenieur mit Schwerpunkt Automatisierung, Robotik und modellbasierte Systementwicklung (MBSE)."
    },
    projects: {
      bsh: {
        year: 2025,
        title: "BSH Testsystem",
        desc: "Waschmaschinen-Testautomation >80 % Abdeckung",
        long: "Entwicklung eines robotergestützten Systems zur automatisierten Prüfung von Waschmaschinen...",
        cover: "assets/images/bsh_project.png",
        video: "assets/videos/bsh_video.mp4"
      },
      vw: {
        year: 2023,
        title: "VW / ITDF Virtuelle Fabrik",
        desc: "Plant Simulation & Layout-Optimierung (+20 %)",
        long: "Optimierung der Fertigungslayouts bei Volkswagen mithilfe von Tecnomatix Plant Simulation...",
        cover: "assets/images/ITDF_cover.jpg",
        video: "assets/videos/ITDF_video.mp4"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS",
        desc: "MBSE-Sicherheitssystem gegen Türunfälle",
        long: "Modellierung eines Safe Door Opening Systems für den BMW i3...",
        cover: "assets/images/VEI_cover.jpg",
        video: "assets/videos/VEI_video.mp4"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e Modul",
        desc: "Kameraloses Bin-Picking, –60 % Störeinflüsse",
        long: "Entwicklung eines drehbaren UR10e-Endeffektors zur flexiblen Positionierung...",
        cover: "assets/images/PMF_cover.jpg",
        video: "assets/videos/PMF_video.mp4"
      },
      bach: {
        year: 2022,
        title: "Bachelorarbeit",
        desc: "Robotik-Programmkonzept für CNC-Beladung",
        long: "Erstellung eines modularen Programmsystems zur automatisierten Beladung von Werkzeugmaschinen...",
        cover: "assets/images/bachelorarbeit_cover.jpg",
        video: "assets/videos/bachelorarbeit_video.mp4"
      }
    }
  },
  en: {
    /* 同结构英文本，省略… */
  },
  zh: {
    /* 同结构中文本，省略… */
  }
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

// 初始化语言、主题
let currentLang = localStorage.getItem('lang') || 'de';
langSwitcher.value = currentLang;
htmlEl.lang        = currentLang;
htmlEl.setAttribute('data-theme', 'light');
renderAll();

// 切换语言
langSwitcher.addEventListener('change', e => {
  currentLang = e.target.value;
  localStorage.setItem('lang', currentLang);
  htmlEl.lang = currentLang;
  renderAll();
});

// 切换主题
themeToggle.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
});

// 渲染全部
function renderAll() {
  const data = I18N[currentLang];
  headerName.textContent    = data.header.name;
  headerTagline.textContent = data.header.tagline;
  cvLink.textContent        = data.header.cvText;
  headerName.closest('.container'); // 确保 DOM 已加载
  aboutTitle.textContent = data.about.title;
  aboutText.textContent  = data.about.text;
  renderProjects(data.projects);
}

// 渲染翻转卡片
function renderProjects(projObj) {
  projectsEl.innerHTML = '';
  const items = Object.values(projObj);
  const byYear = {};
  items.forEach(p => (byYear[p.year] ||= []).push(p));

  Object.keys(byYear).sort((a,b) => b - a).forEach(year => {
    const lbl = document.createElement('div');
    lbl.className = 'year-label';
    lbl.textContent = year;
    projectsEl.append(lbl);

    const row = document.createElement('div');
    row.className = 'projects-row';
    byYear[year].forEach(p => {
      const flip = document.createElement('div');
      flip.className = 'flip-card';
      flip.innerHTML = `
        <div class="flip-inner">
          <div class="flip-front card">
            <img src="${p.cover}" alt="${p.title}"/>
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
        const inner = flip.querySelector('.flip-inner');
        inner.classList.toggle('flipped');
      });
      row.append(flip);
    });

    projectsEl.append(row);
  });
}
