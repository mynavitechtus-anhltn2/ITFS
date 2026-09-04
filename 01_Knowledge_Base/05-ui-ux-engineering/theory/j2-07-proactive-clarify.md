---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: theory
---

# Requirement Thinking · Chủ động Clarify

SoT: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md) · Matrix: [Requirement Thinking](../../../00_ITFS_Foundation/00_matrix_overview.md)

---

## 1. Vì sao "chủ động" khác "nhận biết"?

Clarify cơ bản dạy **nhận biết** — thấy dấu hiệu mơ hồ thì dừng lại hỏi. Đó là phản xạ _bị động_: chờ mơ hồ đủ rõ mới hỏi.

Clarify chủ động đẩy thêm một bước: **chủ động** — với một brief tưởng như "đủ rõ", bạn vẫn tự đặt câu hỏi trước khi code, vì biết brief nào cũng có khoảng trống chưa nói ra. Không chờ vấp phải mơ hồ mới hỏi — bạn **đi tìm** mơ hồ trước.

**Bản chất:** Clarify bề mặt hỏi khi _thấy_ thiếu. Clarify chủ động hỏi ngay cả khi _chưa chắc_ có thiếu — vì component/state/layout kéo theo nhiều quyết định ẩn (ranh giới cắt, ai giữ state, breakpoint nào) mà brief hiếm khi nói rõ hết.

---

## 2. Hành vi Matrix

| Kỳ vọng                       | Ý ngắn                                                            |
| ----------------------------- | ----------------------------------------------------------------- |
| Chủ động Clarify              | Tự đặt câu hỏi khi mơ hồ — không chờ bị chặn mới hỏi              |
| Dùng AI gợi ý câu hỏi Clarify | Đưa brief cho AI, xin AI liệt kê câu hỏi cần hỏi — **rồi tự lọc** |

SoT skill: _Chủ động đặt câu hỏi khi mơ hồ. Dùng AI gợi ý câu hỏi clarify._

---

## 3. Với brief component, hỏi thêm gì so với Clarify bề mặt?

Clarify bề mặt hỏi về UI (bảng 8 câu ở `j1-06`). Khi làm component phải hỏi thêm về **quyết định kiến trúc ẩn** trong chính brief đó — thường brief không hề nhắc tới:

| Chủ đề                 | Câu hỏi chủ động cần tự đặt ra                                                       |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **Component boundary** | Component này dùng lại ở đâu khác không? Nếu có, cắt ranh giới nào cho hợp cả 2 nơi? |
| **State ownership**    | Dữ liệu này cần giữ qua reload/qua route khác không, hay chỉ sống trong 1 lần xem?   |
| **Responsive**         | Brief không nói mobile — có mặc định phải responsive không, hay chỉ desktop trước?   |
| **Accessibility**      | Control mới này có cần đúng chuẩn Tab/focus như phần còn lại của app không?          |
| **Render model**       | Màn này thuộc vùng public (cần SEO) hay sau login (không cần)?                       |

Đây chính là 5 khoảng trống "tưởng như hiển nhiên" mà brief component hay bỏ sót nhất.

---

## 4. Quy trình dùng AI gợi ý câu hỏi — rồi tự lọc

AI giỏi liệt kê câu hỏi hơn con người khi _chưa biết context_ — nhưng nó gợi ý theo kiểu "hỏi cho chắc", không biết đâu là quan trọng thật với dự án của bạn. Quy trình:

1. **Tự Clarify trước** (không chờ AI) — viết ra 2–3 câu hỏi bạn tự nghĩ ra từ bảng ở mục 3.
2. **Đưa brief cho AI**, xin: _"Liệt kê các câu hỏi Clarify cần hỏi trước khi implement brief này, tập trung vào component boundary, state, responsive, a11y."_
3. **Đọc danh sách AI trả về** — thường dài hơn cần thiết, có câu hỏi lan man ngoài phạm vi (vd hỏi cả về backend schema khi bạn chỉ làm UI).
4. **Tự lọc: giữ / bỏ — kèm lý do** cho từng câu AI gợi ý. Đây là bước **bắt buộc**, không phải chép nguyên danh sách AI vào brief rồi gửi PM.

**Nuance:** Nếu bạn chỉ chuyển tiếp _toàn bộ_ câu hỏi AI gợi ý cho PM mà không lọc, bạn không "Clarify chủ động" — bạn đang để AI Clarify hộ, mất luôn giá trị của kỹ năng này.

---

## 5. Nuances dễ nhầm

### Chủ động ≠ hỏi nhiều hơn

Mục tiêu không phải tăng số câu hỏi — mà tăng **đúng lúc** hỏi (trước khi code, không phải giữa lúc code mới nhận ra). Ít câu hỏi đúng trọng tâm quý hơn nhiều câu hỏi rải rác.

### Câu hỏi AI gợi ý mang tính "chung", câu hỏi bạn tự nghĩ mang tính "riêng"

AI không biết bạn đang tái sử dụng component ở đúng 2 màn nào — nó chỉ hỏi kiểu mẫu ("component này có tái sử dụng không?"). Câu hỏi tự nghĩ ra từ bối cảnh thật (đọc code hiện tại, biết màn kia đang thiếu gì) luôn có giá trị cao hơn.

### Không dùng AI để "hợp thức hoá" việc không tự nghĩ

Nếu bước 1 (tự Clarify trước) bị bỏ qua, bước 3–4 dễ biến thành chép máy — đúng thứ tự quy trình ở mục 4 quan trọng hơn kết quả cuối.

---

## 6. Use case

**Brief:** "Tách `ProjectCard` thành component tái sử dụng cho cả trang Admin và trang User, đảm bảo responsive."

**Tự Clarify trước (bước 1):**

1. "Tái sử dụng" — Admin và User hiển thị _cùng_ thông tin trên card, hay Admin cần thêm action (xoá/duyệt) mà User không có?
2. `starred`/`filter` (nếu có) là state của từng trang riêng, hay ProjectCard tự quản lý luôn?

**AI gợi ý thêm (bước 2–3, sau khi lọc):**

- Giữ: "Breakpoint nào coi là mobile cho card này?" — đúng trọng tâm Responsive, brief chưa nói.
- Bỏ: "Card có cần lazy-load ảnh không?" — ngoài scope brief hiện tại (chưa ai yêu cầu performance), ghi lại để hỏi sau nếu cần.

**Reflection:** Không Clarify boundary Admin/User trước → code xong mới nhận ra Admin cần thêm nút mà ProjectCard không có props cho việc đó — phải sửa lại component đã "tưởng xong", đúng cái giá của Clarify muộn (`j1-06` §Cone of Uncertainty) nhưng ở quy mô component thay vì UI đơn giản.

---

## 7. AI Fluency tie-in

Dùng AI gợi ý câu hỏi Clarify cũng là một dạng đọc/đánh giá output AI (P3): AI có thể gợi ý câu hỏi **lan man** hoặc **thiếu trọng tâm** — chính bạn phải nhận ra và lọc, không khác gì nhận ra props drilling vô nghĩa khi review cấu trúc AI. Cùng một tư duy: AI hỗ trợ, người quyết định giữ gì.

---

## 8. Tóm tắt

- Chủ động = tự hỏi cả khi brief "tưởng như đủ rõ" — không chờ vấp mơ hồ mới hỏi.
- 5 khoảng trống hay bị brief component bỏ sót: component boundary, state ownership, responsive, accessibility, render model.
- Quy trình dùng AI: tự Clarify trước → xin AI gợi ý thêm → tự lọc giữ/bỏ kèm lý do — không chép nguyên danh sách AI.
- Câu hỏi tự nghĩ từ bối cảnh thật luôn giá trị hơn câu hỏi mẫu AI gợi ý.

## 9. Exercise

- [Proactive clarify](../exercises/j2-07-proactive-clarify/)
