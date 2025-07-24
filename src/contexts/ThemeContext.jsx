import React, { createContext, useState, useContext, useEffect } from "react";

// Cria o Contexto
const ThemeContext = createContext();

// Cria o componente Provedor
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Efeito que roda toda vez que 'darkMode' muda
  useEffect(() => {
    const body = window.document.body;

    // Adiciona ou remove a classe do body
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
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
