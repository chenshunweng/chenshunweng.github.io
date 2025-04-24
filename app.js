// 内嵌 i18n 数据，彻底避免 fetch
const I18N = {
  de: {
    header: {
      name: "Chenshun Weng",
      tagline: "Systems Engineer | Robotik | Simulation",
      cvText: "📄 Lebenslauf herunterladen (PDF)"
    },
    about: {
      title: "Über mich",
      text: "Zuverlässiger Ingenieur mit Schwerpunkt Automatisierung, Robotik und modellbasierte Systementwicklung (MBSE). Durch Erfahrungen bei BSH, BMW und Volkswagen verbinde ich systemisches Denken mit praktischer Umsetzungskompetenz."
    },
    projects: {
      bsh: {
        year: 2025,
        title: "BSH Testsystem",
        desc: "Waschmaschinen-Testautomation >80 % Abdeckung",
        long: "Entwicklung eines robotergestützten Systems zur automatisierten Prüfung von Waschmaschinen. Integration von Vision-Systemen zur Erkennung von Endzuständen, modularer Teststeuerung und automatischer Pfadplanung. Über 80 % der Testfälle werden ohne manuelle Eingriffe durchgeführt.",
        cover: "assets/images/bsh_project.png",
        video: "assets/videos/bsh_video.mp4"
      },
      vw: {
        year: 2023,
        title: "VW / ITDF Virtuelle Fabrik",
        desc: "Plant Simulation & Layout-Optimierung (+20 %)",
        long: "Optimierung der Fertigungslayouts bei Volkswagen mithilfe von Tecnomatix Plant Simulation. Entwicklung digitaler Zwillinge für mehrere Produktionsstationen, Simulation und Effizienzsteigerung der Auslastung um mehr als 20 %.",
        cover: "assets/images/ITDF_cover.jpg",
        video: "assets/videos/ITDF_video.mp4"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS",
        desc: "MBSE-Sicherheitssystem gegen Türunfälle",
        long: "Modellierung eines Safe Door Opening Systems für den BMW i3. Anwendung von Cameo SysML, MBSE und Simulationsmodellen zur Risikoprävention von Türunfällen bei Radfahrern.",
        cover: "assets/images/VEI_cover.jpg",
        video: "assets/videos/VEI_video.mp4"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e Modul",
        desc: "Kameraloses Bin-Picking, –60 % Störeinflüsse",
        long: "Entwicklung eines drehbaren UR10e-Endeffektors zur flexiblen Positionierung. Kombination aus Vakuumgreifer und passiver Gelenkstruktur zur Reduktion von Querbelastungen bei Behälter-Entnahmeprozessen.",
        cover: "assets/images/PMF_cover.jpg",
        video: "assets/videos/PMF_video.mp4"
      },
      bach: {
        year: 2022,
        title: "Bachelorarbeit",
        desc: "Robotik-Programmkonzept für CNC-Beladung",
        long: "Erstellung eines modularen Programmsystems zur automatisierten Beladung und Entladung von Werkzeugmaschinen. Einsatz bei Anton Häring KG mit Fokus auf Mehrstationenkompatibilität und Kollisionsvermeidung.",
        cover: "assets/images/bachelorarbeit_cover.jpg",
        video: "assets/videos/bachelorarbeit_video.mp4"
      }
    }
  },
  en: {
    header: {
      name: "Chenshun Weng",
      tagline: "Systems Engineer | Robotics | Simulation",
      cvText: "📄 Download CV (PDF)"
    },
    about: {
      title: "About Me",
      text: "A reliable engineer specializing in automation, robotics, and model-based systems engineering (MBSE). With experience at BSH, BMW, and Volkswagen, I combine systemic thinking with hands-on implementation."
    },
    projects: {
      bsh: {
        year: 2025,
        title: "BSH Test System",
        desc: "Washing machine test automation >80% coverage",
        long: "Developed a robot-assisted system for automated washing-machine testing. Integrated vision systems for end-state detection, modular test control, and automatic path planning. Achieved over 80% test-case coverage without manual intervention.",
        cover: "assets/images/bsh_project.png",
        video: "assets/videos/bsh_video.mp4"
      },
      vw: {
        year: 2023,
        title: "VW / ITDF Virtual Factory",
        desc: "Plant Simulation & layout optimization (+20%)",
        long: "Optimized production layouts at Volkswagen using Tecnomatix Plant Simulation. Built digital twins of multiple stations, ran simulations to boost throughput by over 20%.",
        cover: "assets/images/ITDF_cover.jpg",
        video: "assets/videos/ITDF_video.mp4"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS",
        desc: "MBSE safety system against door accidents",
        long: "Modeled a Safe Door Opening System for the BMW i3 using Cameo SysML and MBSE. Developed simulation models to prevent door-related accidents involving cyclists.",
        cover: "assets/images/VEI_cover.jpg",
        video: "assets/videos/VEI_video.mp4"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e Module",
        desc: "Camera-free bin-picking, –60% disturbance",
        long: "Designed a rotatable UR10e end-effector for flexible workpiece handling. Combined vacuum gripper with passive joints to reduce lateral loads during container extraction.",
        cover: "assets/images/PMF_cover.jpg",
        video: "assets/videos/PMF_video.mp4"
      },
      bach: {
        year: 2022,
        title: "Bachelor Thesis",
        desc: "Robotic CNC-loading program concept",
        long: "Created a modular software system for automated loading/unloading of CNC machines. Deployed at Anton Häring KG, focusing on multi-station compatibility and collision avoidance.",
        cover: "assets/images/bachelorarbeit_cover.jpg",
        video: "assets/videos/bachelorarbeit_video.mp4"
      }
    }
  },
  zh: {
    header: {
      name: "翁陈顺",
      tagline: "系统工程师 | 机器人 | 仿真",
      cvText: "📄 下载简历 (PDF)"
    },
    about: {
      title: "关于我",
      text: "可靠的工程师，专注于自动化、机器人及模型驱动的系统工程（MBSE）。在 BSH、BMW 和大众的经历，使我兼具系统思维与实践能力。"
    },
    projects: {
      bsh: {
        year: 2025,
        title: "BSH 测试系统",
        desc: "洗衣机测试自动化 >80% 覆盖率",
        long: "开发了基于机器人辅助的洗衣机自动化测试系统。集成视觉检测，实现模块化测试控制与自动路径规划，测试用例覆盖率超 80%，无需人工干预。",
        cover: "assets/images/bsh_project.png",
        video: "assets/videos/bsh_video.mp4"
      },
      vw: {
        year: 2023,
        title: "大众虚拟工厂",
        desc: "工厂仿真与布局优化 (+20%)",
        long: "使用 Tecnomatix Plant Simulation 优化大众生产线布局。构建多工位数字孪生，模拟运行提升产能超过 20%。",
        cover: "assets/images/ITDF_cover.jpg",
        video: "assets/videos/ITDF_video.mp4"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS 安全开门系统",
        desc: "MBSE 安全系统，防止开门事故",
        long: "为 BMW i3 建立了安全开门系统模型，使用 Cameo SysML 和 MBSE 方法，开发仿真模型以预防骑行者与车门碰撞事故。",
        cover: "assets/images/VEI_cover.jpg",
        video: "assets/videos/VEI_video.mp4"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e 模块",
        desc: "无视觉抓取，–60% 干扰影响",
        long: "设计了可旋转的 UR10e 末端执行器，实现灵活取放。结合真空吸盘与被动关节结构，减少容器取料过程中的横向载荷。",
        cover: "assets/images/PMF_cover.jpg",
        video: "assets/videos/PMF_video.mp4"
      },
      bach: {
        year: 2022,
        title: "本科毕业论文",
        desc: "CNC 上料的机器人程序构想",
        long: "开发了用于自动上下料的模块化程序系统，应用于 Anton Häring KG，重点实现多工位兼容性和碰撞规避。",
        cover: "assets/images/bachelorarbeit_cover.jpg",
        video: "assets/videos/bachelorarbeit_video.mp4"
      }
    }
  }
};

// DOM references
const htmlEl        = document.documentElement;
const langSwitcher  = document.getElementById('lang-switcher');
const themeToggle   = document.getElementById('theme-toggle');
const cvLink        = document.getElementById('cv-link');
const headerName    = document.getElementById('header-name');
const headerTagline = document.getElementById('header-tagline');
const aboutTitle    = document.getElementById('about-title');
const aboutText     = document.getElementById('about-text');
const projectsEl    = document.getElementById('projects');

// Initial language & theme
let currentLang = localStorage.getItem('lang') || 'de';
langSwitcher.value = currentLang;
htmlEl.lang        = currentLang;
htmlEl.setAttribute('data-theme', 'light');

// Language switch
langSwitcher.addEventListener('change', e => {
  currentLang = e.target.value;
  localStorage.setItem('lang', currentLang);
  htmlEl.lang = currentLang;
  renderAll();
});

// Theme switch
themeToggle.addEventListener('click', () => {
  const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  htmlEl.setAttribute('data-theme', next);
  themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
});

// Render all content
function renderAll() {
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

// Render flip-cards with text + video on back
function renderProjects(projObj) {
  projectsEl.innerHTML = '';
  const items = Object.entries(projObj)
    .filter(([k]) => k !== 'title')
    .map(([_,p]) => p);

  // group by year
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

// First render
renderAll();
