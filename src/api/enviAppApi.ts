import { getEnvVariables } from "@/helpers";
import axios, { AxiosRequestHeaders } from "axios";

const { VITE_API_URL } = getEnvVariables();

const enviAppApi = axios.create({
  baseURL: VITE_API_URL,
});

interface CustomAxiosRequestHeaders extends AxiosRequestHeaders {
  Authorization: string;
}

// Todo: configurar interceptores
enviAppApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    } as CustomAxiosRequestHeaders;
  }

  return config;
});

export default enviAppApi;
