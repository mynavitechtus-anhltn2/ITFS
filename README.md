# ITFS Docs

Website tài liệu Self-learning **ITFS (Intentional Thinking Full-Stack)**.

## Package manager

Chỉ dùng **npm**.

- Không dùng `yarn` / không commit `yarn.lock`
- Khi đổi dependency: cập nhật `package.json` + `package-lock.json`

## Yêu cầu

- Node.js `>=20`
- npm
- React pin `18.2.0` (tương thích Docusaurus 3.x)

## Cài đặt lần đầu

```bash
npm install
```

Nếu `package-lock.json` đã ổn định:

```bash
npm ci
```

## Chạy local

```bash
npm start
# hoặc
npm run dev
```

Mở docs: http://localhost:3000/

## Lệnh chính

```bash
npm start          # dev server
npm run build      # build production → thư mục build/
npm run serve      # serve bản đã build
npm run clear      # xóa cache .docusaurus
npm run typecheck  # kiểm tra TypeScript
```
