---
pillar: UI/UX Engineering
stage: S2 - Component Foundations
target_level: J2
type: exercise
---

# Notes · Vì sao cắt component

## Bản đồ component (sau khi cắt)

| Component        | Trách nhiệm                                  | Props chính                              |
| ---------------- | -------------------------------------------- | ---------------------------------------- |
| `ProfileHeader`  | Render identity: avatar + tên + role         | `name`, `role`, `avatarSrc`, `avatarAlt` |
| `ProfileBio`     | Render đoạn mô tả hồ sơ                      | `children` (composition)                 |
| `ProfileActions` | Hàng CTA: hành động sửa vs điều hướng Portal | `onEdit`, `portalHref`                   |
| `ProjectCard`    | Một item dự án đọc riêng vẫn hiểu            | `title`, `desc`                          |
| `ProfilePage`    | Container: giữ list + handler, ghép các khối | —                                        |

## Vì sao không giữ god `ProfilePage`?

God file trộn identity, copy bio, CTA và list lặp. Đổi nút “Chỉnh sửa” hoặc style card phải soi cả trang; không đặt tên được “header profile” khi review. Cắt theo trách nhiệm để mỗi khối có hợp đồng props, tái dùng / test / nói chuyện được — không phải để file ngắn hơn.

## Có chỗ nào _cố ý không cắt_? Vì sao?

Không tách `SidebarWrapper`-kiểu chỉ `return children`. Không tách `<main>` / `<article className="card">` thành component rỗng. `ProfilePage` giữ list `projects` và `handleEdit` vì đó là logic màn, chưa phải UI lặp.

## Hướng dữ liệu (cha → con)

```text
ProfilePage                    ← giữ projects[], handleEdit
├── ProfileHeader              ← name, role, avatar*
├── ProfileBio                 ← children (chuỗi bio)
├── ProfileActions             ← onEdit, portalHref
└── ProjectCard × N            ← title, desc (map từ projects)
```

List ở cha; card chỉ render props — không fetch, không biết cả trang đang ở màn nào.

## Clarify

1. Avatar sau này có đổi URL theo user API không — khi đó `avatarSrc` vẫn đủ, chưa cần context.
2. “Chỉnh sửa” mở modal hay route — `onEdit` giữ callback; state modal = bài sau.
