// app.js

// =======================
// i18n 初始化
// =======================
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
            desc: "Waschmaschinen-Testautomation >80 %",
            long: "Im Praktikum bei BSH Hausgeräte: Entwicklung eines Robotik-Systems zur vollautomatischen Prüfung von Waschmaschinen mit Landmark-Kalibrierung, Omron TM14 + Robotiq 2F-85, Genauigkeit ± 2 mm, 300 h Dauerbetrieb, ≤ 0.5 Eingriffe/h."
          },
          bmw: {
            title: "BMW SDOS",
            desc: "MBSE Sicherheitssystem",
            long: "Entwicklung eines Safe Door Opening Systems für BMW i3 mithilfe von MBSE, SysML, Sensorfusion (70ms), Bremsprototyp, –60% Kollisionsrisiko."
          },
          pmf: {
            title: "PMF Modul",
            desc: "Rotationsmodul für UR10e",
            long: "CamLessPick: Entwicklung eines UR10e-Drehmoduls mit flexibler Vakuumanbindung zur Reduktion von Störmomenten ohne Kamera."
          },
          itdf: {
            title: "Virtuelle Fabrik (VW)",
            desc: "Digital Factory & Layout-Optimierung (+20 %)",
            long: "Optimierung der Volkswagen Motorlinie mit Tecnomatix Plant Simulation, Layout-Effizienz +20 %, Taktzeit –30 %."
          },
          bach: {
            title: "Bachelorarbeit",
            desc: "CNC-Roboterbeladung",
            long: "Konzept zur vollautomatischen Beladung/Entladung von Werkzeugmaschinen bei Anton Häring KG mit modularer Roboterarchitektur."
          }
        }
      }
    },
    // 更多语言可按相同结构添加 en / zh
  }
}, function(err, t) {
  updateTexts();
});

// =======================
// 多语言切换
// =======================
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    i18next.changeLanguage(btn.dataset.lang, updateTexts);
  });
});

// =======================
// 渲染翻译文本内容
// =======================
function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = i18next.t(key);
  });
}

// =======================
// 弹窗逻辑
// =======================
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const projectKey = card.dataset.project;
    const modal = document.querySelector('#projectModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDesc = modal.querySelector('.modal-desc');
    const modalVideo = modal.querySelector('video');

    modalTitle.innerHTML = i18next.t(`projects.${projectKey}.title`);
    modalDesc.innerHTML = i18next.t(`projects.${projectKey}.long`);
    if (modalVideo) {
      modalVideo.src = `assets/videos/${projectKey}_video.mp4`;
      modalVideo.load();
    }

    modal.style.display = 'flex';
  });
});

document.querySelector('#modalClose').addEventListener('click', () => {
  const modal = document.querySelector('#projectModal');
  const modalVideo = modal.querySelector('video');
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
  modal.style.display = 'none';
});

// =======================
// 暗黑模式切换
// =======================
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
});
