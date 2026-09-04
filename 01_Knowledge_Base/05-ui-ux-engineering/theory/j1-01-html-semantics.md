---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# HTML Semantics — nhận biết cấu trúc trang

SoT: [05 · UI/UX Engineering · J1](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao cần semantic HTML?

Trình duyệt chỉ cần `div` là vẽ được giao diện. Semantic HTML ra đời vì **máy và đồng đội** cần hiểu _đây là gì_, không chỉ _trông thế nào_.

| Ai đọc DOM               | Họ cần gì                                             |
| ------------------------ | ----------------------------------------------------- |
| Screen reader / bàn phím | Landmarks để nhảy tới `nav`, `main`, `footer`         |
| Search engine            | Phân biệt tiêu đề, nội dung chính, điều hướng         |
| Bạn & người review       | Đọc cấu trúc như bản đồ — không phải đống hộp vô danh |

**Bản chất:** chọn thẻ = gắn **nghĩa**. CSS và `class` chỉ gắn **diện mạo**.  
`div class="header"` **không** thay được `<header>`.

Khi cả trang chỉ còn `div` + class — người ta gọi là **div soup**.

---

## 2. Landmarks cần nhớ

Đây là “xương sống” của hầu hết trang web:

| Thẻ         | Nghĩa ngắn                              | Dùng khi                                     |
| ----------- | --------------------------------------- | -------------------------------------------- |
| `<header>`  | Phần mở đầu của trang hoặc của một khối | Logo, tiêu đề, cụm intro                     |
| `<nav>`     | Khối điều hướng                         | Menu chính, breadcrumb, tab chuyển trang/màn |
| `<main>`    | Nội dung chính của **trang**            | Chỉ **một** `<main>` mỗi trang               |
| `<section>` | Nhóm nội dung theo chủ đề               | Nên có heading (`h2`…) đi kèm cho rõ nghĩa   |
| `<article>` | Khối tự đứng được, đọc riêng vẫn hiểu   | Bài viết, card tin, item trong feed          |
| `<aside>`   | Nội dung phụ, complementary             | Sidebar, callout, block liên quan            |
| `<footer>`  | Phần kết của trang hoặc của một khối    | Copyright, link phụ, meta                    |

```html
<body>
  <header>…</header>
  <nav>…</nav>
  <main>
    <section>
      <h2>…</h2>
      …
    </section>
  </main>
  <aside>…</aside>
  <footer>…</footer>
</body>
```

**Ghi nhớ thêm:** `<header>` / `<footer>` không chỉ dùng một lần ở cấp trang — chúng cũng hợp lệ bên trong `<section>` hoặc `<article>` (ví dụ: đầu/cuối một card).

---

## 3. Heading hierarchy

- Mỗi trang nên có **một** `<h1>` — tiêu đề chính của nội dung.
- Không nhảy cấp chỉ vì muốn chữ to/nhỏ: `h1` → `h3` (bỏ `h2`) là tín hiệu cấu trúc bị gãy.
- Cỡ chữ chỉnh bằng CSS. **Cấp heading = quan hệ nội dung**, không phải kích thước hiển thị.

---

## 4. Nuances — chỗ hay nhầm

### `<a>` vs `<button>`

|          | `<a href="…">`                        | `<button>`                                  |
| -------- | ------------------------------------- | ------------------------------------------- |
| Bản chất | **Đi tới** một tài nguyên / URL       | **Làm hành động** trên ngữ cảnh hiện tại    |
| Ví dụ    | Sang trang chi tiết, về Home, mở docs | Gửi form, mở modal, xóa item, bật/tắt panel |

Quy tắc nhận biết nhanh:

- Cần đổi **địa chỉ / màn hình** (kể cả trong SPA) → bản chất là **link** → HTML cuối cùng phải là `<a>`.
- Chỉ **kích hoạt hành động**, URL không đổi theo nghĩa điều hướng → `<button>`.
- `div` / `span` + `onClick` đóng giả link/nút → mất semantics và bàn phím.
- Muốn trông như nút nhưng vẫn đi trang khác → vẫn dùng `<a>`, style bằng CSS (hoặc component của UI library).

**Trong SPA / framework hiện đại:**  
Component kiểu `<Link>` (React Router, Next.js, Vue Router…) thường **bọc** hành vi điều hướng client-side. Đó là lớp tiện ích của framework — **HTML render ra trình duyệt vẫn phải là thẻ `<a href="…">`**. Nếu DevTools chỉ thấy `div` clickable, semantics điều hướng đã mất.

**`type` của `<button>`:**

- Trong form, `<button>` **không ghi `type`** mặc định là `submit` → có thể gửi form ngoài ý muốn.
- Nút hành động thường (mở modal, thêm dòng, hủy…) → luôn ghi rõ `type="button"`.
- Nút gửi form → `type="submit"` (hoặc dùng `input type="submit"`).

```html
<button type="button">Mở bộ lọc</button>

<button type="submit">Lưu</button>
```

### `<section>` vs `<div>`

- `<div>` — hộp **không mang nghĩa**: chỉ để gom layout, style, hoặc hook JS.
- `<section>` — “đây là một **chủ đề**”. Không biện minh được theo chủ đề → dùng `div`.

### `<article>` vs `<section>`

Hỏi một câu: _Mang khối này ra chỗ khác, người đọc vẫn hiểu không?_

- Có (một post, một card sản phẩm đủ ngữ cảnh) → nghiêng về `<article>`.
- Không — chỉ là một phần trong trang → `<section>` hoặc `div`.

Không cần đúng 100% mọi edge case; cần **có tiêu chí** thay vì chọn thẻ theo cảm tính.

### Khi nào _không_ cần `<nav>`?

Không phải cụm link nào cũng bọc `<nav>`. Link nằm trong đoạn văn, icon mạng xã hội nhỏ trong footer… thường **không** phải landmark điều hướng.  
`<nav>` dành cho điều hướng **chính** hoặc cụm tìm đường **lặp lại có chủ đích** (menu, breadcrumb, pagination có vai trò điều hướng).

### `<img>` và `alt`

- Ảnh **mang thông tin** → `alt` mô tả ngắn, đúng ý ảnh trong ngữ cảnh.
- Ảnh **trang trí** → `alt=""` (cố ý rỗng). Vẫn phải có thuộc tính `alt` — đừng bỏ hẳn.

---

## 5. Use case — màn Profile nội bộ

**Bài toán:** Avatar, tên, bio, nút “Chỉnh sửa”, danh sách dự án gần đây, link “Về trang chủ”.

| Phần UI                   | Hướng chọn thẻ                                       |
| ------------------------- | ---------------------------------------------------- |
| Tên + avatar đầu nội dung | `<header>` trong `<main>` (hoặc đầu một `<article>`) |
| “Về trang chủ” / menu app | `<nav>` + `<a href="…">`                             |
| Bio + list dự án          | `<main>` → từng `<section>`                          |
| “Chỉnh sửa”               | `<button type="button">` — hành động, không đổi URL  |
| Mỗi card dự án            | `<article>` (hoặc `<li>` trong danh sách — cũng ổn)  |

**Reflection:** Figma đẹp không bảo bạn dùng thẻ gì. Nhiều màn bị implement thành `div` + `onClick`; đến lúc audit a11y/SEO mới thiếu landmark — sửa muộn tốn hơn chọn đúng từ đầu.

**Trước / sau:**

```html
<!-- Tránh: div soup -->
<div class="page">
  <div class="top">…</div>
  <div class="menu" onclick="…">…</div>
  <div class="content">…</div>
</div>

<!-- Hướng tới: có nghĩa -->
<body>
  <header>…</header>
  <nav>…</nav>
  <main>…</main>
</body>
```

---

## 6. Requirement Thinking · Clarify

Mockup hầu như không ghi tên thẻ HTML. Trước khi dựng DOM, hỏi:

1. **Vùng nào là nội dung chính của trang?** → chốt một `<main>`.
2. **Cụm link nào thật sự là điều hướng?** → có `<nav>` hay chỉ link phụ?
3. **Click này đi chỗ khác hay kích hoạt hành động?** → `<a>` vs `<button type="button|submit">`.
4. **Ảnh nào mang nghĩa, ảnh nào trang trí?** → `alt` mô tả hay `alt=""`.

Chưa rõ → hỏi designer/PM. Đoán rồi `div` hóa tất cả là cách nhanh nhất để nợ semantics.

---

## 7. AI Fluency · Consumer (P1)

AI hay sinh `div` + class đẹp vì “dễ style, ít sai cú pháp”. Việc của bạn: **bắt lỗi semantics trên output**.

Gợi ý prompt (vẫn phải tự review):

> Generate markup for this layout. Prefer semantic HTML5 landmarks (header, nav, main, section, footer). Use `<a href>` for navigation and `<button type="button">` for in-page actions. Avoid div-only structure.

---

## 8. Exercise

- [Semantic page](../exercises/j1-01-semantic-page/)
