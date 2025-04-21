// 🌐 i18next 初始化
i18next.init({
  lng: 'de',
  debug: false,
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
          bsh: {
            title: "Automatisiertes Testsystem bei BSH",
            desc: "Roboter-Testsystem für Waschmaschinen mit über 80 % automatisierter Abdeckung.",
            details: "Omron TM14 + Robotiq 2F-85; Landmark-Genauigkeit ±2 mm; 300 h Dauerbetrieb, 72 % Greiferfolg, ≤ 0,5 Eingriffe/h."
          },
          vw: {
            title: "Virtuelle Fabrik bei Volkswagen",
            desc: "Layoutoptimierung mit Tecnomatix Plant Simulation. Kapazität +20 %, Taktzeit -30 %.",
            details: "Materialfluss-Simulation, Bottleneck-Analyse, Lean VSM; OEE +15 %."
          },
          bmw: {
            title: "Safe Door Open System (BMW / VEI)",
            desc: "MBSE-Sicherheitssystem zur Vermeidung von Türunfällen.",
            details: "SysML-Architektur, Sensorfusion 70 ms, Brems-Prototyp; Kollisionsrisiko -60 %."
          },
          pmf: {
            title: "PMF Projekt – UR10e Endeffektor",
            desc: "Flexibles Modul zur Vakuumsteuerung, Anwendung im Dauerbetrieb.",
            details: "Hohlwelle + Drehhülse, FEM-Optimierung; 10 kg Nutzlast, Lebensdauer +25 %."
          },
          itdf: {
            title: "ITDF Projekt – Volkswagen",
            desc: "Virtuelle Fabrikplanung & Simulation, 20 % Effizienzsteigerung.",
            details: "Plant Simulation-Modelle, Value-Stream-Analyse, Szenario-ROI."
          },
          bachelor: {
            title: "Bachelorarbeit – Automatisiertes Bestückungssystem",
            desc: "Roboterprogrammierung für Werkzeugmaschinen bei Anton Häring KG.",
            details: "5x4 Palettenalgorithmus, Online-Korrektur ± 0,3 mm, Anti-Crash-Logik."
          }
        },
        skills: { title: "Fähigkeiten" },
        footer: { portfolio: "Portfolio" }
      }
    }
  }
}, function () {
  renderText();
  addLanguageSwitch();
  setupModal();
  setupThemeToggle();
});

function renderText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });
}

function addLanguageSwitch() {
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, () => {
        renderText();
      });
    });
  });
}

function setupModal() {
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
        ${card.querySelector('iframe')?.outerHTML || card.querySelector('video')?.outerHTML || ''}
      `;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
}

function setupThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}
