/* Next.js: static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. */
const NX_PAGE={
 hero:`  <span class="eyebrow">Lộ trình phỏng vấn · Next.js · 10/2026</span>
  <h1>Next.js trong 4 tuần</h1>
  <p class="lede">Tổng hợp từ các JD React/Next.js trên TopDev, ITviec, TopCV, JobsGO, VietnamWorks, LinkedIn và các trang tuyển dụng quốc tế. Kiến thức bám theo Next.js 16.4 và React 19.3, bản mới nhất tính đến 10/2026. Cùng cấu trúc với lộ trình React Native và Flutter.</p>`,

 jd:`  <div style="display:grid;gap:8px">
    <h2>Các JD Next.js thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 28 JD đọc đầy đủ (20 Việt Nam, 8 quốc tế; 25 tin là Senior/Lead). TopCV và JobsGO chặn đọc chi tiết, nên 4 tin từ hai trang này chỉ lấy từ đoạn trích của công cụ tìm kiếm và không tính vào bảng tần suất. Thanh xanh là yêu cầu bắt buộc, thanh tím là điểm cộng.</p>
  </div>
  <div class="box"><div class="freq" id="nx-freq"></div></div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li>React + TypeScript vững: hooks, rendering, type cho dữ liệu API</li>
        <li>Next.js trong production: routing, SSR/SSG, chọn chiến lược render</li>
        <li>State management: Redux, Zustand hoặc TanStack Query</li>
        <li>CSS / Tailwind, thư viện UI (MUI, shadcn/ui), responsive</li>
        <li>REST API, xử lý lỗi, tích hợp backend</li>
        <li>Tối ưu hiệu năng, nhiều tin ghi rõ Core Web Vitals (LCP, INP, CLS)</li>
        <li>Test: Jest/Vitest + Testing Library, Playwright/Cypress</li>
        <li>Git, code review, mentor (với Senior)</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li>App Router sâu: Server Components, Server Actions, caching, revalidation</li>
        <li>Backend để làm fullstack: NestJS, Go, Bun/Elysia, Supabase, SQL</li>
        <li>AI coding tool dùng hằng ngày và biết review code AI sinh ra</li>
        <li>CI/CD (GitHub Actions), Docker, Vercel / AWS</li>
        <li>Accessibility (WCAG), design system / Storybook</li>
        <li>Auth (OAuth/JWT), SEO, GraphQL</li>
        <li>React Native / Expo hoặc Flutter để làm cả mobile</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>LinkedIn và các trang quốc tế bổ sung gì</h3>
    <p class="muted small">Từ đoạn trích LinkedIn (không mở được trang chi tiết) và 8 JD đọc đầy đủ trên Ashby, Greenhouse, Workable, Lever. Djinni chặn bot nên chỉ có đoạn trích.</p>
    <ul>
      <li><b>Ít tin ghi rõ App Router:</b> trong 8 JD quốc tế chỉ LumiMeds ghi App Router và Server Components; Office Hours (đăng 10/2026) vẫn dùng Pages Router. Phỏng vấn vẫn hỏi App Router, nhưng nên chuẩn bị cả kiến thức Pages Router cho codebase cũ.</li>
      <li><b>AI tool là yêu cầu bình thường:</b> Office Hours, Seed Health, LumiMeds, Makai Labs đều ghi Claude Code, Cursor hoặc Copilot; LumiMeds còn đòi điều phối agent bằng Claude Agent SDK.</li>
      <li><b>Senior quốc tế nặng về chất lượng sản phẩm:</b> design system và component API, WCAG, Core Web Vitals, feature flag / A-B test, mentoring.</li>
      <li><b>LinkedIn Việt Nam:</b> các tin Senior Frontend (React/Next.js) mới thấy ở ekino, TymeX, NodeFlair, Unich Labs; một tin qua Robert Half cho B2B SaaS ở TP.HCM yêu cầu React, Next.js, TypeScript, Figma → code, performance, a11y, component library.</li>
    </ul>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức lương công khai</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">$180–200K / năm</td><td>Senior Frontend, Office Hours (Mỹ, remote/hybrid)</td></tr>
          <tr><td class="mono">$160–200K / năm</td><td>Senior Frontend, Ravenna (Seattle)</td></tr>
          <tr><td class="mono">$160–180K / năm</td><td>Senior Frontend, Seed Health (remote Mỹ)</td></tr>
          <tr><td class="mono">≤ $3,300 / tháng</td><td>Senior Frontend (React, Next.js), Stubbs trên Djinni (đoạn trích)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Đoạn trích LinkedIn ghi khoảng 73 đến 572 tin “Next.js” ở Việt Nam tùy thời điểm index, và khoảng 415 tin React Developer. Con số dao động mạnh nên chỉ để tham khảo quy mô.</p>
  </div>

  <div class="box">
    <h3>Senior trên TopDev, ITviec, TopCV</h3>
    <p class="muted small">Senior thường đòi 4–5+ năm, trong đó 1,5–4 năm Next.js. TopDev và ITviec ẩn lương sau đăng nhập. Nhiều tin đã đóng nhưng yêu cầu vẫn đại diện.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>Pharmacity</b> <span class="mono muted">TopDev · đã đóng</span></td><td class="mono">3+ React, 3+ Next.js</td><td>App Router, Server Actions, Middleware; caching; Core Web Vitals (LCP, INP, CLS); Storybook; Jest + Playwright; Sentry, OpenTelemetry</td></tr>
          <tr><td><b>DatVietVAC</b> <span class="mono muted">ITviec · đang mở</span></td><td class="mono">4+ năm</td><td>“AI Native”: Next.js + Flutter; bắt buộc Cursor / Copilot / Claude Code và review code AI; Jest + Playwright; mentor về coding agent</td></tr>
          <tr><td><b>Reclub</b> <span class="mono muted">ITviec · đang mở</span></td><td class="mono">5+ năm</td><td>Fullstack TypeScript (Bun, Elysia); Server Components, SSR; idempotency, webhook, queue, cache invalidation; App Router sâu là điểm cộng</td></tr>
          <tr><td><b>Live Payments</b> <span class="mono muted">ITviec · fintech</span></td><td class="mono">5+ năm fullstack</td><td>Next.js + NestJS/Go; retry, circuit breaker; AWS + Terraform; agentic AI tool “không chỉ chat”; tiếng Anh tốt</td></tr>
          <tr><td><b>Digital Unicorn</b> <span class="mono muted">ITviec · đã đóng</span></td><td class="mono">5+, 4+ Next.js</td><td>App Router, Server Components; NestJS, Supabase; Vitest + Testing Library; monorepo; dùng Claude/Codex hằng ngày</td></tr>
          <tr><td><b>YouPass</b> <span class="mono muted">ITviec · EdTech</span></td><td class="mono">2,5–5+ năm</td><td>Next.js + Golang; dashboard bảng dữ liệu lớn, form phức tạp; WebSocket/SSE, Redis. 30–45 triệu; công ty trả bản quyền Cursor, Claude, Codex</td></tr>
          <tr><td><b>CubicStack</b> <span class="mono muted">ITviec · fintech</span></td><td class="mono">4+ năm</td><td>Next.js + Redux, MUI; SEO, PWA; React Native</td></tr>
          <tr><td><b>C2C Tech Hub</b> <span class="mono muted">TopDev</span></td><td class="mono">5+ năm</td><td>Micro-frontend; soạn tài liệu đào tạo nội bộ; điểm cộng Cursor/Copilot/Devin và prompt engineering</td></tr>
          <tr><td><b>Homebase</b> <span class="mono muted">TopDev · proptech</span></td><td class="mono">5+ năm</td><td>React, Next.js, Redux, TypeScript; automated test, CI/CD</td></tr>
          <tr><td><b>ODK Media</b> <span class="mono muted">TopDev · streaming</span></td><td class="mono">3+ năm</td><td>TypeScript, Next.js; có bài test kỹ thuật; CV tiếng Anh; nhiều thiết bị kể cả smart TV</td></tr>
          <tr><td><b>BITA Vietnam</b> <span class="mono muted">TopDev</span></td><td class="mono">5+, 1,5+ Next.js</td><td>Animation (GSAP, Framer Motion), WCAG, Cypress/Playwright, GitHub Actions, tiếng Anh</td></tr>
          <tr><td><b>Lotus Technology</b> <span class="mono muted">TopCV · đoạn trích</span></td><td class="mono">5+ năm</td><td>Senior Next.js remote, tiếng Anh tốt. 45–50 triệu</td></tr>
          <tr><td><b>TPF Vietnam</b> <span class="mono muted">VietnamWorks · đang mở</span></td><td class="mono">5+ năm</td><td>Next.js + Expo; GraphQL; Stripe/Square; Vitest/Jest; tiếng Anh tốt. $2,000–3,000 / tháng</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Senior khác Middle ở:</b> JD Middle liệt kê chi tiết cơ chế Next.js (App Router, SSR/SSG/ISR, revalidation, protected route, SEO). JD Senior đòi làm chủ: chọn kiến trúc và chiến lược render, đo được Core Web Vitals, observability (Sentry, OpenTelemetry), bảo mật, CI/CD, design system, cộng code review, mentor, đào tạo.</li>
      <li><b>Senior “Next.js” thường là fullstack:</b> khoảng một nửa tin Senior đang mở có tiêu đề fullstack (NestJS, Go, Bun, Supabase), hoặc kèm mobile (React Native/Expo, Flutter).</li>
      <li><b>AI tool đã thành yêu cầu cứng:</b> 14/28 JD nhắc; DatVietVAC, Live Payments, YouPass, Sonat Game, Digital Unicorn bắt buộc; MediaX làm bài test tuyển dụng bằng Codex CLI.</li>
      <li><b>App Router xuất hiện chủ yếu ở tin 2025–2026:</b> tin 2023–2024 thường chỉ ghi “NextJS/ReactJS + Redux”. Zustand và TanStack Query đang tăng; Playwright và Vitest bắt đầu thay dần Jest-only.</li>
      <li><b>Thị trường mỏng:</b> tin Senior thuần frontend Next.js đang mở khá ít; nhiều nhà tuyển dụng là công ty nước ngoài (Úc, Nhật, Hàn, Pháp, Singapore, Thụy Điển). Công ty Nhật có thể đòi tiếng Nhật thay tiếng Anh (NEC: JLPT N4).</li>
    </ul>
  </div>

  <div class="box">
    <h3>Mức lương thấy được</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">5–15 triệu / tháng</td><td>Junior 2 năm, AI-native fullstack (MediaX)</td></tr>
          <tr><td class="mono">12–30 triệu / tháng</td><td>Middle 1,5–4 năm (HouseNow, Atomi Digital, Sonat Game)</td></tr>
          <tr><td class="mono">≤ 30 triệu / tháng</td><td>Tin ghi “Senior” nhưng chỉ đòi 2 năm (Vodaplay)</td></tr>
          <tr><td class="mono">30–45 triệu / tháng</td><td>Mid/Senior fullstack Next.js + Go (YouPass)</td></tr>
          <tr><td class="mono">45–50 triệu / tháng</td><td>Senior Next.js 5+ năm, remote, tiếng Anh tốt (Lotus)</td></tr>
          <tr><td class="mono">$1,300–3,000 / tháng</td><td>Senior ở công ty nước ngoài / sản phẩm (Vodaplay, Innomize, TPF Vietnam)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">TopDev và ITviec ẩn lương nên con số chủ yếu từ TopCV, JobsGO, VietnamWorks và vài tin ITviec ghi lương trong phần phúc lợi. Lead (8–10+ năm) thường từ khoảng $2,500 trở lên.</p>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Fresher / Junior</b></td><td class="mono">0–2 năm</td><td>Dựng UI theo design, gọi API, dùng component và state có sẵn, biết Git.</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">2–4 năm</td><td>Làm trọn feature với App Router: route, Server/Client Component, SSR/SSG/ISR, auth route, SEO, có test.</td></tr>
        <tr><td><b>Senior / Lead</b></td><td class="mono">4–5+ năm (Lead 8–10+)</td><td>Kiến trúc và chiến lược render, Core Web Vitals, bảo mật, CI/CD, observability, mentor; thường kèm backend hoặc mobile.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://topdev.vn/viec-lam/senior-frontend-engineer-next-js-react-cong-ty-cp-duoc-pham-pharmacity-2066149" target="_blank" rel="noopener">TopDev · Pharmacity, Senior Frontend Engineer (Next.js/React)</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://topdev.vn/viec-lam/senior-front-end-developer-typescript-nextjs-reactjs-cong-ty-tnhh-unstatic-2032003" target="_blank" rel="noopener">TopDev · Unstatic, Senior Front-end Developer</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://topdev.vn/viec-lam/senior-frontend-engineer-c2c-tech-hub-2048466" target="_blank" rel="noopener">TopDev · C2C Tech Hub, Senior Frontend Engineer</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://topdev.vn/viec-lam/senior-web-developer-reactjs-nextjs-homebase-2032944" target="_blank" rel="noopener">TopDev · Homebase, Senior Web Developer (ReactJS, NextJS)</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://topdev.vn/viec-lam/senior-front-end-developer-typescript-nextjs-english-odk-media-2032018" target="_blank" rel="noopener">TopDev · ODK Media, Senior Front-End Developer</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://topdev.vn/viec-lam/frontend-developer-javascript-typescript-nextjs-cong-ty-tnhh-bita-viet-nam-2044281" target="_blank" rel="noopener">TopDev · BITA Vietnam, Frontend Developer (Next.js)</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://topdev.vn/detail-jobs/frontend-technical-leader-japanese-sign-on-bonus-nec-vietnam-2035019" target="_blank" rel="noopener">TopDev · NEC Vietnam, Frontend Technical Leader</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://topdev.vn/detail-jobs/frontend-developer-reactjs-nextjs-cong-ty-tnhh-vodaplay-viet-nam-2035856" target="_blank" rel="noopener">TopDev · Vodaplay, Frontend Developer (ReactJS/NextJS)</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://itviec.com/it-jobs/senior-ai-native-engineer-react-next-js-flutter-datvietvac-5500" target="_blank" rel="noopener">ITviec · DatVietVAC, Senior AI Native Engineer (React, Next.js, Flutter)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-fullstack-engineer-typescript-api-reactjs-reclub-vietnam-1332" target="_blank" rel="noopener">ITviec · Reclub, Senior Fullstack Engineer</a></li>
      <li><a href="https://itviec.com/it-jobs/sign-on-bonus-senior-fullstack-developer-agentic-ai-live-payments-2230" target="_blank" rel="noopener">ITviec · Live Payments, Senior Fullstack Developer (Agentic AI)</a></li>
      <li><a href="https://itviec.com/it-jobs/remote-fullstack-engineer-ai-experience-fram-3427" target="_blank" rel="noopener">ITviec · Fram, Remote Fullstack Engineer</a></li>
      <li><a href="https://itviec.com/it-jobs/mid-sr-fullstack-dev-golang-nextjs-reactjs-youpass-cong-ty-co-phan-youpass-4614" target="_blank" rel="noopener">ITviec · YouPass, Mid/Sr Fullstack Dev (Golang, NextJS)</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-frontend-developer-react-next-js-cong-ty-co-phan-dev-fromvietnam-1414" target="_blank" rel="noopener">ITviec · Dev FromVietnam, Middle Frontend Developer (React / Next.js)</a></li>
      <li><a href="https://itviec.com/it-jobs/ai-native-fullstack-developer-vibe-coding-developer-mediax-5035" target="_blank" rel="noopener">ITviec · MediaX, AI-Native Fullstack Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-frontend-developer-reactjs-nextjs-digital-unicorn-3640" target="_blank" rel="noopener">ITviec · Digital Unicorn, Senior Frontend Developer</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://itviec.com/it-jobs/senior-fullstack-engineer-nestjs-react-claude-codex-digital-unicorn-0141" target="_blank" rel="noopener">ITviec · Digital Unicorn, Senior FullStack Engineer (NestJS, React, Claude/Codex)</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://itviec.com/it-jobs/senior-front-end-developer-nextjs-reactjs-cubicstack-solutions-3917" target="_blank" rel="noopener">ITviec · CubicStack, Senior Front-end Developer</a> <span class="muted">(đã đóng)</span></li>
      <li><a href="https://www.vietnamworks.com/senior-full-stack-engineer-mobile-web-1790319220451851090-2111781-jv" target="_blank" rel="noopener">VietnamWorks · TPF Vietnam, Senior Full Stack Engineer (Mobile &amp; Web)</a></li>
      <li><a href="https://www.vietnamworks.com/fullstack-developer-2114767-jv" target="_blank" rel="noopener">VietnamWorks · Sonat Game, Fullstack Developer</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-nextjs-developer-eng-good-remote-job/1615855.html" target="_blank" rel="noopener">TopCV · Lotus Technology, Senior NextJS Developer</a> <span class="muted">(đoạn trích, đã đóng)</span></li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-frontend-developer-react-js-next-js-muc-luong-upto-30m/1771109.html" target="_blank" rel="noopener">TopCV · Vodaplay, Senior Frontend Developer (React/Next.js)</a> <span class="muted">(đoạn trích, đã đóng)</span></li>
      <li><a href="https://www.topcv.vn/viec-lam/lap-trinh-vien-frontend-reactjs-nextjs/2120948.html" target="_blank" rel="noopener">TopCV · Atomi Digital, Lập trình viên Frontend (Reactjs/Nextjs)</a> <span class="muted">(đoạn trích)</span></li>
      <li><a href="https://jobsgo.vn/viec-lam/lap-trinh-vien-phat-trien-giao-dien-web-reactjs-next-js-27937353126.html" target="_blank" rel="noopener">JobsGO · HouseNow, Lập trình viên giao diện web (Reactjs/Next.js)</a> <span class="muted">(đoạn trích, đã đóng)</span></li>
      <li><a href="https://vn.linkedin.com/jobs/next.js-jobs" target="_blank" rel="noopener">LinkedIn · Next.js jobs in Vietnam</a> <span class="muted">(đoạn trích)</span></li>
      <li><a href="https://jobs.ashbyhq.com/office-hours/e80923fe-f586-4dff-8ade-7811326c31a3" target="_blank" rel="noopener">Ashby · Office Hours, Senior Frontend Engineer</a></li>
      <li><a href="https://job-boards.greenhouse.io/seed/jobs/8001105003" target="_blank" rel="noopener">Greenhouse · Seed Health, Senior Frontend Engineer</a></li>
      <li><a href="https://apply.workable.com/bystadium/j/F8025415AA/" target="_blank" rel="noopener">Workable · Stadium, Senior Frontend Developer (React.js/Next.js)</a></li>
      <li><a href="https://job-boards.greenhouse.io/lumimeds/jobs/4205631009" target="_blank" rel="noopener">Greenhouse · LumiMeds, Senior Full-Stack Engineer (Node.js &amp; Next.js)</a></li>
      <li><a href="https://jobs.ashbyhq.com/ravenna/950fd02a-a78c-407c-b8a6-bcc2968ec619" target="_blank" rel="noopener">Ashby · Ravenna, Senior Frontend Engineer</a></li>
      <li><a href="https://jobs.ashbyhq.com/squad/e15996c8-fe5c-433d-aa44-29e9bd9dc323" target="_blank" rel="noopener">Ashby · Squad, Sr. Frontend Engineer (Next.js / React)</a></li>
      <li><a href="https://jobs.ashbyhq.com/makai-labs/bc3d256d-8207-4612-91ba-fc73bf4e4962" target="_blank" rel="noopener">Ashby · Makai Labs, Senior Next.js Developer</a></li>
      <li><a href="https://jobs.lever.co/truv/2a05f4f2-096c-4b4b-9d96-39928f66b529" target="_blank" rel="noopener">Lever · Truv, Senior FrontEnd Engineer</a> <span class="muted">(đăng từ 2023, vẫn mở)</span></li>
      <li><a href="https://djinni.co/jobs/807540-senior-frontend-developer-react-next-js-types/" target="_blank" rel="noopener">Djinni · Stubbs, Senior Frontend Developer (React, Next.js, TypeScript)</a> <span class="muted">(đoạn trích)</span></li>
      <li><a href="https://nextjs.org/blog/next-16-4" target="_blank" rel="noopener">nextjs.org · Next.js 16.4</a></li>
      <li><a href="https://nextjs.org/blog/next-16" target="_blank" rel="noopener">nextjs.org · Next.js 16</a></li>
    </ul>
    <p class="muted note">Nhiều tin đã hết hạn nhưng yêu cầu vẫn đại diện. Gần như không JD nào nhắc Cache Components, proxy.ts hay React Compiler, nhưng đây là những thay đổi lớn nhất của Next.js 16 và rất dễ bị hỏi ở vòng Senior.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Tick vào mục đã học, tiến độ được lưu trên trình duyệt này. Lab 4 tuần cộng lại thành web app <b>“Expense Tracker”</b> bằng Next.js 16: đăng nhập, danh sách có search và filter trong URL, Server Actions, caching, test, CI và deploy.`,

 lc:`  <div style="display:grid;gap:8px">
    <h2>Vòng live coding React / Next.js</h2>
    <p class="muted">Tổng hợp từ playbook của GreatFrontEnd, đề take-home công khai trên GitHub, bài viết của ứng viên và chính sách AI của các công ty năm 2025–2026. Chưa có công ty nào công bố bảng chấm riêng cho Next.js, nên tiêu chí bên dưới là tổng hợp từ các nguồn này.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>UI coding / machine coding</b></td><td class="mono">45–90′</td><td>Dựng component hoặc app nhỏ từ đầu bằng React: autocomplete, tabs, modal, data table có sort và phân trang, todo có filter. Chấm cả API component và accessibility, không chỉ giao diện.</td></tr>
          <tr><td><b>JavaScript utility</b></td><td class="mono">30–45′</td><td>Tự viết debounce, throttle, <code>Promise.all</code>, retry có backoff, deep clone, EventEmitter, <code>classnames</code>. Hay dùng làm vòng screen.</td></tr>
          <tr><td><b>Feature trên repo Next.js có sẵn</b></td><td class="mono">60′</td><td>Thêm trang danh sách + chi tiết <code>[id]</code>, search đồng bộ URL, form gọi Server Action. Hỏi thêm vì sao chọn Server hay Client Component, cache ra sao.</td></tr>
          <tr><td><b>Take-home</b></td><td class="mono">2–8h</td><td>SimplifyJobs: 2–3 giờ, App Router + TypeScript + Tailwind + SWR theo Figma, có API route và trang <code>/item/[id]</code> render trên server. Aerolab: search game theo từng phím gõ, bộ sưu tập lưu localStorage, trang chi tiết có slug, deploy Vercel, điểm cộng test bằng RTL.</td></tr>
          <tr><td><b>Debug / code review</b></td><td class="mono">30–45′</td><td>Đọc code người khác, tìm bug và refactor theo nguyên tắc React (ví dụ bài “read &amp; refactor” của instea; Coinbase từng có vòng debug một app React có sẵn).</td></tr>
          <tr><td><b>Frontend system design</b></td><td class="mono">45–60′</td><td>Khung RADIO: Requirements, Architecture, Data model, Interface, Optimizations; khoảng 40% thời gian dành cho tối ưu và đào sâu. Đề hay gặp: news feed, autocomplete, e-commerce listing, chat.</td></tr>
          <tr><td><b>Có AI hỗ trợ</b></td><td class="mono">60′</td><td>Canva bắt buộc dùng Copilot/Cursor/Claude và chấm cách bạn chia nhỏ vấn đề, sửa code AI sinh sai. Ở Việt Nam, MediaX làm bài test tuyển dụng bằng Codex CLI.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Năm 2026 phần lớn vòng live vẫn cấm AI, nhưng số công ty cho dùng (và chấm cách dùng) đang tăng. Hỏi recruiter chính sách của từng vòng, tốt nhất là bằng văn bản.</p>
  </div>

  <div class="box">
    <h3>Đề phổ biến và cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Đề</th><th>Mức đạt</th><th>Mức Senior</th></tr></thead>
        <tbody>
          <tr><td><b>Search có debounce</b></td><td>Debounce, không gọi API mỗi phím, có loading / empty</td><td>Query nằm trong URL, bỏ kết quả cũ (AbortController hoặc transition), Suspense, <code>aria-live</code>, back/forward đúng</td></tr>
          <tr><td><b>Data table: sort, filter, phân trang</b></td><td>Chạy đúng ở client</td><td>State trong <code>searchParams</code>, phân trang phía server, key ổn định, <code>aria-sort</code>, virtualize khi danh sách lớn</td></tr>
          <tr><td><b>Form + Server Action</b></td><td>Validate và submit được</td><td>zod trên server, auth + kiểm tra quyền, <code>useActionState</code>, giữ giá trị khi lỗi, chặn submit 2 lần, <code>updateTag</code>, chạy được khi chưa có JS</td></tr>
          <tr><td><b>Trang chi tiết <code>[id]</code></b></td><td>Fetch và hiển thị</td><td><code>generateMetadata</code> + <code>React.cache</code>, <code>notFound()</code>, loading / error boundary, <code>'use cache'</code> hoặc <code>generateStaticParams</code></td></tr>
          <tr><td><b>Infinite scroll / load more</b></td><td>IntersectionObserver gọi trang tiếp</td><td>Chặn request trùng, dedupe theo id, cursor, hết trang thì dừng, nút “Load more” cho bàn phím và trình đọc màn hình</td></tr>
          <tr><td><b>Component dễ tiếp cận (modal, combobox, tabs)</b></td><td>Dùng được bằng chuột</td><td>Theo ARIA APG: phím mũi tên, Escape, focus trap và trả focus, ưu tiên <code>&lt;dialog&gt;</code> native</td></tr>
          <tr><td><b>JS utility</b></td><td>Kết quả đúng</td><td>Giữ <code>this</code> và tham số, <code>cancel</code>/<code>flush</code>, edge case, tự viết test, nói được độ phức tạp</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">GreatFrontEnd chấm theo 5 trục: giải quyết vấn đề, kỹ năng engineering, hiểu biết domain (HTML native, a11y, performance), giao tiếp, và tự kiểm tra. ARIA, thứ tự focus và hỗ trợ bàn phím là phần tách bài đạt với bài Senior.</p>
  </div>

  <div class="box">
    <h3>Chia 60 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–5′</td><td>Hỏi lại yêu cầu: API trả gì, có phân trang không, App Router hay Pages Router, được dùng thư viện nào (TanStack Query, zod, Tailwind) hay chỉ React thuần.</td></tr>
          <tr><td class="mono">5–10′</td><td>Nói kế hoạch: component nào là Server, component nào là Client, state đặt ở URL hay <code>useState</code>, kiểu dữ liệu ra sao.</td></tr>
          <tr><td class="mono">10–35′</td><td>Happy path chạy được trước. Vừa code vừa nói, kiểm tra trên trình duyệt sau mỗi bước.</td></tr>
          <tr><td class="mono">35–50′</td><td>Loading, error, empty, race condition, cleanup timer, bàn phím và label.</td></tr>
          <tr><td class="mono">50–60′</td><td>Dọn code, nói sẽ viết test gì (RTL, Playwright), cache thế nào, trade-off và hướng mở rộng.</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag ok">Nên</span>
      <ul>
        <li>Nghĩ thành tiếng, hỏi trước khi giả định.</li>
        <li>Mặc định Server Component; chỉ thêm <code>'use client'</code> ở lá cần state hoặc event.</li>
        <li>Đặt filter, sort, trang hiện tại trong URL.</li>
        <li>Validate input ở server và kiểm tra quyền trong mọi Server Action.</li>
        <li>Dùng phần tử native (<code>&lt;button&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;dialog&gt;</code>) trước khi nghĩ tới ARIA.</li>
        <li>Thuộc sẵn: <code>await searchParams</code>, <code>useSearchParams</code> + Suspense, <code>useActionState</code>, <code>updateTag</code>.</li>
        <li>Quen sẵn editor và template <code>create-next-app</code> bạn sẽ dùng.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">Tránh</span>
      <ul>
        <li><code>'use client'</code> ở page hoặc layout chỉ vì cần một nút bấm.</li>
        <li>Fetch dữ liệu ban đầu trong <code>useEffect</code> khi có thể làm ở Server Component.</li>
        <li>Đọc <code>params</code> / <code>searchParams</code> đồng bộ (đã bị bỏ ở Next.js 16).</li>
        <li>Dùng index làm key cho danh sách có thêm, xóa, sắp xếp.</li>
        <li>Secret trong biến <code>NEXT_PUBLIC_</code> hoặc trong Client Component.</li>
        <li>Chỉ kiểm tra đăng nhập ở <code>proxy.ts</code> hoặc layout.</li>
        <li>Chấp nhận code AI gợi ý mà không giải thích được, nhất là API Next.js đã cũ.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: search có debounce đồng bộ URL</h3>
<pre>// app/transactions/page.tsx (Server Component)
import { Suspense } from 'react'
import { SearchBox } from './search-box'
import { verifySession } from '@/lib/dal'
import { searchTransactions } from '@/lib/transactions'

export default function Page(props: PageProps&lt;'/transactions'&gt;) {
  return (
    &lt;main&gt;
      &lt;h1&gt;Transactions&lt;/h1&gt;
      {/* useSearchParams needs a Suspense boundary, or the route can't be prerendered */}
      &lt;Suspense fallback={&lt;input type="search" disabled aria-label="Search transactions" /&gt;}&gt;
        &lt;SearchBox /&gt;
      &lt;/Suspense&gt;
      &lt;Suspense fallback={&lt;p&gt;Loading transactions…&lt;/p&gt;}&gt;
        &lt;Results searchParams={props.searchParams} /&gt;
      &lt;/Suspense&gt;
    &lt;/main&gt;
  )
}

async function Results({ searchParams }: Pick&lt;PageProps&lt;'/transactions'&gt;, 'searchParams'&gt;) {
  const { q } = await searchParams // a Promise since Next.js 15; sync access was removed in 16
  const query = typeof q === 'string' ? q.trim().slice(0, 100) : ''
  const { userId } = await verifySession() // reads cookies: runtime data, so it stays inside Suspense
  const items = await searchTransactions(userId, query)

  if (items.length === 0) return &lt;p&gt;No transactions match “{query}”.&lt;/p&gt;
  return (
    &lt;ul&gt;
      {items.map((t) =&gt; (
        &lt;li key={t.id}&gt;
          {t.note}: {t.amount.toLocaleString('vi-VN')} ₫
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  )
}

// lib/transactions.ts
import 'server-only'
import { cacheLife, cacheTag } from 'next/cache'
import { db } from '@/lib/db'

export async function searchTransactions(userId: string, query: string) {
  'use cache' // userId and query become part of the cache key
  cacheLife('minutes')
  cacheTag(\`transactions:\${userId}\`) // the Server Action calls updateTag with this tag
  return db.transaction.findMany({
    where: { userId, note: { contains: query } },
    orderBy: { date: 'desc' },
    take: 50,
    select: { id: true, note: true, amount: true, date: true },
  })
}

// app/transactions/search-box.tsx
'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function SearchBox() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [text, setText] = useState(searchParams.get('q') ?? '')
  const [isPending, startTransition] = useTransition()
  const timer = useRef&lt;ReturnType&lt;typeof setTimeout&gt;&gt;(undefined)

  useEffect(() =&gt; () =&gt; clearTimeout(timer.current), []) // no timer firing after unmount

  function onChange(value: string) {
    setText(value) // the input stays responsive; only the URL update is debounced
    clearTimeout(timer.current)
    timer.current = setTimeout(() =&gt; {
      const params = new URLSearchParams(searchParams.toString()) // keep other filters
      const q = value.trim()
      if (q) params.set('q', q)
      else params.delete('q')
      params.delete('page') // a new query starts again from page 1
      const qs = params.toString()
      startTransition(() =&gt; {
        // replace, not push: one history entry per search, not per keystroke
        router.replace(qs ? \`\${pathname}?\${qs}\` : pathname, { scroll: false })
      })
    }, 300)
  }

  return (
    &lt;div role="search"&gt;
      &lt;label htmlFor="q"&gt;Search&lt;/label&gt;
      &lt;input id="q" type="search" value={text} onChange={(e) =&gt; onChange(e.target.value)} /&gt;
      &lt;span aria-live="polite"&gt;{isPending ? 'Searching…' : ''}&lt;/span&gt;
    &lt;/div&gt;
  )
}</pre>
    <p class="muted note"><code>router.replace</code> chạy trong transition nên React giữ kết quả cũ trên màn hình thay vì hiện lại fallback, và <code>isPending</code> báo đang tìm. Câu hỏi tiếp theo hay gặp: người dùng bấm Back thì ô input có cập nhật theo URL không (gợi ý: đồng bộ lại khi <code>searchParams</code> đổi, hoặc dùng <code>key</code>), và vì sao <code>searchTransactions</code> nhận <code>userId</code> làm tham số thay vì tự đọc cookie bên trong <code>'use cache'</code>.</p>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: Server Action có zod, auth và revalidate</h3>
<pre>// app/transactions/actions.ts
'use server'

import { z } from 'zod'
import { updateTag } from 'next/cache'
import { verifySession } from '@/lib/dal'
import { db } from '@/lib/db'

const NewTransaction = z.object({
  amount: z.coerce.number().int().positive().max(1_000_000_000), // VND: whole numbers only
  note: z.string().trim().min(1, 'Note is required').max(200),
  categoryId: z.uuid(),
  date: z.iso.date(),
})

export type FormState = {
  ok: boolean
  message?: string
  fieldErrors?: Record&lt;string, string[] | undefined&gt;
  values?: Record&lt;string, string&gt;
}

export async function createTransaction(_prev: FormState, formData: FormData): Promise&lt;FormState&gt; {
  // 1. Authenticate inside the action: it's a public POST endpoint
  const { userId } = await verifySession()

  // 2. Validate: FormData is untrusted input. Pick fields explicitly.
  const raw = {
    amount: String(formData.get('amount') ?? ''),
    note: String(formData.get('note') ?? ''),
    categoryId: String(formData.get('categoryId') ?? ''),
    date: String(formData.get('date') ?? ''),
  }
  const parsed = NewTransaction.safeParse(raw)
  if (!parsed.success) {
    // Return the values: React resets the form after the action, so the UI refills them
    return { ok: false, fieldErrors: z.flattenError(parsed.error).fieldErrors, values: raw }
  }

  // 3. Authorize: the category must belong to this user (prevents IDOR)
  const category = await db.category.findFirst({
    where: { id: parsed.data.categoryId, userId },
    select: { id: true },
  })
  if (!category) return { ok: false, message: 'Category not found', values: raw }

  try {
    await db.transaction.create({
      data: { ...parsed.data, date: new Date(parsed.data.date), userId },
    })
  } catch {
    return { ok: false, message: 'Could not save. Please try again.', values: raw }
  }

  // 4. Read-your-own-writes: expire this user's cached list right away
  updateTag(\`transactions:\${userId}\`)
  return { ok: true, message: 'Saved' }
}

// app/transactions/new-transaction-form.tsx
'use client'

import { useActionState } from 'react'
import { createTransaction, type FormState } from './actions'

const initialState: FormState = { ok: false } // values can't be exported from a 'use server' file

export function NewTransactionForm({ categories }: { categories: { id: string; name: string }[] }) {
  const [state, formAction, pending] = useActionState(createTransaction, initialState)
  const err = state.fieldErrors ?? {}

  return (
    &lt;form action={formAction} noValidate&gt;
      &lt;label htmlFor="amount"&gt;Amount (VND)&lt;/label&gt;
      &lt;input id="amount" name="amount" inputMode="numeric" defaultValue={state.values?.amount}
        aria-invalid={!!err.amount} aria-describedby="amount-error" /&gt;
      &lt;p id="amount-error"&gt;{err.amount?.[0]}&lt;/p&gt;

      &lt;label htmlFor="note"&gt;Note&lt;/label&gt;
      &lt;input id="note" name="note" defaultValue={state.values?.note}
        aria-invalid={!!err.note} aria-describedby="note-error" /&gt;
      &lt;p id="note-error"&gt;{err.note?.[0]}&lt;/p&gt;

      &lt;label htmlFor="categoryId"&gt;Category&lt;/label&gt;
      &lt;select id="categoryId" name="categoryId"&gt;
        {categories.map((c) =&gt; (
          &lt;option key={c.id} value={c.id}&gt;{c.name}&lt;/option&gt;
        ))}
      &lt;/select&gt;
      &lt;p&gt;{err.categoryId?.[0]}&lt;/p&gt;

      &lt;label htmlFor="date"&gt;Date&lt;/label&gt;
      &lt;input id="date" name="date" type="date" defaultValue={state.values?.date}
        aria-invalid={!!err.date} aria-describedby="date-error" /&gt;
      &lt;p id="date-error"&gt;{err.date?.[0]}&lt;/p&gt;

      &lt;button type="submit" disabled={pending}&gt;{pending ? 'Saving…' : 'Save'}&lt;/button&gt;
      &lt;p role="status"&gt;{state.message}&lt;/p&gt;
    &lt;/form&gt;
  )
}</pre>
    <p class="muted note"><code>updateTag</code> chỉ dùng được trong Server Action và expire cache ngay để người vừa thêm thấy giao dịch của mình. Nếu dữ liệu đổi từ webhook bên ngoài thì gọi <code>revalidateTag(tag, 'max')</code> trong Route Handler. Câu hỏi tiếp theo hay gặp: thêm <code>useOptimistic</code> để giao dịch hiện ngay trong danh sách, và test action này thế nào khi Vitest chưa chạy được async Server Component.</p>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài code review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample code review: find the bugs in 10 minutes</span></h3>
<pre>// app/transactions/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/db'

export default async function TransactionsPage({ searchParams }) {
  const [items, setItems] = useState([])
  const page = searchParams.page ?? 1

  useEffect(() =&gt; {
    fetch(\`/api/transactions?page=\${page}&amp;token=\${process.env.API_SECRET}\`)
      .then((res) =&gt; res.json())
      .then((data) =&gt; setItems([...items, ...data]))
  })

  async function remove(id) {
    'use server'
    await db.transaction.delete({ where: { id } })
  }

  return (
    &lt;ul&gt;
      {items.map((t, i) =&gt; (
        &lt;li key={i}&gt;
          &lt;span dangerouslySetInnerHTML={{ __html: t.note }} /&gt;
          &lt;span&gt;{t.amount}&lt;/span&gt;
          &lt;button onClick={() =&gt; remove(t.id)}&gt;Delete&lt;/button&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  )
}</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (8 lỗi)</span><span class="l-en">Show the answer (8 bugs)</span></span></summary><div class="ans">
    <ul class="l-vi">
      <li><b>Client Component async:</b> <code>'use client'</code> cùng <code>async function</code> không được hỗ trợ. Trang này nên là Server Component, fetch dữ liệu trên server rồi truyền xuống phần client nhỏ.</li>
      <li><b>searchParams đọc đồng bộ:</b> từ Next.js 15 <code>searchParams</code> là Promise, Next.js 16 bỏ hẳn truy cập đồng bộ; phải <code>await</code> (hoặc <code>use()</code> trong client), và prop cũng không có type.</li>
      <li><b>useEffect không có dependency:</b> chạy sau mỗi render, <code>setItems</code> lại gây render, thành vòng lặp gọi API vô tận; <code>items</code> trong closure bị cũ nên nối trùng dữ liệu; không kiểm tra <code>res.ok</code>, không hủy request cũ.</li>
      <li><b>Secret ở client:</b> <code>process.env.API_SECRET</code> không có tiền tố <code>NEXT_PUBLIC_</code> nên là <code>undefined</code> trên trình duyệt; còn nếu có thì secret lộ trong bundle và trong query string (log, history).</li>
      <li><b>Code server trong module client:</b> import <code>db</code> vào file <code>'use client'</code> kéo code DB vào bundle; Server Function không được khai báo trong Client Component, phải đặt trong file <code>'use server'</code> và DAL có <code>server-only</code>.</li>
      <li><b>Action không kiểm tra quyền:</b> không xác thực, không kiểm tra giao dịch có thuộc user không (IDOR), không validate <code>id</code>, không revalidate nên UI vẫn hiện item đã xóa.</li>
      <li><b>Index làm key:</b> xóa hoặc nối thêm item khiến React gắn state sai phần tử; dùng <code>t.id</code>.</li>
      <li><b>XSS:</b> <code>dangerouslySetInnerHTML</code> với ghi chú do người dùng nhập; render thẳng <code>{t.note}</code> hoặc sanitize nếu thật sự cần HTML.</li>
    </ul>
    <ul class="l-en">
      <li><b>Async Client Component:</b> <code>'use client'</code> combined with an <code>async function</code> isn't supported. This page should be a Server Component that fetches on the server and passes data to a small client piece.</li>
      <li><b>Synchronous searchParams:</b> since Next.js 15 <code>searchParams</code> is a Promise, and Next.js 16 removed synchronous access entirely, so you have to <code>await</code> it (or <code>use()</code> it on the client). The prop isn't typed either.</li>
      <li><b>useEffect with no dependency array:</b> it runs after every render, <code>setItems</code> triggers another render, and you get an endless request loop. The <code>items</code> in the closure is stale, so data gets appended twice, and there's no <code>res.ok</code> check or cancellation of the previous request.</li>
      <li><b>A secret on the client:</b> <code>process.env.API_SECRET</code> has no <code>NEXT_PUBLIC_</code> prefix, so it's <code>undefined</code> in the browser; and if it were exposed, the secret would leak through the bundle and the query string (logs, history).</li>
      <li><b>Server code in a client module:</b> importing <code>db</code> into a <code>'use client'</code> file pulls database code into the bundle, and you can't define a Server Function inside a Client Component. It belongs in a <code>'use server'</code> file backed by a <code>server-only</code> DAL.</li>
      <li><b>No authorization in the action:</b> no authentication, no check that the transaction belongs to the user (IDOR), no validation of <code>id</code>, and no revalidation, so the UI keeps showing the deleted item.</li>
      <li><b>Index as key:</b> deleting or appending items makes React attach state to the wrong element. Use <code>t.id</code>.</li>
      <li><b>XSS:</b> <code>dangerouslySetInnerHTML</code> with a user-supplied note. Render <code>{t.note}</code> directly, or sanitize it if you genuinely need HTML.</li>
    </ul></div></details>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted small">Làm trên máy của bạn hoặc StackBlitz, bấm giờ, vừa làm vừa nói và quay màn hình. Bài 4 và 5 là dạng hay gặp nhất ở vòng Next.js.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Bài</th><th>Giờ</th><th>Sau tuần</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td>Tự viết <code>debounce</code> (có <code>cancel</code>), <code>throttle</code> và <code>Promise.allSettled</code>, kèm test bằng Vitest</td><td class="mono">25′</td><td class="mono">1</td></tr>
          <tr><td class="mono">2</td><td>Tabs hoặc Accordion dùng được bằng bàn phím theo ARIA APG, không dùng thư viện</td><td class="mono">25′</td><td class="mono">1</td></tr>
          <tr><td class="mono">3</td><td>Danh sách + trang chi tiết <code>/products/[id]</code> từ <code>dummyjson.com/products</code> có <code>generateMetadata</code>, <code>notFound()</code>, <code>loading.tsx</code>, <code>error.tsx</code></td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">4</td><td>Search sản phẩm (<code>dummyjson.com/products/search?q=</code>) có debounce, đồng bộ URL, Suspense, không hiện kết quả cũ</td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">5</td><td>Form thêm giao dịch bằng Server Action: zod, <code>useActionState</code>, giữ giá trị khi lỗi, <code>useOptimistic</code></td><td class="mono">40′</td><td class="mono">3</td></tr>
          <tr><td class="mono">6</td><td>Data table sort + filter + phân trang lưu trong <code>searchParams</code>, có <code>aria-sort</code></td><td class="mono">45′</td><td class="mono">3</td></tr>
          <tr><td class="mono">7</td><td>Code review đoạn mẫu ở trên rồi viết lại cho đúng (Server Component + Server Action)</td><td class="mono">20′</td><td class="mono">4</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Muốn luyện take-home: làm đề SimplifyJobs hoặc Aerolab trong tối đa 4 giờ, deploy lên Vercel, viết README nêu quyết định caching và rendering, rồi tự chấm theo bảng “Đề phổ biến và cách chấm”.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://www.greatfrontend.com/front-end-interview-playbook/introduction" target="_blank" rel="noopener">GreatFrontEnd · Front End Interview Playbook</a></li>
      <li><a href="https://www.greatfrontend.com/front-end-interview-playbook/user-interface" target="_blank" rel="noopener">GreatFrontEnd · User interface coding</a></li>
      <li><a href="https://www.greatfrontend.com/front-end-interview-playbook/javascript" target="_blank" rel="noopener">GreatFrontEnd · JavaScript coding</a></li>
      <li><a href="https://www.greatfrontend.com/blog/machine-coding-round" target="_blank" rel="noopener">GreatFrontEnd · Machine coding round</a></li>
      <li><a href="https://www.greatfrontend.com/front-end-system-design-playbook/framework" target="_blank" rel="noopener">GreatFrontEnd · RADIO framework</a></li>
      <li><a href="https://www.greatfrontend.com/front-end-system-design-playbook/evaluation-axes" target="_blank" rel="noopener">GreatFrontEnd · System design evaluation axes</a></li>
      <li><a href="https://github.com/yangshun/front-end-interview-handbook" target="_blank" rel="noopener">GitHub · Front End Interview Handbook</a></li>
      <li><a href="https://scrimba.com/articles/frontend-interview-prep-guide-2026/" target="_blank" rel="noopener">Scrimba · Frontend interview prep guide 2026</a></li>
      <li><a href="https://github.com/SimplifyJobs/frontend-assessment" target="_blank" rel="noopener">GitHub · SimplifyJobs frontend assessment</a></li>
      <li><a href="https://github.com/aerolab/frontend-developer-coding-challenge" target="_blank" rel="noopener">GitHub · Aerolab frontend coding challenge</a></li>
      <li><a href="https://github.com/instea/interview-exercises" target="_blank" rel="noopener">GitHub · instea interview exercises</a></li>
      <li><a href="https://juntao.substack.com/p/react-code-interview-005-throttle" target="_blank" rel="noopener">juntao · React code interview: typeahead race conditions</a></li>
      <li><a href="https://www.canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews/" target="_blank" rel="noopener">Canva · Yes, you can use AI in our interviews</a></li>
      <li><a href="https://www.canva.dev/blog/engineering/ai-interview-success/" target="_blank" rel="noopener">Canva · What AI interview success looks like</a></li>
      <li><a href="https://www.anthropic.com/candidate-ai-guidance" target="_blank" rel="noopener">Anthropic · Candidate AI guidance</a></li>
      <li><a href="https://www.techradar.com/pro/meta-is-going-to-let-candidates-use-ai-in-job-interviews" target="_blank" rel="noopener">TechRadar · Meta lets candidates use AI in interviews</a></li>
      <li><a href="https://nextjs.org/docs/app/getting-started/caching" target="_blank" rel="noopener">Next.js · Caching</a></li>
      <li><a href="https://nextjs.org/docs/app/api-reference/functions/use-search-params" target="_blank" rel="noopener">Next.js · useSearchParams</a></li>
      <li><a href="https://nextjs.org/docs/app/getting-started/mutating-data" target="_blank" rel="noopener">Next.js · Mutating data</a></li>
      <li><a href="https://nextjs.org/docs/app/guides/data-security" target="_blank" rel="noopener">Next.js · Data security</a></li>
      <li><a href="https://zod.dev/error-formatting" target="_blank" rel="noopener">Zod · Formatting errors</a></li>
    </ul>
  </div>`
};
