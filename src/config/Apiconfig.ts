import axios from 'axios'

const Axios = axios.create()

Axios.defaults.baseURL = "https://banking-mangament-system-with-atm.onrender.com/api/v1/"


Axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = `Baerer ${token}`
    }
    return config;
},
(error) => {
    return Promise.reject(error);
  },
)

export default Axios;