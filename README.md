# Ghi chú buổi học

## Day 03

1. WHY: Hiểu về tư duy và lý do tại sao phải dùng thư viện thay cho code thuần?
2. WHAT: Các khái niệm chính và cách mà React làm cho mọi thứ trở lên dễ, nhanh.
3. HOW: Cài đặt và sử dụng cơ bản
   - Component, JSX.
   - Cấu trúc thư mục và ý nghĩa của từng file.
   - Cách style trong React
   - Props

## Day 05

(15 phút)

- Cài đặt tailwindcss cho vite/react
- Cài đặt antd

Sử dụng các component phổ biến để xây dựng giao diện bài tập todo list:
https://stitch.withgoogle.com/projects/8683515590630104202

## Day 6

- Cài đặt json-server@0.17.4, json-server-auth

`npm install json-server@0.17.4 json-server-auth concurrently`

- Cập nhật `package.json`

```json
"scripts": {
  "dev": "concurrently \"json-server --watch db.json -p 3000 -m ./node_modules/json-server-auth\" \"vite\"",
},
```

- Chạy `npm run dev` để khởi động cả json-server và vite cùng lúc

- Vào `db.json` thêm dữ liệu mẫu

```json
{
  "users": []
}
```

- Cài đặt và cấu hình sử dụng axios thay cho fetch
  `npm install axios`

- Cài thêm react-hook-form để quản lý form dễ dàng hơn
  `npm install react-hook-form`
- Có thể sử dụng thêm zod và @hookform/resolvers để validate form tốt hơn
  `npm install zod @hookform/resolvers`

## Day 7

- Cài axios:
  `npm install axios`
