import { useAuth } from "../../contexts/AuthContext";

export const Layout = () => {
  const { logout } = useAuth();
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/vitor-soares-dev"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} /> vitor-soares-dev
        </a>
      </footer>
    </div>
  );
};
