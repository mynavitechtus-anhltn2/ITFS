---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Exercise · AI Structure Review (Consumer / P3)

Theory: [j2-06-ai-structure-review.md](../../theory/j2-06-ai-structure-review.md)

| File                         | Vai trò                                               |
| ---------------------------- | ----------------------------------------------------- |
| [before.html](./before.html) | PR "do AI viết" (giả lập)                             |
| [index.md](./index.md)       | **Bài làm** — ghi ≥3 finding + giải thích + hướng sửa |

Stack: React 18 (CDN) + Babel standalone — mở bằng trình duyệt, không cần Vite cho bài này.

## Mục tiêu

- Đọc code do AI viết như đọc code đồng nghiệp — không chỉ nhìn UI "chạy được"
- Phân biệt **hallucination ồn** (build/runtime lỗi ngay) vs **hallucination im** (chạy vẫn được, vô nghĩa khi đọc kỹ)
- Chỉ ra **≥3 finding** cấu trúc thật (không tính lỗi semantics/a11y bề mặt)

## Cách làm

1. Mở `before.html` trong trình duyệt **và mở DevTools Console trước khi đọc code**.
2. Ghi lại điều gì xảy ra (trắng trang? lỗi gì trong Console?) — đây là bước bắt hallucination _ồn_.
3. Đọc kỹ toàn bộ code trong `<script type="text/babel">` — vẽ lại luồng props cha → con trên giấy/note nếu cần.
4. Điền `index.md`: ≥3 finding, mỗi finding ghi rõ loại lỗi, vị trí, vì sao là lỗi cấu trúc.
5. Viết đoạn giải thích ngắn (như đang nói với buddy) vì sao PR này chưa nên merge.

Bài này **không yêu cầu sửa code** — trọng tâm là đọc & giải thích đúng, không phải refactor component.

## Checklist review (bắt buộc)

- [ ] Đã mở Console và ghi lại lỗi runtime (nếu có) trước khi đọc code
- [ ] Tìm ra hook/API bị "bịa" (hallucination ồn) và chỉ rõ dòng nào
- [ ] Tìm ra ≥1 prop bị truyền "chuyển hộ" không ai dùng (hallucination im / props drilling giả)
- [ ] Tìm ra ≥1 component "rỗng" (chỉ `return children`, không lý do)
- [ ] Có đoạn giải thích cho buddy — không chỉ liệt kê danh sách

## Gợi ý — không spoil hết

`before.html` cố ý sai ở 3 lớp khác nhau: một lỗi lộ ngay khi chạy, hai lỗi chỉ lộ khi đọc kỹ luồng props/component. Đừng chỉ dừng ở lỗi đầu tiên tìm được.
