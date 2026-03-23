import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebouce";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    if (!debouncedKeyword) return;
    fetch(`https://dummyjson.com/products/search?q=${debouncedKeyword}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, [debouncedKeyword]);

  return (
    <>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search..."
      />

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt="" width={200} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ShopPage;
