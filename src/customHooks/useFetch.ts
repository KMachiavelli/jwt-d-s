import { useEffect, useState } from "react";

const useFetch = async (url: string, options: any, body?: any) => {
  const [data, setData] = useState({} as any);
  const resp = await fetch(url + options.params, options);
  const respData = await resp.json();

  useEffect(() => {
    setData(respData);
  }, [respData]);

  return data as any;
};

export default useFetch;
