import YcRequest from "./request";
import LocalCache from "@/utils/cache";
const ycRequest = new YcRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: Number(process.env.VUE_APP_TIME_OUT),
  interceptors: {
    requestInterceptor(config) {
      const token = LocalCache.getCache("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch(err) {
      return err;
    },
    responseInterceptor(res) {
      return res;
    },
    responseInterceptorCatch(err) {
      return err;
    }
  }
});
export { ycRequest };
