import { api } from "./api";

export const buscarTrabalho = async () => {
  const { data } = await api.get("/jobs");
  return data
}

export const buscarTrabalhoPorID = async (id) => {
  const { data } = await api.get(`/jobs/${id}`);
  return data
};

export const criarTrabalho = async (novoTrabalho) => {
  const { data } = await api.post("/jobs", novoTrabalho);
  return data;
};

export const editarTrabalho = async (id, trabalhoAtualizado) => {
  const { data } = await api.put(`/jobs/${id}`, trabalhoAtualizado);
  return data;
};

export const deletarTrabalho = async (id) => {
  await api.delete(`/jobs/${id}`);
};