import React from "react";

export const ThemeColors = {
  dark: {
    primary: "#fca311",
    secondary: "#14213d",
    background: "#000000",
    highlight: "#e5e5e5",
    white: "#ffffff",
  },
};

export const ThemeContext = React.createContext(ThemeColors);
