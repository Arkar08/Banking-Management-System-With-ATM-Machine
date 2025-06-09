import Axios from "@/config/Apiconfig";
import type { CreateUser } from "@/utils/type";
import { useMutation, useQuery } from "@tanstack/react-query";

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
    const getUserId = useQuery({
        queryKey:['user',id],
        queryFn:()=>getUserIds(id)
    })

    return{getUserId}
}