import axios from "axios";

export const getRequest = async (
  path: string,
  query?: Record<string, unknown>
) => {
  const { data } = await axios.get(`http://localhost:3030/api${path}`, {
    params: query,
  });

  return data;
};
