import Axios from "@/config/Apiconfig";
import type { CreateUser, UpdateUser } from "@/utils/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getUser = async() => {
    const res = await Axios.get("user")
    return res.data.data;
}

const createUsers  = async(data:CreateUser) => {
    const res = await Axios.post('user',data)
    return res.data;
}

const getUserIds = async(id:string) => {
    const res = await Axios.get(`user/${id}`)
    return res.data.data;
}

const patchUser = async(data:UpdateUser) => {
    const res = await Axios.patch(`user/${data._id}`,data)
    return res.data;
}

export const useUser = () => {
    const queryUser = useQuery({
        queryKey:['users'],
        queryFn:getUser
    })

    const createUser = useMutation({
        mutationKey:['createUser'],
        mutationFn:createUsers
    })

    return {queryUser,createUser}
}

interface Props {
    id:string
}

export const useMutateUser = ({id}:Props) => {

    const queryClient = useQueryClient();

    const getUserId = useQuery({
        queryKey:['user',id],
        queryFn:()=>getUserIds(id)
    })

    const updateUser = useMutation({
        mutationKey:['updateUser',id],
        mutationFn:(data:UpdateUser) => patchUser(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['users']})
        }
    })

    return{getUserId,updateUser}
}