import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // Reemplaza con la URL base de tu API
});

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Otros métodos para realizar otras operaciones de la API

export default api;
