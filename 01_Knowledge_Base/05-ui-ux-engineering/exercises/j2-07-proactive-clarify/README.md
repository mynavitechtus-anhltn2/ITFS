---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Exercise · Proactive Clarify Drill

Theory: [j2-07-proactive-clarify.md](../../theory/j2-07-proactive-clarify.md)

| File                     | Vai trò                                                         |
| ------------------------ | --------------------------------------------------------------- |
| [before.md](./before.md) | 3 brief **"tưởng như đủ rõ"** — không sửa                       |
| [index.md](./index.md)   | **Bài làm** — tự Clarify trước, rồi 1 vòng AI gợi ý, rồi tự lọc |

## Mục tiêu

- Tự tìm khoảng trống trong brief **trước khi** thấy nó rõ ràng mơ hồ (khác Clarify bề mặt — brief đã lộ thiếu ngay)
- Thực hành đúng quy trình: **tự nghĩ trước → AI gợi ý → tự lọc giữ/bỏ có lý do**
- Không chép nguyên danh sách câu hỏi AI trả về

## Cách làm

1. Đọc từng brief trong `before.md`.
2. Với mỗi brief, **tự viết ≥2 câu hỏi Clarify trước** (không dùng AI ở bước này) — dựa vào 5 chủ đề: component boundary, state ownership, responsive, accessibility, render model.
3. Sau đó, đưa nguyên văn brief cho AI với prompt tương tự: _"Liệt kê câu hỏi Clarify cần hỏi trước khi implement brief này, tập trung component boundary/state/responsive/a11y."_
4. Dán danh sách AI gợi ý vào `index.md`, rồi **tự lọc**: giữ câu nào, bỏ câu nào — mỗi quyết định kèm 1 câu lý do.
5. Không implement UI trong bài này — chỉ Clarify.

## Checklist

- [ ] Brief 1–3: mỗi brief có ≥2 câu hỏi **tự nghĩ trước** (viết trước khi hỏi AI)
- [ ] Mỗi brief có 1 vòng AI gợi ý được dán lại (nguyên văn hoặc tóm tắt trung thực)
- [ ] Mỗi câu AI gợi ý được đánh dấu **giữ/bỏ + lý do** — không giữ tất cả, không bỏ tất cả
- [ ] Brief 3: chỉ ra được mâu thuẫn ngầm giữa "cần SEO" và "dùng CSR hiện tại" (đây là finding quan trọng nhất)
- [ ] Câu hỏi đủ hẹp để trả lời được — không hỏi kiểu "làm sao cho đúng?"
