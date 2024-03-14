import { useEffect, useState } from "react";

export const debounce = (value: string, time: number) => {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
    }, time);

    return () => {
      clearTimeout(handler);
    };
  }, [value, time]);
  return debounceVal;
};
