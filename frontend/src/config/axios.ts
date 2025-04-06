import axios from 'axios';
import { apiURL } from './urls';

export const axiosInstance = axios.create({
  baseURL: apiURL,

  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export function createAxios({ getState }: { getState: any }) {
  axiosInstance.interceptors.request.use(
    (config: any) => {
      const { useAuth, ...headers } = config.headers;

      return { ...config, headers };
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
