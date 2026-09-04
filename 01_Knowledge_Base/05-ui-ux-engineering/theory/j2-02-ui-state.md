---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: theory
---

# UI State — local, controlled, lifting

SoT / Matrix: [05 · UI/UX Engineering](../../../00_ITFS_Foundation/05-ui-ux-engineering.md)

---

## 1. Vì sao cần nghĩ về state?

UI tĩnh chỉ render. UI thật **đổi theo thời gian**: gõ search, tick filter, mở/đóng panel.

State = **dữ liệu làm UI đổi** mà chưa (hoặc không) nằm cố định trong props từ server.

Đặt state sai chỗ →:

- Hai ô “lệch nhau” (gõ search nhưng list không đổi)
- Prop drilling + copy state trùng
- Vội kéo global store cho một form nhỏ

**Bản chất:** không phải thuộc API hook — mà **chỉ được “ai sở hữu sự thật”** (single source of truth trên cây component).

---

## 2. Ba khái niệm cần hiểu

### Local state

State chỉ một component cần → để **tại đó** (ví dụ: mở/đóng tooltip nội bộ).

### Controlled input

Giá trị input đến từ state + `onChange` cập nhật state — React (cha/con) là nguồn sự thật, không phải DOM tự giữ.

```jsx
<input value={query} onChange={(e) => setQuery(e.target.value)} />
```

Uncontrolled (`defaultValue` + ref) có chỗ dùng — ưu tiên **hiểu controlled** vì dễ đồng bộ list/filter.

### Lifting state up

Khi **hai anh em** cần cùng một dữ liệu (ô search + danh sách lọc):

1. Đưa state lên **cha chung gần nhất**
2. Truyền xuống bằng props: `value` / `onChange` / dữ liệu đã lọc

```text
ProjectsPage          ← sở hữu query, starredOnly
├── SearchBar         ← nhận query + onQueryChange (controlled)
├── FilterToggle      ← nhận starredOnly + onToggle
└── ProjectList       ← nhận projects đã lọc (hoặc filter tại cha rồi truyền list)
```

---

## 3. Khi nào _chưa_ cần global store?

| Để local / lift trên trang | Cân nhắc global (sau này)                  |
| -------------------------- | ------------------------------------------ |
| Search/filter một màn      | Auth user dùng khắp app                    |
| Mở modal của đúng page     | Theme/locale toàn product                  |
| Draft form chưa submit     | Cache server state phức tạp (React Query…) |

**Nuance:** “Nhiều `useState`” không phải mùi nếu chúng thuộc đúng trang. Mùi là **trùng sự thật** (hai `useState` cho cùng một query) hoặc lift quá cao không cần thiết (lên `App` khi chỉ một route dùng).

### Khung quyết định — dữ liệu này nên "sống" ở đâu?

```text
Dữ liệu này có cần giữ lại sau khi refresh trang / chia sẻ qua link?
│
├── CÓ (filter muốn share link, tab đang mở) → URL state (query string) — nhận biết, chưa bắt buộc code
│
└── KHÔNG
    │
    ├── Nhiều component không-liên-quan-cây-cha-con cùng cần? → cân nhắc Context/store (hiếm ở giai đoạn này)
    │
    ├── Hai anh em cùng cây cần chung? → Lift lên cha chung gần nhất (mục 2)
    │
    └── Chỉ một component cần, không ai khác quan tâm? → Local state (useState tại đó)
```

Đa số bài toán UI giai đoạn này (search, filter, toggle) rơi vào 2 nhánh cuối — **không cần** đến Context/store ngay.

---

## 4. Nuances dễ nhầm

### Props là input “từ ngoài”; state là “nhớ nội bộ”

Nhận `title` từ cha → props.  
Tự nhớ `isOpen` → state.  
Đừng copy props vào state rồi quên sync — trừ pattern có chủ đích (draft).

### Lọc list: lọc ở đâu?

- Giữ `projects` gốc + `query` ở cha → `filtered = useMemo/filter` khi render: một nguồn sự thật.
- Mutate mảng gốc khi gõ search → mất data, khó reset.

### Handler thuộc nơi có state

`setQuery` sống ở cha → `onQueryChange` truyền xuống. Con không tự `useState` một bản `query` thứ hai.

### Derived state

`filteredProjects` tính từ `projects + query` → **không** cần `useState` riêng trừ khi đo performance có chủ đích (ưu tiên derive).

---

## 5. Use case — Filterable project list

**Bài toán:** Ô tìm theo tên + checkbox “Chỉ dự án starred”. List card cập nhật theo cả hai.

| State                            | Đặt ở                  | Vì sao                     |
| -------------------------------- | ---------------------- | -------------------------- |
| `query`                          | `ProjectsPage`         | SearchBar và List cùng cần |
| `starredOnly`                    | `ProjectsPage`         | Cùng lý do                 |
| `projects`                       | Cha (const hoặc state) | Nguồn danh sách            |
| `isOpen` trên một tip trong card | Card                   | Anh em không cần biết      |

**Reflection:** Dev để `query` trong `SearchBar` rồi cố `window` event hoặc duplicate list state → bug “gõ rồi không lọc”. Lift một lần rõ hơn thêm library.

---

## 6. Requirement Thinking · Clarify

1. **Những tương tác nào làm UI đổi?** (gõ, tick, submit…)
2. **Khối nào cần đọc chung một giá trị?** → ứng viên lift
3. **Sau refresh có giữ filter không?** (URL/query — scope? có thể ghi nhận, chưa bắt buộc implement)
4. **Danh sách từ API hay mock cố định?** (ảnh hưởng “source” vs UI state)

---

## 7. AI Fluency · Consumer (P3)

AI hay:

- Thêm Redux cho một input
- Controlled thiếu `value` hoặc thiếu `onChange`
- `useState` trùng trên cha và con
- Mutate `projects.push` trong render/handler bất cẩn

Checklist:

- [ ] Mỗi mảnh UI state có **một** chủ?
- [ ] Input filter có `value` + `onChange` khớp?
- [ ] List nhận dữ liệu đã thống nhất từ cha?
- [ ] Có kéo global store không cần thiết không?

Gợi ý prompt:

> Build a filterable list with React useState. Lift query and starredOnly to the page component. SearchBar is controlled. Do not use Redux. Derive filtered list from projects + query + starredOnly.

---

## 8. Tóm tắt

- State = dữ liệu làm UI đổi mà bạn phải xác định **ai sở hữu sự thật**, không phải chuyện thuộc API hook nào.
- Hai anh em cùng cần một giá trị → lift lên cha chung gần nhất; đừng để mỗi bên tự `useState` một bản.
- Derived data (`filtered`, `total`…) tính lại khi render (hoặc `useMemo`) — không cần `useState` riêng.
- Global store chỉ cần khi dữ liệu vượt khỏi một trang/route; search-filter một màn gần như luôn ở local/lift.

## 9. Exercise:

- [UI state](../exercises/j2-02-ui-state/)
