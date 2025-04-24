console.log('🛠 app.js start');
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOMContentLoaded');

  const I18N = {
    zh: {
      header: {
        name: "翁陈顺",
        tagline: "系统工程师 | 机器人 | 仿真",
        cvText: "📄 下载简历 (PDF)"
      },
      about: {
        title: "关于我",
        text: "可靠的工程师，专注于自动化、机器人及模型驱动的系统工程 (MBSE)。在 BSH、BMW 和大众的经历，使我兼具系统思维与实践能力。"
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH 洗衣机测试系统",
          desc: "洗衣机测试自动化 >80% 覆盖率",
          myRole: "负责系统架构设计、控制流程构建、路径规划逻辑开发及抓手模块集成，完成视觉识别功能与测试平台机械结构设计。",
          tools: ["TMflow", "Omron TM14", "路径规划算法", "Landmark 校准系统", "液压升降台"],
          impact: "系统在标准洗衣流程中实现自动识别与分类处理，测试覆盖率超过 80%；具备反馈调整机制与抓取错误恢复能力，支持全天候连续运行，显著降低人工干预频率。",
          long: "开发了一套基于协作机器人的洗衣机测试自动化系统，覆盖从洗衣程序结束识别、衣物状态检测、路径规划到湿衣抓取与投放的全流程。系统支持连续运行与自动化自纠正，适用于高负载无人值守测试场景。",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS 安全开门系统",
          desc: "MBSE 安全系统，防止开门事故",
          myRole: "负责系统建模流程，构建 SysML 需求图、功能图与行为逻辑模型；参与系统原型搭建，完成硬件控制逻辑与行为模型联动调试。",
          tools: ["Cameo Systems Modeler", "3DEXPERIENCE", "SysML", "Arduino", "FDMU"],
          impact: "系统具备基于交通情景识别的智能预警能力，能够有效判断门控风险并延迟开门，原型系统在五类复杂情境测试中预警准确率达到 85%。",
          long: "设计并实现了一套基于 MBSE 的智能车门安全系统原型，用于应对城市交通中因盲目开门引发的骑行者碰撞事故。",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF 虚拟工厂",
          desc: "工厂仿真与布局优化（+20% 效率提升）",
          myRole: "负责三条产线的模型搭建与优化流程设计，包括生产节拍分析、流程瓶颈识别、资源配置仿真以及布局可视化优化。",
          tools: ["Tecnomatix Plant Simulation", "价值流图分析", "节拍测算工具", "资源调度脚本"],
          impact: "优化后的布局节拍效率提升超过 20%，显著降低工位等待时间与人工干预需求，完成仿真验证并形成结构化汇报材料。",
          long: "基于 Plant Simulation 构建数字孪生模型，进行产能仿真与瓶颈优化，实现多工位节拍协调。",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e 模块",
          desc: "无视觉抓取系统，–60% 干扰力",
          myRole: "负责抓手结构设计、柔性关节建模、干扰力测试方案制定与实验平台搭建，完成多轮设计迭代与性能优化。",
          tools: ["UR10e", "SolidWorks", "3D 打印", "六轴力传感器", "Formhand 吸盘"],
          impact: "干扰力降低 60%，吸附稳定性通过验证，结构支持模块化复用。",
          long: "构建 UR10e 无视觉抓取系统，结合旋转与柔性结构，适用于柔性分拣场景。",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "本科毕业项目 – CNC 自动上下料系统",
          desc: "CNC 上料自动化 +模块化机器人程序",
          myRole: "负责编写完整控制程序逻辑，设计模块化结构与流程状态图，实现工业通信协议接入与机器人控制集成。",
          tools: ["Yaskawa", "TIA Portal", "碰撞规避算法", "状态图建模", "工业总线接口"],
          impact: "节拍缩短 25%，支持快速部署与复用，结构标准化程度高。",
          long: "构建模块化机器人上下料控制程序，部署于 CNC 产线，提升自动化效率。",
          cover: "assets/images/bachelorarbeit_cover.jpg",
          video: "assets/videos/bachelorarbeit_video.mp4"
        }
      }
    },
    en: {
      header: {
        name: "Chenshun Weng",
        tagline: "Systems Engineer | Robotics | Simulation",
        cvText: "📄 Download CV (PDF)"
      },
      about: {
        title: "About Me",
        text: "A reliable engineer specializing in automation, robotics, and MBSE. With experience at BSH, BMW, and Volkswagen, I combine systemic thinking with hands-on implementation expertise."
      },
      projects: {
        bsh: {
          year: 2025,
          title: "BSH Washing Machine Testing System",
          desc: "Washing machine test automation with >80% coverage",
          myRole: "Designed the system architecture and control logic; implemented path planning and integrated gripper and vision system.",
          tools: ["TMflow", "Omron TM14", "Path planning", "Landmark calibration", "Hydraulic lift"],
          impact: "Achieved >80% automated test coverage with full 24/7 operation and minimal manual intervention.",
          long: "Developed a collaborative robot-based test system for automatic end-state detection, fabric classification, and autonomous grasping in washing machines.",
          cover: "assets/images/bsh_project.png",
          video: "assets/videos/bsh_video.mp4"
        },
        bmw: {
          year: 2024,
          title: "BMW SDOS Safe Door Opening System",
          desc: "MBSE-based safety system for dooring prevention",
          myRole: "Built SysML models for requirements, functions, and behavior; implemented prototype control logic and model interaction.",
          tools: ["Cameo SysML", "3DEXPERIENCE", "Arduino", "FDMU", "MBSE"],
          impact: "Achieved 85% warning accuracy in prototype scenarios; full MBSE model chain implemented.",
          long: "Designed and validated an intelligent door system to prevent cycling accidents, based on MBSE methods and real-world prototype testing.",
          cover: "assets/images/VEI_cover.jpg",
          video: "assets/videos/VEI_video.mp4"
        },
        vw: {
          year: 2023,
          title: "VW / ITDF Virtual Factory",
          desc: "Simulation & layout optimization (+20% efficiency)",
          myRole: "Built digital twin models and optimized production flows; analyzed bottlenecks and cycle time distributions.",
          tools: ["Tecnomatix Plant Simulation", "Value stream mapping", "Cycle analysis", "Resource planning"],
          impact: "Increased production efficiency by over 20%; supported planning decisions through simulation.",
          long: "Implemented digital twin simulations for Volkswagen factory lines, with improved layout and optimized throughput.",
          cover: "assets/images/ITDF_cover.jpg",
          video: "assets/videos/ITDF_video.mp4"
        },
        pmf: {
          year: 2024,
          title: "PMF UR10e Gripper Module",
          desc: "Vision-free bin-picking, –60% lateral force",
          myRole: "Designed flexible gripper structure and conducted mechanical testing on UR10e platform.",
          tools: ["UR10e", "SolidWorks", "3D printing", "Force sensor", "Formhand"],
          impact: "Reduced lateral disturbance by 60%; validated stability across various objects.",
          long: "Developed a flexible, rotary end-effector module with passive structure for industrial bin-picking without vision input.",
          cover: "assets/images/PMF_cover.jpg",
          video: "assets/videos/PMF_video.mp4"
        },
        bach: {
          year: 2022,
          title: "Bachelor Project – CNC Automation",
          desc: "Modular robotic loading system for CNC machines",
          myRole: "Developed full program logic with collision avoidance and modular deployment for multi-station systems.",
          tools: ["Yaskawa", "TIA Portal", "State modeling", "PLC logic", "Bus communication"],
          impact: "Reduced cycle time by 25%; enabled quick deployment with reusable structure.",
