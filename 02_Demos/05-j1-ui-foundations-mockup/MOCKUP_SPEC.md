# Spec mockup · Profile card (J1)

Nguồn sự thật cho demo — thay cho file Figma. Implement phải **đo được** các số sau.

## Layout

| Token | Giá trị | Ghi chú |
| --- | --- | --- |
| Page background | `#F6F4EF` | |
| Card max-width | `420px` | căn giữa trang |
| Card padding | `24px` | trong card |
| Card radius | `12px` | |
| Card border | `1px solid #E7E5E4` | |
| Gap trong card (các khối) | `16px` | hero / bio / actions |

## Hero

| Token | Giá trị |
| --- | --- |
| Avatar size | `72×72px`, tròn |
| Gap avatar ↔ text | `16px` |
| Tên (display) | `24px`, weight `700`, màu `#1C1917` |
| Role (meta) | `14px`, weight `400`, màu `#57534E` |

## Typography · body

| Token | Giá trị |
| --- | --- |
| Bio | `16px`, line-height `1.5`, `#1C1917` |
| Section label (nếu có) | `14px`, weight `600`, `#57534E` |

## Actions

| Phần tử | Hành vi | UI |
| --- | --- | --- |
| Chỉnh sửa | hành động trên trang | Bootstrap `btn btn-primary`, `type="button"` |
| Về Portal | điều hướng | `<a class="btn btn-outline-secondary">` |

## Nội dung mẫu

- Tên: **Minh Anh**
- Role: Frontend Intern · Line Alpha
- Bio: Đang học UI Foundations (J1): semantics, box model, flex/grid, UI library theo docs — rồi mới tinh chỉnh mắt.
- Avatar: chữ tắt **MA** (ảnh mang thông tin → cần `alt`)
