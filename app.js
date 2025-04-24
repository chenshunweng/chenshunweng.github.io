console.log('🛠 app.js loaded');
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOMContentLoaded');

  const I18N = {
    de: {
      header: {
        name: "Chenshun Weng",
        tagline: "Systems Engineer | Robotik | Simulation",
        cvText: "📄 Lebenslauf herunterladen (PDF)"
      },
      about: {
        title: "Über mich",
        text: "Ich bin ein erfahrener Systems Engineer mit Fokus auf Automatisierung, Robotik und modellbasierte Systementwicklung (MBSE). In meinem Masterstudium arbeitete ich an Industrieprojekten mit BMW (Safe Door Opening System auf MBSE-Basis) und Volkswagen (Virtuelle Fabrik mit Tecnomatix Simulation). Derzeit entwickle ich bei BSH ein robotergestütztes Testsystem für Waschmaschinen, das über 80 % der Testfälle automatisiert abdeckt."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH Testsystem",
          desc: "Waschmaschinen-Testautomation >80 % Abdeckung",
          long: "Dieses Projekt ist Teil meiner Masterarbeit und zielt auf die Entwicklung eines robotergestützten Systems zur vollautomatischen Prüfung von Waschmaschinen ab. Es integriert einen TM14-Roboter, visuelle Erkennungsmodule (inkl. Template Matching und Multi-Skalen-Bildpyramiden), einen adaptiven Greifer sowie Pfadplanungsalgorithmen. Das System erkennt autonom das Waschende (\"END\") und greift anschließend nasse Handtücher zur Ablage in den Trocknungskorb. Mit über 80 % Testabdeckung unterstützt es verschiedene Handtuchlagen und verfügt über Fehlererkennung und Selbstkorrektur – ideal für dauerhafte, unbeaufsichtigte Testläufe.",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtuelle Fabrik",
          desc: "Plant Simulation & Layout-Optimierung (+20 %)",
          long: "Dieses Projekt entstand im Rahmen einer Kooperationsaufgabe mit Volkswagen und wurde auf der ITDF-Plattform (Virtuelle Fabrik) umgesetzt. Meine Aufgabe war die Modellierung digitaler Zwillinge mithilfe von Tecnomatix Plant Simulation, um Produktionslayouts zu optimieren und Engpässe zu identifizieren. Durch Prozesslogik, Förderparameteranpassung und automatische Auswertungen konnte eine Effizienzsteigerung von über 20 % erzielt werden. Das Projekt stärkte meine Fähigkeiten in datengetriebener Fabrikplanung und Ressourcenmodellierung.",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS",
          desc: "MBSE-Sicherheitssystem gegen Türunfälle",
          long: "Dieses Projekt wurde als Teil eines Uni-Kurses in Zusammenarbeit mit BMW durchgeführt. Ziel war die MBSE-basierte Modellierung eines Safe Door Opening Systems (SDOS) für den BMW i3 zur Vermeidung von Türunfällen. Ich erstellte mit Cameo Systems Modeler ein vollständiges SysML-Modell mit Anforderungsverfolgung, Strukturdiagrammen, Zustandsautomaten und Ablaufplänen. Zusätzlich wurden Simulationskomponenten integriert, um Sicherheitsstrategien in verschiedenen Szenarien zu analysieren.",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e Modul",
          desc: "Kameraloses Bin-Picking, –60 % Störeinflüsse",
          long: "In diesem Projekt entwickelte ich eigenständig einen drehbaren Endeffektor für den UR10e-Roboter. Er kombiniert einen Vakuumgreifer mit passiven, flexiblen Gelenken und ist für kamerafreies Bin-Picking konzipiert. Der modulare Aufbau reduziert Querkräfte und minimiert das Abrutschen beim Greifen unregelmäßiger Objekte. Das System eignet sich besonders für industrielle Szenarien mit niedrigen Kosten und geringen Sensoranforderungen.",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "Bachelorarbeit",
          desc: "Robotik-Programmkonzept für CNC-Beladung",
          long: "Im Rahmen meiner Bachelorarbeit bei Anton Häring KG entwickelte ich ein modulares Programmsystem zur automatisierten Be- und Entladung von CNC-Maschinen. Der Fokus lag auf Multi-Station-Kompatibilität und Kollisionserkennung. Ich programmierte den Yaskawa-Roboter für reale Fertigungsaufgaben und validierte das System vor Ort. Das Projekt steigerte die Beladungseffizienz erheblich und bildete die Grundlage für spätere flexible Fertigungssysteme.",
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
        text: "I am a systems engineer specializing in automation, robotics, and model-based systems engineering (MBSE). During my master’s studies, I contributed to industrial projects with BMW (MBSE-based Safe Door Opening System) and Volkswagen (Virtual Factory optimization using Tecnomatix). Currently, I am developing a robotic testing system at BSH, achieving over 80% test coverage for washing machines."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH Test System",
          desc: "Washing machine test automation >80% coverage",
          long: "This project, part of my master's thesis, focuses on developing a robotic system for fully automated washing machine testing. It integrates the TM14 robot, vision detection modules (including template matching and multi-scale image pyramids), an adaptive gripper, and path planning algorithms. The system performs the entire workflow autonomously from detecting the 'END' indicator to grabbing wet towels and placing them into the drying basket. It achieves over 80% test coverage and supports different towel positions, including error handling and self-correction for long-term unattended operation.",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtual Factory",
          desc: "Plant Simulation & Layout Optimization (+20%)",
          long: "This project was part of a simulation optimization task in collaboration with Volkswagen, conducted on the ITDF (Virtuelle Fabrik) platform. My role involved building digital twins of production units using Tecnomatix Plant Simulation, optimizing layouts and identifying bottlenecks. By refining process logic, adjusting conveyor parameters, and applying automated performance analysis, we achieved over 20% improvement in production efficiency. The project strengthened my skills in data-driven factory planning and resource modeling.",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS",
          desc: "MBSE safety system against door accidents",
          long: "This project was part of an academic collaboration with BMW during a course on system modeling and analysis. The goal was to create a prototype model of a Safe Door Opening System (SDOS) for the BMW i3 using MBSE methodologies. I used Cameo Systems Modeler to build comprehensive SysML models including requirements tracing, structure diagrams, state machines, and activity flows. The model was also tested with simulation components to evaluate safety strategies under various scenarios.",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e Module",
          desc: "Camera-free bin-picking, –60% disturbances",
          long: "In this project, I independently designed a rotatable end-effector for the UR10e robot, combining a vacuum gripper with passive flexible joints. The module was developed for bin-picking tasks without a camera system, reducing lateral forces and slippage issues commonly seen with traditional rigid grippers. It achieved stable grasping performance in visually-challenged environments and reduced setup complexity, making it suitable for low-cost deployment in industrial applications.",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "Bachelor Thesis",
          desc: "Robotic CNC-loading program concept",
          long: "As part of my bachelor’s thesis at Anton Häring KG, I developed a modular software framework for automated loading and unloading of CNC machines. The system supported multi-station compatibility and collision avoidance. I programmed the Yaskawa industrial robot to handle real production tasks and validated the system’s performance on-site. The project significantly improved loading efficiency and laid a foundation for future flexible manufacturing solutions.",
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
        text: "我是一名专注于自动化、机器人与模型驱动系统工程（MBSE）的系统工程师。在硕士阶段，我参与了多个来自工业界的合作项目，包括 BMW 的“安全开门系统（SDOS）”模型建立项目和 Volkswagen 的“虚拟工厂仿真优化”项目。在这些项目中，我主要负责系统建模、仿真优化和结构分析。此外，我正在 BSH 家电公司开展毕业设计课题，开发一套机器人辅助的全自动洗衣机测试系统，已实现超过 80% 的测试场景覆盖。我的工作结合了系统性思维与实践动手能力，擅长从理论建模到实际部署全过程的系统集成。"
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH 测试系统",
          desc: "洗衣机测试自动化 >80% 覆盖率",
          long: "本项目作为我的硕士毕业设计，旨在开发一套机器人辅助的全自动洗衣机测试系统。系统通过集成 TM14 机器人、视觉检测模块（包括模板匹配和多尺度图像金字塔算法）、自适应抓手及路径规划模块，实现了从检测洗衣程序完成标志“END”开始，到抓取湿毛巾并放入干衣框的完整自动流程。测试覆盖率达到 80% 以上，支持多种湿衣物抓取状态，并具备错误反馈与自纠正功能。整个系统适用于高频无人值守测试任务。",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        vw: {
          year: 2023,
          title: "大众虚拟工厂",
          desc: "工厂仿真与布局优化 (+20%)",
          long: "本项目作为与大众集团合作的仿真优化任务，在 ITDF（Virtuelle Fabrik）平台上开展。我的主要工作是基于 Tecnomatix Plant Simulation 构建数字孪生模型，对多个生产单元进行布局优化与瓶颈分析。通过流程逻辑建模、输送线参数调优和自动统计评估，实现产线整体效率提升超过 20%。该项目强调数据驱动的工厂规划方案，并强化了我在生产仿真与资源建模方面的实际能力。",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS 安全开门系统",
          desc: "MBSE 安全系统，防止开门事故",
          long: "本项目是我在“系统建模与分析”课程中的实际工业任务，由 BMW 提出需求。项目目标是基于 MBSE 方法为 BMW i3 建立一个“安全开门系统”原型模型（Safe Door Opening System），以预防车辆停车时乘客开门引发的事故。我负责使用 Cameo Systems Modeler 建立 SysML 模型，包括需求链追踪、系统结构图、状态机和行为流程图等。项目还包含仿真分析模块，通过参数调节评估不同环境下的风险控制效果。",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e 模块",
          desc: "无视觉抓取，–60% 干扰",
          long: "在该项目中，我独立设计了一款旋转式 UR10e 末端执行器，结合真空吸盘和被动柔性关节结构，用于无视觉系统的 Bin-Picking 操作。通过柔性模块减少夹取过程中的侧向干扰力，解决了传统机械臂在抓取不规则物体时容易滑脱的问题。该模块在无摄像头辅助的前提下，实现了稳定抓取率并降低调试复杂度，适用于复杂工业场景下的低成本部署方案。",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "本科毕业论文",
          desc: "CNC 上料机器人程序概念",
          long: "在 Anton Häring KG 进行的毕业设计项目中，我开发了一套用于 CNC 机床自动上下料的机器人程序框架。项目重点在于设计模块化的程序结构，以支持多工位兼容与碰撞规避功能。我使用 Yaskawa 工业机器人编程语言编写完整流程，并实现了系统在实际生产环境中的部署与验证。项目显著提升了上下料效率，为后续柔性制造系统奠定了基础。",
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

  // 初始化语言与主题
  let currentLang = localStorage.getItem('lang') || 'de';
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

  // 渲染所有
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

  // 渲染项目卡片
  function renderProjects(projObj) {
    console.log('📦 renderProjects()', projObj);
    projectsEl.innerHTML = '';
    Object.values(projObj)
      .sort((a, b) => b.year - a.year)
      .forEach(p => {
        let group = projectsEl.querySelector(`[data-year="${p.year}"]`);
        if (!group) {
          group = document.createElement('div');
          group.setAttribute('data-year', p.year);
          group.innerHTML = `<div class="year-label">${p.year}</div><div class="projects-row"></div>`;
          projectsEl.append(group);
        }
        const row = group.querySelector('.projects-row');

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
        const inner = flip.querySelector('.flip-inner');
        const video = flip.querySelector('video');
        video.addEventListener('click', e => e.stopPropagation());
        flip.addEventListener('click', () => {
          inner.classList.toggle('flipped');
        });
        row.append(flip);
      });
  }

  // 首次渲染
  renderAll();
});
