import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchingData = async () => {
      try {
        const respose = await fetch(url);
        if (!respose.ok) {
          const msg = `Something went wrong! ${respose.status}`;
          throw new Error(msg);
        }
        const resposeData = await respose.json();
        setData(resposeData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, [url]);

  return { data, loading, error };
};
