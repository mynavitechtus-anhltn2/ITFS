---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: exercise
---

# Exercise J1-05 · AI Review Notes (Consumer / P1)

Theory: [j1-05-ai-fluency-consumer.md](../../theory/j1-05-ai-fluency-consumer.md)

| File                         | Vai trò                                                     |
| ---------------------------- | ----------------------------------------------------------- |
| [before.html](./before.html) | Mẫu output “AI sinh” — **nhiều lỗi** semantic/a11y          |
| [index.html](./index.html)   | **Bài làm** — sửa thành markup đúng; ghi note ≥3 lỗi đã bắt |

## Mục tiêu

- Đóng vai Consumer: review output AI, không tin vì “nhìn được”
- Chỉ ra **≥3** lỗi trong: tag / label / alt / focus/`type`
- Sửa lại bằng thẻ đúng (có thể dùng Bootstrap class nếu muốn)

## Cách làm

1. Mở `before.html` trong trình duyệt + DevTools.
2. Liệt kê lỗi vào comment đầu `index.html` (template có sẵn) — **tối thiểu 3**.
3. Sửa `index.html` thành phiên bản đúng semantics.
4. So Compare Selected với `before.html`.

Reset: `cp before.html index.html` (nhớ giữ/ghi lại phần note nếu cần).

## Checklist review (bắt buộc)

- [ ] Tag: không `div`/`span` giả nút hoặc link
- [ ] Mọi `input` có `label` (`for`/`id`)
- [ ] `img` có `alt` hợp lý
- [ ] `button` có `type` rõ; điều hướng dùng `<a href>`
- [ ] (Bonus) Tab được tới mọi control chính

## Gợi ý — không spoil hết

Before cố ý sai ở actions, form, và ảnh. Hãy tự tìm trước khi hỏi buddy.
