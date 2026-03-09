import api from ".";

export const getProducts = async (page) => {
  let limit = 8;
  const { data } = await api.get(
    `/products?limit=${limit}&skip=${(page - 1) * limit}`
  );
  return data;
};
