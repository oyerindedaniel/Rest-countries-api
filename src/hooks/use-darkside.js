import { useState, useEffect } from "react";

import { getInitialColorMode } from "../mode/theme";

function useDarkSide() {
  const userMode = getInitialColorMode();

  const [theme, setTheme] = useState(userMode);
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    //Save theme to Local Storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkSide;
