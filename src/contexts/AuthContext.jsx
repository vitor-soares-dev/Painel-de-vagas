import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verificar localStorage ao inicializar o componente
  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    const savedUser = localStorage.getItem("userEmail");

    if (savedAuth === "true" && savedUser) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email === "admin@email.com" && password === "123456") {
      setIsAuthenticated(true);

      // Salvar no localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("loginTime", new Date().toISOString());

      return true;
    }
    return false;
  };

  console.log(isAuthenticated);

  const logout = () => {
    setIsAuthenticated(false);

    // Remover do localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("loginTime");
  };

  // Mostrar loading enquanto verifica o localStorage
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
