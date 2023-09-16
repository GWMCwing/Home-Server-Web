import axios from 'axios';
export const apiAxios = axios.create({
  baseURL: process.env.API_ADDRESS,
});
