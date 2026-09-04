# Brief "tưởng như đủ rõ" — trước khi Clarify chủ động

---

## Brief 1 — "Tách ProjectCard dùng chung Admin/User"

Hiện `ProjectCard` chỉ nằm trong trang User. PM muốn dùng lại y chang cho trang Admin, "cho đỡ phải viết lại UI". Responsive theo chuẩn hiện tại của app.

_(Không nói Admin có cần thêm action gì không. Không nói ai giữ state `starred`/filter. Không nói breakpoint cụ thể — chỉ nói "theo chuẩn hiện tại".)_

---

## Brief 2 — "Thêm lọc theo tag cho ProjectList"

Người dùng muốn lọc danh sách project theo tag (vd: "Frontend", "Backend"). Yêu cầu: chọn tag thì list cập nhật ngay, mượt trên mobile.

_(Không nói lọc có cần giữ lại khi rời trang rồi quay lại không. Không nói control chọn tag là dropdown/chip/checkbox. Không nói có cần Tab/keyboard chọn tag được không.)_

---

## Brief 3 — "Trang landing giới thiệu sản phẩm mới"

Marketing cần 1 trang landing giới thiệu sản phẩm, nội dung tĩnh (không có tương tác phức tạp), cần lên Google tốt. Deadline gấp, làm nhanh bằng stack hiện tại (SPA CSR).

_(Không ai hỏi CSR có phù hợp SEO không. Brief tự mâu thuẫn: "cần lên Google tốt" nhưng ngầm định "dùng CSR hiện tại" — đây là khoảng trống lớn nhất, dễ bị bỏ qua vì brief nghe rất rõ ràng, gấp gáp.)_
