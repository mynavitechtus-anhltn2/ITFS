# UI Foundations Mockup — Profile card đúng spec

Demo chạy được thật: một card profile (avatar, tên, role, bio, hai CTA) implement đúng [MOCKUP_SPEC](./MOCKUP_SPEC.md).

## Mục tiêu demo

**Nhận biết** bốn thứ trên cùng một card:

1. **Semantics** — `main` / `article` / `h1`; ảnh mang tin có `alt`; hành động vs điều hướng đúng thẻ.
2. **Box model** — `border-box`; padding **trong** card, `gap` **giữa** khối; `width` không phình vì padding.
3. **Flex** — hero (avatar + chữ) và hàng action xếp một trục + `gap`, không `margin` thủ công từng con.
4. **UI library theo docs** — Bootstrap 5 `btn btn-primary` / `btn-outline-secondary`; số Figma không khớp utility thì **token CSS**, không nhét `p-3` lệch spec.

## Kiến trúc

```
MOCKUP_SPEC.md    index.html
(số đo = SoT)     │
        │         ├── semantic skeleton (main / article / header)
        │         ├── CSS custom properties = copy 1:1 từ spec
        │         └── Bootstrap 5 CDN — chỉ Button (Card tự style cho khớp 24px / 420px)
        ▼
DevTools Computed / Box Model  ── đối chiếu ngược spec
```

## Yêu cầu & Cài đặt

### Prerequisites

- Trình duyệt hiện đại (Chrome/Firefox/Safari)
- Mạng lần đầu (Bootstrap 5.3 CSS CDN)
- DevTools — tab Elements → Computed / sơ đồ Box Model

Không cần Node, không cần build.

### Run Locally

Từ root repo:

```bash
open 02_Demos/05-j1-ui-foundations-mockup/index.html
```

Hoặc kéo `index.html` vào trình duyệt, hoặc Live Server trong editor. Để [MOCKUP_SPEC.md](./MOCKUP_SPEC.md) cạnh cửa sổ DevTools.

## Test Scenarios

Mở card → DevTools → chọn `.profile-card` / `h1` / `.role` / `img`.

| #   | Scenario                                               | Expected                                                                                                                                 |
| --- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Viewport rộng hơn card, đo `.profile-card`             | `max-width` ≈ **420px**, căn giữa; `padding` **24px**; `border` **1px solid** `#E7E5E4` (`rgb(231, 229, 228)`); `border-radius` **12px** |
| 2   | Computed `gap` trên `.profile-card` và `.profile-hero` | **16px** — khoảng _giữa_ khối là `gap`, không phải padding giả margin                                                                    |
| 3   | `h1` / `.role` / `.profile-bio`                        | Tên **24px / 700**; role **14px** màu `#57534E`; bio **16px**, line-height **24px** (1.5 × 16)                                           |
| 4   | Avatar                                                 | **72×72**, `border-radius: 50%`; `alt` không rỗng (ảnh chữ **MA** mang thông tin)                                                        |
| 5   | Markup CTA                                             | **Chỉnh sửa** = `<button type="button">`; **Về Portal** = `<a href>` — không `div` + `onclick`                                           |
| 6   | Chỉ bàn phím: Tab                                      | Tới nút rồi tới link; `:focus-visible` còn ring (không `outline: none` toàn cục)                                                         |

So với exercise Semantic Page / UI Library: demo này **không** phải sửa div soup hay gắn Card Bootstrap cho login — trọng tâm là **số spec còn đo được sau khi gắn lib**.

## Cấu trúc thư mục

```
05-j1-ui-foundations-mockup/
├── README.md          # file này
├── MOCKUP_SPEC.md     # SoT — mọi px/màu/hành vi CTA
└── index.html         # markup + token CSS + Bootstrap Button CDN
```

## Giới hạn của demo

- Một layout, không breakpoint.
- Nút **Chỉnh sửa** chỉ `alert`/no-op — chưa có form/state.
- Bootstrap chỉ dùng cho Button; Card/spacing là CSS token vì spec 24/420 không map 1:1 utility.
- CDN: offline thì style `btn` mất; layout/spec token trong `<style>` vẫn còn.
