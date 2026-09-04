---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# Requirement Thinking · Clarify cơ bản

SoT: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md) · Matrix: [Requirement Thinking](../../../00_ITFS_Foundation/00_matrix_overview.md)

---

## 1. Vì sao Clarify quan trọng sớm?

Code trên giả định sai = làm lại.  
Mockup đẹp vẫn thiếu: empty state, breakpoint, copy nút, ảnh decor hay meaningful…

Clarify ra đời để **giảm đoán**. Chưa cần dẫn dắt workshop — chỉ cần **dừng lại và hỏi** khi thấy lỗ trống.

**Bản chất:** “Biết mình chưa đủ thông tin” quý hơn “code cho xong rồi tính”.

**Vì sao hỏi sớm rẻ hơn hỏi muộn:** trong software engineering có khái niệm **Cone of Uncertainty** — sai lệch giả định ở đầu dự án (khi chưa code) sửa gần như miễn phí (một câu hỏi); cùng sai lệch đó phát hiện ở cuối (sau khi đã build, review, deploy) tốn gấp nhiều lần công sửa vì đã lan ra nhiều chỗ. Clarify trước khi code là cách rẻ nhất để "thu hẹp cái nón" đó — không phải thủ tục hình thức.

---

## 2. Hành vi Matrix

| Kỳ vọng        | Ý ngắn                                                      |
| -------------- | ----------------------------------------------------------- |
| Clarify cơ bản | Nhận biết chỗ mơ hồ                                         |
| Biết hỏi ai    | Designer / PM / buddy / lead — đúng người cho đúng loại hỏi |

---

## 3. Dấu hiệu mockup/requirement đang mơ hồ

Nhận biết nhanh:

- Có nút nhưng **không nói** đi đâu / làm gì (link vs action)
- Có form nhưng **không có** validation / error copy
- Chỉ một frame desktop — **im lặng** về mobile
- Ảnh không ghi chú decorative vs content
- Spacing “nhìn ước” — không số
- “Làm giống app X” không kèm acceptance

Thấy ≥1 dấu hiệu → ghi câu hỏi **trước** khi implement hoặc prompt AI.

---

## 4. Bộ câu hỏi Clarify UI

Mang theo mỗi exercise/demo — chọn 2–3 câu khớp context:

1. **Cấu trúc:** Vùng nào là nội dung chính (`main`)? Có nav thật sự không?
2. **Tương tác:** Click này đổi URL hay chỉ hành động trên trang?
3. **Form:** Label/placeholder/error đã chốt chưa? Submit rồi đi đâu?
4. **Ảnh / icon:** Mang thông tin hay trang trí → `alt` thế nào?
5. **Spacing / type:** Số bắt buộc là gì? (padding, gap, font-size)
6. **Trạng thái thiếu:** loading / empty / lỗi — có nằm trong scope hiện tại không?
7. **Breakpoint:** Một layout hay cần stack khi hẹp?
8. **Lib:** Project bắt buộc dùng UI kit nào?

**Hỏi ai:** copy/UX flow → PM/design; token/spacing → design; convention repo → buddy/lead.

---

## 5. Nuances

### Hỏi hẹp, có thể trả lời được

Tránh: “Cái này làm sao?”  
Nên: “Nút _Chỉnh sửa_ mở trang mới hay modal trên trang? Nếu chưa quyết — làm `type=button` no-op được không?”

### Clarify ≠ block mãi

Nếu deadline gấp: ghi **giả định tạm** + tag người review — vẫn là Clarify có ý thức, không phải đoán thầm.

### Clarify trước khi prompt AI

AI sẽ **đầy chỗ trống bằng bịa**. Prompt AI chỉ an toàn khi đã Clarify / khoanh vùng trước.

---

## 6. Use case

**Brief:** “Làm trang profile giống LinkedIn, đẹp là được.”

**Clarify tối thiểu:**

1. Scope chỉ card tóm tắt hay full page?
2. Có chỉnh sửa inline không — button vs link?
3. Avatar có ảnh thật / spec `alt` chưa?
4. Spacing theo design system team hay tự chọn (cần bảng số)?

**Reflection:** Bỏ Clarify → AI/dev tự bịa full LinkedIn clone; review fail vì ngoài scope. Hai câu hỏi đầu đã cứu cả sprint nhỏ.

---

## 7. AI Fluency gắn Clarify

- Đưa câu trả lời Clarify vào prompt (“Edit = button, no navigation”).
- Nếu AI hỏi lại — tốt; nếu AI không hỏi mà tự bịa — bạn phải là người Clarify.

---

## 8. Tóm tắt

- Clarify = nhận biết chỗ mơ hồ + biết hỏi đúng người, không phải hỏi tràn lan.
- Câu hỏi tốt: hẹp, trả lời được trong một câu — tránh "cái này làm sao?".
- Không chặn được câu trả lời ngay → ghi giả định tạm + tag reviewer, không đoán thầm rồi code.
- Luôn Clarify **trước** khi prompt AI — AI sẽ lấp khoảng trống bằng cách bịa.

## 9. Exercise

- [Clarify drill](../exercises/j1-06-clarify-drill/)
