import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../api";

const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

const HomePage = () => {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">{error.message}</div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-[#061269] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nền tảng sản phẩm chất lượng
          </h1>
          <p className="text-lg opacity-80 mb-6">
            Khám phá những sản phẩm tốt nhất với giá hợp lý
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
            Mua ngay
          </button>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#061269] mb-8">
            Sản phẩm nổi bật
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-40 object-cover rounded-lg mb-4"
                />

                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <p className="text-[#061269] font-bold text-lg mb-3">
                    ${product.price}
                  </p>

                  <button className="w-full bg-[#061269] text-white py-2 rounded-lg hover:opacity-90 transition">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#061269] text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Bạn đã sẵn sàng mua hàng?
        </h2>
        <p className="mb-6 opacity-80">
          Hàng ngàn khách hàng đã tin tưởng chúng tôi
        </p>
        <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition">
          Bắt đầu ngay
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © 2026 Your Brand. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
