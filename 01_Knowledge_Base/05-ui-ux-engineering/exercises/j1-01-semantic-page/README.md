---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: exercise
---

# Exercise J1-01 · Semantic Profile Page

Theory: [j1-01-html-semantics.md](../../theory/j1-01-html-semantics.md)

| File                         | Vai trò                          |
| ---------------------------- | -------------------------------- |
| [before.html](./before.html) | Snapshot **trước** (div soup)    |
| [index.html](./index.html)   | **Bài làm** — sửa markup tại đây |

## Mục tiêu

- Nhận biết landmark: `header`, `nav`, `main`, `section`, `article`, `footer`
- Phân biệt semantic HTML vs **div soup**
- Phân biệt `<a href>` (điều hướng) vs `<button type="button">` (hành động)
- Gán `alt` đúng cho ảnh mang thông tin

## Cách làm

1. Đọc **Clarify** — ghi câu trả lời (comment trong `index.html` hoặc note riêng).
2. Mở [index.html](./index.html) trên trình duyệt, xem DOM (Elements).
3. **Sửa `index.html`** thành Profile semantic (nội dung hiển thị tương đương `before.html`).
4. Tự chấm bằng **Checklist**.

## Clarify · ghi trước khi code

1. Vùng nào là nội dung chính → sẽ bọc trong `main`?
2. Menu nào là điều hướng thật sự → `nav`?
3. “Chỉnh sửa” là đi URL khác hay hành động trên trang?
4. Avatar mang thông tin hay trang trí → `alt` thế nào?

## Yêu cầu bài làm

Trong `index.html`, xây trang Profile gồm:

- Brand / menu: Trang chủ, Profile, Team
- Khối hồ sơ: avatar, tên **Minh Anh**, role, nút **Chỉnh sửa**
- Section **Giới thiệu** (bio)
- Section **Dự án gần đây** — ít nhất 2 project card
- Footer: copyright + link phụ (Trợ giúp, Nội quy)

CSS sẵn chỉ để nhìn layout — **điểm chấm là thẻ HTML**.

## Checklist tự chấm

- [ ] Đúng một `<main>` trên trang
- [ ] Có `<nav>` cho menu điều hướng chính
- [ ] Có `<h1>` (không nhảy cấp heading vô lý)
- [ ] Menu / “Trang chủ” dùng `<a href>`
- [ ] “Chỉnh sửa” là `<button type="button">`
- [ ] Bio / dự án nằm trong `<section>` (có `h2`)
- [ ] Mỗi project card là `<article>` (hoặc `<li>` rõ trong list)
- [ ] Avatar có `alt` mang nghĩa (không bỏ thuộc tính)
- [ ] Có `<footer>` trang
