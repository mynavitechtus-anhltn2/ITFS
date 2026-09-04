---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: exercise
---

# Exercise J1-02b · Flex & Grid Layout

Theory: [j1-02-css-box-flex-grid.md](../../theory/j1-02-css-box-flex-grid.md) _(Phần B)_

| File                         | Vai trò                                           |
| ---------------------------- | ------------------------------------------------- |
| [before.html](./before.html) | Snapshot **trước** — layout “fake” bằng margin    |
| [index.html](./index.html)   | **Bài làm** — chuyển sang Flex + Grid đúng ý định |

## Mục tiêu

- Nhận biết khi dùng **Flex** (một trục) vs **Grid** (lưới)
- Dùng `gap` thay vì margin tinh chỉnh từng item
- Dựng list card **1 cột** và **2 cột** không vỡ ý định
- Trong card: stack chữ (Flex column) + hàng action (Flex row)

## Cách làm

1. Ghi **Clarify**.
2. Mở `index.html`, xem layout before (margin âm / width % thủ công).
3. Sửa CSS (giữ nội dung) theo yêu cầu bên dưới.
4. Checklist → Compare Selected với `before.html`.

Reset: `cp before.html index.html`

## Yêu cầu bài làm

1. **Toolbar** (brand + 2 nút giả): `display: flex`, `align-items: center`, `gap`, chữ/brand `flex: 1` hoặc tương đương.
2. **Lưới project**: `display: grid`, `gap: 16px`
   - Mặc định (mobile): `grid-template-columns: 1fr`
   - Từ ~640px: `1fr 1fr` (dùng 1 media query đơn giản)
3. **Mỗi card**: Flex column + `gap` cho tiêu đề / mô tả; hàng action Flex row với link + `button type="button"`.
4. Không dùng float; không “giả 2 cột” bằng `width: 48%` + `margin-right` thủ công.

## Clarify

1. Lưới card là một chiều hay ma trận hàng×cột?
2. Khi hẹp màn: về 1 cột hay wrap kiểu khác?
3. Phần nào co (`flex: 1`), phần nào giữ kích thước?

## Checklist

- [ ] Toolbar dùng Flex + `gap`
- [ ] Lưới card dùng Grid + `gap` (không float / width% ảo)
- [ ] 1 cột → 2 cột qua media query
- [ ] Trong card: column stack + row actions
- [ ] Action dùng `<a>` vs `<button type="button">` đúng nghĩa
- [ ] So được before/after (ý định layout rõ hơn, không chỉ “trông giống”)
