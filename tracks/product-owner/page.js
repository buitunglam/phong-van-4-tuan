/* Product Owner: static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. Section 05 is the case study round. */
const PO_PAGE={
 hero:`<span class="eyebrow">Lộ trình phỏng vấn · Product Owner (Mobile App) · 10/2026</span>
<h1>Product Owner trong 4 tuần</h1>
<p class="lede">Bám theo hai JD Product Owner mobile app ở Hà Nội mà bạn đang ứng tuyển (một vị trí thiên về nghiên cứu và tối ưu sản phẩm, một vị trí thiên về monetization IAP) và 24 JD Product Owner mobile app, game và subscription đọc toàn văn trên các trang tuyển dụng Việt Nam lẫn quốc tế. Khái niệm được đối chiếu với nguồn gốc: Scrum Guide 2020, tài liệu của Apple, Google Play, Firebase, RevenueCat và tác giả của từng framework. Cùng cấu trúc với các lộ trình khác; riêng mục 05 là vòng case study thay cho live coding.</p>`,

 jd:`<div style="display:grid;gap:8px">
    <h2>Các JD Product Owner app mobile thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 24 JD đọc được toàn văn: 18 JD Việt Nam (10 Hà Nội, 8 TP.HCM; 7 tin app studio / publisher, 7 tin game mobile, 4 tin app khác) và 6 JD product / monetization của app tiêu dùng quốc tế trên Greenhouse, Ashby, Workable. Tin Việt Nam lấy từ TD Consulting (3, gồm 2 tin mục tiêu), ITviec (5), Joboko (4, trang tổng hợp chép lại tin gốc), Lever và trang tuyển dụng của Amanotes (2), Built In, TopDev, JOIN và trang công ty (mỗi nơi 1). 14 tin có ngày đăng, hạn nộp hoặc ngày cập nhật trong 2026, 1 tin từ 09/2025 (Funtap, đã hết hạn nhưng yêu cầu vẫn đại diện), 3 tin ITviec đã hết hạn và không hiện ngày đăng. Chỉ đếm vai trò PO, PM hoặc product monetization mà sản phẩm là app hoặc game mobile; tin PO ngân hàng, ERP, e-commerce không tính. TopCV và JobsGO trả về 403, LinkedIn không kết nối được, VietnamWorks render bằng JavaScript và API tìm kiếm chỉ trả mô tả bị cắt, nên tin ở các trang này chỉ dùng đoạn trích (chủ yếu để lấy lương) và không tính vào bảng tần suất. Một kỹ năng được tính khi nằm trong phần trách nhiệm, yêu cầu hoặc điểm cộng. Thanh hồng là nhóm đa số JD coi là bắt buộc và xuất hiện ở ít nhất 5 JD; thanh tím là điểm cộng hoặc hiếm gặp.</p>
  </div>
  <div class="box"><div class="freq" id="po-freq"></div></div>

  <div class="box">
    <h3>Hai JD bạn đang ứng tuyển</h3>
    <p class="muted small">Cả hai tin đều đăng qua TD Consulting (đơn vị tuyển dụng), không ghi tên công ty khách hàng, ngành “App/Games”, văn phòng ở Thanh Xuân, Hà Nội. Hai tin ghi hai địa chỉ khác nhau nên nhiều khả năng là hai công ty khác nhau; tin Monetization Marketing TDC00906 cùng địa chỉ và cùng khối phúc lợi với JD A. Đọc ngày 26/10/2026.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>Tiêu chí</th><th>JD A · PO (iOS/Android)</th><th>JD B · Product Owner (Mobile App)</th></tr></thead>
        <tbody>
          <tr><td>Mã tin, cấp độ</td><td class="mono">TDC00970 · không ghi cấp</td><td class="mono">TDC00957 · Junior</td></tr>
          <tr><td>Lương</td><td class="mono">25.000.000 VND / tháng</td><td class="mono">1.000 USD / tháng + hoa hồng</td></tr>
          <tr><td>Địa điểm, giờ làm</td><td>12 Khuất Duy Tiến; 8:30–18:00, thứ 2–6, nghỉ trưa 1,5 giờ</td><td>305 Quan Nhân; vào 8:30–9:00, về 18:00–18:30, thứ 2–6, nghỉ trưa 1,5 giờ</td></tr>
          <tr><td>Tiếng Anh, số vòng</td><td>Giao tiếp; 2 vòng phỏng vấn</td><td>Giao tiếp; 2 vòng phỏng vấn</td></tr>
          <tr><td>Trọng tâm công việc</td><td>Nghiên cứu người dùng, thị trường, đối thủ; tối ưu sản phẩm và giữ chân người dùng; đo hiệu quả bằng công cụ analytics; A/B test các phương án cải tiến; Agile + Jira; hỗ trợ lên kế hoạch marketing</td><td>Roadmap monetization xoay quanh IAP; tối ưu paywall, giá, gói, khuyến mãi, upsell, luồng thanh toán; tăng free-to-paid, mua lặp lại, LTV; phân khúc người dùng và offer cá nhân hóa; A/B test; quản lý Product Backlog; theo dõi thanh toán, refund, tuân thủ chính sách App Store và Google Play</td></tr>
          <tr><td>Phải có</td><td>Từ 1 năm làm PO, BA hoặc vai trò product tương tự; tư duy sản phẩm, phân tích; phối hợp với Designer, Developer, Tester, Marketing; chịu áp lực và đa nhiệm; ưu tiên đọc hiểu tiếng Anh</td><td>Từ 1 năm làm app mobile có IAP, subscription hoặc freemium; tối ưu paywall, giá, luồng mua, funnel; A/B test, cohort, retention, metric doanh thu; App Store Connect, Google Play Console, RevenueCat, Firebase hoặc Amplitude; phân tích LTV, ARPU, ARPPU, conversion, retention, churn</td></tr>
          <tr><td>Điểm cộng</td><td>Kinh nghiệm app mobile; Sensor Tower, AppTweak hoặc AppMagic; metric sản phẩm trên GA4; Agile/Scrum; UI/UX, hành vi người dùng</td><td>SQL</td></tr>
          <tr><td>Công cụ nhắc tới</td><td>Jira, Sensor Tower, AppTweak, AppMagic, GA4</td><td>Figma, FigJam, Miro; Amplitude, Mixpanel, Firebase Analytics; SQL, BigQuery, Looker Studio, Power BI; RevenueCat, App Store Connect, Google Play Console; AppsFlyer, Adjust; Slack, Teams</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted small">Suy luận, chưa xác nhận: tổ hợp công cụ (Sensor Tower, AppMagic, RevenueCat, AppsFlyer, Adjust) và chữ “App/Games” cho thấy nhiều khả năng đây là các studio phát hành app ra thị trường toàn cầu, doanh thu từ subscription và quảng cáo. Nên hỏi recruiter trước vòng 1: tên app hoặc thể loại app, thị trường chính, mô hình doanh thu (IAP hay ads chiếm phần lớn), team gồm những ai, PO báo cáo cho ai, có bài take-home hay test tiếng Anh không.</p>
  </div>
  <div class="grid2">
    <div class="box">
      <span class="tag must">JD A: ôn gì trước</span>
      <ul>
        <li><b>Tuần 1:</b> Scrum Guide, vai trò PO, Jira; discovery và phỏng vấn người dùng (JD ghi “user research” hai lần).</li>
        <li><b>Tuần 2:</b> Sensor Tower, AppMagic, AppTweak, phân tích đối thủ, ASO, roadmap và ưu tiên. Đây là phần tạo khác biệt vì nằm ở mục điểm cộng.</li>
        <li><b>Tuần 4:</b> retention, metric trên GA4/Firebase, A/B test, chẩn đoán metric sụt giảm.</li>
        <li>Chuẩn bị một bài phân tích đối thủ có ảnh chụp onboarding và paywall: dễ được hỏi “kể cách bạn nghiên cứu một ngách app”.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">JD B: ôn gì trước</span>
      <ul>
        <li><b>Tuần 3, nửa sau:</b> toàn bộ module monetization (loại IAP, phí, quy định store, paywall, giá, trial, offer, vòng đời subscription, RevenueCat). Đây là lõi của JD.</li>
        <li><b>Tuần 4:</b> ARPU, ARPPU, LTV, churn, cohort, funnel, SQL trên BigQuery; A/B test giá và paywall đo bằng doanh thu.</li>
        <li><b>Tuần 1:</b> phần Product Backlog và refinement, vì JD ghi rõ “quản lý Product Backlog”.</li>
        <li>Luyện tính nhẩm: cho số người cài, tỷ lệ trial, tỷ lệ chuyển đổi và giá, ra doanh thu gross và net trong 2 phút.</li>
      </ul>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li>Phối hợp với Design, Dev, QA, Marketing (24/24) và đọc dữ liệu sản phẩm (23/24): retention, engagement, session, funnel. Tin app studio gọi tên chỉ số cụ thể: retention D0/D7/D30 và ARPPU (Tripsoft), eCPM, Fill Rate, ARPDAU (Apero)</li>
        <li><b>Monetization</b> là trách nhiệm ở 19/24 JD (6/7 tin app studio, 6/6 tin quốc tế); IAP, subscription, paywall, pricing ghi rõ ở 13/24</li>
        <li>Kinh nghiệm app hoặc game mobile: 18/24, bắt buộc ở 14. Tin cấp junior vẫn đòi 1 năm: TDC00957 và Tripsoft đòi 1 năm trên app hoặc game mobile; TDC00970 đòi 1 năm PO/BA, kinh nghiệm app mobile chỉ là điểm cộng</li>
        <li><b>A/B test</b>: 16/24 (13 tin bắt buộc), 5/6 tin quốc tế</li>
        <li>Roadmap, backlog, ưu tiên (15/24) và nghiên cứu thị trường, đối thủ (15/24; 13/18 tin Việt Nam)</li>
        <li>Tiếng Anh: 11/18 tin Việt Nam ghi rõ, từ “đọc hiểu tài liệu” (Ant-Tech) tới “fluent” (Amanotes)</li>
        <li>User story, spec, acceptance criteria (10/24) và Agile/Scrum (9/24): gần như chỉ có ở tin Việt Nam</li>
        <li>Tin game cộng thêm hiểu game design, economy, core loop (6/7 tin game) và LiveOps (4/7)</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li>Firebase / GA4: 7/24, nhưng chỉ 3 tin bắt buộc (TDC00957, TDC00959, Apero); TDC00970, Tripsoft, Athena, Lucida AI ghi là ưu tiên hoặc điểm cộng</li>
        <li>Amplitude / Mixpanel (3), App Store Connect, Google Play Console, RevenueCat (3), AppsFlyer / Adjust (2): gần như chỉ xuất hiện ở tin monetization</li>
        <li>SQL: 4/24. TDC00957 ghi “Biết SQL là một lợi thế”, Gameloft đòi SQL, Python hoặc R cơ bản, Amanotes Senior PO đòi tự truy vấn và trực quan hóa dữ liệu</li>
        <li>Wireframe, prototype, Figma, Miro: 6/24</li>
        <li>Dùng công cụ AI: 5/18 tin Việt Nam. Monkey Studio coi “AI-first” là yêu cầu; Apero coi Cursor, Claude Code, Copilot là điểm cộng</li>
        <li>Nền BA hoặc Data Analyst được nhận ở 5 tin (TDC00970, Tripsoft, Apero, Ant-Tech, Designveloper)</li>
        <li>Sensor Tower / AppTweak / AppMagic: trong 24 tin chỉ TDC00970 nhắc (điểm cộng); 2 tin chỉ có đoạn trích (Qsoft trên JobsGO, một tin TopCV) nêu thêm Sensor Tower, App Annie, Data.ai, AppTweak</li>
        <li>Không tin nào trong 24 gọi tên ASO hay chứng chỉ PSPO/CSPO; Jira chỉ được gọi tên ở 3 tin</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>App studio và vai trò monetization đòi gì hơn PO thông thường</h3>
    <p class="muted">So 7 tin app studio / publisher (TDC00970, TDC00957, TDC00959, Tripsoft, Apero, Monkey Studio, UPLIVE) với 5 tin PO Việt Nam không làm app mobile, đọc toàn văn để đối chiếu và không tính vào bảng tần suất (TeenUp, Lendi, Foobla, Chứng khoán HD, Quantico Games).</p>
    <ul>
      <li><b>Doanh thu là KPI của PO:</b> 6/7 tin studio giao monetization; 0/5 tin đối chiếu nhắc IAP, paywall hay quảng cáo. Tin đối chiếu tập trung vào PRD, user story, acceptance criteria (4/5), UAT, quản lý tiến độ và tuân thủ ngành (HDS: quy định của UBCKNN).</li>
      <li><b>Hybrid monetization:</b> 4/7 tin studio cần cả IAP/subscription lẫn quảng cáo (TDC00959, Tripsoft, Monkey Studio, UPLIVE). TDC00959 nêu cơ cấu 70–80% doanh thu từ IAA, 20–30% từ IAP và subscription; Monkey Studio ghi “Subscription/IAP + IAA” và ưu tiên người mạnh về paywall, pricing, onboarding.</li>
      <li><b>Chỉ số kiếm tiền được gọi tên:</b> ARPPU, retention D0/D7/D30 (Tripsoft); eCPM, Fill Rate, ARPDAU (Apero); show rate, match rate, impressions/DAU (TDC00959); LTV, ARPU, ARPPU, churn (TDC00957); CPI, Cost Per Trial, ROAS D7/D30, trial-to-paid, renewal rate (SotaTek). Tin đối chiếu dừng ở DAU/MAU, retention, conversion (TeenUp) hay NPS, CSAT (Lendi).</li>
      <li><b>Thử nghiệm là việc hằng ngày:</b> A/B test ở 5/7 tin studio, 0/5 tin đối chiếu. Apero đòi biết Firebase A/B Testing và Remote Config; TDC00957 test pricing, messaging, placement và purchase journey.</li>
      <li><b>Hiểu cửa hàng và chính sách:</b> TDC00957 theo dõi thanh toán, refund và tuân thủ chính sách App Store, Google Play; TDC00959 chịu trách nhiệm tuân thủ chính sách AdMob và các store.</li>
      <li><b>Nhìn thị trường toàn cầu:</b> nghiên cứu thị trường, đối thủ ở 6/7 tin studio; Tripsoft phân tích “volume/trending” để tìm cơ hội app và game mới; TDC00970 nhắc Sensor Tower, AppTweak, AppMagic.</li>
      <li><b>Ít quy trình, nhiều tốc độ:</b> chỉ 2/7 tin studio nhắc viết requirement hay user story và 1/7 gọi tên Jira; thay vào đó là “môi trường sản xuất sản phẩm nhanh” (TDC00970), “chứng minh qua chỉ số sản phẩm thực tế” (Tripsoft), “quyết liệt theo đuổi KPI” (Monkey Studio).</li>
      <li><b>Gần UA và marketing:</b> TDC00970 tham gia xây kế hoạch marketing, TDC00959 phối hợp với UA, UPLIVE làm cùng Creative và User Acquisition.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Các trang quốc tế bổ sung gì</h3>
    <ul>
      <li><b>Monetization là một vai trò PM riêng:</b> Flo (Growth PM – Monetisation), Duolingo (Staff PM, Monetization), Strava (Senior PM, Subscription) và Lucida AI (PM, Monetization) chỉ lo pricing, packaging, paywall, trial, offer và LTV.</li>
      <li><b>Metric subscription cụ thể:</b> Strava liệt kê conversion rate, trial-to-paid, plan mix shift, LTV, churn, renewal; Lucida đặt “increasing LTV” làm mục tiêu sản phẩm chính và muốn xây một “monetization experimentation engine”.</li>
      <li><b>PM tự cấu hình store:</b> Flo giao quản lý cấu hình App Store Connect và Google Play Console cho pricing, SKU, subscription; Lucida coi RevenueCat, Amplitude, Mixpanel, Firebase là điểm cộng.</li>
      <li><b>Phân khúc và cá nhân hóa offer:</b> Flo cần “offer segmentation and personalisation” theo vùng, phân khúc, nền tảng; TDC00957 cũng có “personalized offers”.</li>
      <li><b>Không ghi quy trình:</b> 0/6 tin nhắc Agile/Scrum, user story hay Jira, chỉ mô tả kết quả cần đạt. Tin Việt Nam nhắc user story ở 10/18 và Agile/Scrum ở 9/18.</li>
      <li><b>Game:</b> Lion Studios (Tripledot) là publisher, cần 3+ năm PM game live và chạy LiveOps cho game puzzle; MobilityWare cần 4+ năm game F2P có IAP, coi hybrid IAP + ads (rewarded video, interstitial, mediation, eCPM) là điểm cộng.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Tin đáng chú ý</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>Tripsoft Studio</b> <span class="mono muted">ITviec · Hà Nội · hết hạn</span></td><td class="mono">1+ năm PO/BA/DA</td><td>Phân tích volume/trending thị trường app và game; engagement, session, user flow cùng hiệu quả UA và monetization; mô hình IAA/IAP/Hybrid; ARPPU, retention D0/D7/D30; Firebase, GA4, Looker Studio, DataBucket là ưu tiên; đến 30 triệu</td></tr>
          <tr><td><b>Apero</b> <span class="mono muted">Joboko · Hà Nội · hết hạn 08/2026</span></td><td class="mono">6 tháng PO/BA</td><td>Đọc eCPM, Fill Rate, ARPDAU; định ad placement, tần suất, cấu hình mediation; Firebase A/B Testing, Remote Config; Agile/Scrum; app cho thị trường quốc tế với “tens of millions of MAUs”</td></tr>
          <tr><td><b>Monkey Việt Nam, mảng Studio</b> <span class="mono muted">Joboko · Hà Nội · hạn 21/12/2026</span></td><td class="mono">2 năm PO app</td><td>App AI/Photo &amp; Video, Content &amp; Entertainment, Utility cho thị trường quốc tế; “AI-first”, “Data-first”; Hybrid Monetization (Subscription/IAP + IAA), ưu tiên mạnh về paywall, pricing, onboarding; 20–30 triệu</td></tr>
          <tr><td><b>UPLIVE (Amanotes)</b> <span class="mono muted">Built In · TP.HCM · 04/2026</span></td><td class="mono">2–3 năm PO app</td><td>Monetization nhiều mô hình (ads, IAP, subscription); tự làm wireframe, mockup, prototype; phối hợp Creative và UA; tiếng Anh lưu loát</td></tr>
          <tr><td><b>TDC00959 · Product Monetization</b> <span class="mono muted">TD Consulting · TP.HCM</span></td><td class="mono">1–3 năm</td><td>Ads-first: AdMob Mediation, AppLovin MAX, ironSource / Unity LevelPlay; waterfall và in-app bidding; eCPM, show rate, fill/match rate, impressions/DAU; viết Google Apps Script; 25–50 triệu</td></tr>
          <tr><td><b>SotaTek</b> <span class="mono muted">CareerViet · Hà Nội · hạn 19/11/2026 · không tính tần suất</span></td><td class="mono">2–3 năm</td><td>Mô tả và tool stack gần như trùng nguyên văn TDC00957 (không rõ có cùng nhà tuyển dụng); thêm KPI CPI, Cost Per Trial, Cost Per Paid User, ROAS D7/D30, trial-to-paid, renewal rate; tuổi 23–27; $600–1.000</td></tr>
          <tr><td><b>Gameloft</b> <span class="mono muted">ITviec · Hà Nội · 10/2026</span></td><td class="mono">2+ game, 1 live game</td><td>PM/PO Monetization: A/B test event, offer, shop; dashboard KPI và báo cáo tháng; Excel, PowerPoint, SQL/Python/R cơ bản; lên Senior PM hoặc Producer</td></tr>
          <tr><td><b>Sava Meta</b> <span class="mono muted">Joboko · Hà Nội · hết hạn 08/2026</span></td><td class="mono">2 năm</td><td>Game publishing: retention, CPI, CPA, ROAS, LTV, ARPU, ARPPU, ad revenue, IAP conversion; làm với publisher và studio bên ngoài</td></tr>
          <tr><td><b>Athena Studio</b> <span class="mono muted">ITviec · TP.HCM · 10/2026</span></td><td class="mono">2+ năm (ưu tiên)</td><td>Backlog, LiveOps, tài liệu UX flow, quest, reward; core loop, economy; Excel/Sheets để kiểm config; dùng AI là điểm cộng nhưng phải “fact-check and validate outputs”</td></tr>
          <tr><td><b>Ant-Tech</b> <span class="mono muted">JOIN · Hà Nội · 07/2026</span></td><td class="mono">0–2 năm PO/BA</td><td>Junior PO game: user story, backlog, phản hồi người chơi, retention, engagement, monetization; tiếng Anh đọc tài liệu; Jira, Confluence, Notion, Figma là điểm cộng</td></tr>
          <tr><td><b>Amanotes · Senior PO LiveOps</b> <span class="mono muted">Lever · TP.HCM · 01/2026</span></td><td class="mono">5+ năm</td><td>Mentor Junior PO; user story và AC; Figma, Miro; tự truy vấn dữ liệu; hồ sơ kèm “a short note about a data-driven product success”</td></tr>
          <tr><td><b>Amanotes · Music App PM</b> <span class="mono muted">Lever · TP.HCM · 04/2026</span></td><td class="mono">3–5+ năm</td><td>Đồng sở hữu roadmap 1–3 năm; chịu trách nhiệm revenue, ARPDAU, subscription, LTV/CAC; dẫn dắt các PO</td></tr>
          <tr><td><b>Perifit</b> <span class="mono muted">ITviec · remote · hết hạn</span></td><td class="mono">4+ năm</td><td>App sức khỏe phụ nữ: user story, tự QA, A/B test, Mixpanel, guideline thiết kế iOS và Android</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Tên cấp không khớp số năm:</b> TDC00957 ghi Junior và đòi 1 năm; tin SotaTek gần như cùng nội dung cũng ghi Junior nhưng đòi 2–3 năm; TDC00959 ghi Middle/Senior nhưng đòi 1–3 năm.</li>
      <li><b>Tin app studio ít xuất hiện trên job board IT:</b> ngày 26/10/2026 ITviec có 22 tin “product owner”, chỉ 2 tin là game mobile (Gameloft, Athena); API tìm kiếm của TopDev trả 8 tin PO/PM, đều là ngân hàng và doanh nghiệp; VietnamWorks có 126 kết quả “product owner”, chủ yếu ngân hàng, tài chính, dược; CareerViet có 44 tin, 1 tin monetization app (SotaTek). Tin PO app studio chủ yếu đến qua headhunter (TD Consulting), Joboko và trang tuyển dụng riêng (Amanotes trên Lever).</li>
      <li><b>Quy trình phỏng vấn thấy được:</b> TD Consulting ghi 2 vòng cho TDC00970, TDC00957, TDC00959; Gameloft: gọi HR 30 phút, bài test, phỏng vấn, offer; Amanotes: phone screening, rồi case study, technical interview, culture fit, reference check (tùy chọn); Perifit: làm bài assessment online 30 phút trước. Bài test hoặc case study xuất hiện ở cả ba công ty mô tả chi tiết.</li>
      <li><b>Giới hạn tuổi vẫn còn:</b> TDC00970 ghi từ 22 tuổi, SotaTek ghi 23–27.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Mức lương thấy được</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">12–18 triệu / tháng</td><td>Product Owner (kịch bản ads/paywall, AdMob), AHV TE-SE, Thanh Xuân (JobsGO, đoạn trích, hết hạn 18/07/2026)</td></tr>
          <tr><td class="mono">14 triệu / tháng</td><td>Product Owner, Apero, 6 tháng PO/BA: con số ghi trong phần quyền lợi, ô lương ghi “Thỏa thuận” (Joboko, hết hạn 06/08/2026)</td></tr>
          <tr><td class="mono">18–20 triệu / tháng</td><td>Product Owner, Qsoft, Mỹ Đình: tiêu đề ghi 1–2 năm, phần yêu cầu ghi ít nhất 2 năm PO (JobsGO, đoạn trích, hạn 08/10/2026)</td></tr>
          <tr><td class="mono">20–30 triệu / tháng</td><td>Product Owner mảng Studio, Monkey Việt Nam, 2 năm PO app (Joboko, hạn 21/12/2026)</td></tr>
          <tr><td class="mono">25 triệu / tháng</td><td>PO (iOS/Android), TDC00970, 1+ năm (TD Consulting)</td></tr>
          <tr><td class="mono">đến 30 triệu / tháng</td><td>Product Owner (Mobile App Growth), Tripsoft, 1+ năm: “Mức lương upto 30M” trong phần phúc lợi (ITviec, hết hạn)</td></tr>
          <tr><td class="mono">$600–1.000 / tháng</td><td>Junior PO, SotaTek, 2–3 năm (CareerViet, hạn 19/11/2026); Product Owner (Mobile App), TDC00957, Junior, $1.000 cộng commission</td></tr>
          <tr><td class="mono">25–40 triệu / tháng</td><td>Product Manager (Product Owner) game mobile, TD Consulting, 3–4 năm (JobsGO, đoạn trích, hạn 30/07/2026)</td></tr>
          <tr><td class="mono">25–50 triệu / tháng</td><td>Product Monetization Middle/Senior, TDC00959, TP.HCM, 1–3 năm, thêm thưởng ký hợp đồng bằng 1 tháng lương</td></tr>
          <tr><td class="mono">đến $1.500 / tháng</td><td>Product &amp; Growth Analyst (Mobile App), iKame, 2+ năm: vai trò analyst đứng cạnh PM (Joboko, hết hạn 30/09/2026)</td></tr>
          <tr><td class="mono">$1.000–3.000 / tháng</td><td>Product Manager/Product Owner, Monetization Manager, Gameloft Hà Nội (bản chép trên Joboko; ITviec ẩn lương)</td></tr>
          <tr><td class="mono">15–45 triệu / tháng</td><td>PO không làm app mobile, để đối chiếu: Lendi 15–20 triệu (2 năm), Foobla 25–40 triệu (2 năm), TeenUp 25–45 triệu (5 năm) (Joboko)</td></tr>
          <tr><td class="mono">20–50 triệu / tháng</td><td>Bài tổng quan PO của CareerViet: Junior 20–30 triệu, Middle 30–40 triệu (2–3 năm), Senior 40–50 triệu (5+ năm); bài không nêu nguồn số liệu</td></tr>
          <tr><td class="mono">£78–90K, $180–247K / năm</td><td>Quốc tế: Flo (London) £78–90K; Strava (San Francisco) $180–190K; Duolingo, Staff PM (New York) $182,8–247,3K; Strava và Duolingo có thêm equity</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13px">Không tin Việt Nam nào ghi lương gross hay net. ITviec ẩn lương với người chưa đăng nhập và TopDev cũng yêu cầu đăng nhập: số của Tripsoft lấy từ phần phúc lợi, số của Gameloft lấy từ bản chép trên Joboko. Lương các tin JobsGO lấy từ đoạn trích tìm kiếm vì trang trả về 403.</p>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Fresher / Junior</b></td><td class="mono">0–2 năm</td><td>Apero nhận từ 6 tháng PO/BA; TDC00970, TDC00957, Tripsoft đòi 1 năm; Ant-Tech 0–2 năm. Đọc được retention, ARPPU, conversion; nghiên cứu thị trường, đối thủ; viết user story, quản lý backlog; phối hợp Dev, Design, QA. Nhiều tin nhận người từ BA hoặc Data Analyst. Junior monetization (TDC00957) đã đòi paywall, pricing, A/B test, cohort và App Store Connect, Google Play Console, RevenueCat.</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">2–3 năm</td><td>Monkey Studio, Sava Meta, Funtap 2 năm; UPLIVE 2–3 năm; TDC00959 1–3 năm. Tự sở hữu một app từ roadmap tới KPI; chạy A/B test; tối ưu hybrid monetization (IAP/subscription + IAA); dẫn Dev, Design, QA đạt KPI.</td></tr>
        <tr><td><b>Senior</b></td><td class="mono">4–5+ năm</td><td>Perifit 4 năm; Amanotes Senior PO 5+ năm; quốc tế: MobilityWare 4+, Strava 5+. Mentor PO junior; tự truy vấn dữ liệu; làm wireframe, prototype; đặt success metric cho từng tính năng; LiveOps với game.</td></tr>
        <tr><td><b>Product Manager / Lead</b></td><td class="mono">3–7 năm</td><td>Amanotes Music App PM 3–5+ năm; UPLIVE Product Lead 4–7 năm và ít nhất 1 năm dẫn đội; Amanotes LiveOps Product Lead 5+ năm. Vision và roadmap 1–3 năm; chịu trách nhiệm doanh thu, ARPDAU, LTV/CAC; tuyển và coach đội PO.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://huangocquynh.tdconsulting.vn/jobs/TDC00970" target="_blank" rel="noopener">TD Consulting · TDC00970, PO (iOS/Android)</a></li>
      <li><a href="https://huangocquynh.tdconsulting.vn/jobs/TDC00957" target="_blank" rel="noopener">TD Consulting · TDC00957, Product Owner (Mobile App)</a></li>
      <li><a href="https://huangocquynh.tdconsulting.vn/jobs/TDC00959" target="_blank" rel="noopener">TD Consulting · TDC00959, Product Monetization Middle / Senior (Ads-First / IAA)</a></li>
      <li><a href="https://huangocquynh.tdconsulting.vn/jobs/TDC00906" target="_blank" rel="noopener">TD Consulting · TDC00906, Monetization Marketing</a> (chỉ dùng làm bối cảnh, không tính tần suất)</li>
      <li><a href="https://itviec.com/it-jobs/product-owner-mobile-app-growth-tripsoft-studio-3708" target="_blank" rel="noopener">ITviec · Tripsoft Studio, Product Owner (Mobile App Growth)</a> · hết hạn</li>
      <li><a href="https://itviec.com/it-jobs/product-manager-product-owner-monetization-manager-gameloft-5039" target="_blank" rel="noopener">ITviec · Gameloft, Product Manager/Product Owner, Monetization Manager</a></li>
      <li><a href="https://itviec.com/it-jobs/game-product-manager-gameloft-5520" target="_blank" rel="noopener">ITviec · Gameloft, Game Product Manager</a> · hết hạn, chỉ dùng cho quy trình phỏng vấn</li>
      <li><a href="https://itviec.com/it-jobs/mobile-game-producer-game-operations-product-owner-athena-studio-2411" target="_blank" rel="noopener">ITviec · Athena Studio, Mobile Game Producer (Game Operations/Product Owner)</a></li>
      <li><a href="https://itviec.com/it-jobs/product-manager-herond-labs-0725" target="_blank" rel="noopener">ITviec · Herond Labs, Product Owner/Product Manager (Web3/BlockChain)</a> · hết hạn</li>
      <li><a href="https://itviec.com/it-jobs/product-owner-perifit-5745" target="_blank" rel="noopener">ITviec · Perifit, Product Owner</a> · hết hạn</li>
      <li><a href="https://itviec.com/it-jobs/product-owner-project-management-waterfall-agile-quantico-games-0122" target="_blank" rel="noopener">ITviec · Quantico Games, Product Owner/Project Management</a> · hết hạn, nhóm đối chiếu</li>
      <li><a href="https://itviec.com/it-jobs/product-owner" target="_blank" rel="noopener">ITviec · Danh sách việc làm Product Owner</a></li>
      <li><a href="https://topdev.vn/detail-jobs/product-owner-game-global-cong-ty-co-phan-funtap-2055511" target="_blank" rel="noopener">TopDev · Funtap, Product Owner (Game Global)</a> · hết hạn (09/2025)</li>
      <li><a href="https://vn.joboko.com/viec-lam-product-owner-xvi6559393" target="_blank" rel="noopener">Joboko · Apero Technologies Group, Product Owner</a> · hết hạn</li>
      <li><a href="https://vn.joboko.com/viec-lam-product-owner-xvi6619623" target="_blank" rel="noopener">Joboko · Monkey Việt Nam, Product Owner</a></li>
      <li><a href="https://vn.joboko.com/viec-lam-product-owner-game-publishing-xvi6551136" target="_blank" rel="noopener">Joboko · Sava Meta, Product Owner (Game Publishing)</a> · hết hạn</li>
      <li><a href="https://vn.joboko.com/viec-lam-horus-tuyen-dung-product-owner-project-manager-po-pm-xvi6784726" target="_blank" rel="noopener">Joboko · Horus Productions, Product Owner / Project Manager</a></li>
      <li><a href="https://vn.joboko.com/viec-lam-product-manager-product-owner-monetization-manager-xvi6718186" target="_blank" rel="noopener">Joboko · Gameloft, Product Manager Product Owner, Monetization Manager</a> (bản chép, chỉ dùng cho lương)</li>
      <li><a href="https://vn.joboko.com/viec-lam-product-growth-analyst-mobile-app-xvi6618518" target="_blank" rel="noopener">Joboko · iKame, Product &amp; Growth Analyst (Mobile App)</a> · hết hạn, chỉ dùng cho lương</li>
      <li><a href="https://vn.joboko.com/viec-lam-product-owner-xvi6770468" target="_blank" rel="noopener">Joboko · TeenUp, Product Owner</a> · nhóm đối chiếu</li>
      <li><a href="https://vn.joboko.com/viec-lam-ha-noi-tuyen-dung-product-owner-hybrid-xvi6783089" target="_blank" rel="noopener">Joboko · Lendi, Product Owner Hybrid</a> · nhóm đối chiếu</li>
      <li><a href="https://vn.joboko.com/viec-lam-product-owner-xvi6795122" target="_blank" rel="noopener">Joboko · Foobla, Product Owner</a> · nhóm đối chiếu</li>
      <li><a href="https://vn.joboko.com/viec-lam-cv-cvcc-product-owner-xvi6796624" target="_blank" rel="noopener">Joboko · Chứng khoán HD, CV/CVCC Product Owner</a> · nhóm đối chiếu</li>
      <li><a href="https://careerviet.vn/vi/tim-viec-lam/junior-product-owner-po.35C8B28A.html" target="_blank" rel="noopener">CareerViet · SotaTek, Junior Product Owner - PO</a> (không tính tần suất vì trùng nội dung TDC00957)</li>
      <li><a href="https://careerviet.vn/viec-lam/product-owner-k-vi.html" target="_blank" rel="noopener">CareerViet · Việc làm Product Owner và bài tổng quan mức lương</a></li>
      <li><a href="https://builtin.com/job/mep-team-product-owner-app/7305699" target="_blank" rel="noopener">Built In · Amanotes, [UPLIVE Company] Product Owner (App)</a> · đã gỡ 04/2026</li>
      <li><a href="https://jobs.lever.co/amanotes/01540a47-eed9-4b9b-9de9-a91658f76aa3" target="_blank" rel="noopener">Lever · Amanotes, [LiveOps Team] Senior Product Owner</a></li>
      <li><a href="https://careers.amanotes.com/jobs/music-app-product-manager/6d610a18-1bf2-4954-9785-15a727c4c27c" target="_blank" rel="noopener">Amanotes Careers · [Music App] Product Manager</a></li>
      <li><a href="https://jobs.lever.co/amanotes/785e2661-4a01-4aec-885e-33c4e34f2f1f" target="_blank" rel="noopener">Lever · Amanotes, [UPLIVE Company] Product Lead</a> (chỉ dùng cho bảng cấp độ)</li>
      <li><a href="https://jobs.lever.co/amanotes/9c9416dd-bff1-4cf8-a4a7-b11150e37526" target="_blank" rel="noopener">Lever · Amanotes, [LiveOps Team] Product Lead</a> (chỉ dùng cho bảng cấp độ)</li>
      <li><a href="https://join.com/companies/ant-tech/16500094-junior-product-owner-mobile-games" target="_blank" rel="noopener">JOIN · Ant-Tech, Junior Product Owner (Mobile Games)</a> · đã lưu trữ</li>
      <li><a href="https://www.designveloper.com/?p=3620" target="_blank" rel="noopener">Designveloper · BA/PO (Lumin Mobile)</a></li>
      <li><a href="https://jobsgo.vn/viec-lam/product-owner-28784098829.html" target="_blank" rel="noopener">JobsGO · Qsoft, Product Owner</a> · đoạn trích</li>
      <li><a href="https://jobsgo.vn/viec-lam/product-owner-27643666514.html" target="_blank" rel="noopener">JobsGO · AHV TE-SE, Product Owner</a> · đoạn trích, hết hạn</li>
      <li><a href="https://jobsgo.vn/viec-lam/product-manager-product-owner-27767316888.html" target="_blank" rel="noopener">JobsGO · TD Consulting, Product Manager (Product Owner)</a> · đoạn trích, hết hạn</li>
      <li><a href="https://www.topcv.vn/viec-lam/product-owner/2166550.html" target="_blank" rel="noopener">TopCV · Product Owner (Sensor Tower, Data.ai, AppTweak)</a> · đoạn trích, không xác nhận được công ty</li>
      <li><a href="https://job-boards.greenhouse.io/flohealth/jobs/8041228003" target="_blank" rel="noopener">Greenhouse · Flo Health, Growth Product Manager – Monetisation</a></li>
      <li><a href="https://job-boards.greenhouse.io/duolingo/jobs/8474673002" target="_blank" rel="noopener">Greenhouse · Duolingo, Staff Product Manager, Monetization</a></li>
      <li><a href="https://jobs.ashbyhq.com/strava/e05740a1-ddc4-4241-88ec-2a36a7544f5e" target="_blank" rel="noopener">Ashby · Strava, Senior Product Manager, Subscription</a></li>
      <li><a href="https://job-boards.eu.greenhouse.io/tripledotstudios/jobs/4965757101" target="_blank" rel="noopener">Greenhouse · Tripledot Studios, Product Manager - Lion Studios</a></li>
      <li><a href="https://job-boards.greenhouse.io/mobilityware/jobs/8136486" target="_blank" rel="noopener">Greenhouse · MobilityWare, Senior Product Manager</a></li>
      <li><a href="https://apply.workable.com/lucida-ai/j/C9D0854F68/" target="_blank" rel="noopener">Workable · Lucida AI, Product Manager (Monetization)</a></li>
    </ul>
    <p class="muted" style="font-size:13px">TopCV và JobsGO trả về 403 cho mọi lần đọc trực tiếp; LinkedIn không kết nối được; VietnamWorks render bằng JavaScript, API tìm kiếm chỉ trả mô tả bị cắt và không có tin app studio nào lúc tra. Các tin ITviec hết hạn trả về 410 nhưng vẫn còn nội dung. Joboko là trang tổng hợp chép lại tin gốc, có ẩn email liên hệ; tin Apero gốc trên apero.vn trả về 404. Hai tin UPLIVE trên Lever đã đóng (404), nên dùng bản chép trên Built In. Tin Ant-Tech trên JOIN đọc qua công cụ trích xuất, các gạch đầu dòng được trích nguyên văn. Lương MobilityWare ghi “$125,000-$900,000”, có vẻ nhập sai nên không dùng. Không tin Việt Nam nào nêu rõ thang lương gross hay net, và không tin nào trong 24 tin đếm được nhắc ASO hay chứng chỉ PSPO/CSPO.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Bấm vào từng chủ đề để xem khái niệm, giải thích và ví dụ thực tế; tick khi đã học, tiến độ được lưu trên trình duyệt này. Lab 4 tuần cộng lại thành <b>“PO portfolio cho Expense Tracker”</b>: nghiên cứu người dùng, phân tích thị trường và đối thủ, strategy và roadmap, PRD và backlog trên Jira, gói Premium và paywall, tracking plan, query SQL, kế hoạch A/B test. Mang portfolio này vào buổi phỏng vấn hoặc bài take-home. Expense Tracker là app mà các lộ trình khác của trang này xây; ở đây coi như một app do studio ở Hà Nội phát hành toàn cầu, và mọi số liệu của nó trong ví dụ là giả định để minh họa cách tính.`,

 lc:`<div style="display:grid;gap:8px">
    <h2>Vòng case study &amp; bài tập Product Owner</h2>
    <p class="muted">Tổng hợp từ trang job family Product Manager và trang vai trò PM trong handbook của GitLab (vòng Deep Dive có viết issue sau buổi, vòng Leadership có case kinh doanh, sửa lần cuối 04/2026), bài “How to interview product managers” của Lenny's Newsletter (2022), hướng dẫn take-home của Aced (tên mới của Exponent, 2026) và RocketBlocks, hướng dẫn phỏng vấn PO của BarRaiser, GoPractice, CIRCLES của Lewis C. Lin; phần thống kê theo Kohavi và cộng sự (2007, 2022), Evan Miller, Microsoft ExP; phần chính sách theo App Store Review Guidelines và chính sách Subscriptions của Google Play (đọc lại 10/2026). Nguồn tiếng Việt công khai về vòng case của PO rất mỏng: bài trên ITviec (CIO Hữu Toàn Group, 2021, cập nhật 2024) cho biết vị trí PO/BA thường có tối đa 2 vòng phỏng vấn chuyên môn và ứng viên hay phải trình bày giải pháp sau vòng đầu; TopDev và các trang việc làm chỉ có câu hỏi lý thuyết. Không tìm được mô tả công khai nào về quy trình phỏng vấn của app studio ở Hà Nội, nên cách ghép vòng, vòng tiếng Anh và vòng teardown paywall bên dưới là suy luận từ hai JD (2 vòng, tiếng Anh giao tiếp, nặng monetization), không phải thông tin đã xác nhận. Bảng “Cách chấm” là tổng hợp, không công ty nào công bố rubric cho PO. Mọi con số của Expense Tracker là giả định.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>Screen HR + tiếng Anh</b></td><td class="mono">15–30′</td><td>Hỏi CV, lý do đổi việc, lương mong muốn, ngày nhận việc. Cả hai JD ghi “conversational English” nên nhiều khả năng một phần vòng này (hoặc đầu vòng 2) chuyển sang tiếng Anh: tự giới thiệu, kể một sản phẩm đã làm, vì sao muốn làm app mobile. Đây là suy luận từ JD. Để so sánh, GitLab mô tả recruiter screen 30–45′ gồm kinh nghiệm, năng lực PM cốt lõi, kỳ vọng lương và câu hỏi của ứng viên.</td></tr>
          <tr><td><b>Vòng chuyên môn với PO lead / Head of Product</b></td><td class="mono">45–60′</td><td>Đào CV: sản phẩm bạn phụ trách, metric bạn chịu trách nhiệm, một quyết định dựa trên dữ liệu. Câu Scrum (Product Owner làm gì ở Sprint Review, ai ước lượng), viết user story và acceptance criteria, tách story lớn, ưu tiên backlog trong Jira. Thường kèm behavioral: áp lực và nhiều việc cùng lúc (JD A ghi rõ), bất đồng với developer hoặc designer. Hướng dẫn PO của BarRaiser có vòng 60′ đúng các bài này: viết user story, tách story, dựng và ưu tiên backlog trong Jira.</td></tr>
          <tr><td><b>Case product sense</b></td><td class="mono">25–40′</td><td>“Cải thiện onboarding của app X”, “thiết kế tính năng cho nhóm người dùng Y”, “sản phẩm bạn thích nhất và bạn sẽ cải thiện gì”. Chấm cách chọn người dùng và vấn đề trước khi nói giải pháp, cách ưu tiên, metric. GitLab có vòng Deep Dive 45′: nói tầm nhìn dài hạn và bước thay đổi nhỏ nhất (MVC), sau đó viết vài issue, nhận phản hồi và xem bạn phản ứng thế nào.</td></tr>
          <tr><td><b>Case metric / A/B test</b></td><td class="mono">20–30′</td><td>“Trial-to-paid giảm 7 điểm trong 2 tuần, bạn làm gì?”, “chọn metric cho paywall mới”, “thiết kế A/B test giá”. Interviewer đóng vai người nắm dữ liệu, bạn hỏi và khoanh vùng dần. Với JD B (A/B test pricing, cohort, LTV, refund) khả năng gặp rất cao.</td></tr>
          <tr><td><b>Ước lượng (estimation)</b></td><td class="mono">10–15′</td><td>Hay là câu phụ trong case: “doanh thu mỗi tuần của một app quản lý chi tiêu top đầu ở Đức”, “quy mô thị trường app ngân sách cá nhân ở Mỹ”. RocketBlocks: chấm cách chia nhỏ, nói giả định thành tiếng, chia theo phân khúc người dùng, tự kiểm tra con số cao hay thấp; interviewer thường cũng không biết đáp số thật.</td></tr>
          <tr><td><b>Bài tập dữ liệu</b></td><td class="mono">30–60′</td><td>Một bảng funnel, cohort hoặc kết quả A/B test trong Google Sheets, đôi khi SQL (JD B ghi SQL là điểm cộng): tính conversion từng bước, đọc bảng retention, nhận xét kết quả test, chỉ ra chỗ dữ liệu không đáng tin. Có thể làm tại chỗ hoặc mang về. Đây là tổng hợp, chưa có nguồn công khai riêng cho app studio.</td></tr>
          <tr><td><b>Take-home + thuyết trình</b></td><td class="mono">vài giờ – 2 ngày, trình bày 30–60′</td><td>PRD hoặc đề xuất cải thiện paywall, backlog và roadmap một quý, kế hoạch user research, phân tích đối thủ. Aced: take-home thường mất “vài giờ đến vài ngày”, buổi debrief mới là nơi chấm thật; RocketBlocks dẫn một đề giới hạn 6 giờ; Lenny mô tả bài project làm ở nhà, tại văn phòng hoặc live rồi trình bày trước nhóm đồng nghiệp tương lai. ITviec: PO/BA hay phải trình bày giải pháp sau vòng đầu.</td></tr>
          <tr><td><b>Teardown app / paywall</b> <span class="tag nice">Khả năng cao, chưa xác nhận</span></td><td class="mono">15–30′</td><td>Mở app của công ty hoặc đối thủ trên điện thoại, đi từ cài đặt → onboarding → paywall → mua, nói điểm tốt và chưa tốt, rủi ro chính sách store, đề xuất 2–3 test. Không tìm được nguồn công khai mô tả vòng này ở app studio Việt Nam; dự đoán vì JD B xoay quanh paywall, pricing và chính sách store, còn câu “sản phẩm yêu thích / cải thiện sản phẩm” là dạng gần nhất được ghi nhận rộng rãi.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13.5px">Hai vòng trong JD thường ghép thế nào (suy luận, chưa xác nhận): vòng 1 là HR và tiếng Anh cộng chuyên môn với PO lead (CV, Scrum, một case ngắn); giữa hai vòng có thể có bài test hoặc take-home; vòng 2 với Head of Product hoặc ban giám đốc: trình bày bài, case metric hoặc monetization, behavioral, chốt lương. GoPractice cũng mô tả cuộc gọi với hiring manager hay kèm thảo luận một case, đôi khi giao thêm bài tập nhỏ. Hỏi recruiter (TD Consulting) bằng văn bản trước mỗi vòng: bao lâu, gặp ai, có bài test không, phần nào bằng tiếng Anh, take-home có được dùng AI không.</p>
  </div>

  <div class="box">
    <h3>Cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Tiêu chí</th><th>Mức tốt</th><th>Dấu hiệu trượt</th></tr></thead>
        <tbody>
          <tr><td><b>Làm rõ đề</b></td><td>3–5 câu hỏi có mục đích: mục tiêu kinh doanh, người dùng, nền tảng, thị trường, ràng buộc; nhắc lại đề bằng lời của mình trước khi giải</td><td>Nói giải pháp ngay từ phút đầu, hoặc hỏi 10 câu không dẫn tới đâu</td></tr>
          <tr><td><b>Cấu trúc</b></td><td>Nói trước sẽ đi qua mấy bước, các nhánh không chồng nhau (MECE), dừng tóm tắt để interviewer lái</td><td>Liệt kê ý rời rạc, nhảy qua lại, interviewer phải tự xếp lại</td></tr>
          <tr><td><b>Người dùng và vấn đề</b></td><td>Chọn một phân khúc và một vấn đề cụ thể, có lý do (dữ liệu funnel, review trên store, phỏng vấn người dùng)</td><td>“Tất cả người dùng”, giải pháp đi trước vấn đề, ví dụ chỉ từ trải nghiệm bản thân</td></tr>
          <tr><td><b>Metric và số liệu</b></td><td>Một metric chính gắn với giá trị hoặc doanh thu, có guardrail; số tự đặt ghi rõ là giả định; phép tính đúng; giả thuyết kiểm chứng được, có ngưỡng thành công</td><td>Chỉ conversion hoặc DAU, số bịa không nói nguồn, tính nhẩm sai, “chạy A/B test xem sao” mà không nói đo gì</td></tr>
          <tr><td><b>Quyết định và trade-off</b></td><td>Chọn một hướng, nói vì sao bỏ các hướng khác, MVP, rủi ro và cách giảm rủi ro</td><td>Đưa 5 phương án rồi không chọn, che điểm yếu của phương án mình chọn</td></tr>
          <tr><td><b>Hiểu app mobile và monetization</b></td><td>Biết trial, paywall, phí store, refund, chính sách App Store và Google Play, phát hành theo giai đoạn, cohort mới chưa đủ ngày</td><td>Đề xuất ẩn giá, làm khó nút đóng paywall, quên refund và churn</td></tr>
          <tr><td><b>Giao tiếp và phản hồi</b></td><td>Tóm tắt khuyến nghị trong 30 giây; tiếp thu phản biện, đổi hướng khi có dữ liệu mới; tiếng Anh đủ để trao đổi trôi chảy</td><td>Cãi để giữ ý, không nghe gợi ý của interviewer, im lặng lâu khi bí</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13.5px">Bảng là tổng hợp: Lenny viết bài project được chấm ở cách chia nhỏ vấn đề, cấu trúc lời giải và cách truyền đạt, không chấm việc đáp án gần đúng tới đâu; Aced chấm take-home theo 5 chiều (có quan điểm rõ, gắn với đúng công ty, chặt chẽ gồm giả thuyết kiểm chứng được, metric gắn doanh thu và guardrail, phạm vi đúng level, bảo vệ được khi debrief); RocketBlocks đánh giá cao việc tự nêu điểm yếu và các phương án đã loại; BarRaiser muốn ứng viên bảo vệ được lựa chọn khi bị hỏi dồn và giữ bình tĩnh trước áp lực thời gian; GitLab quan sát cách bạn phản ứng với feedback. Dòng “Hiểu app mobile và monetization” được thêm cho JD B.</p>
  </div>

  <div class="box">
    <h3>Chia 45 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–3′</td><td>Chào hỏi, nghe đề. Ghi đề ra giấy, nhắc lại đề bằng lời của bạn để chắc hai bên hiểu giống nhau.</td></tr>
          <tr><td class="mono">3–8′</td><td>Làm rõ: mục tiêu kinh doanh (doanh thu, retention hay tăng trưởng), nền tảng, thị trường, nhóm người dùng, ràng buộc (thời gian, nhân lực), metric hiện đang đo. Nếu interviewer nói “tùy bạn” thì nói to giả định của mình.</td></tr>
          <tr><td class="mono">8–12′</td><td>Nói khung sẽ đi (CIRCLES rút gọn hoặc checklist metric) và hỏi interviewer có muốn tập trung vào phần nào không. Đây là lúc họ lái bạn sang chỗ họ muốn chấm.</td></tr>
          <tr><td class="mono">12–28′</td><td>Phần chính: phân khúc người dùng rồi chọn một nhóm và một vấn đề; hoặc kiểm tra dữ liệu, segment, xếp hạng giả thuyết. Nghĩ thành tiếng, dừng 2–3 lần để tóm tắt.</td></tr>
          <tr><td class="mono">28–36′</td><td>Giải pháp hoặc kế hoạch kiểm chứng: 2–3 phương án, chọn một, MVP, metric chính + guardrail, cách thử (A/B test, rollout theo giai đoạn).</td></tr>
          <tr><td class="mono">36–40′</td><td>Chốt khuyến nghị trong 30 giây, rủi ro, việc làm tuần tới. Câu hỏi dồn hay gặp ở đây: “nếu test thua thì sao?”, “dev chỉ có một sprint thì cắt gì?”.</td></tr>
          <tr><td class="mono">40–45′</td><td>Câu hỏi của bạn: team đang chịu metric nào, A/B test chạy bằng công cụ gì và ai đọc kết quả, PO quyết định tới đâu, roadmap quý tới.</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <h3>Khung trả lời case product</h3>
      <p>CIRCLES của Lewis C. Lin (sách <i>Decode and Conquer</i>), dùng cho câu “thiết kế / cải thiện sản phẩm”:</p>
      <ul>
        <li><b>C</b>omprehend the situation: mục tiêu, ràng buộc, bối cảnh.</li>
        <li><b>I</b>dentify the customer: chọn một nhóm người dùng.</li>
        <li><b>R</b>eport the customer's needs: nhu cầu, nỗi đau của nhóm đó.</li>
        <li><b>C</b>ut, through prioritization: chọn một nhu cầu để giải.</li>
        <li><b>L</b>ist solutions: 3 giải pháp khác hẳn nhau.</li>
        <li><b>E</b>valuate trade-offs: được gì, mất gì, công sức, rủi ro.</li>
        <li><b>S</b>ummarize your recommendation: chọn một, metric, bước tiếp.</li>
      </ul>
      <p>Case chỉ có 20–25′ thì dùng bản rút gọn: Mục tiêu → Người dùng → Vấn đề → Giải pháp → Metric &amp; MVP. Không dùng CIRCLES cho câu metric sụt giảm (dùng checklist bên cạnh), ước lượng (dựng cây công thức), ưu tiên backlog (tiêu chí như RICE + nói trade-off) hay behavioral (STAR).</p>
      <p class="muted" style="font-size:13.5px">Đừng đọc tên từng bước như học thuộc. Nói tự nhiên: “Mình sẽ làm rõ mục tiêu, chọn nhóm người dùng, rồi mới tới giải pháp, được không?”.</p>
    </div>
    <div class="box">
      <h3>Checklist chẩn đoán metric sụt giảm</h3>
      <ul>
        <li><b>Số có thật không:</b> định nghĩa metric, tử số và mẫu số; cohort đã đủ ngày chưa (trial 7 ngày, cộng Billing Grace Period của Apple hoặc grace period / account hold của Google Play); SDK, webhook, ETL có lỗi không; timezone, user sandbox; so với App Store Connect, Play Console, RevenueCat.</li>
        <li><b>Hình dạng:</b> giảm đột ngột hay từ từ, từ ngày nào; metric liên quan có giảm theo không (install → paid, doanh thu net).</li>
        <li><b>Nội bộ hay bên ngoài:</b> release, experiment, đổi paywall hoặc giá, campaign UA mới; mùa vụ, đối thủ khuyến mãi, thay đổi của store hoặc OS, sự cố thanh toán.</li>
        <li><b>Segment:</b> iOS / Android, phiên bản app, quốc gia, kênh (organic / paid, từng campaign), người dùng mới / cài lại, vị trí paywall, gói.</li>
        <li><b>Bước funnel:</b> install → thấy paywall → bắt đầu trial → dùng tính năng chính trong trial → tắt gia hạn (ngày thứ mấy) → thu tiền (thành công / lỗi thanh toán) → paid.</li>
        <li><b>Mix hay thật:</b> tỉ lệ trong từng segment có đổi không, hay chỉ tỉ trọng các segment đổi (Simpson's paradox).</li>
        <li><b>Chốt:</b> giả thuyết xếp theo khả năng × độ dễ kiểm tra, việc làm ngay, người phụ trách, lúc cập nhật tiếp.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Bài mẫu nên thuộc 1: trial-to-paid của Expense Tracker giảm từ 35% xuống 28% trong 2 tuần</h3>
    <p><b>1. Làm rõ (2–3 phút).</b> Trial-to-paid tính thế nào: số trial chuyển thành trả tiền chia cho số trial <i>đã kết thúc</i>, gom theo ngày bắt đầu trial? Lấy từ dashboard nào (RevenueCat, Firebase, Looker Studio)? Hai tuần đó gồm những cohort đã hết 7 ngày trial chưa? Cả iOS và Android, mọi quốc gia? Số trial bắt đầu có đổi không, doanh thu net có giảm không? Gần đây có release, experiment, đổi giá hay campaign UA mới không? Rồi nói vì sao việc này đáng ưu tiên:</p>
<pre>Nếu giảm thật và số trial không đổi (giả định):
150.000 install × 6% = 9.000 trial / tháng
9.000 × (35% − 28%) = 630 gói năm mất / tháng
630 × $29.99 × 0,85 ≈ 16 nghìn USD net / tháng</pre>
    <p><b>2. Kiểm tra dữ liệu trước.</b> (a) Cohort chưa đủ ngày: trial 7 ngày, RevenueCat ghi rõ metric trial conversion luôn trễ so với số trial bắt đầu vì độ dài trial; nếu bật Billing Grace Period của Apple cho cả lượt chuyển từ trial sang trả tiền (tùy chọn “All Renewals”), lượt trả tiền bị lỗi thẻ có thể được ghi nhận muộn hơn nữa; trên Google Play, gia hạn lỗi thanh toán cũng đi qua grace period rồi account hold. Tính lại chỉ với cohort đã kết thúc trial và qua thời gian grace. (b) Tracking: bản mới có đổi SDK, webhook, event không; so số trial và số paid với App Store Connect và Play Console. (c) Định nghĩa: có ai sửa công thức dashboard, có lẫn user sandbox, đổi timezone không.</p>
    <p><b>3. Segment.</b> iOS / Android, phiên bản app, quốc gia (US, UK, DE, BR, VN), kênh (organic 60% / paid 40%, từng campaign), người dùng mới / cài lại, vị trí paywall (onboarding hay khi chạm tính năng Premium). Trong trial, tách người không trả tiền thành hai nhóm: <b>tự tắt gia hạn</b> (tắt ngày 0 hay ngày 6) và <b>lỗi thanh toán</b>. Hai nhóm này có nguyên nhân và cách sửa hoàn toàn khác nhau.</p>
    <p><b>4. Giả thuyết, xếp theo khả năng × độ dễ kiểm tra:</b></p>
    <ol style="margin:0;padding-left:20px;display:grid;gap:4px">
      <li><b>Đo sai, cohort chưa đủ ngày.</b> Kiểm tra: tính lại theo cohort đã kết thúc trial, so với store. Mất 30 phút, làm đầu tiên.</li>
      <li><b>Mẫu số phình:</b> paywall, vị trí hoặc campaign mới làm nhiều người bắt đầu trial hơn nhưng ý định thấp. Kiểm tra: install → trial và install → paid; nếu install → paid giữ nguyên thì doanh thu chưa mất. Xem tỉ lệ tắt gia hạn trong 24 giờ đầu.</li>
      <li><b>Mix shift:</b> campaign UA hoặc quốc gia mới có trial-to-paid thấp chiếm tỉ trọng lớn hơn. Kiểm tra: giữ tỉ trọng kênh / quốc gia của 2 tuần trước, tính lại; nếu tỉ lệ từng segment không đổi thì đây là mix, không phải sản phẩm xấu đi.</li>
      <li><b>Release làm hỏng giá trị trong trial:</b> lỗi sync, crash, nhắc nhở không gửi, Premium không mở khóa đúng. Kiểm tra: theo phiên bản, crash-free users, số giao dịch người dùng ghi trong 7 ngày trial.</li>
      <li><b>Lỗi thanh toán tăng</b> ở một quốc gia hoặc phương thức thanh toán. Kiểm tra: tỉ trọng “billing issue” trong nhóm không trả tiền, theo quốc gia và ngày.</li>
      <li><b>Giá, store, bên ngoài:</b> đổi giá, giá theo quốc gia bị điều chỉnh, đối thủ khuyến mãi, mùa vụ. Kiểm tra: lịch sử giá trong App Store Connect / Play Console, so với các thị trường khác.</li>
    </ol>
    <p><b>5. Giả sử dữ liệu trả về như sau</b> (giả định, chỉ cohort đã đủ 7 ngày):</p>
<pre>                    2 tuần trước    2 tuần này
install → trial         6,0%           7,5%
trial → paid            35%            28%
install → paid          2,1%           2,1%
trial tắt gia hạn
trong 24 giờ đầu        20%            36%

Chỉ xảy ra ở bản 3.8 (cả iOS và Android).
Bản 3.8: nút đóng paywall onboarding mờ hơn
và chỉ hiện sau 5 giây.</pre>
    <p><b>6. Kết luận và quyết định.</b> Doanh thu chưa giảm: 6,0% × 35% = 7,5% × 28% = 2,1% install → paid. Trial-to-paid giảm vì mẫu số phình bởi những trial bắt đầu ngoài ý muốn rồi bị tắt ngay. Vẫn phải sửa: Google Play liệt kê “nút đóng bị thiếu hoặc khó thấy” là ví dụ vi phạm chính sách Subscriptions, Apple (Guideline 3.1.2(a)) gỡ app lừa người dùng đăng ký; thêm rủi ro refund và review 1 sao, mà không được thêm đồng nào. Việc làm: trả nút đóng về như cũ (tắt bằng feature flag nếu có, không thì hotfix 3.8.1); theo dõi 14 ngày install → paid, refund rate, rating; sửa dashboard để trial-to-paid chỉ tính cohort đã kết thúc trial; báo cáo tuần thêm install → paid và net revenue / install. Muốn tăng trial thật thì làm A/B test có metric doanh thu và guardrail (bài mẫu 2).</p>
    <p><b>7. Báo stakeholder</b> (Head of Product, Marketing, Dev lead):</p>
<pre>Trial → paid: 35% → 28% (cohort đã đủ 7 ngày).
Doanh thu chưa giảm: install → paid giữ 2,1%.
Nguyên nhân: bản 3.8 làm nút đóng paywall khó
thấy, thêm nhiều trial ngoài ý muốn, tắt ngay.
Rủi ro: chính sách store, refund, review 1 sao.
Việc làm:
- Dev: trả nút đóng như cũ, hotfix 3.8.1 hôm nay
- Data: sửa dashboard theo cohort đã đủ ngày
- PO: theo dõi install → paid, refund, rating
  trong 14 ngày
Cập nhật tiếp: thứ Sáu.</pre>
    <p class="muted" style="font-size:13.5px">Nhánh interviewer hay đẩy tiếp: “install → paid cũng giảm, chỉ ở Android một quốc gia”. Khi đó tách tắt gia hạn và lỗi thanh toán; nếu lỗi thanh toán tăng thì xem grace period / account hold đã bật chưa (Google Play: trong grace period người dùng vẫn giữ quyền lợi, sang account hold thì phải chặn), phương thức thanh toán nào bị từ chối, từ ngày nào, rồi báo team và đối tác thanh toán. Ý chính interviewer muốn nghe: kiểm tra dữ liệu trước khi tìm thủ phạm, nhìn metric doanh thu bên cạnh metric tỉ lệ, và kết thúc bằng quyết định có người phụ trách, không dừng ở danh sách giả thuyết.</p>
  </div>

  <div class="box">
    <h3>Bài mẫu nên thuộc 2: thiết kế A/B test paywall (annual có trial vs weekly)</h3>
    <p><b>Bối cảnh (giả định).</b> Paywall onboarding hiện chọn sẵn gói năm $29.99 có trial 7 ngày, gói tuần $3.99 không trial là lựa chọn phụ. Ý tưởng: chọn sẵn gói tuần. Chỉ đổi một biến là gói được chọn sẵn và làm nổi bật; giá, nội dung, vị trí paywall giữ nguyên ở cả hai nhóm. Gói tuần là kỳ ngắn nhất Apple cho phép (subscription tối thiểu 7 ngày, Guideline 3.1.2(a)).</p>
<pre>Giả thuyết: chọn sẵn gói tuần thay cho gói năm
có trial sẽ tăng net revenue dự kiến 12 tháng
trên mỗi user mới ≥ 10%, vì nhiều người trả
tiền ngay thay vì bỏ trial, trong khi refund,
D7 retention và rating không xấu đi.

A (control): chọn sẵn năm $29.99 + trial 7 ngày
B: chọn sẵn tuần $3.99, gói năm là lựa chọn phụ
Đơn vị: user (App User ID), chỉ user mới,
  random 50/50 ở lần mở app đầu, giữ cố định
Phân tích: mọi user được chia (kể cả người
  không thấy paywall); thêm bản chỉ tính người
  đã thấy paywall để tăng độ nhạy</pre>
    <p><b>Metric chính:</b> net revenue / user dự kiến 12 tháng (pLTV12) = doanh thu net thực nhận trong 28 ngày đầu (sau phí store 15% giả định, trừ refund) cộng phần dự phóng theo đường gia hạn lịch sử của từng gói. Vì sao không chỉ dùng conversion:</p>
    <ul>
      <li>Hai nhóm không đo cùng một sự kiện: A chủ yếu là bắt đầu trial (chưa trả đồng nào), B là trả tiền ngay.</li>
      <li>Một người mua gói tuần không bằng một người mua gói năm: giữ 8 tuần thì gross 8 × $3.99 = $31.92, chỉ giữ 3 tuần thì $11.97. Conversion không phân biệt được.</li>
      <li>Gói năm trả trước, gói tuần trả dần và rời nhanh, nên doanh thu 28 ngày cũng thiên vị gói năm; cần dự phóng LTV và giữ holdout để kiểm chứng.</li>
      <li>Kohavi (2007): conversion có độ lệch chuẩn thấp hơn doanh thu nên cần ít user hơn để đủ power. Tiện, nhưng trả lời sai câu hỏi khi hai nhóm bán ở hai mức giá. RevenueCat: mục tiêu của test giá là tìm mức cho LTV trên mỗi khách cao nhất, và tài liệu Experiments viết Realized LTV per customer (doanh thu net tới hiện tại / số khách trong nhóm) thường nên là metric chính.</li>
    </ul>
    <p><b>Guardrail:</b> refund rate (số khách bị refund / số khách trả tiền), D7 retention của mọi user trong nhóm (giả định đang 14%), điểm rating trung bình của review mới và số review nhắc “bị trừ tiền”, crash-free users. Cả hai nhóm đều phải hiển thị đủ giá, chu kỳ, tự gia hạn, điều khoản trial (Apple 3.1.2(c), chính sách Subscriptions của Google Play).</p>
    <p><b>Cỡ mẫu và thời gian:</b></p>
<pre>Quy tắc: n ≈ 16·σ²/δ² mỗi nhóm
(power 80%, α = 0,05 hai phía; Kohavi và cs.)
Với tỉ lệ p: σ² = p(1 − p)

1) Payer rate (mọi user mới, giả định):
   p = 6% × 35% + 1% = 3,1%
   MDE tương đối 10% → δ = 0,31 điểm %
   n = 16 × 0,031 × 0,969 / 0,0031²
     = 0,4806 / 0,00000961
     ≈ 50.000 user / nhóm

2) Doanh thu / user (metric chính):
   δ = 10% × μ nên n = 16 × (σ/μ)² / 0,1²
   97% user trả 0 → σ/μ ≥ √(0,969/0,031) ≈ 5,6
   Giả định σ/μ = 6 (lấy số thật 4 tuần gần nhất)
   n = 16 × 36 / 0,01 = 57.600 user / nhóm

Lấy số lớn hơn: 2 × 57.600 = 115.200 user mới
Traffic: 150.000 / 30 = 5.000 user mới / ngày
115.200 / 5.000 ≈ 23 ngày → chạy tròn 28 ngày
(4 tuần đủ chu kỳ, 140.000 user, dư power)
Mỗi user theo dõi 28 ngày → đọc kết quả ngày 56</pre>
    <p class="muted" style="font-size:13.5px">Test giá và paywall phải chạy lâu hơn test giao diện vì tiền về muộn: trial 7 ngày mới thu tiền, gói tuần gia hạn mỗi tuần, refund đến sau. RevenueCat cho kết quả tiếp tục cập nhật 400 ngày sau khi dừng experiment để Realized LTV “chín” dần. Không có dữ liệu thật thì nói rõ σ/μ là giả định và sẽ đo lại từ 4 tuần gần nhất trước khi chốt cỡ mẫu.</p>
    <p><b>Đọc kết quả:</b></p>
<pre>Ngày 1–3: kiểm tra sức khỏe, không đọc kết quả
- SRM: chi-square trên số user mỗi nhóm,
  p &lt; 0,0005 → dừng, tìm lỗi chia nhóm
- Giá, điều khoản hiển thị đúng từng quốc gia
- Event purchase, trial về đủ ở cả 2 nền tảng
Hằng tuần: chỉ xem guardrail (cho phép dừng sớm)
Ngày 56: đọc metric chính một lần
- pLTV12 / user: chênh lệch B − A, CI 95%
- Phụ: payer rate, trial start, trial → paid,
  gia hạn tuần 1 → tuần 4, refund, D7, D28
- Segment đã định trước: iOS / Android,
  nhóm thị trường (US, UK, DE) và (BR, VN)</pre>
    <p><b>Luật quyết định</b> (chốt trước khi chạy, ngưỡng là lựa chọn của team):</p>
<pre>Ship B khi đủ cả 3:
1. Không có SRM
2. pLTV12 / user: CI 95% của B − A nằm trên 0
3. Không chạm guardrail:
   refund rate tăng ≤ 1 điểm %
   D7 retention giảm ≤ 1 điểm % (14% → ≥ 13%)
   rating review mới giảm ≤ 0,2 sao
Giữ A khi CI chứa 0, B thua, hoặc chạm guardrail.
B chỉ thắng nhờ phần dự phóng (doanh thu thực
28 ngày thua): ship B cho 90%, giữ 10% ở A
thêm 12 tuần để xác nhận bằng tiền thật.
Thắng ở một nhóm nước, thua ở nhóm kia: không
ship theo nước từ kết quả này, chạy test mới
đã định trước theo nhóm nước.</pre>
    <p class="muted" style="font-size:13.5px">Không quyết định giữa chừng khi thấy p &lt; 0,05: Evan Miller chỉ ra rằng nhìn kết quả nhiều lần và dừng ngay khi “có ý nghĩa” làm tỉ lệ dương tính giả tăng mạnh (trong ví dụ của ông là 26,1% thay vì 5%). Chỉ guardrail mới được phép dừng sớm. Có thể chạy bằng RevenueCat Experiments (gói Pro và Enterprise) vì nó test được giá, offer và paywall, theo dõi refund và churn; tự làm bằng feature flag thì phải tự nối doanh thu theo App User ID.</p>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample review: find the issues in 10 minutes</span></h3>
<pre>PRD: Paywall v2 (Expense Tracker)
Mục tiêu: tăng net revenue / user mới 10% trong Q4
Metric thành công: tỉ lệ bấm “Start free trial”

User story PAY-212
As a user, I want a new paywall, a weekly plan
at $4.99, trial reminders and dark mode
so that the app is better.

Acceptance criteria
- Paywall đẹp, load nhanh.
- Người dùng dễ hiểu các gói.
- Nút “Start free trial” to, nổi bật; gói năm
  ghi “$2.50/month” cỡ lớn; bỏ dòng giá sau
  trial và điều khoản gia hạn cho gọn.

Kết quả A/B test (gửi Slack, ngày thứ 3)
Đơn vị random: session (mỗi lần mở app chia lại)
Cấu hình: 50/50
Người thấy paywall: A 10.400 · B 9.600
Tỉ lệ bấm trial: A 6,0% · B 6,9% (+15%)
p = 0,03 → dừng test, ship B cho 100%.
Guardrail: chưa cần, tuần sau xem.</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (8 lỗi)</span><span class="l-en">Show the answer (8 issues)</span></span></summary><div class="ans">
    <ol class="l-vi" style="margin:0;padding-left:20px;display:grid;gap:4px">
      <li><b>[Chặn phát hành] Thiếu thông tin giá bắt buộc:</b> bỏ giá sau trial và điều khoản gia hạn, gói năm hiển thị to theo giá tháng. Apple 3.1.2(c) yêu cầu nói rõ người dùng nhận được gì với mức giá đó trước khi mời đăng ký; Google Play liệt kê đúng các ví dụ vi phạm: gói năm hiển thị nổi bật nhất theo giá tháng, offer nhấn mạnh trial, số tiền bị trừ sau trial khó đọc. Sửa: “7 ngày miễn phí, sau đó $29.99/năm, tự gia hạn, hủy bất cứ lúc nào”, giá năm là con số nổi bật, giá quy đổi tháng chỉ là phụ.</li>
      <li><b>[Nghiêm trọng] Sample ratio mismatch:</b> cấu hình 50/50 thì mỗi nhóm kỳ vọng 10.000. Chi-square = 400²/10.000 + 400²/10.000 = 32, 1 bậc tự do, p ≈ 1,5 × 10⁻⁸, thấp hơn rất xa ngưỡng 0,0005 mà Microsoft ExP dùng. Không tin bất kỳ con số nào của test cho tới khi tìm ra nguyên nhân (cách random theo session, paywall B tải chậm nên ít người thấy, lỗi log).</li>
      <li><b>[Nghiêm trọng] Random theo session, không theo user:</b> cùng một người thấy cả A và B, thấy hai mức giá tuần khác nhau, nên nhiễm chéo, gây mất lòng tin, và không gán được doanh thu về một nhóm. Random theo user (App User ID), cố định suốt test, chỉ user mới.</li>
      <li><b>[Cao] Peeking:</b> dừng ở ngày 3 vì p = 0,03. Nhìn nhiều lần và dừng ngay khi có ý nghĩa làm tỉ lệ dương tính giả tăng nhiều lần; 3 ngày chưa đủ một chu kỳ tuần và chưa trial nào kết thúc. Cố định cỡ mẫu và ngày đọc kết quả trước khi chạy.</li>
      <li><b>[Cao] Metric chỉ là tỉ lệ bấm trial trên một test có đổi giá:</b> bấm trial chưa phải trả tiền, và tăng giá tuần từ $3.99 lên $4.99 không hiện ra trong metric này. Mục tiêu PRD là net revenue / user nên metric chính phải là doanh thu (Realized LTV per customer hoặc pLTV), payer rate chỉ là metric phụ.</li>
      <li><b>[Cao] Không có guardrail:</b> thiếu refund rate, D7 retention, rating, tỉ lệ tắt gia hạn trong 24 giờ đầu. “Tuần sau xem” nghĩa là xem sau khi đã ship cho 100% người dùng.</li>
      <li><b>[Trung bình] User story gộp nhiều tính năng:</b> paywall mới, giá tuần mới, nhắc trial và dark mode trong một story, “so that the app is better” không nói giá trị cho ai. Không đạt INVEST (Bill Wake): không Small, không Testable. Trong A/B test, gộp đổi giá với đổi thiết kế khiến không biết thay đổi nào tạo ra kết quả. Tách: story paywall, story giá (test riêng), story nhắc trial; dark mode về backlog khác.</li>
      <li><b>[Trung bình] Acceptance criteria không kiểm thử được:</b> “đẹp”, “load nhanh”, “dễ hiểu” không có ngưỡng. Viết lại có số và Given/When/Then, ví dụ: Given người dùng mới ở Đức, When paywall mở, Then giá lấy từ store theo đúng locale, hiển thị trong ≤ 1 giây trên máy mạng 4G, nút đóng hiện ngay từ đầu.</li>
    </ol>
    <ol class="l-en" style="margin:0;padding-left:20px;display:grid;gap:4px">
      <li><b>[Release blocker] Required price disclosure is missing:</b> the post-trial price and renewal terms are dropped, and the annual plan is shown big as a monthly price. Apple 3.1.2(c) says you must clearly describe what users get for the price before asking them to subscribe, and Google Play lists exactly these as non-compliant: an annual plan shown most prominently as a monthly cost, an offer that emphasizes the free trial, and a post-trial charge that is hard to read. Fix: “7 days free, then $29.99/year, renews automatically, cancel anytime”, with the annual price as the most prominent number and the monthly equivalent secondary.</li>
      <li><b>[Critical] Sample ratio mismatch:</b> a 50/50 split means 10,000 expected per arm. Chi-square = 400²/10,000 + 400²/10,000 = 32 with 1 degree of freedom, p ≈ 1.5 × 10⁻⁸, far below the 0.0005 threshold Microsoft ExP uses. Don't trust any number from this test until you find the cause (session-level randomization, variant B loading slower so fewer people see it, a logging bug).</li>
      <li><b>[Critical] Randomized by session, not by user:</b> the same person sees both A and B, and two different weekly prices, so the arms contaminate each other, users lose trust, and revenue can't be attributed to one arm. Randomize by user (App User ID), keep the assignment for the whole test, new users only.</li>
      <li><b>[High] Peeking:</b> stopping on day 3 because p = 0.03. Checking repeatedly and stopping as soon as it looks significant multiplies the false-positive rate; three days doesn't cover a weekly cycle and no trial has even ended. Fix the sample size and readout date before you start.</li>
      <li><b>[High] Trial-tap rate as the only metric on a test that changes price:</b> tapping “Start free trial” isn't paying, and the weekly price going from $3.99 to $4.99 doesn't show up in that metric at all. The PRD goal is net revenue per user, so the primary metric has to be revenue (Realized LTV per customer or projected LTV), with payer rate as a secondary.</li>
      <li><b>[High] No guardrails:</b> no refund rate, D7 retention, ratings, or share of trials cancelled in the first 24 hours. “We'll look next week” means looking after it has shipped to 100% of users.</li>
      <li><b>[Medium] The user story bundles several features:</b> a new paywall, a new weekly price, trial reminders and dark mode in one story, and “so that the app is better” says nothing about value for whom. It fails INVEST (Bill Wake): not Small, not Testable. In an A/B test, bundling a price change with a design change means you can't tell which one moved the result. Split it: a paywall story, a pricing story (tested separately), a trial-reminder story, and dark mode goes to another part of the backlog.</li>
      <li><b>[Medium] Acceptance criteria you can't test:</b> “looks nice”, “loads fast”, “easy to understand” have no threshold. Rewrite them with numbers and Given/When/Then, for example: Given a new user in Germany, When the paywall opens, Then prices come from the store for the right locale, it renders within 1 second on a 4G connection, and the close button is visible from the start.</li>
    </ol></div></details>
    <p class="muted" style="font-size:13.5px">Khi trình bày, xếp theo mức nghiêm trọng: lỗi chính sách (có thể bị từ chối khi review hoặc bị gỡ app) và lỗi làm dữ liệu không đáng tin (SRM, random theo session) trước, rồi tới cách đọc kết quả (peeking, metric, guardrail), cuối cùng là chất lượng story và acceptance criteria. Câu hỏi tiếp theo hay gặp: “Vậy bạn viết lại test này thế nào?”. Trả lời bằng khung của bài mẫu 2.</p>
  </div>

  <div class="box">
    <h3>Bài take-home thường gặp và cách nộp</h3>
    <p>Đề hay gặp ở công ty app (tổng hợp, chưa có nguồn công khai riêng cho app studio Việt Nam): đề xuất tăng trial-to-paid hoặc doanh thu paywall cho một app có sẵn; PRD kèm user story và acceptance criteria cho một tính năng; backlog và roadmap một quý; kế hoạch user research hoặc phân tích đối thủ bằng dữ liệu store; phân tích một file funnel / cohort / kết quả A/B test.</p>
    <ul>
      <li><b>Hỏi trước:</b> thời gian kỳ vọng, định dạng (doc hay slide), có dữ liệu kèm không, có được dùng AI không. Aced: dùng AI để làm là bình thường, cái được chấm là phán đoán của bạn khi debrief.</li>
      <li><b>Mở đầu bằng khuyến nghị:</b> một trang tóm tắt nói chọn gì, tác động dự kiến, cần gì, rủi ro lớn nhất. Không mở bằng ba trang bối cảnh.</li>
      <li><b>Giả định:</b> ghi rõ số nào có nguồn, số nào tự đặt; người chấm sẽ hỏi đúng chỗ này.</li>
      <li><b>Metric:</b> một metric chính gắn với doanh thu hoặc giá trị, có guardrail (theo Aced là phần bị bỏ nhiều nhất), giả thuyết kiểm chứng được và ngưỡng thành công.</li>
      <li><b>Chọn một hướng:</b> nói rõ các phương án đã loại và vì sao (Aced chấm “point of view”, RocketBlocks khuyên chuẩn bị bảo vệ cả các phương án đã bỏ).</li>
      <li><b>Cho xem thay vì kể:</b> flow, wireframe Figma, biểu đồ funnel (RocketBlocks).</li>
      <li><b>Rủi ro và lỗ hổng:</b> tự nêu điểm yếu và cách giảm, kể cả rủi ro chính sách App Store / Google Play.</li>
      <li><b>Bước tiếp theo:</b> hai sprint đầu làm gì, ai làm, đo gì, khi nào quyết định.</li>
      <li><b>Độ dài</b> (gợi ý của tài liệu này, không phải chuẩn): doc 3–5 trang hoặc 10–12 slide, phần tính toán để ở phụ lục.</li>
      <li><b>Debrief:</b> chuẩn bị “nếu ship ngày mai bạn sẽ đổi gì?”, “nếu test thua thì sao?”, “ai trong công ty sẽ phản đối?” (Aced). Đừng đọc lại tài liệu, hãy giải thích vì sao bạn quyết định từng chỗ.</li>
    </ul>
<pre>Đề: Tăng trial-to-paid của Expense Tracker (Q4)

0. Tóm tắt 1 trang
   Khuyến nghị · tác động dự kiến · cần gì · rủi ro
1. Bối cảnh và giả định
   Số đang có (nguồn hoặc “giả định”), câu đã hỏi
2. Vấn đề
   Funnel install → paywall → trial → paid
   Insight: dữ liệu + review store + 5 phỏng vấn
   Nhóm người dùng mục tiêu, job cần làm
3. Ba phương án và vì sao chọn một
   Tác động · công sức · độ tin · rủi ro
4. Giải pháp đã chọn
   Flow + wireframe, user story chính + AC
   Đối chiếu chính sách App Store / Google Play
5. Đo lường
   Metric chính · guardrail · giả thuyết
   A/B test: đơn vị, cỡ mẫu, thời gian, luật chốt
6. Kế hoạch
   MVP 2 sprint, rollout theo giai đoạn, ai làm
7. Rủi ro và câu hỏi mở
8. Phụ lục: tính toán, dữ liệu, nguồn</pre>
    <p class="muted" style="font-size:13.5px">GitLab chấm cả phần viết sau buổi Deep Dive (vài issue) và cách bạn sửa theo phản hồi, nên nếu nhận feedback sau khi nộp thì trả lời nhanh, sửa đúng chỗ, ghi lại thay đổi. Nếu đề cần nhiều hơn thời gian được gợi ý, hỏi lại phạm vi thay vì tự làm thêm, và ghi trong tài liệu phần nào bạn cố ý chưa làm.</p>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted" style="font-size:14px">Bấm giờ, nói thành tiếng, ghi âm hoặc quay màn hình rồi tự chấm theo bảng “Cách chấm”. Bài 2 và 5 sát JD B nhất; bài 6 làm mỗi ngày trong tuần cuối.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Đề</th><th>Thời gian</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td><b>Product sense:</b> tăng D7 retention của người dùng mới Expense Tracker ở Mỹ (giả định D7 đang 14%). Chọn một phân khúc, một vấn đề, ba giải pháp, chọn một, metric chính + guardrail, MVP trong một sprint.</td><td class="mono">25′</td></tr>
          <tr><td class="mono">2</td><td><b>Metric RCA:</b> D1 retention Android giảm từ 30% xuống 24% ba ngày sau khi phát hành bản 3.9. Đi hết checklist, kết thúc bằng tin nhắn 6 dòng gửi stakeholder.</td><td class="mono">20′</td></tr>
          <tr><td class="mono">3</td><td><b>Estimation:</b> doanh thu mỗi tuần của một app quản lý chi tiêu top 5 ở Đức. Dựng cây: người dùng trả tiền theo từng gói × giá quy về tuần; tách thuế (VAT) và phí store khỏi doanh thu gross; nói giả định nào yếu nhất và tự kiểm tra con số. Nếu có quyền truy cập Sensor Tower hoặc AppMagic thì đối chiếu, nhớ đó cũng chỉ là ước tính.</td><td class="mono">15′</td></tr>
          <tr><td class="mono">4</td><td><b>Ưu tiên:</b> sprint 2 tuần chỉ làm được 3 trong 6 mục: crash khi sync trên Android, A/B test paywall chọn sẵn gói tuần, dark mode (được xin nhiều nhất trên review), localize trang store tiếng Đức, quét hóa đơn bằng camera, nâng cấp thư viện thanh toán theo yêu cầu của store. Chấm RICE (Intercom), rồi nói trade-off với dev lead và Marketing.</td><td class="mono">20′</td></tr>
          <tr><td class="mono">5</td><td><b>Paywall teardown app thật:</b> chọn một app quản lý chi tiêu trong top kết quả tìm “budget” trên App Store hoặc Google Play Mỹ; cài, chụp từng màn từ onboarding tới paywall; chỉ ghi những gì nhìn thấy (gói, giá, trial, gói chọn sẵn, nút đóng, dòng điều khoản), không đoán doanh thu hay conversion; đối chiếu Apple 3.1.2(c) và chính sách Subscriptions của Google Play; đề xuất 2 A/B test có metric chính và guardrail.</td><td class="mono">30′</td></tr>
          <tr><td class="mono">6</td><td><b>Tự giới thiệu bằng tiếng Anh:</b> 90 giây theo 3 ý (tên và số năm kinh nghiệm liên quan; một kết quả có số; vì sao muốn làm PO app mobile / monetization), rồi trả lời “Tell me about a product decision you made with data” trong 2 phút. Ghi âm, nghe lại, cắt chỗ ậm ừ.</td><td class="mono">10′</td></tr>
          <tr><td class="mono">7</td><td><b>Behavioral (STAR):</b> “Developer báo không kịp làm hết scope trước ngày release, bạn làm gì?” và “Tell me about a time you failed”. Mỗi câu tối đa 2 phút, có số, có bài học và việc bạn đã làm khác đi sau đó.</td><td class="mono">15′</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:13.5px">Thêm hai bài không bấm giờ: làm bài review mẫu ở trên trong 10′ rồi viết lại thành một test đúng; làm trọn một take-home theo khung trên (giới hạn 4 giờ) và nhờ bạn đóng vai interviewer hỏi dồn 20′. Tuần cuối, chạy lại bài mẫu 1 và 2 bằng tiếng Anh vì vòng 2 có thể chuyển ngôn ngữ giữa chừng.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://itviec.com/blog/kinh-nghiem-tra-loi-phong-van-code/" target="_blank" rel="noopener">ITviec · CIO chia sẻ kinh nghiệm phỏng vấn chuyên môn IT (PO/BA tối đa 2 vòng, trình bày giải pháp)</a></li>
      <li><a href="https://topdev.vn/blog/cau-hoi-phong-van-product-owner/" target="_blank" rel="noopener">TopDev · Câu hỏi phỏng vấn Product Owner thường gặp</a></li>
      <li><a href="https://topdev.vn/blog/phong-van-product-manager-gioi-thieu-ve-ban-than-sao-cho-an-tuong/" target="_blank" rel="noopener">TopDev · Phỏng vấn Product Manager: giới thiệu bản thân</a></li>
      <li><a href="https://handbook.gitlab.com/job-families/product/product-manager/" target="_blank" rel="noopener">GitLab Handbook · Product Manager job family (interview process)</a></li>
      <li><a href="https://handbook.gitlab.com/handbook/product/product-management/product-manager-role/" target="_blank" rel="noopener">GitLab Handbook · The Product Manager Role (Deep Dive interview)</a></li>
      <li><a href="https://lennysnewsletter.com/p/how-to-interview-product-managers" target="_blank" rel="noopener">Lenny's Newsletter · How to interview product managers (2022)</a></li>
      <li><a href="https://www.aced.io/blog/ace-the-pm-take-home-assignment" target="_blank" rel="noopener">Aced (formerly Exponent) · Ace the PM take-home assignment</a></li>
      <li><a href="https://www.rocketblocks.me/blog/pm-interview-homework-assignment.php" target="_blank" rel="noopener">RocketBlocks · How to master the PM homework assignment</a></li>
      <li><a href="https://rocketblocks.me/guide/pm/estimation-interviews.php" target="_blank" rel="noopener">RocketBlocks · PM estimation interviews</a></li>
      <li><a href="https://www.barraiser.com/interviewing-guides/product-owner" target="_blank" rel="noopener">BarRaiser · Product Owner interviewing guide</a></li>
      <li><a href="https://gopractice.io/skills/product-manager-interview/" target="_blank" rel="noopener">GoPractice · Product manager interview</a></li>
      <li><a href="https://www.lewis-lin.com/" target="_blank" rel="noopener">Lewis C. Lin · CIRCLES Method creator, Decode and Conquer</a></li>
      <li><a href="https://productplan.com/glossary/circles-method" target="_blank" rel="noopener">ProductPlan · CIRCLES Method</a></li>
      <li><a href="https://productcafe.substack.com/p/interview-questions-favorite-product" target="_blank" rel="noopener">Product Cafe · Interview questions: favorite product</a></li>
      <li><a href="https://inflectionpointnewsletter.substack.com/p/a-guide-to-root-cause-analysis-problems" target="_blank" rel="noopener">Inflection Point · A guide to root cause analysis problems</a></li>
      <li><a href="https://exp-platform.com/abtestingintuitionbusters/" target="_blank" rel="noopener">Kohavi, Deng, Vermeer · A/B Testing Intuition Busters (KDD 2022, n = 16σ²/δ²)</a></li>
      <li><a href="https://exp-platform.com/Documents/GuideControlledExperiments.pdf" target="_blank" rel="noopener">Kohavi, Henne, Sommerfield · Practical Guide to Controlled Experiments on the Web (KDD 2007)</a></li>
      <li><a href="https://www.evanmiller.org/how-not-to-run-an-ab-test.html" target="_blank" rel="noopener">Evan Miller · How Not To Run an A/B Test</a></li>
      <li><a href="https://www.microsoft.com/en-us/research/articles/diagnosing-sample-ratio-mismatch-in-a-b-testing/" target="_blank" rel="noopener">Microsoft ExP · Diagnosing Sample Ratio Mismatch in A/B Testing</a></li>
      <li><a href="https://developer.apple.com/app-store/review/guidelines/" target="_blank" rel="noopener">Apple · App Store Review Guidelines (3.1.2 Subscriptions)</a></li>
      <li><a href="https://developer.apple.com/help/app-store-connect/manage-subscriptions/enable-billing-grace-period-for-auto-renewable-subscriptions" target="_blank" rel="noopener">App Store Connect Help · Enable Billing Grace Period</a></li>
      <li><a href="https://support.google.com/googleplay/android-developer/answer/9900533?hl=en" target="_blank" rel="noopener">Google Play Console Help · Subscriptions policy</a></li>
      <li><a href="https://developer.android.com/google/play/billing/lifecycle/subscriptions" target="_blank" rel="noopener">Android Developers · Subscription lifecycle (grace period, account hold)</a></li>
      <li><a href="https://www.revenuecat.com/docs/tools/experiments-v1/experiments-results-v1" target="_blank" rel="noopener">RevenueCat Docs · Experiments results (Realized LTV per customer)</a></li>
      <li><a href="https://www.revenuecat.com/docs/tools/experiments-v1" target="_blank" rel="noopener">RevenueCat Docs · Experiments overview</a></li>
      <li><a href="https://www.revenuecat.com/blog/engineering/price-testing-for-mobile-apps" target="_blank" rel="noopener">RevenueCat Blog · How to run A/B price tests in your mobile app</a></li>
    </ul>
  </div>`
};
