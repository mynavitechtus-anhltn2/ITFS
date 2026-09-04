---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Bài làm · AI Structure Review

---

## Bước 1 — Chạy thử trước khi đọc (bắt hallucination "ồn")

Mở `before.html` trong trình duyệt + DevTools Console.

- Trang có render được không? **Không** — `#root` trống, UI dashboard không hiện (trang “trắng” phần app).
- Console báo lỗi gì (copy nguyên dòng lỗi)? `Uncaught ReferenceError: useSyncedProfile is not defined`
- Lỗi đó chỉ tới component/hook nào? Gọi trong `Dashboard`: `const profile = useSyncedProfile();` — hook **không import, không khai báo** trong file hay trong React.

---

## Bước 2 — Đọc cấu trúc, tìm ≥3 finding

| #   | Finding                                                                                   | Loại (hallucination ồn / im · props drilling giả · confetti · naming mơ hồ) | Vị trí (component)                      | Vì sao là lỗi cấu trúc                                                                                             |
| --- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1   | `useSyncedProfile()` bị bịa — runtime crash trước khi vẽ UI                               | Hallucination **ồn**                                                        | `Dashboard`                             | Hợp đồng dữ liệu (`profile.name`) dựa trên API không tồn tại. PR “chạy được” là giả; merge sẽ trắng trang.         |
| 2   | Prop `theme` đi `Sidebar` → `SidebarItem` → `SidebarIcon` mà **không component nào dùng** | Hallucination **im** / props drilling giả                                   | `Sidebar`, `SidebarItem`, `SidebarIcon` | Trung gian chỉ “chuyển hộ”. Không phải drilling có chủ đích (layout cần theme). Đọc luồng props = nhiễu.           |
| 3   | `SidebarWrapper` chỉ `return <Fragment>{children}</Fragment>`                             | Component **confetti** (rỗng)                                               | `SidebarWrapper`                        | Không thêm semantics, style, hay ranh giới trách nhiệm — cắt file cho có số component.                             |
| 4   | `handleStuff` + `Dashboard` ôm sidebar + list + toggle star                               | Naming mơ hồ / god nhẹ                                                      | `Dashboard`                             | Tên handler không nói _star toggle_; một component vừa “data store” vừa layout. Không phải crash nhưng khó review. |

---

## Bước 3 — Giải thích cho buddy

PR này UI “tách Dashboard thành component” nhưng **không merge được**: hook `useSyncedProfile` không tồn tại nên app không render — đó là hallucination ồn, bắt bằng Console trước khi đọc. Sau khi sửa hook, cấu trúc vẫn yếu: `theme` xuyên 3 tầng không ai đọc, `SidebarWrapper` không làm gì, `handleStuff` không nói ý nghĩa. AI tăng số file chứ không tăng ranh giới trách nhiệm. Semantics cơ bản (button type) ổn; lỗi ở đây là **cấu trúc + API bịa** — đúng P3.

---

## Bước 4 — Hướng sửa

Với mỗi finding ở Bước 2, nêu ngắn hướng sửa đúng:

1. Xóa `useSyncedProfile`. Greeting tĩnh, prop `userName`, hoặc hook **có thật** trong codebase (grep trước khi dùng).
2. Bỏ `theme` khỏi chuỗi Sidebar cho đến khi có chỗ đọc (class/token). Đừng truyền “cho có”.
3. Xóa `SidebarWrapper`; `Sidebar` return `<nav>` trực tiếp.
4. Đổi `handleStuff` → `toggleStarred`; cân nhắc `ProjectList` presentational, `Dashboard` chỉ sở hữu `data`.

---

## Clarify còn mở

`theme="dark"` — AI định làm dark mode thật hay chỉ filler? Nếu design có theme, cần token trên `nav`, không phải prop xuyên icon. Tra docs React: không có `useSyncedProfile` — hỏi tác giả PR lấy từ lib nào trước khi “viết polyfill”.
