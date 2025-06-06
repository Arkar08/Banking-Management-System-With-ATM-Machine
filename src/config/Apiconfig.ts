import axios from 'axios'

const Axios = axios.create()

Axios.defaults.baseURL = "https://banking-mangament-system-with-atm.onrender.com/api/v1/"

export default Axios;