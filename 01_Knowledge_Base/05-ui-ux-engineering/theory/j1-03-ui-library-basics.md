---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# UI Library Basics — dùng component theo docs

SoT: [05 · UI/UX Engineering · J1](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao cần UI library?

Tự viết mọi nút, input, card từ CSS thuần **làm được** — nhưng team trả giá bằng:

- Spacing / màu / trạng thái hover-focus lệch giữa các màn
- A11y cơ bản (focus ring, label) bị quên
- Mỗi người “phát minh” lại một kiểu button

UI library ra đời để **chuẩn hóa khối UI lặp lại** theo contract có docs: bạn ghép đúng API, không chế lại từ zero mỗi lần.

**Bản chất J1:** không phải thuộc hết library — mà **biết mở docs, copy đúng pattern, và nhận ra khi mình (hoặc AI) đang dùng sai API**.

---

## 2. Stack đã chọn cho J1

|         |                                                                                                 |
| ------- | ----------------------------------------------------------------------------------------------- |
| Library | **Bootstrap 5**                                                                                 |
| Vì sao  | Docs rõ, có sẵn Button / Form / Card; chạy HTML tĩnh qua CDN — khớp exercise `before` / `index` |
| Docs    | [getbootstrap.com/docs/5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)    |

Trên project React/Vue bạn sẽ gặp `<Button variant="…">` thay vì class `btn btn-primary` — **cùng kỹ năng:** đọc props/slots trong docs, không đoán.

---

## 3. Ba component tối thiểu cần gọi đúng

### Button

- Docs: _Components → Buttons_
- Nhận biết: `btn` + variant (`btn-primary`, `btn-outline-secondary`…)
- Vẫn giữ semantics: hành động → `<button type="button">` (hoặc `submit` trong form); điều hướng → `<a class="btn …">`

```html
<button type="button" class="btn btn-primary">Lưu</button>
<a class="btn btn-outline-secondary" href="#back">Quay lại</a>
```

### Input (Form control)

- Docs: _Forms → Form control_
- Nhận biết: `form-control` trên `<input>` / `<textarea>`; **luôn** gắn `<label>` (hoặc `aria-label`)
- `form-label` + `form-control` là cặp docs chuẩn — đừng chỉ thả `<input>` trần

```html
<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input
    type="email"
    class="form-control"
    id="email"
    placeholder="you@company.com"
  />
</div>
```

### Card

- Docs: _Components → Card_
- Nhận biết cấu trúc: `card` → `card-body` → `card-title` / `card-text` (+ optional `card-header` / footer)

```html
<div class="card">
  <div class="card-body">
    <h2 class="card-title h5">Profile</h2>
    <p class="card-text">…</p>
    <button type="button" class="btn btn-primary">Chỉnh sửa</button>
  </div>
</div>
```

**Ghi note prop/class quan trọng:** mỗi lần dùng component mới, ghi 3–5 token từ docs (`btn-primary`, `form-control`, `card-body`…) vào comment hoặc note cá nhân — lần sau khỏi đoán.

---

## 4. Nuances — chỗ hay sai khi “dùng lib”

### Docs-first vs copy AI / Stack Overflow

Thứ tự đúng: **Docs library đang dùng trong project** → rồi mới tham khảo chỗ khác.  
AI hay trộn class Bootstrap 4 với 5, hoặc bịa prop MUI không tồn tại.

### Đừng đánh võ CSS đè component

Override lung tung (`!important`, height cố định phá padding lib) = phá contract.  
J1: ưu tiên **variant có sẵn** trên docs; customize sâu là chuyện level sau / design system.

### Class utility ≠ tự chế design system

Bootstrap có `mb-3`, `d-flex`, `gap-2`… Dùng được, nhưng J1 hãy **nhận biết** chúng là utility của lib — không nhầm với tự viết layout từ đầu khi team đã thống nhất dùng lib.

### Button của lib vẫn phải đúng `type`

`class="btn"` không thay `type="button"`. Trong form, thiếu `type` → vẫn có thể submit nhầm (như đã học ở semantics).

### Label và Input

Lib không cứu bạn nếu quên `label`/`for`/`id`. Component đẹp nhưng form vô nghĩa với a11y.

---

## 5. Use case — form login nhỏ trong Card

**Bài toán:** Màn login nội bộ: card giữa trang, email + password, nút “Đăng nhập”, link “Quên mật khẩu”.

| Phần             | Hướng Bootstrap (nhận biết)                       |
| ---------------- | ------------------------------------------------- |
| Khung            | `card` + `card-body`                              |
| Email / password | `form-label` + `form-control`                     |
| Đăng nhập        | `button.btn.btn-primary` + `type="submit"`        |
| Quên mật khẩu    | `a` (điều hướng), có thể `btn btn-link` theo docs |

**Reflection:** Tự style `div.box` + `input` border tay trong 1 giờ “trông cũng được”, nhưng sang màn thứ 5 spacing lệch, focus ring khác nhau. Gọi đúng Card/Button/Input từ đầu = cùng một “giọng” UI và đúng hướng SoT J1 (_UI library theo docs_).

---

## 6. Requirement Thinking · Clarify

Trước khi code:

1. **Project đang dùng lib nào / version nào?** (đọc README hoặc `package.json` — exercise này cố định Bootstrap 5)
2. **Mockup map sang component có sẵn nào?** (Button variant? Input type? Card hay chỉ Section?)
3. **Nút nào submit form, nút nào chỉ hành động, link nào đổi trang?**
4. **Copy / placeholder / validation message** đã có chưa — hay còn mơ hồ?

Chưa biết lib của repo → hỏi lead **trước**, đừng vừa code vừa đổi API.

---

## 7. AI Fluency · Consumer (P1)

AI hay:

- Sinh class/prop **không có trong docs** version bạn đang dùng
- Quên `label` / `type="button"`
- Trộn hai library trong một file
- Đụng `style=""` dài để “fix” thay vì dùng API có sẵn

Checklist review output AI:

- [ ] Class/prop có trong docs đúng version?
- [ ] Đủ ≥3 component đúng bài (Button, Input, Card…)?
- [ ] Semantics (`button`/`a`/`label`) vẫn đúng sau khi gắn class lib?
- [ ] Có bị AI bịa utility / variant không tồn tại không?

Gợi ý prompt:

> Use Bootstrap 5 only. Build with official Card, form-control + form-label, and btn classes from the docs. Keep semantic HTML (label/for, button type). Do not invent class names.

---

## 8. Exercise

- [UI library basics](../exercises/j1-03-ui-library-basics/)
