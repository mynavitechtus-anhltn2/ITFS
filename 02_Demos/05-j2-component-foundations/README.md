# Component Foundations — Filterable list: cắt component, lift state, 1→2 cột, Tab được

## Mục tiêu demo

| Theory     | Demo                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Component  | `ProjectsPage` ghép `SearchBar` · `StarredFilter` · `ProjectList` · `ProjectCard`. Props theo UI (`query`, `onOpen`) — không wrapper chỉ `return children` |
| State      | `query` + `starredOnly` **một** `useState` mỗi thứ, ở cha; input/checkbox **controlled**; list **derive**, không mutate `PROJECTS`                         |
| Responsive | Grid mobile-first `1fr` → `1fr 1fr` từ **640px** (đủ ~2×280px card + gap + padding)                                                                        |
| A11y       | `label`/`for`, `<button type="button">` vs `<a href>`, `:focus-visible` — không `tabindex` dương, không `div` giả nút                                      |

## Kiến trúc

```
                        ProjectsPage
                (sở hữu query, starredOnly)
                derive filtered[] từ PROJECTS
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
     SearchBar      StarredFilter      ProjectList
     value+onChange  checked+onChange  nhận mảng đã lọc
          (controlled)                      │
                                            ▼
                                      ProjectCard × N
                                      title, desc, starred, onOpen
```

- **Cắt theo trách nhiệm, không theo độ dài file.** `SearchBar` không được tự `useState(query)`.
- **Derive, không copy state.** `filtered` tính từ `PROJECTS` + `query` + `starredOnly`. Tick starred không được `PROJECTS.filter` rồi ghi đè mảng gốc.
- **Chưa cần global store.** Filter chỉ sống trên một route; lift lên `ProjectsPage` là cha chung gần nhất. Auth/theme toàn app mới đáng nghĩ Context — không phải search box.
- **CSR Vite** — HTML shell + JS vẽ list. SEO không phải yêu cầu (dashboard nội bộ). Landing public cần HTML đủ lúc đầu thì xem exercise CSR vs SSR, không ép SSR vào demo này.
- **640px không phải “số đẹp”.** Hai card đọc được ~280px + `gap` 16px + padding trang ≈ 608–640. Dưới ngưỡng: 1 cột, toolbar wrap — không `width: 48%` + `min-width: 280px` (overflow ngang).

### Dữ liệu mẫu (`src/data.js`)

Sáu project; starred: changelog, component split, responsive grid. Search khớp **title** (không dấu, substring). Chuỗi gợi ý khi test: `card`, `lab`, `a11y` — **không** gõ `box` (không có title “Box model”).

## Yêu cầu & Cài đặt

### Prerequisites

- Node.js + npm (Vite 5 / React 18)
- Mạng lần `npm install`

### Run Locally

```bash
cd 02_Demos/05-j2-component-foundations
npm install
npm run dev
```

Mở URL Vite in ra (thường [http://localhost:5173](http://localhost:5173)).

Build kiểm tra (không cần khi chỉ xem UI):

```bash
npm run build
npm run preview
```

## Test Scenarios

Mở trang — mặc định **6** card, meta “Hiển thị **6** / 6 dự án”.

| #   | Scenario                                  | Expected                                                                                                       |
| --- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1   | Gõ `card` vào **Tìm dự án**               | Chỉ còn **Profile card**. Xóa hết chữ → lại 6 card. Ô search và list **cùng** một `query`                      |
| 2   | Gõ `lab`                                  | Ba lab: Component split, State lift, Responsive grid                                                           |
| 3   | Tick **Chỉ dự án starred** (không search) | Ba card có ★ (changelog, split, responsive). Bỏ tick → 6                                                       |
| 4   | `lab` **và** tick starred                 | Chỉ **Component split** + **Responsive grid** (State lift không starred)                                       |
| 5   | **Xóa bộ lọc**                            | Query rỗng, checkbox tắt, 6 card                                                                               |
| 6   | Gõ `zzzz-no-match`                        | Empty: “Không có dự án khớp bộ lọc.” — không crash, không list cũ                                              |
| 7   | DevTools ~360px                           | Grid **1 cột**, `scrollWidth` ≈ viewport (không tràn vì `min-width` card)                                      |
| 8   | ≥640px (vd 800px)                         | Grid **2 cột** `1fr 1fr`                                                                                       |
| 9   | Chỉ bàn phím: Tab                         | Search → checkbox → Xóa bộ lọc → từng **Mở** / **Chi tiết** → **Về Portal**. Ring `:focus-visible` khi đi phím |
| 10  | Markup CTA                                | **Mở** = `<button type="button">` (alert). **Chi tiết** / **Về Portal** = `<a href>`                           |

Kịch bản 1 vs 4 là đúng bài **lifting state**: search một mình, starred một mình, rồi **cả hai cùng lúc**.

## Cấu trúc thư mục

```
05-j2-component-foundations/
├── README.md
├── index.html              # shell Vite, #root
├── package.json            # react 18 + vite
├── vite.config.js
└── src/
    ├── main.jsx            # StrictMode + ProjectsPage
    ├── data.js             # PROJECTS — nguồn tĩnh, không phải UI state
    ├── styles.css          # tokens, grid 1→2 cột @640px, :focus-visible
    └── components/
        ├── ProjectsPage.jsx    # container: useState + derive + handler
        ├── SearchBar.jsx       # controlled input + label
        ├── StarredFilter.jsx   # controlled checkbox
        ├── ProjectList.jsx     # map / empty — không sở hữu filter
        └── ProjectCard.jsx     # presentational: title, desc, starred, onOpen
```

## Giới hạn của demo

- Filter không ghi URL (`?q=` / `?starred=1`).
- Không persist sau reload; không auth; `PROJECTS` hard-code, không API.
- **Mở** chỉ `alert` — chưa routing/chi tiết thật.
- CSR: view-source lúc đầu không có list (JS vẽ sau). Đổi sang SSG/SSR khi màn _public + SEO_ — không phải khi thêm một ô search.
- A11y tối thiểu (Tab, label, native control). Chưa live region đầy đủ, chưa reduced-motion, chưa audit axe.
