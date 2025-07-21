export default function CardVaga({ vaga }) {
  return (
    <div className="card">
      <h3>{vaga.titulo}</h3>
      <p>{vaga.empresa}</p>
      <span>{vaga.tipoContrato}</span>
      <span>{vaga.area}</span>
    </div>
  );
}
