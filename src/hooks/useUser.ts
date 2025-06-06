import Axios from "@/config/Apiconfig";
import { useQuery } from "@tanstack/react-query";

const getUser = async() => {
    const res = await Axios.get("user")
    return res.data.data;
}


export const useUser = () => {
    const queryUser = useQuery({
        queryKey:['users'],
        queryFn:getUser
    })

    return {queryUser}
}