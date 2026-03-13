# Day 03: Cài đặt và làm quen với ReactJS

- Mở terminal/cmd và chạy lệnh sau để tạo một dự án ReactJS mới:
  `npm create vite`

- Đặt tên project: `reactjs-app`, nếu không muốn tạo dự án mới mà tạo ngay trong vị trí folder hiện tại thì gõ `.`
- Chọn framework là `ReactJS`
- Chọn `JavaScript+SWC`

- Đứng tại thư mục gốc của dự án, mở terminal/cmd:
  - `npm i` - cài đặt các package cần thiết
  - `npm run dev` - khởi chạy app chế độ development.
- Mở trình duyệt và truy cập `http://localhost:5173/` để xem kết quả.

## Thực hành tạo các component Header, Footer, Main và sử dụng chúng trong App.js

**Trọng tâm buổi 3:**

- JSX?
- Component là gì?
- Props là gì? Cách dùng props để truyền dữ liệu giữa các component?

## Day 08

4 bước để thiết lập và sử dụng context trong React

- **Bước 1:** Khai báo Context sử dụng `createContext()`
- **Bước 2:** Tạo Provider component để cung cấp giá trị cho context.
- **Bước 3:** Mang Provider component bọc các component con mà bạn muốn chia sẻ giá trị context.
- **Bước 4:** Sử dụng `useContext(ContextName)` hook để truy cập giá trị từ context trong các component con.

**Các trường hợp nên sử dụng useContext:**

- Sử dụng set Theme,
- Sử dụng set Language,
- Sử dụng share và quản lý giỏ hàng.
- Sử dụng share và quản lý thông tin người dùng, authentication.
