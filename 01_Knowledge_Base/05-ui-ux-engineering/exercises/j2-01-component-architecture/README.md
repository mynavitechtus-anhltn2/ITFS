---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Exercise · Component Architecture

Theory: [j2-01-component-architecture.md](../../theory/j2-01-component-architecture.md)

| File                         | Vai trò                         |
| ---------------------------- | ------------------------------- |
| [before.html](./before.html) | God component (cả trang 1 hàm)  |
| [index.html](./index.html)   | **Bài làm** — tách ≥3 component |
| [notes.md](./notes.md)       | **Giải thích** vì sao cắt       |

Stack: React 18 (CDN) + Babel standalone — mở bằng trình duyệt, không cần Vite cho bài này.

## Mục tiêu

- Hiểu props / composition bằng cách **tự cắt** một màn
- Tách ≥3 component có tên + trách nhiệm rõ
- Viết được lý do cắt (không chỉ “cho sạch file”)

## Cách làm

1. Mở `before.html` — đọc `ProfilePage` (một khối).
2. Refactor trong `index.html`: extract tối thiểu `ProfileHeader`, `ProfileBio`, `ProfileActions` (thêm `ProjectCard` nếu giữ list).
3. Điền [notes.md](./notes.md) — mỗi component một câu trách nhiệm + vì sao không để nguyên god file.
4. Compare Selected: `before.html` vs `index.html`.

Reset code: `cp before.html index.html`

## Clarify

1. Khối nào sẽ tái dùng / đổi độc lập?
2. Props tối thiểu của Header / Bio / Actions là gì?
3. Click “Chỉnh sửa” — handler để đâu ở bài này? (callback prop hoặc no-op; state sâu → bài UI State)

## Checklist

- [ ] ≥3 function components (ngoài `App` / root)
- [ ] Props đặt tên theo UI (`name`, `role`, `onEdit`…) — không `data`, `obj`
- [ ] Không tạo wrapper vô nghĩa (chỉ `return children`)
- [ ] UI vẫn tương đương before (Profile + list dự án)
- [ ] `notes.md` giải thích _vì sao_ từng đường cắt
- [ ] `button type="button"` / `<a href>` vẫn đúng semantics
