---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# Requirement Thinking · Clarify cơ bản

SoT: [05 · UI/UX Engineering · J1](../../../00_ITFS_Foundation/05-ui-ux-engineering.md) · Matrix: [Req Thinking J1](../../../00_ITFS_Foundation/00_matrix_overview.md)

---

## 1. Vì sao Clarify là kỹ năng J1?

Code trên giả định sai = làm lại.  
Mockup đẹp vẫn thiếu: empty state, breakpoint, copy nút, ảnh decor hay meaningful…

Clarify ra đời để **giảm đoán**. J1 chưa dẫn dắt workshop — chỉ cần **dừng lại và hỏi** khi thấy lỗ trống.

**Bản chất:** “Biết mình chưa đủ thông tin” quý hơn “code cho xong rồi tính”.

---

## 2. Hành vi Matrix · J1

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

## 4. Bộ câu hỏi Clarify UI (J1)

Mang theo mỗi exercise/demo — chọn 2–3 câu khớp context:

1. **Cấu trúc:** Vùng nào là nội dung chính (`main`)? Có nav thật sự không?
2. **Tương tác:** Click này đổi URL hay chỉ hành động trên trang?
3. **Form:** Label/placeholder/error đã chốt chưa? Submit rồi đi đâu?
4. **Ảnh / icon:** Mang thông tin hay trang trí → `alt` thế nào?
5. **Spacing / type:** Số bắt buộc là gì? (padding, gap, font-size)
6. **Trạng thái thiếu:** loading / empty / lỗi — có nằm trong scope J1 không?
7. **Breakpoint:** Một layout hay cần stack khi hẹp?
8. **Lib:** Project bắt buộc dùng UI kit nào?

**Hỏi ai:** copy/UX flow → PM/design; token/spacing → design; convention repo → buddy/lead.

---

## 5. Nuances

### Hỏi hẹp, có thể trả lời được

Tránh: “Cái này làm sao?”  
Nên: “Nút _Chỉnh sửa_ mở trang mới hay modal trên trang? Nếu chưa quyết — J1 làm `type=button` no-op được không?”

### Clarify ≠ block mãi

Nếu deadline gấp: ghi **giả định tạm** + tag người review — vẫn là Clarify có ý thức, không phải đoán thầm.

### Clarify trước khi prompt AI

AI sẽ **đầy chỗ trống bằng bịa**. Planning #6 chỉ an toàn khi #7 đã khoanh vùng.

---

## 6. Use case

**Brief:** “Làm trang profile giống LinkedIn, đẹp là được.”

**Clarify tối thiểu:**

1. Scope J1 chỉ card tóm tắt hay full page?
2. Có chỉnh sửa inline không — button vs link?
3. Avatar có ảnh thật / spec `alt` chưa?
4. Spacing theo design system team hay tự chọn (cần bảng số)?

**Reflection:** Bỏ Clarify → AI/dev tự bịa full LinkedIn clone; review fail vì ngoài scope. Hai câu hỏi đầu đã cứu cả sprint nhỏ.

---

## 7. AI Fluency gắn Clarify

- Đưa câu trả lời Clarify vào prompt (“Edit = button, no navigation”).
- Nếu AI hỏi lại — tốt; nếu AI không hỏi mà tự bịa — bạn phải là người Clarify.

---

## 8. Exercise

- [Clarify drill](../exercises/j1-06-clarify-drill/)
