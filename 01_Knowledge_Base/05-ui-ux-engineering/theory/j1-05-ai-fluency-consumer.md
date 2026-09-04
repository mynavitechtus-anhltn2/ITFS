---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# AI Fluency · Consumer (P1) — dùng AI có kiểm soát ở UI

SoT: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md) · Matrix: [AI Fluency](../../../00_ITFS_Foundation/00_matrix_overview.md)

---

## 1. Vì sao cần AI Fluency ở tầng Consumer?

AI viết UI nhanh — và hay **đúng syntax, sai nghĩa**: `div` đóng vai nút, thiếu `label`, quên `alt`, focus không tới được.

Consumer nghĩa là: **bạn dùng AI như công cụ**, vẫn **chịu trách nhiệm** merge.  
Không nhận biết lỗi → ship nợ a11y/semantics ngay từ đầu.

**Bản chất:** tốc độ AI chỉ có giá trị khi bạn còn **checklist mắt người** trước khi coi là xong.

---

## 2. Hành vi cần nhớ (Matrix)

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

Trên mọi khối AI sinh cho UI nền tảng:

- [ ] **Tag / landmark:** có `main`/`button`/`a` đúng nghĩa — không `div`+`onClick` giả nút/link
- [ ] **Label:** mỗi input có `<label for>` (hoặc `aria-label` có chủ đích)
- [ ] **`alt`:** ảnh mang tin có mô tả; ảnh trang trí → `alt=""`
- [ ] **Focus / type:** `button` có `type`; không bỏ ngoài tab order bằng `div` clickable
- [ ] (Bonus) Class/prop **có trong docs** lib đang dùng

**≥3 lỗi** ghi vào evidence exercise — đủ bằng chứng đã review (tối thiểu 3 lỗi).

---

## 5. Nuances

### “Chạy được” ≠ “đúng”

HTML render đẹp không chứng minh a11y. Screen reader / Tab mới lộ `div` giả nút.

### Prompt càng mơ hồ, AI càng tự bịa

“Làm card profile đẹp” → AI bịa spacing, heading, bỏ `alt`.  
Kèm spec / “Bootstrap 5 + semantic” → ít lệch hơn, **vẫn phải review**.

### Đừng để AI “sửa a11y” thay bạn mà không đọc diff

AI có thể thêm `aria-*` sai hoặc `role="button"` trên `div` thay vì đổi thành `<button>`. Ưu tiên **đúng thẻ gốc**.

**Case study — khi "tự động sửa a11y" trở thành vấn đề chứ không phải giải pháp:**  
Ngành a11y từng tranh cãi nhiều về các "overlay widget" (script chèn thêm vào trang, quảng cáo là "tự động fix accessibility" bằng cách gắn `aria-*`/hành vi qua JS mà không sửa HTML gốc). Nhiều tổ chức a11y (WebAIM, chuyên gia độc lập) và cả một số vụ kiện thực tế đã chỉ ra: các overlay này thường **che dấu hiệu lỗi** thay vì sửa gốc, đôi khi còn làm trải nghiệm tệ hơn cho screen reader — trớ trêu là một số công ty bán overlay từng **bị kiện vì chính website của họ không accessible**. Bài học cho AI Fluency: một patch tự động thêm `aria-label`/`role` mà không đổi đúng thẻ HTML gốc là cùng bản chất với overlay — trông như đã fix, thực chất chưa.

---

## 6. Use case — AI sinh Profile actions

**Bài toán:** Prompt: _“Thêm nút Chỉnh sửa và link về Portal”._  
AI trả: hai `div` class `btn` + `onclick`.

**Reflection:** Nhìn UI giống design system; Tab/keyboard fail; semantics sai. Consumer giỏi = phát hiện trong 30 giây nhờ checklist, không phải sau khi QA bắt.

---

## 7. Requirement Thinking gắn với AI

Trước khi prompt, hỏi (Clarify):

1. Khối này **link hay button**?
2. Có **input** nào cần label?
3. Có **ảnh** nào cần `alt`?

Prompt mẫu:

> Generate Bootstrap 5 markup for this profile card actions row. Use `<button type="button">` for Edit and `<a class="btn …">` for Portal. No div onClick. Keep focusable native controls.

---

## 8. Tóm tắt

- Consumer = dùng AI để tăng tốc, nhưng **chịu trách nhiệm review** trước khi merge — "chạy được" không phải tiêu chí đạt.
- Checklist tối thiểu: tag/landmark đúng nghĩa, label cho input, `alt` cho ảnh, `type`/focus cho control.
- Prompt có ràng buộc (lib, semantic, spec) giảm bịa; nhưng vẫn phải tự đọc diff, không giao AI "tự sửa" a11y mà không kiểm tra.

## 9. Exercise

- [AI review notes](../exercises/j1-05-ai-review-notes/)
