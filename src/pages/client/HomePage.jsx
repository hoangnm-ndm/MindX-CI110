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
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false, // Don't refetch when the window regains focus
  });

  if (isPending) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error.message}</p>;
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} width={120} alt="" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
