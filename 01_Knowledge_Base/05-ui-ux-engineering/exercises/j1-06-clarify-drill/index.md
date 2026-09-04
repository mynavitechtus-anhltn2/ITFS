---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: exercise
---

# Clarify Drill — bài làm

Theory: [`../../theory/j1-06-requirement-clarify.md`](../../theory/j1-06-requirement-clarify.md)  
Brief gốc: [`./before.md`](./before.md)

> Điền câu trả lời của bạn. Mỗi brief ≥2–3 câu hỏi + “Hỏi ai”.

---

## Brief 1 — Profile giống LinkedIn

**Chỗ mơ hồ nhận ra:**

1. “Giống LinkedIn” không có biên: card tóm tắt hay full page (experience, skills, feed)?
2. Không Figma / spacing / type — số đo để implement chưa có.
3. Nút “chỉnh sửa” chưa nói đi URL khác hay hành động trên trang; im lặng về mobile.

**Câu hỏi Clarify:**

1. Scope tuần này chỉ card hồ sơ (avatar, tên, role, 1 nút) hay clone gần đủ các khối LinkedIn?
2. “Chỉnh sửa” mở trang riêng, modal trên trang, hay được `type="button"` no-op?
3. Spacing/type lấy từ design system nội bộ hay cần bảng spec (padding card, cỡ chữ tên/meta)?
4. Cần stack mobile hay chỉ 1 layout desktop hẹp cho deadline này?

**Hỏi ai:** PM (scope + deadline) · Design (spacing/type, hành vi nút) · Lead/buddy (convention semantic + lib đang dùng)

**Giả định tạm (nếu phải code trước khi có trả lời):** Scope chỉ card tóm tắt (avatar + tên + role + bio ngắn + Chỉnh sửa); nút là `<button type="button">`; 1 layout; `alt` = tên người. Gắn comment “chưa có spec Figma” để reviewer biết.

---

## Brief 2 — Form đăng ký event

**Chỗ mơ hồ nhận ra:**

1. “Vài field cơ bản” chưa liệt kê field / bắt buộc / validate.
2. Sau submit: thông báo ở đâu, có email xác nhận, có redirect không.
3. “UI đẹp của team” chưa chỉ lib/version; copy lỗi chưa chốt.

**Câu hỏi Clarify:**

1. Field bắt buộc lần này là gì — họ tên, email, team, size áo, dietary, +1?
2. Submit xong: toast tại chỗ, sang trang cảm ơn, hay gửi mail xác nhận (hay cả ba)?
3. Validate client những gì (required, email format)? Copy lỗi đã chốt chưa, hay được dùng text tạm?
4. Lib UI bắt buộc của team là Bootstrap 5 hay design system khác?

**Hỏi ai:** PM / owner sự kiện (field + flow sau submit) · Design (trạng thái lỗi/success) · Buddy/lead (lib + convention form)

**Giả định tạm:** 3 field: họ tên, email công ty, team; cả ba required; email check format; submit xong `alert` tại chỗ, không đổi URL; dùng Bootstrap 5 Card + `form-control` như bài UI Library (Bootstrap 5).

---

## Brief 3 — Card sản phẩm

**Chỗ mơ hồ nhận ra:**

1. Copy/giá “Excel gửi sau” — chưa có nguồn sự thật cho tên, giá, ảnh.
2. Nút mua chưa nói ra cart hay checkout; sold-out / discount im lặng.
3. “Co giãn trên mobile cũng được thì tốt” — chưa phải yêu cầu cứng, dễ đoán layout.

**Câu hỏi Clarify:**

1. Nút **Mua** thêm vào giỏ hay đi thẳng checkout? Hết hàng thì ẩn nút, disable, hay badge “Hết hàng”?
2. Khi Excel chưa có: được dùng placeholder (tên/giá giả) hay block implement?
3. Có trạng thái giảm giá (giá gạch, %) trong scope card này không?
4. Mobile: stack ảnh trên chữ (1 cột) hay giữ hàng ngang thu nhỏ? Ảnh mang thông tin → `alt` lấy tên sản phẩm được không?

**Hỏi ai:** PM / marketing (copy, giá, luồng mua) · Design (sold-out, discount, breakpoint) · Lead (cart vs checkout theo convention shop)

**Giả định tạm:** Card: ảnh + tên + giá + nút **Thêm vào giỏ** (`type="button"`); chưa có discount/sold-out; mobile 1 cột; `alt` = tên sản phẩm; copy placeholder ghi rõ “chờ Excel” trong comment.
