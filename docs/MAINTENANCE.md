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

## 2026-10-21 Projects / About 原型延伸

Projects 與 About 已加入原型內的 `#projects`、`#about`，沿用已選定的 A 風格。六項專案與四段工作經歷原值抽取到 `src/data/projects.ts`、`src/data/experiences.ts`，由正式元件與原型共用；About 保留既有簡介事實。正式 React 布局未遷移，原型未加入正式 build。

- `npm run build`、`npm run lint` 通過；修正檔尾多餘空行後 `git diff --check` 通過。
- 原型桌面與手機深色截圖已完成視覺審查；375px 瀏覽器檢查無水平溢出，顯示六項專案與四段工作經歷。
- 原型 Projects / About 刷新、瀏覽器前進與後退、淺色偏好持續保存通過，未發現 console error。
- 原型五個導覽連結均可切換；320px 的 About / Projects 無水平溢出，Tab 可聚焦 About GitHub 連結並顯示實線焦點框。
- 正式首頁 Loader 結束後標題可見；正式 About / Projects 直接進入與刷新後標題可見，console error 為空。正式主題與手機布局本輪未重新完整驗證。
- 自動視覺偵測器因引擎安裝權限限制未執行；以上視覺結論來自瀏覽器與截圖審查。
- 本節未宣稱正式 React 三條路由的完整 smoke test，也未執行部署。
- 已知設計文檔落差：`DESIGN.md` 的 Components 仍寫 Projects / About 保留既有目的地；目前已改為原型內視圖。本輪僅延伸既有風格，未改寫設計 token 或設計文件。

## 2026-10-22 原型斜線動態背景

依使用者提供的 ZZZ 參考圖加入共用 CSS 斜線背景；此要求允許背景動畫，不恢復舊畫布與控制台。五個原型路由共用，正式 React 網站未部署或更換。

- build、lint、git diff --check 通過。
- 瀏覽器確認動畫 transform 變化、暫停及重新整理後保留暫停設定，console error 為空。
- 桌面深色、375px 深色與淺色截圖檢查；手機沒有水平溢位。
- CSS 提供 prefers-reduced-motion 靜態替代，visibilitychange 暫停隱藏分頁；這兩項以原始碼檢查，未模擬作業系統偏好或實測 GPU 效能。

## 2026-10-22 Publish selected design

The user approved publishing the selected prototype as the root homepage. Root index.html now uses the shared prototype CSS/JS and content data, without the review banner. Vite builds both HTML entries. First-visit production theme follows the system; manual overrides persist under theme.

Verified: production build and lint pass; all five built routes load after refresh; legacy /#/about and /#/projects work; back/forward works; light theme persists after refresh; narrow About layout has no horizontal overflow and four experience entries; browser console errors are empty. GitHub Pages API confirms gh-pages with source path /.
