/* React Native: static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. */
const RN_PAGE={
 hero:`  <span class="eyebrow">Lộ trình phỏng vấn · React Native · 10/2026</span>
  <h1>React Native trong 4 tuần</h1>
  <p class="lede">Tổng hợp từ các JD React Native trên TopDev, TopCV, JobsGO, ITviec, Workable, LinkedIn và các trang tuyển dụng quốc tế. Mỗi tuần có mục tiêu, checklist, bài lab và câu hỏi tự kiểm tra.</p>`,

 jd:`  <div style="display:grid;gap:8px">
    <h2>Các JD thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 9 JD đọc chi tiết (4 Việt Nam, 5 quốc tế, Junior → Senior). Thanh xanh là yêu cầu bắt buộc, thanh tím là điểm cộng.</p>
  </div>
  <div class="box"><div class="freq" id="rn-freq"></div></div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li>JavaScript ES6+ và TypeScript vững</li>
        <li>React hooks, vòng đời render, tối ưu re-render</li>
        <li>Một thư viện state: Redux Toolkit (Saga), MobX hoặc Zustand</li>
        <li>REST API, xác thực, xử lý lỗi; WebSocket cho realtime</li>
        <li>Build và phát hành lên App Store, Google Play</li>
        <li>Unit test và E2E test</li>
        <li>Git flow / trunk-based, code review</li>
        <li>Debug và tối ưu hiệu năng iOS + Android</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li>Native module bằng Swift / Kotlin</li>
        <li>New Architecture: JSI, TurboModules, Fabric</li>
        <li>Expo, EAS Build / Submit / Update</li>
        <li>CI/CD mobile (GitHub Actions, Fastlane, EAS Workflows)</li>
        <li>Firebase, push notification, deep linking, analytics</li>
        <li>Sentry / Datadog, theo dõi crash</li>
        <li>Mentor, dẫn dắt kiến trúc</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>LinkedIn bổ sung gì</h3>
    <p class="muted small">Từ khoảng 10 tin tuyển dụng và bài đăng của recruiter trên LinkedIn (Việt Nam, Mỹ, Ấn Độ, Pakistan). Phần lớn trùng với danh sách trên. Các điểm dưới đây xuất hiện rõ hơn ở LinkedIn:</p>
    <ul>
      <li><b>Kinh nghiệm production thật:</b> app đã release và được bảo trì lâu dài, có portfolio link store. Một recruiter ghi rõ Expo, Jest, RNTL, Detox/Maestro chỉ là nice-to-have, “không phải tiêu chí lọc”.</li>
      <li><b>Vận hành sau release:</b> triage crash production từ Sentry, staged rollout với EAS.</li>
      <li><b>Nâng cấp phiên bản React Native</b> và Expo SDK được ghi thành yêu cầu riêng.</li>
      <li><b>Build tool native:</b> Xcode, Gradle, Fastlane; profiling bằng Xcode Instruments và Android Studio Profiler.</li>
      <li><b>Cách recruiter lọc Senior:</b> tìm “React Native” đi kèm JSI / Fabric / TurboModules cùng Swift hoặc Kotlin và C++.</li>
      <li><b>Stack hay gặp:</b> Redux + Redux-Saga (Uniswap), REST/GraphQL + Firebase (SnapTec), TDD và CI/CD với GitLab runner (Builder.ai).</li>
    </ul>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức lương thấy trên LinkedIn</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">$1,400–1,600 / tháng</td><td>React Native Developer, TP.HCM</td></tr>
          <tr><td class="mono">$2,500–3,000 / tháng</td><td>Senior React Native, KnowMe (Việt Nam)</td></tr>
          <tr><td class="mono">$120–180K / năm</td><td>Mobile / Lead React Native, Mỹ</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">LinkedIn hiện có khoảng 100 tin React Native ở Việt Nam, tập trung ở TP.HCM (34) và Hà Nội (27), chủ yếu Middle–Senior, onsite hoặc hybrid.</p>
  </div>

  <div class="box">
    <h3>Senior trên TopCV và ITviec</h3>
    <p class="muted small">10 tin Senior React Native. ITviec thường đòi 4–7 năm, TopCV 3+ năm. Một số tin đã đóng nhưng yêu cầu vẫn đại diện.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>VPBank</b> <span class="mono muted">TopCV</span></td><td class="mono">3+ năm</td><td>RN <b>kèm</b> native Android/iOS, app ngân hàng</td></tr>
          <tr><td><b>FPT Software</b> <span class="mono muted">TopCV</span></td><td class="mono">Senior</td><td>Best practice RN, xử lý vấn đề khó, mentor junior</td></tr>
          <tr><td><b>RETI</b> <span class="mono muted">TopCV</span></td><td class="mono">Senior</td><td>Yêu cầu GitHub có portfolio app đã làm</td></tr>
          <tr><td><b>Vitex</b> <span class="mono muted">TopCV</span></td><td class="mono">3+ năm</td><td>TS, Redux/MobX, REST, Git</td></tr>
          <tr><td><b>BEWAO</b> <span class="mono muted">ITviec</span></td><td class="mono">7+ năm, 4+ RN</td><td>Full-stack: Node.js/TS backend, NestJS + GraphQL là điểm cộng; permission, app lifecycle, hiệu năng</td></tr>
          <tr><td><b>Unity Sport</b> <span class="mono muted">ITviec</span></td><td class="mono">~5 năm</td><td>Tối ưu hiệu năng là <b>bắt buộc</b>; CI/CD; native module là điểm cộng</td></tr>
          <tr><td><b>Pizza Hut D&amp;T</b> <span class="mono muted">ITviec</span></td><td class="mono">5+ năm</td><td>App RN + ReactJS quy mô lớn, Nx monorepo, AWS/Firebase, auth, Sentry/Crashlytics</td></tr>
          <tr><td><b>SourceCode</b> <span class="mono muted">ITviec · remote</span></td><td class="mono">5+ năm</td><td>React + RN, CSS mạnh; Node.js/GraphQL là điểm cộng</td></tr>
          <tr><td><b>Annam Software</b> <span class="mono muted">ITviec</span></td><td class="mono">4+ năm</td><td>Expo bắt buộc, TS vững; Swift/Kotlin là điểm cộng</td></tr>
          <tr><td><b>Hitachi Digital</b> <span class="mono muted">ITviec</span></td><td class="mono">3+ năm</td><td>RN + iOS/macOS; <b>tiếng Nhật</b> là lợi thế lớn</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Senior Việt Nam khác Middle ở:</b> tối ưu hiệu năng thành bắt buộc, mentor, quyết định kiến trúc, và thường cần native thật (VPBank).</li>
      <li><b>Xu hướng full-stack:</b> 3/10 tin Senior muốn thêm Node.js / GraphQL; 1 tin dùng monorepo chia sẻ code web–mobile.</li>
      <li><b>Lương TopCV</b> (tin cũ hơn): 20–35 triệu VND hoặc tối đa khoảng $1,500/tháng.</li>
    </ul>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Fresher / Junior</b></td><td class="mono">0–1 năm</td><td>Viết component, gọi API, dùng Redux/Saga theo pattern có sẵn, biết đẩy app lên store với hướng dẫn.</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">2–4 năm</td><td>Tự đưa feature lên production, xử lý khác biệt iOS/Android, TypeScript thành thạo, realtime, review code.</td></tr>
        <tr><td><b>Senior / Lead</b></td><td class="mono">4–5+ năm</td><td>Quyết định kiến trúc, debug ở ranh giới JS ↔ native, CI/CD, quy trình release, mentor.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://topdev.vn/viec-lam/senior-mobile-developer-mobile-developer-react-native-vn-intellipro-s-client-2064484" target="_blank" rel="noopener">TopDev · Senior Mobile Developer (React Native), IntelliPro</a></li>
      <li><a href="https://topdev.vn/viec-lam/middle-react-native-developer-cong-ty-co-phan-hola-tech-2063579" target="_blank" rel="noopener">TopDev · Middle React Native Developer, Hola Tech</a></li>
      <li><a href="https://topdev.vn/viec-lam/senior-mobile-app-react-native-soxes-ag-2033591" target="_blank" rel="noopener">TopDev · Senior Mobile App React Native, Soxes AG</a></li>
      <li><a href="https://topdev.vn/viec-lam/fresher-junior-mobile-developer-react-native-cong-ty-tnhh-ant-tech-2-2023122" target="_blank" rel="noopener">TopDev · Fresher/Junior React Native, Ant Tech</a></li>
      <li><a href="https://jobs.workable.com/jobs/68b4b2b9-d0a6-4dcb-a284-12426a2da278.md" target="_blank" rel="noopener">Workable · Senior React Native Developer</a></li>
      <li><a href="https://jobsgo.vn/viec-lam-react-native.html" target="_blank" rel="noopener">JobsGO · Việc làm React Native</a></li>
      <li><a href="https://forum.uit.edu.vn/t/tuyen-dung-react-react-native-600-1200/145195" target="_blank" rel="noopener">Diễn đàn UIT · Tuyển React/React Native</a></li>
      <li><a href="https://www.thirstysprout.com/post/hire-react-native-developers" target="_blank" rel="noopener">ThirstySprout · Phân cấp Junior/Mid/Senior</a></li>
      <li><a href="https://www.kore1.com/hire-react-native-developers-2026/" target="_blank" rel="noopener">Kore1 · New Architecture trong tuyển dụng 2026</a></li>
      <li><a href="https://djinni.co/jobs/keyword-react_native" target="_blank" rel="noopener">Djinni · React Native jobs</a></li>
      <li><a href="https://vn.linkedin.com/jobs/react-native-jobs" target="_blank" rel="noopener">LinkedIn · React Native jobs in Vietnam</a></li>
      <li><a href="https://vn.linkedin.com/jobs/view/react-native-developer-at-snaptec-3751222433" target="_blank" rel="noopener">LinkedIn · SnapTec, React Native Developer (TP.HCM)</a></li>
      <li><a href="https://vn.linkedin.com/jobs/view/react-native-developer-at-dieture-3183704233" target="_blank" rel="noopener">LinkedIn · dieture, React Native Developer</a></li>
      <li><a href="https://www.linkedin.com/jobs/view/senior-mobile-engineer-react-native-at-uniswap-labs-3412724131" target="_blank" rel="noopener">LinkedIn · Uniswap Labs, Senior Mobile Engineer (React Native)</a></li>
      <li><a href="https://www.linkedin.com/jobs/view/senior-front-end-developer-react-react-native-at-builder-ai-3430052961" target="_blank" rel="noopener">LinkedIn · Builder.ai, Senior Front End (React / React Native)</a></li>
      <li><a href="https://www.linkedin.com/jobs/view/mobile-developer-react-native-at-web3-ticketing-app-at-recruiting-from-scratch-3241047951" target="_blank" rel="noopener">LinkedIn · Mobile Developer (React Native), Recruiting from Scratch</a></li>
      <li><a href="https://www.linkedin.com/jobs/view/lead-mobile-developer-react-native-at-jobot-2731816478" target="_blank" rel="noopener">LinkedIn · Jobot, Lead Mobile Developer (React Native)</a></li>
      <li><a href="https://www.linkedin.com/in/andrewhilson/" target="_blank" rel="noopener">LinkedIn · Andrew Hilson (recruiter), tiêu chí lọc Senior RN</a></li>
      <li><a href="https://www.topcv.vn/brand/vpbank/tuyen-dung/senior-mobile-developer-react-native-native-android-ios-ta172-j2103560.html" target="_blank" rel="noopener">TopCV · VPBank, Senior Mobile Developer (RN + Native)</a></li>
      <li><a href="https://www.topcv.vn/brand/fptsoftware/tuyen-dung/react-native-developer-j167986.html" target="_blank" rel="noopener">TopCV · FPT Software, React Native Developer</a></li>
      <li><a href="https://www.topcv.vn/brand/reti/tuyen-dung/senior-react-native-j535434.html" target="_blank" rel="noopener">TopCV · RETI, Senior React Native</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-react-native-developer/782450.html" target="_blank" rel="noopener">TopCV · Vitex, Senior React Native Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-react-native-engineer-full-stack-node-js-bewao-corporation-3501" target="_blank" rel="noopener">ITviec · BEWAO, Senior React Native Engineer (Full-stack)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-react-native-developer-unity-sport-jsc-5810" target="_blank" rel="noopener">ITviec · Unity Sport, Senior React Native Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-mobile-developer-react-native-pizza-hut-digital-technology-2008" target="_blank" rel="noopener">ITviec · Pizza Hut Digital &amp; Technology, Senior Mobile (RN)</a></li>
      <li><a href="https://itviec.com/it-jobs/remote-sr-react-native-engineer-reactjs-javascript-sourcecode-0435" target="_blank" rel="noopener">ITviec · SourceCode, Sr. React Native Engineer (remote)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-expo-react-native-developer-annam-software-company-4829" target="_blank" rel="noopener">ITviec · Annam Software, Senior Expo / React Native</a></li>
      <li><a href="https://itviec.com/it-jobs/mobile-developer-react-native-ios-macos-hitachi-digital-services-5600" target="_blank" rel="noopener">ITviec · Hitachi Digital Services, Mobile Developer (RN / iOS)</a></li>
    </ul>
    <p class="muted note">Bài đăng trong các group Facebook không được công cụ tìm kiếm index nên không có trong mẫu. Một số JD trên TopDev đã hết hạn nhưng yêu cầu vẫn đại diện cho thị trường.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Tick vào mục đã học, tiến độ được lưu trên trình duyệt này. Lab cả 4 tuần cộng lại thành một app hoàn chỉnh để đưa vào CV: <b>“Expense Tracker”</b> có login, danh sách, realtime, offline, push và CI.`,

 lc:`  <div style="display:grid;gap:8px">
    <h2>Vòng live coding React Native</h2>
    <p class="muted">Tổng hợp từ một repo đề thi live coding công khai, bài kể lại của ứng viên và các handbook phỏng vấn. Không có công ty Việt Nam nào công bố đề, nhưng các blog tuyển dụng trong nước (TopCV, ITNavi) xác nhận nhiều công ty có thêm bài test code thực hành.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>Dựng app nhỏ từ đầu</b></td><td class="mono">45–60′</td><td>Chia sẻ màn hình hoặc dùng Expo Snack. Ví dụ thật: ô nhập tên thành phố → bấm nút → màn 2 gọi API thời tiết trong useEffect; giai đoạn 2 thêm danh sách thành phố đã lưu và điều hướng.</td></tr>
          <tr><td><b>Sửa bug trong repo có sẵn</b></td><td class="mono">~60′</td><td>Repo có test đang fail, test chính là đặc tả, không có simulator. Ví dụ thật: 5 bug trong 20′ không dùng AI (mất chỉnh sửa tiêu đề, crash khi danh sách rỗng, refresh 2 lần, mở note 2 lại hiện note 1, filter mất sau 30 giây) → 10′ dùng AI review lại → 20′ làm tính năng “New note” cả backend, mobile, web → bonus chuyển search lên server.</td></tr>
          <tr><td><b>Code review</b></td><td class="mono">15–20′</td><td>Đọc một đoạn component và chỉ ra lỗi: stale closure, thiếu cleanup, key sai, race condition, re-render thừa.</td></tr>
          <tr><td><b>JS warm-up</b></td><td class="mono">10–20′</td><td>debounce, throttle, groupBy, flatten, tự viết Promise.all, kiểm tra anagram.</td></tr>
          <tr><td><b>Take-home + walk-through</b></td><td class="mono">2–4h / 1–3 ngày</td><td>Làm ở nhà, sau đó trình bày lại quyết định và trả lời câu hỏi mở rộng (“nếu có 100k item thì sao?”).</td></tr>
          <tr><td><b>Senior: native / design</b></td><td class="mono">30–45′</td><td>Thiết kế API cho native module (ví dụ battery level), hoặc vẽ kiến trúc offline sync rồi code một phần.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Xu hướng 2026: nhiều vòng cho phép dùng AI ở một phần đề. Khi đó interviewer chấm cách bạn đánh giá gợi ý của AI và giải thích thay đổi, không chấm tốc độ gõ.</p>
  </div>

  <div class="box">
    <h3>Đề phổ biến và cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Đề</th><th>Mức đạt</th><th>Mức Senior</th></tr></thead>
        <tbody>
          <tr><td><b>Fetch + hiển thị list</b></td><td>loading, error, empty; keyExtractor theo id</td><td>Hủy request khi unmount, nút retry, tách hook, type cho response</td></tr>
          <tr><td><b>Search có debounce</b></td><td>Input mượt, chỉ debounce lời gọi API</td><td>Bỏ qua response cũ (AbortController / request id), clear timer khi unmount, query rỗng</td></tr>
          <tr><td><b>Infinite scroll + pull-to-refresh</b></td><td>onEndReached tải trang tiếp, có footer loading</td><td>Chặn request trùng khi đang tải, dedupe theo id, refresh lỗi vẫn giữ dữ liệu cũ, hết trang thì dừng</td></tr>
          <tr><td><b>Form có validate</b></td><td>Lỗi theo field, disable nút khi đang gửi</td><td>Bàn phím không che input, chuyển focus bằng returnKeyType, accessibility label, chặn submit 2 lần</td></tr>
          <tr><td><b>2 màn + yêu thích</b></td><td>Truyền params, đánh dấu yêu thích</td><td>Params có type, state chung (Zustand/Context), persist (MMKV/AsyncStorage), optimistic update</td></tr>
          <tr><td><b>Offline retry / outbox</b></td><td>Retry khi lỗi mạng</td><td>Phân biệt lỗi tạm và lỗi vĩnh viễn, backoff có jitter và giới hạn, mutation idempotent</td></tr>
          <tr><td><b>Native module</b></td><td>Một hàm async trả Promise</td><td>API tối thiểu, có type, lỗi native thành reject, đúng thread</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Với mọi đề, interviewer muốn nghe bạn tự nhắc tới: loading, lỗi, hủy, cleanup, accessibility, cách test, và độ phức tạp nếu có thuật toán.</p>
  </div>

  <div class="box">
    <h3>Chia 60 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–5′</td><td>Hỏi lại yêu cầu: API trả gì, có phân trang không, cần chạy cả iOS và Android không, được dùng thư viện gì.</td></tr>
          <tr><td class="mono">5–10′</td><td>Nói kế hoạch: các component, state đặt ở đâu, luồng dữ liệu. Chờ interviewer đồng ý.</td></tr>
          <tr><td class="mono">10–35′</td><td>Code happy path chạy được trước. Vừa code vừa nói.</td></tr>
          <tr><td class="mono">35–50′</td><td>Thêm loading, error, empty, hủy request, edge case.</td></tr>
          <tr><td class="mono">50–60′</td><td>Dọn code, nói sẽ test gì, trade-off và hướng mở rộng nếu có thêm thời gian.</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag ok">Nên</span>
      <ul>
        <li>Nghĩ thành tiếng. Im lặng 3 phút là tín hiệu xấu.</li>
        <li>Hỏi trước khi giả định.</li>
        <li>Làm bản chạy được trước, đẹp sau.</li>
        <li>Đặt tên rõ, tách hook khi logic dài.</li>
        <li>Bị kẹt thì nói đang nghĩ gì, interviewer thường gợi ý.</li>
        <li>Thuộc lòng vài đoạn: hook debounce, FlatList đầy đủ props, fetch có AbortController.</li>
        <li>Quen sẵn Expo Snack và editor bạn sẽ dùng.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">Tránh</span>
      <ul>
        <li>Cài thư viện state hay UI khi đề không cần.</li>
        <li>Dùng index làm key, quên keyExtractor.</li>
        <li>setState dựa trên state cũ mà không dùng updater.</li>
        <li>Quên cleanup timer, listener, request.</li>
        <li>Chỉ lo happy path, không có loading/error.</li>
        <li>Chấp nhận code AI gợi ý mà không đọc và giải thích được.</li>
        <li>Sửa test để cho test pass.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: search có debounce</h3>
<pre>type SearchState&lt;T&gt; =
  | { status: 'idle' | 'loading'; data: T[] }
  | { status: 'success'; data: T[] }
  | { status: 'error'; data: T[]; error: unknown };

// \`search\` must be stable (wrap it in useCallback) or the effect re-runs every render
function useDebouncedSearch&lt;T&gt;(
  query: string,
  search: (q: string, signal: AbortSignal) =&gt; Promise&lt;T[]&gt;,
  delay = 300,
): SearchState&lt;T&gt; {
  const [state, setState] = useState&lt;SearchState&lt;T&gt;&gt;({ status: 'idle', data: [] });

  useEffect(() =&gt; {
    const q = query.trim();
    if (!q) {
      setState({ status: 'idle', data: [] });
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(async () =&gt; {
      setState(s =&gt; ({ status: 'loading', data: s.data }));
      try {
        const data = await search(q, controller.signal);
        if (!controller.signal.aborted) setState({ status: 'success', data });
      } catch (error) {
        if (!controller.signal.aborted) setState(s =&gt; ({ status: 'error', data: s.data, error }));
      }
    }, delay);
    // New keystroke or unmount: drop the pending call and ignore its response
    return () =&gt; {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, search, delay]);

  return state;
}</pre>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: infinite scroll + pull-to-refresh</h3>
<pre>type Page&lt;T&gt; = { items: T[]; next?: string };
type Mode = 'initial' | 'more' | 'refresh';

function useInfiniteList&lt;T extends { id: string }&gt;(fetchPage: (cursor?: string) =&gt; Promise&lt;Page&lt;T&gt;&gt;) {
  const [items, setItems] = useState&lt;T[]&gt;([]);
  const [cursor, setCursor] = useState&lt;string&gt;();
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState&lt;Mode | null&gt;('initial');
  const [error, setError] = useState&lt;unknown&gt;();
  const inFlight = useRef(false); // onEndReached can fire several times in a row

  const load = useCallback(async (mode: Mode) =&gt; {
    if (inFlight.current || (mode === 'more' &amp;&amp; !hasMore)) return;
    inFlight.current = true;
    setLoading(mode);
    setError(undefined);
    try {
      const page = await fetchPage(mode === 'more' ? cursor : undefined);
      setItems(prev =&gt; {
        const base = mode === 'more' ? prev : [];
        const seen = new Set(base.map(i =&gt; i.id));
        return [...base, ...page.items.filter(i =&gt; !seen.has(i.id))];
      });
      setCursor(page.next);
      setHasMore(Boolean(page.next));
    } catch (e) {
      setError(e); // keep the items already on screen
    } finally {
      inFlight.current = false;
      setLoading(null);
    }
  }, [cursor, hasMore, fetchPage]);

  useEffect(() =&gt; { load('initial'); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { items, loading, error, loadMore: () =&gt; load('more'), refresh: () =&gt; load('refresh') };
}

// Usage
&lt;FlatList
  data={items}
  keyExtractor={item =&gt; item.id}
  renderItem={renderItem}            // stable via useCallback, row wrapped in React.memo
  onEndReached={loadMore}
  onEndReachedThreshold={0.5}
  refreshing={loading === 'refresh'}
  onRefresh={refresh}
  ListFooterComponent={loading === 'more' ? &lt;ActivityIndicator /&gt; : null}
  ListEmptyComponent={loading === 'initial' ? &lt;ActivityIndicator /&gt; : error ? &lt;RetryButton onPress={refresh} /&gt; : &lt;Text&gt;Chưa có dữ liệu&lt;/Text&gt;}
/&gt;</pre>
    <p class="muted note">Interviewer có thể hỏi tiếp: refresh trong lúc đang tải trang sau thì sao? (Bản trên bỏ qua refresh. Cách khác là hủy request đang chạy bằng AbortController rồi tải lại.)</p>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài code review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample code review: find the bugs in 10 minutes</span></h3>
<pre>function Users({ navigate }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() =&gt; {
    fetch(\`/users?page=\${page}\`)
      .then(r =&gt; r.json())
      .then(d =&gt; setUsers([...users, ...d]));
  }, [page]);

  useEffect(() =&gt; {
    AppState.addEventListener('change', s =&gt; s === 'active' &amp;&amp; setPage(1));
  }, []);

  return (
    &lt;FlatList
      data={users}
      renderItem={({ item, index }) =&gt; (
        &lt;Row key={index} user={item} onPress={() =&gt; navigate(item)} /&gt;
      )}
      onEndReached={() =&gt; setPage(page + 1)}
    /&gt;
  );
}</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (8 lỗi)</span><span class="l-en">Show the answer (8 bugs)</span></span></summary><div class="ans">
    <ul class="l-vi">
      <li><b>Stale closure:</b> <code>users</code> trong effect là giá trị cũ. Dùng <code>setUsers(prev =&gt; [...prev, ...d])</code>.</li>
      <li><b>Không xử lý lỗi:</b> thiếu <code>.catch</code> và không kiểm tra <code>r.ok</code>.</li>
      <li><b>Race condition:</b> không hủy request; trang về sai thứ tự sẽ chèn sai. Dùng AbortController trong cleanup.</li>
      <li><b>onEndReached gọi nhiều lần:</b> không có cờ đang tải và không biết đã hết trang, nên tải trùng trang.</li>
      <li><b>Rò rỉ listener:</b> subscription AppState không được <code>remove()</code> trong cleanup.</li>
      <li><b>setPage(1) không reset danh sách:</b> dữ liệu trang 1 bị nối thêm vào cuối. Nếu page đang là 1 thì effect còn không chạy lại.</li>
      <li><b>Key sai chỗ:</b> <code>key</code> trong renderItem bị bỏ qua và lại là index. Dùng <code>keyExtractor={u =&gt; u.id}</code>.</li>
      <li><b>Re-render thừa:</b> renderItem và onPress tạo mới mỗi lần render nên Row có memo cũng vô ích; <code>useState([])</code> không có type sẽ thành <code>never[]</code> trong TS.</li>
    </ul>
    <ul class="l-en">
      <li><b>Stale closure:</b> <code>users</code> inside the effect is an old value. Use <code>setUsers(prev =&gt; [...prev, ...d])</code>.</li>
      <li><b>No error handling:</b> there's no <code>.catch</code>, and <code>r.ok</code> is never checked.</li>
      <li><b>Race condition:</b> requests are never cancelled, so pages that come back out of order land in the wrong place. Abort them in the cleanup.</li>
      <li><b>onEndReached fires repeatedly:</b> there's no in-flight flag and no notion of the last page, so the same page gets loaded twice.</li>
      <li><b>Leaked listener:</b> the AppState subscription is never <code>remove()</code>d in a cleanup.</li>
      <li><b>setPage(1) doesn't reset the list:</b> page 1 gets appended to the end again. And if page is already 1, the effect doesn't even re-run.</li>
      <li><b>Key in the wrong place:</b> React ignores a <code>key</code> returned from renderItem, and it's the index anyway. Use <code>keyExtractor={u =&gt; u.id}</code>.</li>
      <li><b>Wasted re-renders:</b> renderItem and onPress are recreated on every render, so memoizing Row achieves nothing. Also, <code>useState([])</code> without a type is inferred as <code>never[]</code> in TypeScript.</li>
    </ul></div></details>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted small">Làm trên Expo Snack, bấm giờ, vừa làm vừa nói và quay màn hình. Xem lại bản quay và so với bảng chấm ở trên.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Bài</th><th>Giờ</th><th>Sau tuần</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td>Đếm ngược có Start / Pause / Reset, không lệch giờ khi app vào background</td><td class="mono">15′</td><td class="mono">1</td></tr>
          <tr><td class="mono">2</td><td>Danh sách user từ <code>jsonplaceholder.typicode.com/users</code> có loading, error, retry</td><td class="mono">25′</td><td class="mono">2</td></tr>
          <tr><td class="mono">3</td><td>Search repo GitHub (<code>api.github.com/search/repositories?q=</code>) có debounce và bỏ response cũ</td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">4</td><td>Danh sách Pokémon (<code>pokeapi.co/api/v2/pokemon?limit=20</code>) infinite scroll + pull-to-refresh</td><td class="mono">40′</td><td class="mono">2</td></tr>
          <tr><td class="mono">5</td><td>Form đăng ký có validate, bàn phím không che, chặn submit 2 lần</td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">6</td><td>Weather app: nhập thành phố → màn chi tiết → lưu danh sách yêu thích, giữ lại khi mở lại app</td><td class="mono">45′</td><td class="mono">3</td></tr>
          <tr><td class="mono">7</td><td>Code review đoạn mẫu ở trên rồi viết lại cho đúng</td><td class="mono">20′</td><td class="mono">4</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://github.com/m0therai/reactnative-interview" target="_blank" rel="noopener">GitHub · m0therai/reactnative-interview (đề live coding công khai)</a></li>
      <li><a href="https://javascript.plainenglish.io/my-react-native-coding-interview-experience-weather-app-challenge-760c5ed5b4b5" target="_blank" rel="noopener">Plain English · Weather App Challenge (ứng viên kể lại)</a></li>
      <li><a href="https://dev.to/amitkumar13/react-native-interview-handbook-bonus-75-coding-interview-questions-3nk4" target="_blank" rel="noopener">DEV · React Native Interview Handbook, Coding Interview Practice</a></li>
      <li><a href="https://dev.to/olenadrugalya/react-live-coding-interview-tips-1f5g" target="_blank" rel="noopener">DEV · React Live Coding Interview Tips</a></li>
      <li><a href="https://www.greatfrontend.com/blog/practice-50-react-coding-interview-questions-with-solutions" target="_blank" rel="noopener">GreatFrontEnd · 50+ React Coding Interview Questions</a></li>
      <li><a href="https://itnavi.com.vn/blog/cau-hoi-phong-van-react-native" target="_blank" rel="noopener">ITNavi · Câu hỏi phỏng vấn React Native</a></li>
      <li><a href="https://www.topcv.vn/nhung-cau-hoi-phong-van-react" target="_blank" rel="noopener">TopCV · Câu hỏi phỏng vấn React</a></li>
    </ul>
  </div>`
};
