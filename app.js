// i18next 初始化
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    /* ===================  Deutsch  =================== */
    de: {
      translation: {
        header: { name: "Chenshun Weng", tagline: "Systems Engineer | Robotik | Simulation" },
        about: {
          title: "Über mich",
          text: "Ich bin ein Ingenieur mit Fokus auf Automatisierung, Robotik und modellbasierte Systementwicklung (MBSE). Durch meine Erfahrungen bei BSH, BMW und Volkswagen verbinde ich systemisches Denken mit praktischer Umsetzungskompetenz. Mein Schwerpunkt liegt auf der Entwicklung intelligenter Testsysteme, Layoutoptimierung in der Fertigung sowie sicherheitskritischer Steuerungen.",
          cv: "📄 Lebenslauf herunterladen (PDF)"
        },
        projects: {
          title: "Projekte",
          bsh: {
            title: "Automatisiertes Testsystem bei BSH",
            desc: "Roboter‑gestütztes Waschmaschinen‑Prüfsystem, automatisiert > 80 % der Testfälle. Vision bestimmt Greifpunkte in Echtzeit (keine Textil‑Klassifikation).",
            details: "Omron TM14 + Robotiq 2F‑85; Landmark‑Genauigkeit ± 2 mm; 300 h Dauerbetrieb, 72 % Greiferfolg, ≤ 0,5 Eingriffe / h."
          },
          vw: {
            title: "Virtuelle Fabrik bei Volkswagen",
            desc: "Layoutoptimierung mit Tecnomatix Plant Simulation. Kapazität +20 %, Taktzeit –30 %.",
            details: "Materialfluss‑Simulation, Bottleneck‑Analyse, Lean VSM; OEE +15 %."
          },
          bmw: {
            title: "Safe Door Open System (BMW i3)",
            desc: "MBSE‑basiertes Sicherheitssystem gegen Dooring‑Unfälle, Reaktionszeit < 0,3 s.",
            details: "SysML‑Architektur, Sensorfusion 70 ms, Brems‑Prototyp; Kollisionsrisiko –60 %."
          },
          pmf: {
            title: "PMF Projekt – UR10e Endeffektor",
            desc: "Leichtbau‑Rotations‑Schlauchadapter für UR10e‑Vakuumgreifer; 60 % weniger Störmoment.",
            details: "Hohlwelle + Drehhülse, FEM‑Optimierung; 10 kg Nutzlast, Lebensdauer +25 %."
          },
          itdf: {
            title: "ITDF Projekt – Volkswagen",
            desc: "Virtuelle Prozess‑ & Layoutplanung, Effizienz +18 %.",
            details: "Plant Simulation‑Modelle, Value‑Stream‑Analyse, Szenario‑ROI."
          },
          bachelor: {
            title: "Bachelorarbeit – Automatisiertes Bestückungssystem",
            desc: "Modulares Yaskawa‑GP7 Lade‑/Entladeprogramm, Zyklus –30 %.",
            details: "5×4‑Palettenalgorithmus, Online‑Korrektur ± 0,3 mm, Anti‑Crash‑Logik."
          }
        },
        skills:{ title:"Fähigkeiten" },
        footer:{ portfolio:"Portfolio" }
      }
    },

    /* ===================  English  =================== */
    en: {
      translation: {
        header: { name: "Chenshun Weng", tagline: "Systems Engineer | Robotics | Simulation" },
        about: {
          title: "About Me",
          text: "I am an engineer focusing on automation, robotics and model‑based systems engineering (MBSE). With experiences at BSH, BMW and Volkswagen, I combine systemic thinking with practical implementation skills. My expertise lies in intelligent testing systems, layout optimization in manufacturing, and safety‑critical controls.",
          cv: "📄 Download CV (PDF)"
        },
        projects: {
          title: "Projects",
          bsh: {
            title: "Automated Test System at BSH",
            desc: "Robot‑driven washing‑machine test system, > 80 % coverage; vision predicts grasp points in real time (no fabric classification).",
            details: "Omron TM14 & Robotiq 2F‑85; ±2 mm landmark repeatability; 300 h continuous run, 72 % success, ≤ 0.5 interventions/hr."
          },
          vw: {
            title: "Virtual Factory at Volkswagen",
            desc: "Layout optimization with Tecnomatix Plant Simulation. +20 % throughput, −30 % cycle time.",
            details: "Flow simulation, bottleneck scan, Lean VSM; OEE +15 %."
          },
          bmw: {
            title: "Safe Door Open System (BMW i3)",
            desc: "MBSE‑driven door safety; < 0.3 s reaction, 60 % risk reduction.",
            details: "SysML architecture, 70 ms sensor fusion, brake prototype."
          },
          pmf: {
            title: "PMF Project – UR10e End‑Effector",
            desc: "Lightweight rotary hose adapter for UR10e vacuum gripper; 60 % torque reduction on FT sensor.",
            details: "Hollow‑shaft + sleeve, FEM‑optimised; supports 10 kg payload, +25 % life."
          },
          itdf: {
            title: "ITDF Project – Volkswagen",
            desc: "Virtual process & layout planning; +18 % efficiency.",
            details: "Plant Simulation models, VSM, scenario‑ROI analysis."
          },
          bachelor: {
            title: "Bachelor Thesis – Automated Loading System",
            desc: "Modular Yaskawa GP7 loading/unloading program; −30 % cycle time.",
            details: "5×4 virtual‑pallet algorithm, ±0.3 mm correction, anti‑crash logic."
          }
        },
        skills:{ title:"Skills" },
        footer:{ portfolio:"Portfolio" }
      }
    },

    /* ===================  中文  =================== */
    zh: {
      translation: {
        header: { name: "翁陈顺", tagline: "系统工程师 | 机器人 | 仿真" },
        about: {
          title: "关于我",
          text: "我是一名专注于自动化、机器人及模型驱动系统工程 (MBSE) 的工程师。在博西、宝马和大众的经历使我将系统思维与实践落地能力结合。我的专业领域包括智能测试系统、制造布局优化以及安全关键控制。",
          cv: "📄 下载简历 (PDF)"
        },
        projects: {
          title: "项目",
          bsh: {
            title: "BSH 自动化测试系统",
            desc: "机器人洗衣机耐久测试系统，自动覆盖 > 80 % 测试用例；视觉模块实时预测抓取点（不做衣物材质分类）。",
            details: "Omron TM14 + Robotiq 2F‑85；定位精度 ± 2 mm；连续运行 300 h，抓取成功率 72 %，人工干预 ≤ 0.5 次/小时。"
          },
          vw: {
            title: "大众 虚拟工厂",
            desc: "使用 Tecnomatix Plant Simulation 进行布局优化，产能提升 20%，节拍减少 30%。",
            details: "物料流仿真、瓶颈分析、Lean VSM；设备综合效率提高 15%。"
          },
          bmw: {
            title: "安全开门系统 (BMW i3)",
            desc: "基于 MBSE 的安全开门系统，反应时间 < 0.3 s，碰撞风险降低 60 %。",
            details: "SysML 架构，传感融合 70 ms，门刹原型。"
          },
          pmf: {
            title: "PMF 项目 – UR10e 末端执行器",
            desc: "UR10e 真空抓手轻量化旋转软管接口，测力平台干扰力矩降低 60 %。",
            details: "中空轴 + 旋转套筒，FEM 优化；支持 10 kg 负载，寿命提升 25 %。"
          },
          itdf: {
            title: "ITDF 项目 – 大众",
            desc: "虚拟工厂规划与仿真，效率提升 18 %。",
            details: "Plant Simulation 模型，价值流分析，ROI 评估。"
          },
          bachelor: {
            title: "本科论文 – 自动上下料系统",
            desc: "Yaskawa GP7 上下料模块化程序框架，节拍缩短 30 %。",
            details: "5×4 虚拟托盘算法，在线修正 ± 0.3 mm，防碰撞逻辑。"
          }
        },
        skills:{ title:"技能" },
        footer:{ portfolio:"作品集" }
      }
    }
  }
}, function(err, t) {
  // 渲染页面
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  // 语言切换
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          el.textContent = i18next.t(el.getAttribute('data-i18n'));
        });
      });
    });
  });

  // 模态框逻辑
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.key;
      const proj = i18next.t(`projects.${key}`, { returnObjects: true });
      modalBody.innerHTML = `
        <h2>${proj.title}</h2>
        <p>${proj.details}</p>
      `;
      modal.style.display = 'flex';
    });
  });
  closeBtn.addEventListener('click', ()=> modal.style.display='none');
  modal.addEventListener('click', e => {
    if(e.target === modal) modal.style.display='none';
  });

  // 主题切换
  const themeBtn = document.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
});
