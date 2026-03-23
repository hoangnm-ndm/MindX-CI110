/**
 * * Công việc này sẽ diễn ra ở nhiều component khác nhau, nên ta sẽ gom nó thành 1 custom hook để tái sử dụng.
 * * Xác định input, output của custom hook:
 * *   - Input: key, initialValue.
 * *   - Output: value, setValue.
 */

const useStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // * initial state chỉ được tính 1 lần duy nhất khi state được tạo.

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
