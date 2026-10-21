# Lộ trình ôn phỏng vấn Mobile, Web & Backend

Bộ tài liệu ôn tập để đi phỏng vấn vị trí **React Native, Flutter, React.js, Next.js, Android (Kotlin) và Node.js backend**, tập trung vào cấp Middle–Senior ở thị trường Việt Nam. Toàn bộ nội dung bám theo yêu cầu trong các JD thực tế, không phải danh sách câu hỏi chung chung.

**Xem trực tiếp:** https://buitunglam.github.io/phong-van-4-tuan/

## Có gì bên trong

Mỗi stack có 5 mục, chọn ở menu bên trái:

| Mục | Nội dung |
|---|---|
| **JD nói gì** | Tần suất từng kỹ năng trên các JD đã đọc, bảng tin Senior trên TopCV / ITviec / TopDev, mức lương, khác biệt giữa Middle và Senior |
| **Lộ trình 4 tuần** | Mỗi tuần chia ngày 1–3 và ngày 4–7, có checklist, lab và tài liệu. Bấm vào từng chủ đề để xem **Khái niệm, Giải thích và Ví dụ thực tế** (448 chủ đề). Lab của cả 4 tuần cộng lại thành một app hoàn chỉnh để đưa vào CV (Node.js là backend API, React.js là web app cho chính app đó) |
| **Câu hỏi luyện tập** | Câu hỏi kèm đáp án mẫu, lọc theo tuần |
| **Câu hỏi phỏng vấn** | Câu hỏi theo nhóm và cấp độ (Junior / Middle / Senior), kèm các ý interviewer muốn nghe |
| **Live coding** | Các dạng đề hay gặp, bảng chấm điểm, cách chia 60 phút, code mẫu nên thuộc, bài code review tìm lỗi và 7 bài luyện bấm giờ |

| Stack | Câu luyện tập | Câu phỏng vấn | Phiên bản bám theo |
|---|---|---|---|
| React Native | 31 | 45 | New Architecture, Expo / EAS |
| Flutter | 32 | 39 | Dart 3, Riverpod 3, Impeller |
| React.js | 32 | 45 | React 19.3, React Compiler 1.0, Vite 8, React Router 8, TanStack Query 5 |
| Next.js | 32 | 44 | Next.js 16.4, React 19.3 |
| Android | 34 | 46 | Android 17 (API 37), Compose, Room 3, Navigation 3 |
| Node.js | 32 | 47 | Node 24 LTS (Node 26 lên LTS 28/10/2026), TypeScript 7, Express 5, NestJS 12, PostgreSQL 18 |

Một vài tính năng nhỏ:

- **Song ngữ:** nút **VI / EN** đổi câu hỏi và câu trả lời sang tiếng Anh, dùng để luyện phỏng vấn bằng tiếng Anh.
- **Đọc đầy đủ:** mỗi câu trả lời có link tới tài liệu chính thức (react.dev, reactnative.dev, docs.flutter.dev, dart.dev, nextjs.org, developer.android.com, kotlinlang.org, nodejs.org, docs.nestjs.com, web.dev, tanstack.com…).
- **Lưu tiến độ:** các mục đã tick trong checklist được lưu trên trình duyệt bạn đang dùng.

## Cách dùng

1. Mở mục **JD nói gì** của stack bạn ứng tuyển để biết nhà tuyển dụng cần gì.
2. Học theo **Lộ trình 4 tuần**, khoảng 3–4 giờ mỗi ngày, tick từng chủ đề khi xong.
3. Cuối mỗi nửa tuần, trả lời thành tiếng các **Câu hỏi luyện tập** của tuần đó trước khi mở đáp án.
4. Tuần cuối, làm các bài **Live coding** có bấm giờ và quay màn hình, rồi luyện **Câu hỏi phỏng vấn** theo đúng cấp độ.

## Nguồn dữ liệu

- **JD:** lấy từ TopDev, TopCV, ITviec, JobsGO, VietnamWorks, LinkedIn và các trang quốc tế (Lever, Greenhouse, Workable, Ashby, Djinni), tổng hợp tháng 10/2026.
  - Một số trang chặn đọc chi tiết, nên các tin đó chỉ dựa trên đoạn trích của công cụ tìm kiếm. Trên trang có ghi chú rõ.
  - Nhiều tin đã hết hạn nhưng yêu cầu vẫn đại diện cho thị trường.
- **Kiến thức:** ưu tiên tài liệu chính thức. Các mốc phiên bản (Next.js 16, Android 17, yêu cầu target API của Google Play, lịch LTS của Node.js…) đã được đối chiếu với trang chính thức tại thời điểm viết.
- **Live coding:** tổng hợp từ đề công khai và bài chia sẻ của ứng viên. Chưa công ty nào công bố bảng chấm chính thức, nên bảng chấm trên trang là tổng hợp, không phải tiêu chí của một công ty cụ thể.

Công nghệ thay đổi nhanh. Nếu thấy thông tin đã cũ, hãy kiểm tra lại với link "Đọc đầy đủ" ở từng câu.

## Cấu trúc repo

Toàn bộ trang nằm trong một file `index.html` (HTML, CSS, JS thuần, không cần build) và được host bằng GitHub Pages từ nhánh `main`. Muốn chạy ở máy, chỉ cần mở `index.html` bằng trình duyệt.
