import { useEffect, useState } from "react";
// 1. IMPORTAR O useTheme
import { useTheme } from "../../contexts/ThemeContext";
import { buscarTrabalho, deletarTrabalho } from "../../Services/apiService";
import { useNavigate } from "react-router";
import styles from "./AdminDashboard.module.css";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

export default function AdminDashboard() {
  // 2. OBTER O ESTADO DO TEMA
  const { darkMode } = useTheme();
  const [vagas, setVagas] = useState([]);
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();

  const fetchVagas = async () => {
    try {
      const vagasApi = await buscarTrabalho();
      setVagas(vagasApi);
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta vaga?")) {
      try {
        await deletarTrabalho(id);
        setVagas(vagas.filter((vaga) => vaga.id !== id));
      } catch (error) {
        console.error("Erro ao deletar vaga:", error);
        alert("Não foi possível excluir a vaga.");
      }
    }
  };

  const vagasFiltradas = vagas.filter(
    (vaga) =>
      vaga.tipo && vaga.tipo.toLowerCase().includes(filtro.toLowerCase())
  );

  // 3. CONSTRUIR A STRING DE CLASSES DINAMICAMENTE
  const containerClasses = `${styles.adminContainer} ${
    darkMode ? styles.dark : ""
  }`;

  return (
    // 4. APLICAR A CLASSE NO CONTAINER PRINCIPAL
    <div className={containerClasses}>
      <header className={styles.adminHeader}>
        <h2>Painel Administrativo</h2>
        <button
          className={styles.createButton}
          onClick={() => navigate("/vagas/nova")}
        >
          <FaPlus />
          Criar Nova Vaga
        </button>
      </header>

      <div className={styles.filtro}>
        <FaSearch className={styles.searchIcon} />
        <input
          className={styles.inputFiltro}
          placeholder="Filtrar por tipo de contrato..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <ul className={styles.vagasList}>
        {vagasFiltradas.map((vaga) => (
          <li key={vaga.id} className={styles.vagaItem}>
            <div className={styles.vagaInfo}>
              <strong>{vaga.titulo}</strong>
              <span>{vaga.tipo}</span>
            </div>
            <div className={styles.actionButtons}>
              <button
                className={`${styles.actionButton} ${styles.editButton}`}
                onClick={() => navigate(`/vagas/editar/${vaga.id}`)}
              >
                <FaEdit /> Editar
              </button>
              <button
                className={`${styles.actionButton} ${styles.deleteButton}`}
                onClick={() => handleDelete(vaga.id)}
              >
                <FaTrash /> Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
