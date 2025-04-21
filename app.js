// i18next 初始化
i18next.init({
  lng: 'de',
  debug: true,
  resources: {
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
          bsh: { title: "Automatisiertes Testsystem bei BSH", desc: "Roboter-gesteuertes Prüfsystem für Waschmaschinen, >80% Abdeckung." , details: "Hier kommt die ausführliche Beschreibung des BSH-Projekts..." },
          vw: { title: "Virtuelle Fabrik bei Volkswagen", desc: "Layoutoptimierung mit Tecnomatix Plant Simulation. 20% Kapazitätssteigerung.", details: "Detaillierte Infos zum VW-Projekt..." },
          bmw: { title: "Safe Door Open System (BMW i3)", desc: "MBSE-Sicherheitssystem zur Vermeidung von Türunfällen.", details: "Ausführlicher Text zum BMW-VEI Projekt..." },
          pmf: { title: "PMF Projekt – UR10e Endeffektor", desc: "Flexibles Modul zur Vakuumsteuerung, Anwendung im Dauerbetrieb.", details: "Tiefergehende Beschreibung des PMF Projekts..." },
          itdf:{ title:"ITDF Projekt – Volkswagen", desc:"Virtuelle Fabrikplanung & Simulation, 20% Effizienzsteigerung.", details:"Genauere Details zum ITDF Projekt..." },
          bachelor:{ title:"Bachelorarbeit – Automatisiertes Bestückungssystem", desc:"Roboterprogrammierung für Werkzeugmaschinen bei Anton Häring KG.", details:"Ausführliche Beschreibung der Bachelorarbeit..." }
        },
        skills:{ title:"Fähigkeiten" },
        footer:{ portfolio:"Portfolio" }
      }
    },
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
          bsh: { title: "Automated Test System at BSH", desc: "Robot‑driven washing machine test system, >80% coverage.", details: "Detailed description of the BSH project..." },
          vw: { title: "Virtual Factory at Volkswagen", desc: "Layout optimization with Tecnomatix Plant Simulation. 20% capacity increase.", details: "In‑depth info on the VW project..." },
          bmw: { title: "Safe Door Open System (BMW i3)", desc: "MBSE safety system to prevent dooring accidents.", details: "Extended description of the BMW‑VEI project..." },
          pmf: { title: "PMF Project – UR10e End‑Effector", desc: "Flexible vacuum control module, continuous operation.", details: "Detailed information on the PMF project..." },
          itdf:{ title:"ITDF Project – Volkswagen", desc:"Virtual factory planning & simulation, 20% efficiency boost.", details:"Exact details on the ITDF project..." },
          bachelor:{ title:"Bachelor Thesis – Automated Loading System", desc:"Robot programming for machine tools at Anton Häring KG.", details:"Full description of the bachelor thesis..." }
        },
        skills:{ title:"Skills" },
        footer:{ portfolio:"Portfolio" }
      }
    },
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
          bsh: { title: "BSH 自动化测试系统", desc: "基于机器人的洗衣机测试系统，>80% 覆盖率。", details: "这里是 BSH 项目的详细描述..." },
          vw: { title: "大众 虚拟工厂", desc: "使用 Tecnomatix Plant Simulation 进行布局优化，产能提升 20%。", details: "关于大众项目的深入信息..." },
          bmw: { title: "安全开门系统 (BMW i3)", desc: "基于 MBSE 的防止开门碰撞安全系统。", details: "关于 BMW VEI 项目的详细说明..." },
          pmf: { title: "PMF 项目 – UR10e 末端执行器", desc: "柔性真空控制模块，持续运行。", details: "PMF 项目的详细介绍..." },
          itdf:{ title:"ITDF 项目 – 大众", desc:"虚拟工厂规划与仿真，效率提升 20%。", details:"ITDF 项目的具体细节..." },
          bachelor:{ title:"本科论文 – 自动上下料系统", desc:"为 Anton Häring KG 设计工业机器人程序。", details:"本科论文的完整描述..." }
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
      // 构建内容
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
    themeBtn.textContent = next==='dark' ? '☀️' : '🌙';
  });
});
