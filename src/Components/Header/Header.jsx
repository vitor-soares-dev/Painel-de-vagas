import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <nav>
        <Link to="/vagas">Vagas</Link>
        {user && <Link to="/admin">Painel</Link>}
      </nav>
      <div>
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
        </button>
        {user && <button onClick={logout}>Sair</button>}
      </div>
    </header>
  );
}
