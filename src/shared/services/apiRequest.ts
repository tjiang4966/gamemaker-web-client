
import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from "axios"
import { getCookie } from "./getCookie";

const apiBaseUrl = 'http://localhost:3000';

function errorCatcher(err: AxiosError) {
  // if (err.response?.status === 401) {
  //   // window.location.href = '/error/401';
  //   // if not login, redirect to login page
  //   window.location.href = '/login';
  // }
  // if (err.response?.status === 403) {
  //   window.location.href = '/error/403';
  // }
}

function getConfig<D = any>(config?: AxiosRequestConfig<D>): AxiosRequestConfig<D> {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${getCookie('jwt')}`,
    }
  }
}

const apiRequest = {
  get: async <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R|void> => {
    return axios.get<T, R, D>(`${apiBaseUrl}${url}`, getConfig(config)).catch(errorCatcher);
  },
  post: async <T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R|void> => {
    return axios.post<T, R, D>(`${apiBaseUrl}${url}`, data, getConfig(config)).catch(errorCatcher);
  },
  put: async <T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R|void> => {
    return axios.put<T, R, D>(`${apiBaseUrl}${url}`, data, getConfig(config)).catch(errorCatcher);
  },
  delete: async <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R|void> => {
    return axios.delete<T, R, D>(`${apiBaseUrl}${url}`, getConfig(config)).catch(errorCatcher);
  },
};

export { apiRequest };