---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# AI Fluency · Consumer (P1) — dùng AI có kiểm soát ở UI

SoT: [05 · UI/UX Engineering · J1](../../../00_ITFS_Foundation/05-ui-ux-engineering.md) · Matrix: [AI Fluency J1](../../../00_ITFS_Foundation/00_matrix_overview.md)

---

## 1. Vì sao cần AI Fluency ở tầng Consumer?

AI viết UI nhanh — và hay **đúng syntax, sai nghĩa**: `div` đóng vai nút, thiếu `label`, quên `alt`, focus không tới được.

Consumer nghĩa là: **bạn dùng AI như công cụ**, vẫn **chịu trách nhiệm** merge.  
Không nhận biết lỗi → ship nợ a11y/semantics ngay từ J1.

**Bản chất:** tốc độ AI chỉ có giá trị khi bạn còn **checklist mắt người** trước khi coi là xong.

---

## 2. Hành vi J1 cần nhớ (Matrix)

| Kỳ vọng               | Ý ngắn                                           |
| --------------------- | ------------------------------------------------ |
| Dùng AI tools cơ bản  | Prompt sinh markup/component từ mô tả / mockup   |
| Hiểu AI có thể sai    | Không tin output vì “trông đẹp”                  |
| Bắt lỗi UI thường gặp | Tag sai, thiếu label, alt, focus / `type` button |

SoT skill: _Dùng AI sinh components. Nhận biết thiếu semantic HTML/accessibility. (P1)_

---

## 3. Vòng lặp Consumer cho UI

1. **Clarify** ngắn — đừng prompt khi spec còn mơ hồ.
2. **Prompt có ràng buộc** — lib, semantic, spec spacing nếu có.
3. **Dán output vào sandbox** (file local / CodePen) — mở Dom.
4. **Chạy checklist** (≥3 mục bắt buộc ở dưới).
5. **Sửa tay** những chỗ AI trượt — rồi mới mang vào nhánh thật.

---

## 4. Checklist bắt lỗi (tối thiểu)

Trên mọi khối AI sinh cho UI J1:

- [ ] **Tag / landmark:** có `main`/`button`/`a` đúng nghĩa — không `div`+`onClick` giả nút/link
- [ ] **Label:** mỗi input có `<label for>` (hoặc `aria-label` có chủ đích)
- [ ] **`alt`:** ảnh mang tin có mô tả; ảnh trang trí → `alt=""`
- [ ] **Focus / type:** `button` có `type`; không bỏ ngoài tab order bằng `div` clickable
- [ ] (Bonus) Class/prop **có trong docs** lib đang dùng

**≥3 lỗi** ghi vào evidence exercise — đủ DoD Planning #6.

---

## 5. Nuances

### “Chạy được” ≠ “đúng”

HTML render đẹp không chứng minh a11y. Screen reader / Tab mới lộ `div` giả nút.

### Prompt càng mơ hồ, AI càng tự bịa

“Làm card profile đẹp” → AI bịa spacing, heading, bỏ `alt`.  
Kèm spec / “Bootstrap 5 + semantic” → ít lệch hơn, **vẫn phải review**.

### Đừng để AI “sửa a11y” thay bạn mà không đọc diff

AI có thể thêm `aria-*` sai hoặc `role="button"` trên `div` thay vì đổi thành `<button>`. J1 ưu tiên **đúng thẻ gốc**.

---

## 6. Use case — AI sinh Profile actions

**Bài toán:** Prompt: _“Thêm nút Chỉnh sửa và link về Portal”._  
AI trả: hai `div` class `btn` + `onclick`.

**Reflection:** Nhìn UI giống design system; Tab/keyboard fail; semantics sai. Consumer giỏi = phát hiện trong 30 giây nhờ checklist, không phải sau khi QA bắt.

---

## 7. Requirement Thinking gắn với AI

Trước khi prompt, hỏi (#7):

1. Khối này **link hay button**?
2. Có **input** nào cần label?
3. Có **ảnh** nào cần `alt`?

Prompt mẫu:

> Generate Bootstrap 5 markup for this profile card actions row. Use `<button type="button">` for Edit and `<a class="btn …">` for Portal. No div onClick. Keep focusable native controls.

---

## 8. Exercise

- [AI review notes](../exercises/j1-05-ai-review-notes/)
