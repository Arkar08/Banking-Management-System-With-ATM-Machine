import Axios from "@/config/Apiconfig"
import type { loginUser } from "@/utils/type"
import { useMutation } from "@tanstack/react-query"


const loginUser = async(data:loginUser) => {
    const res = await Axios.post("auth/login",data)
    return res.data;
}

const logoutUser = async()=>{
    const res = await Axios.post("auth/logout")
    return res.data;
}

const useAuth = () => {
    const login = useMutation({
        mutationKey:['login'],
        mutationFn:loginUser
    })


    const logout = useMutation({
        mutationKey:['logout'],
        mutationFn:logoutUser
    })

    return {login,logout}
}

export default useAuth;