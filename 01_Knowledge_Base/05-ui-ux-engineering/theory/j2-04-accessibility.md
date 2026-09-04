---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: theory
---

# Accessibility — keyboard, focus, native trước ARIA

SoT / Matrix: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao a11y không chỉ là “thêm aria”?

Nhiều user không dùng chuột: khiếm thị + screen reader, chấn thương, power user Tab/Shortcuts.

Nếu control chỉ `div` + `onClick`:

- Tab **không tới**
- Enter/Space **không kích hoạt** đúng chuẩn
- Screen reader không biết là nút

**Bản chất:** accessibility = **cùng một UI, nhiều cách tương tác vẫn hiểu được**. ARIA là lớp bổ sung — không thay HTML đúng.

---

## 2. Ba trụ cần hiểu

### 1) Native first

| Cần        | Ưu tiên                                           |
| ---------- | ------------------------------------------------- | --------- |
| Hành động  | `<button type="button                             | submit">` |
| Điều hướng | `<a href="…">`                                    |
| Nhập liệu  | `<input>` / `<select>` / `<textarea>` + `<label>` |

Tự dựng `role="button"` trên `div` = bạn phải tự lo tabindex, keyboard, disabled… — **hiểu là nợ**, tránh trừ khi không còn lựa chọn.

### 2) Focus order & visible focus

- Thứ tự Tab ≈ thứ tự DOM hợp lý (không `tabindex="5"` nhảy loạn).
- `tabindex="0"`: thêm vào tab order (hiếm khi cần nếu dùng native).
- `tabindex="-1"`: focus được bằng script, không nằm trong Tab tuần tự.
- **Đừng** `outline: none` mà không thay focus ring rõ — keyboard user mất vị trí.

### 3) ARIA chỉ khi cần

ARIA **đổi/công bố** tên, trạng thái, quan hệ khi HTML chưa đủ.

| Nên                                          | Tránh                                          |
| -------------------------------------------- | ---------------------------------------------- |
| `aria-expanded` trên disclosure đúng pattern | `aria-label` trùng / mâu thuẫn text hiện có    |
| `aria-labelledby` nối heading ↔ region       | `role="button"` thay `<button>` cho tiện style |
| Nhãn bổ sung khi UI icon-only                | ARIA giả để “che” markup sai                   |

Quy tắc vàng: **First rule of ARIA** — nếu có thẻ native, dùng native.

---

## 3. Checklist audit Tab

Trên mọi màn trước khi merge:

1. Đặt chuột aside — **chỉ Tab / Shift+Tab**.
2. Mọi action chính (nút, link, input) có tới được không?
3. Enter/Space trên nút có chạy không?
4. Focus có **nhìn thấy** không?
5. Thứ tự có khớp thứ tự đọc/visual hợp lý không?
6. Modal/menu (nếu có): Esc / focus có bị “kẹt” hoặc mất không? _(hiểu vấn đề; trap đầy đủ = level sau)_

---

## 4. Nuances dễ nhầm

### `div` + `tabindex="0"` + `onKeyDown` ≠ `<button>`

Làm được “na ná” nhưng thiếu semantics mặc định, form submit, disable… Chi phí cao, dễ sót.

### `aria-hidden="true"` trên nội dung quan trọng

Giấu khỏi AT nhưng vẫn hiện mắt → lệch trải nghiệm. Dùng khi **trùng lặp** trang trí đã có text bên cạnh.

### Icon button

Cần tên truy cập: text ẩn / `aria-label` ngắn đúng việc (“Đóng”), không để trống.

### Positive `tabindex` (1, 2, 3…)

Hầu như luôn mùi — phá thứ tự nguồn. Nhận ra và bỏ.

---

## 5. Use case — toolbar filter + CTA

**Bài toán:** Chip “Starred” và nút “Tạo mới” trông giống nút nhưng là `div`. Design bỏ outline.

**Reflection:** Demo chuột hoàn hảo; QA keyboard fail ngay Tab đầu. Đổi thành `<button>` + focus ring token = hết 80% ticket a11y kiểu này.

**Case study — a11y không phải "nice to have":**  
Năm 2006, National Federation of the Blind kiện **Target Corporation** vì website target.com không dùng được với screen reader (thiếu `alt`, thiếu label, không điều hướng bằng bàn phím) — một trong những vụ kiện web a11y lớn đầu tiên tại Mỹ, kết thúc bằng khoản dàn xếp **6 triệu USD** (2008) cùng cam kết sửa website theo chuẩn WCAG. Đây thường được nhắc như điểm mốc khiến nhiều công ty Mỹ bắt đầu coi a11y là **yêu cầu tuân thủ**, không phải tính năng phụ.

**Nhận biết — WCAG có phân cấp (không phải "đạt/không đạt" nhị phân):**

| Cấp     | Ý nghĩa ngắn                                            | Liên quan trực tiếp                                   |
| ------- | ------------------------------------------------------- | ----------------------------------------------------- |
| **A**   | Mức tối thiểu — thiếu là chặn hoàn toàn với một số user | Có `alt`, có `label`, control dùng được bằng bàn phím |
| **AA**  | Mức chuẩn — hầu hết tổ chức/luật yêu cầu mức này        | Focus nhìn thấy được (contrast đủ), thứ tự Tab hợp lý |
| **AAA** | Mức cao nhất — hiếm khi yêu cầu toàn bộ site            | Biết tồn tại là đủ — chưa cần đạt mức này             |

Không cần thuộc số điều khoản WCAG — chỉ cần biết checklist Tab ở mục 3 chính là cách kiểm tra thủ công cho phần lớn tiêu chí mức **A/AA**.

---

## 6. Requirement Thinking · Clarify

1. Control này **link hay button**? (nhắc lại vì a11y)
2. Icon-only: **tên đọc** là gì?
3. Có **modal / menu** trong scope không — ai lo focus?
4. Design có **focus state** không, hay đang “outline: none” toàn cục?

---

## 7. AI Fluency · Consumer (P3)

AI hay:

- `div` + `onClick` + `role="button"` thiếu keyboard
- `outline: none` trong CSS reset
- `aria-label` sai/trùng
- `tabindex="1"`

Checklist review:

- [ ] Control tương tác là native?
- [ ] Tab tới đủ; focus nhìn thấy?
- [ ] ARIA có thật sự cần — hay đang che markup?
- [ ] Không positive tabindex?

Gợi ý prompt:

> Use native button/link/input only. Do not remove focus outlines unless replacing with :focus-visible styles. No positive tabindex. ARIA only if native HTML is insufficient; explain why.

---

## 8. Tóm tắt

- Native-first: `button`/`a`/`input`+`label` trước khi nghĩ tới ARIA — First Rule of ARIA.
- Focus phải **nhìn thấy được** và theo thứ tự hợp lý; không `outline: none` mà không thay bằng `:focus-visible`.
- ARIA chỉ bổ sung khi HTML chưa đủ diễn tả — không dùng để "che" markup sai (`role="button"` thay cho `<button>`).
- Checklist Tab-only (mục 3) là cách kiểm tra thủ công nhanh nhất cho phần lớn tiêu chí WCAG A/AA.

## 9. Exercise

- [Accessibility](../exercises/j2-04-accessibility/)
