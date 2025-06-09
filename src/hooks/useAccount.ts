import Axios from "@/config/Apiconfig";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getAccount = async() => {
    const res = await Axios.get("account")
    return res.data.data;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const patchAccount = async(data:any) => {
    const res = await Axios.patch(`account/${data._id}`,data)
    return res.data;
}

export const useAccount = () => {

    const queryClient = useQueryClient()

    const queryAccount = useQuery({
        queryKey:['accounts'],
        queryFn:getAccount
    })

    const updateAccount = useMutation({
        mutationKey:['update Account'],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mutationFn:(data:any)=>patchAccount(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['accounts']})
        }
    })

    return {queryAccount,updateAccount}
}