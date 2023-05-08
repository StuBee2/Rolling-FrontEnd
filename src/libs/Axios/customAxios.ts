import axios, { AxiosRequestConfig } from "axios";
import {
  ACCESS_KEY,
  REFRESH_KEY,
  REQUEST_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";
import CONFIG from "../../config/config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_KEY]: `Bearer ${Token.getToken(ACCESS_KEY)}`,
  },
});

const errorInterceptor = async ({
  config,
  response: { status },
}: {
  config: AxiosRequestConfig;
  response: { status: number };
}) => {
  const refresh_token = Token.getToken(REFRESH_KEY);
  if (status === 401 && refresh_token) {
    try {
      const { data } = await axios.get<{
        data: { accessToken: string; };
      }>(`${CONFIG.SERVER}/auth/refresh`, {
        headers: {
          [REQUEST_KEY]: `Bearer ${refresh_token}`,
        },
      });

      Token.setToken(ACCESS_KEY, data.data.accessToken);

      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          [REQUEST_KEY]: `Bearer ${data.data.accessToken}`,
        },
      };

      return customAxios(newConfig);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }

  return Promise.reject(config);
};

customAxios.interceptors.response.use((response) => response, errorInterceptor);
