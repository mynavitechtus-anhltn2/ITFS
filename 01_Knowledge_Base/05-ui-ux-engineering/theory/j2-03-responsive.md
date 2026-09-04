---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: theory
---

# Responsive — breakpoint, mobile-first, layout có ý định

SoT / Matrix: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao cần responsive có chủ đích?

Một mockup desktop không đủ. User mở điện thoại → chữ tràn, cột kép bóp, phải scroll ngang.

Responsive ra đời để **cùng nội dung, khác bố cục theo không gian** — có quy tắc, đo được, review được.

**Bản chất:** không thuộc hết bảng breakpoint Bootstrap — mà hiểu _ý định_: hẹp = ưu tiên đọc 1 cột; rộng = tận dụng 2 cột.

---

## 2. Ba khái niệm cần hiểu

### Breakpoint

Ngưỡng chiều rộng (thường `min-width` / `max-width`) tại đó CSS đổi luật layout.

```css
/* Mobile-first: mặc định 1 cột, từ 640px → 2 cột */
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 640px) {
  .project-grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

### Mobile-first

Viết **base = màn hẹp**, rồi _mở rộng_ bằng `min-width`.  
Ngược desktop-first (`max-width` chồng lớp) dễ “đè” rối khi thêm tier.

### Layout theo ý định

Hỏi trước khi code: _Ở hẹp, user cần thấy gì trước?_ (nội dung xếp dọc, không mất CTA).  
Số `640` / `768` / `1024` phải **giải thích được** (theo design token team hoặc điểm layout bắt đầu chật) — không copy số thần thánh.

---

## 3. Công cụ hay dùng (nhắc từ layout nền tảng)

| Công cụ                             | Vai trò trong responsive                     |
| ----------------------------------- | -------------------------------------------- |
| **Flex** + `flex-wrap`              | Hàng nút/toolbar cho xuống dòng khi hẹp      |
| **Grid** + đổi `#track`             | 1 cột → 2 cột có kiểm soát                   |
| `gap`                               | Khoảng cách ổn định giữa item khi đổi số cột |
| `min-width: 0` / tránh `width` cứng | Con flex/grid không phá khung                |

---

## 4. Nuances dễ nhầm

### `%` cố định ≠ responsive có ý định

Hai card `width: 48%` trên mobile vẫn cố nằm cạnh nhau → chữ 0.5em, hoặc overflow. Cần **đổi số cột**, không chỉ giảm font.

### Breakpoint theo nội dung, không chỉ theo device name

“iPhone” thay đổi từng năm. Đặt tên theo hành vi: `at-two-columns` khi card còn đủ ~280px/cột — đo trong DevTools.

### Desktop-first vs mobile-first

Cả hai chạy được. Ưu tiên **mobile-first + `min-width`** để giải thích chuỗi tăng dần dễ hơn.

### Ẩn nội dung trên mobile

`display: none` vì “chật” có thể cắt thông tin quan trọng. Hỏi Clarify trước khi giấu CTA/nav.

### Rem / fluid type (nhận biết)

Biết chữ có thể scale; chưa bắt buộc fluid type phức tạp. Ưu tiên **không tràn** và hierarchy đọc được.

### Nhận biết — 4 chiến lược layout theo màn hình

Thuật ngữ từ bài viết gốc "Responsive Web Design" (Ethan Marcotte, 2010) — vẫn dùng phổ biến để phân loại:

| Chiến lược     | Bản chất                                                                                            | Hay gặp ở                                      |
| -------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Fixed**      | Width cố định (`px`), không đổi theo màn hình                                                       | Trang cũ, email HTML                           |
| **Fluid**      | Width theo `%`, co giãn liên tục nhưng **không đổi số cột/thứ tự**                                  | Layout đơn giản, ít breakpoint                 |
| **Adaptive**   | Vài layout **cố định** riêng biệt, nhảy giữa các breakpoint (không co giãn liên tục giữa 2 mốc)     | App/site có ít thiết bị mục tiêu cần tối ưu kỹ |
| **Responsive** | Kết hợp fluid + breakpoint: co giãn liên tục **và** đổi cấu trúc (số cột, ẩn/hiện khối) tại các mốc | Chuẩn hiện tại — đây là hướng bài học này dạy  |

Bài `.project-grid` ở mục 2 là **Responsive** thật: vừa fluid (grid co theo viewport) vừa đổi cấu trúc tại `640px`. Chỉ cần nhận ra 4 nhãn này khi đọc case study/tài liệu — không cần tự phân loại code của mình theo đúng tên.

---

## 5. Use case — lưới project cards

| Viewport   | Ý định                                |
| ---------- | ------------------------------------- |
| &lt; 640px | 1 cột — đọc lần lượt, full width card |
| ≥ 640px    | 2 cột — quét nhanh hơn khi đủ chỗ     |

**Reflection:** Fix bằng `transform: scale(0.8)` trên body “cho vừa mobile” = không responsive. Đổi `grid-template-columns` mới đúng bài toán.

---

## 6. Requirement Thinking · Clarify

1. **Mockup có frame mobile không?** Thiếu → hỏi design / giả định tạm ghi rõ.
2. **Điểm nào được phép 2 cột?** (min width card?)
3. **Nav trên mobile:** stack, hamburger (scope?), hay giữ hàng + wrap?
4. **Nội dung nào không được ẩn** khi hẹp?

---

## 7. AI Fluency · Consumer (P3)

AI hay:

- Chỉ set `width: 100%` rồi nhận là xong
- Nhồi nhiều `@media` copy Bootstrap không giải thích
- Dùng `px` cứng cho cột + quên mobile
- `flex` không `wrap` khiến toolbar tràn

Checklist:

- [ ] Base layout chạy được trên ~320–400px không scroll ngang?
- [ ] Có `@media (min-width: …)` đổi layout có chủ đích?
- [ ] Giải thích được vì sao chọn số breakpoint đó?
- [ ] DevTools device mode đã thử ≥2 bề rộng?

Gợi ý prompt:

> Mobile-first CSS Grid: 1 column by default, 2 columns from 640px min-width. Use gap. No horizontal scroll on 360px viewport. Comment why 640px was chosen.

---

## 8. Tóm tắt

- Responsive có ý định = đổi **cấu trúc** (số cột, thứ tự đọc) tại breakpoint, không chỉ co giãn `%` hay giảm font.
- Mobile-first (`min-width`, base = màn hẹp) dễ giải thích và bảo trì hơn desktop-first.
- Breakpoint phải giải thích được (điểm layout bắt đầu chật) — không copy số "thần thánh" từ nơi khác.
- Không ẩn nội dung/CTA quan trọng trên mobile chỉ vì "chật" — Clarify trước khi giấu.

## 9. Exercise

- [Responsive](../exercises/j2-03-responsive/)
