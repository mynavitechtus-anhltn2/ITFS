---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Notes · Responsive

## Breakpoint đã chọn

- Giá trị: `min-width: 640px`
- **Vì sao số này** (không chỉ “thường thấy trên mạng”):

Hai card đọc được khoảng ≥280px nội dung + `gap` 16px + padding `.wrap` (~32px) ≈ 608–640px. Dưới ngưỡng đó, 2 cột sẽ bóp chữ hoặc overflow — đúng lỗi `min-width: 280px` + `width: 48%` của before. 640px là điểm **vừa đủ chỗ cho 2 cột**, không phải số “đẹp”.

## Ý định layout

| Bề rộng          | Số cột / toolbar                           | Vì sao                                                               |
| ---------------- | ------------------------------------------ | -------------------------------------------------------------------- |
| Hẹp (base)       | 1 cột; toolbar `flex-wrap`                 | Mobile ~360px: card full width, chip xuống hàng — không scroll ngang |
| Từ 640px trở lên | 2 cột `1fr 1fr`; toolbar vẫn wrap nếu chật | Đủ chỗ 2 card ~280px+ mà không cần float/%                           |

## Before sai ở chỗ nào?

1. Luôn `float` + `width: 48%` + `min-width: 280px` → trên 360px hai hộp không vừa, overflow ngang.
2. Toolbar `white-space: nowrap` → chip “Shared with me” kéo hàng dài, thêm scroll ngang dù grid có sửa.

## Đã kiểm tra DevTools

- [x] ~360px
- [x] ~768px (hoặc bề rộng ≥ breakpoint)

Quan sát ngắn:

360px: `grid-template-columns` = 1 track; `document.documentElement.scrollWidth` ≈ innerWidth (không tràn). 768px: 2 track bằng nhau, `gap` 16px, không float.
