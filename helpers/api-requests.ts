import axios from "axios";

import { config } from "../config";

export const getRequest = async (
  path: string,
  query?: Record<string, unknown>,
) => {
  try {
    const { data } = await axios.get(`${config.API}/api${path}`, {
      params: query,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;

      console.error("Error occurred while making a GET request:", {
        path,
        status,
        message,
      });
    }

    console.error("An unexpected error occurred:", error);
  }
};

export const getByIdRequest = async (path: string) => {
  try {
    const { data } = await axios.get(`${config.API}/api${path}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return;
    }
  }
};
