import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchingData = async () => {
      const respose = await fetch(url);
      const resposeData = await respose.json();
      setData(resposeData);
    };
    fetchingData();
  }, []);

  return data;
};
