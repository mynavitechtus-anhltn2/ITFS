---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# State map · UI State

## Bảng sở hữu state

| State                   | Component sở hữu                      | Ai đọc / nhận qua props                                   | Vì sao đặt ở đó                                       |
| ----------------------- | ------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------- |
| `query`                 | `ProjectsPage` (`useState`)           | `SearchBar` (`value` + `onChange`); filter derive list    | Hai anh em (ô search + list) cần cùng một chuỗi       |
| `starredOnly`           | `ProjectsPage` (`useState`)           | `StarredFilter` (controlled checkbox); filter derive list | Cùng trang với search — cha chung gần nhất            |
| `projects` (nguồn)      | Hằng `PROJECTS` (module)              | `ProjectsPage` đọc để lọc                                 | Dữ liệu mẫu cố định; không phải UI state              |
| (derived) filtered list | Tính trong `ProjectsPage` (`visible`) | `ProjectList` nhận `projects` đã lọc                      | Derive, không `useState` trùng; không mutate mảng gốc |

## Trước (before) sai chỗ nào?

1. `SearchBar` tự `useState(query)` — list không nhận được, gõ search không đổi kết quả.
2. `ProjectList` tự `useState(starredOnly)` và lọc `PROJECTS` riêng — filter starred không kết hợp search; hai nguồn sự thật.

## Vì sao _chưa_ cần Redux/Context global ở bài này?

`query` và `starredOnly` chỉ sống trên **một màn**. Cha gần nhất (`ProjectsPage`) đủ để truyền props. Chưa có auth/theme dùng khắp app, chưa cần nhớ filter sau reload (scope bài: không persist). Global store lúc này là lift quá cao.

## Clarify còn mở

1. Nếu sau này share link kèm `?q=` / `?starred=1` thì chuyển một phần sang URL state — vẫn chưa phải Redux.
