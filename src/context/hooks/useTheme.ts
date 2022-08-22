import { useReducer } from "react";

const key = "@my_todo-theme_active";

const themeReducer = (prevValue: any, newValue: string) => {
  localStorage.setItem(key, JSON.stringify(newValue));
  return newValue;
};

function getLocalStorage() {
  const value = localStorage.getItem(key);

  return typeof value === "string" ? JSON.parse(value) : null;
}

export const useTheme = () => {
  const [theme, setTheme] = useReducer(
    themeReducer,
    getLocalStorage() || "light"
  );

  return { theme, setTheme };
};
