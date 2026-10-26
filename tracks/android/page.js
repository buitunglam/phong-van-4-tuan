/* Android: static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. */
const AN_PAGE={
 hero:`  <span class="eyebrow">Lộ trình phỏng vấn · Android native (Kotlin) · 10/2026</span>
  <h1>Android Kotlin trong 4 tuần</h1>
  <p class="lede">Tổng hợp từ các JD Android native trên ITviec, TopDev, TopCV, JobsGO, VietnamWorks, LinkedIn và các trang tuyển dụng quốc tế (Greenhouse, Lever, Ashby, Workable, Djinni). Cùng cấu trúc với lộ trình React Native và Flutter.</p>`,

 jd:`  <div style="display:grid;gap:8px">
    <h2>Các JD Android native thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 28 JD có đủ thông tin kỹ năng: 19 JD Việt Nam đọc được toàn văn (15 Senior trở lên) và 9 JD quốc tế (8 đọc toàn văn, 1 qua đoạn trích). TopCV và JobsGO chặn đọc chi tiết nên các tin ở đó chỉ dùng đoạn trích của công cụ tìm kiếm và không tính vào bảng tần suất. Senior thường không liệt kê thư viện cụ thể, nên các con số như Retrofit hay Room thấp hơn thực tế sử dụng.</p>
  </div>
  <div class="box"><div class="freq" id="an-freq"></div></div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li>Kotlin vững: null safety, sealed / data class, generics, coroutines &amp; Flow</li>
        <li>Android SDK: lifecycle, process death, background work, permission</li>
        <li>Kiến trúc: <b>MVVM / MVI</b>, Clean Architecture, SOLID, DI (Hilt / Dagger / Koin)</li>
        <li>Jetpack Compose cho UI mới, vẫn đọc và sửa được XML View</li>
        <li>Jetpack: ViewModel, Navigation, Room, WorkManager, DataStore</li>
        <li>Unit test và UI test (JUnit, MockK/Mockito, Espresso, Compose test)</li>
        <li>Hiệu năng: memory, ANR, startup, profiling</li>
        <li>Mentor, code review, chịu trách nhiệm kiến trúc (với Senior)</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li>Bảo mật cho fintech: R8/Dexguard, Keystore, Play Integrity, chống giả mạo</li>
        <li>CI/CD: GitHub Actions, Bitrise, Fastlane, GitLab CI; phát hành Play Store</li>
        <li>Modularization, dynamic feature, Gradle convention plugin</li>
        <li>Biết thêm iOS (Swift), Flutter hoặc React Native</li>
        <li>Kotlin Multiplatform (mới xuất hiện ở 2/28 JD)</li>
        <li>Dùng AI coding tool (Claude Code, Copilot) và làm tính năng LLM (Gemini Nano)</li>
        <li>Tiếng Anh làm việc trực tiếp với khách hàng nước ngoài</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Senior trên ITviec, TopDev, TopCV</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>GoTymeX</b> <span class="mono muted">ITviec · fintech</span></td><td class="mono">3+ năm</td><td>MVVM/MVI, test tự động, memory và performance, mentor; <b>KMM là điểm cộng lớn</b>, Dexguard/ProGuard, feature flag (LaunchDarkly)</td></tr>
          <tr><td><b>Grab Vietnam</b> <span class="mono muted">ITviec</span></td><td class="mono">5+ năm</td><td>Kotlin + Java, MVVM/MVP/Clean, JUnit/Espresso/Mockito, đã ship app production, review code, mentor junior</td></tr>
          <tr><td><b>ANDPAD</b> <span class="mono muted">ITviec · Principal</span></td><td class="mono">8+ năm</td><td>Clean Architecture + SOLID, Compose, tech lead, bảo mật, REST/GraphQL; CircleCI/Bitrise/Fastlane/GitHub Actions. Công ty Nhật nhưng yêu cầu tiếng Anh</td></tr>
          <tr><td><b>One Mount</b> <span class="mono muted">ITviec · fintech</span></td><td class="mono">5+ năm</td><td>Hiểu sâu SDK và framework, memory JVM/ART, multithreading; tối ưu CPU/pin; biết thêm Flutter/RN là điểm cộng</td></tr>
          <tr><td><b>KMS Technology</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">4+ năm</td><td>Danh sách Jetpack đầy đủ: StateFlow, Navigation, Room, WorkManager, Compose, Hilt, Coroutines; ComposeTestRule, R8, Detekt, SonarQube</td></tr>
          <tr><td><b>EyeClick</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">6+ năm</td><td>Multi-module, MVVM + Compose, Coroutines/Flow, Dagger/Koin; giao tiếp hoàn toàn bằng tiếng Anh</td></tr>
          <tr><td><b>ZALORA</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">5+ năm</td><td>Offline storage, concurrency, tối ưu hiệu năng, multi-module; Compose ở mức “quen thuộc”</td></tr>
          <tr><td><b>Ahamove</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">5+ năm</td><td>Compose, MVVM/MVI; <b>Gemini Nano on-device, Gemini/Claude API, đã ship ít nhất một tính năng LLM</b></td></tr>
          <tr><td><b>Blue Belt</b> <span class="mono muted">ITviec · hết hạn</span></td><td class="mono">5+ năm</td><td>Custom View/ViewGroup, touch dispatch, TDD, profiling, caching. $2.000–4.000/tháng</td></tr>
          <tr><td><b>VietUnion (Payoo)</b> <span class="mono muted">TopCV · bản đầy đủ trên site công ty</span></td><td class="mono">5+ năm</td><td>MVVM/MVI, Compose <b>và/hoặc</b> UI View lớn, CI/CD, test tự động, profiling, dẫn dắt thảo luận kiến trúc</td></tr>
          <tr><td><b>Megazone</b> <span class="mono muted">TopDev · 2024</span></td><td class="mono">5+ năm</td><td>Coroutines/Hilt/Room, Material 3, Canvas, TCP socket. Tối đa $2.000</td></tr>
          <tr><td><b>VPBank (NEO)</b> <span class="mono muted">Tuổi Trẻ Việc Làm · hết hạn</span></td><td class="mono">3+ năm</td><td>Compose + Custom View, RxJava/Coroutines/Flow, bảo mật app ngân hàng, Dynamic Features / Asset Delivery, Flutter, TOEIC 650+</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Senior khác Middle ở phạm vi chứ không ở danh sách thư viện:</b> JD Middle liệt kê thư viện (Retrofit, Room, Hilt, Firebase 4/4). JD Senior nhắc hiệu năng và profiling (13/15), mentor và review (11/15), bảo mật (7/15) và kỹ năng iOS/Flutter/RN (8/15, Middle 0/4). Từ Staff/Principal trở lên (8–10+ năm) JD gần như không nêu tên thư viện mà nói về SDK design và kiến trúc đa nền tảng.</li>
      <li><b>Compose là mặc định, View vẫn còn:</b> mọi JD Middle mới đều đòi Compose; JD Senior thường ghi “Compose và/hoặc View-based UI” vì phải bảo trì codebase lẫn Kotlin/Java. Java vẫn xuất hiện ở 14/28 JD. Android 17 (06/2026) chính thức “Compose-first”: API mới chỉ làm cho Compose.</li>
      <li><b>Fintech và ngân hàng</b> chiếm phần lớn nhu cầu Senior (GoTymeX, One Mount, VPBank, Payoo, Woori, GeoComply), kéo theo yêu cầu bảo mật, chống giả mạo và hiểu sâu memory/ART.</li>
      <li><b>AI đã vào JD:</b> Uplive bắt buộc dùng Claude Code / Copilot hằng ngày; Ahamove đòi đã ship tính năng LLM; quốc tế có Qonto (AI viết khoảng 70% code), Notion, ReTech. Hiện mới chủ yếu ở công ty sản phẩm.</li>
      <li><b>KMP mới là điểm cộng</b> (GoTymeX, iKame, Mindera), chưa JD nào bắt buộc. <b>Tiếng Anh, không phải tiếng Nhật:</b> 0/28 JD đòi tiếng Nhật, kể cả công ty vốn Nhật.</li>
      <li><b>Thị trường tin đăng mỏng:</b> ngày 15/10/2026 sitemap của TopDev không có tin Android nào còn hạn; trong lần thu thập này chỉ 8 tin trên ITviec còn mở. Nhiều JD bên dưới đã hết hạn nhưng yêu cầu vẫn đại diện.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Mức lương thấy được</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">13–22 triệu / tháng</td><td>Junior, khoảng 1 năm (FPT Telecom, NMH Global)</td></tr>
          <tr><td class="mono">15–30 triệu / tháng</td><td>Middle 2 năm (Viettel, Terratek, Cốc Cốc, GMO-Z RUNSYSTEM)</td></tr>
          <tr><td class="mono">20–45 triệu / tháng</td><td>Middle 2+ năm (AI XTECH, Technify, FPT Telecom 25–40 triệu)</td></tr>
          <tr><td class="mono">20–40 triệu / tháng</td><td>Senior ở công ty trong nước (Wavez, TopDev's Client)</td></tr>
          <tr><td class="mono">$2.000–4.000 / tháng</td><td>Senior ở công ty sản phẩm / vốn nước ngoài (Blue Belt, Megazone, Rwazi tối đa $2.700 NET dạng contractor)</td></tr>
          <tr><td class="mono">$150K–405K / năm</td><td>Mỹ: Notion $150–168K, Reddit Senior $190,8–267,1K, OpenAI $185–405K (chưa gồm cổ phiếu)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">ITviec ẩn lương với người chưa đăng nhập, nên các tin còn mở của Grab, GoTymeX, ANDPAD, One Mount không có số liệu. Lương JobsGO/TopCV lấy từ đoạn trích tìm kiếm.</p>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Fresher / Junior</b></td><td class="mono">0–1 năm</td><td>Kotlin, Compose cơ bản, MVVM theo mẫu có sẵn, gọi REST, Room, Git.</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">2–4 năm</td><td>Tự làm feature trọn vẹn với Compose + Coroutines/Flow + Hilt, viết test, Firebase, đưa app lên Play.</td></tr>
        <tr><td><b>Senior</b></td><td class="mono">4–6+ năm</td><td>Kiến trúc và modularization, hiệu năng, bảo mật, CI/CD, mentor; fintech thường đòi 5+ năm.</td></tr>
        <tr><td><b>Staff / Principal</b></td><td class="mono">8–10+ năm</td><td>SDK design, kiến trúc đa nền tảng (iOS, Flutter, RN), design system, dẫn dắt nhiều team.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://itviec.com/it-jobs/android-developer-kotlin-gotymex-0455" target="_blank" rel="noopener">ITviec · GoTymeX, (Senior) Android Developer (Kotlin)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-android-engineer-grab-vietnam-ltd-1601" target="_blank" rel="noopener">ITviec · Grab Vietnam, Senior Android Engineer</a></li>
      <li><a href="https://itviec.com/it-jobs/principal-android-native-engineer-kotlin-andpad-vietnam-co-ltd-4502" target="_blank" rel="noopener">ITviec · ANDPAD, Principal Android Native Engineer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-mobile-engineer-collaborator-ios-android-one-mount-group-5554" target="_blank" rel="noopener">ITviec · One Mount, Senior Mobile Engineer (iOS/Android)</a></li>
      <li><a href="https://itviec.com/it-jobs/staff-mobile-engineer-android-ios-fluent-in-english-geocomply-geotech-hub-vietnam-3835" target="_blank" rel="noopener">ITviec · GeoComply, Staff Mobile Engineer</a></li>
      <li><a href="https://itviec.com/it-jobs/mobile-architect-itviec-recruitment-consulting-0943" target="_blank" rel="noopener">ITviec · Mobile Architect (Design System Lead)</a></li>
      <li><a href="https://itviec.com/it-jobs/android-developer-kotlin-jetpack-compose-mvvm-uplive-vn-3827" target="_blank" rel="noopener">ITviec · Uplive VN, Android Developer (Kotlin, Compose)</a></li>
      <li><a href="https://itviec.com/it-jobs/junior-android-developer-kotlin-java-motorist-pte-ltd-0733" target="_blank" rel="noopener">ITviec · Motorist, Junior Android Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-mobile-engineer-android-native-kotlin-english-kms-technology-3626" target="_blank" rel="noopener">ITviec · KMS Technology, Senior Mobile Engineer (Android) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-android-developer-kotlin-eyeclick-1034" target="_blank" rel="noopener">ITviec · EyeClick, Senior Android Developer — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-android-engineer-kotlin-java-zalora-group-5657" target="_blank" rel="noopener">ITviec · ZALORA, Senior Android Engineer — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-mobile-engineer-android-kotlin-ahamove-2817" target="_blank" rel="noopener">ITviec · Ahamove, Senior Mobile Engineer (Android) — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-android-developer-java-kotlin-up-to-4000-blue-belt-technology-0952" target="_blank" rel="noopener">ITviec · Blue Belt, Senior Android Developer — hết hạn</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-android-developer-java-kotlin-upto-2700-rwazi-5650" target="_blank" rel="noopener">ITviec · Rwazi, Senior Android Developer — hết hạn</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-android-developer/2085496.html" target="_blank" rel="noopener">TopCV · VietUnion, Senior Android Developer</a> (bản đầy đủ: <a href="https://payoo.vn/tuyen-dung/senior-android-developer-2.html" target="_blank" rel="noopener">payoo.vn</a>)</li>
      <li><a href="https://www.topcv.vn/viec-lam/android-developer-kotlin/1824762.html" target="_blank" rel="noopener">TopCV · FPT Telecom, Android Developer (Kotlin)</a> — đoạn trích</li>
      <li><a href="https://www.topcv.vn/viec-lam/mobile-developer-ios-android/2261910.html" target="_blank" rel="noopener">TopCV · Viettel, Mobile Developer (iOS/Android)</a> — đoạn trích</li>
      <li><a href="https://www.topcv.vn/viec-lam/middle-android-developer/2263456.html" target="_blank" rel="noopener">TopCV · iKame, Middle Android Developer</a> — đoạn trích</li>
      <li><a href="https://topdev.vn/detail-jobs/senior-android-developer-megazone-vietnam-company-limited-2033418" target="_blank" rel="noopener">TopDev · Megazone, Senior Android Developer — hết hạn (2024)</a></li>
      <li><a href="https://topdev.vn/viec-lam/android-developer-kotlin-up-to-45m-cong-ty-co-phan-cong-nghe-ai-xtech-2120484" target="_blank" rel="noopener">TopDev · AI XTECH, Android Developer (Kotlin) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/android-developer-kotlin-cong-ty-co-phan-cong-nghe-technify-2035278" target="_blank" rel="noopener">TopDev · Technify, Android Developer (Kotlin) — hết hạn</a></li>
      <li><a href="https://topdev.vn/detail-jobs/android-app-developer-kotlin-topdev-s-client-2035168" target="_blank" rel="noopener">TopDev · TopDev's Client, Android App Developer (Kotlin) — hết hạn</a></li>
      <li><a href="https://jobsgo.vn/viec-lam/senior-android-developer-20464544267.html" target="_blank" rel="noopener">JobsGO · Wavez, Senior Android Developer</a> — đoạn trích</li>
      <li><a href="https://jobsgo.vn/viec-lam/android-developer-tu-2-nam-27695375346.html" target="_blank" rel="noopener">JobsGO · ZENTRIXA, Android Developer</a> — đoạn trích, hết hạn</li>
      <li><a href="https://www.vietnamworks.com/mobile-developer-ios-android-ui-specialist--2107034-jv" target="_blank" rel="noopener">VietnamWorks · Woori Bank, Mobile Developer (UI Specialist)</a></li>
      <li><a href="https://vieclam.tuoitre.vn/vi/tim-viec-lam/senior-mobile-developer-android-hn-ta050.35C374A0.html" target="_blank" rel="noopener">Tuổi Trẻ Việc Làm · VPBank, Senior Mobile Developer (Android) — hết hạn</a></li>
      <li><a href="https://vn.linkedin.com/jobs/view/hcl-x-anz-android-lead-engineer-kotlin-very-attractive-salary-at-hcltech-vietnam-3802060174" target="_blank" rel="noopener">LinkedIn · HCLTech, Android Lead Engineer (Kotlin)</a> — đoạn trích, tin cũ</li>
      <li><a href="https://vn.linkedin.com/jobs/view/australian-product-senior-android-engineer-at-positive-thinking-company-apac-by-cbtw-3843663422" target="_blank" rel="noopener">LinkedIn · CBTW, Senior Android Engineer</a> — đoạn trích, tin cũ</li>
      <li><a href="https://job-boards.greenhouse.io/deliveroo/jobs/8202417" target="_blank" rel="noopener">Greenhouse · Deliveroo, Senior Software Engineer - Android</a></li>
      <li><a href="https://job-boards.greenhouse.io/reddit/jobs/8263407" target="_blank" rel="noopener">Greenhouse · Reddit, Senior Android Software Engineer</a></li>
      <li><a href="https://job-boards.greenhouse.io/monzo/jobs/7343996" target="_blank" rel="noopener">Greenhouse · Monzo, Android Engineer</a></li>
      <li><a href="https://jobs.lever.co/qonto/fb2e533c-5127-41d0-b3e3-c28525bbe380" target="_blank" rel="noopener">Lever · Qonto, Senior Android Engineer - AI Product</a></li>
      <li><a href="https://jobs.ashbyhq.com/openai/5a1a0c32-0b82-482a-8149-e6b096c3e732" target="_blank" rel="noopener">Ashby · OpenAI, Android Engineer (ChatGPT)</a></li>
      <li><a href="https://jobs.ashbyhq.com/notion/d82a0b31-59b8-4699-ae8d-6fb3fe47518c" target="_blank" rel="noopener">Ashby · Notion, Software Engineer, Mobile Core (Android)</a></li>
      <li><a href="https://apply.workable.com/minderacraft/j/AD09582C11/" target="_blank" rel="noopener">Workable · Mindera, Senior Mobile Developer (Android)</a></li>
      <li><a href="https://www.sumup.com/careers/positions/berlin-germany/android/senior-android-engineer-hardware/8794602002/?gh_jid=8794602002" target="_blank" rel="noopener">SumUp (Greenhouse) · Senior Android Engineer - Hardware</a></li>
      <li><a href="https://djinni.co/jobs/840192-senior-android-developer-b2c/" target="_blank" rel="noopener">Djinni · ReTech, Senior Android Developer (B2C)</a> — đoạn trích</li>
      <li><a href="https://android-developers.googleblog.com/2026/06/Android-17.html" target="_blank" rel="noopener">Android Developers Blog · Android 17 (Compose-first)</a></li>
    </ul>
    <p class="muted note">TopCV và JobsGO trả về 403 khi đọc trực tiếp; các tin ITviec hết hạn trả về 410 nhưng vẫn còn nội dung. LinkedIn chỉ dùng đoạn trích tìm kiếm.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Tick vào mục đã học, tiến độ được lưu trên trình duyệt này. Lab 4 tuần cộng lại thành app <b>“Expense Tracker”</b> bản Android native: Compose, multi-module, Hilt, Room offline-first, WorkManager sync, push, test, Baseline Profile, CI.`,

 lc:`  <div style="display:grid;gap:8px">
    <h2>Vòng live coding Android</h2>
    <p class="muted">Tổng hợp từ đề take-home công khai (Block, Yumemi), hướng dẫn phỏng vấn mobile của Monzo, JD có mô tả quy trình (Qonto), các bài viết của ứng viên và hướng dẫn tuyển dụng 2023–2026. Chỉ Block, Monzo và Yumemi công bố tiêu chí chấm; phần còn lại là tổng hợp từ phía người tuyển.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>Machine coding live</b></td><td class="mono">45–60′</td><td>Chia sẻ màn hình trong Android Studio: dựng 1–2 màn từ đầu, mở rộng codebase có sẵn (UI hoặc ViewModel), hoặc review và sửa bug. Thường không kịp viết unit test.</td></tr>
          <tr><td><b>Take-home + pairing</b></td><td class="mono">4–5h + 2×60′</td><td>Block: app danh bạ nhân viên (một màn list, ảnh, tên, team), pull-to-refresh, loading/empty/error với endpoint lỗi và rỗng có sẵn, cache ảnh trên disk, không gọi lại khi xoay màn, bắt buộc unit test, README nêu trade-off. Vòng onsite pair 2 giờ để thêm feature vào chính app đó.</td></tr>
          <tr><td><b>Sửa app có sẵn hoặc pair coding</b></td><td class="mono">4h hoặc 60′</td><td>Monzo cho chọn: take-home 4 giờ trên một project Android có sẵn bug, code kém, thiếu feature (kèm 45 phút review), hoặc pair coding 1 giờ trên project mẫu gửi trước. Họ nói rõ không chấm trí nhớ hay tốc độ.</td></tr>
          <tr><td><b>Live skill test dài</b></td><td class="mono">2h</td><td>Qonto: kiểm tra kỹ năng trực tiếp với hai Android engineer, sau hai vòng phỏng vấn 1 giờ.</td></tr>
          <tr><td><b>Code check / refactor</b></td><td class="mono">Không giới hạn</td><td>Yumemi: app tìm repo GitHub cài sẵn bug và code smell; issue chia mức cơ bản (bỏ <code>!!</code>, sửa leak và crash, tách “Fat Fragment”), trung cấp (áp kiến trúc, thêm unit/UI test) và bonus.</td></tr>
          <tr><td><b>Mobile system design</b></td><td class="mono">45–60′</td><td>Cho UI và yêu cầu, vẽ thiết kế end-to-end (Excalidraw), không code: data model, API, cache, phân trang, offline. Hay gặp với Senior.</td></tr>
          <tr><td><b>DSA bằng Kotlin</b></td><td class="mono">45′</td><td>Big tech (Meta, LinkedIn, TikTok) vẫn có vòng LeetCode; nhiều công ty sản phẩm thay bằng bài thực tế. Meta từ 10/2025 có vòng coding cho dùng AI (60′, sửa bug → implement → tối ưu).</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Chính sách AI khác nhau: Block cho dùng AI ở take-home nhưng phải giải thích được mọi dòng; Monzo cho dùng để “tinh chỉnh, không thay thế” nhưng không dùng AI live trong buổi phỏng vấn; Yumemi không cấm. Hỏi recruiter trước.</p>
  </div>

  <div class="box">
    <h3>Đề phổ biến và cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Đề</th><th>Mức đạt</th><th>Mức Senior</th></tr></thead>
        <tbody>
          <tr><td><b>Fetch + hiển thị list</b></td><td>loading, empty, error; LazyColumn hoặc RecyclerView chạy đúng; không gọi lại API khi xoay màn</td><td>Repository + UiState sealed, model domain tách DTO, retry, main-safe, test cho ViewModel, giải thích trade-off trong README</td></tr>
          <tr><td><b>Search có debounce</b></td><td><code>debounce</code>, không gọi API mỗi phím</td><td><code>flatMapLatest</code> hủy request cũ, <code>stateIn</code> + <code>WhileSubscribed</code>, collect theo lifecycle, query sống qua process death</td></tr>
          <tr><td><b>Infinite scroll + pull-to-refresh</b></td><td>Tải trang khi gần cuối, <code>PullToRefreshBox</code></td><td>Chặn request trùng, dedupe theo id, refresh thắng trang đang tải, hết trang thì dừng, lỗi không lặp vô hạn; hoặc Paging 3 + RemoteMediator</td></tr>
          <tr><td><b>Offline cache</b></td><td>Lưu vào Room, hiển thị khi mất mạng</td><td>Room là single source of truth, Flow từ DAO, chiến lược làm mới, migration, WorkManager sync</td></tr>
          <tr><td><b>Sửa app có sẵn</b></td><td>Tìm và sửa crash, leak, <code>!!</code>, xử lý null</td><td>Ưu tiên lỗi theo mức độ, refactor có test bảo vệ, giải thích vì sao đổi, chỉ ra những gì chưa sửa</td></tr>
          <tr><td><b>Xoay màn / process death</b></td><td>ViewModel giữ state qua xoay màn</td><td>SavedStateHandle, rememberSaveable, test bằng <code>adb shell am kill</code></td></tr>
          <tr><td><b>System design</b></td><td>Vẽ được các lớp UI / data</td><td>Chủ động hỏi yêu cầu, API (phân trang, auth, lỗi), cache và mã hóa, offline, đo lường, rollout an toàn</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Với Senior, nên trả lời theo khung: bối cảnh → quyết định → phương án khác → khi nào nó hỏng → bằng chứng (số liệu, test).</p>
  </div>

  <div class="box">
    <h3>Chia 60 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–5′</td><td>Hỏi lại yêu cầu: API trả gì, có phân trang không, Compose hay XML, có sẵn Hilt/Retrofit chưa, có cần offline không.</td></tr>
          <tr><td class="mono">5–10′</td><td>Nói kế hoạch: UiState, ViewModel, repository, màn hình; state đặt ở đâu.</td></tr>
          <tr><td class="mono">10–35′</td><td>Happy path chạy được trước. Vừa code vừa nói.</td></tr>
          <tr><td class="mono">35–50′</td><td>loading, error, empty, xoay màn, hủy request cũ, key cho list.</td></tr>
          <tr><td class="mono">50–60′</td><td>Dọn code, nói sẽ test gì (ViewModel với fake + Turbine, Compose UI test), trade-off, hướng mở rộng.</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag ok">Nên</span>
      <ul>
        <li>Nghĩ thành tiếng, hỏi trước khi giả định.</li>
        <li>Tạo sẵn một project mẫu có Compose, ViewModel, Coroutines, Retrofit/kotlinx.serialization nếu được phép.</li>
        <li>Một <code>UiState</code> sealed cho mỗi màn, expose <code>StateFlow</code> read-only.</li>
        <li>Collect bằng <code>collectAsStateWithLifecycle()</code>.</li>
        <li>Thêm <code>key</code> cho item của LazyColumn.</li>
        <li>Bắt exception cụ thể, rethrow <code>CancellationException</code>.</li>
        <li>Thuộc sẵn: debounce + flatMapLatest + stateIn, PullToRefreshBox, snapshotFlow, Paging 3.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">Tránh</span>
      <ul>
        <li><code>GlobalScope</code>, <code>runBlocking</code> trên main thread.</li>
        <li>Gọi hàm load trực tiếp trong thân composable.</li>
        <li>Mutate list bên trong <code>MutableStateFlow</code>.</li>
        <li>Giữ Activity context trong singleton.</li>
        <li><code>runCatching</code> hoặc <code>catch (e: Exception)</code> trong coroutine mà không rethrow cancellation.</li>
        <li>Rải <code>!!</code> và <code>lateinit</code> để né null.</li>
        <li>Chấp nhận code AI gợi ý mà không giải thích được.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: search có debounce</h3>
<pre>// Artifacts: lifecycle-viewmodel-ktx, lifecycle-runtime-compose (collectAsStateWithLifecycle),
// compose-foundation (TextFieldState), material3, hilt-lifecycle-viewmodel-compose (hiltViewModel)
data class Repo(val id: Long, val name: String, val stars: Int)

interface RepoRepository {
    suspend fun search(query: String): List&lt;Repo&gt; // main-safe (Retrofit suspend)
}

sealed interface SearchUiState {
    data object Idle : SearchUiState
    data object Loading : SearchUiState
    data class Success(val repos: List&lt;Repo&gt;) : SearchUiState
    data class Error(val message: String) : SearchUiState
}

@OptIn(FlowPreview::class, ExperimentalCoroutinesApi::class)
@HiltViewModel
class SearchViewModel @Inject constructor(
    private val repository: RepoRepository,
) : ViewModel() {

    // TextFieldState is a snapshot-backed state holder; the docs encourage keeping it in the ViewModel
    val queryState = TextFieldState()
    private val retryTrigger = MutableStateFlow(0)

    private val query: Flow&lt;String&gt; = snapshotFlow { queryState.text.toString().trim() }
        .debounce(300)
        .distinctUntilChanged()

    val uiState: StateFlow&lt;SearchUiState&gt; = combine(query, retryTrigger) { q, _ -&gt; q }
        .flatMapLatest { q -&gt; // a new query cancels the request still in flight
            if (q.isEmpty()) {
                flowOf(SearchUiState.Idle)
            } else {
                flow&lt;SearchUiState&gt; {
                    emit(SearchUiState.Loading)
                    emit(SearchUiState.Success(repository.search(q)))
                }.catch { e -&gt; emit(SearchUiState.Error(e.message ?: "Something went wrong")) }
            }
        }
        .stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), SearchUiState.Idle)

    fun retry() = retryTrigger.update { it + 1 }
}

@Composable
fun SearchRoute(viewModel: SearchViewModel = hiltViewModel()) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    SearchScreen(queryState = viewModel.queryState, uiState = uiState, onRetry = viewModel::retry)
}

@Composable
fun SearchScreen(
    queryState: TextFieldState,
    uiState: SearchUiState,
    onRetry: () -&gt; Unit,
    modifier: Modifier = Modifier,
) {
    Column(modifier.fillMaxSize()) {
        TextField(
            state = queryState,
            modifier = Modifier.fillMaxWidth().padding(16.dp),
            placeholder = { Text("Search repositories") },
            lineLimits = TextFieldLineLimits.SingleLine,
        )
        when (uiState) {
            SearchUiState.Idle -&gt; Unit
            SearchUiState.Loading -&gt; LinearProgressIndicator(Modifier.fillMaxWidth())
            is SearchUiState.Error -&gt; Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(uiState.message, Modifier.weight(1f), color = MaterialTheme.colorScheme.error)
                TextButton(onClick = onRetry) { Text("Retry") }
            }
            is SearchUiState.Success -&gt;
                if (uiState.repos.isEmpty()) {
                    Text("No results", Modifier.padding(16.dp))
                } else {
                    LazyColumn(Modifier.weight(1f)) {
                        items(uiState.repos, key = { it.id }) { repo -&gt;
                            ListItem(
                                headlineContent = { Text(repo.name) },
                                supportingContent = { Text("★ \${repo.stars}") },
                            )
                        }
                    }
                }
        }
    }
}</pre>
    <p class="muted note">Dùng <code>TextFieldState</code> thay vì đẩy text qua StateFlow: tài liệu Compose khuyến nghị text field dạng state-based và giữ <code>TextFieldState</code> trong ViewModel, tránh lỗi nhảy con trỏ khi cập nhật bất đồng bộ. <code>debounce</code> cần <code>FlowPreview</code>, <code>flatMapLatest</code> cần <code>ExperimentalCoroutinesApi</code>. Câu hỏi tiếp theo hay gặp: viết test cho ViewModel này bằng <code>runTest</code> + Turbine thế nào, và làm sao giữ query qua process death?</p>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: infinite scroll + pull-to-refresh</h3>
<pre>data class Post(val id: Long, val title: String)
data class FeedPage(val items: List&lt;Post&gt;, val nextCursor: String?) // null means no more pages

interface FeedApi {
    suspend fun fetch(cursor: String?): FeedPage
}

data class FeedUiState(
    val items: List&lt;Post&gt; = emptyList(),
    val isRefreshing: Boolean = false,
    val isLoadingMore: Boolean = false,
    val endReached: Boolean = false,
    val error: String? = null,
)

@HiltViewModel
class FeedViewModel @Inject constructor(private val api: FeedApi) : ViewModel() {
    private val _state = MutableStateFlow(FeedUiState())
    val state: StateFlow&lt;FeedUiState&gt; = _state.asStateFlow()

    private var cursor: String? = null
    private var loadJob: Job? = null // only touched on the main thread

    init { refresh() }

    fun refresh() {
        loadJob?.cancel() // a refresh wins over a page that is still loading
        loadJob = viewModelScope.launch {
            _state.update { it.copy(isRefreshing = true, isLoadingMore = false, error = null) }
            try {
                val page = api.fetch(cursor = null)
                cursor = page.nextCursor
                _state.update {
                    it.copy(
                        items = page.items.distinctBy(Post::id),
                        isRefreshing = false,
                        endReached = page.nextCursor == null,
                    )
                }
            } catch (e: CancellationException) {
                throw e // never swallow cancellation
            } catch (e: Exception) {
                _state.update { it.copy(isRefreshing = false, error = e.message ?: "Couldn't refresh") }
            }
        }
    }

    fun loadMore() {
        if (loadJob?.isActive == true || _state.value.endReached) return // in-flight guard
        loadJob = viewModelScope.launch {
            _state.update { it.copy(isLoadingMore = true, error = null) }
            try {
                val page = api.fetch(cursor)
                cursor = page.nextCursor
                _state.update { s -&gt;
                    val seen = s.items.mapTo(HashSet&lt;Long&gt;()) { it.id }
                    s.copy(
                        items = s.items + page.items.filter { seen.add(it.id) }, // dedupe by id
                        isLoadingMore = false,
                        endReached = page.nextCursor == null,
                    )
                }
            } catch (e: CancellationException) {
                throw e
            } catch (e: Exception) {
                _state.update { it.copy(isLoadingMore = false, error = e.message ?: "Couldn't load more") }
            }
        }
    }
}

@Composable
fun FeedRoute(viewModel: FeedViewModel = hiltViewModel()) {
    val state by viewModel.state.collectAsStateWithLifecycle()
    FeedScreen(state, onRefresh = viewModel::refresh, onLoadMore = viewModel::loadMore)
}

@Composable
fun FeedScreen(
    state: FeedUiState,
    onRefresh: () -&gt; Unit,
    onLoadMore: () -&gt; Unit,
    modifier: Modifier = Modifier,
) {
    val listState = rememberLazyListState()
    val currentOnLoadMore by rememberUpdatedState(onLoadMore)

    // Emits the item count while the user is within 5 items of the end, so it fires
    // again after each new page but not in a loop when a load fails
    LaunchedEffect(listState) {
        snapshotFlow {
            val info = listState.layoutInfo
            val last = info.visibleItemsInfo.lastOrNull()?.index ?: return@snapshotFlow -1
            if (last &gt;= info.totalItemsCount - 5) info.totalItemsCount else -1
        }
            .distinctUntilChanged()
            .filter { it &gt; 0 }
            .collect { currentOnLoadMore() }
    }

    PullToRefreshBox(
        isRefreshing = state.isRefreshing,
        onRefresh = onRefresh,
        modifier = modifier.fillMaxSize(),
    ) {
        LazyColumn(state = listState, modifier = Modifier.fillMaxSize()) {
            items(state.items, key = { it.id }, contentType = { "post" }) { post -&gt;
                ListItem(headlineContent = { Text(post.title) })
            }
            if (state.isLoadingMore) {
                item(key = "loading", contentType = "footer") {
                    Box(Modifier.fillMaxWidth().padding(16.dp), contentAlignment = Alignment.Center) {
                        CircularProgressIndicator()
                    }
                }
            }
            state.error?.let { message -&gt;
                item(key = "error", contentType = "footer") {
                    Row(Modifier.padding(16.dp), verticalAlignment = Alignment.CenterVertically) {
                        Text(message, Modifier.weight(1f))
                        TextButton(onClick = if (state.items.isEmpty()) onRefresh else onLoadMore) {
                            Text("Retry")
                        }
                    }
                }
            }
        }
    }
}</pre>
    <p class="muted note">Không dùng <code>runCatching</code> ở đây vì nó nuốt <code>CancellationException</code>, khiến refresh không hủy được trang đang tải. Nếu đề cho dùng thư viện, nói được cách làm tương đương bằng Paging 3: <code>Pager</code> + <code>cachedIn(viewModelScope)</code>, <code>collectAsLazyPagingItems()</code>, <code>itemKey { it.id }</code> và <code>loadState</code>.</p>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài code review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample code review: find the bugs in 10 minutes</span></h3>
<pre>object ImageCache {
    lateinit var context: Context
    fun init(context: Context) { this.context = context }
}

@HiltViewModel
class UserListViewModel @Inject constructor(private val api: UserApi) : ViewModel() {
    val users = MutableStateFlow(mutableListOf&lt;User&gt;())
    val messages = MutableSharedFlow&lt;String&gt;()

    fun load() {
        GlobalScope.launch {
            try {
                users.value.addAll(api.getUsers())
            } catch (e: IOException) {
                messages.emit("Couldn't load users")
            }
        }
    }
}

@AndroidEntryPoint
class UserListActivity : ComponentActivity() {
    private val viewModel: UserListViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        ImageCache.init(this)
        val lastQuery = File(filesDir, "last_query.txt").readText()
        lifecycleScope.launch {
            viewModel.messages.collect { Toast.makeText(this@UserListActivity, it, Toast.LENGTH_SHORT).show() }
        }
        setContent { UserListScreen(viewModel, lastQuery) }
    }
}

@Composable
fun UserListScreen(viewModel: UserListViewModel, initialQuery: String) {
    viewModel.load()
    val users by viewModel.users.collectAsState()
    var query by remember { mutableStateOf(initialQuery) }

    Column {
        TextField(value = query, onValueChange = { query = it })
        LazyColumn {
            items(users.filter { it.name.contains(query, ignoreCase = true) }) { user -&gt;
                var expanded by remember { mutableStateOf(false) }
                UserRow(user, expanded, onClick = { expanded = !expanded })
            }
        }
    }
}</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (8 lỗi)</span><span class="l-en">Show the answer (8 bugs)</span></span></summary><div class="ans">
    <ul class="l-vi">
      <li><b>GlobalScope:</b> coroutine không bị hủy khi ViewModel bị clear, chạy trên <code>Dispatchers.Default</code> và sửa state từ thread nền. Dùng <code>viewModelScope.launch</code>.</li>
      <li><b>Mutate list bên trong StateFlow:</b> <code>users.value.addAll(...)</code> sửa cùng một instance nên StateFlow không phát (giá trị vẫn <code>equals</code>) và không thread-safe; thêm nữa <code>MutableStateFlow</code> / <code>MutableSharedFlow</code> public cho phép UI ghi vào. Dùng <code>private val _users = MutableStateFlow&lt;List&lt;User&gt;&gt;(emptyList())</code>, <code>_users.update { it + new }</code> và expose <code>asStateFlow()</code>.</li>
      <li><b>Leak Activity:</b> <code>ImageCache</code> là singleton giữ <code>this</code> của Activity, sau mỗi lần xoay màn Activity cũ không được thu hồi. Chỉ giữ <code>applicationContext</code>.</li>
      <li><b>I/O trên main thread:</b> <code>readText()</code> trong <code>onCreate</code> chặn UI (StrictMode sẽ báo, nguy cơ ANR) và ném <code>FileNotFoundException</code> ở lần chạy đầu khi file chưa có, làm app crash. Đọc trong coroutine với <code>Dispatchers.IO</code> (hoặc DataStore) và xử lý trường hợp chưa có.</li>
      <li><b>Collect không theo lifecycle:</b> <code>lifecycleScope.launch { collect }</code> trong <code>onCreate</code> vẫn chạy khi app ở nền và hiện Toast khi không ai nhìn; <code>collectAsState()</code> cũng vậy. Dùng <code>repeatOnLifecycle(STARTED)</code> và <code>collectAsStateWithLifecycle()</code>; với message, theo guidance nên quy về UI state thay vì SharedFlow không replay (mất message khi chưa có collector).</li>
      <li><b>Side effect trong composition:</b> <code>viewModel.load()</code> chạy lại ở mỗi recomposition, gõ một ký tự là gọi API và nối thêm dữ liệu trùng. Gọi trong <code>init</code> của ViewModel hoặc <code>LaunchedEffect(Unit)</code>.</li>
      <li><b>State mất khi xoay màn:</b> <code>remember { mutableStateOf(initialQuery) }</code> mất query khi Activity tạo lại hoặc process death. Dùng <code>rememberSaveable</code>, hoặc đưa query vào ViewModel (<code>TextFieldState</code> / <code>SavedStateHandle</code>).</li>
      <li><b>LazyColumn không có key và lọc trong composition:</b> <code>expanded</code> bám theo vị trí, nên khi lọc thay đổi trạng thái mở rộng bị gán nhầm item; <code>filter</code> chạy lại mỗi recomposition tạo list mới. Thêm <code>key = { it.id }</code> và đưa việc lọc vào ViewModel (hoặc <code>remember(users, query)</code>).</li>
    </ul>
    <ul class="l-en">
      <li><b>GlobalScope:</b> the coroutine isn't cancelled when the ViewModel is cleared, runs on <code>Dispatchers.Default</code>, and mutates state from a background thread. Use <code>viewModelScope.launch</code>.</li>
      <li><b>Mutating a list inside a StateFlow:</b> <code>users.value.addAll(...)</code> changes the same instance, so the StateFlow never emits (the value is still <code>equals</code>) and it isn't thread-safe; on top of that, the public <code>MutableStateFlow</code> and <code>MutableSharedFlow</code> let the UI write to them. Use <code>private val _users = MutableStateFlow&lt;List&lt;User&gt;&gt;(emptyList())</code>, <code>_users.update { it + new }</code>, and expose <code>asStateFlow()</code>.</li>
      <li><b>Leaked Activity:</b> <code>ImageCache</code> is a singleton holding the Activity's <code>this</code>, so every rotation leaves the old Activity uncollectable. Only keep the <code>applicationContext</code>.</li>
      <li><b>I/O on the main thread:</b> <code>readText()</code> in <code>onCreate</code> blocks the UI (StrictMode will flag it, and it's an ANR risk) and throws <code>FileNotFoundException</code> on first launch when the file doesn't exist yet, crashing the app. Read it in a coroutine on <code>Dispatchers.IO</code>, or use DataStore, and handle the missing case.</li>
      <li><b>Lifecycle-unaware collection:</b> <code>lifecycleScope.launch { collect }</code> in <code>onCreate</code> keeps running in the background and shows toasts nobody sees, and <code>collectAsState()</code> has the same problem. Use <code>repeatOnLifecycle(STARTED)</code> and <code>collectAsStateWithLifecycle()</code>. For messages, the guidance is to reduce them to UI state rather than a SharedFlow with no replay, which drops messages when nothing is collecting.</li>
      <li><b>Side effect in composition:</b> <code>viewModel.load()</code> runs on every recomposition, so typing one character fires the API again and appends duplicates. Call it from the ViewModel's <code>init</code> or from <code>LaunchedEffect(Unit)</code>.</li>
      <li><b>State lost on rotation:</b> <code>remember { mutableStateOf(initialQuery) }</code> loses the query when the Activity is recreated or the process dies. Use <code>rememberSaveable</code>, or move the query into the ViewModel with <code>TextFieldState</code> or <code>SavedStateHandle</code>.</li>
      <li><b>No keys in the LazyColumn, and filtering during composition:</b> <code>expanded</code> sticks to a position, so when the filter changes the expanded state lands on the wrong item, and <code>filter</code> builds a new list on every recomposition. Add <code>key = { it.id }</code> and move filtering into the ViewModel, or at least <code>remember(users, query)</code>.</li>
    </ul></div></details>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted small">Làm trong Android Studio, bấm giờ, vừa làm vừa nói và quay màn hình. Bài 6 mô phỏng take-home của Block ở dạng rút gọn.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Bài</th><th>Giờ</th><th>Sau tuần</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td>Counter + form đăng nhập có validate, state sống qua xoay màn và process death (<code>rememberSaveable</code> / <code>SavedStateHandle</code>), kiểm tra bằng <code>adb shell am kill</code></td><td class="mono">20′</td><td class="mono">2</td></tr>
          <tr><td class="mono">2</td><td>Danh sách user từ <code>jsonplaceholder.typicode.com/users</code> có loading, error, retry; ViewModel + UiState sealed + Retrofit</td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">3</td><td>Search repo GitHub (<code>api.github.com/search/repositories?q=</code>) có debounce, <code>flatMapLatest</code>, <code>stateIn</code></td><td class="mono">30′</td><td class="mono">3</td></tr>
          <tr><td class="mono">4</td><td>Danh sách Pokémon (<code>pokeapi.co/api/v2/pokemon?limit=20</code>) infinite scroll + pull-to-refresh, làm tay rồi làm lại bằng Paging 3</td><td class="mono">45′</td><td class="mono">3</td></tr>
          <tr><td class="mono">5</td><td>Cache danh sách bài 2 vào Room, hiển thị khi tắt mạng, refresh nền khi có mạng</td><td class="mono">40′</td><td class="mono">3</td></tr>
          <tr><td class="mono">6</td><td>App danh bạ nhân viên kiểu Block: một màn list có ảnh, pull-to-refresh, empty/error, unit test cho ViewModel, README nêu trade-off</td><td class="mono">90′</td><td class="mono">4</td></tr>
          <tr><td class="mono">7</td><td>Code review đoạn mẫu ở trên rồi viết lại cho đúng</td><td class="mono">20′</td><td class="mono">3</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Muốn luyện take-home thật: làm đúng đề Block trong 4–5 giờ, hoặc clone repo code check của Yumemi và xử lý các issue mức cơ bản rồi trung cấp.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://square.github.io/microsite/mobile-interview-project/" target="_blank" rel="noopener">Block · Mobile interview take-home project</a></li>
      <li><a href="https://monzo.com/blog/preparing-for-mobile-interviews-at-monzo" target="_blank" rel="noopener">Monzo · Preparing for mobile interviews</a></li>
      <li><a href="https://monzo.com/blog/the-ultimate-guide-on-using-ai-to-ace-an-interview-at-monzo" target="_blank" rel="noopener">Monzo · Using AI in interviews</a></li>
      <li><a href="https://jobs.lever.co/qonto/fb2e533c-5127-41d0-b3e3-c28525bbe380" target="_blank" rel="noopener">Qonto · Senior Android Engineer (quy trình phỏng vấn)</a></li>
      <li><a href="https://outcomeschool.substack.com/p/android-machine-coding-round-interview" target="_blank" rel="noopener">Outcome School · Android machine coding round</a></li>
      <li><a href="https://github.com/yumemi-inc/android-engineer-codecheck" target="_blank" rel="noopener">GitHub · Yumemi Android engineer code check</a></li>
      <li><a href="https://qiita.com/blendthink/items/aa70b8b3106fb4e3555f" target="_blank" rel="noopener">Qiita · Tiêu chí review bài code check Yumemi (quan điểm cá nhân)</a></li>
      <li><a href="https://github.com/weeeBox/mobile-system-design" target="_blank" rel="noopener">GitHub · Mobile system design</a></li>
      <li><a href="https://blog.blundellapps.co.uk/android-job-interview-take-home-test-cheat-sheet/" target="_blank" rel="noopener">Blundell · Android take-home test cheat sheet</a></li>
      <li><a href="https://www.hackerrank.com/blog/android-interview-questions-every-developer-should-know/" target="_blank" rel="noopener">HackerRank · Android interview questions</a></li>
      <li><a href="https://dev.to/mjpasx/my-android-engineer-interview-process-2kn8" target="_blank" rel="noopener">dev.to · My Android engineer interview process</a></li>
      <li><a href="https://www.teamblind.com/post/company-list-for-android-interviews-and-rounds-nueefajh" target="_blank" rel="noopener">Blind · Android interview rounds by company</a></li>
      <li><a href="https://www.hellointerview.com/blog/meta-ai-enabled-coding" target="_blank" rel="noopener">Hello Interview · Meta AI-enabled coding round</a></li>
      <li><a href="https://lemon.io/hire/android-developers/" target="_blank" rel="noopener">Lemon.io · Vetting Android developers</a></li>
      <li><a href="https://developer.android.com/develop/ui/compose/text/user-input" target="_blank" rel="noopener">Android Developers · TextFieldState</a></li>
      <li><a href="https://developer.android.com/reference/kotlin/androidx/compose/material3/pulltorefresh/PullToRefreshBox.composable" target="_blank" rel="noopener">Android Developers · PullToRefreshBox</a></li>
    </ul>
  </div>`
};
