document.addEventListener('DOMContentLoaded', () => {
  const I18N = {
    zh: {
      header: { name:"翁陈顺", tagline:"系统工程师 | 机器人 | 仿真", cvText:"📄 下载简历 (PDF)" },
      about:  { title:"关于我", text:"可靠的工程师，专注于自动化、机器人及模型驱动的系统工程 (MBSE)。" },
      projects: {
        bsh: {
          year:2025, title:"BSH 洗衣机测试系统", desc:"洗衣机测试自动化 >80% 覆盖率",
          myRole:"负责系统架构设计、控制流程构建、路径规划逻辑开发及视觉识别集成。",
          tools:["TMflow","Omron TM14","路径规划算法","Landmark 校准系统"],
          impact:"覆盖率>80%，支持24/7运行，自纠正能力强，人工干预极少。",
          long:"基于协作机器人实现测试全流程自动化，具备异常恢复与自校准功能。",
          cover:"assets/images/bsh_project.png", video:"assets/videos/bsh_video.mp4"
        },
        bmw: {
          year:2024, title:"BMW SDOS 安全开门系统", desc:"MBSE安全系统，防止开门事故",
          myRole:"构建SysML需求/功能/行为模型，搭建原型并调试控制逻辑。",
          tools:["Cameo SysML","3DEXPERIENCE","SysML","Arduino","FDMU"],
          impact:"85%预警准确率，实时交通情景识别与安全联动。",
          long:"基于MBSE设计智能车门预警系统，防止盲开事故原型验证。",
          cover:"assets/images/VEI_cover.jpg", video:"assets/videos/VEI_video.mp4"
        },
        vw: {
          year:2023, title:"VW / ITDF 虚拟工厂", desc:"工厂仿真与布局优化 (+20%)",
          myRole:"搭建三条产线数字孪生，分析节拍、瓶颈、资源并优化布局。",
          tools:["Plant Simulation","价值流图","节拍测算","调度脚本"],
          impact:"效率提升>20%，减少等待与人工干预。",
          long:"数字孪生仿真产能与布局优化，实现多站协同。",
          cover:"assets/images/ITDF_cover.jpg", video:"assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year:2024, title:"PMF UR10e 模块", desc:"无视觉抓取，–60%干扰力",
          myRole:"设计柔性关节与吸盘模块，搭建测试平台并迭代优化。",
          tools:["UR10e","Fusion 360","3D打印","力传感器","Formhand吸盘"],
          impact:"干扰力矩降低60%，结构模块化可复用。",
          long:"结合柔性与旋转结构，实现视觉无关稳定抓取。",
          cover:"assets/images/PMF_cover.jpg", video:"assets/videos/PMF_video.mp4"
        },
        bach: {
          year:2022, title:"本科项目 – CNC 自动上下料系统", desc:"CNC上料自动化+模块化程序",
          myRole:"开发控制逻辑与状态机，优化算法与模块化设计。",
          tools:["Yaskawa","碰撞算法","状态图建模"],
          impact:"节拍缩短25%，快速部署，复用性高。",
          long:"模块化机器人上下料框架，提升产线自动化效率。",
          cover:"assets/images/bachelorarbeit_cover.jpg", video:"assets/videos/bachelorarbeit_video.mp4"
        }
      }
    },
    en: {
      header: { name:"Chenshun Weng", tagline:"Systems Engineer | Robotics | Simulation", cvText:"📄 Download CV (PDF)" },
      about:  { title:"About Me", text:"Reliable engineer specializing in automation, robotics and MBSE." },
      projects: {
        bsh: {
          year:2025, title:"BSH Washing Machine Testing System", desc:">80% coverage automation",
          myRole:"Designed architecture, control flows, path planning & vision integration.",
          tools:["TMflow","Omron TM14","Path planning","Landmark calibration"],
          impact:">80% coverage, 24/7 operation, self-correction, minimal intervention.",
          long:"Collaborative robot system automating full test cycle with error recovery.",
          cover:"assets/images/bsh_project.png", video:"assets/videos/bsh_video.mp4"
        },
        bmw: {
          year:2024, title:"BMW SDOS Safe Door Opening System", desc:"MBSE safety to prevent dooring",
          myRole:"Built SysML requirement/function/behavior models; prototyped controls.",
          tools:["Cameo SysML","3DEXPERIENCE","SysML","Arduino","FDMU"],
          impact:"85% alert accuracy in traffic scenarios.",
          long:"MBSE-based intelligent door warning prototype validated in tests.",
          cover:"assets/images/VEI_cover.jpg", video:"assets/videos/VEI_video.mp4"
        },
        vw: {
          year:2023, title:"VW / ITDF Virtual Factory", desc:"+20% efficiency simulation",
          myRole:"Created digital twins, analyzed cycle times & bottlenecks, optimized layout.",
          tools:["Plant Simulation","Value stream mapping","Cycle analysis","Scripts"],
          impact:">20% efficiency gain, reduced wait times.",
          long:"Digital twin simulations for synchronized multi-station throughput.",
          cover:"assets/images/ITDF_cover.jpg", video:"assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year:2024, title:"PMF UR10e Gripper Module", desc:"Vision-free, –60% disturbance",
          myRole:"Designed flexible gripper, built test bench, ran mechanical tests.",
          tools:["UR10e","Fusion 360","3D prototyping","Force sensor","Formhand"],
          impact:"60% torque reduction, stable adhesion, modular reuse.",
          long:"Flexible rotary end-effector for reliable bin-picking without vision.",
          cover:"assets/images/PMF_cover.jpg", video:"assets/videos/PMF_video.mp4"
        },
        bach: {
          year:2022, title:"Bachelor CNC Automation System", desc:"Modular robotic loading",
          myRole:"Developed control logic, optimized algorithms & modular design.",
          tools:["Yaskawa","Collision avoidance","State diagrams"],
          impact:"25% cycle reduction, rapid deployment & reuse.",
          long:"Modular robot loading/unloading framework deployed on CNC lines.",
          cover:"assets/images/bachelorarbeit_cover.jpg", video:"assets/videos/bachelorarbeit_video.mp4"
        }
      }
    },
    de: {
      header: { name:"Chenshun Weng", tagline:"Systems Engineer | Robotik | Simulation", cvText:"📄 Lebenslauf herunterladen (PDF)" },
      about:  { title:"Über mich", text:"Zuverlässiger Ingenieur für Automatisierung, Robotik und MBSE." },
      projects: {
        bsh: {
          year:2025, title:"BSH Waschmaschinen-Testsystem", desc:">80% Abdeckung",
          myRole:"Architektur-, Steuerungs- und Pfadplanungskonzepte entwickelt, Vision integriert.",
          tools:["TMflow","Omron TM14","Pfadplanung","Landmark-Kalibrierung"],
          impact:">80% Abdeckung, 24/7 Betrieb, Selbstkorrektur, minimaler Aufwand.",
          long:"Kollaboratives Robotersystem für automatisierten Testzyklus mit Fehlerkorrektur.",
          cover:"assets/images/bsh_project.png", video:"assets/videos/bsh_video.mp4"
        },
        bmw: {
          year:2024, title:"BMW SDOS Sicherheitssystem", desc:"MBSE gegen Türunfälle",
          myRole:"SysML-Modelle erstellt; Prototyp-Steuerung implementiert.",
          tools:["Cameo SysML","3DEXPERIENCE","SysML","Arduino","FDMU"],
          impact:"85% Warngenauigkeit in Verkehrsszenarien.",
          long:"MBSE-basiertes intelligentes Türwarnsystem prototypt getestet.",
          cover:"assets/images/VEI_cover.jpg", video:"assets/videos/VEI_video.mp4"
        },
        vw: {
          year:2023, title:"VW / ITDF Virtuelle Fabrik", desc:"+20% Effizienz",
          myRole:"Digitale Zwillinge erstellt, Taktzeiten und Engpässe analysiert, Layout optimiert.",
          tools:["Plant Simulation","Wertstromanalyse","Taktanalyse","Skripte"],
          impact:">20% Effizienzsteigerung, weniger Wartezeiten.",
          long:"Digitale Zwillinge für synchronisierten multi-station Durchsatz.",
          cover:"assets/images/ITDF_cover.jpg", video:"assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year:2024, title:"PMF UR10e Greifer Modul", desc:"–60% Störmoment",
          myRole:"Flexiblen Greifer konstruiert, Prüfstand aufgebaut, Tests durchgeführt.",
          tools:["UR10e","Fusion 360","3D-Prototyp","Kraftsensor","Formhand"],
          impact:"60% weniger Störmoment, modulare Wiederverwendbarkeit.",
          long:"Rotierendes, flexibles Endeffektor-Modul ohne Vision für Sortierung.",
          cover:"assets/images/PMF_cover.jpg", video:"assets/videos/PMF_video.mp4"
        },
        bach: {
          year:2022, title:"Bachelorarbeit CNC Automation", desc:"Modulare Robotikprogramme",
          myRole:"Steuerlogik programmiert, Algorithmen optimiert, Abläufe modelliert.",
          tools:["Yaskaya","Kollision","Zustandsdiagramme"],
          impact:"25% kürzere Taktzeit, schnelle Wiederverwendung.",
          long:"Modularer Rahmen für automatische CNC-Beschickung implementiert.",
          cover:"assets/images/bachelorarbeit_cover.jpg", video:"assets/videos/bachelorarbeit_video.mp4"
        }
      }
    }
  };

  // refs
  const html = document.documentElement;
  const langSwitcher = document.getElementById('lang-switcher');
  const themeBtn = document.getElementById('theme-toggle');
  const nameEl = document.getElementById('header-name');
  const tagEl  = document.getElementById('header-tagline');
  const cvEl   = document.getElementById('cv-link');
  const aboutT = document.getElementById('about-title');
  const aboutX = document.getElementById('about-text');
  const projEl = document.getElementById('projects');

  // init
  let lang = localStorage.getItem('lang') || 'zh';
  html.lang = lang;
  langSwitcher.value = lang;
  html.setAttribute('data-theme','light');

  // lang switch
  langSwitcher.addEventListener('change', e=>{
    lang = e.target.value;
    localStorage.setItem('lang',lang);
    html.lang = lang;
    render();
  });

  // theme toggle
  themeBtn.addEventListener('click', ()=>{
    const next = html.getAttribute('data-theme')==='light'?'dark':'light';
    html.setAttribute('data-theme',next);
    themeBtn.textContent = next==='light'?'🌙':'☀️';
  });

  // render
  function render(){
    const D = I18N[lang];
    nameEl.textContent    = D.header.name;
    tagEl.textContent     = D.header.tagline;
    cvEl.textContent      = D.header.cvText;
    aboutT.textContent    = D.about.title;
    aboutX.textContent    = D.about.text;

    projEl.innerHTML = '';
    Object.values(D.projects).sort((a,b)=>b.year-a.year)
      .forEach(p=>{
        let grp = projEl.querySelector(`[data-year="${p.year}"]`);
        if(!grp){
          grp = document.createElement('div');
          grp.setAttribute('data-year',p.year);
          grp.innerHTML = `<div class="year-label">${p.year}</div><div class="projects-row"></div>`;
          projEl.append(grp);
        }
        const row = grp.querySelector('.projects-row');
        const card = document.createElement('div');
        card.className='flip-card';
        card.innerHTML=`
          <div class="flip-inner">
            <div class="flip-front card">
              <img src="${p.cover}" alt="${p.title}"/>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
            <div class="flip-back">
              <h3>${{zh:'项目详情',en:'Project Details',de:'Projekt Details'}[lang]}</h3>
              <p class="role"><strong>${{zh:'我的职责',en:'Role',de:'Meine Rolle'}[lang]}:</strong> ${p.myRole}</p>
              <p class="impact"><strong>${{zh:'成果',en:'Impact',de:'Ergebnis'}[lang]}:</strong> ${p.impact}</p>
              <p><strong>${{zh:'工具',en:'Tools',de:'Werkzeuge'}[lang]}:</strong></p>
              <ul>${p.tools.map(t=>`<li>${t}</li>`).join('')}</ul>
              <p class="long">${p.long}</p>
              <video src="${p.video}" controls></video>
            </div>
          </div>`;
        const inner = card.querySelector('.flip-inner');
        const vid = card.querySelector('video');
        vid.addEventListener('click',e=>e.stopPropagation());
        card.addEventListener('click',()=>inner.classList.toggle('flipped'));
        row.append(card);
      });
  }

  render();
});
