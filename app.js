const LANGS = ['de','en','zh'];
let currentLang = localStorage.getItem('lang') || 'de';

// DOM
const htmlEl        = document.documentElement;
const langSwitcher  = document.getElementById('lang-switcher');
const themeToggle   = document.getElementById('theme-toggle');
const cvLink        = document.getElementById('cv-link');
const headerName    = document.getElementById('header-name');
const headerTagline = document.getElementById('header-tagline');
const aboutTitle    = document.getElementById('about-title');
const aboutText     = document.getElementById('about-text');
const projectsEl    = document.getElementById('projects');

// init
langSwitcher.value = currentLang;
htmlEl.lang        = currentLang;
htmlEl.setAttribute('data-theme','light');

// language switch
langSwitcher.addEventListener('change', e=>{
  currentLang = e.target.value;
  localStorage.setItem('lang',currentLang);
  htmlEl.lang = currentLang;
  renderAll();
});

// theme switch
themeToggle.addEventListener('click', ()=>{
  const next = htmlEl.getAttribute('data-theme')==='light'?'dark':'light';
  htmlEl.setAttribute('data-theme', next);
  themeToggle.textContent = next==='light'?'🌙':'☀️';
});

// render all
async function renderAll(){
  try {
    const res = await fetch(`i18n/${currentLang}.json`);
    const data= await res.json();
    // header
    headerName.textContent    = data.header.name;
    headerTagline.textContent = data.header.tagline;
    cvLink.textContent        = data.header.cvText;
    // about
    aboutTitle.textContent = data.about.title;
    aboutText.textContent  = data.about.text;
    // projects
    renderProjects(data.projects);
  } catch(err){
    console.error('加载 i18n 失败',err);
  }
}

// render flip cards
function renderProjects(projObj){
  projectsEl.innerHTML='';
  const items = Object.entries(projObj)
    .filter(([k])=>k!=='title')
    .map(([k,p])=>({id:k,...p}));
  const byYear={};
  items.forEach(p=> (byYear[p.year] ||= []).push(p));
  Object.keys(byYear).sort((a,b)=>b-a).forEach(year=>{
    const group=document.createElement('div');
    group.className='year-group';
    const label=document.createElement('div');
    label.className='year-label';
    label.textContent=year;
    group.append(label);
    const row=document.createElement('div');
    row.className='projects-row';
    byYear[year].forEach(p=>{
      const flip=document.createElement('div');
      flip.className='flip-card';
      flip.innerHTML=`
        <div class="flip-inner">
          <div class="flip-front card">
            <img src="${p.cover}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
          </div>
          <div class="flip-back">
            <h3>项目详情</h3>
            <p>${p.long}</p>
            <video src="${p.video}" controls></video>
          </div>
        </div>
      `;
      flip.addEventListener('click',()=>{
        flip.querySelector('.flip-inner').classList.toggle('flipped');
      });
      row.append(flip);
    });
    group.append(row);
    projectsEl.append(group);
  });
}

// initial render
renderAll();
