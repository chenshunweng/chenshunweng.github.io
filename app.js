// 等 DOM 完全加载后再执行
document.addEventListener('DOMContentLoaded', () => {
  // 多语言内容
  const I18N = {
    zh: {
      header: {
        name: "翁陈顺",
        tagline: "系统工程师 | 机器人 | 仿真",
        cvText: "📄 下载简历 (PDF)"
      },
      about: {
        title: "关于我",
        text: "可靠的工程师，专注于自动化、机器人及模型驱动的系统工程 (MBSE)。在 BSH、BMW 和大众的经历，使我兼具系统思维与实践能力。"
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH 洗衣机测试系统",
          desc: "洗衣机测试自动化 >80% 覆盖率",
          myRole: "负责系统架构设计、控制流程构建、路径规划逻辑开发及视觉识别模块集成。",
          tools: ["TMflow", "Omron TM14", "路径规划算法", "Landmark 校准系统"],
          impact: "系统覆盖率超过 80%，支持 24/7 自主运行，具备自纠错能力，显著降低人工干预。",
          long: "开发了一套基于协作机器人的自动化测试系统，覆盖从洗衣程序结束识别、衣物状态检测、路径规划到抓取与放置的全流程。",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS 安全开门系统",
          desc: "MBSE 安全系统，防止开门事故",
          myRole: "构建 SysML 需求、功能和行为模型，搭建原型并联调硬件控制逻辑。",
          tools: ["Cameo SysML", "3DEXPERIENCE", "SysML", "Arduino", "FDMU"],
          impact: "在复杂交通场景下预警准确率达 85%，有效避免骑行者碰撞。",
          long: "基于 MBSE 方法设计智能车门安全原型，实现从需求到控制的全链路模型与仿真。",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF 虚拟工厂",
          desc: "工厂仿真与布局优化 (+20% 效率提升)",
          myRole: "负责三条产线的数字孪生建模、瓶颈分析、布局仿真与优化。",
          tools: ["Tecnomatix Plant Simulation", "价值流图分析", "节拍测算工具", "资源调度脚本"],
          impact: "生产效率提升超过 20%，显著减少等待与人工干预。",
          long: "基于 Plant Simulation 构建数字孪生，实现产能仿真与布局优化。",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e 模块",
          desc: "无视觉抓取系统，–60% 干扰力",
          myRole: "设计柔性关节抓手，搭建测试平台并优化多轮性能。",
          tools: ["UR10e", "Fusion 360", "3D 打印原型机", "力传感器", "Formhand 吸盘"],
          impact: "抓取干扰力降低 60%，结构模块化复用性强。",
          long: "基于 UR10e 机械臂，结合旋转与柔性结构，实现视觉无关稳定抓取。",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "本科项目 – CNC 自动上下料系统",
          desc: "CNC 上料自动化 + 模块化程序",
          myRole: "开发完整控制逻辑，优化算法并设计模块化流程状态图。",
          tools: ["Yaskawa", "碰撞规避算法", "状态图建模"],
          impact: "节拍缩短 25%，支持快速部署与重复使用。",
          long: "构建模块化机器人上下料控制框架，提升生产线自动化效率。",
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
        text: "A reliable engineer specializing in automation, robotics, and MBSE. With experience at BSH, BMW, and Volkswagen, I combine systemic thinking with hands-on implementation."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH Washing Machine Testing System",
          desc: "Washing machine test automation with >80% coverage",
          myRole: "Designed system architecture, control flows, path planning and integrated vision module.",
          tools: ["TMflow", "Omron TM14", "Path planning", "Landmark calibration"],
          impact: "Achieved >80% coverage, 24/7 autonomous operation with self-correction.",
          long: "Built a cobot-based automation system covering end-state detection, classification, path planning, and pick-and-place.",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS Safe Door Opening System",
          desc: "MBSE-based safety to prevent dooring accidents",
          myRole: "Developed SysML requirement/function/behavior models; prototyped hardware logic.",
          tools: ["Cameo SysML", "3DEXPERIENCE", "Arduino", "FDMU"],
          impact: "85% warning accuracy in complex traffic scenarios.",
          long: "Designed and validated an MBSE-based intelligent door safety prototype to prevent cyclist collisions.",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtual Factory",
          desc: "Factory simulation & layout optimization (+20% efficiency)",
          myRole: "Built digital twin models, analyzed bottlenecks, optimized layout.",
          tools: ["Plant Simulation", "Value stream mapping", "Cycle analysis", "Scheduling scripts"],
          impact: "Boosted efficiency by >20%, reduced idle times.",
          long: "Implemented digital twin simulations for multi-station throughput optimization.",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e Gripper Module",
          desc: "Vision-free grasping, –60% disturbance",
          myRole: "Designed flexible gripper, built test bench, performed mechanical testing.",
          tools: ["UR10e", "Fusion 360", "3D prototyping", "Force sensor", "Formhand"],
          impact: "Reduced torque disturbance by 60%, modular reuse.",
          long: "Developed a rotary-flexible end-effector for reliable bin-picking without vision.",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "Bachelor CNC Automation System",
          desc: "Modular robotic loading for CNC",
          myRole: "Created full control logic, optimized algorithms, modular flow design.",
          tools: ["Yaskaya", "Collision avoidance", "State diagrams"],
          impact: "25% cycle time reduction, rapid deployment.",
          long: "Built a modular robotic loading/unloading framework for CNC production.",
          cover: "assets/images/bachelorarbeit_cover.jpg",
          video: "assets/videos/bachelorarbeit_video.mp4"
        }
      }
    },
    de: {
      header: {
        name: "Chenshun Weng",
        tagline: "Systems Engineer | Robotik | Simulation",
        cvText: "📄 Lebenslauf herunterladen (PDF)"
      },
      about: {
        title: "Über mich",
        text: "Zuverlässiger Ingenieur spezialisiert auf Automatisierung, Robotik und MBSE. Mit Erfahrung bei BSH, BMW und VW verbinde ich systemisches Denken mit praktischer Umsetzung."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH Waschmaschinen-Testsystem",
          desc: "Automatisierung mit >80% Testabdeckung",
          myRole: "Systemarchitektur, Steuerlogik und Vision-Modul integriert.",
          tools: ["TMflow", "Omron TM14", "Pfadplanung", "Landmark-Kalibrierung"],
          impact: ">80% Abdeckung, 24/7 Betrieb mit Selbstkorrektur.",
          long: "Coboter-gesteuertes System für Endzustandserkennung, Klassifizierung und Greifen.",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS Sicherheitssystem",
          desc: "MBSE-basierte Türunfallprävention",
          myRole: "SysML-Modelle erstellt, Prototyp-Hardware gesteuert.",
          tools: ["Cameo SysML", "3DEXPERIENCE", "Arduino", "FDMU"],
          impact: "85% Warn-Genauigkeit in Testszenarien.",
          long: "Intelligentes Türwarnsystem auf MBSE-Basis gegen Fahrradunfälle.",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtuelle Fabrik",
          desc: "Simulation & Layoutoptimierung (+20%)",
          myRole: "Digitale Zwillinge, Engpassanalyse, Layoutoptimierung.",
          tools: ["Plant Simulation", "Wertstromanalyse", "Taktanalyse", "Skripte"],
          impact: ">20% Effizienzsteigerung.",
          long: "Digitale Zwillinge für synchronisierte Durchsatzoptimierung.",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e Greifermodul",
          desc: "Visionsloses Greifen, –60% Störung",
          myRole: "Flexiblen Greifer entworfen, Testplattform aufgebaut, mechanisch getestet.",
          tools: ["UR10e", "Fusion 360", "3D Prototyp", "Kraftsensor", "Formhand"],
          impact: "60% weniger Störmoment, modulare Wiederverwendung.",
          long: "Rotations-flexibles Endeffektor-Modul für zuverlässiges Sortieren ohne Vision.",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "Bachelorarbeit CNC-Automatisierung",
          desc: "Modulare Robotikprogramme",
          myRole: "Steuerlogik programmiert, Algorithmen optimiert, Abläufe modelliert.",
          tools: ["Yaskaya", "Kollisionsvermeidung", "Zustandsdiagramme"],
          impact: "25% kürzere Taktzeiten.",
          long: "Modulares Robotiksystem für CNC-Beschickung implementiert.",
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
  const cvLink        = document.getElementById('cv-link');
  const aboutTitle    = document.getElementById('about-title');
  const aboutText     = document.getElementById('about-text');
  const projectsEl    = document.getElementById('projects');

  // 初始语言与主题
  let currentLang = localStorage.getItem('lang') || 'zh';
  htmlEl.lang = currentLang;
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

  // 渲染整个页面
  function renderAll() {
    const data = I18N[currentLang];

    // 头部 & 关于我
    headerName.textContent    = data.header.name;
    headerTagline.textContent = data.header.tagline;
    cvLink.textContent        = data.header.cvText;
    aboutTitle.textContent    = data.about.title;
    aboutText.textContent     = data.about.text;

    // 项目按年份分组
    projectsEl.innerHTML = '';
    Object.values(data.projects)
      .sort((a, b) => b.year - a.year)
      .forEach(p => {
        // 年份组
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
              <img src="${p.cover}" alt="${p.title}" />
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
            <div class="flip-back">
              <h3>${currentLang==='zh'?'项目详情': currentLang==='en'?'Project Details':'Projekt Details'}</h3>
              <p class="role"><strong>${currentLang==='zh'?'我的职责': currentLang==='en'?'Role':'Meine Rolle'}:</strong> ${p.myRole}</p>
              <p class="impact"><strong>${currentLang==='zh'?'成果': currentLang==='en'?'Impact':'Ergebnis'}:</strong> ${p.impact}</p>
              <p><strong>${currentLang==='zh'?'工具': currentLang==='en'?'Tools':'Werkzeuge'}:</strong></p>
              <ul class="tools-list">
                ${p.tools.map(t => `<li>${t}</li>`).join('')}
              </ul>
              <p class="long">${p.long}</p>
              <video src="${p.video}" controls></video>
            </div>
          </div>`;
        const inner = flip.querySelector('.flip-inner');
        const vid   = flip.querySelector('video');

        // 点击视频不触发翻转
        vid.addEventListener('click', e => e.stopPropagation());

        // 点击卡片翻转，并在关闭时暂停视频
        flip.addEventListener('click', () => {
          if (inner.classList.contains('flipped')) {
            // 当前是背面，点击将回到正面 => 暂停视频
            vid.pause();
            vid.currentTime = 0;
          }
          inner.classList.toggle('flipped');
        });

        row.append(flip);
      });
  }

  // 首次渲染
  renderAll();
});
