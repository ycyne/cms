import { AxiosRequestConfig, AxiosResponse } from "axios";
export interface YcInterceptors<T> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (result: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface YcRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YcInterceptors<T>;
  isShowLoading?: boolean;
}
