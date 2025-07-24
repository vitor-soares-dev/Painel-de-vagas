import { useEffect, useState } from "react";
import styles from "./ListaVagas.module.css";
import { FaSearch } from "react-icons/fa";
import { buscarTrabalho } from "../../Services/apiService";

export default function ListaVagas() {
  const [vagas, setVagas] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const carregarVagas = async () => {
      try {
        const dados = await buscarTrabalho(); // Usa a abstração da API
        setVagas(dados);
      } catch (err) {
        console.error("Falha ao buscar vagas:", err);
      }
    };

    carregarVagas();
  }, []);

  // Filtra as vagas com base no input do usuário
  const vagasFiltradas = vagas.filter(
    (vaga) =>
      // Verifica se `vaga.tipo` existe antes de chamar toLowerCase()
      vaga.tipo && vaga.tipo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    // 3. Aplicando as classes do CSS Module
    <div className={styles.listaVagas}>
      <h2>Vagas Disponíveis</h2>

      {/* Container para o input e o ícone */}
      <div className={styles.inputContainer}>
        <FaSearch className={styles.searchIcon} />
        <input
          className={styles.inputFiltro}
          placeholder="Filtrar por tipo (ex: CLT, PJ...)"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <ul className={styles.vagasList}>
        {vagasFiltradas.map((vaga) => (
          <li key={vaga.id} className={styles.vagaItem}>
            <strong>{vaga.titulo}</strong>
            {/* O tipo da vaga agora é um 'span' para melhor estilização */}
            <span>{vaga.tipo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
