// 1. 国际化 init
i18next.init({ lng:'de', debug:false, resources:{} }, ()=>{
    fetch('/i18n/de.json').then(r=>r.json()).then(r=>{
      i18next.addResources('de','translation',r);
      updateContent();
    });
  });
  // 更新文本内容
  function updateContent(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
    });
  }
  // 语言切换
  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.onclick = async ()=>{
      const lng = btn.dataset.lang;
      if(!i18next.hasResourceBundle(lng,'translation')){
        const res = await fetch(`/i18n/${lng}.json`).then(r=>r.json());
        i18next.addResources(lng,'translation',res);
      }
      i18next.changeLanguage(lng, updateContent);
    };
  });
  
  // 2. 主题切换
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.onclick = ()=>{
    const next = document.documentElement.getAttribute('data-theme')==='dark'? '' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme')||'');
  
  // 3. 卡片淡入
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  },{threshold:0.2});
  document.querySelectorAll('.card').forEach(c=>observer.observe(c));
  
  // 4. 移动端滑动
  document.querySelectorAll('.projects-row').forEach(row=>{
    let startX=0;
    row.addEventListener('touchstart',e=> startX=e.touches[0].pageX);
    row.addEventListener('touchmove',e=>{
      const dx = e.touches[0].pageX - startX;
      row.scrollLeft -= dx;
      startX = e.touches[0].pageX;
    });
  });
  
  // 5. Modal 交互 & 键盘无障碍
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click',()=> openModal(card.dataset.modal));
    card.addEventListener('keydown',e=>{ if(e.key==='Enter') openModal(card.dataset.modal); });
  });
  function openModal(id){
    const m=document.getElementById(id);
    m.setAttribute('aria-hidden','false');
    m.querySelector('.modal-dialog').focus();
  }
  document.querySelectorAll('.modal-close').forEach(btn=>{
    btn.onclick = ()=> btn.closest('.modal').setAttribute('aria-hidden','true');
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      document.querySelectorAll('.modal[aria-hidden="false"]')
        .forEach(m=>m.setAttribute('aria-hidden','true'));
    }
  });