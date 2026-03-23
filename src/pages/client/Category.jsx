import React from "react";

const Category = () => {
  const { data: categories, loading, error } = useFetch("/categories");

  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return <div>{JSON.stringify(categories)}</div>;
};

export default Category;
