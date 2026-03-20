import api from ".";

export const registerAuth = async (body) => {
  const { data } = await api.post("/register", body);
  return data;
};

export const loginAuth = async (body) => {
  const { data } = await api.post("/login", body);
  return data;
};
