import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001", // Porta do json-server
});
