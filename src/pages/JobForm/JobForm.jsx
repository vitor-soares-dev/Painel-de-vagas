import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import {
  criarTrabalho,
  editarTrabalho,
  buscarTrabalhoPorID,
} from "../../Services/apiService"; // Importe as funções necessárias
import styles from "./JobForm.module.css"; // Importa o CSS Module

export default function JobForm() {
  const { id } = useParams(); // Pega o ID da URL, se existir
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Função para preencher o formulário
  } = useForm();

  const isEditing = Boolean(id); // Verifica se está em modo de edição

  // Se estiver editando, busca os dados da vaga e preenche o formulário
  useEffect(() => {
    if (isEditing) {
      const fetchJobData = async () => {
        try {
          const jobData = await buscarTrabalhoPorID(id);
          reset(jobData); // Preenche o formulário com os dados da vaga
        } catch (error) {
          console.error("Erro ao buscar dados da vaga:", error);
          navigate("/admin"); // Volta se não encontrar a vaga
        }
      };
      fetchJobData();
    }
  }, [id, isEditing, reset, navigate]);

  // Função chamada no submit do formulário
  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        await editarTrabalho(id, data);
        alert("Vaga atualizada com sucesso!");
      } else {
        await criarTrabalho(data);
        alert("Vaga criada com sucesso!");
      }
      navigate("/admin"); // Redireciona para o painel após salvar
    } catch (error) {
      console.error("Erro ao salvar a vaga:", error);
      alert("Não foi possível salvar a vaga.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.formTitle}>
          {isEditing ? "Editar Vaga" : "Criar Nova Vaga"}
        </h2>

        <div className={styles.inputGroup}>
          <input
            className={styles.inputField}
            placeholder="Título da Vaga"
            {...register("titulo", { required: "O título é obrigatório" })}
          />
          {errors.titulo && (
            <p className={styles.errorMessage}>{errors.titulo.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.inputField}
            placeholder="Tipo de Contrato (ex: CLT, PJ)"
            {...register("tipo", {
              required: "O tipo de contrato é obrigatório",
            })}
          />
          {/* CORREÇÃO: Verificando o erro do campo 'tipo' */}
          {errors.tipo && (
            <p className={styles.errorMessage}>{errors.tipo.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.inputField}
            placeholder="Nome da Empresa"
            {...register("empresa", {
              required: "O nome da empresa é obrigatório",
            })}
          />
          {errors.empresa && (
            <p className={styles.errorMessage}>{errors.empresa.message}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          {isEditing ? "Salvar Alterações" : "Salvar Vaga"}
        </button>
      </form>
    </div>
  );
}
