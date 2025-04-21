翻译资源内嵌 —— 把 de/en/zh 三份 JSON 内容都粘在这里
const resources = {
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
          desc: "Waschmaschinen‑Testautomation >80 % Abdeckung",
          long: "Im Praktikum bei BSH Hausgeräte: Entwicklung eines vollautomatischen Robotik‑Systems zur Prüfung von Waschmaschinen..."
        },
        vw: {
          title: "VW Virtuelle Fabrik",
          desc: "Plant Simulation & Layout‑Optimierung (+20 %)",
          long: "Simulation und Optimierung der Motorenproduktionslinie bei Volkswagen mit Tecnomatix Plant Simulation..."
        },
        bmw: {
          title: "BMW SDOS",
          desc: "MBSE‑Sicherheitssystem gegen Türunfälle",
          long: "Entwicklung eines Safe Door Opening Systems für BMW i3 mithilfe von MBSE und Cameo SysML..."
        },
        pmf: {
          title: "PMF UR10e Modul",
          desc: "Kameraloses Bin‑Picking, –60 % Störeinflüsse",
          long: "CamLessPick: Entwicklung eines Drehdurchführungskonzepts zur Reduktion von Störkräften bei Bin-Picking..."
        },
        itdf: {
          title: "ITDF – Virtuelle Fabrik",
          desc: "Digital Factory & Effizienzsteigerung",
          long: "Transformation verschiedener Automatisierungsstationen mit Simulationsmodellen in Plant Simulation und Process Simulate..."
        },
        bach: {
          title: "Bachelorarbeit",
          desc: "Robotik‑Programmkonzept für CNC‑Beladung",
          long: "Konzept zur vollautomatischen Bestückung von Werkzeugmaschinen bei Anton Häring KG, inkl. modularer Software-Framework..."
        }
      }
    }
  },
  en: { translation: { /* ...同理填 en.json ...*/ } },
  zh: { translation: { /* ...同理填 zh.json ...*/ } },
};

// 2. 初始化 i18next，直接把 resources 传进去
i18next.init({
  lng: 'de',
  debug: false,
  resources
}, () => {
  updateContent();
});

// 3. 将 [data-i18n] 的文本替换为翻译内容
function updateContent(){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerText = i18next.t(el.getAttribute('data-i18n'));
  });
}

// 4. 语言切换
document.querySelectorAll('.lang-switch button').forEach(btn => {
  btn.onclick = () => {
    const lng = btn.dataset.lang;
    i18next.changeLanguage(lng, updateContent);
  };
});
