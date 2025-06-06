import Axios from "@/config/Apiconfig";
import { useQuery } from "@tanstack/react-query";

const getAccount = async() => {
    const res = await Axios.get("account")
    return res.data.data;
}


export const useAccount = () => {
    const queryAccount = useQuery({
        queryKey:['accounts'],
        queryFn:getAccount
    })

    return {queryAccount}
}