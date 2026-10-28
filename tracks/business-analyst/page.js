/* Business Analyst (IT): static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. Section 05 is the case study round. */
const BA_PAGE={
 hero:`<span class="eyebrow">Lộ trình phỏng vấn · Business Analyst (IT) · 10/2026</span>
<h1>Business Analyst trong 4 tuần</h1>
<p class="lede">Bám theo 48 JD Business Analyst mảng phần mềm đọc toàn văn trên ITviec, VietnamWorks, TopDev và Joboko (outsourcing, ngân hàng và fintech, công ty product, khách Nhật) cùng 5 JD quốc tế. Khái niệm được đối chiếu với nguồn gốc: BABOK Guide v3 và The Business Analysis Standard của IIBA, BPMN 2.0.2 và UML 2.5.1 của OMG, ISO/IEC/IEEE 29148:2018, ISO/IEC 25010:2023, Scrum Guide 2020, văn bản pháp luật Việt Nam còn hiệu lực tới 10/2026. Nhắm tới Junior – Middle, có câu hỏi Senior. Cùng cấu trúc với các lộ trình khác; riêng mục 05 là vòng case study thay cho live coding.</p>`,

 jd:`<div style="display:grid;gap:8px">
    <h2>Các JD Business Analyst (IT) thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 48 JD Việt Nam đọc được toàn văn ngày 28/10/2026: ITviec (28), VietnamWorks (12), TopDev (5) và Joboko (3, trang tổng hợp chép lại tin gốc). Theo loại công ty: 16 outsourcing / dịch vụ IT, 14 ngân hàng, công ty tài chính, fintech, chứng khoán, 15 công ty product hoặc khối IT nội bộ, 3 tin BA cho khách Nhật. Theo số năm tối thiểu: 0–1 năm (4 tin), 2 năm (12), 3–4 năm (22), từ 5 năm (7), không ghi (3). Chỉ tính vai trò BA trên sản phẩm hoặc dự án phần mềm; các tin “Business Analyst” làm FP&amp;A, phân tích kinh doanh, tư vấn thị trường không tính. VietnamWorks render bằng JavaScript nên nội dung được đọc từ dữ liệu nhúng trong trang; một vài tin bị cắt vài dòng cuối nhưng phần yêu cầu còn đủ. TopCV, JobsGO, trang tuyển dụng của KMS trả về 403, trang của CMC Global và MoMo trả về 404; tin chỉ có đoạn trích không tính vào bảng. Một kỹ năng được tính khi nằm trong phần trách nhiệm, yêu cầu hoặc điểm cộng (tag kỹ năng trên ITviec tính là yêu cầu). Thanh cam là nhóm đa số JD ghi là bắt buộc và xuất hiện ở ít nhất 5 JD; thanh tím là điểm cộng, hiếm gặp hoặc chỉ có ở một nhóm vị trí.</p>
  </div>
  <div class="box"><div class="freq" id="ba-freq"></div></div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li><b>Làm việc với stakeholder để lấy yêu cầu:</b> 48/48. Phỏng vấn, workshop, làm rõ, đàm phán phạm vi; Hitachi đòi “able to conduct interview and presentation in 100% English”.</li>
        <li><b>Viết tài liệu đặc tả:</b> 42/48. BRD và SRS mỗi loại khoảng 22 tin, FRD / functional spec khoảng 12, URD 8 (chủ yếu ngân hàng, chứng khoán, dự án nhà nước), PRD 3 (công ty product), Basic Design / Detail Design ở 2 tin khách Nhật.</li>
        <li><b>UAT, test case, hỗ trợ QA:</b> 41/48, nhiều hơn cả mô hình hóa quy trình. BSC ghi rõ dùng SQL “to check data and analyze UAT defects”; 8Seneca viết “the spec serves as the test oracle”.</li>
        <li><b>Mô hình hóa quy trình, as-is / to-be:</b> 38/48; 16 tin gọi tên BPMN, 8 tin gọi tên UML, 17 tin cần use case.</li>
        <li><b>User story và acceptance criteria:</b> 28/48 (73% tin product); <b>Agile / Scrum:</b> 24/48 (75% tin outsourcing).</li>
        <li><b>Tiếng Anh:</b> 30/48. Khoảng 7 tin chỉ cần đọc tài liệu, khoảng 12 tin cần nói lưu loát; tin ghi điểm cụ thể: TOEIC 450 (Mcredit), TOEIC 650 / IELTS 6.0 (Viettel), IELTS 6.5+ (Saigon Technology), “trình độ B” (MobiFone).</li>
        <li><b>Bằng đại học CNTT hoặc ngành liên quan:</b> 27/48 ghi rõ.</li>
        <li><b>Wireframe / mockup:</b> 22/48 (Figma 14, Balsamiq 2, Axure 1); <b>điều phối, ước lượng, báo cáo tiến độ:</b> 21/48; <b>viết hướng dẫn sử dụng, đào tạo người dùng:</b> 18/48.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li><b>SQL:</b> 19/48 (14 tin bắt buộc), cao nhất ở ngân hàng, fintech (57%) và outsourcing (50%), thấp ở product (20%). BC Card đòi cả “SQL/query performance tuning and indexing”.</li>
        <li><b>Dùng AI hoặc đặc tả tính năng AI:</b> 18/48, mới xuất hiện nhiều trong năm 2026. Bắt buộc ở Edufit (“Bắt buộc có kinh nghiệm thực tế về AI”), Fincon (“Sử dụng AI (ChatGPT, Claude...) trong công việc”), FIZEN (dùng hằng ngày “with concrete examples”), 8Seneca, Mcredit (đặc tả tính năng AI có “accuracy, edge cases”). Edufit nhắc thêm không đưa dữ liệu học sinh vào công cụ AI chưa được duyệt.</li>
        <li><b>API / tích hợp:</b> 17/48; <b>database, ERD, data mapping:</b> 17/48; <b>phân tích dữ liệu, báo cáo, dashboard:</b> 17/48; <b>change request, impact analysis, traceability:</b> 15/48.</li>
        <li><b>Domain tài chính:</b> 20/48, bắt buộc ở 10 tin (mọi tin ngân hàng, chứng khoán), “ưu tiên” ở 10 tin còn lại. Domain ERP / logistics: 8/48, bắt buộc ở công ty ERP.</li>
        <li><b>Công cụ gọi tên:</b> Jira 14, Confluence 11, draw.io 9, Visio 7, Azure DevOps 3, Miro 3, Lucidchart 3, Notion 3; Swagger / OpenAPI chỉ 1 tin (GTS), Postman và Enterprise Architect không tin nào.</li>
        <li><b>Nền lập trình:</b> 9/48, chủ yếu ngân hàng tự phát triển (LPBank “Có khả năng đọc hiểu code phần mềm”, Shinhan “programming or software development (e.g., .Net, Java, Python, SQL...)”) và tin khách Nhật.</li>
        <li><b>Chứng chỉ:</b> 9/48, luôn là điểm cộng, không tin nào bắt buộc. NashTech: “IIBA-CBAP, PMP-PBA, IIBA-CPOA are highly valued”; BSC và Shinhan nhắc CBAP, CCBA, PMI-PBA; Saigon Technology nhắc PSM I/II.</li>
        <li><b>Tiếng Nhật:</b> 4/48. Việc BA cho khách Nhật chủ yếu đăng dưới tên BrSE / IT Comtor (ITviec có 14 tin tiếng Nhật, không tin nào tên BA).</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Khác nhau theo loại công ty</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Loại</th><th>Đòi nhiều hơn mức chung</th><th>Ví dụ trong JD</th></tr></thead>
        <tbody>
          <tr><td><b>Outsourcing / dịch vụ IT</b> <span class="mono muted">16 tin</span></td><td>Tiếng Anh 81%, Agile 75%, SQL 50%, wireframe 56%; chứng chỉ là điểm cộng ở 38%; thêm pre-sales, viết proposal, đi công tác nước ngoài</td><td>Saigon Technology: “Support the PM in pre-sales... write proposals”, UML và BPMN 2.0, IELTS 6.5+. NashTech: SRS theo RUP hoặc product backlog, Definition of Ready / Done, “Hands-on SQL querying and reviewing API specifications”, “valid passport ready”</td></tr>
          <tr><td><b>Ngân hàng, tài chính, chứng khoán</b> <span class="mono muted">14 tin</span></td><td>Domain là điều kiện cứng (14/14); SQL 57%, dữ liệu / BI 50%; tài liệu thường là BRD / URD kèm UAT; khối IT nội bộ thiên kỹ thuật</td><td>BSC: giao dịch, bù trừ, thanh toán, “UBCKNN/HOSE/HNX/VSDC”. Fincon: ít nhất 2 năm sản phẩm vay tiền mặt hoặc pay-later là “tiêu chí quan trọng nhất”. BUFF: “quy định NHNN, AML, KYC/eKYC”. Mcredit: trình change request lên Change Control Board</td></tr>
          <tr><td><b>Product / IT nội bộ</b> <span class="mono muted">15 tin</span></td><td>User story 73%, wireframe 53%, đào tạo người dùng 53%, AI 47%; ít đòi SQL (20%) và Agile (27%)</td><td>RONTECH: BA kiêm “assistant Product Owner”, PRD, story map, KPI “100% of user stories have clear acceptance criteria”. CellphoneS: “bắt buộc” đã triển khai hoặc vận hành module ERP</td></tr>
          <tr><td><b>Dự án nhà nước (B2G)</b> <span class="mono muted">nằm trong các nhóm trên</span></td><td>Tài liệu là sản phẩm nghiệm thu: URD, SRS, thiết kế chi tiết, HDSD, đào tạo</td><td>Savyint: “vì dự án gov nghiệm thu theo tài liệu”. MobiFone, FPT IS, TECAPRO dùng bộ từ URD / SRS / HDSD</td></tr>
          <tr><td><b>Khách Nhật</b> <span class="mono muted">3 tin, đều đã hết hạn</span></td><td>N2 trở lên; tài liệu là Basic Design / Detail Design, sơ đồ chuyển màn hình, mô tả màn hình, quản lý Q&amp;A với phía Nhật; thiên kỹ thuật hơn</td><td>Monstarlab: “bắt đầu với vai trò communicator, phiên dịch” rồi mới nhận vai lớn hơn. HAIBAZO: 2–3 năm phát triển phần mềm. FPT Software: tiếng Nhật “for speaking, reading, and writing”, Git và Jira</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Ứng tuyển outsourcing: ôn gì trước</span>
      <ul>
        <li><b>Tuần 1:</b> elicitation và email chốt yêu cầu bằng tiếng Anh; luyện kể một dự án bằng tiếng Anh ngay từ đầu.</li>
        <li><b>Tuần 2–3:</b> BPMN 2.0, use case, SRS, user story, acceptance criteria, Definition of Ready / Done; change request trong dự án fixed price.</li>
        <li><b>Tuần 4:</b> đọc API spec, SQL cơ bản, UAT. Khách Nhật: thêm mục tài liệu 要件定義書 / 基本設計書 và Q&amp;A表 ở tuần 3.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">Ứng tuyển ngân hàng, fintech: ôn gì trước</span>
      <ul>
        <li><b>Tuần 4, nửa sau:</b> domain ngân hàng và ví điện tử (NAPAS 247, VietQR, eKYC, xác thực sinh trắc học, Thông tư 50/2024 và 77/2025 của NHNN). Đây là phần JD lọc mạnh nhất.</li>
        <li><b>Tuần 4, nửa đầu:</b> SQL để kiểm dữ liệu và phân tích lỗi UAT, data mapping, yêu cầu bảo mật và dữ liệu cá nhân.</li>
        <li><b>Tuần 3:</b> BRD / URD, NFR đo được, traceability, change control board.</li>
      </ul>
    </div>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Intern / Fresher</b></td><td class="mono">0–1 năm</td><td>Chỉ 4/48 tin nhận dưới 1 năm (FPT IS thực tập sinh, AI+DI, K&amp;M, Logistics Viettel). Việc là <i>hỗ trợ</i>: ghi biên bản, ghi chú as-is / to-be, viết hướng dẫn sử dụng, “Prepare UAT scripts and test data under Senior BA/PM direction” (AI+DI). Tiếng Anh thường chỉ cần đọc. Kênh vào nghề phổ biến hơn là chương trình fresher của công ty outsourcing (xem mục 05).</td></tr>
        <tr><td><b>Junior – Middle</b></td><td class="mono">2 năm</td><td>12 tin. Đã tự viết tài liệu (11/12 gọi tên một loại đặc tả) và user story (8/12), làm trực tiếp với khách; ở công ty có khách nước ngoài thường đòi tiếng Anh lưu loát (Saigon Technology, Laidon, Hitachi, Shinhan).</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">3–4 năm</td><td>22 tin, nhóm lớn nhất. Thêm quản lý thay đổi (9/22), domain sâu (12/22 tài chính), hướng dẫn người mới (TECAPRO, NashTech, BSC), ước lượng và demo.</td></tr>
        <tr><td><b>Senior / Lead / Expert</b></td><td class="mono">5+ năm</td><td>7 tin. Tuyển và đào tạo đội BA (FPT IS Lead: 5 năm BA và 2 năm quản lý từ 5 người), kiểm soát phạm vi và CCB, “Reverse engineer business processes from existing systems”, chuyển đổi hệ thống cũ, tự viết SQL (8Seneca: “you check Oracle data yourself”), dashboard, roadmap. Techcombank Expert đòi từ 8 năm BA / SA trong tài chính, ngân hàng, bảo hiểm.</td></tr>
      </tbody>
    </table>
  </div>
  <p class="muted" style="font-size:13.5px">Tên cấp thường không khớp số năm: Tin học Đại dương ghi “Senior BA” nhưng đòi 2–3 năm (20–32 triệu); GES ghi “Middle” nhưng đòi 3–5 năm (15–22 triệu); SHS ghi “Senior” với từ 3 năm. Hãy đọc phần việc phải làm, đừng chỉ đọc tên cấp.</p>

  <div class="box">
    <h3>Tin đáng chú ý</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>Fincon Global</b> · Technical BA Digital Lending <span class="mono muted">ITviec · Hà Nội · 10/2026</span></td><td class="mono">3–5 năm</td><td>25–40 triệu gross; BPMN, đọc REST/JSON API, SIT/UAT, BRD/SRS/FRD, API spec, data dictionary; dùng ChatGPT, Claude trong công việc là yêu cầu; SQL (Trino), LOS, core banking là điểm cộng</td></tr>
          <tr><td><b>8Seneca</b> · Senior BA (EU/Oracle/Legacy) <span class="mono muted">ITviec · Hà Nội · 10/2026</span></td><td class="mono">5+ năm</td><td>Chuyển hệ thống khu vực công ở EU từ Uniface sang Java/React: acceptance criteria “parity” với hệ thống cũ, đọc ngược PL/SQL, tự viết và chạy test, “every business rule maps to a screen, a test, and a wave”</td></tr>
          <tr><td><b>BC Card Việt Nam</b> <span class="mono muted">ITviec · TP.HCM · 10/2026</span></td><td class="mono">không ghi</td><td>Thanh toán thẻ: BPMN, DFD, user story, Scrum/Kanban, thiết kế ERD, “SQL/query performance tuning and indexing”, SIT/UAT; REST API và cloud database là điểm cộng</td></tr>
          <tr><td><b>Saigon Technology</b> · BA (Junior/Middle) <span class="mono muted">ITviec · TP.HCM · 10/2026</span></td><td class="mono">2+ năm</td><td>Outsourcing: IELTS 6.5+, đọc và vẽ UML, BPMN 2.0, impact analysis, kiểm tra test case, hỗ trợ pre-sales và proposal; PSM I/II là điểm cộng</td></tr>
          <tr><td><b>Hitachi Digital Services</b> · Technical BA <span class="mono muted">ITviec · TP.HCM / Đà Nẵng · 10/2026</span></td><td class="mono">2+ năm</td><td>Sản xuất, logistics cho công ty Mỹ: SRS và System Interface Specification (ICD), NFR, traceability đầu cuối, mockup HMI, phỏng vấn và thuyết trình 100% bằng tiếng Anh</td></tr>
          <tr><td><b>Edufit</b> <span class="mono muted">VietnamWorks · Hà Nội · 10/2026</span></td><td class="mono">3 năm</td><td>25–30 triệu; EdTech; BPMN/UML, field mapping, traceability tới test case và release, business-rule catalogue; bắt buộc có kinh nghiệm thực tế với AI, “human-in-the-loop”; ô tuổi ghi 25–35</td></tr>
          <tr><td><b>K&amp;M Holdings</b> · Junior BA <span class="mono muted">VietnamWorks · Hà Nội · hết hạn 28/10/2026</span></td><td class="mono">1–2 năm</td><td>12–17 triệu nhưng đã đòi SRS, user story, use case, AC, wireframe, UAT và “Hiểu cơ bản về hệ thống phần mềm, API, tích hợp hệ thống và cơ sở dữ liệu”</td></tr>
          <tr><td><b>AI+DI</b> · Junior BA (ERP, Agile, BPMN) <span class="mono muted">ITviec · TP.HCM · 10/2026</span></td><td class="mono">6 tháng – 2 năm</td><td>Phạm vi junior rõ nhất: ghi chú as-is / to-be, user flow, biên bản, UAT script dưới sự hướng dẫn của Senior BA, phân loại phản hồi (bug, dữ liệu, cấu hình, UX, CR)</td></tr>
          <tr><td><b>NashTech</b> <span class="mono muted">Joboko · TP.HCM / Đà Nẵng · hết hạn</span></td><td class="mono">3–5 năm</td><td>Khách Anh: SRS (RUP) hoặc backlog, DoR / DoD, reverse engineering, traceability, hướng dẫn junior, proposal và đấu thầu, SQL và review API spec; CBAP, CPOA “highly valued”</td></tr>
          <tr><td><b>LPBank</b> <span class="mono muted">VietnamWorks · Hà Nội · 10/2026</span></td><td class="mono">3+ năm</td><td>BA ngân hàng thiên kỹ thuật: tự cài đặt và thử nghiệm giải pháp, đọc hiểu code, ngôn ngữ lập trình và database; T24 / Flexcube là điểm cộng</td></tr>
          <tr><td><b>MobiFone IT</b> <span class="mono muted">ITviec · Hà Nội · 10/2026</span></td><td class="mono">3+ năm</td><td>Viễn thông, B2G: URD/SRS/HDSD, change request, ước lượng, Figma, đọc data model ở mức nghiệp vụ, dùng AI hằng ngày, tiếng Anh trình độ B; ghi “Dưới 35 tuổi”</td></tr>
          <tr><td><b>Monstarlab</b> · BA tiếng Nhật N2 <span class="mono muted">Joboko · Hà Nội · hết hạn 31/08/2026</span></td><td class="mono">không ghi</td><td>25–50 triệu (US$1.000–2.500); bắt đầu làm communicator, phiên dịch; wireframe, sơ đồ chuyển màn hình, mô tả màn hình, quản lý Q&amp;A với phía Nhật</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Không JD nào mô tả vòng phỏng vấn:</b> 48/48 tin Việt Nam không ghi số vòng hay bài test; thông tin vòng phỏng vấn ở mục 05 lấy từ trang tuyển fresher và bài chia sẻ.</li>
      <li><b>Lương thường bị ẩn:</b> mọi thẻ ITviec yêu cầu đăng nhập để xem lương, chỉ 5 tin ITviec ghi số trong nội dung; 10/12 tin VietnamWorks có ô lương.</li>
      <li><b>Giới hạn tuổi vẫn còn:</b> MobiFone ghi “Dưới 35 tuổi”, Edufit ghi ô tuổi 25–35. Một vài tin làm thứ Bảy (Tin học Đại dương làm thứ 2–7; Logistics Viettel làm 2 sáng thứ Bảy mỗi tháng).</li>
      <li><b>Số tin trên các trang ngày 28/10/2026:</b> ITviec 42 tin “business analyst”; VietnamWorks 44 tin có BA hoặc “phân tích nghiệp vụ” trong tên (nhiều tin không thuộc IT); CareerViet 149 tin; TopDev hiện 7 thẻ BA dù bộ đếm ghi “0 results”; TopCV chặn.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Các tin quốc tế bổ sung gì</h3>
    <p class="muted small">5 tin đọc toàn văn qua Greenhouse (Capco ở Bangkok, Kuala Lumpur, Dallas; Encora ở Singapore; Aiviq ở London), không tính vào bảng tần suất.</p>
    <ul>
      <li><b>Cao cấp hơn và gắn với một mảng nghiệp vụ hẹp:</b> tối thiểu 3–10 năm; Encora đòi 10+ năm ngân hàng mảng AML (name screening, CDD, transaction monitoring); Capco Bangkok đòi quản lý quỹ (fund accounting, NAV).</li>
      <li><b>Thách thức yêu cầu, không chỉ ghi chép:</b> Capco Kuala Lumpur viết “This role goes beyond requirements documentation… challenge requirements”.</li>
      <li><b>Technical BA là kỹ thuật thật:</b> Capco Dallas đòi SQL trên Oracle, SQL Server; Aiviq đòi “Advanced SQL and Python”, thiết kế database, tự xây data connector.</li>
      <li><b>Ít gọi tên công cụ, không có tuổi:</b> tiếng Anh là mặc định nên không ghi điểm; không tin nào nhắc tuổi hay làm thứ Bảy. Tin Việt Nam liệt kê nhiều tài liệu (BRD/SRS/URD/HDSD) và công cụ (Figma, draw.io, Visio) hơn, và hay giao thêm việc quản lý dự án, hỗ trợ, đào tạo.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Mức lương thấy được</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">12,2 → 41,35 triệu / tháng</td><td><b>ITviec IT Salary &amp; Recruitment Market Report 2025-2026</b> (1.839 người trả lời): trung vị BA 30 triệu; theo kinh nghiệm: dưới 1 năm 12,2 · 1–2 năm 14 · 3–4 năm 28 · 5–8 năm 37,4 · trên 8 năm 41,35. Để so sánh: PO/PM 50,1; Tester 28,8; QA-QC 31,2; Data Analyst / BI 40,65</td></tr>
          <tr><td class="mono">12–17 triệu</td><td>Junior BA, K&amp;M Holdings, 1–2 năm, Hà Nội (VietnamWorks)</td></tr>
          <tr><td class="mono">15–22 triệu</td><td>Middle BA, GES (giáo dục), 3–5 năm, Hà Nội (VietnamWorks)</td></tr>
          <tr><td class="mono">từ 15 triệu</td><td>BA, RONTECH (SaaS), 2–4 năm, TP.HCM (ITviec)</td></tr>
          <tr><td class="mono">20–30 triệu</td><td>BA, Logistics Viettel, từ 1 năm, Hà Nội (VietnamWorks)</td></tr>
          <tr><td class="mono">20–32 triệu</td><td>“Senior” BA ERP &amp; AI, Tin học Đại dương, 2–3 năm, TP.HCM (ITviec)</td></tr>
          <tr><td class="mono">20–40 triệu</td><td>BA, VCI, 3+ năm, Hà Nội; BA chứng khoán, Mirae Asset, 3–5 năm, TP.HCM (VietnamWorks)</td></tr>
          <tr><td class="mono">25–30 triệu</td><td>BA, Edufit, 3 năm, Hà Nội (VietnamWorks)</td></tr>
          <tr><td class="mono">25–35 triệu</td><td>BA tài chính, TECAPRO, 3–5 năm, Hà Nội (ô lương; phần nội dung ghi “thỏa thuận”)</td></tr>
          <tr><td class="mono">25–40 triệu gross</td><td>Technical BA Digital Lending, Fincon, 3–5 năm, Hà Nội (ITviec)</td></tr>
          <tr><td class="mono">đến 35 / 40 triệu</td><td>BA, Global Technology Solutions, 3+ năm (TopDev); BA Leader, K&amp;G, 4–6 năm (VietnamWorks), cả hai ở Hà Nội</td></tr>
          <tr><td class="mono">25–50 triệu</td><td>Phó trưởng phòng BA, Vietnam Post Digital, 3 năm BA + 2 năm quản lý (ô lương VietnamWorks); BA tiếng Nhật N2, Monstarlab (US$1.000–2.500, đã hết hạn)</td></tr>
          <tr><td class="mono">US$1.000–1.500 gross</td><td>Remote BA, FIZEN (neobank), 3 năm kỹ thuật + 2 năm dẫn nhóm (ITviec); BA Fintech, BUFF, đến US$1.500 (VietnamWorks)</td></tr>
          <tr><td class="mono">đến US$2.300</td><td>BA ERP – Logistics, CellphoneS, 3+ năm, TP.HCM (ITviec, không ghi gross / net)</td></tr>
          <tr><td class="mono">14,2–22,2 triệu</td><td>Khối thống kê lương BA của CareerViet (tính đến 28/10/2026): IT BA 15,9–25 triệu, Senior 18,3–29,8, Leader / Manager 25–40; có cả BA ngoài IT và chỉ tính tin có ghi lương</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13px">Chỉ Fincon và FIZEN ghi rõ gross. Tin Bosch (7+ năm) trên VietnamWorks ghi “$500–1,500”, nhiều khả năng là khoảng nhập tạm nên không dùng. Navigos Talent Guide 2026 phải đăng ký mới tải được nên chưa đối chiếu; không tìm thấy số liệu BA trong báo cáo của TopDev, Robert Walters, Adecco, Talentnet. Tin BrSE tiếng Nhật trên JobsGO (20–35 triệu tới 45–80 triệu) chỉ đọc được đoạn trích nên không đưa vào bảng.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://itviec.com/it-jobs/business-analyst-ba-rontech-1852" target="_blank" rel="noopener">ITviec · RONTECH, Business Analyst (BA)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-it-business-analyst-mcredit-cong-ty-tai-chinh-tnhh-mb-shinsei-1920" target="_blank" rel="noopener">ITviec · Mcredit (MB Shinsei), Senior IT Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/technical-business-analyst-digital-lending-cong-ty-co-phan-dich-vu-fincon-global-5143" target="_blank" rel="noopener">ITviec · Fincon Global, Technical Business Analyst – Digital Lending</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-agile-sql-dosoftpro-5832" target="_blank" rel="noopener">ITviec · DOSOFTPRO, Business Analyst (Agile,, SQL)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-it-business-analyst-smart-pay-0233" target="_blank" rel="noopener">ITviec · Smart Pay, Senior IT Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-erp-logistics-wms-cellphones-2214" target="_blank" rel="noopener">ITviec · CellphoneS, Business Analyst (ERP - Logistics, WMS)</a></li>
      <li><a href="https://itviec.com/it-jobs/ky-su-phan-tich-nghiep-vu-business-analyst-vic-viettel-group-5045" target="_blank" rel="noopener">ITviec · Viettel Group, Kỹ sư phân tích nghiệp vụ (Business Analyst) - VIC</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-savyint-group-5222" target="_blank" rel="noopener">ITviec · Savyint Group, Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-cong-ty-tnhh-giai-phap-brain-tech-4845" target="_blank" rel="noopener">ITviec · Brain Tech, Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/technical-business-analyst-hitachi-digital-services-2659" target="_blank" rel="noopener">ITviec · Hitachi Digital Services, Technical Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/6-business-analyst-trung-tam-cong-nghe-thong-tin-mobifone-5459" target="_blank" rel="noopener">ITviec · MobiFone IT Center, 6 Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/lead-business-analyst-fpt-is-2100" target="_blank" rel="noopener">ITviec · FPT IS, Lead Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/intermediate-it-business-analyst-specialist-wilmar-clv-cambodia-laos-vietnam-3814" target="_blank" rel="noopener">ITviec · Wilmar CLV, Intermediate IT Business Analyst Specialist</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-business-analyst-bank-fintech-itviec-recruitment-consulting-4238" target="_blank" rel="noopener">ITviec · ITviec Recruitment Consulting (for a European consultancy serving one of Asia's leading digital banks), Senior Business Analyst (Bank/Fintech)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-business-analyst-eu-oracle-legacy-8seneca-0659" target="_blank" rel="noopener">ITviec · 8Seneca, Senior Business Analyst (EU/Oracle/Legacy)</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-officer-motorist-pte-ltd-4823" target="_blank" rel="noopener">ITviec · Motorist Pte Ltd, Business Analyst Officer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-business-analyst-erp-ai-solutions-tin-hoc-dai-duong-3115" target="_blank" rel="noopener">ITviec · Tin học Đại dương, Senior Business Analyst (ERP &amp; AI Solutions)</a></li>
      <li><a href="https://itviec.com/it-jobs/english-junior-mid-business-analyst-laidon-group-5149" target="_blank" rel="noopener">ITviec · Laidon Group, [English] Junior-Mid Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-junior-middle-saigon-technology-4235" target="_blank" rel="noopener">ITviec · Saigon Technology, Business Analyst (Junior/Middle)</a></li>
      <li><a href="https://itviec.com/it-jobs/junior-business-analyst-erp-agile-bpmn-ai-di-1620" target="_blank" rel="noopener">ITviec · AI+DI, Junior Business Analyst (ERP, Agile, BPMN)</a></li>
      <li><a href="https://itviec.com/it-jobs/remote-business-analyst-up-to-1500-fizen-3729" target="_blank" rel="noopener">ITviec · FIZEN, [Remote] Business Analyst - Up to $1500</a></li>
      <li><a href="https://itviec.com/it-jobs/expert-it-business-analysis-banking-techcombank-5257" target="_blank" rel="noopener">ITviec · Techcombank, Expert, IT Business Analysis (Banking)</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-bpmn-agile-sql-database-bc-card-viet-nam-5206" target="_blank" rel="noopener">ITviec · BC Card Viet Nam, Business Analyst (BPMN, Agile, SQL, Database)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-business-analyst-ba-agile-scrum-sql-shs-chung-khoan-sai-gon-ha-noi-2303" target="_blank" rel="noopener">ITviec · SHS (Chứng khoán Sài Gòn - Hà Nội), Senior Business Analyst (BA, Agile/Scrum, SQL)</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst-brd-user-story-jira-azure-sql-bidv-securities-company-bsc-0239" target="_blank" rel="noopener">ITviec · BIDV Securities (BSC), Business Analyst (BRD, User Story, Jira, Azure, SQL)</a></li>
      <li><a href="https://itviec.com/it-jobs/it-business-analyst-fintech-english-mandarin-unit-corp-3134" target="_blank" rel="noopener">ITviec · UNIT Corp, IT Business Analyst (Fintech, English/ Mandarin)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-it-product-business-analyst-po-assistant-bosch-global-software-technologies-company-limited-0301" target="_blank" rel="noopener">ITviec · Bosch Global Software Technologies, Senior IT Product Business Analyst (PO Assistant)</a></li>
      <li><a href="https://itviec.com/it-jobs/thuc-tap-sinh-phan-tich-nghiep-vu-fpt-is-5657" target="_blank" rel="noopener">ITviec · FPT IS, Thực tập sinh Phân tích nghiệp vụ</a></li>
      <li><a href="https://www.vietnamworks.com/ho-it-business-analyst-1791882268005598743-2118725-jv" target="_blank" rel="noopener">VietnamWorks · Shinhan Bank Vietnam, [HO] - IT Business Analyst</a></li>
      <li><a href="https://www.vietnamworks.com/chuyen-vien-phan-tich-nghiep-vu-business-analyst-ba-linh-vuc-tai-chinh-2117981-jv" target="_blank" rel="noopener">VietnamWorks · TECAPRO, Chuyên Viên Phân Tích Nghiệp Vụ (Business Analyst - BA) Lĩnh Vực Tài Chính</a></li>
      <li><a href="https://www.vietnamworks.com/business-analyst-ba-nghiep-vu-he-thong-phan-mem-2098450-jv" target="_blank" rel="noopener">VietnamWorks · Logistics Viettel, Business Analyst (BA) - Nghiệp Vụ Hệ Thống Phần Mềm</a> · hết hạn 28/10/2026</li>
      <li><a href="https://www.vietnamworks.com/business-analyst-ba--2121446-jv" target="_blank" rel="noopener">VietnamWorks · VCI Digital Technology, Business Analyst (BA)</a></li>
      <li><a href="https://www.vietnamworks.com/business-analyst-1792744371973963363-2123056-jv" target="_blank" rel="noopener">VietnamWorks · Edufit, Business Analyst</a></li>
      <li><a href="https://www.vietnamworks.com/business-analyst-fintech-1790757468628952363-2113969-jv" target="_blank" rel="noopener">VietnamWorks · BUFF Fintech, Business Analyst (Fintech)</a></li>
      <li><a href="https://www.vietnamworks.com/middle-business-analyst-1790585154837724951-2112499-jv" target="_blank" rel="noopener">VietnamWorks · Geleximco Digital Education Solutions (GES), Middle Business Analyst</a> · hết hạn 28/10/2026</li>
      <li><a href="https://www.vietnamworks.com/junior-business-analyst-1790571049063463497-2112283-jv" target="_blank" rel="noopener">VietnamWorks · K&amp;M Holdings, Junior Business Analyst</a> · hết hạn 28/10/2026</li>
      <li><a href="https://www.vietnamworks.com/senior-it-business-analyst-and-it-consultant-2101291-jv" target="_blank" rel="noopener">VietnamWorks · Bosch Global Software Technologies, Senior IT Business Analyst And IT Consultant</a></li>
      <li><a href="https://www.vietnamworks.com/ha-noi-cv-cvc-cvcc-phan-tich-nghiep-vu-business-analyst-1790759296596714963-2113906-jv" target="_blank" rel="noopener">VietnamWorks · LPBank, [Hà Nội] CV/CVC/CVCC Phân Tích Nghiệp Vụ (Business Analyst)</a></li>
      <li><a href="https://www.vietnamworks.com/chuyen-vien-phan-tich-nghiep-vu-chung-khoan-1789986940206698435-2109787-jv" target="_blank" rel="noopener">VietnamWorks · Mirae Asset Securities, Chuyên viên Phân tích Nghiệp vụ Chứng khoán</a></li>
      <li><a href="https://www.vietnamworks.com/business-analyst-leader-truong-nhom-phan-tich-nghiep-vu-upto-40m-1792568206479642206-2121874-jv" target="_blank" rel="noopener">VietnamWorks · K&amp;G Việt Nam, Business Analyst Leader/ Trưởng Nhóm Phân Tích Nghiệp Vụ - Upto 40M</a></li>
      <li><a href="https://topdev.vn/detail-jobs/junior-middle-senior-it-business-analyst-los-crm-system-cong-ty-tai-chinh-tin-dung-tieu-dung-trach-nhiem-huu-han-mot-thanh-vien-sfinance-2140203" target="_blank" rel="noopener">TopDev · SFinance (TopDev), Junior/Middle/Senior IT Business Analyst (LOS, CRM System)</a></li>
      <li><a href="https://topdev.vn/detail-jobs/senior-business-analyst-english-cong-ty-tnhh-capgemini-viet-nam-2137410" target="_blank" rel="noopener">TopDev · Capgemini Việt Nam, Senior Business Analyst (English)</a></li>
      <li><a href="https://topdev.vn/detail-jobs/business-analyst-cong-ty-co-phan-global-technology-solutions-viet-nam-2138328" target="_blank" rel="noopener">TopDev · Global Technology Solutions Việt Nam, Business Analyst</a></li>
      <li><a href="https://vn.joboko.com/viec-lam-business-analyst-xvi6616022" target="_blank" rel="noopener">Joboko · NashTech Việt Nam, Business Analyst</a> · hết hạn</li>
      <li><a href="https://vn.joboko.com/viec-lam-nhan-vien-phan-tich-nghiep-vu-xvi6481466" target="_blank" rel="noopener">Joboko · VNPAY, Nhân viên Phân tích nghiệp vụ</a> · hết hạn</li>
      <li><a href="https://vn.joboko.com/viec-lam-business-analyst-ba-tieng-nhat-giao-tiep-tot-tu-n2-tro-len-thu-nhap-hap-dan-tu-25-50-trieu-di-lam-ngay-tai-ha-noi-xvi6603058" target="_blank" rel="noopener">Joboko · Monstarlab Vietnam, Business Analyst (BA) (Tiếng Nhật Giao Tiếp Tốt, Từ N2 Trở Lên)...</a> · hết hạn</li>
      <li><a href="https://topdev.vn/viec-lam/business-analyst-cong-ty-co-phan-haibazo-2081627" target="_blank" rel="noopener">TopDev · HAIBAZO, Business Analyst</a> · hết hạn</li>
      <li><a href="https://topdev.vn/detail-jobs/business-analyst-japanese-fpt-software-2030778" target="_blank" rel="noopener">TopDev · FPT Software, Business Analyst (Japanese)</a> · hết hạn</li>
      <li><a href="https://job-boards.greenhouse.io/capco/jobs/8141050" target="_blank" rel="noopener">Greenhouse · Capco, Business Analyst (Bangkok)</a></li>
      <li><a href="https://job-boards.greenhouse.io/capco/jobs/8241864" target="_blank" rel="noopener">Greenhouse · Capco, Business Analyst/Senior Business Analyst (Banking Transformation)</a></li>
      <li><a href="https://job-boards.greenhouse.io/capco/jobs/8174565" target="_blank" rel="noopener">Greenhouse · Capco, Technical Business Analyst</a></li>
      <li><a href="https://job-boards.greenhouse.io/encora10/jobs/5184144007" target="_blank" rel="noopener">Greenhouse · Encora, Business Analyst</a></li>
      <li><a href="https://job-boards.greenhouse.io/aiviq/jobs/7981780002" target="_blank" rel="noopener">Greenhouse · Aiviq, Technical Business Analyst</a></li>
      <li><a href="https://itviec.com/report/vietnam-it-salary-and-recruitment-market" target="_blank" rel="noopener">ITviec · IT Salary &amp; Recruitment Market Report 2025-2026</a></li>
      <li><a href="https://careerviet.vn/viec-lam/business-analyst-k-vi.html" target="_blank" rel="noopener">CareerViet · Việc làm Business Analyst và thống kê lương</a></li>
      <li><a href="https://itviec.com/it-jobs/business-analyst" target="_blank" rel="noopener">ITviec · Danh sách việc làm Business Analyst</a></li>
      <li><a href="https://itviec.com/it-jobs/japanese" target="_blank" rel="noopener">ITviec · Việc làm tiếng Nhật</a></li>
    </ul>
    <p class="muted" style="font-size:13px">TopCV, JobsGO, CareerCross và trang tuyển dụng KMS trả về 403; trang tuyển dụng CMC Global và MoMo trả về 404; LinkedIn không thử. Không đọc được tin BA nào của ZaloPay, Rikkeisoft, Sun*. Joboko là trang tổng hợp chép lại tin gốc và hay ghi “đã hết hạn” cả khi hạn chưa tới. 28/48 tin lấy từ ITviec nên mẫu nghiêng về công ty công nghệ và công ty có vốn nước ngoài, nơi JD hay viết bằng tiếng Anh. Tin đã hết hạn vẫn được tính vì yêu cầu vẫn đại diện cho thị trường.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Bấm vào từng chủ đề để xem khái niệm, giải thích và ví dụ thực tế; tick khi đã học, tiến độ được lưu trên trình duyệt này. Lab 4 tuần cộng lại thành <b>“BA portfolio cho Expense Tracker Business”</b>: stakeholder list và BA plan, biên bản elicitation, BPMN as-is / to-be, decision table, use case, ERD, wireframe, SRS có NFR đo được, RTM, change request, backlog Jira có acceptance criteria, API spec, query SQL, UAT plan và transition plan. Expense Tracker là app mà các lộ trình khác của trang này xây; ở đây công ty phát hành làm thêm bản cho doanh nghiệp Việt Nam: nhân viên chụp hóa đơn, gửi đề nghị thanh toán, quản lý duyệt theo hạn mức, kế toán kiểm tra hóa đơn điện tử, chi trả qua ngân hàng và đồng bộ sang phần mềm kế toán. Mọi số liệu trong ví dụ là giả định để minh họa.`,

 lc:`<div style="display:grid;gap:8px">
    <h2>Vòng case study &amp; bài tập Business Analyst</h2>
    <p class="muted">Tổng hợp từ trang tuyển fresher chính thức của NashTech và CMC Global, tin Fresher BA 2025 của FPT Software, bài chia sẻ của một ứng viên BA intern Chợ Tốt (2021), cẩm nang phỏng vấn BA của CareerLink (2026), ITNavi, Tanca, Viblo (BAC); phần quốc tế theo Bridging the Gap (Laura Brandenburg), Yardstick, FirstHR, Interview Pilot (05/2026), Adaptive US, rubric phỏng vấn elicitation đăng trên <i>Journal of Information Systems Education</i> (Lending và cộng sự, 2022), khung năng lực Business analyst của Chính phủ Anh (DDaT) và SFIA 9. Nguồn công khai về vòng phỏng vấn BA ở từng công ty Việt Nam rất mỏng: gần như chỉ có trang tuyển fresher và tin tuyển dụng; không tìm được mô tả công khai nào về vòng phỏng vấn với khách hàng (dự án outsourcing) hay vòng phỏng vấn bằng tiếng Nhật, nên các dòng đó là suy luận và được ghi rõ. Báo cáo của ứng viên trên Glassdoor chỉ đọc được qua đoạn trích. Bảng “Cách chấm” là tổng hợp, không phải tiêu chí của một công ty cụ thể. Mọi con số của Expense Tracker Business là giả định.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>Screen HR + ngoại ngữ</b></td><td class="mono">15–30′</td><td>Hỏi CV, lý do đổi việc, lương mong muốn, ngày nhận việc. Ngoại ngữ thường là điều kiện cứng: tin Fresher BA 2025 của FPT Software đòi TOEIC 700 / IELTS 6.0 hoặc tiếng Nhật N3; tin BA song ngữ Anh – Nhật cho khách bảo hiểm Nhật trên Aniday đòi N2 và chỉ có 1 vòng phỏng vấn. Với vị trí làm việc trực tiếp với khách nước ngoài, nhiều khả năng một phần buổi sẽ chuyển sang tiếng Anh hoặc tiếng Nhật (suy luận từ JD).</td></tr>
          <tr><td><b>Bài test đầu vào</b> <span class="tag nice">Fresher / Junior</span></td><td class="mono">làm online hoặc tại công ty</td><td>NashTech (BA Fresher): “HR phone screening → Placement test (English + Logical test) → Group discussion → Group interview”. CMC Global: phần 1 nghe và đọc tiếng Anh (miễn với TOEIC 650+ / IELTS 6.0+), phần 2 trắc nghiệm và tự luận về lập trình, database, IQ, logic, nội dung “khác nhau tuỳ theo từng vị trí”. Ứng viên BA intern Chợ Tốt kể bài HackerRank 10 câu trong 60′ (tư duy, giải quyết vấn đề, case, tương quan và nhân quả) cộng 2 bài Excel, nộp trong 3 ngày.</td></tr>
          <tr><td><b>Thảo luận nhóm</b></td><td class="mono">30–60′</td><td>Có trong quy trình BA Fresher của NashTech (không công bố chủ đề). Chấm cách lắng nghe, dẫn dắt mà không lấn át, tóm tắt ý của nhóm. Thời lượng là ước tính, nguồn không ghi.</td></tr>
          <tr><td><b>Phỏng vấn chuyên môn với BA lead / PM</b></td><td class="mono">45–60′</td><td>Đào CV: dự án gần nhất, bạn viết tài liệu gì, làm với ai, một yêu cầu bị hiểu sai và bạn xử lý thế nào. Câu kiến thức hay gặp nhất trong 13 bộ câu hỏi (6 tiếng Việt, 7 tiếng Anh): stakeholder khó hoặc mâu thuẫn (12 nguồn), vai trò BA, kỹ thuật elicitation, change request / scope creep, BRD khác SRS thế nào (mỗi câu 6 nguồn), ưu tiên yêu cầu, use case và diagram. Bộ câu tiếng Việt nghiêng về định nghĩa (BRD / SRS, BPMN, sketch / wireframe / prototype), bộ tiếng Anh nghiêng về behavioral và SQL.</td></tr>
          <tr><td><b>Bài viết tại chỗ</b></td><td class="mono">30–40′ + 10′ sửa</td><td>CareerLink (2026): bài viết “thường xuất hiện ở vòng 2 hoặc 3”, dạng viết user story từ một đoạn mô tả nghiệp vụ, vẽ flow, phân tích case; bản cho intern là mô tả lại một quy trình quen thuộc như đặt hàng online và đề xuất cải tiến. Yardstick: từ một đoạn yêu cầu mơ hồ viết 3–5 user story có acceptance criteria, ghi giả định và câu hỏi, kèm flow hoặc wireframe đơn giản; 30–40′ rồi 10′ sửa theo góp ý.</td></tr>
          <tr><td><b>Elicitation role-play</b></td><td class="mono">20′ + 10′ + 5′</td><td>Interviewer đóng vai stakeholder và chỉ tiết lộ thông tin khi được hỏi đúng; có thể cài sẵn ngoại lệ (BA Times gợi ý đề đặt pizza online). Yardstick: 20′ trò chuyện, 10′ sắp xếp yêu cầu, 5′ đọc lại và hỏi thêm. Ứng viên Thoughtworks kể vòng case là một câu đề bài, panel đóng vai khách hàng, ứng viên hỏi, vẽ as-is và đề xuất giải pháp; điểm nhấn là “the thought process”, không phải lời giải tốt nhất (đoạn trích Glassdoor).</td></tr>
          <tr><td><b>Bài dữ liệu: SQL / Excel</b></td><td class="mono">45–60′</td><td>Interview Pilot (05/2026) mô tả vòng technical / data riêng: SQL, Excel, dashboard, API. Đề hay gặp: doanh thu theo tháng và danh mục, khách chưa từng đặt hàng (LEFT JOIN … IS NULL), một con số trên dashboard trông sai. Yardstick: bộ dữ liệu 100–200 dòng, 2–3 câu hỏi nghiệp vụ, 45–60′ phân tích rồi 5′ trình bày.</td></tr>
          <tr><td><b>Take-home + thuyết trình</b></td><td class="mono">24 giờ – 3 ngày, trình bày 20–30′</td><td>Yardstick: gửi trước 24 giờ một quy trình rút gọn và 1–2 trang bối cảnh, tìm ít nhất 3 điểm kém hiệu quả, trình bày 5–7 slide, 15′ hỏi đáp. FirstHR khuyên giữ bài trong 45′ hoặc trả tiền cho ứng viên nếu dài hơn. Bridging the Gap: nhiều nhà tuyển dụng xin xem tài liệu cũ (work sample) làm bằng chứng; phải xóa thông tin mật và giải thích bối cảnh, đừng gửi trống.</td></tr>
          <tr><td><b>Vòng khách hàng</b> <span class="tag nice">Có thể gặp, chưa xác nhận ở Việt Nam</span></td><td class="mono">30–60′</td><td>Không tìm được nguồn công khai mô tả vòng này ở công ty outsourcing Việt Nam; dự đoán vì JD outsourcing ghi BA làm việc trực tiếp với khách nước ngoài, và báo cáo ứng viên Capgemini nhắc “manager or client round”. Nếu gặp: khách hỏi bằng tiếng Anh hoặc tiếng Nhật về dự án tương tự, domain của họ, cách bạn xác nhận yêu cầu từ xa và xử lý thay đổi.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13.5px">Các vòng thường ghép thế nào (suy luận, chưa xác nhận): với fresher là screen → bài test chuẩn hóa (tiếng Anh cộng logic / IQ, đôi khi database) → phỏng vấn chuyên môn; với người có kinh nghiệm là 1–3 buổi với BA lead, PM hoặc trưởng bộ phận, có thể kèm một bài viết ngắn (user story hoặc flow) và một vòng với khách. Hỏi recruiter bằng văn bản trước mỗi vòng: bao lâu, gặp ai, có bài test hoặc take-home không, phần nào bằng tiếng Anh / tiếng Nhật, có được dùng AI không.</p>
  </div>

  <div class="box">
    <h3>Cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Tiêu chí</th><th>Mức tốt</th><th>Dấu hiệu trượt</th></tr></thead>
        <tbody>
          <tr><td><b>Làm rõ mục tiêu trước khi giải</b></td><td>Hỏi vì sao cần bây giờ, thành công đo bằng gì, phạm vi tới đâu; nhắc lại đề bằng lời của mình</td><td>Nhận ngay giải pháp của stakeholder làm requirement (FirstHR gọi là red flag), cầm bút vẽ từ phút đầu</td></tr>
          <tr><td><b>Kỹ thuật hỏi và lắng nghe</b></td><td>Câu hỏi mở, hỏi về lần gần nhất việc đó xảy ra, đào ngoại lệ, tóm tắt lại để xác nhận</td><td>Câu dẫn dắt (“anh muốn có nút duyệt nhanh đúng không?”), chuỗi câu có / không, ngắt lời</td></tr>
          <tr><td><b>Hiện trạng → tương lai</b></td><td>As-is có số (khối lượng, thời gian, tỉ lệ lỗi) và điểm nghẽn; to-be giải quyết đúng điểm nghẽn đó</td><td>Chỉ mô tả hệ thống mới, không biết hiện nay làm thế nào và chậm ở đâu</td></tr>
          <tr><td><b>Mô hình và tài liệu</b></td><td>Đúng ký hiệu BPMN / UML, story đạt INVEST, acceptance criteria kiểm thử được, business rule tách riêng và đủ các biên</td><td>AC kiểu “hệ thống hoạt động đúng”, gateway sai, rule hở ở giá trị biên</td></tr>
          <tr><td><b>Giả định, phạm vi, câu hỏi mở</b></td><td>Tự ghi assumption, out of scope, open question mà không cần nhắc; nói rõ chỗ nào cần xác nhận với ai</td><td>Lấp chỗ trống bằng suy đoán mà không nói ra, hoặc im lặng về chỗ chưa rõ</td></tr>
          <tr><td><b>Stakeholder và giao tiếp</b></td><td>Dùng ngôn ngữ của người nghiệp vụ, chốt lại trong 30 giây, xử lý mâu thuẫn bằng dữ liệu và người ra quyết định; tiếng Anh đủ để trao đổi</td><td>Thuật ngữ kỹ thuật với người nghiệp vụ, hứa với khách khi chưa hỏi team, không chốt được gì</td></tr>
          <tr><td><b>Dữ liệu và đo lường</b></td><td>Đề xuất KPI hiện trạng và mục tiêu, biết kiểm tra bằng SQL hoặc Excel, nghĩ tới đo sau go-live</td><td>Chỉ nói về tài liệu đã giao, không nói kết quả; không bao giờ đo gì sau triển khai (FirstHR)</td></tr>
          <tr><td><b>Tiếp nhận phản hồi</b></td><td>Khi interviewer đưa thêm ràng buộc thì sửa mô hình, nói rõ đổi gì và vì sao</td><td>Bảo vệ bản đầu tiên, coi góp ý là bị bắt lỗi</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13.5px">Bảng là tổng hợp: rubric phỏng vấn elicitation của Lending và cộng sự (JISE 2022) có 5 mức (Beginner → Outstanding experienced professional) và 8 mục: mở đầu có khung, phân tích as-is, thiết kế to-be, đưa hình minh họa, tóm tắt khi kết thúc, xây quan hệ, lắng nghe chủ động, làm việc nhóm; FirstHR chấm 6 mảng thang 1–5 và có checklist cho bài 45′ (hỏi trước khi đề xuất, nêu người cần phỏng vấn, cách đo hiện trạng, tự ghi phần ngoài phạm vi, coi hạn và ngân sách là ràng buộc, nộp một trang dễ đọc); Yardstick chấm role-play theo kỹ thuật hỏi, lắng nghe, tìm ra nhu cầu thật, độ chính xác khi đọc lại yêu cầu. Tiêu chí lặp lại ở nhiều nguồn nhất (6 nguồn): làm rõ vấn đề và đặt câu hỏi trước khi giải.</p>
  </div>

  <div class="box">
    <h3>Chia 45 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–5′</td><td>Nghe đề, ghi ra giấy, nhắc lại bằng lời của bạn. Hỏi định dạng đầu ra (vẽ, viết hay nói), ai là người đọc, có được giả định không.</td></tr>
          <tr><td class="mono">5–18′</td><td>Elicitation: mục tiêu và thước đo thành công → hiện trạng (kể lần gần nhất, số liệu) → người tham gia → rule và ngoại lệ → dữ liệu, hệ thống liên quan → ràng buộc. Ghi theo cột: sự thật / giả định / câu hỏi mở.</td></tr>
          <tr><td class="mono">18–32′</td><td>Mô hình và viết: flow to-be (BPMN rút gọn) hoặc use case, decision table cho rule chính, 3–5 user story có acceptance criteria. Ưu tiên một luồng đầy đủ cả ngoại lệ hơn nhiều luồng sơ sài.</td></tr>
          <tr><td class="mono">32–40′</td><td>Trình bày: problem statement một câu, flow, rule, câu hỏi mở và phần ngoài phạm vi, KPI để biết giải pháp có hiệu quả.</td></tr>
          <tr><td class="mono">40–45′</td><td>Interviewer đưa “twist” (thêm duyệt nhiều cấp, đổi hạn mức, khách đổi ý) → sửa tại chỗ và nói rõ ảnh hưởng tới tài liệu, ước lượng, test. Còn thời gian thì hỏi lại: team đang dùng tài liệu gì, BA viết AC hay QA viết, ai duyệt yêu cầu.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13.5px">Không nguồn nào công bố cách chia phút cho một case BA 45′; cách chia trên là suy luận, khớp với các mốc có nguồn: role-play của Yardstick 20′ / 10′ / 5′, bài viết tài liệu 30–40′ + 10′, vòng case của Interview Pilot 45–60′.</p>
  </div>

  <div class="grid2">
    <div class="box">
      <h3>Khung một buổi elicitation</h3>
      <p>Bám theo 8 mục của rubric JISE 2022, rút thành 7 bước nói được trong 15–20′:</p>
      <ol style="margin:0;padding-left:20px;display:grid;gap:4px">
        <li><b>Mở đầu có khung:</b> mục đích buổi, bao lâu, sẽ hỏi những phần nào, xin phép ghi chú. Mức thấp nhất của rubric là “launching into specific questions”.</li>
        <li><b>Mục tiêu:</b> vì sao cần bây giờ, sáu tháng nữa nhìn vào đâu để biết đã ổn.</li>
        <li><b>Hiện trạng:</b> “kể lại lần gần nhất…”, khối lượng, thời gian, chỗ hay hỏng.</li>
        <li><b>Người tham gia và quyền:</b> ai làm, ai duyệt, ai được xem, ai vắng thì sao.</li>
        <li><b>Rule, ngoại lệ, dữ liệu:</b> con số ngưỡng, trường hợp đặc biệt, dữ liệu lấy từ đâu, đi đâu.</li>
        <li><b>Ràng buộc:</b> hạn, ngân sách, quy định pháp lý, kiểm toán, thiết bị, ngôn ngữ.</li>
        <li><b>Chốt:</b> tóm tắt 30 giây, đọc lại câu hỏi mở, hẹn bước tiếp và người xác nhận.</li>
      </ol>
      <p class="muted" style="font-size:13.5px">Câu “How do you gather requirements?” là câu bẫy (Yulia Kosarenko, Why Change, 2022): interviewer muốn nghe bạn tổng hợp yêu cầu từ phân tích nguyên nhân gốc, không phải đi “nhặt” danh sách mong muốn có sẵn. Câu trích: “Gathering means finding things that already exist.”</p>
    </div>
    <div class="box">
      <h3>Checklist rà một đoạn đặc tả</h3>
      <ul>
        <li><b>Từ mơ hồ:</b> nhanh, dễ dùng, thân thiện, linh hoạt, “và/hoặc”, “người liên quan”, “v.v.”, TBD.</li>
        <li><b>Từng requirement:</b> đạt 9 đặc tính của ISO/IEC/IEEE 29148:2018 (necessary, appropriate, unambiguous, complete, singular, feasible, verifiable, correct, conforming); mỗi câu một ý, có chủ thể, kiểm chứng được.</li>
        <li><b>Rule:</b> đủ và không chồng lấn; thử đúng giá trị biên (=), giá trị lớn nhất, giá trị rỗng.</li>
        <li><b>Luồng:</b> có ngoại lệ, quá hạn, hủy, gửi lại; mỗi trạng thái có lối ra.</li>
        <li><b>Requirement hay design:</b> màu nút, framework, tên API nằm trong tài liệu thiết kế, không nằm trong requirement.</li>
        <li><b>Kiểm soát và dữ liệu:</b> phân quyền, tách người tạo và người duyệt, audit log; dữ liệu cá nhân có cần không và để làm gì.</li>
        <li><b>NFR:</b> có con số, đơn vị, điều kiện đo, kỳ đo.</li>
        <li><b>Mô hình khớp chữ:</b> gateway đúng loại, cardinality của ERD đúng với rule.</li>
        <li><b>Truy vết:</b> mỗi requirement nối về một mục tiêu và có ít nhất một test case.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Bài mẫu nên thuộc 1: elicitation role-play “Chúng tôi cần hệ thống duyệt đề nghị thanh toán tự động”</h3>
    <p><b>Đề (giả định).</b> Interviewer đóng vai kế toán trưởng một công ty phân phối 300 nhân viên ở Hà Nội. Câu mở đầu đúng như một đề Interview Pilot ghi nhận: “We need an automated approval system.” Bạn có 15′ hỏi, 10′ tổng hợp, 5′ trình bày.</p>
    <p><b>1. Mở đầu (1 phút).</b> “Em cảm ơn chị đã dành thời gian. Trong khoảng 15 phút em muốn hiểu quy trình hiện tại, chỗ chị đang gặp khó và kết quả chị mong muốn; cuối buổi em tóm tắt lại để chị xác nhận. Em ghi chú trong lúc nói chuyện được không ạ?”</p>
    <p><b>2. Câu hỏi theo nhóm, kèm mục đích:</b></p>
    <ul>
      <li><b>Mục tiêu:</b> “Điều gì khiến chị muốn làm việc này lúc này?” · “Nếu sáu tháng nữa hệ thống chạy tốt, chị nhìn vào con số nào để biết?” · “Chữ ‘tự động’ ở đây chị mong là hệ thống tự duyệt luôn, hay tự kiểm tra và chuyển đúng người duyệt?” (chữ “tự động” là chỗ mơ hồ lớn nhất của đề).</li>
      <li><b>Hiện trạng:</b> “Chị kể giúp em đề nghị gần nhất bị trả lại: ai gửi, gửi gì, qua kênh nào, bị trả ở bước nào, vì sao?” · “Mỗi tháng khoảng bao nhiêu đề nghị? Từ lúc gửi tới lúc nhân viên nhận tiền mất bao lâu?”</li>
      <li><b>Người tham gia:</b> ai gửi, ai duyệt, ai kiểm tra hóa đơn, ai chi tiền, ai được xem báo cáo; quản lý đi công tác thì ai duyệt thay.</li>
      <li><b>Rule và ngoại lệ:</b> hạn mức theo số tiền, loại chi phí đặc biệt, tạm ứng, chi phí ngoại tệ, mất hóa đơn, một hóa đơn dùng cho nhiều đề nghị.</li>
      <li><b>Dữ liệu và hệ thống:</b> đang dùng phần mềm kế toán nào, danh sách nhân viên và cấp quản lý lấy từ đâu, chi qua ngân hàng nào, hóa đơn điện tử kiểm tra thế nào.</li>
      <li><b>Ràng buộc:</b> hạn mong muốn, ngân sách, yêu cầu kiểm toán, lưu trữ chứng từ, dùng trên điện thoại.</li>
    </ul>
    <p><b>3. Thông tin interviewer tiết lộ khi được hỏi đúng</b> (giả định):</p>
<pre>- 1.200 đề nghị / tháng; 35% bị trả lại ở lần gửi đầu
- Lý do trả lại: thiếu hóa đơn hợp lệ (~60%),
  sai mã chi phí (~25%), sai số tiền (~15%)
- Trung bình 12 ngày từ lúc gửi tới lúc nhận tiền;
  4–5 ngày nằm chờ quản lý duyệt qua email
- Hạn mức: ≤ 5 triệu Trưởng nhóm; ≤ 20 triệu
  Trưởng phòng; &gt; 20 triệu thêm Giám đốc tài chính
- Tiếp khách: luôn cần Trưởng phòng, mọi số tiền
- “Tự động” = tự kiểm tra hóa đơn và tự chuyển đúng
  người duyệt; vẫn muốn con người bấm duyệt
- Kiểm toán hằng năm cần xem lại lịch sử duyệt
- Phần mềm kế toán có API; danh sách nhân viên ở HR</pre>
    <p><b>4. Tổng hợp (10 phút).</b> Problem statement: “Đề nghị thanh toán mất trung bình 12 ngày và 35% bị trả lại ở lần đầu, chủ yếu vì thiếu hóa đơn hợp lệ, sai mã chi phí và chờ duyệt qua email, khiến nhân viên chậm nhận tiền và kế toán mất thời gian kiểm tra lại.” Mục tiêu đề xuất (cần chị xác nhận): dưới 5 ngày và tỉ lệ trả lại dưới 10% sau ba tháng chạy.</p>
<pre>To-be (BPMN rút gọn)
Pool Công ty
 Lane Nhân viên:  (Start) Tạo đề nghị, chụp hóa đơn
                  → [Hệ thống] kiểm tra hóa đơn, mã chi phí
                  → XOR: hợp lệ?
                       không → báo lỗi tại chỗ → sửa (quay lại)
                       có    → chuyển duyệt theo decision table
 Lane Quản lý:    Duyệt / Trả lại kèm lý do
                  ⏱ timer 3 ngày làm việc → nhắc + báo cấp trên
 Lane Kế toán:    Kiểm tra cuối → Lập lệnh chi
Pool Ngân hàng:   ← message flow: lệnh chi → xác nhận đã chi
Pool PM kế toán:  ← message flow: bút toán đã duyệt
(End) Nhân viên nhận tiền

Decision table (hit policy U: chỉ một dòng khớp)
Loại chi phí | Số tiền (đ)              | Người duyệt
Tiếp khách   | bất kỳ                    | Trưởng phòng (+ GĐTC nếu &gt; 20tr)
Khác         | ≤ 5.000.000               | Trưởng nhóm
Khác         | &gt; 5.000.000 và ≤ 20.000.000 | Trưởng phòng
Khác         | &gt; 20.000.000              | Trưởng phòng → GĐTC</pre>
    <ul>
      <li><b>Giả định:</b> mỗi nhân viên có đúng một quản lý trực tiếp trong dữ liệu HR; “3 ngày” là ngày làm việc.</li>
      <li><b>Câu hỏi mở:</b> duyệt thay khi vắng (ai cấu hình, có giới hạn số tiền không); người duyệt chính là người gửi thì chuyển lên ai; chi phí ngoại tệ quy đổi theo tỉ giá nào; lưu chứng từ bao lâu; ai sở hữu decision table khi hạn mức thay đổi.</li>
      <li><b>Ngoài phạm vi đợt 1:</b> tạm ứng, công tác nước ngoài, phân bổ chi phí cho nhiều dự án.</li>
      <li><b>KPI sau go-live:</b> thời gian gửi → nhận tiền (trung vị và phân vị 90), tỉ lệ bị trả lại lần đầu theo lý do, số đề nghị quá hạn duyệt mỗi tuần.</li>
    </ul>
    <p><b>5. Chốt (30 giây).</b> “Em tóm tắt: vấn đề chính là 12 ngày và 35% bị trả lại; hệ thống sẽ kiểm tra hóa đơn và mã chi phí ngay khi gửi, tự chuyển đúng người duyệt theo bảng hạn mức, nhắc khi quá 3 ngày, và giữ lịch sử duyệt cho kiểm toán; con người vẫn là người bấm duyệt. Em còn 5 câu hỏi mở, em sẽ gửi chị qua email chiều nay kèm sơ đồ này để chị xác nhận.”</p>
    <p class="muted" style="font-size:13.5px">Twist interviewer hay đưa: “Giám đốc muốn đề nghị dưới 1 triệu thì tự duyệt luôn.” Trả lời: được, nhưng đó là rule mới cần người có thẩm quyền ký; đề xuất kèm kiểm soát bù (hóa đơn hợp lệ bắt buộc, giới hạn số lần mỗi tháng, hậu kiểm ngẫu nhiên), cập nhật decision table thêm một dòng và kiểm tra lại không chồng lấn với dòng “Tiếp khách”.</p>
  </div>

  <div class="box">
    <h3>Bài mẫu nên thuộc 2: user story, acceptance criteria và test cho rule chuyển người duyệt</h3>
    <p><b>Đề.</b> Từ decision table ở bài 1, viết user story, acceptance criteria dạng Given/When/Then và các giá trị cần test. Bạn có 25′.</p>
<pre>US-21  Chuyển đề nghị tới đúng người duyệt
As an employee submitting an expense claim,
I want the claim routed automatically to the right approver,
so that I don't have to chase managers by email
and get reimbursed sooner.

Rule: decision table “Hạn mức duyệt” v1.0 (Kế toán trưởng sở hữu)

Scenario Outline: route by amount (loại chi phí khác Tiếp khách)
  Given a claim of category “Công tác phí”
    And its total amount is &lt;amount&gt; VND
  When the employee submits the claim
  Then the claim status is “Chờ duyệt”
    And the first approver is &lt;approver&gt;
    And the approval chain is &lt;chain&gt;
  Examples:
    | amount     | approver     | chain                |
    | 5000000    | Trưởng nhóm  | Trưởng nhóm          |
    | 5000001    | Trưởng phòng | Trưởng phòng         |
    | 20000000   | Trưởng phòng | Trưởng phòng         |
    | 20000001   | Trưởng phòng | Trưởng phòng → GĐTC  |

Scenario: entertainment always needs the department head
  Given a claim of category “Tiếp khách” of 800000 VND
  When the employee submits the claim
  Then the first approver is the employee's department head

Scenario: approver is the submitter
  Given the department head submits a claim of 12000000 VND
  When the claim is submitted
  Then it is routed to the head's own line manager
    And the head cannot approve their own claim

Scenario: approver on leave with a delegate
  Given the team lead is on leave from 2026-11-02 to 2026-11-06
    And the team lead delegated approvals to “Nguyễn Văn B”
  When a claim of 3000000 VND is submitted on 2026-11-03
  Then the first approver is “Nguyễn Văn B”
    And the approval history records “delegated by team lead”

Scenario: approval overdue
  Given a claim has waited 3 working days for approval
  When the daily reminder job runs
  Then the approver gets a reminder
    And the approver's manager is notified</pre>
    <ul>
      <li><b>Vì sao test đúng 5.000.000, 5.000.001, 20.000.000, 20.000.001:</b> phân tích giá trị biên; lỗi hay nằm ở dấu “≤” và “&lt;”. Thêm 0 đ và số tiền âm để kiểm tra validation (thuộc story “Tạo đề nghị”, không phải story này).</li>
      <li><b>Tách story:</b> “duyệt thay khi vắng” và “nhắc quá hạn” đủ lớn để thành story riêng theo SPIDR (Rules); giữ ở đây dưới dạng scenario nếu team ước lượng vẫn vừa một Sprint.</li>
      <li><b>AC khác Definition of Done:</b> các scenario trên là của riêng US-21; “có unit test, đã review code, chạy trên staging” là DoD chung cho mọi story.</li>
      <li><b>Use case tương ứng:</b> “Duyệt đề nghị”: main flow (mở đề nghị → xem hóa đơn → duyệt), alternative (trả lại kèm lý do; duyệt thay), exception (đề nghị đã bị nhân viên rút lại; phiên đăng nhập hết hạn; người duyệt không còn quyền vì vừa đổi phòng ban), postcondition (trạng thái mới, lịch sử duyệt ghi người, thời điểm, kết quả, lý do).</li>
    </ul>
    <p><b>Thêm phần SQL hay bị hỏi kèm</b> (PostgreSQL, bảng <code>employees</code>, <code>departments</code>, <code>claims</code>):</p>
<pre>-- 1. Nhân viên chưa gửi đề nghị nào trong tháng 10/2026
SELECT e.id, e.full_name
FROM employees e
LEFT JOIN claims c
  ON c.employee_id = e.id
 AND c.submitted_at &gt;= DATE '2026-10-01'
 AND c.submitted_at &lt;  DATE '2026-11-01'
WHERE c.id IS NULL;
-- Bẫy: đưa điều kiện ngày xuống WHERE thì LEFT JOIN
-- thành INNER JOIN và kết quả luôn rỗng.

-- 2. Đề nghị chờ duyệt quá 3 ngày (ngày lịch)
SELECT c.id, e.full_name, c.total_amount, c.submitted_at
FROM claims c
JOIN employees e ON e.id = c.employee_id
WHERE c.status = 'PENDING_APPROVAL'
  AND c.submitted_at &lt; NOW() - INTERVAL '3 days'
ORDER BY c.submitted_at;
-- Câu BA nên hỏi lại: 3 ngày lịch hay 3 ngày làm việc?

-- 3. Tổng đã chi theo phòng ban và tháng, kèm thứ hạng
SELECT d.name AS department,
       DATE_TRUNC('month', c.paid_at) AS month,
       SUM(c.total_amount) AS total_paid,
       RANK() OVER (PARTITION BY DATE_TRUNC('month', c.paid_at)
                    ORDER BY SUM(c.total_amount) DESC) AS rank_in_month
FROM claims c
JOIN employees e ON e.id = c.employee_id
JOIN departments d ON d.id = e.department_id
WHERE c.status = 'PAID'
GROUP BY d.name, DATE_TRUNC('month', c.paid_at)
ORDER BY month, rank_in_month;
-- Câu BA nên hỏi lại: tính theo phòng ban lúc gửi đề nghị
-- hay phòng ban hiện tại của nhân viên?</pre>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample review: find the issues in 10 minutes</span></h3>
<pre>SRS v0.3 · Module Duyệt đề nghị thanh toán

FR-01 Hệ thống phải xử lý đề nghị nhanh và dễ dùng.
FR-02 Đề nghị dưới 5.000.000 đ do Trưởng nhóm duyệt;
      đề nghị trên 5.000.000 đ do Trưởng phòng duyệt.
FR-03 Kế toán có thể sửa số tiền của đề nghị đã duyệt
      nếu thấy sai.
FR-04 Khi gửi, hệ thống đọc hóa đơn bằng OCR và tự điền
      số tiền.
FR-05 Nhân viên nhập số CCCD và tải ảnh CCCD ở mỗi đề nghị
      để xác minh danh tính.
FR-06 Nút “Gửi” màu xanh, dùng React component SubmitButton,
      gọi API bằng axios.
FR-07 Hệ thống gửi thông báo cho người liên quan và/hoặc
      kế toán.
NFR-01 Hệ thống phải luôn sẵn sàng 100%.

BPMN: sau task “Kiểm tra hóa đơn” là một parallel gateway
(AND) tách 2 nhánh: “Hợp lệ → Duyệt” và
“Không hợp lệ → Trả lại”.
ERD: Claim (1) ── (1) Approval

US-14 AC: Given đề nghị hợp lệ, When Trưởng phòng duyệt,
Then hệ thống hoạt động đúng.</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (11 lỗi)</span><span class="l-en">Show the answer (11 issues)</span></span></summary><div class="ans">
    <ol class="l-vi" style="margin:0;padding-left:20px;display:grid;gap:4px">
      <li><b>[Nghiêm trọng] FR-02 hở đúng ở biên và thiếu nhánh:</b> đề nghị đúng 5.000.000 đ không thuộc dòng nào; không có rule cho trên 20 triệu và cho loại Tiếp khách. Viết lại bằng decision table đủ và không chồng lấn: ≤ 5.000.000; &gt; 5.000.000 và ≤ 20.000.000; &gt; 20.000.000; cộng dòng theo loại chi phí.</li>
      <li><b>[Nghiêm trọng] FR-03 phá kiểm soát nội bộ:</b> số tiền chi khác số tiền đã được duyệt và không có dấu vết. Kế toán chỉ được trả lại kèm lý do (hoặc đề xuất số tiền mới để người duyệt duyệt lại); mọi thay đổi ghi audit log: ai, lúc nào, giá trị cũ, giá trị mới.</li>
      <li><b>[Nghiêm trọng] Parallel gateway cho một lựa chọn loại trừ:</b> AND chạy cả hai nhánh cùng lúc, tức vừa duyệt vừa trả lại. Dùng exclusive gateway (XOR) với điều kiện ghi trên từng nhánh.</li>
      <li><b>[Cao] FR-05 thu dữ liệu cá nhân không cần cho mục đích:</b> nhân viên đã được xác thực bằng tài khoản công ty và mã nhân viên từ HR. Thu thêm số và ảnh CCCD ở mỗi đề nghị đi ngược nguyên tắc tối thiểu hóa dữ liệu và kéo theo nghĩa vụ theo Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP (hiệu lực 01/01/2026). Bỏ yêu cầu, hoặc ghi rõ mục đích và căn cứ nếu thật sự cần.</li>
      <li><b>[Cao] FR-04 thiếu luồng ngoại lệ và người chịu trách nhiệm:</b> OCR không đọc được, đọc sai, hóa đơn đã dùng cho đề nghị khác, hóa đơn không tra cứu được trên hệ thống hóa đơn điện tử. Ghi rõ nhân viên phải xác nhận số tiền tự điền và hệ thống chặn hóa đơn trùng.</li>
      <li><b>[Cao] ERD 1:1 sai với rule:</b> đề nghị trên 20 triệu có hai cấp duyệt, đề nghị bị trả lại rồi gửi lại có nhiều lượt duyệt. Claim 1 – N Approval, mỗi bản ghi có cấp, người duyệt, kết quả, thời điểm, lý do, người duyệt thay (nếu có).</li>
      <li><b>[Cao] NFR-01 không khả thi và không đo được:</b> 100% không có kỳ đo, không tính bảo trì. Viết: “khả dụng ≥ 99,5% mỗi tháng trong giờ 7:00–22:00, không tính bảo trì đã báo trước 48 giờ”, kèm RTO / RPO nếu cần.</li>
      <li><b>[Trung bình] FR-01 không kiểm chứng được và gộp hai ý:</b> “nhanh”, “dễ dùng” không có ngưỡng, vi phạm đặc tính verifiable và singular của ISO/IEC/IEEE 29148. Tách thành NFR hiệu năng có số (ví dụ 95% lượt mở đề nghị hiển thị trong 2 giây) và NFR khả năng dùng có cách đo (ví dụ 9/10 người dùng thử tạo được đề nghị đầu tiên trong 3 phút không cần hướng dẫn).</li>
      <li><b>[Trung bình] FR-06 là thiết kế, không phải requirement:</b> màu nút, React, axios là quyết định của designer và developer. Requirement nên là điều người dùng cần, ví dụ “nhân viên gửi được đề nghị bằng một thao tác từ màn hình xem lại”.</li>
      <li><b>[Trung bình] FR-07 mơ hồ:</b> “người liên quan” là ai, “và/hoặc” là cả hai hay một, gửi khi nào, qua kênh nào, nội dung gì. Viết thành bảng sự kiện → người nhận → kênh → nội dung.</li>
      <li><b>[Trung bình] AC của US-14 không kiểm thử được:</b> “hoạt động đúng” không cho tester biết kiểm tra gì. Viết: Then trạng thái là “Đã duyệt cấp 1”, lịch sử duyệt ghi người duyệt và thời điểm, đề nghị chuyển tới Giám đốc tài chính nếu số tiền trên 20 triệu, nhân viên nhận thông báo.</li>
    </ol>
    <ol class="l-en" style="margin:0;padding-left:20px;display:grid;gap:4px">
      <li><b>[Critical] FR-02 has a hole at the boundary and missing branches:</b> a claim of exactly 5,000,000 VND matches neither line, and there's no rule above 20 million or for entertainment. Rewrite it as a complete, non-overlapping decision table: ≤ 5,000,000; &gt; 5,000,000 and ≤ 20,000,000; &gt; 20,000,000; plus lines by category.</li>
      <li><b>[Critical] FR-03 breaks internal control:</b> the amount paid can differ from the amount approved, with no trace. Accounting may only return the claim with a reason (or propose a new amount for the approver to re-approve), and every change goes to an audit log: who, when, old value, new value.</li>
      <li><b>[Critical] Parallel gateway for an either/or choice:</b> an AND gateway runs both branches at once, so the claim is approved and returned at the same time. Use an exclusive (XOR) gateway with a condition on each branch.</li>
      <li><b>[High] FR-05 collects personal data the purpose doesn't need:</b> employees already sign in with a company account and an HR employee ID. Asking for the ID card number and photo on every claim goes against data minimisation and adds obligations under Vietnam's Personal Data Protection Law 91/2025/QH15 and Decree 356/2025/NĐ-CP (in force from 1 January 2026). Drop it, or state the purpose and legal basis if it's truly needed.</li>
      <li><b>[High] FR-04 has no exception flows and no owner:</b> OCR can't read the receipt, reads it wrong, the invoice was already used on another claim, or the e-invoice can't be found in the tax authority's lookup. State that the employee confirms the auto-filled amount and that duplicate invoices are blocked.</li>
      <li><b>[High] The 1:1 ERD contradicts the rules:</b> claims over 20 million have two approval levels, and a returned claim that's resubmitted gets several approval rounds. Make it Claim 1 – N Approval, each row holding level, approver, outcome, timestamp, reason and delegate (if any).</li>
      <li><b>[High] NFR-01 is infeasible and unmeasurable:</b> 100% with no measurement period and no maintenance window. Write “availability ≥ 99.5% per month between 07:00 and 22:00, excluding maintenance announced 48 hours ahead”, plus RTO / RPO if needed.</li>
      <li><b>[Medium] FR-01 can't be verified and bundles two things:</b> “fast” and “easy to use” have no thresholds, which breaks the verifiable and singular characteristics in ISO/IEC/IEEE 29148. Split it into a performance NFR with a number (for example, 95% of claim views render within 2 seconds) and a usability NFR with a measure (for example, 9 out of 10 test users create their first claim within 3 minutes without help).</li>
      <li><b>[Medium] FR-06 is design, not a requirement:</b> button colour, React and axios are the designer's and developers' decisions. The requirement is what the user needs, for example “an employee can submit a claim with one action from the review screen”.</li>
      <li><b>[Medium] FR-07 is ambiguous:</b> who are the “people concerned”, does “and/or” mean both or either, when is it sent, on which channel, with what content? Turn it into an event → recipient → channel → content table.</li>
      <li><b>[Medium] US-14's acceptance criterion can't be tested:</b> “works correctly” doesn't tell a tester what to check. Write: Then the status is “Approved (level 1)”, the approval history records the approver and time, the claim moves to the CFO if the amount is over 20 million, and the employee is notified.</li>
    </ol>
    </div></details>
  </div>

  <div class="box">
    <h3>Bài take-home thường gặp và cách nộp</h3>
    <ul>
      <li><b>Dạng thấy được trong nguồn:</b> user story có AC từ một đoạn mô tả (Yardstick, CareerLink); sơ đồ quy trình (CareerLink, BA Times); kế hoạch hoặc phân tích một trang (FirstHR, PA Consulting); bài Excel kèm biểu đồ (Yardstick, Chợ Tốt); bộ slide cải tiến quy trình (Yardstick). Không tìm được nguồn nào giao cả một BRD / SRS làm bài về nhà; BRD thường là câu hỏi trong buổi hoặc work sample bạn mang theo.</li>
      <li><b>Hỏi trước:</b> thời gian kỳ vọng, định dạng (doc, slide, sơ đồ), người đọc là ai, có dữ liệu kèm không, được giả định tới đâu, có được dùng AI không.</li>
      <li><b>Trang đầu là kết luận:</b> vấn đề trong một câu, đề xuất, tác động dự kiến có số, rủi ro lớn nhất, việc cần quyết định.</li>
      <li><b>Tách rõ ba cột:</b> điều đề bài cho, giả định của bạn, câu hỏi mở cần hỏi ai. Người chấm hỏi dồn đúng vào cột giả định.</li>
      <li><b>Cho xem thay vì kể:</b> một sơ đồ to-be, một decision table, 3–5 story có AC, một wireframe thô. Một luồng làm kỹ cả ngoại lệ tốt hơn năm luồng sơ sài.</li>
      <li><b>Phạm vi:</b> ghi “ngoài phạm vi” mà không cần ai nhắc (FirstHR liệt kê đây là dấu hiệu tốt).</li>
      <li><b>Đo lường:</b> KPI hiện trạng và mục tiêu, cách đo sau go-live.</li>
      <li><b>Work sample từ công việc cũ:</b> xóa tên khách, số liệu, dữ liệu cá nhân; viết một đoạn bối cảnh (dự án gì, bạn làm phần nào, ai dùng tài liệu); Bridging the Gap khuyên đừng gửi tài liệu mà không có bối cảnh, và nên chuyển ghi chú thô sang template chỉn chu.</li>
      <li><b>Buổi trình bày:</b> chuẩn bị cho “nếu khách đổi hạn mức giữa Sprint thì sao”, “dev nói rule này không làm kịp”, “ai sẽ phản đối đề xuất này”. Đừng đọc lại tài liệu; giải thích vì sao bạn chọn từng chỗ.</li>
    </ul>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted" style="font-size:14px">Bấm giờ, nói thành tiếng, ghi âm hoặc quay màn hình rồi tự chấm theo bảng “Cách chấm”. Bài 1 và 4 cần một người đóng vai stakeholder; bài 7 làm mỗi ngày trong tuần cuối.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Đề</th><th>Thời gian</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td><b>Elicitation role-play:</b> bạn bè đóng vai trưởng phòng nhân sự: “Chúng tôi cần đăng ký nghỉ phép online.” Họ giữ sẵn 5 chi tiết chỉ nói khi được hỏi (phép năm cộng dồn, nửa ngày, nghỉ không lương, duyệt thay, đồng bộ chấm công). 15′ hỏi, 5′ đọc lại, 10′ viết problem statement, 5 rule, câu hỏi mở.</td><td class="mono">30′</td></tr>
          <tr><td class="mono">2</td><td><b>BPMN trên giấy:</b> đặt hàng online tới giao hàng và hoàn tiền, có pool Khách, Shop, Đơn vị vận chuyển, Cổng thanh toán; ít nhất một XOR, một AND, một timer boundary event, một message flow. Sau đó chỉ ra 3 điểm nghẽn và đề xuất cải tiến (đề intern của CareerLink).</td><td class="mono">20′</td></tr>
          <tr><td class="mono">3</td><td><b>Use case “Rút tiền tại ATM”:</b> actor, precondition, main flow, 4 exception flow (sai PIN 3 lần, không đủ số dư, máy hết tiền, mất kết nối sau khi đã trừ tiền), postcondition. Đề phổ biến trong tài liệu giảng dạy; chưa thấy báo cáo phỏng vấn nào xác nhận, nhưng rất hợp để luyện ngoại lệ.</td><td class="mono">20′</td></tr>
          <tr><td class="mono">4</td><td><b>Yêu cầu mơ hồ → user story:</b> “Khách muốn đăng nhập bằng số điện thoại, quên mật khẩu thì lấy lại được, và an toàn.” Viết 3–5 story có AC Given/When/Then, giả định, câu hỏi mở; người đóng vai góp ý xong thì sửa 10′ (định dạng của Yardstick).</td><td class="mono">35′</td></tr>
          <tr><td class="mono">5</td><td><b>SQL:</b> viết lại 3 query ở bài mẫu 2 không nhìn đáp án, thêm “khách hàng chưa từng đặt hàng” trên bảng <code>customers</code>, <code>orders</code> và “doanh thu theo tháng theo danh mục”. Chạy trên DB Fiddle hoặc SQLite, đối chiếu kết quả bằng tay với 10 dòng dữ liệu.</td><td class="mono">20′</td></tr>
          <tr><td class="mono">6</td><td><b>Change request trong dự án fixed price:</b> khách Nhật muốn thêm duyệt theo dự án ngoài duyệt theo phòng ban, hai tuần trước UAT. Viết impact analysis một trang (phạm vi, tài liệu, ước lượng, lịch, rủi ro, phương án) và email tiếng Anh gửi khách đề xuất hai lựa chọn.</td><td class="mono">25′</td></tr>
          <tr><td class="mono">7</td><td><b>Tự giới thiệu + behavioral bằng tiếng Anh:</b> 90 giây (số năm, domain, một kết quả có số, vì sao ứng tuyển), rồi “Tell me about a time you dealt with two stakeholders who wanted opposite things” theo STAR trong 2 phút. Ghi âm, nghe lại, cắt bớt chỗ lan man.</td><td class="mono">15′</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13.5px">Thêm hai bài không bấm giờ: làm bài review mẫu ở trên trong 10′ rồi viết lại thành một đoạn SRS đúng; đóng gói portfolio từ các lab (mỗi tài liệu kèm một đoạn bối cảnh) và nhờ bạn đóng vai interviewer hỏi dồn 20′ về một tài liệu bất kỳ. Tuần cuối, chạy lại bài mẫu 1 bằng tiếng Anh nếu JD ghi làm việc với khách nước ngoài.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://careers.nashtechglobal.com/fresher-program/" target="_blank" rel="noopener">NashTech · Vietnam Fresher Program (quy trình tuyển BA Fresher)</a></li>
      <li><a href="https://fresher.cmcglobal.com.vn/" target="_blank" rel="noopener">CMC Global · Fresher program (bài test đầu vào)</a></li>
      <li><a href="https://www.uef.edu.vn/kcntt/thuc-tap-tuyen-dung/fit-career-day-2025-dong-hanh-cung-fpt-softwarefresher-business-analyst-29489" target="_blank" rel="noopener">UEF FIT · FPT Software Fresher Business Analyst 2025</a></li>
      <li><a href="https://aniday.com/en/headhunter/tu-nguyen-53073/business-analyst-tieng-nhat-song-ngu-anh-nhat-15590" target="_blank" rel="noopener">Aniday · Business Analyst (song ngữ Anh – Nhật)</a></li>
      <li><a href="https://trangbap13.wordpress.com/2021/11/10/lan-dau-phong-van-cho-vi-tri-business-analyst-intern/" target="_blank" rel="noopener">Blog ứng viên · Lần đầu phỏng vấn BA Intern (Chợ Tốt, 2021)</a></li>
      <li><a href="https://www.careerlink.vn/cam-nang-viec-lam/phong-van-viec-lam/cau-hoi-phong-van-business-analyst" target="_blank" rel="noopener">CareerLink · Câu hỏi phỏng vấn Business Analyst (03/2026)</a></li>
      <li><a href="https://www.careerlink.vn/cam-nang-viec-lam/?p=16553" target="_blank" rel="noopener">CareerLink · Business Analyst Intern là gì (04/2026)</a></li>
      <li><a href="https://itnavi.com.vn/blog/cau-hoi-phong-van-business-analyst" target="_blank" rel="noopener">ITNavi · Bộ câu hỏi phỏng vấn Business Analyst</a></li>
      <li><a href="https://tanca.io/blog/bo-cau-hoi-phong-van-ba-business-analyst-hang-dau" target="_blank" rel="noopener">Tanca · Bộ câu hỏi phỏng vấn BA</a></li>
      <li><a href="https://viblo.asia/p/top-10-cau-hoi-phong-van-pho-bien-danh-cho-business-analyst-MkNLrm28JgA" target="_blank" rel="noopener">Viblo (BAC) · Top 10 câu hỏi phỏng vấn phổ biến dành cho BA</a></li>
      <li><a href="https://viblo.asia/p/7-meo-phong-van-thanh-cong-danh-cho-fresher-business-analyst-W13VMyW7VY7" target="_blank" rel="noopener">Viblo (BAC) · 7 mẹo phỏng vấn cho Fresher BA</a></li>
      <li><a href="https://understand-digital-data-roles-skills.service.gov.uk/role/business-analyst" target="_blank" rel="noopener">UK Government · DDaT Capability Framework, Business analyst</a></li>
      <li><a href="https://sfia-online.org/en/sfia-9/skills/requirements-definition-and-management" target="_blank" rel="noopener">SFIA 9 · Requirements definition and management</a></li>
      <li><a href="https://iiba.org/professional-development/business-analysis-competency-model" target="_blank" rel="noopener">IIBA · Business Analysis Competency Model</a></li>
      <li><a href="https://www.jise.org/Volume33/n4/JISE2022v33n4pp371-387.pdf" target="_blank" rel="noopener">Lending, Ezell, Dillon, May · A Rubric to Evaluate and Enhance Requirements Elicitation Interviewing Skills (JISE, 2022)</a></li>
      <li><a href="https://www.bridging-the-gap.com/business-analyst-job-interview/" target="_blank" rel="noopener">Bridging the Gap · What Can I Expect in a Business Analyst Job Interview?</a></li>
      <li><a href="https://www.bridging-the-gap.com/how-to-provide-work-samples-that-get-you-hired/" target="_blank" rel="noopener">Bridging the Gap · Work samples that get you hired</a></li>
      <li><a href="https://yardstick.team/work-samples/practical-work-sample-exercises-for-hiring-top-business-analysts" target="_blank" rel="noopener">Yardstick · Work sample exercises for hiring Business Analysts</a></li>
      <li><a href="https://firsthr.app/templates/hiring/business-analyst-interview-questions" target="_blank" rel="noopener">FirstHR · Business Analyst interview questions template</a></li>
      <li><a href="https://www.interviewpilot.app/interview-guides/business-analyst" target="_blank" rel="noopener">Interview Pilot · Business Analyst Interview Guide (05/2026)</a></li>
      <li><a href="https://batimes.com/articles/designing-case-study-interviews-for-hiring-awesome-bas-a-hiring-managers-perspective/" target="_blank" rel="noopener">BA Times · Designing case study interviews for hiring BAs</a> (chỉ đọc được đoạn trích)</li>
      <li><a href="https://why-change.com/2022/07/28/how-do-you-gather-requirements-trick-interview-questions/" target="_blank" rel="noopener">Why Change · How do you gather requirements? Trick interview questions</a></li>
      <li><a href="https://www.adaptiveus.com/blog/business-analyst-interview-questions/" target="_blank" rel="noopener">Adaptive US · Business Analyst interview questions (2026)</a></li>
      <li><a href="https://www.adaptiveus.com/blog/business-analyst-tests/" target="_blank" rel="noopener">Adaptive US · Business Analyst test questions</a></li>
      <li><a href="https://www.interviewquery.com/guides/capgemini-business-analyst" target="_blank" rel="noopener">Interview Query · Capgemini Business Analyst</a> (vòng manager / client, đoạn trích)</li>
      <li><a href="https://www.omg.org/spec/BPMN/" target="_blank" rel="noopener">OMG · BPMN 2.0.2</a></li>
      <li><a href="https://www.omg.org/spec/DMN/" target="_blank" rel="noopener">OMG · DMN (hit policy)</a></li>
      <li><a href="https://www.iso.org/standard/72089.html" target="_blank" rel="noopener">ISO · ISO/IEC/IEEE 29148:2018</a></li>
      <li><a href="https://cucumber.io/docs/gherkin/reference/" target="_blank" rel="noopener">Cucumber · Gherkin reference</a></li>
    </ul>
    <p class="muted" style="font-size:13px">Glassdoor, BA Times, Ybox và Glints chặn đọc trực tiếp; các ý lấy từ đó chỉ dựa trên đoạn trích của công cụ tìm kiếm. Báo cáo ứng viên FPT Software trên Glassdoor đọc được là của vị trí developer, không phải BA, nên không dùng. Bài Chợ Tốt là trải nghiệm của một ứng viên intern vị trí BA thiên về dữ liệu. Số liệu Expense Tracker Business, hạn mức duyệt và lý do trả lại đều là giả định.</p>
  </div>`
};
