import { useState } from "react";

export function useLocalStorage(key, defaultvalue) {
  const [storedData, setStoredData] = useState(() => {
    try {
      const data = window.localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultvalue;
    } catch (error) {
      console.error("Error receiving data", error);
    }
  });

  {
    /*function setInformation(value) {
    window.localStorage.setItem(key, JSON.stringify());
  }*/
  }

  return [storedData, setStoredData];
}
