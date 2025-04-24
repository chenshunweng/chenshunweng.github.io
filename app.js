// app.js

i18next.init({
  lng: 'de',
  debug: true,
  resources: {
    de: {
      translation: {
        projects: {
          bsh: {
            title: "BSH Testsystem",
            desc: "Waschmaschinen‑Testautomation >80 % Abdeckung",
            long: "Im Praktikum bei BSH Hausgeräte: Entwicklung eines Robotik-Systems zur vollautomatischen Prüfung von Waschmaschinen...",
            video: "bsh_video.mp4"
          },
          pmf: {
            title: "PMF UR10e Modul",
            desc: "Kameraloses Bin‑Picking, –60 % Störeinflüsse",
            long: "CamLessPick: Entwicklung eines Drehdurchführungskonzepts zur Reduktion von Störkräften bei Bin-Picking...",
            video: "PMF_video.mp4"
          },
          bmw: {
            title: "BMW SDOS",
            desc: "MBSE‑Sicherheitssystem gegen Türunfälle",
            long: "Entwicklung eines Safe Door Opening Systems für BMW i3 mithilfe von MBSE und Cameo SysML...",
            video: "bmw_video.mp4"
          }
        }
      }
    }
  }
}, function(err, t) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = i18next.t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
      i18next.changeLanguage(btn.dataset.lang, () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          el.textContent = i18next.t(el.getAttribute('data-i18n'));
        });
      });
    });
  });

  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.modal-close');

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.key;
      const proj = i18next.t(`projects.${key}`, { returnObjects: true });
      const title = proj.title;
      const text = proj.long;
      const video = proj.video;

      let html = `<h2>${title}</h2><p>${text}</p>`;
      if (video) {
        html += `<video controls style="margin-top: 20px; border-radius: 12px; width: 100%; max-height: 400px;"><source src="assets/videos/${video}" type="video/mp4">Your browser does not support the video tag.</video>`;
      }

      modalBody.innerHTML = html;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalBody.innerHTML = '';
    }
  });

  const themeBtn = document.querySelector('.theme-toggle');
  themeBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
});
