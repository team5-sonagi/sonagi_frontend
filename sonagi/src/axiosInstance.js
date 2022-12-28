import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://54.180.139.126",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    config.headers["X-AUTH-TOKEN"] = token;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
