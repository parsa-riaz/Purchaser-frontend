import axios from "axios";

const apiService = axios.create({
  baseURL: "https://aggressive-plum-fly.cyclic.app/api",
});

export default apiService;
