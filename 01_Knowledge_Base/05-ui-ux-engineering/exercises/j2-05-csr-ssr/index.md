---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# CSR vs SSR — bài làm

Theory: [j2-05-csr-ssr.md](../../theory/j2-05-csr-ssr.md) · Brief: [`./before.md`](./before.md)

Với mỗi màn: chọn **CSR** / **SSR** / **SSG** (hoặc hybrid ngắn). Không có đáp án thần thánh — chấm ở chỗ **lý do nhất quán**.

---

## Màn A — Careers landing

- **Lựa chọn:** **SSG** (hoặc SSR) cho hero + JD; form “Ứng tuyển” hydrate CSR
- **Vì sao (SEO / nội dung / tương tác):**
  1. Public + Google “viec lam frontend” + share LinkedIn cần **HTML đủ title/mô tả lúc đầu** — CSR shell trống làm OG/bot yếu.
  2. Nội dung JD gần tĩnh, đổi theo đợt tuyển → SSG (build) rẻ hơn SSR mỗi request; form nộp CV là tương tác sau load, không cần HTML form hoàn chỉnh cho SEO.
- **Clarify / giả định tạm:** JD không cá nhân hóa theo user; form POST tới API. Nếu JD theo location realtime thì nghiêng SSR/ISR thay SSG thuần.

---

## Màn B — Dashboard task (auth)

- **Lựa chọn:** **CSR** (SPA sau login)
- **Vì sao:**
  1. Kanban kéo thả, filter assignee, realtime — trọng tâm là **JS vẽ sau**, session + permission; bot Google không index.
  2. Ép SSR mỗi lần kéo card = complexity server/cache không đổi SEO (vốn không cần). HTML đủ nội dung lúc đầu không phải mục tiêu màn này.
- **Clarify / giả định tạm:** Auth cookie/session sẵn; không yêu cầu deep-link SEO cho từng card. TTFB shell nhanh + API — chấp nhận time-to-content chậm hơn landing.

---

## Màn C — Blog Insights

- **Lựa chọn:** **SSG**
- **Vì sao:**
  1. Bài dài, URL `/blog/slug` cố định, SEO + đọc ngay trên mobile mạng chậm → HTML đủ nội dung lúc build, CDN tĩnh.
  2. Like/comment “tải sau” = đảo CSR nhỏ trên trang SSG (không đổi mô hình trang).
- **Clarify / giả định tạm:** Ít sửa bài sau publish. Nếu sửa liên tục trong ngày có thể ISR — vẫn không phải CSR-first.

---

## Màn D — Admin feature flag

- **Lựa chọn:** **CSR** — nhúng trong portal SPA sẵn có
- **Vì sao:**
  1. 5–10 power user, sau login, bảng + form bật/tắt: tương tác liên tục, **không SEO**.
  2. SSR riêng cho tool nội bộ tăng ops (server render + hydrate) trong khi brief đã “embed SPA”. Trade-off: bỏ SEO/TTFB nội dung — đổi lấy đơn giản và khớp kiến trúc hiện tại.
- **Clarify / giả định tạm:** Flag không cần share link public; audit log nếu có thì API, không cần HTML first paint cho Google.

---

## Tổng kết

Không mặc định SSR cho mọi màn: **SSR/SSG khi bot hoặc người đọc cần HTML đủ nội dung lúc đầu**; **CSR khi màn sau auth, giàu tương tác, SEO không phải yêu cầu** — dashboard/admin trả giá complexity SSR mà không đổi kết quả.
