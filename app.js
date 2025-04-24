i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    de: {
      translation: {
        header: {
          name: "Chenshun Weng",
          tagline: "Systems Engineer | Robotik | Simulation"
        },
        about: {
          title: "Über mich",
          text: "Zuverlässiger Ingenieur mit Schwerpunkt Automatisierung, Robotik und modellbasierte Systementwicklung (MBSE). Durch Erfahrungen bei BSH, BMW und Volkswagen verbinde ich systemisches Denken mit praktischer Umsetzungskompetenz.",
          cv: "📄 Lebenslauf herunterladen (PDF)"
        },
        projects: {
          title: "Projekte",
          bsh: {
            title: "BSH Testsystem",
            desc: "Waschmaschinen‑Testautomation >80 %",
            long: "Im Praktikum bei BSH Hausgeräte: Entwicklung eines Robotik-Systems zur vollautomatischen Prüfung von Waschmaschinen mit Landmark-Navigation, Omron TM14 + Robotiq 2F‑85; Dauerbetrieb 300h, ±2mm Genauigkeit, <0.5 Eingriffe/h."
          },
          bmw: {
            title: "BMW SDOS",
            desc: "MBSE‑Sicherheitssystem gegen Türunfälle",
            long: "Entwicklung eines Safe Door Opening Systems für BMW i3 mithilfe von MBSE, SysML, Sensorfusion (70ms), Bremsprototyp, –60% Kollisionsrisiko."
          },
          pmf: {
            title: "PMF UR10e Modul",
            desc: "Kameraloses Bin‑Picking, –60 % Störung",
            long: "CamLessPick: Entwicklung eines UR10e-Drehmoduls mit flexibler Vakuumanbindung zur Reduktion von Störmomenten ohne Kamera."
          },
          itdf: {
            title: "Virtuelle Fabrik (VW)",
            desc: "Digital Factory & Layout-Optimierung (+20 %)",
            long: "Optimierung der Volkswagen Motorlinie mit Tecnomatix Plant Simulation, Layout‑Effizienz +20 %, Taktzeit –30 %."
          },
          bach: {
            title: "Bachelorarbeit",
            desc: "Robotik-Konzept für CNC‑Beladung",
            long: "Entwicklung eines modularen Roboter‑Programmierkonzepts für Werkzeugmaschinen (Anton Häring KG), inkl. automatischer Kollisionsvermeidung."
          }
        }
      }
    },
    en: {
      translation: {
        header: {
          name: "Chenshun Weng",
          tagline: "Systems Engineer | Robotics | Simulation"
        },
        about: {
          title: "About Me",
          text: "Reliable engineer specializing in automation, robotics, and model-based systems engineering (MBSE). With experience at BSH, BMW, and Volkswagen, I combine systemic thinking with hands-on implementation skills.",
          cv: "📄 Download CV (PDF)"
        },
        projects: {
          title: "Projects",
          bsh: {
            title: "BSH Test System",
            desc: "Washing machine test automation >80%",
            long: "During internship at BSH: Developed a robotic system for fully automated washing machine testing using landmark navigation; Omron TM14 + Robotiq 2F‑85; 300h operation, ±2mm accuracy, <0.5 interventions/h."
          },
          bmw: {
            title: "BMW SDOS",
            desc: "MBSE-based safety system for doors",
            long: "Safe Door Opening System for BMW i3 using MBSE and SysML; 70ms sensor fusion, emergency braking, –60% collision risk."
          },
          pmf: {
            title: "PMF UR10e Module",
            desc: "Camera-free bin picking, –60% interference",
            long: "CamLessPick: Designed a custom UR10e rotary module with flexible vacuum connection to reduce force disturbances without vision system."
          },
          itdf: {
            title: "VW Virtual Factory",
            desc: "Digital factory & layout boost (+20%)",
            long: "Optimized Volkswagen engine line with Tecnomatix Plant Simulation, achieving +20% capacity and –30% cycle time."
          },
          bach: {
            title: "Bachelor Thesis",
            desc: "Robotic concept for CNC loading",
            long: "Modular robot programming concept for automated CNC loading/unloading at Anton Häring KG, including collision avoidance logic."
          }
        }
      }
    },
    zh: {
      translation: {
        header: {
          name: "翁陈顺",
          tagline: "系统工程师｜机器人｜仿真"
        },
        about: {
          title: "关于我",
          text: "一名专注于自动化、机器人和模型驱动系统开发（MBSE）的工程师。在 BSH、BMW 和大众的经历让我将系统思维与实践能力结合。",
          cv: "📄 下载简历（PDF）"
        },
        projects: {
          title: "项目",
          bsh: {
            title: "BSH 自动测试系统",
            desc: "洗衣机测试自动化，覆盖率超 80%",
            long: "在 BSH 实习期间开发了基于机器人和 Landmark 的自动化洗衣机测试系统，使用 Omron TM14 和 Robotiq 2F‑85；持续运行 300 小时，精度 ±2mm，人工干预 <0.5 次/小时。"
          },
          bmw: {
            title: "BMW 安全开门系统",
            desc: "基于 MBSE 的防撞门安全系统",
            long: "为 BMW i3 开发 Safe Door Opening System，采用 MBSE 方法，70ms 传感器融合，急停制动，降低碰撞风险 60%。"
          },
          pmf: {
            title: "PMF 项目：UR10e 末端模块",
            desc: "无相机 Bin Picking，干扰降低 60%",
            long: "CamLessPick：设计 UR10e 自定义旋转模块，带柔性吸附系统，实现无需视觉的高鲁棒性取放。"
          },
          itdf: {
            title: "ITDF / 大众虚拟工厂",
            desc: "数字工厂仿真，产线效率提升",
            long: "使用 Tecnomatix 工具对大众发动机产线进行建模与优化，实现 +20% 产能，–30% 节拍时间。"
          },
          bach: {
            title: "本科毕业设计",
            desc: "CNC 上料机器人控制框架",
            long: "在 Anton Häring KG 完成的毕业课题，开发了模块化机器人程序结构，实现多工位兼容与避障控制。"
          }
        }
      }
    }
  }
}, function(err, t) {
  renderTexts();
});
// 语言切换
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, () => {
        renderTexts();
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

      // 判断是否有本地视频文件
      const hasVideo = ['bsh', 'vw', 'bmw', 'pmf', 'itdf', 'bach'].includes(key);
      const videoMap = {
        vw: "vw_video.mp4",
        bmw: "bmw_video.mp4",
        pmf: "pmf_video.mp4",
        itdf: "itdf_video.mp4",
        bach: "bachelor_video.mp4"
      };

      let videoHTML = "";
      if (videoMap[key]) {
        videoHTML = `
          <video controls style="width: 100%; border-radius: 10px; margin-top: 20px;">
            <source src="assets/videos/${videoMap[key]}" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        `;
      }

      modalBody.innerHTML = `
        <h2>${proj.title}</h2>
        <p style="margin-top: 10px;">${proj.long}</p>
        ${videoHTML}
      `;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // 暗黑模式切换
  const themeBtn = document.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
});

// 文本渲染函数
function renderTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });
}
