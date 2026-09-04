---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Exercise · UI State (lift + controlled)

Theory: [j2-02-ui-state.md](../../theory/j2-02-ui-state.md)

| File                           | Vai trò                                              |
| ------------------------------ | ---------------------------------------------------- |
| [before.html](./before.html)   | State **sai chỗ** — search/filter không đồng bộ list |
| [index.html](./index.html)     | **Bài làm** — lift state + controlled inputs         |
| [state-map.md](./state-map.md) | **State map** — ai sở hữu gì                         |

Stack: React 18 (CDN) + Babel — mở bằng trình duyệt.

## Mục tiêu

- Lift `query` và `starredOnly` lên cha chung
- `SearchBar` / toggle là **controlled**
- List hiển thị kết quả lọc đúng
- Viết state map ngắn

## Cách làm

1. Chạy `before.html` — gõ search / tick starred: quan sát list **không** khớp (hoặc lệch).
2. Sửa `index.html`: một nguồn sự thật trên `ProjectsPage`.
3. Điền [`state-map.md`](./state-map.md).
4. Compare với `before.html`.

Reset: `cp before.html index.html`

## Clarify

1. Search và list có cần cùng `query` không?
2. Filter starred có phải UI state tạm của trang không?
3. Có cần nhớ filter sau reload không? (scope bài này: **không bắt buộc**)

## Checklist

- [ ] `query` chỉ một `useState` (ở cha)
- [ ] `starredOnly` chỉ một `useState` (ở cha)
- [ ] Input search: `value` + `onChange` (controlled)
- [ ] List derive từ `projects` + `query` + `starredOnly` (không mutate mảng gốc)
- [ ] Không dùng Redux/Context global
- [ ] `state-map.md` điền đủ
