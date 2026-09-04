---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: exercise
---

# Exercise J1-03 · UI Library Basics (Bootstrap 5)

Theory: [j1-03-ui-library-basics.md](../../theory/j1-03-ui-library-basics.md)

| File                         | Vai trò                                             |
| ---------------------------- | --------------------------------------------------- |
| [before.html](./before.html) | Snapshot **trước** — tự style, không dùng lib       |
| [index.html](./index.html)   | **Bài làm** — gắn Bootstrap 5 (CDN) và gọi đúng API |

Docs: [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## Mục tiêu

- Dùng **≥3** component theo docs: **Button**, **Form control (Input)**, **Card**
- Giữ semantics: `label`/`for`, `button type`, `<a>` vs `<button>`
- Không bịa class — đối chiếu docs khi nghi ngờ

## Cách làm

1. Ghi **Clarify** + mở docs Button / Forms / Card.
2. Sửa [index.html](./index.html): thêm CDN Bootstrap 5 CSS; thay khối homemade bằng Card + inputs + buttons.
3. Checklist → Compare với `before.html` (markup/API, không chỉ “trông đẹp hơn”).

Reset: `cp before.html index.html`

## Yêu cầu bài làm

Màn **Login** (nội dung giữ tương đương before):

- Một **Card** chứa tiêu đề + form
- **Email** + **Password**: `form-label` + `form-control` (có `id`/`for`)
- Nút **Đăng nhập**: `btn btn-primary`, `type="submit"`
- Link **Quên mật khẩu**: `<a>` (có thể `btn btn-link` theo docs)
- Nút phụ **Đăng nhập SSO** (nếu giữ từ before): `btn btn-outline-secondary`, `type="button"`

Ghi comment ngắn trong `index.html`: 3–5 class/prop vừa dùng (thói quen note từ docs).

## Clarify

1. Lib + version của bài này là gì?
2. Nút nào `submit`, nút nào `button`, đâu là `a`?
3. Placeholder / copy trên mockup đã chốt chưa?

## Checklist

- [ ] Có CDN Bootstrap 5 (CSS)
- [ ] Dùng `card` + `card-body` (+ `card-title` nếu có)
- [ ] ≥2 input dùng `form-control` + `label.form-label`
- [ ] ≥1 `btn btn-primary` (hoặc variant docs) đúng `type`
- [ ] Có `<a>` cho điều hướng phụ
- [ ] Không còn “tự chế” box/input/button chính bằng CSS tay cho khối login
- [ ] Comment ghi note class đã lấy từ docs
