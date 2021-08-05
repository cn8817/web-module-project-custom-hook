import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [storedValue, setStoredValue] = useLocalStorage('mode', initialValue)

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(initialValue, JSON.stringify(value));
      }; 

      return [storedValue, setValue]
}