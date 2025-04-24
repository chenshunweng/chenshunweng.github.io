// 多语言数据
const I18N = {
  de: {
    header: {
      name: "Chenshun Weng",
      tagline: "Systems Engineer | Robotik | Simulation",
      cvText: "📄 Lebenslauf herunterladen (PDF)"
    },
    about: {
      title: "Über mich",
      text: "Zuverlässiger Ingenieur mit Schwerpunkt Automatisierung, Robotik und MBSE."
    },
    projects: {
      bsh: {
        year: 2025,
        title: "BSH Testsystem",
        desc: "Waschmaschinen-Testautomation >80 % Abdeckung",
        long: "Entwicklung eines robotergestützten Systems zur automatisierten Prüfung von Waschmaschinen. Integration von Vision-Systemen zur Erkennung von Endzuständen, modularer Teststeuerung und automatischer Pfadplanung.",
        cover: "assets/images/bsh_project.png",
        video: "assets/videos/bsh_video.mp4"
      },
      vw: {
        year: 2023,
        title: "VW / ITDF Virtuelle Fabrik",
        desc: "Plant Simulation & Layout-Optimierung (+20 %)",
        long: "Optimierung der Fertigungslayouts bei Volkswagen mithilfe von Tecnomatix Plant Simulation. Entwicklung digitaler Zwillinge für mehrere Produktionsstationen.",
        cover: "assets/images/ITDF_cover.jpg",
        video: "assets/videos/ITDF_video.mp4"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS",
        desc: "MBSE-Sicherheitssystem gegen Türunfälle",
        long: "Modellierung eines Safe Door Opening Systems für den BMW i3 mit Cameo SysML und MBSE zur Risikoprävention.",
        cover: "assets/images/VEI_cover.jpg",
        video: "assets/videos/VEI_video.mp4"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e Modul",
        desc: "Kameraloses Bin-Picking, –60 % Störeinflüsse",
        long: "Entwicklung eines drehbaren UR10e-Endeffektors mit Vakuumgreifer und passiver Gelenkstruktur zur Reduktion von Querbelastungen.",
        cover: "assets/images/PMF_cover.jpg",
        video: "assets/videos/PMF_video.mp4"
      },
      bach: {
        year: 2022,
        title: "Bachelorarbeit",
        desc: "Robotik-Programmkonzept für CNC-Beladung",
        long: "Erstellung eines modularen Programmsystems zur automatisierten Beladung von Werkzeugmaschinen mit Kollisionsvermeidung.",
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
      text: "A reliable engineer specializing in automation, robotics, and MBSE."
    },
    projects: {
      bsh: {
        year: 2025,
        title: "BSH Test System",
        desc: "Washing machine test automation >80% coverage",
        long: "Developed a robot-assisted system for automated washing-machine testing. Integrated vision systems and automated path planning.",
        cover: "assets/images/bsh_project.png",
        video: "assets/videos/bsh_video.mp4"
      },
      vw: {
        year: 2023,
        title: "VW / ITDF Virtual Factory",
        desc: "Plant Simulation & layout optimization (+20%)",
        long: "Optimized Volkswagen production using Tecnomatix Plant Simulation and digital twins.",
        cover: "assets/images/ITDF_cover.jpg",
        video: "assets/videos/ITDF_video.mp4"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS",
        desc: "MBSE safety system against door accidents",
        long: "Modeled a Safe Door Opening System for the BMW i3 using SysML and MBSE.",
        cover: "assets/images/VEI_cover.jpg",
        video: "assets/videos/VEI_video.mp4"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e Module",
        desc: "Camera-free bin-picking, –60% disturbance",
        long: "Designed a rotatable UR10e end-effector with vacuum gripper and passive joints.",
        cover: "assets/images/PMF_cover.jpg",
        video: "assets/videos/PMF_video.mp4"
      },
      bach: {
        year: 2022,
        title: "Bachelor Thesis",
        desc: "Robotic CNC-loading program concept",
        long: "Created a modular software system for automated CNC loading with collision avoidance.",
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
      text: "可靠的工程师，专注于自动化、机器人及 MBSE。"
    },
    projects: {
      bsh: {
        year: 2025,
        title: "BSH 测试系统",
        desc: "洗衣机测试自动化 >80% 覆盖率",
        long: "开发了机器人辅助的洗衣机自动化测试系统，集成视觉检测与自动路径规划。",
        cover: "assets/images/bsh_project.png",
        video: "assets/videos/bsh_video.mp4"
      },
      vw: {
        year: 2023,
        title: "大众虚拟工厂",
        desc: "工厂仿真与布局优化 (+20%)",
        long: "使用 Tecnomatix Plant Simulation 优化生产线布局与数字孪生。",
        cover: "assets/images/ITDF_cover.jpg",
        video: "assets/videos/ITDF_video.mp4"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS",
        desc: "MBSE 安全开门系统",
        long: "为 BMW i3 建立安全开门系统模型，使用 SysML 与 MBSE。",
        cover: "assets/images/VEI_cover.jpg",
        video: "assets/videos/VEI_video.mp4"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e 模块",
        desc: "无视觉抓取，–60% 干扰",
        long: "设计可旋转 UR10e 末端执行器，结合真空吸盘与被动关节。",
        cover: "assets/images/PMF_cover.jpg",
        video: "assets/videos/PMF_video.mp4"
      },
      bach: {
        year: 2022,
        title: "本科毕业论文",
        desc: "CNC 上料机器人程序",
        long: "创建模块化程序系统，实现自动上下料与碰撞规避。",
        cover: "assets/images/bachelorarbeit_cover.jpg",
        video: "assets/videos/bachelorarbeit_video.mp4"
      }
    }
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

// 初始化语言和主题
let currentLang = localStorage.getItem('lang') || 'de';
langSwitcher.value = currentLang;
htmlEl.lang        = currentLang;
htmlEl.setAttribute('data-theme', 'light');
renderAll();

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
  const data = I18N[currentLang];
  headerName.textContent    = data.header.name;
  headerTagline.textContent = data.header.tagline;
  cvLink.textContent        = data.header.cvText;
  aboutTitle.textContent    = data.about.title;
  aboutText.textContent     = data.about.text;
  renderProjects(data.projects);
}

// 渲染卡片
function renderProjects(projObj) {
  projectsEl.innerHTML = '';
  Object.values(projObj)
    .sort((a,b) => b.year - a.year)
    .forEach(p => {
      // 年份组
      let yearGroup = projectsEl.querySelector(`[data-year="${p.year}"]`);
      if (!yearGroup) {
        yearGroup = document.createElement('div');
        yearGroup.setAttribute('data-year', p.year);
        yearGroup.innerHTML = `<div class="year-label">${p.year}</div><div class="projects-row"></div>`;
        projectsEl.append(yearGroup);
      }
      const row = yearGroup.querySelector('.projects-row');
      // 卡片
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
        flip.querySelector('.flip-inner').classList.toggle('flipped');
      });
      row.append(flip);
    });
}
