/* 基本重置 + 主题 */
:root {
  --bg: #f4f4f4;      /* 浅色模式背景 */
  --fg: #333;         /* 浅色模式文字 */
  --card: #fff;
  --header: #1f2937;
}
[data-theme="dark"] {
  --bg: #111;
  --fg: #ddd;
  --card: #1e1e1e;
  --header: #0d1117;
}
* { margin:0; padding:0; box-sizing:border-box; }
body {
  background: var(--bg);
  color: var(--fg);
  font-family: "Segoe UI", sans-serif;
  line-height:1.5;
}
a { color:inherit; text-decoration:none; }
.container { max-width:1000px; margin:0 auto; padding:20px; }

/* Header */
header { background:var(--header); color:#fff; }
header .header-inner {
  position:relative;
  text-align:center;
  padding:30px 20px;
}
.lang-switch {
  position:absolute; top:20px; right:80px;
}
.lang-switch button {
  background:transparent; border:1px solid #555; color:#fff;
  margin-left:5px; padding:5px 8px; cursor:pointer; border-radius:4px;
}
.lang-switch button:hover { background:#555; }
.theme-toggle {
  position:absolute; top:20px; right:20px;
  background:transparent; border:none; font-size:1.2rem; color:#fff; cursor:pointer;
}

/* About */
#about { text-align:center; margin-bottom:40px; }
#about h2 { font-size:2rem; margin-bottom:10px; }
#about p { max-width:700px; margin:0 auto 20px; }
.btn {
  display:inline-block;
  background:var(--card); color:var(--header);
  padding:10px 20px; border-radius:5px;
  box-shadow:0 2px 6px rgba(0,0,0,0.2);
  transition:transform .2s;
}
.btn:hover { transform:scale(1.05); }

/* Projects */
#projects h2 { text-align:center; font-size:2rem; margin-bottom:30px; }
.year-group { margin-bottom:40px; }
.year-label {
  font-size:1.4rem; font-weight:bold;
  margin-bottom:15px; text-align:center;
}
.cards {
  display:flex; flex-wrap:wrap; justify-content:center; gap:20px;
}
.card {
  background:var(--card);
  width:260px;            /* 卡片宽度可调 */
  border-radius:12px;
  box-shadow:0 2px 8px rgba(0,0,0,0.1);
  overflow:hidden;
  transition:transform .2s, box-shadow .2s;
  cursor:pointer;
  text-align:center;
}
.card:hover {
  transform:translateY(-5px);
  box-shadow:0 4px 12px rgba(0,0,0,0.2);
}
.card img {
  width:100%; height:160px; object-fit:cover;
}
.card h3 {
  margin:15px 10px 5px;
  font-size:1.1rem;
}
.card p {
  margin:0 10px 15px;
  font-size:0.9rem; color:var(--fg);
}

/* Skills */
#skills { text-align:center; margin:50px 0; }
#skills h2 { font-size:2rem; margin-bottom:20px; }
.skills-list { list-style:none; display:inline-flex; flex-wrap:wrap; gap:10px; }
.skills-list li {
  background:var(--card);
  padding:6px 12px; border-radius:6px;
  box-shadow:0 1px 4px rgba(0,0,0,0.1);
  font-size:0.9rem;
}

/* Modal */
.modal {
  display:none;
  position:fixed; top:0; left:0; width:100%; height:100%;
  background:rgba(0,0,0,0.6);
  align-items:center; justify-content:center;
  z-index:10;
}
.modal-content {
  background:var(--card); padding:20px;
  border-radius:8px; max-width:600px; width:90%;
  position:relative;
}
.modal-close {
  position:absolute; top:10px; right:10px;
  background:transparent; border:none; font-size:1.5rem;
  cursor:pointer; color:var(--fg);
}
.modal-content h3 { margin-bottom:10px; }
.modal-content p { margin-bottom:15px; }
#md-media iframe,
#md-media video {
  width:100%; border-radius:6px;
  max-height:320px; object-fit:cover;
}
