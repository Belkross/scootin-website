import React from "react";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function ButtonThemeMode({ onClick, currentThemeMode }) {
  return (
    <IconButton
      onClick={onClick}
      aria-label="toggle dark mode"
      variant="navigation"
    >
      {currentThemeMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default ButtonThemeMode;
