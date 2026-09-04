---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Exercise · Accessibility (Tab audit)

Theory: [j2-04-accessibility.md](../../theory/j2-04-accessibility.md)

| File                         | Vai trò                                     |
| ---------------------------- | ------------------------------------------- |
| [before.html](./before.html) | Mẫu **lỗi** keyboard/focus/ARIA — không sửa |
| [index.html](./index.html)   | **Bài làm** — sửa native + focus            |
| [audit.md](./audit.md)       | **Audit log** ≥3 findings                   |

## Mục tiêu

- Audit bằng **Tab / Shift+Tab** (không chuột)
- Ưu tiên thẻ native; bỏ ARIA/`tabindex` sai
- Giữ focus nhìn thấy (`:focus-visible`)

## Cách làm

1. Mở `before.html` — chỉ dùng bàn phím: ghi lỗi vào [`audit.md`](./audit.md).
2. Sửa `index.html` cho Tab hoạt động đúng; Enter/Space trên nút được.
3. Compare với `before.html`.

Reset: `cp before.html index.html`

## Clarify

1. “Starred” / “Tạo mới” là button hay link?
2. Icon ⚙️ cần tên đọc gì?
3. Design có cho phép bỏ outline không — thay bằng gì?

## Checklist

- [ ] Mọi CTA chính tới được bằng Tab
- [ ] Không còn `div` giả nút cho action chính
- [ ] Không `tabindex` dương (1, 2, …)
- [ ] Focus ring nhìn thấy trên keyboard focus
- [ ] Input có `<label>` (hoặc nhãn rõ)
- [ ] `audit.md` ≥3 findings + cách sửa
