---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: theory
---

# CSR vs SSR — hiểu mô hình render

SoT / Matrix: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao cần phân biệt CSR và SSR?

Cùng là “React/Vue app”, nhưng **HTML tới trình duyệt bằng đường nào** quyết định:

- Google/bot thấy gì lúc đầu
- User chờ bao lâu tới nội dung đọc được
- App tương tác (click, state) sẵn sàng khi nào

Chọn sai → landing không SEO, hoặc dashboard bị ép SSR không cần thiết.

**Bản chất:** không phải CSR “cũ” / SSR “mới” — mà **ai render HTML lần đầu: trình duyệt hay server**.

---

## 2. Hai mô hình cần nắm

### CSR — Client-Side Rendering

```text
Server gửi shell (HTML mỏng + JS bundle)
    → Trình duyệt tải JS
    → JS chạy, fetch data, vẽ UI
```

| Hướng mạnh                                        | Đánh đổi thường gặp                                   |
| ------------------------------------------------- | ----------------------------------------------------- |
| App tương tác giàu sau khi load (dashboard, tool) | Nội dung thật xuất hiện muộn hơn (phụ thuộc JS + API) |
| Deploy static hosting đơn giản                    | SEO/share preview khó hơn nếu không thêm giải pháp    |
| Logic UI nằm client                               | TTFB HTML có thể nhanh nhưng **time-to-content** chậm |

### SSR — Server-Side Rendering

```text
Request tới server
    → Server render HTML đủ nội dung (kèm data)
    → Gửi HTML về
    → JS hydrate để gắn tương tác (với framework hiện đại)
```

| Hướng mạnh                                        | Đánh đổi thường gặp                                                |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| HTML có nội dung ngay — tốt SEO, link preview     | Server phải chạy/compute mỗi request (hoặc cache)                  |
| First paint nội dung thường sớm hơn với mạng chậm | Complexity ops / caching; hydrate vẫn cần cho interactivity đầy đủ |
| Phù hợp trang đọc / marketing / blog              | Không phải “miễn phí” — sai cache vẫn chậm                         |

**Nuance:** SSR **không** thay CSR hoàn toàn. Nhiều app hybrid: trang public SSR, khu vực app CSR/SPA.

---

## 3. Tiêu chí chọn nhanh

Hỏi lần lượt:

1. **Bot/SEO/OG share có quan trọng?** → nghiêng SSR (hoặc SSG).
2. **Nội dung phụ thuộc session user / permission nặng?** → nghiêng CSR (sau login).
3. **Tương tác liên tục (filter, drag, realtime) là trọng tâm?** → CSR ổn sau shell.
4. **Trang gần như tĩnh?** → SSG (sinh sẵn) gần SSR về “HTML đủ”, rẻ hơn runtime SSR — **nhận biết** SSG là anh em; chưa bắt buộc implement.

### Nhận biết — 4 mô hình cạnh nhau (CSR/SSR/SSG/ISR)

| Mô hình                                  | HTML render lúc nào                                                                       | Chi phí server                         | Hợp với                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------- |
| **CSR**                                  | Ngay trên máy user, sau khi JS tải + fetch data                                           | Thấp (chỉ serve static + API)          | Dashboard, admin, tool nội bộ                     |
| **SSR**                                  | Trên server, **mỗi lần** có request                                                       | Cao hơn — server tính lại mỗi request  | Trang cá nhân hóa nhưng vẫn cần SEO               |
| **SSG**                                  | Trên server, **một lần lúc build**, ra file tĩnh                                          | Rất thấp — chỉ serve file có sẵn (CDN) | Blog, docs, landing ít đổi nội dung               |
| **ISR** _(nhận biết thuật ngữ, Next.js)_ | Như SSG nhưng **tự build lại 1 trang cụ thể** sau một khoảng thời gian/khi có request mới | Trung bình — cân bằng SSG + SSR        | Trang sản phẩm số lượng lớn, đổi giá/tồn theo giờ |

Chưa cần triển khai ISR — chỉ cần **không lẫn** nó với SSR khi đọc docs Next.js hoặc nghe đồng nghiệp nhắc.

| Loại màn (ví dụ)          | Hướng thường hợp lý | Vì sao (một câu)                |
| ------------------------- | ------------------- | ------------------------------- |
| Marketing landing         | SSR / SSG           | Cần nội dung + SEO ngay         |
| Blog / docs bài viết      | SSR / SSG           | Nội dung đọc + index            |
| Dashboard sau login       | CSR                 | SEO kém quan trọng; UI stateful |
| Admin tool nội bộ         | CSR                 | Ít public crawl                 |
| Trang sản phẩm e-commerce | SSR / SSG           | SEO + share + nội dung giá/tồn  |

---

## 4. Nuances dễ nhầm

### “SPA = luôn xấu SEO”

SPA CSR thuần khó SEO hơn — nhưng có prerender/SSR bridge. Hiểu **vấn đề**, không dogma.

### TTFB vs Time to meaningful content

CSR: HTML shell nhanh ≠ user đã thấy list. SSR: HTML đầy đủ sớm hơn về nội dung, JS vẫn cần để “mượt”.

### Hydration

Sau SSR, JS gắn event — mismatch server/client HTML → bug hydrate. Biết khái niệm; debug sâu = sau.

### CSR không nghĩa “không có server”

Vẫn có API. Khác chỗ: **server không trả UI HTML đủ** cho request trang lần đầu.

---

## 5. Use case — portal nội bộ + trang tuyển dụng

- **Tuyển dụng / blog engineering** public → SSR/SSG để share LinkedIn có title/mô tả.
- **Portal task board** sau login → CSR (hoặc SPA trong auth area).

**Reflection:** Team ép cả portal SSR “vì hiện đại” → thêm latency server cho màn chỉ vài chục user nội bộ, SEO bằng 0. Chọn theo **màn**, không theo trend.

**Case study — cả hai chiều đều có thật:**

- **Airbnb** là một trong những công ty đầu tiên công khai chia sẻ việc server-render React ở quy mô lớn: hệ thống nội bộ **Hypernova** (2016, engineering blog Airbnb) render component React trên server Ruby app để trang có nội dung ngay khi tải — ưu tiên SEO + tốc độ hiển thị cho các trang public (listing, tìm phòng).
- **Netflix** (bài "A Netflix Web Performance Case Study", tech blog 2017) từng **gỡ bớt** một phần React khỏi trang chủ đăng nhập (landing) cho TV/thiết bị yếu để giảm JS phải tải và parse — vì với màn hình đó, tốc độ hiển thị nội dung tĩnh quan trọng hơn tương tác phong phú.

Hai case đối lập nhưng cùng logic: **chọn theo đặc điểm của màn hình đó** (public/SEO cần gì, thiết bị người dùng thế nào) — không có mô hình nào "luôn thắng".

---

## 6. Requirement Thinking · Clarify

1. Màn này **public** hay sau auth?
2. Có cần **SEO / Open Graph** không?
3. Data có phải **realtime / cá nhân hóa** mạnh không?
4. Team đã có **framework** SSR (Next…) hay đang CSR thuần — ràng buộc gì?

---

## 7. AI Fluency · Consumer (P3)

AI hay:

- Khuyên Next SSR cho mọi thứ
- Trộn khái niệm SSG/ISR/CSR trong một câu không phân biệt
- Bỏ qua “sau login không cần SEO”

Checklist:

- [ ] AI nêu rõ _public vs auth_?
- [ ] Trade-off SEO vs complexity có được nhắc?
- [ ] Có bịa API framework không có trong stack team không?

Gợi ý prompt:

> For each screen, recommend CSR or SSR/SSG. Explain using SEO need, auth, and interactivity. Do not default everything to Next.js SSR.

---

## 8. Tóm tắt

- Câu hỏi cốt lõi: **ai render HTML lần đầu** — trình duyệt (CSR) hay server (SSR/SSG)?
- Chọn theo màn hình: public + cần SEO → nghiêng SSR/SSG; sau login + stateful → nghiêng CSR.
- SSG và ISR là "anh em" của SSR (HTML build sẵn hoặc build lại theo lịch) — không phải CSR.
- CSR vẫn có server (API) — khác biệt là server không trả UI HTML đủ cho request đầu tiên.

## 9. Exercise

- [CSR vs SSR](../exercises/j2-05-csr-ssr/)
