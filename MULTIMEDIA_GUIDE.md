# 指南：为您的个人网站添加多媒体素材

本文档将指导您如何将您自己的图片和视频素材添加到我们为您创建的个人网站项目中。我们已经在代码中为您预设了这些素材的文件名和存放路径。

## 素材存放总览

所有图片文件应放置在项目根目录下的 `public/assets/images/` 文件夹中。
所有视频文件应放置在项目根目录下的 `public/assets/videos/` 文件夹中。

如果您在项目中没有看到这些文件夹，请手动创建它们。

## 所需素材清单

以下是网站各个部分所需的具体多媒体文件列表，请确保文件名和路径完全一致：

### 1. 头部背景图片 (Hero Section)

*   **文件路径**: `public/assets/images/hero-background.jpg`
*   **描述**: 一张高质量、现代且专业的背景图片，将显示在您名字后方的主视觉区域。推荐宽高比：16:9 或更宽。
*   **建议**: 选择一张能够体现您专业领域或个人风格的图片。

### 2. “关于我”部分的个人照片 (可选)

*   **文件路径**: `public/assets/images/profile-picture.jpg`
*   **描述**: 您的职业头像照或一张具有代表性的个人照片。推荐宽高比：1:1 或 3:4。
*   **用途**: 将在“关于我”部分展示，帮助访问者更好地认识您。

### 3. 项目展示素材

对于您简历中提到的每个项目，我们都预留了图片和视频的展示位置。图片将用作项目卡片的缩略图，视频将在点击项目卡片后弹出的详细信息窗口中播放。

**项目1：安全开门系统 (宝马 i3) (Safe Door Open System - BMW i3)**
*   **图片路径**: `public/assets/images/project-sdos-thumbnail.jpg`
*   **视频路径**: `public/assets/videos/project-sdos-demo.mp4`
*   **描述**: 图片应为该项目的视觉摘要或相关徽标。视频可以是简短的项目演示、功能介绍或成果展示。

**项目2：UR10e真空连接装置开发 (Vacuum Connection for UR10e)**
*   **图片路径**: `public/assets/images/project-ur10e-thumbnail.jpg`
*   **视频路径**: `public/assets/videos/project-ur10e-demo.mp4`
*   **描述**: 同上，请提供与此项目相关的图片和视频。

**项目3：虚拟工厂 (大众汽车) (Virtual Factory - Volkswagen)**
*   **图片路径**: `public/assets/images/project-vw-factory-thumbnail.jpg`
*   **视频路径**: `public/assets/videos/project-vw-factory-demo.mp4`
*   **描述**: 同上，请提供与此项目相关的图片和视频。

**项目4：硕士论文 (博西家电) (Master Thesis - BSH Hausgeräte GmbH)**
*   **图片路径**: `public/assets/images/project-bsh-master-thumbnail.jpg`
*   **视频路径**: `public/assets/videos/project-bsh-master-demo.mp4`
*   **描述**: 同上，请提供与此项目相关的图片和视频。

**项目5：学士论文 (Anton Häring KG) (Bachelor Thesis - Anton Häring KG)**
*   **图片路径**: `public/assets/images/project-haering-bachelor-thumbnail.jpg`
*   **视频路径**: `public/assets/videos/project-haering-bachelor-demo.mp4`
*   **描述**: 同上，请提供与此项目相关的图片和视频。

## 素材格式建议

*   **图片**: 推荐使用 `.jpg` 或 `.png` 格式。请注意优化图片大小以保证网站加载速度。
*   **视频**: 推荐使用 `.mp4` 格式 (H.264 编码)。同样，请注意视频文件大小，过大的视频会影响用户体验。

## 如何添加素材

1.  根据上述清单准备好您的图片和视频文件。
2.  将它们重命名为清单中指定的文件名。
3.  将重命名后的文件分别复制到项目中的 `public/assets/images/` 和 `public/assets/videos/` 文件夹内对应的路径下。

完成以上步骤后，当您在本地运行或部署网站时，这些多媒体素材就会自动显示在相应的位置了。

如果您在准备或添加素材的过程中遇到任何问题，请随时告诉我。

