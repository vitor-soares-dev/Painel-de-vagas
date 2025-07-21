import { useAuth } from "../../Contexts/AuthContext";

export const Layout = () => {
  const { logout } = useAuth();
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/marcoahansen"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} /> marcoahansen
        </a>
      </footer>
    </div>
  );
};
