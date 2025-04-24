// app.js
console.log('🛠 app.js start');
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOMContentLoaded');

  const I18N = {
  zh: {
    projects: {
      bsh: {
        year: 2025,
        title: "BSH 洗衣机测试系统",
        desc: "洗衣机测试自动化 >80% 覆盖率",
        myRole: "负责系统架构设计、控制流程构建、路径规划逻辑开发及抓手模块集成，完成视觉识别功能与测试平台机械结构设计。",
        tools: ["TMflow", "Omron TM14", "路径规划算法", "Landmark 校准系统"],
        impact: "系统在标准洗衣流程中实现衣物的识别和抓取，测试覆盖率超过 80%；具备反馈调整机制与抓取错误恢复能力，支持全天候连续运行，显著降低人工干预频率。",
        long: "开发了一套基于协作机器人的洗衣机测试自动化系统，覆盖从洗衣程序结束识别、衣物状态检测、路径规划到湿衣抓取与干衣补充的全流程。系统支持连续运行与自动化自纠正，适用于高负载无人值守测试场景。"
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS 安全开门系统",
        desc: "MBSE 安全系统，防止开门事故",
        myRole: "负责系统建模流程，构建 SysML 需求图、功能图与行为逻辑模型；参与系统原型搭建，完成硬件控制逻辑与行为模型联动调试。",
        tools: ["Cameo SysML", "3DEXPERIENCE", "SysML", "Arduino", "FDMU"],
        impact: "系统具备基于交通情景识别的智能预警能力，能够有效判断门控风险并延迟开门，原型系统在五类复杂情境测试中预警准确率达到 85%。",
        long: "设计并实现了一套基于 MBSE 的智能车门安全系统原型，用于应对城市交通中因盲目开门引发的骑行者碰撞事故。"
      },
      vw: {
        year: 2023,
        title: "VW / ITDF 虚拟工厂",
        desc: "工厂仿真与布局优化（+20% 效率提升）",
        myRole: "负责三条产线的模型搭建与优化流程设计，包括生产节拍分析、流程瓶颈识别、资源配置仿真以及布局可视化优化。",
        tools: ["Tecnomatix Plant Simulation", "价值流图分析", "节拍测算工具", "资源调度脚本"],
        impact: "优化后的布局节拍效率提升超过 20%，显著降低工位等待时间与人工干预需求，完成仿真验证并形成结构化汇报材料。",
        long: "基于 Plant Simulation 构建数字孪生模型，进行产能仿真与瓶颈优化，实现多工位节拍协调。"
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e 模块",
        desc: "无视觉抓取系统，–60% 干扰力",
        myRole: "负责抓手结构设计、柔性关节建模、干扰力测试方案制定与实验平台搭建，完成多轮设计迭代与性能优化。",
        tools: ["UR10e", "FUSION 360", "3D 打印原型机测试", "力传感器", "Formhand 真空吸盘抓手"],
        impact: "干扰力矩降低 60%，吸附稳定性通过验证，结构支持模块化复用。",
        long: "构建 UR10e 无视觉抓取系统，结合旋转与柔性结构，适用于柔性分拣场景。"
      },
      bach: {
        year: 2022,
        title: "本科毕业项目 – CNC 自动上下料系统",
        desc: "CNC 上料自动化 +模块化机器人程序",
        myRole: "负责编写完整控制程序逻辑，优化原先的算法设计，设计模块化结构与流程状态图。",
        tools: ["Yaskawa", "碰撞规避算法", "状态图建模"],
        impact: "节拍缩短 25%，支持快速部署与复用，结构标准化程度高。",
        long: "构建模块化机器人上下料控制程序，部署于 CNC 产线，提升自动化效率。"
      }
    }
  },

  en: {
    projects: {
      bsh: {
        year: 2025,
        title: "BSH Washing Machine Testing System",
        desc: "Washing machine test automation with >80% coverage",
        myRole: "Designed the system architecture, developed control flows and path planning logic, integrated the gripper module and vision recognition into the test platform.",
        tools: ["TMflow", "Omron TM14", "Path planning algorithm", "Landmark calibration system"],
        impact: "Enabled reliable detection and grasping of laundry in standard wash cycles with over 80% coverage. Equipped with feedback adjustment and failure recovery mechanisms to ensure 24/7 autonomous operation with minimal manual intervention.",
        long: "Developed a collaborative robot-based automation system for washing machine testing. Covered end-of-cycle recognition, laundry state detection, path planning, and both wet laundry extraction and dry item supplementation. The system supports continuous operation and self-correction, suitable for high-load unattended testing scenarios."
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS Safe Door Opening System",
        desc: "MBSE-based safety system for door accident prevention",
        myRole: "Led the system modeling process, created SysML requirement, function, and behavior diagrams; participated in prototype implementation and integrated hardware control logic with behavior models.",
        tools: ["Cameo SysML", "3DEXPERIENCE", "SysML", "Arduino", "FDMU"],
        impact: "The system detects traffic scenarios and provides intelligent door control warnings. Achieved 85% alert accuracy in five complex traffic simulation scenarios.",
        long: "Designed and implemented a model-based intelligent door safety prototype for urban cycling environments. The system was built using MBSE methods and integrates scenario simulation with hardware prototype validation."
      },
      vw: {
        year: 2023,
        title: "VW / ITDF Virtual Factory",
        desc: "Factory simulation and layout optimization (+20% efficiency)",
        myRole: "Built simulation models for three production lines and optimized flows through cycle time analysis, bottleneck identification, resource simulation, and layout visualization.",
        tools: ["Tecnomatix Plant Simulation", "Value stream mapping", "Cycle time calculation tools", "Resource scheduling scripts"],
        impact: "Improved layout efficiency by over 20%, significantly reduced workstation delays and manual interventions, and delivered simulation-backed restructuring reports.",
        long: "Constructed digital twin models using Plant Simulation to analyze throughput capacity and resolve production bottlenecks, enabling synchronized cycle times across multiple stations."
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e Gripper Module",
        desc: "Vision-free grasping system, –60% torque disturbance",
        myRole: "Responsible for gripper structure design, flexible joint modeling, test bench construction, and execution of mechanical interference tests across multiple design iterations.",
        tools: ["UR10e", "Fusion 360", "3D-printed prototype testing", "Force sensor", "Formhand vacuum gripper"],
        impact: "Reduced torque disturbance by 60%, verified stable adhesion, and enabled modular design for flexible reusability.",
        long: "Designed a vision-independent grasping system based on the UR10e robot, combining rotary and flexible components. Suitable for dynamic object handling in flexible sorting applications."
      },
      bach: {
        year: 2022,
        title: "Bachelor Project – CNC Automation System",
        desc: "Robotic CNC loading automation with modular program structure",
        myRole: "Developed the complete control logic, optimized algorithm structure, and designed modular architecture and flow diagrams.",
        tools: ["Yaskawa", "Collision avoidance algorithm", "State diagram modeling"],
        impact: "Reduced loading cycle time by 25%. The program structure supports rapid deployment, reuse, and high modular standardization.",
        long: "Built a modular robot loading and unloading control system for CNC applications. Successfully deployed on production lines to enhance automation throughput."
      }
    }
  },

  de: {
    projects: {
      bsh: {
        year: 2025,
        title: "BSH Waschmaschinen-Testsystem",
        desc: "Automatisierung mit >80% Testabdeckung",
        myRole: "Entwicklung der Systemarchitektur, Erstellung der Steuerungslogik und Pfadplanung, Integration von Greifmodul und Bilderkennung in die Testplattform.",
        tools: ["TMflow", "Omron TM14", "Pfadplanungsalgorithmus", "Landmark-Kalibriersystem"],
        impact: "Ermöglicht zuverlässige Erkennung und Greifen von Wäsche im Standardwaschprogramm mit über 80% Abdeckung. Verfügt über Mechanismen zur Fehlerkorrektur und Rückmeldung für kontinuierlichen 24/7-Betrieb mit minimalem Personaleinsatz.",
        long: "Ein kollaboratives Robotersystem zur automatisierten Prüfung von Waschmaschinen. Umfasst Programmende-Erkennung, Zustandserfassung, Pfadplanung sowie Nasswäsche- und Trockenwäsche-Handhabung. Geeignet für hochfrequente Testszenarien ohne Bedienpersonal."
      },
      bmw: {
        year: 2024,
        title: "BMW SDOS Sicherheits-Türsystem",
        desc: "MBSE-Sicherheitssystem zur Unfallvermeidung beim Türöffnen",
        myRole: "Modellierung des Gesamtsystems mittels SysML, Erstellung von Anforderungs-, Funktions- und Verhaltensmodellen; Aufbau eines Hardware-Prototyps mit modellbasierter Steuerung.",
        tools: ["Cameo SysML", "3DEXPERIENCE", "SysML", "Arduino", "FDMU"],
        impact: "System erkennt Verkehrssituationen und gibt intelligente Tür-Warnsignale. In 5 Szenarientests wurde eine Vorhersagegenauigkeit von 85% erreicht.",
        long: "Entwicklung eines intelligenten Sicherheitssystems zur Vermeidung von Unfällen mit Radfahrern im Stadtverkehr. Umsetzung erfolgte auf Basis eines modellbasierten Systementwicklungsansatzes (MBSE)."
      },
      vw: {
        year: 2023,
        title: "VW / ITDF Virtuelle Fabrik",
        desc: "Werkslayout-Optimierung und Simulation (+20% Effizienz)",
        myRole: "Erstellung von Simulationsmodellen für drei Produktionslinien, Analyse von Zykluszeiten, Engpässen und Ressourcen, Optimierung der Layoutstruktur.",
        tools: ["Tecnomatix Plant Simulation", "Wertstromanalyse", "Taktzeitberechnung", "Skriptbasierte Ressourcenplanung"],
        impact: "Produktionsleistung um über 20% gesteigert, Wartezeiten reduziert, fundierte Entscheidungsgrundlage durch Simulationsergebnisse geschaffen.",
        long: "Digitale Zwillingsmodelle mit Plant Simulation erstellt, um Fertigungsengpässe zu analysieren und Taktzeitabstimmungen zwischen Stationen zu optimieren."
      },
      pmf: {
        year: 2024,
        title: "PMF UR10e Greifermodul",
        desc: "Visionsloses Greifsystem, –60% Störmoment",
        myRole: "Konstruktion des Greifers mit flexiblen Gelenken, Aufbau eines Prüfstands, Durchführung mehrerer Design- und Belastungstests.",
        tools: ["UR10e", "Fusion 360", "3D-Druck-Prototyp", "Kraftsensor", "Formhand Vakuumgreifer"],
        impact: "Störmoment um 60% reduziert, zuverlässige Haftung durch Tests bestätigt, modulare Wiederverwendbarkeit gewährleistet.",
        long: "Entwicklung eines UR10e-basierten Greifsystems ohne visuelle Unterstützung. Ideal für flexible Sortieranwendungen mit wechselnden Objektformen."
      },
      bach: {
        year: 2022,
        title: "Bachelorarbeit – CNC-Automatisierung",
        desc: "Modulare Robotersteuerung für CNC-Beschickung",
        myRole: "Programmierung der vollständigen Steuerlogik, Optimierung der Algorithmen und Erstellung modularer Ablauf- und Zustandsdiagramme.",
        tools: ["Yaskawa", "Kollisionsvermeidungsalgorithmus", "Zustandsdiagramm-Modellierung"],
        impact: "Taktzeit um 25% reduziert, standardisierte Struktur ermöglicht schnelle Wiederverwendung und Einsatz.",
        long: "Entwicklung einer modularen Robotersteuerung zur automatisierten Beladung und Entladung von CNC-Maschinen. Im Produktionsumfeld erfolgreich implementiert."
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

  // 初始化
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
    const data = I18N[currentLang];
    headerName.textContent    = data.header.name;
    headerTagline.textContent = data.header.tagline;
    cvLink.textContent        = data.header.cvText;
    aboutTitle.textContent    = data.about.title;
    aboutText.textContent     = data.about.text;
    renderProjects(data.projects);
  }

  // 渲染项目
  function renderProjects(projObj) {
    projectsEl.innerHTML = '';
    Object.values(projObj)
      .sort((a,b) => b.year - a.year)
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
              <p class="role"><strong>Meine Rolle:</strong> ${p.myRole}</p>
              <p class="impact"><strong>Ergebnis:</strong> ${p.impact}</p>
              <p><strong>Werkzeuge:</strong></p>
              <ul class="tools-list">
                ${p.tools.map(t => `<li>${t}</li>`).join('')}
              </ul>
              <p class="long">${p.long}</p>
              <video src="${p.video}" controls></video>
            </div>
          </div>
        `;
        const inner = flip.querySelector('.flip-inner');
        const vid   = flip.querySelector('video');
        vid.addEventListener('click', e => e.stopPropagation());
        flip.addEventListener('click', () => inner.classList.toggle('flipped'));
        row.append(flip);
      });
  }

  // 首次渲染
  renderAll();
});
