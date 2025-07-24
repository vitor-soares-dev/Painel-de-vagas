import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Header.module.css";

import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  // Define a classe do header dinamicamente com base no tema
  const headerClass = `${styles.header} ${darkMode ? styles.dark : ""}`;

  return (
    <header className={headerClass}>
      <nav className={styles.nav}>
        <Link to="/vagas">Vagas</Link>
        {isAuthenticated ? (
          <Link to="/admin">Painel</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <div className={styles.actions}>
        {/* Botão de tema estilizado com ícone */}
        <button className={styles.themeButton} onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        {isAuthenticated && (
          <button className={styles.logoutButton} onClick={logout}>
            Sair
          </button>
        )}
      </div>
    </header>
  );
}
