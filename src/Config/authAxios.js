import axios from "axios";

const Token = null;

const instance = axios.create({
  // baseURL: process.env.baseURL ,
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${Token}`,
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {

    return Promise.reject(error);
  }
);

export default instance;
