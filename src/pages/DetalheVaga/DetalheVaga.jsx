import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function DetalheVaga() {
  const { id } = useParams();
  const [vaga, setVaga] = useState(null);

  useEffect(() => {
    axios.get(`"http://localhost:3001/"${id}`).then((res) => setVaga(res.data));
  }, [id]);

  if (!vaga) return <p>Carregando...</p>;

  return (
    <div className="detalhe-vaga">
      <h2>{vaga.titulo}</h2>
      <p>
        <strong>Tipo:</strong> {vaga.tipo}
      </p>
      <p>
        <strong>Descrição:</strong> {vaga.descricao}
      </p>
    </div>
  );
}
