import React, { useEffect, useState } from "react";
import api from "../../api";

// * Custome hook useFetch:
// * input: url.
// * output: { data, loading, error }.

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

const HomePage = () => {
  const { data: products, loading, error } = useFetch("/products");

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
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
