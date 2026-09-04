---
pillar: UI/UX Engineering
stage: S1 - UI Foundations
target_level: J1
type: theory
---

# CSS Layout Foundations — Box Model · Flex · Grid

SoT: [05 · UI/UX Engineering · J1](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## A. Box Model

### 1. Vì sao cần Box Model?

Mọi phần tử trên trang đều là một **hộp chữ nhật**. Designer nói “card rộng 320, padding 16, cách nhau 24” — trình duyệt chỉ hiểu nếu bạn map đúng sang CSS.

Box Model ra đời để trả lời một câu: **ô này chiếm bao nhiêu chỗ, và khoảng trống nằm ở đâu?**

Không nhận biết box model → lệch mockup, “vỡ” layout khi thêm border, hoặc hai người hiểu `width` theo hai cách khác nhau.

---

### 2. Bốn tầng cần nhớ

Từ trong ra ngoài:

| Tầng        | Là gì                           | Thường dùng để                                                 |
| ----------- | ------------------------------- | -------------------------------------------------------------- |
| **content** | Vùng nội dung (chữ, ảnh, child) | `width` / `height` “gắn” vào đây khi `box-sizing: content-box` |
| **padding** | Đệm _bên trong_ border          | Hở giữa nội dung và viền                                       |
| **border**  | Đường viền                      | Nét card, input, divider kiểu khung                            |
| **margin**  | Khoảng _bên ngoài_ border       | Đẩy hộp này cách hộp khác                                      |

```text
┌───────────────────────────────┐
│            Margin             │
│   ┌───────────────────────┐   │
│   │        Border         │   │
│   │  ┌─────────────────┐  │   │
│   │  │     Padding     │  │   │
│   │  │  ┌───────────┐  │  │   │
│   │  │  │  Content  │  │  │   │
│   │  │  └───────────┘  │  │   │
│   │  └─────────────────┘  │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

**Bản chất:**

- `padding` = không khí **trong** hộp (vẫn thuộc nền/background của phần tử).
- `margin` = khoảng **giữa** các hộp (thường trong suốt — nhìn thấy nền phần tử cha).

Nhìn DevTools → tab **Computed** / sơ đồ Box Model: tô màu từng tầng.

---

### 3. Nuance bắt buộc — `box-sizing`

### `content-box` (mặc định CSS thuần)

`width` / `height` chỉ tính **content**.  
Thêm `padding` + `border` → hộp **phình ra** ngoài con số width.

```css
.box {
  box-sizing: content-box; /* mặc định */
  width: 200px;
  padding: 20px;
  border: 2px solid;
}
/* Chiều ngang chiếm chỗ ≈ 200 + 20+20 + 2+2 = 244px */
```

### `border-box` (thực tế UI hay dùng)

`width` / `height` gồm **content + padding + border**.  
Padding/border “ăn” vào trong width — kích thước ngoài ổn định hơn khi soi mockup.

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
}
/* Chiều ngang chiếm chỗ = 200px */
```

**Quy tắc vận hành** hầu hết project set toàn cục:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Khi AI / snippet không ghi `box-sizing`, hãy **nghi** đang tính theo `content-box` — dễ lệch Figma.

#### `padding` vs `margin` — chọn nhanh

| Cần gì                                         | Dùng                 |
| ---------------------------------------------- | -------------------- |
| Đẩy chữ/ảnh ra xa viền **trong** card          | `padding`            |
| Đẩy **hai card** (hoặc hai section) ra xa nhau | `margin`             |
| Nền/click area bao gồm khoảng đệm              | nghiêng về `padding` |
| Chỉ cần khoảng trống, không cần “thuộc” hộp    | `margin`             |

#### Margin collapse (nhận biết, chưa cần master)

Hai `margin` theo chiều dọc của block bình thường có thể **gộp** thành một (lấy giá trị lớn hơn), không cộng đơn giản.  
Triệu chứng: “tôi set `margin-top: 24` mà khoảng cách không như kỳ vọng”.  
J1: biết **có hiện tượng này**; khi lệch, mở DevTools đo lại — đừng chỉ cộng nhẩm.

#### `width: 100%` + padding (bẫy hay gặp)

Con `width: 100%` + `padding` với `content-box` → tràn khỏi cha.  
Với `border-box`, ít bị hơn vì padding nằm trong 100%.  
Nhận biết: overflow ngang “bí ẩn” → kiểm tra `box-sizing` và padding của con.

---

### 4. Use case — card trên mockup

**Bài toán:** Figma ghi card `width 320`, `padding 16`, `gap giữa card 24`, stroke 1px.

| Spec Figma            | CSS (nhận biết)                                   |
| --------------------- | ------------------------------------------------- |
| Width 320             | `width: 320px` + ưu tiên `box-sizing: border-box` |
| Padding 16            | `padding: 16px`                                   |
| Stroke 1              | `border: 1px solid …`                             |
| Cách 24 giữa các card | `margin` hoặc gap của layout (Flex/Grid — #3)     |

**Reflection:** Dev A dùng `content-box`, Dev B dùng `border-box` — cùng `width: 320; padding: 16; border: 1px` nhưng bề ngang thật khác nhau. Review UI “lệch 2–4px” thường bắt đầu từ đây, không phải từ designer sai.

---

### 5. Requirement Thinking · Clarify

Trước khi gán số vào CSS, hỏi:

1. **Con số trên mockup là kích thước ngoài (khung) hay vùng nội dung?** → quyết định `border-box` vs hiểu nhầm `width`.
2. **Khoảng trống này là trong card hay giữa các card?** → `padding` vs `margin`.
3. **Có stroke/border không? Đã tính vào width chưa?**
4. **Spacing theo cặp (hai phía) hay chỉ một phía?** (padding/margin shorthand `16px 24px`…)

Chưa rõ → hỏi designer (hoặc đo bằng inspect trên file export), đừng đoán rồi “tinh chỉnh mắt”.

---

### 6. AI Fluency · Consumer (P1)

AI hay:

- Quên `box-sizing: border-box` rồi set `width` + `padding` → hộp to hơn mockup
- Tráo `margin` / `padding` vì “nhìn giống khoảng trống”
- Dùng `width: 100%` + padding mà không giải thích vì sao tràn

Checklist review CSS AI sinh:

- [ ] Có `box-sizing` (hoặc project đã set global)?
- [ ] `width` còn khớp mockup **sau** khi cộng padding/border?
- [ ] Khoảng trong card vs giữa card đã đúng tầng?
- [ ] DevTools đo được đúng số (không chỉ nhìn ước lượng)?

Gợi ý prompt:

> Use `box-sizing: border-box`. Map Figma spacing to padding (inside) vs margin (between). State the final outer width after border/padding.

---

## B. Flexbox & Grid

### 7. Vì sao cần Flex & Grid?

Box Model trả lời: _một hộp chiếm chỗ thế nào?_  
Flex & Grid trả lời: _nhiều hộp xếp với nhau thế nào?_

Trước đây người ta xếp layout bằng `float`, table, hoặc tính toán cứng — dễ vỡ khi thêm item hoặc đổi độ rộng. Flex/Grid ra đời để **mô tả ý định xếp chỗ** (hàng, cột, khoảng gap) thay vì tinh chỉnh từng `margin` thủ công.

| Công cụ     | Bản chất (J1)                                 | Nhận biết dùng khi                                              |
| ----------- | --------------------------------------------- | --------------------------------------------------------------- |
| **Flexbox** | Xếp theo **một trục** chính (hàng _hoặc_ cột) | Nav ngang, hàng nút, hero (avatar + chữ + action), list xếp dọc |
| **Grid**    | Xếp theo **hai trục** (hàng _và_ cột)         | Lưới card 2 cột, trang chia main + sidebar                      |

**Quy tắc nhận biết nhanh:**

- “Một hàng / một cột các item” → nghiêng **Flex**.
- “Ô theo ma trận hàng×cột” → nghiêng **Grid**.

---

### 8. Flexbox — khái niệm cần nhớ

Bật Flex trên **cha**:

```css
.row {
  display: flex;
  flex-direction: row; /* mặc định: xếp ngang */
  gap: 16px; /* khoảng giữa các con — ưu tiên hơn margin thủ công */
}
```

| Thuộc tính (cha)  | Ý nghĩa ngắn                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `flex-direction`  | `row` (ngang) / `column` (dọc) — trục chính                         |
| `justify-content` | Canh các item **theo trục chính** (đầu, giữa, cuối, chia đều…)      |
| `align-items`     | Canh các item **theo trục vuông góc** (stretch, center, đầu, cuối…) |
| `gap`             | Khoảng cách đều giữa các item                                       |
| `flex-wrap`       | `nowrap` (mặc định) / `wrap` — có cho xuống hàng khi chật không     |

Con thường gặp:

| Thuộc tính (con) | Ý nghĩa ngắn                                                  |
| ---------------- | ------------------------------------------------------------- |
| `flex: 1`        | Con co giãn chiếm phần còn lại (nhận biết: “ô này phình đầy”) |
| `flex-shrink: 0` | Không bị ép nhỏ lại (icon/nút hay cần)                        |

```css
/* Ví dụ: hàng profile — avatar | chữ (phình) | nút */
.profile-hero {
  display: flex;
  align-items: center;
  gap: 16px;
}
.profile-hero .text {
  flex: 1;
}
```

#### Nuance Flex

- **`gap` vs `margin` giữa item:** ưu tiên `gap` trên container — đều, ít case margin collapse.
- **Trục chính ≠ “luôn là ngang”:** đổi `flex-direction: column` thì `justify-content` thành canh **dọc**.
- **`align-items: stretch` (mặc định)** làm con cao bằng hàng — đôi khi nhìn như “height bị gán ngoài ý muốn”. Cần cao theo nội dung → `align-items: flex-start` hoặc `center`.
- **Một dòng bị vỡ / tràn:** kiểm tra `flex-wrap` và `min-width` của con (nội dung dài không cho co).

---

### 9. Grid — khái niệm cần nhớ

Bật Grid trên **cha**, định nghĩa cột/hàng:

```css
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 cột bằng nhau */
  gap: 24px;
}
```

| Thuộc tính (cha)                | Ý nghĩa ngắn                                               |
| ------------------------------- | ---------------------------------------------------------- |
| `grid-template-columns`         | Định nghĩa cột (`1fr 1fr`, `200px 1fr`, `repeat(2, 1fr)`…) |
| `grid-template-rows`            | Định nghĩa hàng (ít dùng lúc mới — để auto cũng được)      |
| `gap`                           | Khoảng giữa các ô                                          |
| `justify-items` / `align-items` | Canh nội dung **trong từng ô** (nhận biết có tồn tại)      |

`1fr` = một phần không gian **còn lại** trong track — nhớ: hai cột `1fr 1fr` ≈ chia đôi.

```css
/* Layout 2 cột: nội dung | sidebar */
.page {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 24px;
}
```

#### Nuance Grid

- **`fr` vs `%`:** `fr` chia phần _còn lại sau khi trừ gap/fixed_; hiểu đúng giúp lưới không “lệch gap”.
- **Số item không đủ một hàng:** ô trống vẫn theo track — bình thường.
- **Đừng nhầm Flex bọc nhiều hàng “giả grid”** với Grid thật khi mockup là ma trận đều (card 2×N).

---

### 10. Flex hay Grid?

| Tình huống UI                                        | Chọn                                        |
| ---------------------------------------------------- | ------------------------------------------- |
| Menu ngang, cụm nút, avatar + text + action một hàng | **Flex**                                    |
| Stack form fields theo chiều dọc                     | **Flex** (`flex-direction: column`) + `gap` |
| Lưới card 2 cột đều                                  | **Grid** (`grid-template-columns: 1fr 1fr`) |
| Trang: cột chính + sidebar cố định                   | **Grid**                                    |
| Chỉ cần “các item cách đều trên một trục”            | **Flex** + `gap`                            |

Có thể **lồng**: Grid ngoài (trang) + Flex trong card.

---

### 11. Use case — list card 1 cột / 2 cột

**Bài toán:** Màn danh sách dự án. Mobile: 1 cột. Desktop hẹp: 2 cột card. Trong mỗi card: tiêu đề + mô tả xếp dọc; hàng action (link + nút) nằm một hàng.

| Vùng                    | Hướng chọn                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lưới card               | `display: grid; grid-template-columns: 1fr` → đổi thành `1fr 1fr` khi đủ rộng (J1: nhận biết 2 trạng thái; media query chi tiết luyện ở exercise) |
| Thân card (chữ xếp dọc) | Flex column + `gap`                                                                                                                               |
| Hàng action trong card  | Flex row + `justify-content: space-between` hoặc `gap`                                                                                            |

**Reflection:** Chỉ dùng `margin-left` tinh chỉnh từng card để “ra 2 cột” sẽ gãy khi thêm card thứ 5–6. Grid/`repeat` giữ ý định “luôn 2 cột” — đúng bài toán layout hơn là cộng margin.

**1 cột (nhận biết):**

```css
.project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
```

**2 cột:**

```css
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```

---

### 12. Requirement Thinking · Clarify (layout)

Trước khi chọn Flex/Grid, hỏi:

1. **Mockup xếp theo một hàng/cột hay theo lưới hàng×cột?**
2. **Khoảng cách giữa item là gap đều hay từng cặp khác nhau?**
3. **Khi hẹp màn hình: xuống hàng (`wrap`), về 1 cột, hay scroll ngang?**
4. **Item nào được phép co/phình (`flex: 1`), item nào giữ kích thước cố định?**

Chưa rõ breakpoint / hành vi co → clarify với designer — đừng hard-code một layout rồi “chỉnh mắt” trên từng độ rộng.

---

### 13. AI Fluency · Consumer (P1)

AI hay:

- Dùng Flex cho mọi thứ, kể cả lưới 2×N rõ ràng (hoặc ngược lại)
- Quên `gap`, bù bằng `margin` lệch từng con
- Nhầm `justify-content` vs `align-items` khi đổi `flex-direction`
- Set `width` cứng cho từng card thay vì `1fr` / `flex` — layout khó bảo trì

Checklist review:

- [ ] Cha đã `display: flex` hoặc `grid` đúng bài toán?
- [ ] Khoảng cách dùng `gap` (trừ khi có lý do đặc biệt)?
- [ ] Trục chính (`flex-direction`) khớp hướng xếp trên mockup?
- [ ] 2 cột dùng Grid tracks (`1fr 1fr` / `repeat`) thay vì float/margin ảo?

Gợi ý prompt:

> Prefer Flex for one-dimensional rows/stacks and Grid for two-column card layouts. Use `gap` between items. Explain flex-direction and why justify vs align was chosen.

---

## C. Exercises

- [Box Model](../exercises/j1-02-box-model/)
- [Flex & Grid](../exercises/j1-02-flex-grid-layout/)
