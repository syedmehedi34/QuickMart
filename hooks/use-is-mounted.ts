/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

export default useIsMounted;
