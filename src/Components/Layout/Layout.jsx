import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    // 3. Monte a estrutura da página
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {/* O Outlet renderiza o componente da rota atual aqui dentro */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
