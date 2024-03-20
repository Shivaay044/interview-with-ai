import axios from "axios";
import { toast } from "react-toastify";
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

instance.interceptors.response.use(
  function (response) {
    
    if(response?.data?.message){
      toast.success(response?.data?.message)
    }
    return response;
  },
  function (error) {
    if(error?.response?.data?.message){
      toast.error(error?.message)
    }
    return Promise.reject(error);
  }
);

export default instance;
