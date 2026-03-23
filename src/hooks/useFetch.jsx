import { useEffect, useState } from "react";
import api from "../api/index";
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

export default useFetch;
