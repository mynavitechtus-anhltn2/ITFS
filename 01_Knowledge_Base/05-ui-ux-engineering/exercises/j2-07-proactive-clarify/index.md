---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Bài làm · Proactive Clarify Drill

---

## Brief 1 — ProjectCard dùng chung Admin/User

### Bước 1 — Tự Clarify trước (không dùng AI)

1. Admin có CTA User không có (sửa/xóa/duyệt) không? Nếu có, card dùng chung nên nhận `children`/slot action hay `variant="admin"` — **component boundary**.
2. `starred` / filter list: mỗi trang tự lift state (như bài UI State) hay một store dùng chung hai route? Card có được phép tự `useState(starred)` không — **state ownership**.
3. “Responsive theo chuẩn hiện tại” = breakpoint **640px / 1→2 cột** đã dùng ở bài Responsive, hay token khác trên Figma Admin?

### Bước 2 — AI gợi ý (dán lại danh sách AI trả về)

Prompt: _Liệt kê câu hỏi Clarify cần hỏi trước khi implement brief này, tập trung component boundary/state/responsive/a11y._

1. ProjectCard dùng lại ở những màn nào ngoài User/Admin?
2. Hai màn khác nhau về data field (role, budget, internal ID) hay chỉ khác action?
3. Ai sở hữu state `starred` — card, list, hay URL?
4. Breakpoint mobile của app hiện tại là bao nhiêu? Admin có được phép 1 cột không?
5. Card có cần keyboard (Tab tới nút Mở/Sửa) và `alt` ảnh không?
6. Có dùng TypeScript interface chung không?
7. API backend Admin và User đã unify schema chưa?
8. Có cần unit test snapshot cho từng variant không?

### Bước 3 — Tự lọc (giữ/bỏ + lý do, cho từng câu AI gợi ý)

| Câu hỏi AI gợi ý                        | Giữ / Bỏ | Lý do                                                              |
| --------------------------------------- | -------- | ------------------------------------------------------------------ |
| Dùng lại ở màn nào ngoài User/Admin?    | **Bỏ**   | Brief đã chốt 2 màn; hỏi thêm scope làm rộng sprint                |
| Hai màn khác field hay chỉ khác action? | **Giữ**  | Quyết định props vs composition; trùng ý câu tự hỏi #1             |
| Ai sở hữu `starred`?                    | **Giữ**  | Trùng câu tự hỏi thứ hai — bắt buộc trước khi share card                   |
| Breakpoint / Admin 1 cột?               | **Giữ**  | Brief nói “chuẩn hiện tại” mơ hồ — cần số                          |
| Keyboard + alt ảnh?                     | **Giữ**  | A11y; control mới trên Admin dễ quên Tab                        |
| TypeScript interface chung?             | **Bỏ**   | Stack bài HTML/React CDN; không chặn implement UI                  |
| API unify schema?                       | **Bỏ**   | Ngoài scope UI; hỏi lead backend khi có contract, không hỏi PM design |
| Unit test snapshot từng variant?        | **Bỏ**   | Ngoài scope “dùng lại UI”; chưa yêu cầu test trong scope này                        |

---

## Brief 2 — Lọc theo tag cho ProjectList

### Bước 1 — Tự Clarify trước (không dùng AI)

1. Chọn tag xong rời trang rồi quay lại: reset hay nhớ (URL `?tag=` vs chỉ `useState` trên trang) — **state ownership**.
2. Control là chip (nhiều tag) hay dropdown (một tag)? Cần Tab/Enter chọn được như checklist Tab/a11y không — **a11y**.
3. Mobile: hàng chip wrap hay kéo ngang? Có được ẩn filter vào disclosure không — **responsive**.

### Bước 2 — AI gợi ý (dán lại danh sách AI trả về)

1. Tag lấy từ field nào trên project (một hay nhiều tag/item)?
2. Multi-select hay single-select?
3. Lọc kết hợp search hiện có thế nào (AND/OR)?
4. Persist filter khi reload / share link không?
5. Empty state khi không có project khớp tag?
6. Có cần analytics event mỗi lần đổi tag không?
7. Tag do admin tạo động — có màn CRUD tag trong scope này không?
8. Control có đủ contrast và focus ring không?

### Bước 3 — Tự lọc (giữ/bỏ + lý do, cho từng câu AI gợi ý)

| Câu hỏi AI gợi ý                | Giữ / Bỏ | Lý do                                                              |
| ------------------------------- | -------- | ------------------------------------------------------------------ |
| Tag field một hay nhiều / item? | **Giữ**  | Quyết định model lọc; brief chỉ ví dụ "Frontend"                   |
| Multi vs single select?         | **Giữ**  | Quyết định UI chip vs dropdown — trùng control                     |
| Kết hợp search AND/OR?          | **Giữ**  | Đã có search ở bài UI State; im lặng sẽ đoán sai                          |
| Persist reload / share link?    | **Giữ**  | Trùng câu tự hỏi đầu                                                |
| Empty state?                    | **Giữ**  | UI bắt buộc khi lọc chặt; hẹp, trả lời được                        |
| Analytics mỗi lần đổi tag?      | **Bỏ**   | Ngoài product analytics; không chặn UI filter                      |
| CRUD tag trong scope?           | **Bỏ**   | Brief chỉ lọc list; đừng phình thành admin tag                     |
| Contrast + focus ring?          | **Giữ**  | A11y; rút thành “chip/dropdown có Tab được không?” (câu tự hỏi thứ hai) |

---

## Brief 3 — Landing page SEO nhưng "dùng CSR hiện tại"

### Bước 1 — Tự Clarify trước (không dùng AI)

1. **Mâu thuẫn ngầm:** “cần lên Google tốt” (HTML đủ nội dung lúc đầu → SSG/SSR) vs “deadline gấp, stack SPA CSR” (JS vẽ sau, bot/OG yếu). Cái nào thắng — đổi render model hay chấp nhận SEO kém?
2. Nội dung tĩnh: copy/hero chốt chưa, hay marketing gửi sau? SSG cần nguồn sự thật lúc build.
3. Landing public không auth — có form/CTA nào cần CSR không, hay trang đọc thuần?

> Finding: brief nghe rõ + gấp nên dễ bỏ qua conflict **SEO ↔ CSR**. Đây là câu hỏi render model, không phải “làm đẹp hero”.

### Bước 2 — AI gợi ý (dán lại danh sách AI trả về)

1. Trang public có cần SSR/SSG thay vì CSR để SEO không?
2. Title / meta / OG image đã có copy chưa?
3. Hero có video/animation nặng không (ảnh hưởng LCP)?
4. Form đăng ký trên landing hay chỉ link sang app?
5. Có A/B testing hero không?
6. i18n bao nhiêu ngôn ngữ?
7. Deadline “gấp” là ship tĩnh lên CDN hay phải gắn vào SPA hiện tại?
8. Mobile breakpoint landing khác app không?

### Bước 3 — Tự lọc (giữ/bỏ + lý do, cho từng câu AI gợi ý)

| Câu hỏi AI gợi ý             | Giữ / Bỏ | Lý do                                           |
| ---------------------------- | -------- | ----------------------------------------------- |
| SSR/SSG vs CSR cho SEO?      | **Giữ**  | Đúng mâu thuẫn ngầm — câu quan trọng nhất       |
| Title / meta / OG?           | **Giữ**  | SEO cụ thể, hẹp; CSR shell dễ thiếu             |
| Video/LCP?                   | **Bỏ**   | Tối ưu perf sớm; brief chưa có media            |
| Form vs link?                | **Giữ**  | Quyết định đảo CSR nhỏ trên trang tĩnh          |
| A/B testing hero?            | **Bỏ**   | Scope phình; không nói trong brief              |
| i18n bao nhiêu locale?       | **Bỏ**   | Không có tín hiệu đa ngữ                        |
| Gấp = CDN tĩnh hay nhét SPA? | **Giữ**  | Làm rõ “stack hiện tại” — trade-off với câu 1   |
| Breakpoint landing khác app? | **Giữ**  | Responsive; nhưng ưu tiên thấp hơn render model |

---

## Reflection

Câu tự nghĩ mà AI **không** gợi ý nguyên văn: _Admin vs User — `children`/slot action hay `variant="admin"`?_ AI hỏi chung “khác field hay khác action” nhưng không đẩy tới **cách cắt hợp đồng component**. Nó thiếu context repo: đã có `ProjectCard` presentational (demo component) và bài Component Architecture cấm wrapper rỗng / props xuyên tâm. Không đọc code hiện tại thì AI chỉ ra câu mẫu “có tái sử dụng không?” — trong khi brief đã trả lời “có”. Lọc + câu riêng từ ranh giới thật mới là Clarify chủ động.
