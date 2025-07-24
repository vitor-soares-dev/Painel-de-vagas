import { useState } from "react";
// 1. Importe o seu arquivo CSS Module
import styles from "./FiltroVagas.module.css";

export default function FiltroVagas({ onFiltrar }) {
  const [area, setArea] = useState("");
  const [tipoContrato, setTipoContrato] = useState("");

  const aplicarFiltro = () => {
    onFiltrar({ area, tipoContrato });
  };

  return (
    // 2. Aplique as classes usando o objeto 'styles'
    <div className={styles.filtroContainer}>
      <h3>Filtrar Vagas</h3>
      <div className={styles.filtroRow}>
        <label>Área:</label>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">Todas</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div className={styles.filtroRow}>
        <label>Tipo de contrato:</label>
        <select
          value={tipoContrato}
          onChange={(e) => setTipoContrato(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="CLT">CLT</option>
          <option value="PJ">PJ</option>
          <option value="Freelancer">Freelancer</option>
        </select>
      </div>
      <button className={styles.filtroBotao} onClick={aplicarFiltro}>
        Aplicar Filtro
      </button>
    </div>
  );
}
