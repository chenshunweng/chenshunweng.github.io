// i18next 初始化
i18next.init({
  lng: "de",
  debug: false,
  resources: {
    de: {
      translation: {
        header: {
          name: "Chenshun Weng",
          tagline: "Systems Engineer | Robotik | Simulation",
        },
        about: {
          title: "Über mich",
          text:
            "Ich bin ein Ingenieur mit Fokus auf Automatisierung, Robotik und modellbasierte Systementwicklung (MBSE). Durch meine Erfahrungen bei BSH, BMW und Volkswagen verbinde ich systemisches Denken mit praktischer Umsetzungskompetenz. Mein Schwerpunkt liegt auf der Entwicklung intelligenter Testsysteme, Layoutoptimierung in der Fertigung sowie sicherheitskritischer Steuerungen.",
          cv: "📄 Lebenslauf herunterladen (PDF)",
        },
        projects: {
          title: "Projekte",
          bsh: {
            title: "Automatisiertes Testsystem bei BSH",
            desc: "Roboter‑gestütztes Waschmaschinen‑Prüfsystem, automatisiert > 80 % der Testfälle.",
            details:
              "Omron TM14 + Robotiq 2F‑85; Landmark‑Genauigkeit ± 2 mm; 300 h Dauerbetrieb, 72 % Greiferfolg, ≤ 0,5 Eingriffe / h.",
          },
          vw: {
            title: "Virtuelle Fabrik / ITDF – Volkswagen",
            desc: "Layoutoptimierung & Simulation mit Plant Simulation, Kapazität +20 %.",
            details:
              "Materialfluss‑Simulation, Bottleneck‑Analyse, Lean VSM; OEE +15 %.",
          },
          bmw: {
            title: "Safe Door Open System (BMW i3)",
            desc: "MBSE‑basiertes Sicherheitssystem gegen Türunfälle.",
            details:
              "SysML‑Architektur, 70 ms Sensorfusion, Brems‑Prototyp; Kollisionsrisiko –60 %.",
          },
          pmf: {
            title: "PMF Projekt – UR10e Endeffektor",
            desc: "Flexibler Vakuumanschluss mit 60 % weniger Störmoment.",
            details:
              "Rotationsadapter, FEM‑optimiert; 10 kg Nutzlast, +25 % Lebensdauer.",
          },
          bachelor: {
            title: "Bachelorarbeit – Automatisiertes Bestückungssystem",
            desc: "Roboterprogrammierung für Werkzeugmaschinen bei Anton Häring KG.",
            details:
              "Yaskawa GP7 + 5×4‑Palettenalgorithmus, ±0,3 mm Korrektur, Anti‑Crash‑Logik.",
          },
        },
        skills: { title: "Fähigkeiten" },
        footer: { portfolio: "Portfolio" },
      },
    },
    en: {
      translation: {
        header: {
          name: "Chenshun Weng",
          tagline: "Systems Engineer | Robotics | Simulation",
        },
        about: {
          title: "About Me",
          text:
            "I'm an engineer specialized in automation, robotics, and model-based systems engineering (MBSE). With experience at BSH, BMW, and Volkswagen, I bring systems thinking into practice. My expertise includes intelligent testing systems, manufacturing layout optimization, and safety-critical controllers.",
          cv: "📄 Download CV (PDF)",
        },
        projects: {
          title: "Projects",
          bsh: {
            title: "Automated Test System at BSH",
            desc: "Robot-driven test system for washing machines, >80% automated coverage.",
            details:
              "Omron TM14 + Robotiq 2F‑85; ±2 mm precision; 300 h continuous run, 72% success, ≤ 0.5 interventions/hr.",
          },
          vw: {
            title: "Virtual Factory / ITDF – Volkswagen",
            desc: "Layout simulation using Plant Simulation, throughput +20%.",
            details:
              "Material flow simulation, bottleneck analysis, Lean VSM; OEE +15%.",
          },
          bmw: {
            title: "Safe Door Open System (BMW i3)",
            desc: "MBSE‑based safety system for doors, 60% risk reduction.",
            details:
              "SysML architecture, 70ms sensor fusion, brake prototype.",
          },
          pmf: {
            title: "PMF Project – UR10e End-Effector",
            desc: "Flexible vacuum module, 60% less disturbance torque.",
            details:
              "Rotary soft adapter, FEM-optimized; 10 kg load, +25% lifetime.",
          },
          bachelor: {
            title: "Bachelor Thesis – Loading System",
            desc: "Robotic programming for CNC loading/unloading.",
            details:
              "Yaskawa GP7, virtual pallet logic, ±0.3 mm correction, collision logic.",
          },
        },
        skills: { title: "Skills" },
        footer: { portfolio: "Portfolio" },
      },
    },
    zh: {
      translation: {
        header: {
          name: "翁陈顺",
          tagline: "系统工程师 | 机器人 | 仿真",
        },
        about: {
          title: "关于我",
          text:
            "我是一名专注于自动化、机器人及 MBSE 的工程师。曾在 BSH、宝马和大众工作，擅长智能测试系统、布局优化与安全控制开发。",
          cv: "📄 下载简历 (PDF)",
        },
        projects: {
          title: "项目",
          bsh: {
            title: "BSH 自动测试系统",
            desc: "机器人洗衣机测试平台，自动覆盖超过 80% 用例。",
            details:
              "TM14 + Robotiq 抓手；±2 mm 精度；300 小时运行，72% 成功率。",
          },
          vw: {
            title: "虚拟工厂 / ITDF – 大众",
            desc: "布局优化与仿真，产能提升 20%。",
            details:
              "流程仿真、瓶颈分析、精益 VSM；综合效率 +15%。",
          },
          bmw: {
            title: "BMW 安全开门系统",
            desc: "基于 MBSE 的车门碰撞防护方案。",
            details:
              "SysML 模型，传感融合 70ms，风险降低 60%。",
          },
          pmf: {
            title: "PMF 项目 – UR10e",
            desc: "柔性真空旋转接口，减少 60% 干扰力矩。",
            details:
              "中空轴结构 + FEM 优化，10 kg 负载，寿命提升 25%。",
          },
          bachelor: {
            title: "本科毕业论文 – 自动上下料",
            desc: "CNC 加工单元的自动上下料系统。",
            details:
              "Yaskawa GP7，虚拟托盘逻辑，±0.3 mm 校准，防撞算法。",
          },
        },
        skills: { title: "技能" },
        footer: { portfolio: "作品集" },
      },
    },
  },
}).then(() => {
  // 初始化文本内容
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = i18next.t(el.dataset.i18n);
  });

  // 语言切换
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      i18next.changeLanguage(lang, () => {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          el.textContent = i18next.t(el.dataset.i18n);
        });
      });
    });
  });

  // 弹窗逻辑
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".modal-close");

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.key;
      const project = i18next.t(`projects.${key}`, { returnObjects: true });

      // 视频路径自动推断（YouTube 链接 or 本地视频）
      let video = "";
      if (key === "bmw") {
        video = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/dDNO7qBxwFA" frameborder="0" allowfullscreen></iframe>`;
      } else if (key === "vw") {
        video = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/-PeLRJ_0H5c" frameborder="0" allowfullscreen></iframe>`;
      } else if (["pmf", "bachelor"].includes(key)) {
        video = `<video controls><source src="${key}_video.mp4" type="video/mp4"></video>`;
      }

      modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.details}</p>
        ${video}
      `;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // 深浅色切换
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", () => {
    const root = document.documentElement;
    const isLight = root.getAttribute("data-theme") === "light";
    root.setAttribute("data-theme", isLight ? "dark" : "light");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });
});
