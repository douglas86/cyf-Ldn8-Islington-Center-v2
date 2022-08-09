import { useEffect, useState } from "react";

const baseURL = process.env.REACT_APP_URL;

const useFetch = (url, options = null) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(baseURL + url, options)
      .then(async (res) => await res.json())
      .then((data) => setData(data));
  }, [url, options]);
  return data;
};

export default useFetch;
