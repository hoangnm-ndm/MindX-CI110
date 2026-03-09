import React, { useEffect, useState } from "react";

/**
 * * useEffect(callback, dep)
 * * 1. dep = null (không khai báo): callback được gọi mỗi lần component render
 * * 2. dep = [] (array rỗng): callback chạy 1 lần duy nhất ngay sau khi component mounted.
 * * 3. dep = [deps]: callback được gọi lần đầu sau khi component render, và được gọi lại mỗi lần khi deps có sự thay đổi.
 * * 4. dùng useEffect để clean-up
 */

function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=4&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }, [skip]);
  return (
    <div>
      <h1>Danh sach san pham HOT thang 3</h1>
      <div>
        {products.map((item, index) => (
          <div key={item.id} className="border-slate-600 border-2 p-4">
            <h2>{item.title}</h2>
            <p>Gia: {item.price}</p>
            <img src={item.thumbnail} alt="" />
            <button>Mua ngay</button>
          </div>
        ))}
      </div>

      <button>prev</button>
      <button
        className="border-2 px-4 py-2 bg-amber-500"
        onClick={() => {
          setSkip(skip + 4);
        }}
      >
        next
      </button>
    </div>
  );
}

//* Dùng axios thay cho fetch...

export default App;
