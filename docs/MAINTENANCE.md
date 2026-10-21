# 维护基线与待办

## 2026-10-20 验证

本轮仅初始化项目文档，未修改运行时代码、依赖版本或发布站点。

| 检查 | 结果 |
| --- | --- |
| 环境 | Node.js 24.14.1、npm 11.11.0 |
| npm ci --no-audit --no-fund | 安装 246 个包；首次沙箱权限错误，重试成功 |
| npm run build | TypeScript 和 Vite 构建通过，实际 Vite 7.2.6；有一项警告 |
| npm run lint | 一项已有错误，见下文 |
| 浏览器视觉与交互 | 本轮未执行 |
| 线上站点与 Pages 设置 | 本轮未验证 |
| 依赖安全审计 | 本轮未执行 |

## 已确认的问题

- [x] `src/App.tsx` 的 `react-hooks/set-state-in-effect` 已于 2026-10-21 修复：使用 location.key 初始化每个路由记录的加载组件，保留现有动画与计时器清理；未禁用规则。
- [x] 2026-10-21 已删除 index.html 中含 `%VITE_BASE_URL%` 的旧注释；构建不再产生此警告。
- [ ] HTML title 仍为 `my-portfolio`，没有 meta description。
- [x] 2026-10-21 已为 About 的 GitHub / LinkedIn 链接添加可访问名称。
- [ ] 项目文案有 `Data Scinece`、`techique`、`classifer` 等拼写问题；第一项描述拼接缺少句间空格。
- [ ] 两个 CSS 文件均导入 Tailwind，遗留 JS 配置未被显式引用；整理前后应比较样式。
- [ ] 旧 README 标注 MIT，但没有 LICENSE；待所有者确认许可证及版权归属。

## 后续检查

以下是待验证项目，不是已复现的故障。

- [ ] 确认职业定位、工作日期（特别是 Present）、项目优先级和介绍内容是否需要更新。
- [ ] 检查 320–375px 下导航是否溢出，以及项目卡片、时间线可读性。
- [ ] 检查首次加载及切页时主题是否闪烁，Loader 固定深色背景是否符合设计。
- [ ] 评估每次切页播放模拟加载条的必要性，以及 reduced-motion 行为。
- [ ] 检查三个 hash 路由直接进入与刷新、未知路径、浏览器前进和后退。
- [ ] 验证外链、键盘导航、焦点可见性与颜色对比度。
- [ ] 根据后续开发规模决定测试与 CI 配置；当前没有 npm test 命令。

完成修复后更新勾选项和检查结果，不要把未运行的检查标记为通过。

## 2026-10-20 原型驗證補充

獨立原型的 JS 語法檢查通過；正式 build 通過，原有環境變數警告和 App.tsx lint 錯誤保持不變。已以瀏覽器檢查 A/B 桌面與 390px 窄螢幕版面、參數調整、配色、重設、暫停、Writing 篩選、Gallery 導航及淺色主題。這些結果僅適用 prototypes/，不代表原有正式站點已做完整瀏覽器驗證。


目前原型已依 ADR 002 選用 A，並移除畫布、控制台及 A/B 切換；首頁改為介紹與內容入口。歷史 A/B 記錄不代表目前介面。正式 React 網站未替換。


## 2026-10-21 lint 修复

`npm run lint` 通过。浏览器确认首页加载结束、About/Projects 导航、前进/后退及 Projects 刷新均可完成加载，未发现浏览器 console error。此次未更改布局或原型。


## 2026-10-21 问题修复整合

已完成本轮确认的六项问题：窄屏导航、未知路由回退、社交链接名称、原型 JavaScript lint 覆盖、构建警告及 README 原型说明冲突。

- `npm run lint` 通过，包含 prototypes/**/*.js。内存 lint 探针验证未定义变量会触发 no-undef，浏览器 document 已声明。
- `npm run build` 通过，无原有环境变量警告。
- 320px 浏览器验证 document scrollWidth = clientWidth = 320，导航链接和主题按钮均在画面内。
- 未知 hash 路由显示 404 和 Back to home，可返回首页。
- About 社交链接可按可访问名称定位；浅色切换后刷新保持，随后恢复原深色。
- 本轮不包含正式新版迁移、Markdown 内容管线或部署。其余未勾选待办仍需后续处理。
