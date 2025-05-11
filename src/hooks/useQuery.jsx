import { useEffect, useState } from "react";

export default function useQuery({ fetchFn, args = [], dependencies = [] }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("PENDING");

  const fetchData = (firstFetch) => {
    firstFetch && setFetchStatus("LOADING");
    fetchFn(...args)
      .then((result) => {
        setFetchStatus("SUCCESS");
        setData(result);
      })
      .catch((err) => {
        setFetchStatus("FAILURE");
        setError(err);
      });
  };
  useEffect(() => {
    fetchData(true);
  }, dependencies);

  return {
    reset: fetchData,
    data,
    error,
    isSuccess: fetchStatus === "SUCCESS",
    isFail: fetchStatus === "FAILURE",
    isLoading: fetchStatus === "LOADING",
  };
}
