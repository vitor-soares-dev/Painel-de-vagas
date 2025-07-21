import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaVagas() {
  const [vagas, setVagas] = useState([]);
  const [filtro, setFiltro] = useState("");

  const apiUrl = "http://localhost:3001/jobs";

  useEffect(() => {
    axios.get(apiUrl).then((res) => setVagas(res.data));
  }, []);

  return (
    <div className="lista-vagas">
      <h2>Vagas Disponíveis</h2>

      <input
        placeholder="Filtrar por tipo"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <ul>
        {vagas
          .filter((vaga) =>
            vaga.tipo.toLowerCase().includes(filtro.toLowerCase())
          )
          .map((vaga) => (
            <li key={vaga.id}>
              <strong>{vaga.titulo}</strong> - {vaga.tipo}
            </li>
          ))}
      </ul>
    </div>
  );
}
