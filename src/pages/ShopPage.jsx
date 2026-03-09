import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import { toast } from "react-toastify";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const data = await getProducts(page);
      setProducts(data.products);
    })();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleAddToCart = (data) => {
    toast.success(`${data.title} được thêm vào giỏ hàng thành công!`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-orange-500 text-white py-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">
          Click Buy - Top 1 về giá!
        </h1>
      </div>

      {/* Product container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-gray-50">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-sm font-semibold line-clamp-2 min-h-[40px]">
                  {item.title}
                </h2>

                {/* Fake price demo */}
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold text-lg">
                    ${item.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ${(item.price * 1.2).toFixed(0)}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleNextPage}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Xem thêm sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
