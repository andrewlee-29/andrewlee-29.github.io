# 网站架构

基于 2026-10-20 本地源码整理，2026-10-21 更新共享内容数据与原型说明，不代表线上状态。

## 启动和页面

`index.html` 提供 root 和模块入口 → `src/main.tsx` 导入全局样式并创建 StrictMode、HashRouter → `App.tsx` 管理加载状态和路由 → Navbar 与对应页面。

- `/#/`：Home，欢迎语和简单介绍。
- `/#/about`：About，个人介绍、技能图标、社交链接、工作经历与邮箱。
- `/#/projects`：Project，将 `src/data/projects.ts` 的六项数据映射为 ProjectCard。
- 其他 hash 路径：NotFound，显示 404 和回首页入口。

没有业务 API、后端、数据库、CMS 或登录。简介内容维护在 TSX 中；项目与工作经历维护在 `src/data/` 的共享 TypeScript 模块中。Google Fonts 提供 Electrolize 字体，另有用户主动打开的社交、项目和论文链接。

## 加载流程

App 以 location.key 渲染 RouteContent；每次切换历史记录时重新挂载，以初始 state 显示 Loader，不在 effect 中同步重设加载状态。RouteContent 的结束计时器为 1500ms，并在卸载时清理；Loader 在 600ms 后开始淡出，再等待 400ms 调用 onComplete。两条路径都能结束加载，这不是实际下载进度。

加载时 App 只渲染 Loader，Navbar 和页面会卸载后重新挂载。修改此流程需同时检查页面状态和主题初始化。

## 主题与样式

Navbar 初始化读取 localStorage 的 `theme`，无值时默认为深色。effect 更新根元素的 `dark` class 并保存偏好。`src/index.css` 通过 Tailwind 4 的 `@custom-variant dark` 实现 class 驱动的深色模式，同时设置字体。

`src/App.css` 也导入 Tailwind，存在重复入口。遗留 `tailwind.config.js` 未在当前 CSS 中通过 `@config` 显式引用；修改时应以实际 CSS/plugin 接线和构建结果为依据。

Tailwind 负责布局和主题色；Framer Motion 用于标题、技能、社交图标、项目卡片和 Loader 动画。

## 工作经历

Timeline 从 `src/data/experiences.ts` 读取四段经历并负责展示逻辑。通过 window scroll 监听和列表相对视口的位置计算进度条高度；卸载时清理监听器。描述使用字符串换行与 `whitespace-pre-line`。目前没有 resize 监听。

## 工具链

- package.json 记录依赖范围和脚本，package-lock.json 固定实际安装版本。
- tsconfig.app.json 检查 src，tsconfig.node.json 检查 Vite 配置；build 先运行 `tsc -b`。
- ESLint 使用 flat config，集成 TypeScript、React Hooks 和 React Refresh 规则；prototypes/**/*.js 单独启用推荐 JavaScript 规则与浏览器 globals。
- Vite 加载 React 和 Tailwind 插件，输出 dist/。
- HashRouter 配合根路径 base，适合 GitHub Pages 用户站点的静态托管。
- gh-pages 是现有发布工具；仓库尚无 CI 或自动化测试配置。

## 2026-10-20 設計原型

新增 prototypes/ 獨立互動原型，使用既有 Vite 開發伺服器預覽，未接入正式 App。兩種首頁布局共用 Canvas 實驗及 Gallery/Writing 空狀態。詳細功能、驗證與未完成的正式內容管線見 prototypes/README.md。


目前原型已依 ADR 002 選用 A，並移除畫布、控制台及 A/B 切換；首頁改為介紹與內容入口。歷史 A/B 記錄不代表目前介面。正式 React 網站未替換。

2026-10-21 新增原型內的 `#projects` 與 `#about` 視圖，沿用 A 主題。`prototypes/profile.js` 從 `src/data/projects.ts`、`src/data/experiences.ts` 渲染共享內容；正式 Project 與 Timeline 也讀取這兩個模組，原有資料值與正式布局保持不變。原型 About 的簡介 markup 位於 `prototypes/index.html`，保留正式 About 的內容事實，後續修改需同步檢查兩個呈現。原型仍透過 Vite 開發伺服器預覽，並非正式 build 入口。
