import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear} Seu Site de Vagas. Todos os direitos reservados.
      </p>
    </footer>
  );
}
