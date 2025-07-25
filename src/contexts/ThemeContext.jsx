import React, { createContext, useState, useContext, useEffect } from "react";

// Cria o Contexto
const ThemeContext = createContext();
const isDarkMode = localStorage.getItem("darkMode");

// Cria o componente Provedor
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(()=>{
    const isDark = localStorage.getItem("darkMode");
    if(isDark === "dark"){
      return true
    }
    return false
  });

  // Efeito que roda toda vez que 'darkMode' muda
  useEffect(() => {
    const body = window.document.body;

    // Adiciona ou remove a classe do body
    if (darkMode) {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "dark")
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "light")
    }
  }, [darkMode]);

  // Função para trocar o tema
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook customizado para facilitar o uso do contexto
export function useTheme() {
  return useContext(ThemeContext);
}
