import { useContextProvider } from "../../context/useContext";

export const useChangeTheme = () => {
  const { theme, setTheme } = useContextProvider();

  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return { theme, changeTheme };
};
