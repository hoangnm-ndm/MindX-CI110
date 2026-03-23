import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  // * khởi tạo douncedValue với value (tức state) nhận đầu vào
  const [debouncedValue, setDebouncedValue] = useState(value);

  // * Mục tiêu của useEffect sẽ nắm bắt trạng thái thay đổi hook này từ value đầu vào
  // * và thực hiện trả ra kết quả debouncedValue bằng với value sau khoảng thời gian là delay
  useEffect(() => {
    // * Thiết lập một timer để cập nhật giá trị debounce sau khoảng delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // * Dọn dẹp timer nếu giá trị hoặc delay thay đổi
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
