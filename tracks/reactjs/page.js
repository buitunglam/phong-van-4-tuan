/* React.js: static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. */
const RJ_PAGE={
 hero:`  <span class="eyebrow">Lộ trình phỏng vấn · React.js (SPA) · 10/2026</span>
  <h1>React.js trong 4 tuần</h1>
  <p class="lede">Tổng hợp từ các JD ReactJS frontend trên ITviec, TopDev, JobsGO, CareerViet, TopCV, VietnamWorks và các trang tuyển dụng quốc tế (Greenhouse, Lever, Ashby). Track này tập trung vào React SPA: React 19.3, Vite, React Router, TanStack Query, Redux Toolkit / Zustand, test và accessibility; SSR, App Router, Server Components để cho track Next.js. Cùng cấu trúc với các lộ trình khác; phần lab là web app cho chính Expense Tracker API của track Node.js.</p>`,

 jd:`  <div style="display:grid;gap:8px">
    <h2>Các JD ReactJS frontend thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 31 JD đọc được toàn văn: 24 JD Việt Nam (16 ITviec, 7 TopDev, 1 JobsGO; 17 Senior trở lên, 6 Middle, 1 không ghi cấp) và 7 JD Senior quốc tế trên Ashby, Greenhouse, Lever. Chỉ lấy tin mà ReactJS là kỹ năng chính; 3 tin ghi “ReactJS/NextJS” (Dev FromVietnam, Glohow, Én Việt) vẫn tính nhưng đánh dấu, tin fullstack nặng backend thì bỏ. TopCV trả về 403, VietnamWorks render bằng JavaScript và LinkedIn không truy cập được, nên tin ở ba trang này chỉ dùng đoạn trích (chủ yếu để lấy lương) và không tính vào bảng tần suất. Thanh hồng đậm là nhóm phải có, thanh tím là điểm cộng.</p>
  </div>
  <div class="box"><div class="freq" id="rj-freq"></div></div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li>React vững: hooks, rendering, reconciliation; JD Senior ghi rõ “React internals” (One Mount, Miyagami)</li>
        <li>TypeScript (20/31 JD; 6/7 JD quốc tế) trên nền JavaScript ES6+ chắc</li>
        <li>State management: <b>Redux / Redux Toolkit</b> vẫn được gọi tên nhiều nhất (15/31), JD mới ghi kèm Zustand, Jotai, React Query</li>
        <li>HTML/CSS, responsive, cross-browser; Tailwind, SCSS hoặc CSS-in-JS; UI library (MUI, Ant Design, shadcn) hoặc design system nội bộ</li>
        <li>Tích hợp REST API, xử lý auth và phân quyền ở client</li>
        <li>Tối ưu hiệu năng: memo, code splitting, lazy loading, virtualized list, performance budget</li>
        <li>Unit / integration test (Jest, Vitest, React Testing Library)</li>
        <li>Git, pull request, code review; mentor và quyết định kiến trúc frontend (với Senior)</li>
        <li>Accessibility: 6/17 JD Senior Việt Nam và 4/7 JD quốc tế</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li>Biết backend để làm fullstack: Node.js (phổ biến nhất), Go, C#; viết API và schema phía sau UI</li>
        <li>E2E bằng Playwright hoặc Cypress</li>
        <li>Realtime: WebSocket, SSE, Socket.IO cho dashboard giao dịch, game</li>
        <li>Next.js / SSR khi sản phẩm cần SEO</li>
        <li>Micro-frontend, monorepo</li>
        <li>Docker, AWS/GCP, CI/CD (GitHub Actions, CircleCI)</li>
        <li>Thư viện chart (D3, ECharts, Recharts, Highcharts) cho dashboard dữ liệu</li>
        <li>Dùng AI coding tool hằng ngày (Cursor, Claude Code, Copilot) và làm UI cho tính năng LLM</li>
        <li>React Native để dùng chung với mobile</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Các trang quốc tế bổ sung gì</h3>
    <ul>
      <li><b>AI là yêu cầu, không phải điểm cộng:</b> Kraken đòi dùng Cursor / Claude Code / Copilot “as a structured workflow, not just autocomplete”; Reddit ghi “Codex, Cursor, Claude, or comparable agentic tools”; Sardine và Qonto cũng bắt buộc. Harvey và Reddit cần người làm UI cho tính năng AI: streaming kết quả, job chạy lâu, tool-calling.</li>
      <li><b>Accessibility được coi là nền:</b> 4/7 JD bắt buộc (Kraken, Reddit, Sardine, Databricks); Kraken gọi là “non-negotiable”.</li>
      <li><b>Không gọi tên thư viện state:</b> 0/7 JD nhắc Redux; Kraken hỏi “have opinions on the trade-offs” và ví dụ “TanStack Router vs Next.js App Router”.</li>
      <li><b>Sở hữu sản phẩm:</b> tự chạy A/B test (Kraken, Reddit), phỏng vấn người dùng (Palantir), cùng backend định nghĩa API và data model (Databricks, Harvey).</li>
      <li><b>CSS thuần vẫn được đánh giá cao:</b> Qonto ghi rõ “pure CSS — we don't use Tailwind”.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Senior trên ITviec và TopDev</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>IVC (ISB Vietnam)</b> <span class="mono muted">ITviec · trading analytics</span></td><td class="mono">không ghi</td><td>TypeScript, React, Next.js; “Zustand, Redux Toolkit, or Jotai”; WebSocket và SSE cho dashboard dữ liệu thị trường; <b>phát hiện memory leak, virtualized list/table</b>; Jest, RTL, Playwright, Cypress; micro-frontend là điểm cộng</td></tr>
          <tr><td><b>VISION Advisory</b> <span class="mono muted">ITviec · gaming</span></td><td class="mono">5+ năm</td><td>React, TypeScript, REST, debug hiệu năng trên trình duyệt; giao diện đa ngôn ngữ; giao tiếp iframe/postMessage an toàn; WebSocket, WebRTC, Ant Design, Cocos Creator là điểm cộng</td></tr>
          <tr><td><b>One Mount Group</b> <span class="mono muted">ITviec · Senior/Expert · hết hạn (07/2026)</span></td><td class="mono">7+ năm (3+ React)</td><td>React internals; “React Query combined with Redux Toolkit, Zustand, or Jotai”; <b>performance budget</b>; Jest + RTL, a11y cơ bản, design system; trình bày được trade-off kiến trúc</td></tr>
          <tr><td><b>Miyagami VN</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">5+ năm (2+ enterprise)</td><td>Reconciliation và rendering; Vite, Webpack, esbuild; design system và accessibility; REST, gRPC, GraphQL; editor workflow trực quan bằng React Flow, dashboard telemetry cho AI agent</td></tr>
          <tr><td><b>Hubble</b> <span class="mono muted">ITviec</span></td><td class="mono">3+ năm React</td><td>Định kiến trúc frontend và chọn stack; review PR, pair programming, coaching; dùng AI cho việc lặp lại (unit test, tài liệu); “log tech debt deliberately, and clean it up later”; tiếng Anh lưu loát</td></tr>
          <tr><td><b>ANDPAD</b> <span class="mono muted">ITviec · Principal</span></td><td class="mono">10+ năm</td><td>TypeScript, React hoặc Vue; review thiết kế và code của người khác; bảo mật web cơ bản; Next.js, AWS/GCP, CircleCI/GitHub Actions trong stack; micro-frontend, Go/Rails là điểm cộng</td></tr>
          <tr><td><b>New Wealth</b> <span class="mono muted">ITviec · fintech</span></td><td class="mono">2–3+ năm</td><td>React Hooks, Redux và SSR (không nêu Next.js); <b>micro-frontend là yêu cầu</b>; Webpack, Babel, ESLint; SASS/LESS</td></tr>
          <tr><td><b>Jedi Technology</b> <span class="mono muted">ITviec · remote · hết hạn</span></td><td class="mono">không ghi</td><td>React, TypeScript, Tailwind, shadcn; chuyển Figma thành code; làm với khách hàng nói tiếng Anh; Node.js, AWS, Clean Architecture là điểm cộng</td></tr>
          <tr><td><b>Unity Fitness</b> <span class="mono muted">TopDev · hết hạn</span></td><td class="mono">5+ năm React</td><td>TypeScript, Redux + Context API, Next.js (SSR), Jest, Webpack; hướng dẫn junior; React Query và Storybook là điểm cộng</td></tr>
          <tr><td><b>MSB</b> <span class="mono muted">TopDev · ngân hàng · hết hạn</span></td><td class="mono">2+ năm</td><td>Tên “Senior” nhưng đòi 2 năm: React, TypeScript, SCSS, Redux, React Router, Immutable.js; tự xây core component; $1.000–3.000 / tháng</td></tr>
          <tr><td><b>Lotus Soft</b> <span class="mono muted">TopDev · hết hạn</span></td><td class="mono">4+ năm</td><td>MUI/Ant Design, Tailwind/Bootstrap; lead nhóm 3–4 người; frontend system design; tiếng Anh lưu loát là bắt buộc</td></tr>
          <tr><td><b>CBTW (Positive Thinking)</b> <span class="mono muted">TopDev · hết hạn</span></td><td class="mono">5 năm</td><td>Kiến trúc SPA; GraphQL tích hợp CMS; React Native; đo UI metrics; ưu tiên đã làm web app phát video</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Senior khác Middle ở hiệu năng, kiến trúc và người:</b> JD Middle liệt kê React, Redux (6/6), REST (5/6), HTML/CSS (5/6). JD Senior Việt Nam nhắc mentor/code review ở 12/17 (Middle 2/6), hiệu năng 11/17 (Middle 2/6), UI library / design system 9/17 (Middle 1/6), accessibility 6/17 (Middle 0/6), kiến trúc 6/17 (Middle 1/6).</li>
      <li><b>Số năm không khớp tên cấp:</b> Money Forward và BMBSoft ghi Middle nhưng đòi 4+ năm; MSB ghi Senior nhưng chỉ đòi 2 năm.</li>
      <li><b>Redux vẫn là tên gọi mặc định ở Việt Nam:</b> 15/24 JD Việt Nam, 0/7 JD quốc tế. Tin 2024 ghi “Redux, Redux Saga, and Redux Toolkit” (Vietcap) hay “actions, reducers, and stores” (Trustify); tin 2025–2026 chuyển sang dạng liệt kê “Redux Toolkit, Zustand, TanStack Query hoặc tương đương” (Dev FromVietnam, IVC, One Mount). Zustand/Jotai chỉ 5/31, React Query 3/31, nên khi phỏng vấn cần giải thích được khi nào server state nên rời khỏi Redux.</li>
      <li><b>TypeScript gần như mặc định ở tin mới:</b> 20/31 JD; các tin chỉ ghi JavaScript chủ yếu là tin cũ (Vietcap, Trustify 2024) hoặc JD rất ngắn (Blue Dragon); LG CNS chỉ coi TypeScript là điểm cộng.</li>
      <li><b>Next.js lấn sân vừa phải:</b> 8/31 JD ghi Next.js, trong đó 3 tin có “NextJS” ngay trong tiêu đề. Kraken là SPA + React Native nhưng vẫn đòi quen App Router và Server Components; New Wealth đòi SSR mà không nêu framework.</li>
      <li><b>Test được nhắc nhiều, công cụ thì ít:</b> 14/31 JD nhắc test, nhưng chỉ khoảng một nửa gọi tên công cụ (Jest, Vitest, RTL, Mocha); E2E bằng Playwright/Cypress 5/31. Vite chỉ được gọi tên ở 2 JD (Miyagami, Kraken), các tin còn lại ghi Webpack.</li>
      <li><b>Realtime tập trung ở giao dịch và game:</b> IVC, VISION, S3, Glohow (6/31 cả quốc tế); các tin chứng khoán không tính vào bảng (SHS, HD SAISON trên CareerViet) cũng đòi WebSocket.</li>
      <li><b>AI mới bắt đầu vào JD Việt Nam:</b> 2/24 (Hubble dùng AI cho test và tài liệu, Glohow coi tích hợp AI vào CMS là điểm cộng), so với 5/7 JD quốc tế. Edufit (VietnamWorks, chỉ đọc được một phần) ghi “Thành thạo AI Coding Agent và review được code AI”.</li>
      <li><b>Tiếng Anh:</b> 15/24 JD Việt Nam ghi rõ. Chỉ TechX (TopDev, React/Vue) coi tiếng Nhật là điểm cộng.</li>
      <li><b>Tin thuần frontend còn ít:</b> ngày 20/10/2026 ITviec có 48 tin gắn tag reactjs nhưng phần lớn là fullstack, chỉ khoảng 10 tin xoay quanh React frontend; API tìm kiếm của TopDev trả về khoảng 5 tin “react” còn mở, đều là fullstack. Mọi JD TopDev bên dưới đã hết hạn nhưng yêu cầu vẫn đại diện.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Mức lương thấy được</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">từ 10 triệu / tháng</td><td>Frontend Developer (Reactjs / Next.js), Én Việt, 2+ năm (JobsGO, hạn 12/11/2026)</td></tr>
          <tr><td class="mono">14,6–24,3 triệu / tháng</td><td>Khảo sát CareerViet cho Frontend Developer: trung bình 19,5 triệu (90 mẫu); 3–5 năm 19,5–24,3 triệu</td></tr>
          <tr><td class="mono">30–50 triệu / tháng</td><td>Senior Front-end Developer (ReactJS), WebProvise Hà Nội 30–50 triệu (TopCV, đoạn trích); Senior Frontend Developer, Arobid HCM 30–45 triệu (thẻ tin liên quan trên JobsGO, đoạn trích); Senior FE (React/Vue), Vareal 30–35 triệu (TopCV, hết hạn 04/2024)</td></tr>
          <tr><td class="mono">$1.000–3.000 / tháng</td><td>Senior Frontend Developer (Reactjs), MSB, 15–20 tháng lương/năm (TopDev, hết hạn); Senior Frontend (ReactJS/VueJS), TechX tối đa $3.000 (TopDev, hết hạn)</td></tr>
          <tr><td class="mono">$135K–267K / năm</td><td>Quốc tế: Reddit $190,8–267,1K, Harvey $200–260K, Sardine $145–195K, Palantir (New York) $135–200K; Databricks (Vancouver) CAD 146,2–201,1K</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">ITviec ẩn lương với người chưa đăng nhập và TopDev cũng yêu cầu đăng nhập, nên các tin còn mở như IVC, VISION, Hubble, ANDPAD không có số liệu. Lương TopCV lấy từ đoạn trích tìm kiếm; khảo sát CareerViet đọc trên trang danh sách việc làm ReactJS của họ.</p>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Fresher / Junior</b></td><td class="mono">0–2 năm</td><td>HTML/CSS, JavaScript, React cơ bản, gọi API, Git. Rất ít tin tuyển riêng cấp này.</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">2–4 năm</td><td>React hooks, JavaScript/TypeScript, Redux hoặc thư viện state tương đương, REST, HTML/CSS responsive, Git và PR; tự làm một tính năng từ yêu cầu tới production (Dev FromVietnam).</td></tr>
        <tr><td><b>Senior</b></td><td class="mono">4–7 năm (vài tin 2–3)</td><td>React internals, TypeScript, hiệu năng (code splitting, virtualization, performance budget), test, accessibility, design system, kiến trúc frontend, mentor và code review; thường đòi tiếng Anh làm việc trực tiếp.</td></tr>
        <tr><td><b>Lead / Principal</b></td><td class="mono">7–10+ năm</td><td>Định hướng kiến trúc và stack, review thiết kế của người khác, micro-frontend, dẫn nhóm (ANDPAD: 10+ năm; HD SAISON trên CareerViet: 5–10 năm, 2+ năm lead nhóm 4–6 người).</td></tr>
      </tbody>
    </table>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://itviec.com/it-jobs/frontend-engineer-reactjs-hubble-pte-ltd-0532" target="_blank" rel="noopener">ITviec · Hubble, Frontend Engineer (ReactJS)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-frontend-dev-english-ivc-isb-vietnam-4726" target="_blank" rel="noopener">ITviec · IVC (ISB Vietnam), Senior Frontend Dev (English)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-frontend-engineer-react-typescript-javascript-vision-advisory-analytics-2336" target="_blank" rel="noopener">ITviec · VISION Advisory &amp; Analytics, Senior Frontend Engineer (React, TypeScript, JavaScript)</a></li>
      <li><a href="https://itviec.com/it-jobs/principal-frontend-engineer-reactjs-vuejs-andpad-vietnam-co-ltd-4651" target="_blank" rel="noopener">ITviec · ANDPAD, Principal Frontend Engineer (ReactJS/VueJS)</a></li>
      <li><a href="https://itviec.com/it-jobs/fintech-frontend-dev-javascript-react-new-wealth-2706" target="_blank" rel="noopener">ITviec · New Wealth, FinTech Frontend Dev (JavaScript, React)</a></li>
      <li><a href="https://itviec.com/it-jobs/frontend-reactjs-developer-lg-cns-viet-nam-1045" target="_blank" rel="noopener">ITviec · LG CNS Việt Nam, Frontend ReactJS Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-frontend-developer-react-next-js-cong-ty-co-phan-dev-fromvietnam-1414" target="_blank" rel="noopener">ITviec · Dev FromVietnam, Middle Frontend Developer (React / Next.js)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-expert-frontend-engineer-reactjs-javascript-one-mount-group-4117" target="_blank" rel="noopener">ITviec · One Mount Group, Senior/Expert Frontend Engineer (ReactJS, JavaScript) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-remote-reactjs-developer-typescript-xenia-tech-2803" target="_blank" rel="noopener">ITviec · Miyagami VN, Senior ReactJS Developer (TypeScript) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/remote-senior-frontend-react-js-typescript-jedi-technology-5227" target="_blank" rel="noopener">ITviec · Jedi Technology, Remote Senior Frontend (React.js/TypeScript) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-frontend-developer-typescript-reactjs-nodejs-ringkas-4850" target="_blank" rel="noopener">ITviec · Ringkas, Senior Frontend Engineer (Typescript, ReactJS, NodeJS) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-frontend-developer-reactjs-trustify-technology-3601" target="_blank" rel="noopener">ITviec · Trustify Technology, Senior Frontend Developer (Reactjs) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-frontend-developer-reactjs-4y-vietcap-securities-joint-stock-company-1043" target="_blank" rel="noopener">ITviec · Vietcap Securities, Senior Frontend Developer (ReactJS, 4Y+) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-frontend-developer-reactjs-javascript-html5-blue-dragon-communications-3141" target="_blank" rel="noopener">ITviec · Blue Dragon Communications, Middle Frontend Developer (ReactJS, JavaScript, HTML5) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-frontend-engineer-reactjs-typescript-money-forward-vietnam-co-ltd-5857" target="_blank" rel="noopener">ITviec · Money Forward Vietnam, Middle Frontend Engineer (ReactJS/ Typescript) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-frontend-developer-reactjs-js-english-bmbsoft-vietnam-4516" target="_blank" rel="noopener">ITviec · BMBSoft Vietnam, Middle Frontend Developer (ReactJS/JS/English) — hết hạn</a></li>
      <li><a href="https://topdev.vn/viec-lam/mid-senior-frontend-reactjs-typescript-javascript-cong-ty-co-phan-the-thao-unity-fitness-2034152" target="_blank" rel="noopener">TopDev · Unity Fitness, Mid/Senior Frontend (ReactJS, Typescript, JavaScript) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/mid-senior-frontend-engineer-reactjs-nextjs-javascript-glohow-2035425" target="_blank" rel="noopener">TopDev · Glohow, Mid/Senior Frontend Engineer (ReactJS, NextJS, JavaScript) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/senior-front-end-developer-reactjs-s3-corporation-s3corp-2036410" target="_blank" rel="noopener">TopDev · S3 Corporation, Senior Front-end Developer (ReactJS) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/senior-frontend-developer-reactjs-positive-thinking-company-2029028" target="_blank" rel="noopener">TopDev · CBTW (Positive Thinking Company), Senior Frontend Developer (ReactJS) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/di2-senior-frontend-developer-reactjs-javascript-1y338-ngan-hang-tmcp-hang-hai-viet-nam-msb-2026628" target="_blank" rel="noopener">TopDev · MSB, Senior Frontend Developer (Reactjs, Javascript) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/senior-reactjs-developer-must-have-fluent-in-english-lotus-soft-2032140" target="_blank" rel="noopener">TopDev · Lotus Soft, Senior ReactJS Developer (Fluent in English) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/frontend-developer-reactjs-mgm-technology-partners-vietnam-2035929" target="_blank" rel="noopener">TopDev · mgm technology partners, Frontend Developer (ReactJS) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/senior-frontend-reactjs-vuejs-up-to-3000usd-sungrove-tech-vietnam-2031688" target="_blank" rel="noopener">TopDev · TechX Vietnam, Senior Frontend (ReactJS/ VueJS)</a> — hết hạn, chỉ dùng cho lương (React hoặc Vue, không tính tần suất)</li>
      <li><a href="https://jobsgo.vn/viec-lam/nhan-vien-frontend-developer-reactjs-nextjs-29320510066.html" target="_blank" rel="noopener">JobsGO · Én Việt, Frontend Developer (Reactjs / Next.js)</a></li>
      <li><a href="https://careerviet.vn/vi/tim-viec-lam/lead-frontend-engineer-game.35C835A3.html" target="_blank" rel="noopener">CareerViet · HD SAISON, Lead Frontend Engineer (Game)</a> (chỉ dùng cho bảng cấp độ)</li>
      <li><a href="https://careerviet.vn/vi/tim-viec-lam/chuyen-vien-chuyen-vien-cc-lap-trinh-frontend.35C894F6.html" target="_blank" rel="noopener">CareerViet · SHS, Chuyên viên Lập trình Frontend</a> (React/Vue/Angular, không tính tần suất)</li>
      <li><a href="https://careerviet.vn/viec-lam/reactjs-k-vi.html" target="_blank" rel="noopener">CareerViet · Việc làm ReactJS và khảo sát lương Frontend Developer</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-front-end-developer-reactjs/211603.html" target="_blank" rel="noopener">TopCV · WebProvise, Senior Front-end Developer (ReactJS)</a> — đoạn trích</li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-frontend-developer-reactjs-vuejs/644230.html" target="_blank" rel="noopener">TopCV · Vareal, Senior Frontend Developer (ReactJS/VueJS)</a> — đoạn trích, hết hạn (2024)</li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-frontend-developer-reactjs/1700043.html" target="_blank" rel="noopener">TopCV · Amaris, Senior Frontend Developer (ReactJS)</a> — đoạn trích, hết hạn (2025)</li>
      <li><a href="https://www.topcv.vn/brand/vpbank/tuyen-dung/senior-frontend-developer-reactjs-j1583791.html" target="_blank" rel="noopener">TopCV · VPBank, Senior Frontend Developer (ReactJS)</a> — đoạn trích</li>
      <li><a href="https://www.vietnamworks.com/frontend-lead-2098272-jv" target="_blank" rel="noopener">VietnamWorks · Edufit, Frontend Lead</a> — đoạn trích (SvelteKit là chính, nhận React)</li>
      <li><a href="https://www.vietnamworks.com/chuyen-vien-lap-trinh-frontend-angular-react-frontend-developer-1790213390343635254-2110976-jv" target="_blank" rel="noopener">VietnamWorks · Bảo Việt IT, Chuyên viên Lập trình Frontend (Angular / React)</a> — đoạn trích</li>
      <li><a href="https://vn.linkedin.com/jobs/react-developer-jobs-ho-chi-minh-city-metropolitan-area" target="_blank" rel="noopener">LinkedIn · React Developer jobs, TP.HCM</a> — đoạn trích</li>
      <li><a href="https://jobs.ashbyhq.com/kraken.com/acf80ca2-7073-49aa-ab4a-7064f852d94f" target="_blank" rel="noopener">Ashby · Kraken, Senior Software Engineer - Frontend - Consumer</a></li>
      <li><a href="https://jobs.ashbyhq.com/harvey/04e17f81-d0a7-4f83-8526-ec4c9532ddcc" target="_blank" rel="noopener">Ashby · Harvey, Senior Software Engineer, Frontend</a></li>
      <li><a href="https://jobs.ashbyhq.com/sardine/e8b95f0e-8bd2-4263-904a-563214a9fde5" target="_blank" rel="noopener">Ashby · Sardine, Senior Software Engineer, Frontend</a></li>
      <li><a href="https://job-boards.greenhouse.io/reddit/jobs/8175520" target="_blank" rel="noopener">Greenhouse · Reddit, Senior Frontend Engineer, Ads Creative</a></li>
      <li><a href="https://job-boards.greenhouse.io/databricks/jobs/8230883002" target="_blank" rel="noopener">Greenhouse · Databricks, Senior Software Frontend Engineer – Dashboards</a></li>
      <li><a href="https://jobs.lever.co/palantir/d2a87a1d-63f4-4dcd-b0d0-f6be91fed4d3" target="_blank" rel="noopener">Lever · Palantir, Senior Front End Software Engineer - Application Development</a></li>
      <li><a href="https://jobs.lever.co/qonto/2ec33be8-037e-4fd4-9352-12e10466f24a" target="_blank" rel="noopener">Lever · Qonto, Senior Web Engineer (React)</a></li>
    </ul>
    <p class="muted note">TopCV trả về 403 khi đọc trực tiếp; VietnamWorks là trang render bằng JavaScript, API tìm kiếm chỉ trả về một phần mô tả; JobsGO chặn sau lần đọc đầu; LinkedIn không truy cập được. Các tin ITviec hết hạn trả về 410 nhưng vẫn còn nội dung. TopDev hiện hiển thị thương hiệu Saramin. Không JD nào nhắc React Compiler, React 19 hay React Router v8, nhưng đây là những thay đổi lớn nhất của hệ sinh thái React SPA trong năm và rất dễ bị hỏi ở vòng Senior.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Tick vào mục đã học, tiến độ được lưu trên trình duyệt này. Lab 4 tuần cộng lại thành <b>“Expense Tracker Web”</b>, React SPA gọi Expense Tracker API của track Node.js: Vite + TypeScript, React Router, TanStack Query, Zustand, React Hook Form + Zod, Tailwind + Radix, test với Vitest, Testing Library, MSW và Playwright, deploy qua CI/CD.`,

 lc:`  <div style="display:grid;gap:8px">
    <h2>Vòng live coding React.js</h2>
    <p class="muted">Tổng hợp từ playbook UI coding và machine coding của GreatFrontEnd, trang phỏng vấn kỹ sư của Atlassian, handbook tuyển dụng frontend của GitLab, đề take-home công khai của ClearScore và Vyer Technologies, chính sách dùng AI của Shopify (CoderPad, 04/2026), Canva, Meta, Anthropic, cùng chia sẻ của ứng viên. Nguồn tiếng Việt công khai về vòng live coding React rất ít; bài trên Viblo (2020) cho thấy công ty trong nước vẫn hay mở đầu bằng bài test Codility. Không công ty nào ở đây công bố bảng chấm riêng cho React; cột “Mức đạt / Mức Senior” là tổng hợp, ClearScore và GreatFrontEnd là hai nguồn có ghi rõ tiêu chí.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>UI coding trên trình duyệt</b></td><td class="mono">45–60′</td><td>Dựng một component hoặc app nhỏ chạy được: autocomplete, data table, modal, tabs, star rating, todo, tic-tac-toe, file explorer từ dữ liệu lồng nhau. Atlassian tách hẳn vòng “browser coding” 60′ khỏi vòng JavaScript, chấm code chạy được, chất lượng code, khả năng thích nghi khi đổi yêu cầu và cách bạn trình bày hướng làm (theo bản hướng dẫn GreatFrontEnd lưu lại; trang chính thức của Atlassian chỉ mô tả chung vòng coding gồm Data Structures và Code Design).</td></tr>
          <tr><td><b>JavaScript / hook utility</b></td><td class="mono">30–45′</td><td>Viết <code>debounce</code>, <code>throttle</code>, event emitter, deep clone, hoặc custom hook (<code>useDebouncedValue</code>, <code>useFetch</code>, <code>useLocalStorage</code>, <code>useInterval</code>). Hay dùng làm vòng screen, kèm câu hỏi closure, event loop, re-render.</td></tr>
          <tr><td><b>Take-home + buổi review</b></td><td class="mono">1–4h</td><td>Vyer: app React + TypeScript duyệt repo GitHub (Relay / GraphQL, REST cũng được), thêm số issue, trang issue có phân trang 25 dòng và search; khuyên code khoảng 1 giờ, chấm chất lượng code hơn UX. ClearScore: idea board thêm/sửa inline/xóa/sắp xếp, mô tả tối đa 140 ký tự, 2–3 giờ, yêu cầu test, README nêu giả định và một bản deploy xem được. Buổi sau thường là đọc lại code cùng interviewer và thêm một tính năng nhỏ.</td></tr>
          <tr><td><b>Technical interview dài</b></td><td class="mono">90′</td><td>GitLab: sau bài viết ngắn và cuộc gọi recruiter là một buổi technical 90′ với Frontend Engineer hoặc Frontend Engineering Manager; handbook không mô tả nội dung, nên hỏi recruiter trước sẽ là review code, pair hay thảo luận dự án.</td></tr>
          <tr><td><b>Debug / code review</b></td><td class="mono">20–45′</td><td>Đọc một component đang lỗi (effect chạy vòng lặp, list nhảy sai dòng, rò listener), chỉ ra lỗi theo mức độ nghiêm trọng rồi sửa. Hay gặp ở vòng Senior vì phản ánh việc review PR hằng ngày.</td></tr>
          <tr><td><b>AI-assisted coding</b></td><td class="mono">~60′</td><td>Shopify dùng ba chế độ “không AI / tùy chọn / bắt buộc dùng AI”, chế độ bắt buộc giao đề quá lớn so với thời gian để xem bạn chia phạm vi, ra lệnh, kiểm chứng và ship. Theo Hello Interview, ứng viên dùng máy, IDE và công cụ AI của mình (Cursor, Claude Code, Copilot), repo gần như trống, đề mở rộng dần.</td></tr>
          <tr><td><b>Frontend system design</b></td><td class="mono">45–60′</td><td>Không code hoặc chỉ phác: autocomplete, news feed, bảng Kanban nhiều người sửa cùng lúc, trình soạn thảo. Atlassian có vòng system design 60′ riêng. Khung RADIO của GreatFrontEnd là cách trình bày phổ biến.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Chính sách AI khác nhau theo từng vòng, kể cả trong cùng một công ty: Shopify có cả ba chế độ; Canva bắt buộc dùng AI ở vòng coding; Meta có một vòng cho dùng, một vòng không; Anthropic yêu cầu take-home và phỏng vấn live không dùng AI trừ khi được cho phép rõ. Hỏi recruiter bằng văn bản trước mỗi vòng, và dù được dùng thì vẫn phải giải thích được từng dòng, nhất là phần ARIA và cleanup của effect, chỗ code AI sinh ra hay sai nhất.</p>
  </div>

  <div class="box">
    <h3>Đề phổ biến và cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Đề</th><th>Mức đạt</th><th>Mức Senior</th></tr></thead>
        <tbody>
          <tr><td><b>Autocomplete / typeahead</b></td><td>Debounce, hiện loading / rỗng / lỗi, click chọn được</td><td>Hủy request cũ bằng <code>AbortController</code> và bỏ response về muộn, ARIA combobox theo APG (<code>aria-activedescendant</code>, focus luôn ở input), phím mũi tên / Enter / Escape, cache theo query, nói được khi nào cần chuyển sang TanStack Query</td></tr>
          <tr><td><b>Data table: sort, filter, phân trang</b></td><td>Sort và filter đúng, chia trang được</td><td>State trong URL (share link, nút Back), validate params, hàm thuần filter → sort → paginate tách khỏi component, tie-break để trang không trùng dòng, <code>aria-sort</code> + nút trong <code>&lt;th&gt;</code>, phân trang phía server khi dữ liệu lớn</td></tr>
          <tr><td><b>Infinite scroll</b></td><td><code>IntersectionObserver</code> tải trang tiếp</td><td>Chặn tải trùng khi đang bay, biết trang cuối, dedupe theo id, nút “Load more” cho bàn phím, disconnect observer khi unmount, virtualization khi vài nghìn dòng</td></tr>
          <tr><td><b>Modal / dialog</b></td><td>Mở, đóng, có overlay</td><td>Ưu tiên <code>&lt;dialog&gt;</code> + <code>showModal()</code> (có sẵn focus trap, Escape, inert nền), trả focus về nút mở, <code>aria-labelledby</code>, không cuộn trang nền, render qua portal khi dùng div</td></tr>
          <tr><td><b>Form có validate</b></td><td>Validate khi submit, hiện lỗi</td><td>Label gắn đúng, <code>aria-invalid</code> + <code>aria-describedby</code>, focus vào field lỗi đầu tiên, chặn submit hai lần, map lỗi từ server về field, React Hook Form + Zod, giải thích controlled vs uncontrolled</td></tr>
          <tr><td><b>Todo / Kanban</b></td><td>Thêm, sửa, xóa, filter</td><td>State tối thiểu (filter tính khi render, không lưu mảng đã lọc), cập nhật immutable, key là id, <code>useReducer</code> khi nhiều action, persist <code>localStorage</code>, kéo thả có phương án bàn phím</td></tr>
          <tr><td><b>Component UI accessible (tabs, accordion, star rating)</b></td><td>Dùng được bằng chuột</td><td>Đúng pattern APG: tabs có <code>role="tablist"</code> + roving tabindex + phím mũi tên; accordion dùng <code>&lt;button aria-expanded&gt;</code> hoặc <code>&lt;details&gt;</code>; star rating là nhóm radio thật, hover không đổi giá trị đã chọn; API component gọn (controlled / uncontrolled)</td></tr>
          <tr><td><b>Custom hook (<code>useFetch</code>, <code>useDebouncedValue</code>, <code>useInterval</code>)</b></td><td>Chạy đúng ca chính</td><td>Cleanup đầy đủ, không race condition, dependency đúng mà không vòng lặp (<code>useEffectEvent</code> cho callback mới nhất), viết test bằng <code>renderHook</code>, biết lúc nào nên dùng thư viện thay vì tự viết</td></tr>
          <tr><td><b>Tic-tac-toe / game lưới</b></td><td>Chơi được, xác định thắng / hòa</td><td>Lưới bằng <code>&lt;button&gt;</code>, state là mảng ô + lượt suy ra từ số nước đi, kiểm tra thắng cho N×N, undo bằng lịch sử bất biến, thông báo kết quả qua <code>aria-live</code></td></tr>
          <tr><td><b>Frontend system design</b></td><td>Vẽ được component tree, API, state</td><td>Hỏi yêu cầu trước, data model và chuẩn hóa, chiến lược fetch / cache / invalidation, optimistic update, offline, hiệu năng (virtualization, code splitting, INP), accessibility, i18n, đo lường và rollout</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">GreatFrontEnd nhấn mạnh với đề component, interviewer chấm API props, ARIA và hỗ trợ bàn phím nặng hơn giao diện đẹp, và nên thêm accessibility ngay khi UI cơ bản chạy. ClearScore ghi rõ muốn thấy code gọn, unit test, README giải thích quyết định. Câu hỏi gần như chắc chắn gặp với mọi đề có fetch: “người dùng gõ nhanh / đổi trang nhanh thì sao?”.</p>
  </div>

  <div class="box">
    <h3>Chia 60 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–5′</td><td>Hỏi lại yêu cầu: dữ liệu từ đâu (API thật, mock, prop), bao nhiêu dòng, cần hỗ trợ bàn phím / screen reader không, được dùng thư viện nào (React Router, TanStack Query, UI kit), có cần test không, môi trường (CodeSandbox, StackBlitz, máy mình).</td></tr>
          <tr><td class="mono">5–10′</td><td>Nói kế hoạch: component tree, state nằm ở đâu (local, URL, server), state nào suy ra được, props và event. Nêu rõ MVP và phần sẽ làm nếu còn giờ.</td></tr>
          <tr><td class="mono">10–35′</td><td>Markup tĩnh → state → handler → fetch. Giữ app luôn chạy được, kiểm tra trên trình duyệt sau mỗi bước, vừa làm vừa nói.</td></tr>
          <tr><td class="mono">35–50′</td><td>Ca biên: loading, rỗng, lỗi, gõ nhanh, bấm hai lần, mạng chậm, unmount giữa chừng. Thêm ARIA và phím tắt theo APG.</td></tr>
          <tr><td class="mono">50–60′</td><td>Dọn code, nói sẽ test gì (RTL query theo role, MSW mock API), trade-off, và bản production khác gì (TanStack Query, virtualization, phân trang server, i18n).</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag ok">Nên</span>
      <ul>
        <li>Nghĩ thành tiếng, hỏi trước khi giả định.</li>
        <li>Chuẩn bị sẵn template Vite + React + TypeScript strict có Vitest, Testing Library và ESLint với <code>eslint-plugin-react-hooks</code>.</li>
        <li>Giữ state tối thiểu: cái gì tính được từ props / state thì tính khi render.</li>
        <li>Mọi effect có fetch, timer, listener đều có cleanup.</li>
        <li>Dùng phần tử HTML đúng nghĩa trước (<code>&lt;button&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;dialog&gt;</code>, <code>&lt;form&gt;</code>), thêm ARIA khi HTML không đủ.</li>
        <li>Key là id ổn định từ dữ liệu.</li>
        <li>Thuộc sẵn: autocomplete có hủy request, table với URL state, <code>useDebouncedValue</code>, modal bằng <code>&lt;dialog&gt;</code>, tabs theo APG.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">Tránh</span>
      <ul>
        <li>Effect chỉ để đồng bộ state suy ra (<code>useEffect(() =&gt; setTotal(...), [items])</code>).</li>
        <li><code>arr.sort()</code>, <code>push</code>, gán thuộc tính trên state hoặc props.</li>
        <li><code>&lt;div onClick&gt;</code> thay cho nút, input không label.</li>
        <li>Fetch trong effect không hủy, không kiểm tra <code>res.ok</code>.</li>
        <li>Object / mảng tạo mới mỗi render làm dependency của effect.</li>
        <li>Thêm <code>useMemo</code> / <code>useCallback</code> khắp nơi mà không giải thích được vì sao.</li>
        <li>Chấp nhận code AI gợi ý mà không đọc lại dependency array và cleanup.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: autocomplete có debounce, hủy request cũ, ARIA combobox theo APG</h3>
<pre>import { useEffect, useEffectEvent, useId, useState, type KeyboardEvent } from 'react';

export type Item = { id: string; label: string };

type Props = {
  label: string;
  fetchItems: (query: string, signal: AbortSignal) =&gt; Promise&lt;Item[]&gt;;
  onSelect: (item: Item) =&gt; void;
  delay?: number;
  minChars?: number;
};

export function useDebouncedValue&lt;T&gt;(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() =&gt; {
    const t = setTimeout(() =&gt; setDebounced(value), delay);
    return () =&gt; clearTimeout(t); // a new keystroke cancels the pending update
  }, [value, delay]);
  return debounced;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Autocomplete({ label, fetchItems, onSelect, delay = 300, minChars = 2 }: Props) {
  const id = useId();
  const listId = \`\${id}-listbox\`;
  const [query, setQuery] = useState('');
  const [items, setItems] = useState&lt;Item[]&gt;([]);
  const [status, setStatus] = useState&lt;Status&gt;('idle');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1); // index of the visually focused option
  const term = useDebouncedValue(query.trim(), delay);
  const enough = term.length &gt;= minChars;

  // Always calls the latest fetchItems prop without making it an effect dependency (React 19.2+)
  const load = useEffectEvent(fetchItems);

  useEffect(() =&gt; {
    if (term.length &lt; minChars) return;
    const controller = new AbortController();
    setStatus('loading');
    load(term, controller.signal)
      .then((data) =&gt; {
        if (controller.signal.aborted) return; // stale response: a newer term owns the UI
        setItems(data);
        setActive(-1);
        setStatus('success');
      })
      .catch(() =&gt; {
        if (!controller.signal.aborted) setStatus('error');
      });
    return () =&gt; controller.abort(); // cancels the in-flight request when term changes or on unmount
  }, [term, minChars]);

  const results = enough ? items : [];
  const expanded = open &amp;&amp; results.length &gt; 0;
  const optionId = (i: number) =&gt; \`\${id}-opt-\${i}\`;

  function choose(item: Item) {
    setQuery(item.label);
    setOpen(false);
    setActive(-1);
    onSelect(item);
  }

  function onKeyDown(e: KeyboardEvent&lt;HTMLInputElement&gt;) {
    const n = results.length;
    switch (e.key) {
      case 'ArrowDown':
        if (n === 0) return;
        e.preventDefault(); // keep the caret where it is
        setOpen(true);
        setActive((i) =&gt; (!expanded || i &gt;= n - 1 ? 0 : i + 1)); // wraps last -&gt; first
        break;
      case 'ArrowUp':
        if (n === 0) return;
        e.preventDefault();
        setOpen(true);
        setActive((i) =&gt; (!expanded || i &lt;= 0 ? n - 1 : i - 1)); // wraps first -&gt; last
        break;
      case 'Enter':
        if (expanded &amp;&amp; active &gt;= 0) {
          e.preventDefault(); // don't submit the surrounding form
          choose(results[active]);
        }
        break;
      case 'Escape':
        if (expanded) {
          setOpen(false);
          setActive(-1);
        } else {
          setQuery('');
        }
        break;
    }
  }

  const message =
    !enough ? '' :
    status === 'loading' ? 'Loading…' :
    status === 'error' ? 'Could not load suggestions' :
    status === 'success' ? (items.length === 0 ? 'No results' : \`\${items.length} results\`) : '';

  return (
    &lt;div&gt;
      &lt;label htmlFor={\`\${id}-input\`}&gt;{label}&lt;/label&gt;
      &lt;input
        id={\`\${id}-input\`}
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={expanded}
        aria-controls={listId}
        aria-activedescendant={expanded &amp;&amp; active &gt;= 0 ? optionId(active) : undefined}
        autoComplete="off"
        value={query}
        onChange={(e) =&gt; {
          setQuery(e.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onKeyDown={onKeyDown}
        onBlur={() =&gt; setOpen(false)}
      /&gt;
      &lt;ul id={listId} role="listbox" aria-label={label} hidden={!expanded}&gt;
        {results.map((item, i) =&gt; (
          &lt;li
            key={item.id}
            id={optionId(i)}
            role="option"
            aria-selected={i === active}
            onMouseDown={(e) =&gt; e.preventDefault()} // keep focus in the input so onBlur doesn't close first
            onClick={() =&gt; choose(item)}
          &gt;
            {item.label}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
      &lt;p role="status"&gt;{message}&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>
    <p class="muted note">Ba lớp chống lỗi mạng: debounce để không gọi API mỗi phím; cleanup của effect gọi <code>abort()</code> khi term đổi hoặc unmount nên request cũ bị hủy; và kiểm tra <code>signal.aborted</code> trước khi set state phòng khi <code>fetchItems</code> không tôn trọng signal (response cũ về sau response mới sẽ bị bỏ). <code>useEffectEvent</code> (React 19.2+) cho effect gọi bản <code>fetchItems</code> mới nhất mà không phải đưa prop đó vào dependency, nên parent truyền arrow function inline cũng không làm fetch lại mỗi lần render. Theo APG, DOM focus luôn ở input, option đang chọn chỉ là “visual focus” qua <code>aria-activedescendant</code> + <code>aria-selected</code>; <code>onMouseDown</code> chặn mặc định để click option không làm input blur và đóng list trước. Đã test bằng Vitest + Testing Library + user-event: chỉ một request khi gõ nhanh, request cũ bị abort và response muộn bị bỏ qua, phím mũi tên vòng đầu/cuối, Enter chọn, Escape đóng rồi xóa, unmount hủy request. Câu hỏi tiếp theo hay gặp: thêm cache theo term để gõ lùi không gọi lại API (hoặc chuyển sang TanStack Query với <code>queryKey: ['merchants', term]</code> và <code>signal</code> có sẵn)? Chọn xong thì query đổi thành label và lại fetch thêm một lần, chặn thế nào? Highlight phần khớp trong option mà không dùng <code>dangerouslySetInnerHTML</code>? Vì sao không dùng <code>useDeferredValue</code> thay debounce (nó không giảm số request)?</p>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: data table sort + filter + phân trang, state trong URL (React Router)</h3>
<pre>import { useMemo } from 'react';
import { useSearchParams } from 'react-router';

export type Txn = { id: string; date: string; note: string; category: string; amount: number };
type SortKey = 'date' | 'note' | 'amount';
type Dir = 'asc' | 'desc';
type View = { q: string; sort: SortKey; dir: Dir; page: number };

const SORT_KEYS: readonly SortKey[] = ['date', 'note', 'amount'];
const COLUMNS: { key: SortKey; label: string }[] = [
  { key: 'date', label: 'Date' },
  { key: 'note', label: 'Note' },
  { key: 'amount', label: 'Amount' },
];
const collator = new Intl.Collator('vi', { sensitivity: 'base' });
const vnd = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

// The URL is untrusted input: anything invalid falls back to a default instead of crashing
export function readView(sp: URLSearchParams): View {
  const raw = sp.get('sort');
  const sort = SORT_KEYS.includes(raw as SortKey) ? (raw as SortKey) : 'date';
  const dir: Dir = sp.get('dir') === 'asc' ? 'asc' : 'desc';
  const page = Math.max(1, Number.parseInt(sp.get('page') ?? '', 10) || 1);
  return { q: sp.get('q') ?? '', sort, dir, page };
}

// Pure: filter -&gt; sort -&gt; paginate. Easy to unit test and to move to the server later.
export function selectRows(rows: readonly Txn[], { q, sort, dir, page }: View, pageSize = 10) {
  const needle = q.trim().toLocaleLowerCase('vi');
  const filtered = needle
    ? rows.filter((r) =&gt; \`\${r.note} \${r.category}\`.toLocaleLowerCase('vi').includes(needle))
    : rows;
  const sign = dir === 'asc' ? 1 : -1;
  const sorted = filtered.toSorted((a, b) =&gt; {
    const c =
      sort === 'amount' ? a.amount - b.amount :
      sort === 'note' ? collator.compare(a.note, b.note) :
      a.date.localeCompare(b.date); // ISO dates sort as strings
    return c * sign || a.id.localeCompare(b.id); // tie-break keeps page boundaries stable
  });
  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const current = Math.min(page, pageCount); // ?page=99 after filtering shows the last page
  return {
    total: sorted.length,
    pageCount,
    page: current,
    rows: sorted.slice((current - 1) * pageSize, current * pageSize),
  };
}

export function TransactionsTable({ rows }: { rows: readonly Txn[] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = readView(searchParams);
  // searchParams keeps its identity until the URL changes, so this only recomputes when needed
  const result = useMemo(() =&gt; selectRows(rows, readView(searchParams)), [rows, searchParams]);

  function update(patch: Record&lt;string, string | null&gt;, resetPage = true) {
    setSearchParams((prev) =&gt; {
      const next = new URLSearchParams(prev); // keep params we don't own
      for (const [k, v] of Object.entries(patch)) {
        if (v) next.set(k, v);
        else next.delete(k);
      }
      if (resetPage) next.delete('page'); // new filter or sort starts from page 1
      return next;
    });
  }

  function toggleSort(key: SortKey) {
    const dir: Dir = view.sort === key &amp;&amp; view.dir === 'asc' ? 'desc' : 'asc';
    update({ sort: key, dir });
  }

  const goTo = (p: number) =&gt; update({ page: p &gt; 1 ? String(p) : null }, false);

  return (
    &lt;section&gt;
      &lt;form
        role="search"
        onSubmit={(e) =&gt; {
          e.preventDefault();
          const q = String(new FormData(e.currentTarget).get('q') ?? '').trim();
          update({ q: q || null });
        }}
      &gt;
        &lt;label htmlFor="txn-q"&gt;Search&lt;/label&gt;
        {/* Uncontrolled; key remounts it when q changes from outside (Back button, shared link) */}
        &lt;input id="txn-q" name="q" type="search" defaultValue={view.q} key={view.q} /&gt;
        &lt;button type="submit"&gt;Apply&lt;/button&gt;
      &lt;/form&gt;

      &lt;table&gt;
        &lt;caption&gt;Transactions ({result.total})&lt;/caption&gt;
        &lt;thead&gt;
          &lt;tr&gt;
            {COLUMNS.map((c) =&gt; (
              &lt;th
                key={c.key}
                scope="col"
                aria-sort={view.sort === c.key ? (view.dir === 'asc' ? 'ascending' : 'descending') : undefined}
              &gt;
                &lt;button type="button" onClick={() =&gt; toggleSort(c.key)}&gt;{c.label}&lt;/button&gt;
              &lt;/th&gt;
            ))}
          &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
          {result.rows.length === 0 ? (
            &lt;tr&gt;&lt;td colSpan={3}&gt;No transactions match.&lt;/td&gt;&lt;/tr&gt;
          ) : (
            result.rows.map((r) =&gt; (
              &lt;tr key={r.id}&gt;
                &lt;td&gt;{r.date}&lt;/td&gt;
                &lt;td&gt;{r.note}&lt;/td&gt;
                &lt;td&gt;{vnd.format(r.amount)}&lt;/td&gt;
              &lt;/tr&gt;
            ))
          )}
        &lt;/tbody&gt;
      &lt;/table&gt;

      &lt;nav aria-label="Pagination"&gt;
        &lt;button type="button" disabled={result.page &lt;= 1} onClick={() =&gt; goTo(result.page - 1)}&gt;Previous&lt;/button&gt;
        &lt;span aria-live="polite"&gt;Page {result.page} of {result.pageCount}&lt;/span&gt;
        &lt;button type="button" disabled={result.page &gt;= result.pageCount} onClick={() =&gt; goTo(result.page + 1)}&gt;Next&lt;/button&gt;
      &lt;/nav&gt;
    &lt;/section&gt;
  );
}</pre>
    <p class="muted note">URL là nguồn sự thật duy nhất: không có <code>useState</code> nào cho sort / filter / trang, nên link chia sẻ được, F5 không mất, nút Back quay lại đúng trang. Params là input không tin được nên <code>readView</code> đưa mọi giá trị lạ về mặc định, còn <code>selectRows</code> là hàm thuần (filter → sort → paginate) dễ test và sau này chuyển sang server chỉ cần đổi chỗ gọi. Sort có tie-break theo id để hai dòng bằng giá trị không nhảy qua lại giữa các trang; <code>page</code> vượt quá thì kẹp về trang cuối. Ô search là uncontrolled, submit mới ghi URL; <code>key={view.q}</code> remount input khi URL đổi từ bên ngoài (Back, link chia sẻ), tránh phải đồng bộ state bằng effect. Đổi filter hoặc sort thì xóa <code>page</code>. Dùng <code>useSearchParams</code> từ <code>react-router</code>, chạy được với v7 và v8 (đã test trên react-router 8.5.0 trong <code>MemoryRouter</code>). Câu hỏi tiếp theo hay gặp: 50.000 dòng thì sao (phân trang / sort phía server với <code>limit</code>, <code>cursor</code>, đưa params vào <code>queryKey</code> của TanStack Query, <code>placeholderData: keepPreviousData</code>)? Muốn search theo từng phím gõ thì đặt debounce ở đâu và có nên <code>replace</code> thay vì push history? Schema params có type (TanStack Router <code>validateSearch</code> với Zod) khác gì cách parse tay này?</p>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài code review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample code review: find the bugs in 10 minutes</span></h3>
<pre>// React 19 + TypeScript. Amounts are integers in VND.
import { useEffect, useState } from 'react';

type Txn = { id: string; date: string; note: string; amount: number };

function useTransactions(filters: { month: string }) {
  const [data, setData] = useState&lt;Txn[]&gt;([]);
  useEffect(() =&gt; {
    fetch(\`/api/transactions?month=\${filters.month}\`)
      .then((res) =&gt; res.json())
      .then(setData);
  }, [filters]);
  return data;
}

function Row({ txn, checked, onToggle }: { txn: Txn; checked: boolean; onToggle: () =&gt; void }) {
  return (
    &lt;li&gt;
      &lt;input type="checkbox" checked={checked} onChange={onToggle} /&gt;
      &lt;span&gt;{txn.date}&lt;/span&gt;
      &lt;input defaultValue={txn.note} aria-label="Note" /&gt;
      &lt;span&gt;{txn.amount.toLocaleString('vi-VN')} ₫&lt;/span&gt;
    &lt;/li&gt;
  );
}

export function TransactionList({ month, onDelete }: { month: string; onDelete: (ids: string[]) =&gt; void }) {
  if (!month) return &lt;p&gt;Pick a month first.&lt;/p&gt;;

  const data = useTransactions({ month });
  const [newestFirst, setNewestFirst] = useState(true);
  const [selected, setSelected] = useState&lt;string[]&gt;([]);
  const [total, setTotal] = useState(0);

  useEffect(() =&gt; {
    setTotal(data.reduce((sum, t) =&gt; sum + t.amount, 0));
  }, [data]);

  useEffect(() =&gt; {
    const onKey = (e: KeyboardEvent) =&gt; {
      if (e.key === 'Delete' &amp;&amp; selected.length &gt; 0) onDelete(selected);
    };
    window.addEventListener('keydown', onKey);
  }, []);

  const rows = data.sort((a, b) =&gt;
    newestFirst ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date),
  );

  const toggle = (id: string) =&gt;
    setSelected((s) =&gt; (s.includes(id) ? s.filter((x) =&gt; x !== id) : [...s, id]));

  return (
    &lt;section&gt;
      &lt;div className="sort" onClick={() =&gt; setNewestFirst(!newestFirst)}&gt;
        {newestFirst ? 'Newest first' : 'Oldest first'}
      &lt;/div&gt;
      &lt;ul&gt;
        {rows.map((t, i) =&gt; (
          &lt;Row key={i} txn={t} checked={selected.includes(t.id)} onToggle={() =&gt; toggle(t.id)} /&gt;
        ))}
      &lt;/ul&gt;
      &lt;p&gt;Total: {total.toLocaleString('vi-VN')} ₫&lt;/p&gt;
    &lt;/section&gt;
  );
}</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (8 lỗi)</span><span class="l-en">Show the answer (8 bugs)</span></span></summary><div class="ans">
    <ul class="l-vi">
      <li><b>Gọi hook có điều kiện:</b> <code>if (!month) return …</code> đứng trước <code>useTransactions</code> và các <code>useState</code>, nên số hook thay đổi giữa các lần render; khi <code>month</code> từ rỗng thành có giá trị React báo “Rendered more hooks than during the previous render”. Đưa mọi hook lên trước, early return đặt sau hook cuối, hoặc để parent không render component khi chưa có tháng.</li>
      <li><b>Dependency là object mới mỗi render:</b> <code>useTransactions({ month })</code> tạo object mới mỗi lần, effect phụ thuộc <code>[filters]</code> nên chạy lại sau mỗi render; <code>setData</code> nhận mảng mới từ <code>res.json()</code> gây render tiếp, thành vòng lặp gọi API vô tận. Nhận <code>month: string</code> và đặt <code>[month]</code> làm dependency.</li>
      <li><b>Fetch không cleanup (race condition):</b> đổi tháng nhanh thì response tháng cũ có thể về sau và ghi đè tháng mới; component unmount vẫn set state; không kiểm tra <code>res.ok</code> nên trang lỗi 500 bị coi là dữ liệu, lỗi mạng thành unhandled rejection. Dùng <code>AbortController</code> trong cleanup, kiểm tra <code>res.ok</code>, có state lỗi (hoặc dùng TanStack Query).</li>
      <li><b>State suy ra lưu thừa + effect đồng bộ:</b> <code>total</code> tính được từ <code>data</code> nhưng lại lưu vào state rồi set trong effect: thêm một lần render, và lần render đầu sau khi <code>data</code> đổi hiển thị tổng cũ. Tính thẳng khi render: <code>const total = data.reduce(…)</code> (bọc <code>useMemo</code> nếu đo thấy chậm).</li>
      <li><b>Listener không gỡ + stale closure:</b> effect <code>[]</code> gắn <code>keydown</code> lên <code>window</code> nhưng không trả cleanup, nên listener sống sau unmount và bị gắn hai lần trong StrictMode; handler chụp <code>selected</code> lúc mount (mảng rỗng) nên phím Delete không bao giờ xóa được gì. Trả <code>() =&gt; window.removeEventListener('keydown', onKey)</code> và đọc giá trị mới nhất bằng <code>useEffectEvent</code> (hoặc đưa <code>selected</code>, <code>onDelete</code> vào dependency).</li>
      <li><b>Mutate state khi render:</b> <code>data.sort(…)</code> sắp xếp tại chỗ mảng đang nằm trong state: render không còn thuần, state bị đổi mà React không biết, và mọi so sánh tham chiếu (memo, dependency) đều sai. Dùng <code>data.toSorted(…)</code> hoặc <code>[...data].sort(…)</code>.</li>
      <li><b>Key bằng index trên list sắp xếp được:</b> <code>key={i}</code> nên khi đổi thứ tự sort, React giữ nguyên DOM và state theo vị trí; ô ghi chú <code>defaultValue</code> (uncontrolled) đang gõ dở sẽ dính sang giao dịch khác. Dùng <code>key={t.id}</code>.</li>
      <li><b>Accessibility:</b> nút đổi thứ tự là <code>&lt;div onClick&gt;</code>, không focus được bằng Tab, không bấm được bằng Enter / Space, screen reader không biết là nút; checkbox chọn dòng không có label nên chỉ đọc là “checkbox”. Dùng <code>&lt;button type="button"&gt;</code> (thêm <code>aria-pressed</code> hoặc ghi rõ trạng thái), và <code>aria-label={\`Select \${txn.note}\`}</code> hoặc bọc trong <code>&lt;label&gt;</code>.</li>
    </ul>
    <ul class="l-en">
      <li><b>Conditional hook call:</b> <code>if (!month) return …</code> runs before <code>useTransactions</code> and the <code>useState</code> calls, so the number of hooks changes between renders; when <code>month</code> goes from empty to set, React throws “Rendered more hooks than during the previous render”. Call every hook first and return early after the last one, or have the parent not render this component until a month is picked.</li>
      <li><b>An object created every render as a dependency:</b> <code>useTransactions({ month })</code> passes a fresh object each time and the effect depends on <code>[filters]</code>, so it re-runs after every render; <code>setData</code> gets a new array from <code>res.json()</code>, which triggers another render, and you have an endless request loop. Take <code>month: string</code> and depend on <code>[month]</code>.</li>
      <li><b>Fetch without cleanup (race condition):</b> switch months quickly and the old month's response can land after the new one and overwrite it; it also sets state after unmount. There's no <code>res.ok</code> check, so a 500 page is treated as data, and a network error becomes an unhandled rejection. Abort with an <code>AbortController</code> in the cleanup, check <code>res.ok</code>, keep an error state, or just use TanStack Query.</li>
      <li><b>Derived state stored and synced with an effect:</b> <code>total</code> can be computed from <code>data</code>, but it's copied into state and set in an effect. That's an extra render, and the first render after <code>data</code> changes shows the old total. Compute it during render: <code>const total = data.reduce(…)</code>, with <code>useMemo</code> only if profiling says it's slow.</li>
      <li><b>Listener never removed, plus a stale closure:</b> the <code>[]</code> effect adds a <code>keydown</code> listener to <code>window</code> with no cleanup, so it outlives the component and gets attached twice under StrictMode. The handler also captures <code>selected</code> from the first render (an empty array), so pressing Delete never deletes anything. Return <code>() =&gt; window.removeEventListener('keydown', onKey)</code> and read the latest values through <code>useEffectEvent</code> (or list <code>selected</code> and <code>onDelete</code> as dependencies).</li>
      <li><b>Mutating state during render:</b> <code>data.sort(…)</code> sorts the array that lives in state in place. Render is no longer pure, state changes behind React's back, and every reference comparison (memo, dependencies) becomes wrong. Use <code>data.toSorted(…)</code> or <code>[...data].sort(…)</code>.</li>
      <li><b>Index as key on a sortable list:</b> with <code>key={i}</code>, flipping the sort order makes React keep DOM nodes and state by position, so a half-typed note in the uncontrolled <code>defaultValue</code> input ends up on a different transaction. Use <code>key={t.id}</code>.</li>
      <li><b>Accessibility:</b> the sort toggle is a <code>&lt;div onClick&gt;</code>: you can't Tab to it, Enter and Space do nothing, and screen readers don't announce it as a button. The row checkbox has no label, so it's read as just “checkbox”. Use <code>&lt;button type="button"&gt;</code> (with <code>aria-pressed</code> or text that states the order) and give the checkbox <code>aria-label={\`Select \${txn.note}\`}</code> or wrap it in a <code>&lt;label&gt;</code>.</li>
    </ul></div></details>
    <p class="muted note">Đoạn code này qua được <code>tsc --strict</code> mà không báo lỗi nào: TypeScript không bắt được lỗi về hook, effect hay accessibility. Preset <code>recommended</code> của <code>eslint-plugin-react-hooks</code> bắt được một phần (<code>rules-of-hooks</code>, <code>exhaustive-deps</code>, <code>set-state-in-effect</code>, <code>immutability</code>), <code>eslint-plugin-jsx-a11y</code> bắt lỗi div có onClick; lỗi key, race condition thì vẫn phải đọc bằng mắt. Khi trình bày, nên xếp theo mức độ nghiêm trọng: vòng lặp API và hook có điều kiện trước, accessibility và state thừa sau.</p>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted small">Làm trên template Vite + React + TypeScript của bạn hoặc StackBlitz, bấm giờ, vừa làm vừa nói và quay màn hình. Mỗi bài viết ít nhất hai test bằng Vitest + Testing Library, query theo role. Bài 3 và 4 là dạng hay gặp nhất.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Bài</th><th>Giờ</th><th>Sau tuần</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td>Danh sách giao dịch kiểu todo: thêm, sửa inline, xóa, filter Tất cả / Thu / Chi, tổng tiền VND tính khi render (không lưu state suy ra), key là id, persist <code>localStorage</code> bằng lazy initializer</td><td class="mono">30′</td><td class="mono">1</td></tr>
          <tr><td class="mono">2</td><td>Tic-tac-toe N×N: lưới bằng <code>&lt;button&gt;</code>, lượt chơi suy ra từ lịch sử, kiểm tra thắng / hòa, undo về nước bất kỳ, thông báo kết quả qua <code>aria-live</code></td><td class="mono">30′</td><td class="mono">1</td></tr>
          <tr><td class="mono">3</td><td>Viết lại autocomplete ở trên từ đầu, gọi <code>dummyjson.com/users/search?q=</code> (thêm <code>select=firstName,lastName</code>), không nhìn đáp án; test request cũ bị hủy và điều hướng bàn phím</td><td class="mono">40′</td><td class="mono">2</td></tr>
          <tr><td class="mono">4</td><td>Data table sản phẩm với state trong URL, phân trang và sort phía server bằng <code>dummyjson.com/products?limit=10&amp;skip=…&amp;sortBy=price&amp;order=desc</code> + TanStack Query (<code>queryKey</code> chứa params, giữ dữ liệu trang trước khi đang tải)</td><td class="mono">45′</td><td class="mono">2</td></tr>
          <tr><td class="mono">5</td><td>Dialog “Thêm giao dịch” bằng <code>&lt;dialog&gt;</code> + <code>showModal()</code>, form React Hook Form + Zod: lỗi gắn <code>aria-describedby</code>, focus field lỗi đầu tiên, chặn submit hai lần, đóng thì trả focus về nút mở</td><td class="mono">40′</td><td class="mono">3</td></tr>
          <tr><td class="mono">6</td><td>Infinite scroll repo từ <code>api.github.com/search/repositories?q=react&amp;per_page=30&amp;page=</code>: <code>IntersectionObserver</code> + <code>useInfiniteQuery</code>, chặn tải trùng, dừng ở trang cuối, có nút “Load more”, đo bằng React Profiler rồi thêm virtualization (TanStack Virtual)</td><td class="mono">45′</td><td class="mono">4</td></tr>
          <tr><td class="mono">7</td><td>Code review đoạn mẫu ở trên trong 10′, rồi viết lại cho đúng và thêm test: đổi tháng nhanh không hiện dữ liệu cũ, phím Delete xóa đúng dòng đang chọn, đổi sort không làm ghi chú nhảy dòng</td><td class="mono">25′</td><td class="mono">4</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Muốn luyện take-home thật: làm đề idea board của ClearScore (2–3 giờ) hoặc đề Vyer (khoảng 1 giờ code) bằng stack của Expense Tracker Web, deploy bản xem được, README nêu giả định và việc chưa làm, rồi tự chấm theo bảng “Đề phổ biến và cách chấm”. Tuần 3 thêm một bài file explorer từ JSON lồng nhau (đề GreatFrontEnd liệt kê cho Atlassian); tuần 4 thêm một buổi frontend system design 45′ theo RADIO (vd autocomplete toàn cục hoặc bảng Kanban nhiều người sửa) với bạn bè đóng vai interviewer.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://www.greatfrontend.com/front-end-interview-playbook/user-interface" target="_blank" rel="noopener">GreatFrontEnd · User interface coding (đề hay gặp, tiêu chí chấm)</a></li>
      <li><a href="https://www.greatfrontend.com/blog/machine-coding-round" target="_blank" rel="noopener">GreatFrontEnd · Machine coding round</a></li>
      <li><a href="https://www.greatfrontend.com/front-end-system-design-playbook/framework" target="_blank" rel="noopener">GreatFrontEnd · RADIO framework</a></li>
      <li><a href="https://www.greatfrontend.com/interviews/company/atlassian/questions-guides" target="_blank" rel="noopener">GreatFrontEnd · Atlassian front end interview guide</a></li>
      <li><a href="https://www.atlassian.com/company/careers/resources/interviewing/engineering" target="_blank" rel="noopener">Atlassian · Engineering interviews</a></li>
      <li><a href="https://handbook.gitlab.com/job-families/engineering/development/frontend/senior/" target="_blank" rel="noopener">GitLab Handbook · Senior Frontend Engineer (quy trình tuyển)</a></li>
      <li><a href="https://github.com/ClearScore/tech-screen" target="_blank" rel="noopener">GitHub · ClearScore tech-screen (tiêu chí chấm)</a></li>
      <li><a href="https://github.com/ClearScore/tech-screen/tree/master/idea-board" target="_blank" rel="noopener">GitHub · ClearScore idea board</a></li>
      <li><a href="https://github.com/VyerTechnologies/front-end-coding-challenge" target="_blank" rel="noopener">GitHub · Vyer Technologies front-end coding challenge</a></li>
      <li><a href="https://coderpad.io/blog/hiring-developers/in-the-ai-era-shopify-is-investing-in-junior-engineers-not-cutting-them/" target="_blank" rel="noopener">CoderPad · Shopify và ba chế độ dùng AI khi phỏng vấn (04/2026)</a></li>
      <li><a href="https://www.hellointerview.com/blog/shopify-ai-enabled-coding" target="_blank" rel="noopener">Hello Interview · Shopify AI-enabled coding</a></li>
      <li><a href="https://www.hellointerview.com/blog/meta-ai-enabled-coding" target="_blank" rel="noopener">Hello Interview · Meta AI-enabled coding round</a></li>
      <li><a href="https://www.canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews/" target="_blank" rel="noopener">Canva Engineering · Yes, you can use AI in our interviews</a></li>
      <li><a href="https://www.anthropic.com/candidate-ai-guidance" target="_blank" rel="noopener">Anthropic · Guidance on candidates' AI usage</a></li>
      <li><a href="https://viblo.asia/q/phong-van-thuat-toan-front-end-DVK2n6NeKLj" target="_blank" rel="noopener">Viblo · Phỏng vấn thuật toán front-end (2020)</a></li>
      <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/" target="_blank" rel="noopener">W3C APG · Combobox with list autocomplete</a></li>
      <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" target="_blank" rel="noopener">W3C APG · Dialog (modal) pattern</a></li>
      <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/" target="_blank" rel="noopener">W3C APG · Sortable table</a></li>
      <li><a href="https://react.dev/learn/you-might-not-need-an-effect" target="_blank" rel="noopener">React · You Might Not Need an Effect</a></li>
      <li><a href="https://react.dev/learn/synchronizing-with-effects" target="_blank" rel="noopener">React · Synchronizing with Effects (fetch và cleanup)</a></li>
      <li><a href="https://react.dev/reference/react/useEffectEvent" target="_blank" rel="noopener">React · useEffectEvent</a></li>
      <li><a href="https://react.dev/reference/rules/rules-of-hooks" target="_blank" rel="noopener">React · Rules of Hooks</a></li>
      <li><a href="https://react.dev/learn/updating-arrays-in-state" target="_blank" rel="noopener">React · Updating arrays in state</a></li>
      <li><a href="https://react.dev/learn/rendering-lists" target="_blank" rel="noopener">React · Rendering lists (key)</a></li>
      <li><a href="https://react.dev/reference/eslint-plugin-react-hooks" target="_blank" rel="noopener">React · eslint-plugin-react-hooks</a></li>
      <li><a href="https://reactrouter.com/api/hooks/useSearchParams" target="_blank" rel="noopener">React Router · useSearchParams</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortController" target="_blank" rel="noopener">MDN · AbortController</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog" target="_blank" rel="noopener">MDN · &lt;dialog&gt;</a></li>
      <li><a href="https://testing-library.com/docs/user-event/intro" target="_blank" rel="noopener">Testing Library · user-event</a></li>
      <li><a href="https://dummyjson.com/docs/products" target="_blank" rel="noopener">DummyJSON · Products API (limit, skip, sortBy, order)</a></li>
    </ul>
  </div>`
};
