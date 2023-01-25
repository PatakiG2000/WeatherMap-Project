/* import { useEffect } from "react";

// zustand - similar to Redux but simpler (one big store)
// jotai - similar to useState (many small separate "atoms")
export function useQuery(url, { onCompleted, onError }) {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(onCompleted)
      .catch(onError);
  }, [url, onCompleted, onError]);
}
 */