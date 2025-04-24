// 确保脚本加载
console.log('✅ app.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  // 1. 多语言数据
  const I18N = {
    zh: {
      header: { name:"翁陈顺", tagline:"系统工程师 | 机器人 | 仿真", cvText:"📄 下载简历 (PDF)" },
      about:  { title:"关于我", text:"可靠的工程师，专注于自动化、机器人及模型驱动的系统工程 (MBSE)..." },
      projects: {
        bsh: {
          year:2025,
          title:"BSH 洗衣机测试系统",
          desc:"洗衣机测试自动化 >80% 覆盖率",
          myRole:"负责系统架构设计、路径规划与视觉识别集成。",
          tools:["TMflow","Omron TM14","路径规划算法","Landmark 校准系统"],
          impact:"覆盖率>80%，24/7 自主运行，具备自纠错能力。",
          long:"基于协作机器人实现测试全流程自动化，支持高负载无人值守。",
          cover:"assets/images/bsh_project.png",
          video:"assets/videos/bsh_video.mp4"
        }
        // 其他项目按此格式填
      }
    },
    en: {
      header: { name:"Chenshun Weng", tagline:"Systems Engineer | Robotics | Simulation", cvText:"📄 Download CV (PDF)" },
      about:  { title:"About Me", text:"A reliable engineer specializing in automation, robotics and MBSE..." },
      projects: {
        bsh: {
          year:2025,
          title:"BSH Washing Machine Testing System",
          desc:">80% coverage automation",
          myRole:"Designed architecture, path planning and vision integration.",
          tools:["TMflow","Omron TM14","Path planning","Landmark calibration"],
          impact:">80% coverage, 24/7 operation with self-correction.",
          long:"Built a collaborative robot system automating full test cycle.",
          cover:"assets/images/bsh_project.png",
          video:"assets/videos/bsh_video.mp4"
        }
      }
    },
    de: {
      header: { name:"Chenshun Weng", tagline:"Systems Engineer | Robotik | Simulation", cvText:"📄 Lebenslauf herunterladen (PDF)" },
      about:  { title:"Über mich", text:"Zuverlässiger Ingenieur für Automatisierung, Robotik und MBSE..." },
      projects: {
        bsh: {
          year:2025,
          title:"BSH Waschmaschinen-Testsystem",
          desc:">80% Testabdeckung",
          myRole:"Architektur, Pfadplanung und Vision-Integration entwickelt.",
          tools:["TMflow","Omron TM14","Pfadplanung","Landmark-Kalibrierung"],
          impact:">80% Abdeckung, 24/7 Betrieb mit Selbstkorrektur.",
          long:"Coboter-System automatisiert kompletten Testzyklus.",
          cover:"assets/images/bsh_project.png",
          video:"assets/videos/bsh_video.mp4"
        }
      }
    }
  };

  // 2. DOM 引用
  const htmlEl        = document.documentElement;
  const langSwitcher  = document.getElementById('lang-switcher');
  const themeToggle   = document.getElementById('theme-toggle');
  const headerName    = document.getElementById('header-name');
  const headerTagline = document.getElementById('header-tagline');
  const cvLink        = document.getElementById('cv-link');
  const aboutTitle    = document.getElementById('about-title');
  const aboutText     = document.getElementById('about-text');
  const projectsEl    = document.getElementById('projects');

  // 3. 初始语言 & 主题
  let currentLang = localStorage.getItem('lang') || 'zh';
  htmlEl.lang = currentLang;
  langSwitcher.value = currentLang;
  htmlEl.setAttribute('data-theme','light');

  // 4. 语言切换
  langSwitcher.addEventListener('change', e => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    htmlEl.lang = currentLang;
    renderPage();
  });

  // 5. 主题切换
  themeToggle.addEventListener('click', () => {
    const next = htmlEl.getAttribute('data-theme')==='light'?'dark':'light';
    htmlEl.setAttribute('data-theme',next);
    themeToggle.textContent = next==='light'?'🌙':'☀️';
  });

  // 6. 渲染函数
  function renderPage() {
    const D = I18N[currentLang];
    if (!D) return console.error('No I18N for', currentLang);

    headerName.textContent    = D.header.name;
    headerTagline.textContent = D.header.tagline;
    cvLink.textContent        = D.header.cvText;
    aboutTitle.textContent    = D.about.title;
    aboutText.textContent     = D.about.text;

    projectsEl.innerHTML = '';
    Object.values(D.projects)
      .sort((a,b)=>b.year-a.year)
      .forEach(p=>{
        // 年份分组
        let grp = projectsEl.querySelector(`[data-year="${p.year}"]`);
        if (!grp) {
          grp = document.createElement('div');
          grp.setAttribute('data-year', p.year);
          grp.innerHTML = `<div class="year-label">${p.year}</div><div class="projects-row"></div>`;
          projectsEl.append(grp);
        }
        const row = grp.querySelector('.projects-row');

        // 卡片
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        flipCard.innerHTML = `
          <div class="flip-inner">
            <div class="flip-front card">
              <img src="${p.cover}" alt="${p.title}" />
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
            <div class="flip-back">
              <h3>${ currentLang==='zh'? '项目详情' : currentLang==='en'? 'Project Details':'Projekt Details' }</h3>
              <p class="role"><strong>${ currentLang==='zh'? '我的职责': currentLang==='en'? 'Role':'Meine Rolle' }:</strong> ${p.myRole}</p>
              <p class="impact"><strong>${ currentLang==='zh'? '成果': currentLang==='en'? 'Impact':'Ergebnis' }:</strong> ${p.impact}</p>
              <p><strong>${ currentLang==='zh'? '工具': currentLang==='en'? 'Tools':'Werkzeuge' }:</strong></p>
              <ul class="tools-list">${p.tools.map(t=>`<li>${t}</li>`).join('')}</ul>
              <p class="long">${p.long}</p>
              <video src="${p.video}" controls></video>
            </div>
          </div>
        `;
        const inner = flipCard.querySelector('.flip-inner');
        const vid   = flipCard.querySelector('video');

        // 点击视频不翻转
        vid.addEventListener('click', e=>e.stopPropagation());

        // 点击卡片翻转 & 关闭时暂停视频
        flipCard.addEventListener('click', ()=>{
          if (inner.classList.contains('flipped')) {
            vid.pause(); vid.currentTime = 0;
          }
          inner.classList.toggle('flipped');
        });

        row.append(flipCard);
      });
  }

  // 7. 首次渲染
  renderPage();
});
