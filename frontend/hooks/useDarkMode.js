import { useState } from "react";

export const useDarkMode = (initialValue = false) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(initialValue);

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  return [isDarkModeOn, toggleDarkMode];
};
