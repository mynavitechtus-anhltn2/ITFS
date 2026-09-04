---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Exercise · Responsive (1 cột → 2 cột)

Theory: [j2-03-responsive.md](../../theory/j2-03-responsive.md)

| File                         | Vai trò                                    |
| ---------------------------- | ------------------------------------------ |
| [before.html](./before.html) | 2 cột cứng — **vỡ / scroll ngang** khi hẹp |
| [index.html](./index.html)   | **Bài làm** — mobile-first 1 → 2 cột       |
| [notes.md](./notes.md)       | **Giải thích** breakpoint đã chọn          |

## Mục tiêu

- Hiểu mobile-first + `min-width`
- Đổi lưới 1 cột → 2 cột có ý định
- Giải thích được vì sao chọn ngưỡng (không “số đẹp”)

## Cách làm

1. Mở `before.html` → DevTools device mode ~360px: quan sát tràn / cột bóp.
2. Sửa CSS trong `index.html` (giữ nội dung): Grid/Flex + `@media (min-width: …)`.
3. Điền [notes.md](./notes.md).
4. Compare Selected với `before.html`.

Reset: `cp before.html index.html`

Gợi ý ngưỡng bài này: **640px** (đủ ~2×280px card + gap) — vẫn phải viết _vì sao_ trong notes; được chọn số khác nếu giải thích được.

## Clarify

1. Trên mobile có được phép 2 cột không?
2. Card tối thiểu rộng bao nhiêu vẫn đọc được?
3. Toolbar: wrap hay stack?

## Checklist

- [ ] Viewport ~360px: **không** scroll ngang do layout
- [ ] Mặc định (hep): **1 cột**
- [ ] Từ breakpoint đã chọn: **2 cột**
- [ ] Dùng `gap` (không margin % ảo như before)
- [ ] `notes.md` có lý do breakpoint
- [ ] Đã thử ≥2 bề rộng trong DevTools
