import axios, { AxiosRequestHeaders } from 'axios';
import { NextApiRequest } from 'next';

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.baseURL = 'http://localhost:3000';
export const axiosGet = async (url: string) => {
  const data = await axios.get(url);
  return data;
};

export const axiosPost = async (url: string, params: object) => {
  const data = await axios.post(url, params);
  return data;
};
