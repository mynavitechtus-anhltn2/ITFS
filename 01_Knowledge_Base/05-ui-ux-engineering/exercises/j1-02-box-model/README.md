---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: exercise
---

# Exercise J1-02a · Box Model Inspect

Theory: [j1-02-css-box-flex-grid.md](../../theory/j1-02-css-box-flex-grid.md) _(Phần A)_

| File                         | Vai trò                                           |
| ---------------------------- | ------------------------------------------------- |
| [before.html](./before.html) | Snapshot **trước** — hộp lệch spec                |
| [index.htm`](./index.html)   | **Bài làm** — sửa CSS (và markup nếu cần) tại đây |

## Mục tiêu

- Nhận biết 4 tầng: content / padding / border / margin
- Phân biệt `content-box` vs `border-box`
- Map đúng khoảng **trong** card (`padding`) vs **giữa** card (`margin` hoặc `gap`)
- Đo được bằng DevTools (Elements → Computed / Box Model)

## Cách làm

1. Ghi **Clarify**.
2. Mở `index.html` → DevTools → chọn từng `.box` → xem sơ đồ box.
3. Sửa cho **khớp spec** bên dưới (UI có thể gần giống before, nhưng số đo phải đúng).
4. Checklist → Compare `before.html` vs `index.html`.

Reset: `cp before.html index.html`

## Spec cần đạt (đo outer width)

Bốn hộp xếp ngang (hoặc wrap), mỗi hộp:

| Thuộc tính                         | Giá trị                                                    |
| ---------------------------------- | ---------------------------------------------------------- |
| Outer width (sau padding + border) | **200px**                                                  |
| `padding`                          | **16px** mọi phía                                          |
| `border`                           | **2px solid**                                              |
| Khoảng cách **giữa** các hộp       | **16px** (dùng `gap` trên container hoặc margin nhất quán) |
| `box-sizing`                       | **`border-box`**                                           |

Nội dung chữ trong hộp giữ nguyên ý (Box A–D).

## Clarify

1. Spec 200px là kích thước **khung ngoài** hay chỉ vùng content?
2. 16px giữa các hộp là `padding` hay khoảng ngoài (`margin`/`gap`)?
3. Border 2px đã được tính vào 200px chưa?

## Checklist

- [ ] Mọi hộp `box-sizing: border-box`
- [ ] DevTools: outer width ≈ 200px (không phình vì padding)
- [ ] Padding 16px; border 2px
- [ ] Khoảng cách giữa hộp ≈ 16px, không “dùng padding giả margin”
- [ ] Giải thích được vì sao before bị lệch (content-box / nhầm tầng)
