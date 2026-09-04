---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Audit log · Accessibility

Cách audit: mở `before.html` → **chỉ bàn phím** (Tab / Shift+Tab / Enter / Space).

## Findings (≥3)

| #   | Hiện tượng (khi Tab/Enter)                                  | Nguyên nhân trong markup/CSS                       | Cách sửa                                                                    |
| --- | ----------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------- |
| 1   | Tab bỏ qua All / Starred / Về Portal — chuột vẫn click được | `div` + `onclick` không nằm trong tab order        | Đổi filter/CTA thành `<button type="button">`; “Về Portal” thành `<a href>` |
| 2   | Tab nhảy Settings trước, rồi mới Tạo mới (thứ tự lạ)        | `tabindex="1"` và `tabindex="2"` phá thứ tự DOM    | Xóa tabindex dương — để thứ tự nguồn                                        |
| 3   | ⚙️ không đọc tên; có thể bị bỏ qua AT                       | Icon-only + `aria-hidden="true"` trên control thật | `button` + `aria-label="Cài đặt"`, bỏ `aria-hidden`                         |
| 4   | Ô search không có tên; placeholder không thay label         | `<input>` trần                                     | `<label for="project-search">`                                              |
| 5   | Không biết đang focus control nào                           | `*:focus { outline: none }`                        | `:focus-visible` ring 2px accent                                            |

## Native vs ARIA

“Tạo mới” gắn `role="button"` trên `div` + `tabindex` — ARIA vá thẻ sai. Đúng: `<button type="button">` (Enter/Space có sẵn). `aria-hidden` trên nút Settings là ARIA _ngược_ — giấu control cần đọc.

## Focus visible

Before xóa outline trên mọi `:focus` → keyboard mất vị trí. `index.html`: `:focus { outline: none }` chỉ để tránh ring chuột; `:focus-visible` vẽ `2px solid` accent + offset.

## Sau khi sửa — xác nhận

- [x] Tab tới: All, Starred, Tạo mới, Settings, ô search, Về Portal (thứ tự hợp lý)
- [x] Enter/Space kích hoạt các nút
- [x] Focus nhìn thấy
- [x] Không còn `tabindex` dương
