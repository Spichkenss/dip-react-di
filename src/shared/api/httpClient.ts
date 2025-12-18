import axios from "axios";
import { AxiosResponse } from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export type APIResponse<Data> = Promise<AxiosResponse<Data>>;
