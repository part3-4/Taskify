import { localStorageGetItem } from '@/utils/localStorage';
import axios, { AxiosError, AxiosResponse } from 'axios';

const BASE_URL = 'https://sp-taskify-api.vercel.app/1-4/';

axios.defaults.baseURL = BASE_URL;

let requestCount = 0;

type LoadingHandler = (isLoading: boolean) => void;

const loadingHandlers: LoadingHandler[] = [];

// 요청 시작 인터셉터
axios.interceptors.request.use((config) => {
  const accessToken = localStorageGetItem('accessToken');
  if (accessToken) {
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }
  }
  config.headers.Authorization = `Bearer ${accessToken}`;

  requestCount++;

  handleLoading(true);

  return config;
});

// 응답 도착 인터셉터
axios.interceptors.response.use(
  (res) => {
    requestCount--;
    if (requestCount === 0) {
      handleLoading(false);
    }
    return res;
  },
  (error) => {
    const { response } = error as unknown as AxiosError;
    requestCount--;
    if (requestCount === 0) {
      handleLoading(false);
    }
    if (response) {
      throw { status: response.status, data: response.data };
    }
  },
);

// 로딩 상태 변경 이벤트 핸들러를 등록하는 함수
export const addLoadingHandler = (handler: LoadingHandler) => {
  loadingHandlers.push(handler);
  // 등록한 핸들러에 현재 로딩 상태를 전달 (초기 상태)
  handler(requestCount > 0);
};

// 로딩 상태 변경 이벤트 핸들러를 제거하는 함수
export const removeLoadingHandler = (handler: LoadingHandler) => {
  const index = loadingHandlers.indexOf(handler);
  if (index !== -1) {
    loadingHandlers.splice(index, 1);
  }
};

// 로딩 상태를 처리하는 함수
const handleLoading = (isLoading: boolean) => {
  loadingHandlers.forEach((handler) => handler(isLoading));
};

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};
