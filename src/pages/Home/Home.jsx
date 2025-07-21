import { useState, useEffect } from "react";
import CardVaga from "../Components/CardVaga/CardVaga";
import FiltroVagas from "../Components/FiltroVagas/FiltroVagas";
import { api } from "../../Services/api";

export default function Home() {
  const [vagas, setVagas] = useState([]);
  const [vagasFiltradas, setVagasFiltradas] = useState([]);

  useEffect(() => {
    async function fetchVagas() {
      try {
        const response = await api.get("/vagas");
        setVagas(response.data);
        setVagasFiltradas(response.data);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      }
    }
    fetchVagas();
  }, []);

  const handleFilter = (filtros) => {
    let vagasTemp = [...vagas];
    if (filtros.area) {
      vagasTemp = vagasTemp.filter((vaga) => vaga.area === filtros.area);
    }
    if (filtros.tipoContrato) {
      vagasTemp = vagasTemp.filter(
        (vaga) => vaga.tipoContrato === filtros.tipoContrato
      );
    }
    setVagasFiltradas(vagasTemp);
  };

  return (
    <div>
      <h1>Portal de Vagas</h1>
      <FiltroVagas onFilter={handleFilter} />
      <div className="lista-vagas">
        {vagasFiltradas.map((vaga) => (
          <CardVaga key={vaga.id} vaga={vaga} />
        ))}
      </div>
    </div>
  );
}
