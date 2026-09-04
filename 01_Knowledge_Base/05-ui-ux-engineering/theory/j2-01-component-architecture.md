---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: theory
---

# Component Architecture — hiểu cách cắt & ghép UI

SoT / Matrix: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao cần component architecture?

Một file “cả trang” chạy được — đến khi:

- Đổi nút ở 3 chỗ → sửa sót 1 chỗ
- Review PR không biết boundary
- AI sinh thêm 200 dòng vào đúng god component

Component ra đời để **chia UI thành đơn vị có tên, có hợp đồng (props), tái sử dụng và lý giải được**.

**Bản chất:** architecture không phải folder tree đẹp — mà là **ranh giới trách nhiệm** bạn giải thích được với buddy.

---

## 2. Ba ý cần hiểu (không chỉ nhận mặt)

### Props = hợp đồng dữ liệu vào

- Cha **truyền**, con **nhận và render** (hoặc gọi callback).
- Props nên đủ để con làm việc **không cần biết** cả trang đang ở màn nào.
- Đặt tên theo _ý nghĩa UI_ (`title`, `onEdit`), không theo nguồn tạm (`data1`, `obj`).

### Composition = ghép phần nhỏ thành màn

```text
ProfilePage
├── ProfileHeader   (avatar + tên + role)
├── ProfileBio
└── ProjectList
    └── ProjectCard × N
```

Hỏi khi cắt: _Khối này có thể kể tên và tái dùng / test / review riêng được không?_

### UI vs logic

|          | UI (presentational)              | Logic / container (mỏng)                |
| -------- | -------------------------------- | --------------------------------------- |
| Việc     | Render từ props                  | Lấy data, gom handler, quyết định props |
| Dấu hiệu | Ít/`không` fetch; dễ kể bằng mắt | Biết “lấy từ đâu”, “khi click thì sao”  |

**Giải thích được** chỗ nào đang trộn — chưa bắt buộc pattern thư mục chuẩn enterprise.

---

## 3. Khi nào cắt / khi nào _đừng_ cắt

| Cắt khi                                      | Chưa cắt khi                                  |
| -------------------------------------------- | --------------------------------------------- |
| Khối lặp (card, row, field)                  | Chỉ dùng một lần và 5–10 dòng                 |
| Cần đặt tên để nói chuyện (“header profile”) | Cắt xong props “xuyên tâm” 8 tầng không lý do |
| Đổi style/behavior độc lập                   | Tách sớm làm file rỗng chỉ `return children`  |

**Nuance:** Nhiều component ≠ architecture tốt. God component và “component confetti” đều là mùi — cần **giải thích lựa chọn**, không đếm file.

**Nhận biết — Atomic Design (khung đặt tên, không phải luật bắt buộc):**  
Một cách phổ biến trong ngành để gọi tên cấp độ component (Brad Frost, "Atomic Design"): **Atoms** (Button, Input — nhỏ nhất, không chia được nữa) → **Molecules** (SearchBar = Input + Button ghép lại) → **Organisms** (ProfileHeader, ProjectList — khối nghiệp vụ hoàn chỉnh) → **Templates/Pages** (bố cục toàn màn). **Không cần** áp khung này thành cấu trúc thư mục cứng — chỉ cần biết đây là một cách nói chung trong team để tránh tranh luận "cắt bao nhiêu là đủ" (ví dụ: `ProjectCard` là organism, `SearchBar` là molecule).

---

## 4. Nuances dễ nhầm

### Props drilling vs “truyền có chủ đích”

Truyền 2–3 tầng vì layout lồng nhau là bình thường.  
Drilling _có vấn đề_ khi props không liên quan đi xuyên qua component trung gian chỉ để “chuyển hộ”. Nhận ra và mô tả — chưa nhảy Redux.

### `children` là composition

```jsx
<Card>
  <Card.Body>…</Card.Body>
</Card>
```

Cha không cần biết hết nội dung bên trong — linh hoạt hơn props `bodyText` cứng. Hiểu _khi nào_ dùng `children` vs props cụ thể.

### Một component một lý do đổi (gần SRP)

Đổi copy button không nên buộc mở lại file đang fetch API + layout grid + modal. Nếu phải → boundary đang sai.

### Presentational không có nghĩa “cấm sự kiện”

Con vẫn nhận `onClick` / `onSubmit` qua props. Logic _quyết định làm gì_ có thể nằm cha — UI vẫn mỏng.

---

## 5. Use case — Profile page (nối demo nền tảng)

một Profile card HTML tĩnh đúng spec.  
cùng UI nhưng **cắt component** và giải thích.

| Khối                        | Component gợi ý  | Vì sao cắt                                        |
| --------------------------- | ---------------- | ------------------------------------------------- |
| Avatar + tên + role         | `ProfileHeader`  | Đơn vị “hero” tái dùng / đổi layout hero độc lập  |
| Đoạn bio                    | `ProfileBio`     | Nội dung chữ tách khỏi actions                    |
| Nút Chỉnh sửa / link Portal | `ProfileActions` | Rõ `button` vs `a`; dễ gắn handler sau (UI State) |
| (Nếu có list)               | `ProjectCard`    | Lặp — classic extract                             |

**Reflection:** PR “sửa màu nút” mà diff 400 dòng god file → review mệt, dễ regress. Cắt đúng làm diff nói đúng ý.

---

## 6. Requirement Thinking · Clarify

Trước khi cắt file:

1. **Khối nào lặp / sẽ tái dùng ở màn khác?**
2. **Props tối thiểu của mỗi khối là gì?** (tránh đoán field)
3. **Handler thuộc cha hay con?** (thường callback lên cha)
4. **Scope:** chỉ refactor cấu trúc hay kèm đổi behavior?

---

## 7. AI Fluency · Consumer

AI hay:

- Nhồi cả trang vào `App.jsx`
- Đặt tên component theo style (`div1`, `WrapperWrapper`)
- Tạo component chỉ để wrap `div` không có trách nhiệm
- Props “data” kiểu `any` / object mơ hồ

Checklist review structure:

- [ ] Mỗi component kể được _một câu_ trách nhiệm?
- [ ] Props có tên theo UI domain?
- [ ] Có confetti (file rỗng) hoặc god file không?
- [ ] Giải thích được hướng data (cha → con) trên giấy?

Gợi ý prompt:

> Refactor this page into React function components. Extract at least ProfileHeader, ProfileBio, ProfileActions. Pass explicit props (no unused wrappers). Add a short comment above each component stating its responsibility in one sentence.

---

## 8. Tóm tắt

- Cắt component theo **ranh giới trách nhiệm** giải thích được, không theo cảm tính hay đếm số file.
- Props = hợp đồng dữ liệu vào, đặt tên theo ý nghĩa UI; `children` dùng khi cha không cần biết chi tiết nội dung con.
- God component và "component confetti" đều là mùi — cả hai đều thiếu một ranh giới rõ.
- Presentational component vẫn nhận được event props (`onClick`…) — "mỏng" không có nghĩa "không tương tác".

## 9. Exercise

- [Component architecture](../exercises/j2-01-component-architecture/)
