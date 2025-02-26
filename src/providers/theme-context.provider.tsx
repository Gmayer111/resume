"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext({} as any);

const getFromLocaleStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("color");
    return value;
  }
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState("");
  const [localeStorageColor, setColorLocaleStorage] = useState(() => {
    return getFromLocaleStorage();
  });

  const themeSwitcher = (color: string) => {
    return setColorLocaleStorage(color);
  };

  useEffect(() => {
    localStorage.setItem("color", localeStorageColor as string);
  }, [localeStorageColor]);

  useEffect(() => {
    if (localeStorageColor) {
      setColor(localeStorageColor);
    }
  }, [localeStorageColor]);

  return (
    <ThemeContext.Provider value={{ color, themeSwitcher }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => useContext(ThemeContext);
