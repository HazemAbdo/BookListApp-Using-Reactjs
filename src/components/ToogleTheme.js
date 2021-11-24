import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToogleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} id="temp">
      Toggle the theme
    </button>
  );
};

export default ToogleTheme;
