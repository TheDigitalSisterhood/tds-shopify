import { useEffect } from "react";

const useWindow = (event: string, callback: () => void) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

export default useWindow;
