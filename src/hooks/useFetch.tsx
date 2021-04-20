import { useEffect, useState } from "react";

interface FetchState {
  isLoading: boolean;
  data: Record<string, any>;
}

export function useFetch(url: string): FetchState {
  const [state, setState] = useState<FetchState>({ isLoading: true, data: {} });

  useEffect(() => {
    let didCancel = false;

    setState({ isLoading: true, data: {} });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (!didCancel) {
          setState({ isLoading: false, data: res });
        }
      });

    return () => {
      didCancel = true;
    };
  }, [url]);

  return state;
}
