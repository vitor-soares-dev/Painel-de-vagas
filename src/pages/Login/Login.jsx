import { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

export function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/admin");
    } else {
      setError("Preencha todos os campos");
      return;
    }
  };

  return (
    // 2. Aplique as classes usando o objeto 'styles'
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          // Adicionando uma classe para consistência
          className={styles.inputField}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          // Adicionando uma classe para consistência
          className={styles.inputField}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.submitButton}>
          Entrar
        </button>
      </form>
    </div>
  );
}
