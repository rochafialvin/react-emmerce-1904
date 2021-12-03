import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:2121" });

export default axiosInstance;
