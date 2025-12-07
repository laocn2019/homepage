# 个人社交主页

> 本项目由AI生成，仅供测试和学习参考。项目完全开源，可以免费商用，无需特别署名。
> 
> 示例参考网站：[小吴乐意的个人主页](https://www.xiaowuleyi.com)

![主页截图](image/screenshot.jpg)
*上图为示例效果，实际显示效果可能因个人配置和设备而异*

一个优雅的个人社交主页模板，支持展示个人信息、社交媒体链接、作品展示和留言板功能。采用现代化设计，具有流畅的动画效果和响应式布局。

## 功能特点

- 🎨 现代化设计，带有星空动画背景效果
- 📱 完全响应式布局，适配各种设备（移动、平板、桌面）
- 🔗 支持多个社交媒体平台链接（博客、Twitter、微博、B站、抖音、YouTube、WeChat、Telegram）
- 💼 作品展示区域，支持项目列表和描述
- 💬 集成Twikoo评论系统
- 🌓 深色/浅色主题切换
- 👤 个人介绍部分，包含头像、简介、职业身份和技能展示
- 🎯 二维码展示功能（公众号二维码、比特币地址二维码）
- 📋 比特币地址复制功能，自动提示反馈
- 🌟 优雅的动画和交互效果
- 🔍 内置SEO优化
- 🚀 易于部署和自定义

## 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 响应式设计、玻璃态效果、渐变色
- **Vanilla JavaScript** - 无需框架的交互逻辑
- **Canvas** - 星空和星云动画背景

## 项目结构

```
.
├── index.html          # 主页面文件
├── style.css           # 样式表
├── script.js           # JavaScript交互逻辑
├── favicon.svg         # 网站图标
├── image/              # 资源文件夹
│   ├── avatar.jpg      # 头像
│   ├── btc-qr.jpg      # 比特币地址二维码
│   ├── qr-code.jpg     # 公众号二维码
│   ├── book-cover.jpg  # 作品图片
│   ├── list-cover.jpg  # 作品图片
│   └── screenshot.jpg  # 项目截图
├── .gitignore          # Git忽略配置
└── README.md           # 项目文档
```

## 快速开始

### 1. 克隆或下载项目

```bash
git clone <repository-url>
cd personal-portfolio
```

### 2. 修改个人信息

打开 `index.html` 文件，修改以下内容：

```html
<!-- 修改网站标题 -->
<title>你的名字-社交主页</title>

<!-- 修改个人信息 -->
<h1>你的名字</h1>
<p class="bio">你的个性签名</p>
<p style="color: #666; margin: 8px 0; font-size: 15px;">你的职业身份描述</p>

<!-- 修改技能标签 -->
<div class="skills">
    <span class="skill-tag">技能1</span>
    <span class="skill-tag">技能2</span>
    <span class="skill-tag">技能3</span>
</div>
```

### 3. 替换个人资源

将 `image/` 文件夹中的图片替换为你的：

- `avatar.jpg` - 你的头像（推荐正方形，最少 120x120px）
- `btc-qr.jpg` - 你的比特币地址二维码（可选）
- `qr-code.jpg` - 你的公众号/社交媒体二维码
- `book-cover.jpg` 和 `list-cover.jpg` - 你的作品图片

### 4. 配置社交媒体链接

在 `index.html` 中找到 `.social-links` 部分，修改链接和描述：

```html
<a href="https://你的链接" class="social-item 平台类" target="_blank">
    <div class="icon"><!-- SVG图标 --></div>
    <div class="text">
        <h3>平台名称</h3>
        <p>平台描述</p>
    </div>
    <div class="arrow">›</div>
</a>
```

支持的平台类型有：`blog`、`twitter`、`bilibili`、`douyin`、`wechat`、`telegram`、`youtube`、`weibo`

### 5. 配置作品展示

在 `.project-grid` 部分添加你的作品：

```html
<a href="作品链接" class="project-item" target="_blank">
    <div class="project-image">
        <img src="image/你的图片.jpg" alt="作品名称">
    </div>
    <div class="project-info">
        <h3>作品名称</h3>
        <p>作品描述</p>
        <span class="project-tag">标签</span>
    </div>
</a>
```

### 6. 本地预览

使用任何 HTTP 服务器来预览项目：

```bash
# Python 3
python -m http.server 8000

# 或使用其他方式，如 Live Server 等
```

然后在浏览器中访问 `http://localhost:8000`

## 自定义修改指南

### 修改主题颜色

打开 `style.css`，修改 CSS 变量：

```css
:root {
    --primary-color: #215b7b;
    --secondary-color: #f7931a;
    --text-dark: #2c3e50;
    --text-light: #666;
    /* ... 其他颜色配置 */
}
```

### 修改背景动画

在 `script.js` 中的 `initStarfield()` 函数中修改：

```javascript
const numStars = 200;           // 星星数量
const numNebulas = 3;           // 星云数量
const hue = Math.random() * 60 + 200;  // 星云色调（蓝紫色系）
```

### 启用/禁用功能

在 `script.js` 的 `init()` 函数中注释或删除相应的初始化函数：

```javascript
const init = () => {
    initTheme();        // 主题切换
    initBTCCopy();      // BTC地址复制
    initStarfield();    // 背景动画
    initTwikoo();       // 评论系统
    initSmoothScroll(); // 平滑滚动
};
```

## 评论系统配置

本项目使用 Twikoo 作为评论系统，配置步骤：

### 1. 部署 Twikoo 服务

按照 [Twikoo 文档](https://twikoo.js.org/) 进行部署，获取 `envId`

### 2. 配置 envId

在 `script.js` 中的 `initTwikoo()` 函数中修改：

```javascript
twikoo.init({
    envId: '你的Twikoo部署地址',
    el: '#tcomment'
});
```

### 3. 如果不需要评论系统

可以直接在 `index.html` 中删除注释部分的代码：

```html
<!-- 删除以下部分即可关闭评论系统 -->
<div class="comments">
    <h2 class="section-title">留言板</h2>
    <div id="tcomment"></div>
</div>
```

## 部署指南

### 部署到 Cloudflare Pages

1. 将项目推送到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 Pages，点击 "创建项目"
4. 选择 GitHub 仓库
5. 构建配置留空（本项目为静态站点）
6. 点击部署

### 部署到其他服务

支持任何支持静态网站托管的平台：

- **Vercel** - 零配置部署
- **Netlify** - 支持拖放部署
- **GitHub Pages** - 免费托管
- **自己的服务器** - 使用 Nginx 或 Apache

## 主题切换

项目支持深色/浅色主题自动切换。用户可以点击右上角的按钮手动切换，偏好设置会自动保存到本地存储。

## SEO 优化

项目已包含基本的 SEO 优化：

- 语义化 HTML 标签
- Meta 标签（描述、关键词、作者）
- Open Graph 标签（用于社交媒体分享）
- Twitter Card 标签
- 结构化数据支持

修改这些信息，编辑 `index.html` 的 `<head>` 部分。

## 浏览器兼容性

- Chrome/Edge ✓
- Firefox ✓
- Safari ✓
- Opera ✓
- IE 11 ✗ (不支持 Flexbox 和 CSS Grid 的完整版本)

## 性能优化

- 轻量级：无外部依赖（除了 Twikoo CDN）
- 快速加载：所有资源都是本地的
- 响应式设计：自动适配所有屏幕尺寸
- Canvas 动画：使用 requestAnimationFrame 优化性能

## 许可证

MIT License

本项目完全开源，您可以自由地使用、修改和分发，包括商业用途。您可以：

- ✅ 自由使用，包括商业用途
- ✅ 自由修改源代码
- ✅ 自由分发原始或修改后的版本
- ✅ 无需署名或说明出处

虽然项目使用 MIT 协议，但您无需在您的项目中保留版权声明，可以直接使用。

## 常见问题

### Q: 如何修改背景颜色？
A: 修改 `style.css` 中的 `body` 背景属性，或在 `index.html` 的 `<style>` 标签中的 `#matrix` 背景。

### Q: 可以删除某个社交媒体链接吗？
A: 可以，直接删除相应的 `<a class="social-item">` 元素即可。

### Q: 如何关闭星空背景动画？
A: 在 `script.js` 的 `init()` 函数中注释掉 `initStarfield();` 行。

### Q: 为什么比特币二维码不显示？
A: 检查 `image/btc-qr.jpg` 文件是否存在，或替换为自己的二维码图片。

### Q: 可以添加更多的作品吗？
A: 可以，在 `.project-grid` 中复制 `.project-item` 元素并修改内容。

## 支持与反馈

如果你在使用过程中遇到任何问题：

1. 检查是否正确配置了所有的个人信息
2. 查看浏览器的控制台是否有错误信息
3. 确保所有资源文件（图片）都正确加载
4. 检查网络连接，某些 CDN 可能需要翻墙访问

## 更新日志

### v1.0.0
- ✨ 初始版本发布
- 🎨 完整的响应式设计
- 🌟 星空背景动画
- 🔐 主题切换功能
- 💬 Twikoo 评论集成
- 📱 移动设备优化

## 致谢

感谢所有为开源项目贡献的开发者，以及使用本项目的用户！
