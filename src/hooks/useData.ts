import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {  
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
  
    // The correct way to setLoading(false) would be inside the .final method,
    // but this does not work with the strict mode turned on, so we do it inside
    // the callback
    useEffect(() => {
      const controller = new AbortController();
      
      setLoading(true);
      // for the instance of CanceltedError bit refer to 10 - creating a custom Hook for Fetching Games 04:30
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { data, error, isLoading };
  };

export default useData;