import axios from "axios";

export type Client = {
  id: number;
  name: string;
  address?: string;
  age?: number;
  gender?: string;
  contact?: string;
  email: string;
  firstVisit?: string;
  lastVisit?: string;
};

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/clients`;

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const api = {
  getClients: () =>
    axios.get<Client[]>(API_URL, {
      headers: getAuthHeader(),
    }),

  createClient: (data: Omit<Client, "id">) =>
    axios.post(API_URL, data, {
      headers: getAuthHeader(),
    }),

  updateClient: (id: number, data: Partial<Omit<Client, "id">>) =>
    axios.put(`${API_URL}/${id}`, data, {
      headers: getAuthHeader(),
    }),

  deleteClient: (id: number) =>
    axios.delete(`${API_URL}/${id}`, {
      headers: getAuthHeader(),
    }),
};

export default api;
