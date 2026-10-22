# Andrew Lee — Portfolio

个人作品集，展示简介、技能、工作经历和六个项目。技术栈为 React 19、TypeScript 5.9、Vite 7、Tailwind CSS 4、React Router 7、Framer Motion 和 React Icons。当前是纯前端静态站点，无后端、数据库或环境变量要求。

## 本地运行

2026-10-20 使用 Node.js 24.14.1 和 npm 11.11.0 验证安装与构建。具体依赖版本以 package-lock.json 为准。

```sh
npm ci
npm run dev
```

打开 Vite 输出的本地地址。

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 开发服务器 |
| `npm run build` | TypeScript 检查并构建到 dist/ |
| `npm run lint` | ESLint 检查 TypeScript/TSX 与原型浏览器 JavaScript |
| `npm run preview` | 预览已构建的 dist/ |
| `npm run deploy` | 自动先构建，再通过 gh-pages 发布到远端 |

## 内容入口

| 文件 | 职责 |
| --- | --- |
| src/Pages/Home.tsx | 首页介绍 |
| src/Pages/About.tsx | 简介、技能、学历描述、社交与邮箱链接 |
| src/data/projects.ts | 六个项目的共享数据，供正式页面与原型使用 |
| src/data/experiences.ts | 四段工作经历的共享数据，供正式时间线与原型使用 |
| src/Pages/Project.tsx | 项目列表 |
| src/Components/Timeline.tsx | 滚动时间线 |
| src/Components/ProjectCard.tsx | 项目卡片 |
| src/Components/Navbar.tsx | 导航和深浅色切换 |
| src/Components/Loader.tsx | 加载动画 |
| src/index.css | 全局字体、Tailwind 和深色模式规则 |
| index.html / public/logo.svg | 页面元信息和 favicon |

## 部署

配置面向 GitHub Pages 用户站点：Vite base 为 `/`，HashRouter 页面路径为 `/#/`、`/#/about` 和 `/#/projects`。

发布前检查 Git remote、GitHub Pages 发布来源和写入权限，再执行 `npm run deploy`。该命令会写入远端；本地验证使用 build 和 preview。仓库中没有 GitHub Actions 工作流，本轮未验证线上状态。

## 维护文档

- [AGENTS.md](AGENTS.md)：编码代理工作规则。
- [架构说明](docs/ARCHITECTURE.md)：组件、路由、主题和工具链。
- [维护基线与待办](docs/MAINTENANCE.md)：已有问题及验证清单。

已清理构建时触发环境变量警告的过时 HTML 注释（2026-10-21）。尚无自动化测试配置；验证记录见维护文档。

## 许可证

旧 README 标注 MIT，但仓库没有 LICENSE 文件；许可证文本与版权归属待所有者确认。

## 設計原型

已確認的改版方向見 [PRODUCT.md](PRODUCT.md)、[最新設計決策（ADR 002）](docs/decisions/002-content-first-home.md) 和 [內容模型](docs/CONTENT-MODEL.md)。執行開發伺服器後，開啟 `/prototypes/index.html` 查看已選用的 A 風格原型：首頁呈現介紹與內容入口，已移除畫布、控制台及 A/B 切換。Projects 與 About 現在分別位於原型內的 `#projects`、`#about`，沿用 A 風格與既有內容事實。[原型說明](prototypes/README.md) 記錄功能與限制。歷史 A/B 記錄不代表目前介面；正式 React 網站布局尚未替換。
