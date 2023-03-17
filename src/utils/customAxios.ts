import axios, { AxiosInstance } from 'axios';
import { refresh, refreshErrorHandle } from './refresh';

const customAxios: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL, // 기본 서버 주소 입력
});

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL, // 기본 서버 주소 입력
    timeout: 3000,
    params: {},
});

api.interceptors.request.use(refresh, refreshErrorHandle);
// api.interceptors.response.use(
//     (res) => res.data,
//     (error) => {}
// );

export { customAxios, api };
