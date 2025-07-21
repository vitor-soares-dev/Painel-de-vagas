import { useEffect, useState } from "react";
import axios from "axios";
import {
  buscarTrabalho,
  criarTrabalho,
  deletarTrabalho,
} from "../../Services/apiService";
import { useNavigate } from "react-router";

export default function AdminDashboard() {
  const [vagas, setVagas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();

  const fetchVagas = async () => {
    const vagasApi = await buscarTrabalho();
    setVagas(vagasApi);
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <div className="admin-container">
      <h2>Painel Administrativo</h2>

      <div className="form-vaga">
        <input
          placeholder="Título da vaga"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          placeholder="Tipo de contrato"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <button onClick={() => navigate("/vagas/nova")}>Criar Vaga</button>
      </div>

      <div className="filtro">
        <input
          placeholder="Filtrar por tipo"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <ul>
        {vagas &&
          vagas
            .filter((vaga) => vaga.tipo.includes(filtro))
            .map((vaga) => (
              <li key={vaga.id}>
                <strong>{vaga.titulo}</strong> - {vaga.tipo}
                <button onClick={() => navigate(`/vagas/editar/${vaga.id}`)}>
                  Editar
                </button>
                <button onClick={async () => await deletarTrabalho(vaga.id)}>
                  Excluir
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
}
