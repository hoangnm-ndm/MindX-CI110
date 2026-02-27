function useState(initialValue) {
  //* logic
  let state = initialValue;

  function setState(state) {
    // * Logic để thay đổi state
  }

  //* Bật một cơ chế để re-render khi biết state thay đổi
  return [state, setState];
}

const [count, setCount] = useState(0);
