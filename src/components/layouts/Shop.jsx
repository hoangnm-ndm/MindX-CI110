import React from "react";

const products = [
  { id: 1, name: "Tivi samsung abc", price: 1000 },
  { id: 2, name: "Tivi sony abc", price: 2000 },
  { id: 3, name: "Tivi lg abc", price: 3000 },
];

const Shop = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const handleAddToCart = (product) => {
    console.log(product);
    /**
     * * Thêm sản phẩm vào giỏ hàng và lưu vào local storage
     * * Nếu đã có sản phẩm trong giỏ hàng rồi thì tăng số lượng lên 1.
     * * Nếu chưa có thì thêm sản phẩm vào với số lượng là 1.
     */

    const newCart = cart.find((item) => item.id === product.id)
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(newCart));
    /** * spread */
  };
  return (
    <div>
      <h1>San pham ban chay!</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Gia: {product.price}</p>
            {/* callback */}
            <button onClick={() => handleAddToCart(product)}>
              Them gio hang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
