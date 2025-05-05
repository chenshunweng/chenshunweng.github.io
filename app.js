// 确保脚本加载
console.log('🛠 app.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOM ready');

  // —— 1. 国际化数据 I18N —— 
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
          myRole: "Architektur & Steuerungsdesign, Pfadplanung, Greifer- und Bilderkennung.",
          tools: ["TMflow","Omron TM14","Pfadplanung","Landmark-Kalibrierung"],
          impact:"Über 80 % Abdeckung bei 24/7-Betrieb mit minimalem Personaleinsatz.",
          long:"Entwicklung eines robotergestützten Systems zur automatisierten Prüfung von Waschmaschinen. Integration von Vision-Systemen zur Erkennung von Endzuständen, modularer Teststeuerung und automatischer Pfadplanung.",
          cover:"assets/images/bsh_project.png",
          video:"assets/videos/bsh_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtuelle Fabrik",
          desc: "Layout-Optimierung (+20 % Effizienz)",
          myRole: "Digitaler Zwilling, Taktzeit-Analyse, Engpassidentifikation.",
          tools:["Plant Simulation","Wertstromanalyse","Ressourcenskripte"],
          impact:"Effizienzsteigerung > 20 %, Fundierung durch Simulationsergebnisse.",
          long:"Optimierung der Fertigungslayouts bei Volkswagen mithilfe von Tecnomatix Plant Simulation. Entwicklung digitaler Zwillinge und Auslastungsoptimierung.",
          cover:"assets/images/ITDF_cover.jpg",
          video:"assets/videos/ITDF_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS Sicherheitssystem",
          desc: "MBSE-Türsystem gegen Unfälle",
          myRole:"SysML-Modellierung, Prototyp-Integration, Verhaltenslogik.",
          tools:["Cameo SysML","3DEXPERIENCE","Arduino"],
          impact:"85 % Vorhersagegenauigkeit in Road-Tests.",
          long:"Modellierung eines Safe Door Opening Systems für den BMW i3. Anwendung von Cameo SysML und Simulationsmodellen zur Risikoprävention.",
          cover:"assets/images/VEI_cover.jpg",
          video:"assets/videos/VEI_video.mp4"
        },
        pmf: {
          year: 2024,
          title:"PMF UR10e Modul",
          desc:"Visionsloses Bin-Picking (– 60 % Störungskraft)",
          myRole:"Greifer-Design, Krafttests, Performance-Optimierung.",
          tools:["UR10e","Fusion 360","Formhand"],
          impact:"Störeinflüsse um 60 % reduziert, modulare Wiederverwendung.",
          long:"Entwicklung eines drehbaren UR10e-Endeffektors mit passiven Gelenken und Vakuumgreifer für robuste Bin-Picking-Aufgaben.",
          cover:"assets/images/PMF_cover.jpg",
          video:"assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title:"Bachelorarbeit – CNC Automation",
          desc:"Modularer Roboter-Beladeautomat",
          myRole:"Steuerungslogik, Kollisionsvermeidung, Zustandsdiagramme.",
          tools:["Yaskawa","Skript-Algorithmen","SPS-Logik"],
          impact:"Taktzeit um 25 % reduziert, standardisierte Struktur.",
          long:"Erstellung eines modularen Programmsystems zur automatisierten Beladung und Entladung von Werkzeugmaschinen mit Kollisionsvermeidung.",
          cover:"assets/images/bachelorarbeit_cover.jpg",
          video:"assets/videos/bachelorarbeit_video.mp4"
        }
      }
    },
    en: {
      header:{
        name:"Chenshun Weng",
        tagline:"Systems Engineer | Robotics | Simulation",
        cvText:"📄 Download CV (PDF)"
      },
      about:{
        title:"About Me",
        text:"A reliable engineer specializing in automation, robotics, and model-based systems engineering (MBSE). With experience at BSH, BMW, and Volkswagen, I combine systemic thinking with hands-on expertise."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH Washing Machine Testing System",
          desc: "Washing machine test automation with >80% coverage",
          myRole: "Designed the system architecture, developed control flows and path planning logic, integrated the gripper module and vision recognition into the test platform.",
          tools: ["TMflow", "Omron TM14", "Path planning algorithm", "Landmark calibration system"],
          impact: "Enabled reliable detection and grasping of laundry in standard wash cycles with over 80% coverage. Equipped with feedback adjustment and failure recovery mechanisms to ensure 24/7 autonomous operation with minimal manual intervention.",
          long: "Developed a collaborative robot-based automation system for washing machine testing. Covered end-of-cycle recognition, laundry state detection, path planning, and both wet laundry extraction and dry item supplementation. The system supports continuous operation and self-correction, suitable for high-load unattended testing scenarios.",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS Safe Door Opening System",
          desc: "MBSE-based safety system for door accident prevention",
          myRole: "Led the system modeling process, created SysML requirement, function, and behavior diagrams; participated in prototype implementation and integrated hardware control logic with behavior models.",
          tools: ["Cameo SysML", "3DEXPERIENCE", "SysML", "Arduino", "FDMU"],
          impact: "The system detects traffic scenarios and provides intelligent door control warnings. Achieved 85% alert accuracy in five complex traffic simulation scenarios.",
          long: "Designed and implemented a model-based intelligent door safety prototype for urban cycling environments. The system was built using MBSE methods and integrates scenario simulation with hardware prototype validation.",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtual Factory",
          desc: "Factory simulation and layout optimization (+20% efficiency)",
          myRole: "Built simulation models for three production lines and optimized flows through cycle time analysis, bottleneck identification, resource simulation, and layout visualization.",
          tools: ["Tecnomatix Plant Simulation", "Value stream mapping", "Cycle time calculation tools", "Resource scheduling scripts"],
          impact: "Improved layout efficiency by over 20%, significantly reduced workstation delays and manual interventions, and delivered simulation-backed restructuring reports.",
          long: "Constructed digital twin models using Plant Simulation to analyze throughput capacity and resolve production bottlenecks, enabling synchronized cycle times across multiple stations.",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e Gripper Module",
          desc: "Vision-free grasping system, –60% torque disturbance",
          myRole: "Responsible for gripper structure design, flexible joint modeling, test bench construction, and execution of mechanical interference tests across multiple design iterations.",
          tools: ["UR10e", "Fusion 360", "3D-printed prototype testing", "Force sensor", "Formhand vacuum gripper"],
          impact: "Reduced torque disturbance by 60%, verified stable adhesion, and enabled modular design for flexible reusability.",
          long: "Designed a vision-independent grasping system based on the UR10e robot, combining rotary and flexible components. Suitable for dynamic object handling in flexible sorting applications.",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "Bachelor Project – CNC Automation System",
          desc: "Robotic CNC loading automation with modular program structure",
          myRole: "Developed the complete control logic, optimized algorithm structure, and designed modular architecture and flow diagrams.",
          tools: ["Yaskawa", "Collision avoidance algorithm", "State diagram modeling"],
          impact: "Reduced loading cycle time by 25%. The program structure supports rapid deployment, reuse, and high modular standardization.",
          long: "Built a modular robot loading and unloading control system for CNC applications. Successfully deployed on production lines to enhance automation throughput.",
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
        text: "可靠的工程师，专注于自动化、机器人及模型驱动系统工程 (MBSE)。在 BSH、BMW 和大众的经历使我兼具系统思维与实践能力。"
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH 洗衣机测试系统",
          desc: "洗衣机测试自动化 >80% 覆盖率",
          myRole: "负责系统架构设计、控制流程构建、路径规划逻辑开发及抓手模块集成，完成视觉识别功能与测试平台机械结构设计。",
          tools: ["TMflow", "Omron TM14", "路径规划算法", "Landmark 校准系统"],
          impact: "系统在标准洗衣流程中实现衣物的识别和抓取，测试覆盖率超过 80%；具备反馈调整机制与抓取错误恢复能力，支持全天候连续运行，显著降低人工干预频率。",
          long: "开发了一套基于协作机器人的洗衣机测试自动化系统，覆盖从洗衣程序结束识别、衣物状态检测、路径规划到湿衣抓取与干衣补充的全流程。系统支持连续运行与自动化自纠正，适用于高负载无人值守测试场景。",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS 安全开门系统",
          desc: "MBSE 安全系统，防止开门事故",
          myRole: "负责系统建模流程，构建 SysML 需求图、功能图与行为逻辑模型；参与系统原型搭建，完成硬件控制逻辑与行为模型联动调试。",
          tools: ["Cameo SysML", "3DEXPERIENCE", "SysML", "Arduino", "FDMU"],
          impact: "系统具备基于交通情景识别的智能预警能力，能够有效判断门控风险并延迟开门，原型系统在五类复杂情境测试中预警准确率达到 85%。",
          long: "设计并实现了一套基于 MBSE 的智能车门安全系统原型，用于应对城市交通中因盲目开门引发的骑行者碰撞事故。",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF 虚拟工厂",
          desc: "工厂仿真与布局优化（+20% 效率提升）",
          myRole: "负责三条产线的模型搭建与优化流程设计，包括生产节拍分析、流程瓶颈识别、资源配置仿真以及布局可视化优化。",
          tools: ["Tecnomatix Plant Simulation", "价值流图分析", "节拍测算工具", "资源调度脚本"],
          impact: "优化后的布局节拍效率提升超过 20%，显著降低工位等待时间与人工干预需求，完成仿真验证并形成结构化汇报材料。",
          long: "基于 Plant Simulation 构建数字孪生模型，进行产能仿真与瓶颈优化，实现多工位节拍协调。",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e 模块",
          desc: "无视觉抓取系统，–60% 干扰力",
          myRole: "负责抓手结构设计、柔性关节建模、干扰力测试方案制定与实验平台搭建，完成多轮设计迭代与性能优化。",
          tools: ["UR10e", "FUSION 360", "3D 打印原型机测试", "力传感器", "Formhand 真空吸盘抓手"],
          impact: "干扰力矩降低 60%，吸附稳定性通过验证，结构支持模块化复用。",
          long: "构建 UR10e 无视觉抓取系统，结合旋转与柔性结构，适用于柔性分拣场景。",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "本科毕业项目 – CNC 自动上下料系统",
          desc: "CNC 上料自动化 +模块化机器人程序",
          myRole: "负责编写完整控制程序逻辑，优化原先的算法设计，设计模块化结构与流程状态图。",
          tools: ["Yaskawa", "碰撞规避算法", "状态图建模"],
          impact: "节拍缩短 25%，支持快速部署与复用，结构标准化程度高。",
          long: "构建模块化机器人上下料控制程序，部署于 CNC 产线，提升自动化效率。",
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

  // Modal 引用
  const modal         = document.getElementById('modal');
  const modalClose    = document.getElementById('modal-close');
  const modalVideo    = document.getElementById('modal-video');
  const modalTitle    = document.getElementById('modal-title');
  const modalRole     = document.getElementById('modal-role');
  const modalImpact   = document.getElementById('modal-impact');
  const modalToolsLbl = document.getElementById('modal-tools-label');
  const modalTools    = document.getElementById('modal-tools');
  const modalLong     = document.getElementById('modal-long');

  // 初始化语言与主题
  let currentLang = localStorage.getItem('lang') || 'de';
  htmlEl.lang = currentLang;
  langSwitcher.value = currentLang;
  htmlEl.setAttribute('data-theme', 'light');

  // 语言切换
  langSwitcher.addEventListener('change', function (e) {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    htmlEl.lang = currentLang;
    renderAll();
  });

  // 主题切换
  themeToggle.addEventListener('click', function () {
    const next = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', next);
    themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
  });

  // 渲染函数
  function renderAll() {
    const D = I18N[currentLang];
    headerName.textContent    = D.header.name;
    headerTagline.textContent = D.header.tagline;
    cvLink.textContent        = D.header.cvText;
    aboutTitle.textContent    = D.about.title;
    aboutText.textContent     = D.about.text;
    renderProjects(D.projects);
  }

  // 渲染项目卡片
  function renderProjects(obj) {
    projectsEl.innerHTML = '';
    Object.values(obj)
      .sort((a, b) => b.year - a.year)
      .forEach(function (p) {
        // 年份分组
        let grp = projectsEl.querySelector('[data-year="' + p.year + '"]');
        if (!grp) {
          grp = document.createElement('div');
          grp.setAttribute('data-year', p.year);
          grp.innerHTML = '<div class="year-label">' + p.year + '</div><div class="projects-row"></div>';
          projectsEl.appendChild(grp);
        }
        const row = grp.querySelector('.projects-row');

        // 创建卡片
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML =
          '<img src="' + p.cover + '" alt="' + p.title + '"/>' +
          '<h3>' + p.title + '</h3>' +
          '<p>' + p.desc + '</p>';

        // 点击打开 Modal
        card.addEventListener('click', function () {
          modalVideo.src         = p.video;
          modalTitle.textContent = p.title;
          modalRole.innerHTML    = '<strong>' +
            (currentLang === 'zh' ? '我的职责：' : currentLang === 'en' ? 'Role: ' : 'Rolle: ') +
            '</strong>' + p.myRole;
          modalImpact.innerHTML  = '<strong>' +
            (currentLang === 'zh' ? '成果：' : currentLang === 'en' ? 'Impact: ' : 'Ergebnis: ') +
            '</strong>' + p.impact;
          modalToolsLbl.textContent = currentLang === 'zh' ? '工具：' : currentLang === 'en' ? 'Tools:' : 'Werkzeuge:';
          modalTools.innerHTML      = p.tools.map(function (t) { return '<li>' + t + '</li>'; }).join('');
          modalLong.textContent     = p.long;

          // 展示 Modal
          modal.style.display = 'flex';
        });

        row.appendChild(card);
      });
  }

  // 关闭 Modal：带淡出动画
  function closeModal() {
    modal.classList.add('closing');
    modal.addEventListener('animationend', function handler(e) {
      if (e.animationName === 'backdropFadeOut') {
        modal.style.display = 'none';
        modal.classList.remove('closing');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modal.removeEventListener('animationend', handler);
      }
    });
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // 首次渲染
  renderAll();
});
