// 默认主题
if (!document.documentElement.hasAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme','light');
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. i18next 资源
  const resources = {
    de: { translation: {
      "header": {
        "name":"Chenshun Weng",
        "tagline":"Systems Engineer | Robotik | Simulation"
      },
      "about": {
        "title":"Über mich",
        "text":"Ich bin ein Ingenieur mit Fokus auf Automatisierung, Robotik und modellbasierte Systementwicklung (MBSE). Durch meine Erfahrungen bei BSH, BMW und Volkswagen verbinde ich systemisches Denken mit praktischer Umsetzungskompetenz.",
        "cv":"Lebenslauf herunterladen (PDF)"
      },
      "projects": {
        "title":"Projekte",
        "bsh":{ "title":"Automatisiertes Testsystem bei BSH","desc":"Roboter-gesteuertes Prüfsystem für Waschmaschinen, >80 % Abdeckung." },
        "vw": { "title":"Virtuelle Fabrik bei Volkswagen","desc":"Layoutoptimierung mit Tecnomatix Plant Simulation. 20 % Kapazitätssteigerung." },
        "bmw":{ "title":"Safe Door Open System (BMW / VEI)","desc":"MBSE-Sicherheitssystem zur Vermeidung von Türunfällen." },
        "pmf":{ "title":"PMF Projekt – UR10e Endeffektor","desc":"Flexibles Modul zur Vakuumsteuerung, Anwendung im Dauerbetrieb." },
        "itdf":{ "title":"ITDF Projekt – Volkswagen","desc":"Virtuelle Fabrikplanung & Simulation, 20 % Effizienzsteigerung." },
        "bachelor":{ "title":"Bachelorarbeit – Automatisiertes Bestückungssystem","desc":"Roboterprogrammierung für Werkzeugmaschinen bei Anton Häring KG." }
      },
      "skills":{ "title":"Fähigkeiten" },
      "footer":{ "portfolio":"Portfolio" }
    }},
    en: { translation: {
      "header": {
        "name":"Chenshun Weng",
        "tagline":"Systems Engineer | Robotics | Simulation"
      },
      "about": {
        "title":"About me",
        "text":"I'm an engineer focused on automation, robotics and model‑based systems engineering (MBSE). My experience at BSH, BMW and Volkswagen combines systematic thinking with practical delivery skills.",
        "cv":"Download CV (PDF)"
      },
      "projects": {
        "title":"Projects",
        "bsh":{ "title":"Automated Test System at BSH","desc":"Robot‑driven washing‑machine testing with >80 % coverage." },
        "vw": { "title":"Virtual Factory at Volkswagen","desc":"Layout optimization with Tecnomatix Plant Simulation. 20 % capacity gain." },
        "bmw":{ "title":"Safe Door Open System (BMW / VEI)","desc":"MBSE safety system to prevent dooring accidents." },
        "pmf":{ "title":"PMF Project – UR10e End‑Effector","desc":"Flexible vacuum‑control module for continuous use." },
        "itdf":{ "title":"ITDF Project – Volkswagen","desc":"Virtual factory planning & simulation, 20 % efficiency gain." },
        "bachelor":{ "title":"Bachelor Thesis – Automated Loading System","desc":"Robot programming for machine‑loading at Anton Häring KG." }
      },
      "skills":{ "title":"Skills" },
      "footer":{ "portfolio":"Portfolio" }
    }},
    zh: { translation: {
      "header": {
        "name":"翁陈顺",
        "tagline":"系统工程师｜机器人｜仿真"
      },
      "about": {
        "title":"关于我",
        "text":"我是一名专注于自动化、机器人和模型驱动系统开发（MBSE）的工程师。在BSH、BMW和大众的经历，让我将系统化思维和实践落地能力结合起来。",
        "cv":"下载简历（PDF）"
      },
      "projects": {
        "title":"项目",
        "bsh":{ "title":"BSH 洗衣机自动化测试系统","desc":"机器人驱动的洗衣机测试，覆盖率超过 80 %。" },
        "vw": { "title":"大众虚拟工厂","desc":"使用Tecnomatix Plant Simulation优化布局，提升产能 20 %。" },
        "bmw":{ "title":"安全开门系统（BMW / VEI）","desc":"基于MBSE的车门安全系统，防止开门事故。" },
        "pmf":{ "title":"PMF 项目 – UR10e 真空末端","desc":"灵活的真空控制模块，用于长时间稳定运行。" },
        "itdf":{ "title":"ITDF 项目 – 大众","desc":"虚拟工厂规划与仿真，效率提升 20 %。" },
        "bachelor":{ "title":"学士论文 – 机床自动上下料系统","desc":"为Anton Häring KG设计机器人上下料程序概念。" }
      },
      "skills":{ "title":"技能" },
      "footer":{ "portfolio":"作品集" }
    }}
  };

  // 2. 初始化 i18next
  i18next.init({ lng:'de', debug:false, resources }, () => {
    updateContent();
  });

  // 3. 切换语言
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, updateContent);
    });
  });

  // 4. 切换主题
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const nxt = cur==='light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nxt);
    document.querySelector('.theme-toggle').textContent = nxt==='light' ? '🌙' : '☀️';
  });

  // 5. 更新页面所有文本
  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = i18next.t(el.getAttribute('data-i18n'));
    });
  }
});
