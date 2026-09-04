---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# Mockup → UI — implement đúng spacing & typography cơ bản

SoT: [05 · UI/UX Engineering · J1](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao “làm giống mockup” lại là kỹ năng?

Mockup (Figma / sketch / spec chữ) là **hợp đồng hình ảnh** giữa design và engineering.  
J1 chưa cần pixel-perfect mọi breakpoint — nhưng phải **nhận biết** các con số bắt buộc và map đúng sang CSS/component.

Làm “trông na ná” bằng mắt = nợ spacing. Sprint sau QA/design so đo → sửa hàng loạt.

**Bản chất:** implement UI = dịch spec → semantics + box + layout + component API, không phải vẽ lại theo cảm tính.

---

## 2. Đọc mockup — những gì J1 phải nhận ra

Trước khi mở editor, khoanh trên spec:

| Nhóm           | Nhận biết gì                                    | Map sang                                                        |
| -------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| **Cấu trúc**   | Vùng header / main / card / actions             | Semantic + Card/section                                         |
| **Spacing**    | padding trong card, gap giữa khối, margin ngoài | `padding` / `gap` / `margin` + `border-box`                     |
| **Typography** | Cỡ chữ tiêu đề / body / meta, độ đậm            | `font-size`, `font-weight`, class type của lib (`h5`, `small`…) |
| **Thành phần** | Nút primary, input, avatar, link                | Button / Input / Card theo docs (#4)                            |
| **Tương tác**  | Đổi trang vs hành động                          | `<a>` vs `<button type>`                                        |

Không có số trên mockup → **Clarify**, đừng bịa.

---

## 3. Quy trình implement tối thiểu (J1)

1. **Clarify** 3–5 câu (spacing, type, trạng thái thiếu…).
2. **Skeleton semantic** — `main` / `header` / heading trước khi tô style.
3. **Component lib** — Card / Button / Input đúng docs (tránh tự chế lại).
4. **Gán spacing & type theo bảng spec** — một nguồn sự thật (Figma hoặc `MOCKUP_SPEC.md`).
5. **Đo bằng DevTools** — so outer width, padding, font-size với spec; không chỉ nhìn xa.
6. **Checklist** (cuối bài) trước khi coi là xong.

---

## 4. Nuances — chỗ hay lệch mockup

### Spacing: trong vs giữa

- Trong card → `padding` (hoặc utility `p-3` của lib nếu khớp số).
- Giữa các khối → `gap` trên flex/grid cha, không cộng `margin` lung tung từng con.

### Typography: cấp chữ ≠ cấp heading mù quáng

Mockup chữ to không luôn là `<h1>`.  
**Nghĩa nội dung** quyết định `h1`/`h2`; **cỡ chữ** chỉnh bằng class/CSS. (Đã học ở semantics — nhắc lại khi soi mockup.)

### “Gần đúng” vs “đúng spec”

Lệch 2–4px thường đến từ `content-box`, quên border, hoặc font stack khác.  
J1: nhận biết và kiểm tra `box-sizing` + computed style trước khi tranh cãi với design.

### Lib utility vs số Figma

`mb-3` của Bootstrap ≈ 1rem — **chỉ dùng khi đúng số spec**. Sai số thì dùng style/token rõ ràng hơn là cố nhét utility lệch.

---

## 5. Use case — Profile card theo spec chữ

Giả sử spec (rút gọn):

| Token                    | Giá trị                |
| ------------------------ | ---------------------- |
| Card max-width           | 420px                  |
| Card padding             | 24px                   |
| Gap hero (avatar ↔ text) | 16px                   |
| Tên                      | 24px / bold            |
| Role (meta)              | 14px / regular / muted |
| Body bio                 | 16px / regular         |
| Gap section              | 16px                   |
| Primary button           | lib `btn-primary`      |

**Reflection:** Dev chỉ copy màu mắt thường, bỏ qua 24/16 → card “chật” hoặc “rộng” so Figma. So đo DevTools 2 phút rẻ hơn một vòng reject từ design.

Demo chạy được: [`../../../02_Demos/05-j1-ui-foundations-mockup/`](../../../02_Demos/05-j1-ui-foundations-mockup/).

---

## 6. Requirement Thinking · Clarify

Hỏi trước khi code:

1. **Spacing nào bắt buộc (padding card, gap hero, margin section)?** Đơn vị px hay rem?
2. **Scale chữ:** title / meta / body — đủ bộ chưa?
3. **Trạng thái thiếu trên mockup:** hover? empty bio? loading? (J1: ghi nhận; chưa bắt buộc implement hết)
4. **Breakpoint:** chỉ 1 layout desktop hẹp, hay cần stack mobile?
5. **Component lib bắt buộc** của project là gì?

---

## 7. AI Fluency · Consumer (P1)

AI hay:

- Bịa spacing “đẹp” không khớp spec
- Dùng heading level theo cỡ chữ
- Quên `type="button"`, `alt`, `label`
- Trộn utility lib với CSS inline loạn xạ

Checklist review UI AI sinh từ mockup:

- [ ] Spacing/type có truy được về bảng spec không?
- [ ] Semantic + button/link đúng?
- [ ] Component API đúng docs lib đã chọn?
- [ ] DevTools đo thử 2–3 điểm then chốt?

Gợi ý prompt:

> Implement this mockup spec literally (spacing/typography table attached). Use Bootstrap 5 Card/Button. Semantic HTML. border-box. Do not invent spacing not in the spec.

---

## 8. Demo

- [UI Foundations Mockup](../../../02_Demos/05-j1-ui-foundations-mockup/)
