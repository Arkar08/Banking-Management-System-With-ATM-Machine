import Axios from "@/config/Apiconfig";
import { useQuery } from "@tanstack/react-query";

const getTransaction = async() => {
    const res = await Axios.get("transaction")
    return res.data.data;
}


export const useTransaction = () => {
    const queryTransaction = useQuery({
        queryKey:['transactions'],
        queryFn:getTransaction
    })

    return {queryTransaction}
}