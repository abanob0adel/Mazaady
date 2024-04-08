import Axios from "axios";

const privateKey = "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16";

function authRequestInterceptor(config: any) {
  config.headers = {
    ...config.headers,
    "private-key": privateKey,
    Accept: "application/json",
  };
  return config;
}

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
