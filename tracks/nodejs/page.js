/* Node.js: static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. */
const ND_PAGE={
 hero:`  <span class="eyebrow">Lộ trình phỏng vấn · Node.js backend · 10/2026</span>
  <h1>Node.js backend trong 4 tuần</h1>
  <p class="lede">Tổng hợp từ các JD Node.js / NestJS backend trên ITviec, TopDev, TopCV, JobsGO, VietnamWorks và các trang tuyển dụng quốc tế (Greenhouse, Ashby). Cùng cấu trúc với các lộ trình mobile và Next.js; phần lab là backend cho chính app Expense Tracker của các track đó.</p>`,

 jd:`  <div style="display:grid;gap:8px">
    <h2>Các JD Node.js backend thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 30 JD đọc được toàn văn: 24 JD Việt Nam (ITviec, TopDev, JobsGO; 18 Senior trở lên, 6 Middle hoặc Middle/Senior) và 6 JD quốc tế trên Ashby và Greenhouse. TopCV trả về 403 và VietnamWorks không trả nội dung khi đọc trực tiếp, nên các tin ở hai trang này chỉ dùng đoạn trích của công cụ tìm kiếm (chủ yếu để lấy mức lương) và không tính vào bảng tần suất. Thanh vàng đậm là yêu cầu bắt buộc, thanh tím là điểm cộng.</p>
  </div>
  <div class="box"><div class="freq" id="nd-freq"></div></div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li>Node.js vững: event loop, async, xử lý lỗi; JD Senior ghi rõ event loop và profiling CPU/memory (Eventista, CyberLogitec, Railway)</li>
        <li>TypeScript cho backend (18/30 JD, 16/24 JD Senior)</li>
        <li><b>NestJS</b> (module, DI, guard, interceptor, pipe) hoặc Express</li>
        <li>PostgreSQL / MySQL: thiết kế schema, index, tối ưu query, transaction; ORM như TypeORM, Prisma</li>
        <li>Thiết kế REST API: cấu trúc response, lỗi, phân trang, versioning, OpenAPI/Swagger</li>
        <li>Auth: JWT, OAuth2/OIDC, RBAC</li>
        <li>Redis (cache, lock, rate limit) và message queue có retry, DLQ, consumer idempotent</li>
        <li>Unit / integration test (Jest, Mocha)</li>
        <li>Microservices, scale, system design và mentor, review code (với Senior)</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li>Docker, Kubernetes, CI/CD (GitHub Actions, GitLab CI, Azure DevOps)</li>
        <li>Observability: Datadog, Prometheus/Grafana, ELK, distributed tracing</li>
        <li>Domain thanh toán: idempotency, đối soát, ví điện tử (Momo, ZaloPay), PCI DSS / ISO 8583</li>
        <li>Biết thêm Go (phổ biến nhất), Java hoặc Python</li>
        <li>Realtime bằng WebSocket / Socket.IO</li>
        <li>Infrastructure as Code: Terraform, CloudFormation, AWS CDK</li>
        <li>Dùng AI coding tool hằng ngày (Claude Code, Cursor, Copilot) và làm tính năng LLM</li>
        <li>Tiếng Anh làm việc trực tiếp với khách hàng nước ngoài</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Các trang quốc tế bổ sung gì</h3>
    <ul>
      <li><b>Chỉ Postgres, không MongoDB:</b> MongoDB có ở 15/24 JD Việt Nam nhưng 0/6 JD quốc tế; họ ghi “Node.js + TypeScript + Postgres” và không nêu tên framework (0/6 nhắc NestJS).</li>
      <li><b>Đúng khi có lỗi một phần:</b> Resend đòi kinh nghiệm với queue, retry, event trùng lặp, concurrency; Railway đòi idempotent charge, reconciliation, workflow dài với Temporal và hiểu Node.js internals khi service xuống cấp dưới tải.</li>
      <li><b>Tự vận hành thứ mình viết:</b> on-call, monitoring, deploy an toàn, IaC bằng Terraform hoặc AWS CDK (Resend, Railway, Okta/Auth0).</li>
      <li><b>Node.js thường đi cùng ngôn ngữ khác:</b> Go (Resend, Okta), Perl và Go (DuckDuckGo), Rust là điểm cộng (Railway).</li>
      <li><b>AI:</b> DuckDuckGo đòi quen RAG pipeline, evaluation và prompt engineering; Gamma coi kinh nghiệm scale inference là điểm cộng.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Senior trên ITviec và TopDev</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>Eventista</b> <span class="mono muted">ITviec · vé, bình chọn</span></td><td class="mono">5+ năm</td><td>NestJS; đúng dưới concurrency: không trùng vote, không bán quá vé, thanh toán idempotent; <b>Redis với Lua, distributed lock, rate limit</b>; SQS/RabbitMQ có DLQ; MongoDB + DynamoDB + PostgreSQL; load test k6/JMeter</td></tr>
          <tr><td><b>Everfit</b> <span class="mono muted">ITviec</span></td><td class="mono">5+ năm</td><td>Express, MongoDB, Redis, PostgreSQL, microservices, Jest/Mocha; mục riêng “AI-First Engineering”; AWS, Kafka/SQS, OAuth2/JWT là điểm cộng; tiếng Anh mức trung bình</td></tr>
          <tr><td><b>Live Payments</b> <span class="mono muted">ITviec · fintech</span></td><td class="mono">5+ năm</td><td>NestJS hoặc Go; timeout, retry, circuit breaker, idempotency; IaC (Terraform); <b>bắt buộc dùng agentic AI (Claude Code, Cursor, Copilot) hằng ngày</b>; ISO 8583, PCI DSS là điểm cộng</td></tr>
          <tr><td><b>VUS</b> <span class="mono muted">ITviec · giáo dục</span></td><td class="mono">3+ năm</td><td>Go hoặc Node.js; PostgreSQL/MySQL, Redis, MongoDB; Pub/Sub, Kafka, RabbitMQ; GCP, Prometheus/Grafana; tích hợp Momo/ZaloPay là “BIG PLUS”</td></tr>
          <tr><td><b>VISION Advisory</b> <span class="mono muted">ITviec · gaming</span></td><td class="mono">5+ năm</td><td>Node.js/Express là chính, Go là điểm cộng; ví, số dư, nạp/rút; Socket.IO với heartbeat và reconnect; JWT, API key, ký request bằng HMAC</td></tr>
          <tr><td><b>TON Corporation</b> <span class="mono muted">ITviec · sàn crypto</span></td><td class="mono">5+ năm</td><td>Đã vận hành hệ thống chuyển tiền thật; transaction, idempotency, độ chính xác tiền tệ, đối soát; Node/TS được chấp nhận nếu chứng minh được xử lý concurrency và tải</td></tr>
          <tr><td><b>SolarBK</b> <span class="mono muted">ITviec · Architect</span></td><td class="mono">5+ năm</td><td>2 năm làm architect/tech lead; microservices, event-driven, API gateway, GCP Pub/Sub, Kubernetes; phân quyền multi-tenant, bảo vệ dữ liệu cá nhân theo quy định Việt Nam; viết ADR</td></tr>
          <tr><td><b>Offspring Digital</b> <span class="mono muted">ITviec</span></td><td class="mono">2+ năm</td><td>Tên “Senior” nhưng chỉ đòi 2 năm: Node.js, REST, PostgreSQL/MySQL, AWS (Elastic Beanstalk, EC2, S3, CloudFront), GitFlow; khách hàng Úc, Mỹ</td></tr>
          <tr><td><b>SSTech</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">5+ năm</td><td>NestJS sâu (interceptor, guard, pipe, custom decorator), TypeORM/Prisma, OAuth2/OIDC, APM và distributed tracing, TDD; chuyển backend serverless sang managed hosting; tiếng Anh xuất sắc</td></tr>
          <tr><td><b>Gigarion Technology</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">5+ năm</td><td>NestJS, PostgreSQL/MySQL, MongoDB/Redis, Docker, OpenAPI; Kafka, Kubernetes, Grafana/Kibana là điểm cộng; secure coding; tiếng Anh xuất sắc</td></tr>
          <tr><td><b>CyberLogitec</b> <span class="mono muted">TopDev · hết hạn (2026)</span></td><td class="mono">6+ năm</td><td>NestJS (ưu tiên)/Express, hiểu Node.js internals; REST/GraphQL/WebSocket; Clean Architecture, DDD; Docker, Kubernetes; Java/Spring Boot là điểm cộng</td></tr>
          <tr><td><b>Finviet</b> <span class="mono muted">TopDev · Senior/Lead · hết hạn</span></td><td class="mono">5+ năm</td><td>POS, thanh toán: MongoDB, ActiveMQ, WebSocket, xác thực giữa nhiều hệ thống; microservices và Elasticsearch là điểm cộng</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Senior khác Middle ở độ đúng và vận hành:</b> JD Middle liệt kê framework, ORM, DB, JWT (SKYDEV: NestJS + TypeORM/Prisma/Sequelize + RBAC), còn Redis, queue, Docker là điểm cộng. JD Senior nhắc hiệu năng và scale ở 16/24 (Middle 2/6), cloud 16/24 (Middle 2/6), observability 9/24 (Middle 1/6), và nhiều tin yêu cầu đúng dưới concurrency: không trùng giao dịch, retry an toàn, đối soát.</li>
      <li><b>NestJS là framework được gọi tên nhiều nhất ở Việt Nam:</b> 11/24 JD Việt Nam, Express 6/24, thường viết “NestJS hoặc Express”. Fastify và Hono chỉ xuất hiện 1 lần (Jedi Technology, như ví dụ). JD quốc tế không nêu framework.</li>
      <li><b>TypeScript gần như mặc định ở Senior:</b> 16/24 JD Senior ghi rõ TypeScript, Middle 2/6.</li>
      <li><b>Microservices và queue:</b> 17/30 và 16/30. Ở Việt Nam, Kafka chủ yếu là điểm cộng (Everfit, Gigarion, SKYDEV, Digital Innovation); thứ được hỏi kỹ là retry, DLQ, consumer idempotent (Eventista).</li>
      <li><b>Fintech và thanh toán</b> có mặt ở 11/30 JD (Live Payments, TON, Saafehouse, Finviet, S-Socials, VISION, Railway…), kéo theo idempotency, transaction, đối soát.</li>
      <li><b>Node.js hiếm khi đứng một mình:</b> 12/30 JD đòi hoặc ưu tiên thêm ngôn ngữ khác, Go phổ biến nhất (VUS, VISION, Live Payments, Resend, Okta); S-Socials (JobsGO) bắt buộc thành thạo Java.</li>
      <li><b>AI đã vào JD:</b> 7/30. Live Payments và FGS bắt buộc dùng Claude Code / Cursor / Copilot; Everfit có mục “AI-First Engineering”; Saafehouse yêu cầu tự chịu trách nhiệm cả code do AI sinh ra.</li>
      <li><b>Tiếng Anh, không phải tiếng Nhật:</b> 16/24 JD Việt Nam ghi rõ tiếng Anh; chỉ FGS coi tiếng Nhật là điểm cộng.</li>
      <li><b>Thị trường tin đăng mỏng:</b> ngày 19/10/2026 ITviec có 40 tin gắn tag nodejs (phần lớn là fullstack), JobsGO có 2 tin Node.js; tìm kiếm không ra tin Node.js nào còn hạn trên TopDev. Nhiều JD bên dưới đã hết hạn nhưng yêu cầu vẫn đại diện.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Mức lương thấy được</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">15–40 triệu / tháng</td><td>Middle Backend (NodeJS/NestJS), IKAME (TopCV, đoạn trích)</td></tr>
          <tr><td class="mono">25–40 triệu / tháng</td><td>Senior NodeJS, TECHVIFY Hà Nội (hạn 11/2024, đoạn trích)</td></tr>
          <tr><td class="mono">30–45 triệu / tháng</td><td>Senior/Lead NodeJS Backend (VietnamWorks, đoạn trích); Senior Backend (Node.js) GoCode 32–37 triệu (VietnamWorks, đăng 01/2026)</td></tr>
          <tr><td class="mono">50–70 triệu / tháng</td><td>Technical Lead (Node.js), SmartOSC, 5+ năm (TopCV, hạn 08/10/2026, đoạn trích)</td></tr>
          <tr><td class="mono">$1.000–3.000 / tháng</td><td>Lead Backend Minma $1.000–2.200 (TopCV, đoạn trích); Senior ở công ty vốn nước ngoài: Brickmate từ $1.800 (2023), Sungrove tối đa $3.000 (2024)</td></tr>
          <tr><td class="mono">$140K–310K / năm</td><td>Quốc tế: Resend $140–180K, DuckDuckGo $190,5K (Mỹ), Gamma $180–310K; Attio £95–125K, Okta/Auth0 CAD 136–187K</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">ITviec ẩn lương với người chưa đăng nhập, TopDev cũng yêu cầu đăng nhập, nên các tin còn mở như Eventista, Everfit, VUS, Live Payments không có số liệu. Lương TopCV và VietnamWorks lấy từ đoạn trích tìm kiếm.</p>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Fresher / Junior</b></td><td class="mono">0–2 năm</td><td>JavaScript/TypeScript, Express hoặc NestJS cơ bản, REST CRUD, SQL, Git. Rất ít tin tuyển riêng cấp này.</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">2–4 năm</td><td>Tự làm API trọn vẹn với NestJS + TypeScript, ORM, PostgreSQL/MySQL, JWT/RBAC, unit test; Redis, queue, Docker là điểm cộng.</td></tr>
        <tr><td><b>Senior</b></td><td class="mono">5+ năm (vài tin 3+)</td><td>System design, concurrency và idempotency, queue có retry/DLQ, cloud, observability, tối ưu hiệu năng, mentor; fintech thường đòi đã vận hành hệ thống tiền thật.</td></tr>
        <tr><td><b>Lead / Architect</b></td><td class="mono">6–8+ năm</td><td>Kiến trúc phân tán và event-driven, ADR, multi-tenant, chọn công nghệ; quản lý team (ILA: 8+ năm, 3+ năm quản lý).</td></tr>
      </tbody>
    </table>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://itviec.com/it-jobs/senior-backend-developer-nodejs-typescript-aws-eventista-1455" target="_blank" rel="noopener">ITviec · Eventista, Senior Backend Developer (NodeJS, TypeScript, AWS)</a></li>
      <li><a href="https://itviec.com/it-jobs/backend-engineer-nodejs-everfit-4026" target="_blank" rel="noopener">ITviec · Everfit, Backend Engineer (Nodejs)</a></li>
      <li><a href="https://itviec.com/it-jobs/sign-on-bonus-senior-fullstack-developer-agentic-ai-live-payments-2230" target="_blank" rel="noopener">ITviec · Live Payments, Senior Fullstack Developer - Agentic AI</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-backend-developers-golang-nodejs-vus-2015" target="_blank" rel="noopener">ITviec · VUS, Senior Backend Developers (Golang/NodeJS)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-backend-engineer-go-golang-nodejs-typescript-vision-advisory-analytics-5519" target="_blank" rel="noopener">ITviec · VISION Advisory &amp; Analytics, Senior Backend Engineer (Go, NodeJS, TypeScript)</a></li>
      <li><a href="https://itviec.com/it-jobs/sr-backend-engineer-blockchain-crypto-exchange-ton-corporation-1232" target="_blank" rel="noopener">ITviec · TON Corporation, Sr Backend Engineer (Crypto Exchange)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-system-architect-distributed-systems-solarbk-3417" target="_blank" rel="noopener">ITviec · SolarBK, Senior System Architect (Distributed Systems)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-backend-developer-nodejs-offspring-digital-viet-nam-3811" target="_blank" rel="noopener">ITviec · Offspring Digital, Senior Backend Developer - NodeJS</a></li>
      <li><a href="https://itviec.com/it-jobs/mid-senior-node-js-fullstack-engineer-saafehouse-3924" target="_blank" rel="noopener">ITviec · Saafehouse, Mid/Sr NodeJS Fullstack Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-backend-developer-nestjs-cong-ty-tnhh-skydev-4851" target="_blank" rel="noopener">ITviec · SKYDEV, Middle Backend Developer (NestJS)</a></li>
      <li><a href="https://itviec.com/it-jobs/backend-developer-java-golang-nodejs-digital-innovation-2837" target="_blank" rel="noopener">ITviec · Digital Innovation, Backend Developer (Java/Golang/NodeJS)</a></li>
      <li><a href="https://itviec.com/it-jobs/software-development-manager-javascript-nodejs-sql-ila-viet-nam-0639" target="_blank" rel="noopener">ITviec · ILA Việt Nam, Software Development Manager</a> (chỉ dùng cho bảng cấp độ)</li>
      <li><a href="https://itviec.com/it-jobs/senior-nestjs-developer-backend-sstech-1628" target="_blank" rel="noopener">ITviec · SSTech, Senior NestJS Developer (Backend) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-fullstack-nodejs-reactjs-backend-heavy-gigarion-technology-2249" target="_blank" rel="noopener">ITviec · Gigarion Technology, Senior Fullstack NodeJS/ReactJS (Backend heavy) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-nodejs-developer-saigon-technology-5841" target="_blank" rel="noopener">ITviec · Saigon Technology, Senior NodeJS Developer — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-senior-nodejs-developer-nestjs-reactjs-redux-saigon-technology-3816" target="_blank" rel="noopener">ITviec · Saigon Technology, Middle/Senior NodeJS Developer (NestJS, ReactJS) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-backend-developer-nodejs-typescript-legatcy-singapore-1249" target="_blank" rel="noopener">ITviec · Legatcy Singapore, Senior Backend Developer (NodeJS/Typescript) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/remote-senior-backend-node-js-typescript-jedi-technology-1040" target="_blank" rel="noopener">ITviec · Jedi Technology, Remote Senior Backend (Node.js/TypeScript) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-backend-engineer-typescript-nodejs-reactjs-ringkas-2633" target="_blank" rel="noopener">ITviec · Ringkas, Senior Backend Engineer (Typescript, NodeJS) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-backend-developer-nodejs-fullerton-health-4053" target="_blank" rel="noopener">ITviec · Fullerton Health, Senior Backend Developer (NodeJS) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-full-stack-developer-node-js-nestjs-next-js-fgs-software-ltd-co-5548" target="_blank" rel="noopener">ITviec · FGS Software, Senior Full Stack Developer (Node.js / NestJS / Next.js) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/middle-nodejs-developer-hasaki-2331" target="_blank" rel="noopener">ITviec · Hasaki, Middle NodeJS Developer — hết hạn</a></li>
      <li><a href="https://topdev.vn/viec-lam/nodejs-developer-senior-cyberlogitec-vietnam-co-ltd-2096129" target="_blank" rel="noopener">TopDev · CyberLogitec, NodeJS Developer (Senior) — hết hạn</a></li>
      <li><a href="https://topdev.vn/viec-lam/senior-lead-nodejs-backend-developer-cong-ty-co-phan-cong-nghe-finviet-2044518" target="_blank" rel="noopener">TopDev · Finviet, Senior/Lead NodeJS Backend Developer — hết hạn</a></li>
      <li><a href="https://topdev.vn/viec-lam/senior-backend-developer-nodejs-from-1-800-brickmate-group-2029355" target="_blank" rel="noopener">TopDev · Brickmate, Senior Backend Developer (NodeJS)</a> — đoạn trích, hết hạn (2023)</li>
      <li><a href="https://topdev.vn/viec-lam/senior-nodejs-engineer-up-to-3000usd-sungrove-tech-vietnam-2031948" target="_blank" rel="noopener">TopDev · Sungrove Tech, Senior NodeJS Engineer</a> — đoạn trích, hết hạn (2024)</li>
      <li><a href="https://jobsgo.vn/viec-lam/nodejs-developer-tu-3-nam-kinh-nghiem-29193682206.html" target="_blank" rel="noopener">JobsGO · S-Socials, NodeJS Developer (từ 3 năm kinh nghiệm)</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/middle-backend-developer-nodejs-nestjs/2263061.html" target="_blank" rel="noopener">TopCV · IKAME, Middle Backend Developer (NodeJS/NestJS)</a> — đoạn trích</li>
      <li><a href="https://www.topcv.vn/viec-lam/lead-backend-developer-node-js/2259906.html" target="_blank" rel="noopener">TopCV · Minma, Lead Backend Developer (Node.js)</a> — đoạn trích</li>
      <li><a href="https://www.topcv.vn/viec-lam/nodejs-backend-teamlead/2330679.html" target="_blank" rel="noopener">TopCV · TECHVIFY, NodeJS Backend Teamlead</a> — đoạn trích</li>
      <li><a href="https://www.topcv.vn/brand/smartosc/tuyen-dung/technical-lead-node-js-j2294090.html" target="_blank" rel="noopener">TopCV · SmartOSC, Technical Lead (Node.js)</a> — đoạn trích</li>
      <li><a href="https://careers.techvify.com/tuyen-dung-it/senior-nodejs-developer-ha-noi" target="_blank" rel="noopener">TECHVIFY Careers · Senior Nodejs Developer (Hà Nội)</a> — đoạn trích, hết hạn</li>
      <li><a href="https://www.vietnamworks.com/senior-backend-developer-nodejs-1999399-jv" target="_blank" rel="noopener">VietnamWorks · GoCode, Senior Backend Developer (Nodejs)</a> — đoạn trích</li>
      <li><a href="https://www.vietnamworks.com/seniorlead-nodejs-backend-developer-1985770-jv" target="_blank" rel="noopener">VietnamWorks · Senior/Lead NodeJS Backend Developer</a> — đoạn trích, hết hạn</li>
      <li><a href="https://jobs.ashbyhq.com/resend/6589bee8-3ec9-4620-90b6-890b23464c4d" target="_blank" rel="noopener">Ashby · Resend, Backend Engineer</a></li>
      <li><a href="https://jobs.ashbyhq.com/railway/5f51771e-339f-49f9-8da2-e3c7179c7bad" target="_blank" rel="noopener">Ashby · Railway, Senior Product Engineer, Scalability</a></li>
      <li><a href="https://jobs.ashbyhq.com/attio/1e6c62e8-d50e-49ab-a7b2-4e54b2e7bcbb" target="_blank" rel="noopener">Ashby · Attio, Senior Product Engineer [Backend]</a></li>
      <li><a href="https://jobs.ashbyhq.com/duck-duck-go/53022b02-da3d-4fda-8273-c897d27ed50d" target="_blank" rel="noopener">Ashby · DuckDuckGo, Senior Backend Engineer</a></li>
      <li><a href="https://jobs.ashbyhq.com/gamma/a546c0a8-4c8b-471c-909c-9c7b34d1f64d" target="_blank" rel="noopener">Ashby · Gamma, Software Engineer, Backend</a></li>
      <li><a href="https://www.okta.com/company/careers/opportunity/8241679?gh_jid=8241679" target="_blank" rel="noopener">Okta (Greenhouse) · Senior Software Engineer, Security Engineering (Auth0)</a></li>
    </ul>
    <p class="muted note">TopCV trả về 403 khi đọc trực tiếp; VietnamWorks là trang render bằng JavaScript nên không đọc được nội dung; Djinni chặn đọc. Các tin ITviec hết hạn trả về 410 nhưng vẫn còn nội dung. LinkedIn chỉ trả về bài đăng cá nhân của recruiter, không có tin tuyển dụng đọc được, nên không dùng.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Tick vào mục đã học, tiến độ được lưu trên trình duyệt này. Lab 4 tuần cộng lại thành <b>“Expense Tracker API”</b>, backend cho app Expense Tracker ở các track mobile: TypeScript, NestJS/Fastify, PostgreSQL, Redis, BullMQ, Socket.IO, xác thực JWT, test với Testcontainers, OpenTelemetry, Docker và CI/CD.`,

 lc:`  <div style="display:grid;gap:8px">
    <h2>Vòng live coding Node.js backend</h2>
    <p class="muted">Tổng hợp từ đề take-home công khai (Reedsy, GuardRails, DigitalService), bài viết về quy trình tuyển backend của Slack (2019), SoundCloud (2020) và Canva (2025), trang tuyển dụng của GitLab và Monzo, chính sách AI của Canva, Monzo, Anthropic, cùng các bài chia sẻ của ứng viên 2023–2026. Slack và SoundCloud cũ hơn nhưng vẫn là mô tả chính thức hiếm hoi về vòng review PR cho backend. Chỉ GuardRails (thang điểm) và Slack (tiêu chí chấm) công bố cách chấm; cột “Mức đạt / Mức Senior” bên dưới là tổng hợp, không phải tiêu chí chính thức của công ty nào.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>Live coding bài thực tế</b></td><td class="mono">45–60′</td><td>Chia sẻ màn hình hoặc CoderPad / HackerRank: viết một endpoint (CRUD có validate, phân trang), hoặc một tiện ích thuần Node như promise pool, rate limiter, LRU cache, retry. Người phỏng vấn đổi yêu cầu giữa chừng (thêm TTL, thêm hủy, chạy nhiều instance) để xem bạn mở rộng thế nào.</td></tr>
          <tr><td><b>Take-home + buổi review</b></td><td class="mono">1 ngày hoặc 4–6h</td><td>Reedsy: API Express (TypeScript hoặc ES hiện đại) nhận job import / export, trạng thái <code>pending</code> → <code>finished</code> sau thời gian định sẵn, lưu in-memory nhưng phải thay được store, có test, kèm câu hỏi thiết kế lưu nhiều phiên bản tài liệu; ước tính khoảng một ngày làm việc. GuardRails: POST tạo scan, xử lý bất đồng bộ qua queue + worker, lưu DB, chấm theo thang 22 điểm (cấu trúc, code idiomatic, hiểu stack, implementation, unit test, README, SQL schema, bonus Docker).</td></tr>
          <tr><td><b>Review pull request / codebase có lỗi</b></td><td class="mono">≤ 2h hoặc 60–90′</td><td>Slack thay take-home mở bằng bài review một PR trên GitHub, tối đa 2 giờ, chấm craftsmanship, bảo mật và hiệu năng, teamwork. SoundCloud đưa phần review PR vào code challenge (5–6 giờ). DigitalService công khai repo TypeScript “cố ý chứa lỗi” làm nền cho buổi deep-dive. Ứng viên GitLab kể vòng technical 90′ là review một merge request (lời kể trên Glassdoor, không phải mô tả chính thức).</td></tr>
          <tr><td><b>Pair coding thêm feature</b></td><td class="mono">60–90′</td><td>Slack: làm trên máy của mình với tài liệu như ngày thường, cùng interviewer dựng bản đơn giản của một feature thực tế, không whiteboard, không bài mẹo. Monzo (backend chủ yếu Go) cho chọn take-home hoặc pair coding, sau đó vòng cuối có system design.</td></tr>
          <tr><td><b>AI-assisted coding</b></td><td class="mono">~60′</td><td>Canva (từ 06/2025) yêu cầu ứng viên backend dùng Copilot / Cursor / Claude cho đề mơ hồ, sát sản phẩm; chấm cách chia nhỏ yêu cầu và khả năng phát hiện, sửa lỗi trong code AI sinh ra. Meta từ 10/2025 có vòng 60′ ba pha: sửa bug → implement → tối ưu, với AI chat trong IDE (có TypeScript).</td></tr>
          <tr><td><b>System design backend</b></td><td class="mono">45–60′</td><td>Không code: API, data model, cache, queue, scale, xử lý lỗi. Gần như luôn có với Senior (Monzo ghi rõ ở vòng cuối).</td></tr>
          <tr><td><b>Online test / DSA</b></td><td class="mono">45–90′</td><td>Nhiều công ty ở Việt Nam và outsourcing vẫn mở đầu bằng bài test trên Coderbyte, HackerRank, Codility hoặc live code thuật toán mức dễ đến trung bình (array, linked list, recursion, sort; tree / graph ít hơn), kèm câu hỏi event loop, SQL.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Chính sách AI trái ngược nhau: Canva bắt buộc dùng AI trong vòng coding; Meta có một vòng cho dùng, một vòng không; Monzo cho dùng để “tinh chỉnh, không thay thế” khi chuẩn bị nhưng không dùng live trong buổi phỏng vấn; Anthropic yêu cầu làm take-home và phỏng vấn live không có AI trừ khi được cho phép rõ. Hỏi recruiter trước, và dù được dùng thì vẫn phải giải thích được mọi dòng.</p>
  </div>

  <div class="box">
    <h3>Đề phổ biến và cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Đề</th><th>Mức đạt</th><th>Mức Senior</th></tr></thead>
        <tbody>
          <tr><td><b>CRUD API có validation + phân trang</b></td><td>Route đúng method / status (201, 204, 404, 422), validate body bằng Zod hoặc JSON Schema, phân trang <code>limit</code> / <code>offset</code>, lỗi tập trung</td><td>Cursor pagination ổn định (sort theo <code>created_at, id</code>), kiểm tra quyền sở hữu từng bản ghi, chỉ nhận field cho phép, lỗi dạng Problem Details, idempotency key cho POST, integration test bằng Supertest</td></tr>
          <tr><td><b>Rate limiter</b></td><td>Fixed window hoặc token bucket in-memory, trả 429 + <code>Retry-After</code></td><td>So sánh fixed window / sliding window / token bucket, chọn key (user, IP sau <code>trust proxy</code>), dọn bucket để không rò bộ nhớ, chuyển sang Redis + Lua (atomic) khi chạy nhiều instance, fail open hay fail closed khi Redis chết</td></tr>
          <tr><td><b>LRU cache / TTL cache</b></td><td><code>Map</code> giữ thứ tự chèn: <code>get</code> xóa rồi set lại, vượt dung lượng thì xóa key đầu; TTL kiểm tra lúc đọc</td><td>O(1) cho cả get / set, giải thích vì sao <code>Map</code> đủ thay cho doubly linked list, dedupe request đang bay (cache Promise, xóa khi reject), stale-while-revalidate, khi nào cần Redis thay cache trong process</td></tr>
          <tr><td><b>Promise pool (giới hạn concurrency)</b></td><td>Chạy tối đa N promise cùng lúc, trả kết quả</td><td>Giữ đúng thứ tự, dừng khi lỗi đầu tiên hoặc gom lỗi (<code>allSettled</code>), hỗ trợ <code>AbortSignal</code>, không để unhandled rejection, biết <code>p-limit</code> / <code>p-map</code></td></tr>
          <tr><td><b>Retry với backoff</b></td><td>Retry N lần với delay tăng dần</td><td>Exponential backoff + jitter, chỉ retry lỗi tạm thời (5xx, timeout, 429 theo <code>Retry-After</code>), chỉ retry thao tác idempotent, timeout cho từng lần bằng <code>AbortSignal.timeout</code>, tổng deadline</td></tr>
          <tr><td><b>Xử lý file lớn bằng stream</b></td><td><code>createReadStream</code> + <code>readline</code>, không <code>readFile</code> cả file</td><td><code>pipeline()</code> để lỗi và cleanup lan đúng, giải thích backpressure, ghi DB theo batch, đo RSS, giới hạn kích thước upload, dòng lỗi gom thành báo cáo thay vì dừng cả file</td></tr>
          <tr><td><b>Sửa bug async</b></td><td>Tìm được <code>await</code> thiếu, <code>forEach(async …)</code>, <code>try/catch</code> không bắt được</td><td>Giải thích thứ tự microtask / macrotask, unhandled rejection làm sập process từ Node 15, race condition giữa hai request, viết test tái hiện trước khi sửa</td></tr>
          <tr><td><b>System design backend</b></td><td>Vẽ được API, DB, cache</td><td>Hỏi yêu cầu và số liệu trước, chọn nhất quán ở đâu (số dư) và eventual ở đâu (báo cáo), queue + outbox, idempotency, observability, rollout và migration không downtime</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Với Senior, nên trả lời theo khung: bối cảnh → quyết định → phương án khác → khi nào nó hỏng → bằng chứng (số liệu, test). Câu “chạy trên 3 instance thì sao?” gần như chắc chắn sẽ được hỏi với mọi đề có state in-memory.</p>
  </div>

  <div class="box">
    <h3>Chia 60 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–5′</td><td>Hỏi lại yêu cầu: input / output, lượng dữ liệu, chạy một hay nhiều instance, lỗi xử lý thế nào, có được dùng thư viện (Express, Zod, p-limit) không, có cần test không.</td></tr>
          <tr><td class="mono">5–10′</td><td>Nói kế hoạch: chữ ký hàm hoặc route, cấu trúc dữ liệu, các ca biên sẽ xử lý. Viết vài test case trước nếu đề là tiện ích.</td></tr>
          <tr><td class="mono">10–35′</td><td>Happy path chạy được trước. Vừa code vừa nói, chạy thử sớm (<code>node --watch</code>, <code>node --test</code>).</td></tr>
          <tr><td class="mono">35–50′</td><td>Ca biên và lỗi: input sai, rỗng, timeout, hủy, lỗi giữa chừng, đồng thời hai request, giới hạn bộ nhớ.</td></tr>
          <tr><td class="mono">50–60′</td><td>Dọn code, nói sẽ test thêm gì, trade-off, và bản production khác gì (Redis, nhiều instance, metrics, log).</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag ok">Nên</span>
      <ul>
        <li>Nghĩ thành tiếng, hỏi trước khi giả định.</li>
        <li>Chuẩn bị sẵn một project trống: TypeScript (Node 24 chạy thẳng file <code>.ts</code>), Express 5 hoặc Fastify, Zod, <code>node:test</code>.</li>
        <li>Validate ở biên, trả status code đúng, gom lỗi vào một error handler.</li>
        <li>Truyền <code>AbortSignal</code> và đặt timeout cho mọi lời gọi ra ngoài.</li>
        <li>Dùng <code>pipeline()</code> từ <code>node:stream/promises</code> cho stream.</li>
        <li>Nói rõ phần nào in-memory chỉ đúng với một instance.</li>
        <li>Thuộc sẵn: promise pool, retry + backoff, token bucket, LRU bằng <code>Map</code>, đọc CSV bằng stream.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">Tránh</span>
      <ul>
        <li>Nối chuỗi SQL từ input của người dùng.</li>
        <li>API <code>*Sync</code>, <code>bcrypt.hashSync</code>, <code>JSON.parse</code> payload rất lớn trên request path.</li>
        <li><code>arr.forEach(async …)</code> rồi tưởng đã chờ xong.</li>
        <li><code>Promise.all</code> trên 10.000 request không giới hạn.</li>
        <li>Nuốt lỗi bằng <code>catch {}</code> rỗng hoặc trả stack trace ra client.</li>
        <li>Lưu float cho tiền.</li>
        <li>Chấp nhận code AI gợi ý mà không giải thích được.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: promise pool giữ thứ tự, hỗ trợ AbortSignal</h3>
<pre>type Task&lt;T, R&gt; = (item: T, index: number, signal: AbortSignal) =&gt; Promise&lt;R&gt;;

export async function mapWithConcurrency&lt;T, R&gt;(
  items: Iterable&lt;T&gt;,
  limit: number,
  fn: Task&lt;T, R&gt;,
  { signal }: { signal?: AbortSignal } = {},
): Promise&lt;R[]&gt; {
  if (!Number.isInteger(limit) || limit &lt; 1) throw new RangeError('limit must be a positive integer');
  signal?.throwIfAborted();

  const list = Array.from(items);
  const results = new Array&lt;R&gt;(list.length);
  const inner = new AbortController(); // cancels the other tasks on the first failure
  const onAbort = () =&gt; inner.abort(signal?.reason);
  signal?.addEventListener('abort', onAbort, { once: true });

  let next = 0; // safe without a lock: only one JS thread touches it
  const worker = async () =&gt; {
    while (next &lt; list.length) {
      inner.signal.throwIfAborted();
      const i = next++;
      results[i] = await fn(list[i], i, inner.signal); // write into its own slot: order kept
    }
  };

  try {
    await Promise.all(Array.from({ length: Math.min(limit, list.length) }, worker));
    return results;
  } catch (err) {
    inner.abort(err); // stop siblings that are still running
    throw err;
  } finally {
    signal?.removeEventListener('abort', onAbort);
  }
}
// Usage: fetch 200 exchange-rate days, at most 5 at a time, give up after 10 s
// const rates = await mapWithConcurrency(days, 5,
//   (day, _i, signal) =&gt; fetch(\`\${FX_URL}/\${day}\`, { signal }).then((r) =&gt; r.json()),
//   { signal: AbortSignal.timeout(10_000) });</pre>
    <p class="muted note">N worker cùng kéo index từ một biến đếm chung; mỗi kết quả ghi vào đúng ô của nó nên thứ tự giữ nguyên dù task xong lúc nào. Biến <code>next</code> không cần khóa vì chỉ một thread JS chạy, giữa <code>next &lt; length</code> và <code>next++</code> không có <code>await</code>. Lỗi đầu tiên làm <code>Promise.all</code> reject, đồng thời abort <code>inner</code> để các task đang chạy dừng sớm (nếu <code>fn</code> tôn trọng signal) và không task mới nào bắt đầu; signal bên ngoài (client ngắt kết nối, <code>AbortSignal.timeout</code>) được nối vào cùng controller. Chạy được trực tiếp trên Node 24 vì chỉ dùng cú pháp kiểu xóa được (type stripping). Câu hỏi tiếp theo hay gặp: muốn chạy hết và trả về cả lỗi lẫn kết quả thì sửa thế nào (kiểu <code>allSettled</code>)? Nếu <code>items</code> là async iterable vô hạn (đọc từ stream) thì sao? Khác gì <code>p-limit</code>, và vì sao không dùng cách chia batch <code>Promise.all</code> từng nhóm N?</p>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: rate limiter token bucket (middleware Express 5)</h3>
<pre>import type { Request, Response, NextFunction } from 'express';

type Bucket = { tokens: number; updatedAt: number };

type Options = {
  capacity: number;      // max burst
  refillPerSec: number;  // sustained rate
  key?: (req: Request) =&gt; string;
  now?: () =&gt; number;    // injectable clock for tests
};

export function tokenBucket({
  capacity,
  refillPerSec,
  key = (req) =&gt; req.ip ?? 'unknown',
  now = () =&gt; performance.now(),
}: Options) {
  const buckets = new Map&lt;string, Bucket&gt;();
  const fullAfterMs = (capacity / refillPerSec) * 1000;

  // A bucket idle long enough to be full again is the same as no bucket: drop it so memory stays bounded
  const sweeper = setInterval(() =&gt; {
    const t = now();
    for (const [k, b] of buckets) if (t - b.updatedAt &gt;= fullAfterMs) buckets.delete(k);
  }, Math.max(fullAfterMs, 1_000));
  sweeper.unref(); // don't keep the process alive (tests, graceful shutdown)

  function middleware(req: Request, res: Response, next: NextFunction) {
    const t = now();
    const k = key(req);
    const b = buckets.get(k) ?? { tokens: capacity, updatedAt: t };

    // Lazy refill: no timer per client, just top up by elapsed time
    b.tokens = Math.min(capacity, b.tokens + ((t - b.updatedAt) / 1000) * refillPerSec);
    b.updatedAt = t;
    buckets.set(k, b);

    res.set('RateLimit-Limit', String(capacity));
    if (b.tokens &gt;= 1) {
      b.tokens -= 1;
      res.set('RateLimit-Remaining', String(Math.floor(b.tokens)));
      return next();
    }

    const retryAfter = Math.ceil((1 - b.tokens) / refillPerSec);
    res
      .status(429)
      .set('Retry-After', String(retryAfter))
      .type('application/problem+json') // res.json keeps a Content-Type that is already set
      .json({ type: 'about:blank', title: 'Too Many Requests', status: 429, detail: \`Retry in \${retryAfter}s\` });
  }

  return Object.assign(middleware, { stop: () =&gt; clearInterval(sweeper) });
}

// Usage (Express 5):
// app.set('trust proxy', 1);  // behind one proxy/LB, otherwise req.ip is the LB's address
// app.post('/auth/login', tokenBucket({ capacity: 5, refillPerSec: 5 / 60 }), loginHandler);</pre>
    <p class="muted note">Không cần timer cho từng client: mỗi request tự nạp thêm token theo thời gian đã trôi (<code>capacity</code> quyết định burst, <code>refillPerSec</code> quyết định tốc độ trung bình). Bucket nào đã đầy lại thì giống như chưa từng có nên xóa được, nhờ vậy <code>Map</code> không phình mãi; <code>unref()</code> để interval không giữ process sống. Dùng <code>performance.now()</code> thay <code>Date.now()</code> để không bị ảnh hưởng khi đồng hồ hệ thống nhảy. Không có race condition trong một process vì đoạn đọc–sửa–ghi không có <code>await</code>. Câu hỏi tiếp theo hay gặp: chạy 3 instance sau load balancer thì sao (chuyển state sang Redis, đọc–sửa–ghi trong một script Lua để atomic)? Redis chết thì fail open hay fail closed? Rate limit đăng nhập nên theo IP, theo tài khoản hay cả hai? Vì sao phải cấu hình <code>trust proxy</code>?</p>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài code review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample code review: find the bugs in 10 minutes</span></h3>
<pre>// Express 5 + Sequelize, Node 24. Amounts are integers (minor units).
import express from 'express';
import bcrypt from 'bcrypt';
import { QueryTypes } from 'sequelize';
import { sequelize, User, Wallet, Transaction } from './models.js';
import { requireAuth } from './auth.js';
import { transferSchema, monthSchema } from './schemas.js';
import { buildMonthlyReport } from './reports.js';

const app = express();
app.use(express.json());

app.post('/register', async (req, res) =&gt; {
  const passwordHash = bcrypt.hashSync(req.body.password, 12);
  const user = await User.create({ ...req.body, passwordHash });
  res.status(201).json({ id: user.id, email: user.email });
});

app.get('/transactions', requireAuth, async (req, res) =&gt; {
  const rows = await sequelize.query(
    \`SELECT * FROM transactions WHERE user_id = \${req.user.id}
     AND category = '\${req.query.category}' ORDER BY created_at DESC LIMIT 50\`,
    { type: QueryTypes.SELECT },
  );
  res.json(rows);
});

app.patch('/transactions/:id', requireAuth, async (req, res) =&gt; {
  const tx = await Transaction.findByPk(req.params.id);
  if (!tx) return res.status(404).end();
  await tx.update({ note: req.body.note, categoryId: req.body.categoryId });
  res.json(tx);
});

app.delete('/transactions/:id', requireAuth, async (req, res) =&gt; {
  Transaction.destroy({ where: { id: req.params.id, userId: req.user.id } });
  res.status(204).end();
});

app.post('/wallets/:id/transfer', requireAuth, async (req, res) =&gt; {
  const { toWalletId, amount } = transferSchema.parse(req.body);
  const from = await Wallet.findOne({ where: { id: req.params.id, userId: req.user.id } });
  const to = await Wallet.findOne({ where: { id: toWalletId, userId: req.user.id } });
  if (!from || !to) return res.status(404).end();
  if (from.balance &lt; amount) return res.status(409).json({ code: 'INSUFFICIENT_FUNDS' });
  await from.update({ balance: from.balance - amount });
  await to.update({ balance: to.balance + amount });
  res.json({ balance: from.balance });
});

app.get('/reports/monthly', requireAuth, async (req, res) =&gt; {
  const month = monthSchema.parse(req.query.month);
  const fx = await fetch(\`\${process.env.FX_URL}/latest?base=VND\`).then((r) =&gt; r.json());
  res.json(await buildMonthlyReport(req.user.id, month, fx.rates));
});

app.use((err, req, res, next) =&gt; {
  console.error(err);
  res.status(500).json({ message: err.message, stack: err.stack });
});

app.listen(3000);</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (8 lỗi)</span><span class="l-en">Show the answer (8 bugs)</span></span></summary><div class="ans">
    <ul class="l-vi">
      <li><b>Hash mật khẩu đồng bộ trên request path:</b> <code>bcrypt.hashSync</code> với cost 12 chặn event loop hàng trăm ms, mọi request khác phải chờ; vài chục lượt đăng ký cùng lúc là API đứng. Dùng bản async (<code>await bcrypt.hash(...)</code>, chạy trên thread pool của libuv) hoặc argon2.</li>
      <li><b>Mass assignment:</b> <code>User.create({ ...req.body, passwordHash })</code> cho client tự gửi <code>role: "admin"</code>, <code>isVerified: true</code> (OWASP API3:2023). Chỉ lấy field đã validate qua schema: <code>{ email, name }</code>.</li>
      <li><b>SQL injection:</b> <code>req.query.category</code> nối thẳng vào chuỗi SQL, <code>?category=' OR '1'='1</code> là đọc được giao dịch của mọi người. Dùng replacements / bind parameter (<code>$1</code>) hoặc query builder của ORM.</li>
      <li><b>BOLA:</b> <code>PATCH /transactions/:id</code> tìm theo id mà không kiểm tra chủ sở hữu, ai đăng nhập cũng sửa được giao dịch của người khác chỉ bằng cách đổi id (OWASP API1:2023). Thêm <code>userId: req.user.id</code> vào điều kiện, không tìm thấy thì trả 404.</li>
      <li><b>Quên await:</b> <code>Transaction.destroy(...)</code> không có <code>await</code>: trả 204 trước khi xóa xong, và nếu DB lỗi thì thành unhandled rejection, mặc định từ Node 15 làm sập cả process; Express 5 cũng không bắt được vì promise không được trả về handler.</li>
      <li><b>Race condition số dư:</b> đọc số dư, kiểm tra, rồi ghi giá trị tính trong JS. Hai request chuyển tiền song song cùng đọc số dư cũ nên tiêu được hai lần; hai lệnh <code>update</code> không nằm trong transaction nên lỗi giữa chừng làm mất tiền; <code>toWalletId</code> trùng ví nguồn còn sinh ra tiền. Dùng <code>sequelize.transaction</code> + <code>SELECT … FOR UPDATE</code> (khóa theo thứ tự id để tránh deadlock) hoặc <code>UPDATE wallets SET balance = balance - $1 WHERE id = $2 AND balance &gt;= $1</code>, và chặn chuyển cho chính ví đó.</li>
      <li><b>Gọi service ngoài không timeout:</b> <code>fetch</code> không có <code>signal</code> nên khi service tỷ giá treo, request treo theo, kết nối và bộ nhớ dồn lại; cũng không kiểm tra <code>r.ok</code> nên trang lỗi 5xx bị đọc như dữ liệu. Thêm <code>signal: AbortSignal.timeout(2000)</code>, kiểm tra <code>r.ok</code>, có fallback (tỷ giá cache gần nhất).</li>
      <li><b>Lộ stack trace và trả sai status:</b> error handler gửi <code>err.stack</code> và <code>err.message</code> (có thể chứa câu SQL, đường dẫn file) cho client; lỗi validate của Zod cũng thành 500 thay vì 400 / 422. Log đầy đủ ở server kèm request id, trả về Problem Details với mã lỗi ổn định, map <code>ZodError</code> sang 4xx.</li>
    </ul>
    <ul class="l-en">
      <li><b>Synchronous password hashing on the request path:</b> <code>bcrypt.hashSync</code> at cost 12 blocks the event loop for hundreds of milliseconds, so every other request waits; a few dozen concurrent sign-ups and the API stalls. Use the async version (<code>await bcrypt.hash(...)</code>, which runs on the libuv thread pool) or argon2.</li>
      <li><b>Mass assignment:</b> <code>User.create({ ...req.body, passwordHash })</code> lets the client send <code>role: "admin"</code> or <code>isVerified: true</code> (OWASP API3:2023). Only pass fields that went through the schema, like <code>{ email, name }</code>.</li>
      <li><b>SQL injection:</b> <code>req.query.category</code> is concatenated straight into the SQL string, so <code>?category=' OR '1'='1</code> returns everyone's transactions. Use replacements or bind parameters (<code>$1</code>), or the ORM's query builder.</li>
      <li><b>BOLA:</b> <code>PATCH /transactions/:id</code> looks the row up by id without checking ownership, so any logged-in user can edit someone else's transaction just by changing the id (OWASP API1:2023). Add <code>userId: req.user.id</code> to the lookup and return 404 when it isn't found.</li>
      <li><b>Missing await:</b> <code>Transaction.destroy(...)</code> isn't awaited, so we answer 204 before the delete finishes, and if the DB fails it becomes an unhandled rejection, which has crashed the process by default since Node 15. Express 5 can't catch it either, because the promise never reaches the handler's return value.</li>
      <li><b>Race condition on the balance:</b> it reads the balance, checks it, then writes a value computed in JS. Two concurrent transfers both read the old balance and spend the money twice; the two <code>update</code> calls aren't in a transaction, so a failure in between loses money; and a <code>toWalletId</code> equal to the source wallet actually creates money. Use <code>sequelize.transaction</code> with <code>SELECT … FOR UPDATE</code> (lock in id order to avoid deadlocks), or <code>UPDATE wallets SET balance = balance - $1 WHERE id = $2 AND balance &gt;= $1</code>, and reject transfers to the same wallet.</li>
      <li><b>No timeout on the external call:</b> <code>fetch</code> has no <code>signal</code>, so when the FX service hangs our request hangs with it and connections and memory pile up; it also doesn't check <code>r.ok</code>, so a 5xx error page gets parsed as data. Add <code>signal: AbortSignal.timeout(2000)</code>, check <code>r.ok</code>, and fall back to the last cached rates.</li>
      <li><b>Leaking stack traces and the wrong status:</b> the error handler sends <code>err.stack</code> and <code>err.message</code> (which can include SQL or file paths) to the client, and Zod validation errors come back as 500 instead of 400 or 422. Log the full error server-side with a request id, return Problem Details with a stable error code, and map <code>ZodError</code> to a 4xx.</li>
    </ul></div></details>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted small">Làm bằng TypeScript trên Node 24, bấm giờ, vừa làm vừa nói và quay màn hình. Mỗi bài viết vài test bằng <code>node:test</code>. Bài 7 mô phỏng take-home của Reedsy ở dạng rút gọn.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Bài</th><th>Giờ</th><th>Sau tuần</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td><code>mapWithConcurrency</code> + <code>retry</code> có exponential backoff, jitter và timeout từng lần; tải 100 bài từ <code>jsonplaceholder.typicode.com/posts/{id}</code>, tối đa 5 request cùng lúc, kết quả đúng thứ tự</td><td class="mono">30′</td><td class="mono">1</td></tr>
          <tr><td class="mono">2</td><td>Sinh file CSV sao kê 1 triệu dòng rồi tính tổng chi theo danh mục bằng <code>createReadStream</code> + <code>readline</code> / <code>pipeline()</code>; in RSS lúc đầu và lúc cuối, so với bản <code>readFile</code></td><td class="mono">30′</td><td class="mono">1</td></tr>
          <tr><td class="mono">3</td><td>CRUD <code>/transactions</code> bằng Express 5 hoặc Fastify: validate bằng Zod, cursor pagination, filter theo tháng, lỗi dạng Problem Details (RFC 9457), lưu in-memory nhưng tách repository để thay DB</td><td class="mono">45′</td><td class="mono">2</td></tr>
          <tr><td class="mono">4</td><td>LRU cache có TTL bằng <code>Map</code>, rồi bọc <code>api.github.com/users/{username}</code>: cache kết quả, gộp các request trùng đang bay vào một Promise, lỗi thì không cache</td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">5</td><td>Token bucket middleware ở trên cho <code>/auth/login</code>, sau đó viết lại bằng Redis (script Lua) và chạy 2 instance để chứng minh giới hạn dùng chung</td><td class="mono">40′</td><td class="mono">3</td></tr>
          <tr><td class="mono">6</td><td>Code review đoạn mẫu ở trên, rồi viết lại cho đúng kèm test cho ca BOLA và chuyển tiền song song</td><td class="mono">25′</td><td class="mono">3</td></tr>
          <tr><td class="mono">7</td><td>Take-home rút gọn kiểu Reedsy cho Expense Tracker: <code>POST /exports</code> (<code>csv</code> | <code>pdf</code>) và <code>GET /exports</code> nhóm theo trạng thái, job chuyển <code>pending</code> → <code>finished</code> sau 10 / 25 giây, store thay được, có test, README nêu giả định và trade-off</td><td class="mono">90′</td><td class="mono">4</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Muốn luyện take-home thật: làm đúng đề Reedsy (khoảng một ngày) hoặc đề GuardRails rồi tự chấm theo thang 22 điểm của họ. Tuần 4 nên thêm một buổi system design 45′ (vd đồng bộ giao dịch giữa app mobile offline và server) với bạn bè đóng vai interviewer.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://github.com/reedsy/challenges/blob/main/node-backend.md" target="_blank" rel="noopener">GitHub · Reedsy Node.js backend challenge</a></li>
      <li><a href="https://github.com/guardrailsio/NodeJS-backend-challenge" target="_blank" rel="noopener">GitHub · GuardRails Node.js backend challenge (thang điểm)</a></li>
      <li><a href="https://github.com/digitalservicebund/backend-challenge-review-typescript" target="_blank" rel="noopener">GitHub · DigitalService backend challenge review (TypeScript)</a></li>
      <li><a href="https://github.com/CollabCodeTech/backend-challenges" target="_blank" rel="noopener">GitHub · Danh sách backend challenge công khai của các công ty</a></li>
      <li><a href="https://slack.engineering/refactoring-backend-engineering-hiring-at-slack/" target="_blank" rel="noopener">Slack Engineering · Refactoring backend engineering hiring</a></li>
      <li><a href="https://developers.soundcloud.com/blog/backend-code-challenge-recruiting-perspective-and-results" target="_blank" rel="noopener">SoundCloud · Backend code challenge reform</a></li>
      <li><a href="https://handbook.gitlab.com/job-families/engineering/development/backend/intermediate/" target="_blank" rel="noopener">GitLab Handbook · Intermediate Backend Engineer (quy trình tuyển)</a></li>
      <li><a href="https://job-boards.greenhouse.io/monzo/jobs/6635595" target="_blank" rel="noopener">Monzo · Backend Engineer (quy trình phỏng vấn)</a></li>
      <li><a href="https://canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews" target="_blank" rel="noopener">Canva Engineering · Yes, you can use AI in our interviews</a></li>
      <li><a href="https://www.hellointerview.com/blog/meta-ai-enabled-coding" target="_blank" rel="noopener">Hello Interview · Meta AI-enabled coding round</a></li>
      <li><a href="https://monzo.com/blog/the-ultimate-guide-on-using-ai-to-ace-an-interview-at-monzo" target="_blank" rel="noopener">Monzo · Using AI in interviews</a></li>
      <li><a href="https://www.anthropic.com/candidate-ai-guidance" target="_blank" rel="noopener">Anthropic · Guidance on candidates' AI usage</a></li>
      <li><a href="https://200lab.io/blog/cau-hoi-phong-van-backend/" target="_blank" rel="noopener">200Lab · Các dạng câu hỏi phỏng vấn backend</a></li>
      <li><a href="https://www.hackerrank.com/mock-interviews/back-end-developer-node/node" target="_blank" rel="noopener">HackerRank · Node.js backend mock interview</a></li>
      <li><a href="https://www.hellointerview.com/learn/low-level-design/problem-breakdowns/rate-limiter" target="_blank" rel="noopener">Hello Interview · Rate limiter (low-level design)</a></li>
      <li><a href="https://nodejs.org/learn/modules/backpressuring-in-streams" target="_blank" rel="noopener">Node.js · Backpressuring in streams</a></li>
      <li><a href="https://nodejs.org/api/typescript.html" target="_blank" rel="noopener">Node.js · Modules: TypeScript (type stripping)</a></li>
      <li><a href="https://expressjs.com/en/guide/error-handling.html" target="_blank" rel="noopener">Express · Error handling</a></li>
      <li><a href="https://expressjs.com/en/guide/behind-proxies.html" target="_blank" rel="noopener">Express · Behind proxies (trust proxy)</a></li>
      <li><a href="https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/" target="_blank" rel="noopener">OWASP · API1:2023 Broken Object Level Authorization</a></li>
      <li><a href="https://owasp.org/API-Security/editions/2023/en/0xa3-broken-object-property-level-authorization/" target="_blank" rel="noopener">OWASP · API3:2023 Broken Object Property Level Authorization</a></li>
      <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html" target="_blank" rel="noopener">OWASP · Node.js Security Cheat Sheet</a></li>
      <li><a href="https://www.rfc-editor.org/rfc/rfc9457" target="_blank" rel="noopener">RFC 9457 · Problem Details for HTTP APIs</a></li>
      <li><a href="https://www.rfc-editor.org/rfc/rfc6585" target="_blank" rel="noopener">RFC 6585 · 429 Too Many Requests</a></li>
    </ul>
  </div>`
};
