import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { api } from "../../Services/api";
import { criarTrabalho } from "../../Services/apiService";

export default function JobForm() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await criarTrabalho(data);
      console.log("Vaga salva com sucesso!");
      navigate("/admin"); // Redireciona para a lista de vagas
    } catch (error) {
      console.error("Erro ao salvar vaga:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <h2>Nova Vaga</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          {...register("titulo", { required: "O título é obrigatório" })}
          placeholder="Título da Vaga"
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.titulo && (
          <p style={{ color: "red" }}>{errors.titulo.message}</p>
        )}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <input
          {...register("tipo", { required: "O tipo é obrigatório" })}
          placeholder="Tipo da Vaga"
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.titulo && <p style={{ color: "red" }}>{errors.tipo.message}</p>}
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <input
          {...register("empresa", {
            required: "O nome da empresa é obrigatório",
          })}
          placeholder="Empresa"
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.empresa && (
          <p style={{ color: "red" }}>{errors.empresa.message}</p>
        )}
      </div>

      <button type="submit" style={{ padding: "10px 20px" }}>
        Salvar Vaga
      </button>
    </form>
  );
}
