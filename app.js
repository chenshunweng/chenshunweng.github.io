document.addEventListener('DOMContentLoaded', () => {
  // **临时只保留 zh，默认只用中文**
  const I18N = {
    zh: {
      header: {
        name: "翁陈顺",
        tagline: "系统工程师 | 机器人 | 仿真",
        cvText: "📄 下载简历 (PDF)"
      },
      about: {
        title: "关于我",
        text: "可靠的工程师，专注于自动化、机器人及模型驱动的系统工程 (MBSE)..."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH 洗衣机测试系统",
          desc: "洗衣机测试自动化 >80% 覆盖率",
          myRole: "...",
          tools: ["TMflow","Omron TM14","路径规划算法","Landmark 校准系统"],
          impact: "...",
          long: "...",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        }
        // 这里不要逗号，不要写其它分支
      }
    }
  };

  // 默认只渲染 zh
  const data = I18N.zh;

  document.getElementById('header-name').textContent    = data.header.name;
  document.getElementById('header-tagline').textContent = data.header.tagline;
  document.getElementById('cv-link').textContent        = data.header.cvText;
  document.getElementById('about-title').textContent    = data.about.title;
  document.getElementById('about-text').textContent     = data.about.text;

  // ……再写 renderProjects(data.projects)……
});
