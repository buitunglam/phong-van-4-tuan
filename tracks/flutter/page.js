/* Flutter: static page parts. The plan, practice and interview panels are rendered
   from data.js by assets/app.js; only their intro text lives here. */
const FL_PAGE={
 hero:`  <span class="eyebrow">Lộ trình phỏng vấn · Flutter · 10/2026</span>
  <h1>Flutter trong 4 tuần</h1>
  <p class="lede">Tổng hợp từ các JD Flutter trên TopDev, TopCV, JobsGO, ITviec, LinkedIn và các trang tuyển dụng quốc tế. Cùng cấu trúc với lộ trình React Native.</p>`,

 jd:`  <div style="display:grid;gap:8px">
    <h2>Các JD Flutter thực sự yêu cầu gì</h2>
    <p class="muted">Đếm trên 15 JD có đủ thông tin kỹ năng (10 Việt Nam, 5 quốc tế, phần lớn là Senior). Nhiều trang TopCV/ITviec chặn đọc chi tiết nên một phần lấy từ đoạn trích của công cụ tìm kiếm, con số thực tế có thể cao hơn.</p>
  </div>
  <div class="box"><div class="freq" id="fl-freq"></div></div>

  <div class="grid2">
    <div class="box">
      <span class="tag must">Phải có</span>
      <ul>
        <li>Dart vững: null safety, async/Future/Stream, generics, isolate</li>
        <li>Hiểu framework: widget / element / render tree, rebuild, layout constraint</li>
        <li>State management: <b>Bloc</b> (nhiều nhất), Riverpod hoặc Provider</li>
        <li>REST API với Dio: interceptor, retry, auth flow</li>
        <li>Clean Architecture, SOLID, DI</li>
        <li>Unit / widget / integration test</li>
        <li>Phát hành App Store + Google Play, có app đã publish</li>
        <li>Xử lý được lỗi native Android / iOS</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag nice">Điểm cộng tạo khác biệt</span>
      <ul>
        <li>Kotlin / Swift ở mức platform channel, Pigeon</li>
        <li>CI/CD: Codemagic, GitHub Actions, Fastlane, Bitrise</li>
        <li>Firebase (Auth, FCM, Crashlytics), Supabase, AWS</li>
        <li>Local DB / offline: Drift, sqflite, Hive, Isar</li>
        <li>Hiệu năng trên máy yếu: startup, memory, network</li>
        <li>Dùng AI coding tool (Claude, Codex, Cursor) có kiểm soát</li>
        <li>Flutter Web / Desktop, React/Next.js, WebSocket, thanh toán</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Senior trên TopCV, ITviec, TopDev</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Công ty</th><th>Kinh nghiệm</th><th>Điểm đáng chú ý</th></tr></thead>
        <tbody>
          <tr><td><b>VUS</b> <span class="mono muted">TopCV</span></td><td class="mono">3+ năm Flutter</td><td>Riverpod, DI, SOLID, clean architecture; concurrency, nền tảng CS (DSA, OS, mạng). Lương 30–40 triệu</td></tr>
          <tr><td><b>FPT Telecom</b> <span class="mono muted">TopCV</span></td><td class="mono">4+ năm, 2+ Flutter</td><td>Clean Architecture, test 3 tầng, CI/CD (Codemagic, GitHub Actions, Fastlane, Bitrise)</td></tr>
          <tr><td><b>4GOO</b> <span class="mono muted">ITviec</span></td><td class="mono">5+ mobile, 3+ Flutter</td><td>Auth flow, offline storage, test 3 tầng, GitLab CI, mentor, tiếng Anh B2+</td></tr>
          <tr><td><b>Softflex</b> <span class="mono muted">ITviec · fintech</span></td><td class="mono">6+ năm, 4+ Flutter</td><td>Flutter <b>kèm</b> React/Next.js, WebSocket, thanh toán, push, xử lý lỗi native</td></tr>
          <tr><td><b>Digital Unicorn</b> <span class="mono muted">ITviec</span></td><td class="mono">5+ năm</td><td>Yêu cầu dùng <b>Claude / Codex</b> ngay trong tiêu đề; Bloc/Provider, Supabase, làm được khi không có backend</td></tr>
          <tr><td><b>EPOS Vietnam</b> <span class="mono muted">ITviec</span></td><td class="mono">6+ năm Flutter</td><td>Flutter + Kotlin native, tối ưu trên máy yếu, mentor, tiếng Anh C1. Khoảng 800 triệu–1,2 tỷ/năm</td></tr>
          <tr><td><b>MB Bank</b> <span class="mono muted">ITviec</span></td><td class="mono">3+ năm</td><td>RN <b>hoặc</b> Flutter, cộng 1+ năm native mỗi nền tảng; ưu tiên kinh nghiệm ngân hàng</td></tr>
          <tr><td><b>DeliGroup</b> <span class="mono muted">ITviec</span></td><td class="mono">3+ năm</td><td>Bloc hoặc Riverpod, thiết kế module, code review, mentor</td></tr>
          <tr><td><b>Nexsoft</b> <span class="mono muted">TopDev</span></td><td class="mono">3+ Flutter, 2+ native</td><td>Flutter cho iOS, Android, PC và Web; UI chuẩn pixel. Tối đa 35 triệu</td></tr>
          <tr><td><b>Trusting Social</b> <span class="mono muted">LinkedIn</span></td><td class="mono">5+ mobile, 3+ Flutter</td><td>App quy mô lớn</td></tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li><b>Senior khác Middle ở:</b> tự thiết kế kiến trúc (Clean/SOLID/DI), mentor và review code, sửa được lỗi native, tối ưu hiệu năng, đủ test và CI/CD. Middle thường đòi 1–3 năm và ít nhất một app đã publish.</li>
      <li><b>Native vẫn quan trọng:</b> 10/15 JD nhắc Kotlin hoặc Swift.</li>
      <li><b>Fintech và ngân hàng</b> chiếm phần lớn tin Senior ở Việt Nam (MB Bank, Softflex, ví BNPL).</li>
      <li><b>Flutter đi kèm stack khác:</b> React/Next.js, React Native, Kotlin native.</li>
      <li><b>AI tool đã vào JD:</b> 4/15 tin nhắc, 2 tin bắt buộc.</li>
    </ul>
  </div>

  <div class="box">
    <h3>Mức lương thấy được</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Mức</th><th>Vị trí</th></tr></thead>
        <tbody>
          <tr><td class="mono">≤ 25 triệu / tháng</td><td>Junior–Middle, 1 năm (K-Tech)</td></tr>
          <tr><td class="mono">20–35 triệu / tháng</td><td>Middle–Senior (HOPEE, Aggregatori Capaci, Nexsoft)</td></tr>
          <tr><td class="mono">30–40 triệu / tháng</td><td>Senior (VUS)</td></tr>
          <tr><td class="mono">≤ 50 triệu / tháng</td><td>Senior 5+ năm, app BNPL (VietnamWorks)</td></tr>
          <tr><td class="mono">~67–100 triệu / tháng</td><td>Senior 6+ năm, EPOS (800 triệu–1,2 tỷ/năm)</td></tr>
          <tr><td class="mono">€35–54K / năm</td><td>Senior, Imaginary Cloud (Bồ Đào Nha)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">LinkedIn hiện có khoảng 81 tin Flutter ở Việt Nam. JobsGO chủ yếu là tin Junior.</p>
  </div>

  <div class="tbl">
    <table>
      <thead><tr><th>Cấp độ</th><th>Kinh nghiệm JD đòi</th><th>Nhà tuyển dụng kỳ vọng</th></tr></thead>
      <tbody>
        <tr><td><b>Fresher / Junior</b></td><td class="mono">0–1 năm</td><td>Dựng UI theo design, gọi API, dùng state management theo pattern có sẵn.</td></tr>
        <tr><td><b>Middle</b></td><td class="mono">1–3 năm</td><td>Tự làm feature trọn vẹn, có app đã publish, viết test, xử lý khác biệt iOS/Android.</td></tr>
        <tr><td><b>Senior / Lead</b></td><td class="mono">3–6+ năm</td><td>Kiến trúc, native, hiệu năng, CI/CD, mentor; ở công ty sản phẩm và fintech thường là 5–6 năm.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://www.topcv.vn/viec-lam/senior-mobile-developer-flutter-ios-android-dart/2002289.html" target="_blank" rel="noopener">TopCV · VUS, Senior Mobile Developer (Flutter)</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-flutter-developer/1946536.html" target="_blank" rel="noopener">TopCV · FPT Telecom, Senior Flutter Developer</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/senior-flutter-developer/1472899.html" target="_blank" rel="noopener">TopCV · Aggregatori Capaci, Senior Flutter Developer</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/lead-flutter-developer/2183829.html" target="_blank" rel="noopener">TopCV · Wavez, Lead Flutter Developer</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/flutter-developer/1653268.html" target="_blank" rel="noopener">TopCV · HOPEE, Flutter Developer</a></li>
      <li><a href="https://www.topcv.vn/viec-lam/flutter-developer/1709974.html" target="_blank" rel="noopener">TopCV · K-Tech, Flutter Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-flutter-developer-dart-ios-android-4goo-5659" target="_blank" rel="noopener">ITviec · 4GOO, Senior Flutter Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-mobile-developer-flutter-softflex-llc-co-ltd-4603" target="_blank" rel="noopener">ITviec · Softflex, Senior Mobile Developer (Flutter)</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-flutter-developer-flutter-dart-claude-codex-digital-unicorn-2346" target="_blank" rel="noopener">ITviec · Digital Unicorn, Senior Flutter Developer</a></li>
      <li><a href="https://itviec.com/it-jobs/senior-flutter-software-engineer-epos-vietnam-1937" target="_blank" rel="noopener">ITviec · EPOS Vietnam, Senior Flutter Software Engineer</a></li>
      <li><a href="https://itviec.com/viec-lam-it/senior-mobile-developer-react-native-flutter-mb-bank-3130" target="_blank" rel="noopener">ITviec · MB Bank, Senior Mobile Developer (RN / Flutter)</a></li>
      <li><a href="https://itviec.com/it-jobs/junior-middle-mobile-developer-flutter-mb-bank-0932" target="_blank" rel="noopener">ITviec · MB Bank, Junior/Middle Mobile Developer (Flutter)</a></li>
      <li><a href="https://itviec.com/viec-lam-it/junior-senior-mobile-app-developer-flutter-dart-deligroup-1755" target="_blank" rel="noopener">ITviec · DeliGroup, Mobile App Developer (Flutter)</a></li>
      <li><a href="https://topdev.vn/viec-lam/urgent-03-flutter-developer-middle-senior-nexsoft-technology-2035533" target="_blank" rel="noopener">TopDev · Nexsoft, Flutter Developer (Middle/Senior)</a></li>
      <li><a href="https://topdev.vn/detail-jobs/flutter-mobile-developer-vnib-tech-2035007" target="_blank" rel="noopener">TopDev · VNIB Tech, Flutter Mobile Developer</a></li>
      <li><a href="https://www.vietnamworks.com/senior-mobile-developer-up-to-50-mil-1987206-jv" target="_blank" rel="noopener">VietnamWorks · Senior Mobile Developer (Flutter, BNPL)</a></li>
      <li><a href="https://jobsgo.vn/viec-lam-flutter-developer.html" target="_blank" rel="noopener">JobsGO · Việc làm Flutter Developer</a></li>
      <li><a href="https://vn.linkedin.com/jobs/flutter-jobs" target="_blank" rel="noopener">LinkedIn · Flutter jobs in Vietnam</a></li>
      <li><a href="https://vn.linkedin.com/jobs/view/senior-mobile-developer-flutter-at-trusting-social-3502681018" target="_blank" rel="noopener">LinkedIn · Trusting Social, Senior Mobile Developer (Flutter)</a></li>
      <li><a href="https://teamtailor.imaginarycloud.com/jobs/8546113-senior-mobile-developer-flutter" target="_blank" rel="noopener">Imaginary Cloud · Senior Mobile Developer (Flutter)</a></li>
      <li><a href="https://jobs.lever.co/idt/027b0693-41d8-4262-a0de-26fd2b186d28" target="_blank" rel="noopener">Lever · IDT, Senior Flutter</a></li>
      <li><a href="https://jobs.lever.co/zocks/4dea8576-f17f-4e38-bca6-430e8cc9565b" target="_blank" rel="noopener">Lever · Zocks, Senior Flutter</a></li>
      <li><a href="https://apply.workable.com/t63/jobs/view/9B1760761F.md" target="_blank" rel="noopener">Workable · Talent-360, Senior Flutter</a></li>
      <li><a href="https://apply.workable.com/tawantech/jobs/view/E4F7EC89FB.md" target="_blank" rel="noopener">Workable · TawanTech, Senior Flutter</a></li>
      <li><a href="https://riverpod.dev/docs/whats_new" target="_blank" rel="noopener">riverpod.dev · What's new in Riverpod 3.0</a></li>
    </ul>
    <p class="muted note">Nhiều tin đã hết hạn nhưng yêu cầu vẫn đại diện. Không có JD nào nhắc Impeller, flavors hay FFI, nhưng các câu này vẫn hay được hỏi trong phỏng vấn Senior.</p>
  </div>`,

 planIntro:`Khoảng 20–24 giờ mỗi tuần (3–4 giờ mỗi ngày). Mỗi tuần chia hai nửa: ngày 1–3 và ngày 4–7, mỗi nửa có checklist và lab riêng. Tick vào mục đã học, tiến độ được lưu trên trình duyệt này. Lab 4 tuần cộng lại thành app <b>“Expense Tracker”</b> bản Flutter: login, danh sách, offline, push, plugin native, CI.`,

 lc:`  <div style="display:grid;gap:8px">
    <h2>Vòng live coding Flutter</h2>
    <p class="muted">Tổng hợp từ hướng dẫn tuyển dụng của các công ty thuê Flutter, review trên Glassdoor, đề take-home công khai và các guide phỏng vấn 2026. Chưa có công ty nào công bố bảng chấm chính thức, nên tiêu chí bên dưới là tổng hợp từ phía người tuyển.</p>
  </div>

  <div class="box">
    <h3>Các dạng hay gặp</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Dạng</th><th>Thời gian</th><th>Diễn ra thế nào</th></tr></thead>
        <tbody>
          <tr><td><b>Live, đề tăng dần</b></td><td class="mono">45–60′</td><td>Chia sẻ màn hình, 2–3 bài nối tiếp: counter → gọi REST có loading/error → search có debounce và phân trang.</td></tr>
          <tr><td><b>Dựng từ đầu, tắt AI</b></td><td class="mono">60′</td><td>Very Good Ventures: ứng viên dựng project từ đầu, vừa làm vừa giải thích, không được dùng AI. Một số ứng viên được hỏi về project cũ thay vì code.</td></tr>
          <tr><td><b>Refactor</b></td><td class="mono">45–60′</td><td>Nhận một project Flutter viết vội, refactor và giải thích vì sao đổi.</td></tr>
          <tr><td><b>Online assessment</b></td><td class="mono">1–3h</td><td>Junior: app tính giai thừa có validate input. Middle: ListView bài viết từ REST, pull-to-refresh, retry khi lỗi. Senior: task manager dùng SQLite (thêm, đánh dấu xong, xóa, tìm kiếm), chạy được cả dọc và ngang.</td></tr>
          <tr><td><b>Take-home</b></td><td class="mono">3–8h</td><td>Ví dụ: app ghi cân nặng dùng Firebase anonymous auth + Firestore, danh sách realtime sắp theo ngày; bonus sửa/xóa/đăng xuất. Chấm: đủ yêu cầu, cấu trúc project, tách UI/auth/DB, không over-engineer, đặt tên rõ.</td></tr>
          <tr><td><b>Lý thuyết sâu, không IDE</b></td><td class="mono">30–45′</td><td>Giải thích widget/element/render tree, tìm lỗi trong đoạn code khó test, lý giải lựa chọn state management.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Năm 2026, phần lớn vòng live vẫn cấm AI, còn take-home thì thường cho dùng. Hỏi recruiter trước để chuẩn bị đúng cách.</p>
  </div>

  <div class="box">
    <h3>Đề phổ biến và cách chấm</h3>
    <div class="tbl">
      <table>
        <thead><tr><th>Đề</th><th>Mức đạt</th><th>Mức Senior</th></tr></thead>
        <tbody>
          <tr><td><b>Fetch + hiển thị list</b></td><td>loading, error, empty; chọn đúng FutureBuilder hay StreamBuilder</td><td>Tách repository, model có type (freezed/json_serializable), retry, parse JSON lớn trong isolate</td></tr>
          <tr><td><b>Search có debounce</b></td><td>Timer hoặc debounceTime, không gọi API mỗi phím</td><td>Bỏ response cũ (request id / restartable), cancel timer trong dispose, kiểm tra mounted</td></tr>
          <tr><td><b>Infinite scroll + pull-to-refresh</b></td><td>ScrollController theo ngưỡng, RefreshIndicator</td><td>Chặn request trùng, dedupe theo id, xử lý tranh chấp giữa refresh và tải trang, hết trang thì dừng</td></tr>
          <tr><td><b>Form có validate</b></td><td>Form + TextFormField validator</td><td>Chặn submit 2 lần, focus chuyển ô, bàn phím không che, Semantics</td></tr>
          <tr><td><b>Chọn state management</b></td><td>Dùng được Bloc hoặc Riverpod</td><td>Lý giải theo ràng buộc dự án, nêu phương án thay thế và điểm yếu</td></tr>
          <tr><td><b>SQLite task manager</b></td><td>CRUD chạy đúng</td><td>Repository, migration, query search, layout chạy cả dọc và ngang</td></tr>
          <tr><td><b>Platform channel</b></td><td>MethodChannel trả về giá trị</td><td>Pigeon type-safe, PlatformException, đúng thread, EventChannel cho stream</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Với Senior, nên trả lời theo khung: bối cảnh → quyết định → phương án khác → khi nào nó hỏng → bằng chứng.</p>
  </div>

  <div class="box">
    <h3>Chia 60 phút thế nào</h3>
    <div class="tbl">
      <table>
        <tbody>
          <tr><td class="mono">0–5′</td><td>Hỏi lại yêu cầu: API trả gì, có phân trang không, được dùng package nào (http/dio, Bloc/Riverpod) hay chỉ setState.</td></tr>
          <tr><td class="mono">5–10′</td><td>Nói kế hoạch: widget nào, state đặt ở đâu, model ra sao.</td></tr>
          <tr><td class="mono">10–35′</td><td>Happy path chạy được trước. Vừa code vừa nói.</td></tr>
          <tr><td class="mono">35–50′</td><td>loading, error, empty, dispose, mounted, edge case.</td></tr>
          <tr><td class="mono">50–60′</td><td>Dọn code, nói sẽ viết widget test gì, trade-off, hướng mở rộng.</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="grid2">
    <div class="box">
      <span class="tag ok">Nên</span>
      <ul>
        <li>Nghĩ thành tiếng, hỏi trước khi giả định.</li>
        <li>Dùng setState nếu đề nhỏ; chỉ thêm Bloc/Riverpod khi được yêu cầu hoặc có lý do.</li>
        <li>Thêm <code>const</code> và Key cho item list.</li>
        <li>Dispose controller, cancel Timer và StreamSubscription.</li>
        <li>Kiểm tra <code>mounted</code> sau mỗi <code>await</code>.</li>
        <li>Thuộc sẵn: ListView.builder, RefreshIndicator, Timer debounce, FutureBuilder.</li>
        <li>Quen sẵn DartPad hoặc editor bạn sẽ dùng.</li>
      </ul>
    </div>
    <div class="box">
      <span class="tag must">Tránh</span>
      <ul>
        <li>ListView trong Column mà không có Expanded (unbounded height).</li>
        <li><code>ListView(children:)</code> cho danh sách dài.</li>
        <li>Gọi API trong <code>build()</code>.</li>
        <li>Dùng <code>context</code> sau await mà không kiểm tra.</li>
        <li>Rải <code>!</code> để né null safety.</li>
        <li>Dùng GetX hay GlobalKey khi không cần.</li>
        <li>Chấp nhận code AI gợi ý mà không giải thích được.</li>
      </ul>
    </div>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: search có debounce</h3>
<pre>class SearchPage extends StatefulWidget {
  const SearchPage({super.key, required this.search});
  final Future&lt;List&lt;Repo&gt;&gt; Function(String query) search;

  @override
  State&lt;SearchPage&gt; createState() =&gt; _SearchPageState();
}

class _SearchPageState extends State&lt;SearchPage&gt; {
  Timer? _debounce;
  int _requestId = 0;
  bool _loading = false;
  Object? _error;
  List&lt;Repo&gt; _results = const [];

  void _onChanged(String text) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 300), () =&gt; _run(text.trim()));
  }

  Future&lt;void&gt; _run(String query) async {
    final id = ++_requestId; // only the latest request may update the UI
    if (query.isEmpty) {
      setState(() {
        _results = const [];
        _error = null;
        _loading = false;
      });
      return;
    }
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      final results = await widget.search(query);
      if (!mounted || id != _requestId) return;
      setState(() {
        _results = results;
        _loading = false;
      });
    } catch (e) {
      if (!mounted || id != _requestId) return;
      setState(() {
        _error = e;
        _loading = false;
      });
    }
  }

  @override
  void dispose() {
    _debounce?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          onChanged: _onChanged,
          decoration: const InputDecoration(hintText: 'Search repositories'),
        ),
        if (_loading) const LinearProgressIndicator(),
        if (_error != null)
          Text('Something went wrong', style: TextStyle(color: Theme.of(context).colorScheme.error)),
        Expanded(
          child: ListView.builder(
            itemCount: _results.length,
            itemBuilder: (context, i) =&gt; ListTile(
              key: ValueKey(_results[i].id),
              title: Text(_results[i].name),
            ),
          ),
        ),
      ],
    );
  }
}</pre>
  </div>

  <div class="box">
    <h3>Đoạn code nên thuộc: infinite scroll + pull-to-refresh</h3>
<pre>class PageResult&lt;T&gt; {
  const PageResult(this.items, this.next);
  final List&lt;T&gt; items;
  final String? next; // null means there are no more pages
}

class _FeedPageState extends State&lt;FeedPage&gt; {
  final _scroll = ScrollController();
  final _items = &lt;Post&gt;[];
  final _ids = &lt;String&gt;{};
  String? _cursor;
  bool _hasMore = true;
  bool _loading = false; // guards against duplicate page requests
  Object? _error;

  @override
  void initState() {
    super.initState();
    _scroll.addListener(() {
      if (_scroll.position.extentAfter &lt; 500) _loadMore();
    });
    // setState is not allowed inside initState, so start after the first frame
    WidgetsBinding.instance.addPostFrameCallback((_) =&gt; _loadMore());
  }

  Future&lt;void&gt; _loadMore() async {
    if (_loading || !_hasMore) return;
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      final page = await widget.fetchPage(_cursor);
      if (!mounted) return;
      setState(() {
        for (final p in page.items) {
          if (_ids.add(p.id)) _items.add(p); // dedupe by id
        }
        _cursor = page.next;
        _hasMore = page.next != null;
      });
    } catch (e) {
      if (mounted) setState(() =&gt; _error = e); // keep what is already on screen
    } finally {
      if (mounted) setState(() =&gt; _loading = false);
    }
  }

  Future&lt;void&gt; _refresh() async {
    if (_loading) return; // don't race a page that is still loading
    _loading = true;
    try {
      final page = await widget.fetchPage(null);
      if (!mounted) return;
      setState(() {
        _items
          ..clear()
          ..addAll(page.items);
        _ids
          ..clear()
          ..addAll(page.items.map((p) =&gt; p.id));
        _cursor = page.next;
        _hasMore = page.next != null;
        _error = null;
      });
    } catch (e) {
      if (mounted) setState(() =&gt; _error = e); // the old list stays visible
    } finally {
      _loading = false;
    }
  }

  @override
  void dispose() {
    _scroll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_items.isEmpty &amp;&amp; _loading) return const Center(child: CircularProgressIndicator());
    if (_items.isEmpty &amp;&amp; _error != null) {
      return Center(child: TextButton(onPressed: _loadMore, child: const Text('Retry')));
    }
    return RefreshIndicator(
      onRefresh: _refresh,
      child: ListView.builder(
        controller: _scroll,
        physics: const AlwaysScrollableScrollPhysics(),
        itemCount: _items.length + (_hasMore || _error != null ? 1 : 0),
        itemBuilder: (context, i) {
          if (i == _items.length) {
            return _error != null
                ? TextButton(onPressed: _loadMore, child: const Text('Retry'))
                : const Padding(
                    padding: EdgeInsets.all(16),
                    child: Center(child: CircularProgressIndicator()),
                  );
          }
          final post = _items[i];
          return PostTile(key: ValueKey(post.id), post: post);
        },
      ),
    );
  }
}</pre>
    <p class="muted note">Đặt tên <code>PageResult</code> thay vì <code>Page</code> vì Flutter đã có class <code>Page</code> của Navigator. Câu hỏi tiếp theo hay gặp: chuyển đoạn này sang Bloc (event transformer <code>droppable</code>) hoặc Riverpod <code>AsyncNotifier</code> thế nào?</p>
  </div>

  <div class="box">
    <h3><span class="l-vi">Bài code review mẫu: tìm lỗi trong 10 phút</span><span class="l-en">Sample code review: find the bugs in 10 minutes</span></h3>
<pre>class UserList extends StatefulWidget {
  @override
  State&lt;UserList&gt; createState() =&gt; _UserListState();
}

class _UserListState extends State&lt;UserList&gt; {
  List users = [];
  int page = 1;
  final controller = ScrollController();

  @override
  void initState() {
    super.initState();
    load();
    controller.addListener(() {
      if (controller.position.pixels == controller.position.maxScrollExtent) {
        page++;
        load();
      }
    });
    Connectivity().onConnectivityChanged.listen((_) =&gt; load());
  }

  void load() async {
    final res = await http.get(Uri.parse('https://api.example.com/users?page=$page'));
    setState(() =&gt; users.addAll(jsonDecode(res.body)));
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Loaded page $page')));
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Text('Users'),
      ListView(
        controller: controller,
        children: users.map((u) =&gt; UserTile(user: u)).toList(),
      ),
    ]);
  }
}</pre>
    <details><summary><span><span class="l-vi">Xem đáp án (8 lỗi)</span><span class="l-en">Show the answer (8 bugs)</span></span></summary><div class="ans">
    <ul class="l-vi">
      <li><b>Dùng state và context sau await:</b> không kiểm tra <code>mounted</code>; widget đã dispose thì setState và ScaffoldMessenger sẽ lỗi.</li>
      <li><b>Không xử lý lỗi:</b> không try/catch, không kiểm tra <code>statusCode</code>; <code>jsonDecode</code> payload lớn chạy trên UI isolate.</li>
      <li><b>Tải trang trùng:</b> listener ở đáy cuộn gọi nhiều lần liên tiếp, <code>page++</code> nhảy trang; không có cờ đang tải và không biết hết trang.</li>
      <li><b>Rò rỉ subscription:</b> stream connectivity không được cancel trong dispose, và mỗi lần đổi mạng lại nối thêm trang hiện tại vào danh sách.</li>
      <li><b>Không dispose ScrollController.</b></li>
      <li><b>Unbounded height:</b> ListView nằm trong Column không có Expanded sẽ báo lỗi layout.</li>
      <li><b>ListView(children:)</b> build toàn bộ danh sách; dùng <code>ListView.builder</code> và Key theo id.</li>
      <li><b>Type và chữ ký:</b> <code>List users</code> là <code>List&lt;dynamic&gt;</code> không có model; <code>void load() async</code> không await được và lỗi bị nuốt, nên dùng <code>Future&lt;void&gt;</code>; thiếu <code>const</code> và <code>super.key</code>.</li>
    </ul>
    <ul class="l-en">
      <li><b>State and context used after an await:</b> <code>mounted</code> is never checked, so setState and ScaffoldMessenger blow up if the widget has been disposed.</li>
      <li><b>No error handling:</b> no try/catch and no <code>statusCode</code> check, and <code>jsonDecode</code> runs on the UI isolate even for large payloads.</li>
      <li><b>Duplicate page loads:</b> the bottom-of-list listener fires several times in a row, so <code>page++</code> skips pages. There's no in-flight flag and no notion of the last page.</li>
      <li><b>Leaked subscription:</b> the connectivity stream is never cancelled in dispose, and every network change appends the current page to the list again.</li>
      <li><b>The ScrollController is never disposed.</b></li>
      <li><b>Unbounded height:</b> a ListView inside a Column without Expanded throws a layout error.</li>
      <li><b>ListView(children:)</b> builds the entire list up front. Use <code>ListView.builder</code> with keys based on id.</li>
      <li><b>Types and signatures:</b> <code>List users</code> is a <code>List&lt;dynamic&gt;</code> with no model; <code>void load() async</code> can't be awaited and swallows errors, so make it <code>Future&lt;void&gt;</code>; <code>const</code> and <code>super.key</code> are missing.</li>
    </ul></div></details>
  </div>

  <div class="box">
    <h3>7 bài luyện bấm giờ</h3>
    <p class="muted small">Làm trên DartPad hoặc máy của bạn, bấm giờ, vừa làm vừa nói và quay màn hình. Bài 6 là đề Senior thật trong online assessment.</p>
    <div class="tbl">
      <table>
        <thead><tr><th>#</th><th>Bài</th><th>Giờ</th><th>Sau tuần</th></tr></thead>
        <tbody>
          <tr><td class="mono">1</td><td>Đồng hồ đếm ngược Start / Pause / Reset, dispose đúng, không lệch giờ khi app vào background</td><td class="mono">15′</td><td class="mono">1</td></tr>
          <tr><td class="mono">2</td><td>Danh sách user từ <code>jsonplaceholder.typicode.com/users</code> có loading, error, retry; làm bằng FutureBuilder rồi chuyển sang Cubit</td><td class="mono">25′</td><td class="mono">2</td></tr>
          <tr><td class="mono">3</td><td>Search repo GitHub (<code>api.github.com/search/repositories?q=</code>) có debounce và bỏ response cũ</td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">4</td><td>Danh sách Pokémon (<code>pokeapi.co/api/v2/pokemon?limit=20</code>) infinite scroll + pull-to-refresh</td><td class="mono">40′</td><td class="mono">3</td></tr>
          <tr><td class="mono">5</td><td>Form đăng ký có validate, chặn submit 2 lần, bàn phím không che</td><td class="mono">30′</td><td class="mono">2</td></tr>
          <tr><td class="mono">6</td><td>Task manager dùng SQLite (sqflite hoặc Drift): thêm, đánh dấu xong, xóa, tìm kiếm; chạy được cả dọc và ngang</td><td class="mono">60′</td><td class="mono">3</td></tr>
          <tr><td class="mono">7</td><td>Code review đoạn mẫu ở trên rồi viết lại cho đúng</td><td class="mono">20′</td><td class="mono">4</td></tr>
        </tbody>
      </table>
    </div>
    <p class="muted note">Muốn luyện take-home: làm app ghi cân nặng với Firebase anonymous auth + Firestore trong tối đa 4 giờ, rồi tự chấm theo 5 tiêu chí ở bảng “Các dạng hay gặp”.</p>
  </div>

  <div class="box src">
    <h3>Nguồn</h3>
    <ul>
      <li><a href="https://www.wisemonk.io/blogs/a-comprehensive-guide-to-interviewing-flutter-developers-in-india" target="_blank" rel="noopener">Wisemonk · Guide to interviewing Flutter developers</a></li>
      <li><a href="https://www.glassdoor.com/Interview/Very-Good-Ventures-Flutter-Developer-Interview-Questions-EI_IE4873928.0,18_KO19,36.htm" target="_blank" rel="noopener">Glassdoor · Very Good Ventures, Flutter Developer interviews</a></li>
      <li><a href="https://www.glassdoor.co.in/Interview/senior-flutter-engineer-interview-questions-SRCH_KO0,23.htm" target="_blank" rel="noopener">Glassdoor · Senior Flutter Engineer interview questions</a></li>
      <li><a href="https://codewithandrea.com/videos/take-home-job-interview-flutter-firebase/" target="_blank" rel="noopener">Code With Andrea · Flutter + Firebase take-home</a></li>
      <li><a href="https://codewithandrea.com/articles/flutter-riverpod-pagination/" target="_blank" rel="noopener">Code With Andrea · Riverpod pagination</a></li>
      <li><a href="https://github.com/debasmitasarkar/flutter_interview_guide_2026" target="_blank" rel="noopener">GitHub · flutter_interview_guide_2026</a></li>
      <li><a href="https://lemon.io/interview-questions/flutter/" target="_blank" rel="noopener">Lemon.io · Flutter interview questions</a></li>
      <li><a href="https://distantjob.com/interview-questions/flutter/" target="_blank" rel="noopener">DistantJob · Flutter interview questions</a></li>
      <li><a href="https://salari.dev/guides/cross-platform/senior-flutter-interview-questions/" target="_blank" rel="noopener">salari.dev · Senior Flutter interview questions</a></li>
      <li><a href="https://medium.com/@artur.fijal.koalasoft/real-flutter-interview-questions-d522f77cbd87" target="_blank" rel="noopener">Medium · Real Flutter interview questions</a></li>
      <li><a href="https://www.techinterview.org/post/3233474911/ai-tool-policy-tracker-tech-companies-2026/" target="_blank" rel="noopener">techinterview.org · AI tool policy tracker 2026</a></li>
    </ul>
  </div>`
};
