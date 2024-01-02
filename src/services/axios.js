import axios from "axios";

axiosInstance = axios.create({
    baseURL:"localhost:8000"
})

export default axiosInstance