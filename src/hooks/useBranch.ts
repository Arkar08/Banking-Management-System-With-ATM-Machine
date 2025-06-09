import Axios from '@/config/Apiconfig'
import type { createBranch,updateBranch } from '@/utils/type';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

const getBranch = async() => {
    const res = await Axios.get("branch")
    return res.data.data;
}

const createBranchs = async(data:createBranch) => {
    const res = await Axios.post("branch",data)
    return res.data;
}

const getBranchId = async(id:string) => {
    const res = await Axios.get(`branch/${id}`)
    return res.data.data;
}

const updateBranches = async(data:updateBranch) => {
    const res = await Axios.patch(`branch/${data._id}`,data)
    return res.data;
}

export const useBranch = () => {
    const queryClient = useQueryClient();
    const queryBranch = useQuery({
        queryKey:['branches'],
        queryFn:getBranch
    })

    const createBranch = useMutation({
        mutationKey:['createBranch'],
        mutationFn:createBranchs,
        onSuccess:()=> {
            queryClient.invalidateQueries({ queryKey: ["branches"] });
        }
    })

    return {queryBranch,createBranch}
}

interface Props{
    id:string
}

export const useMutateBranch = ({id}:Props) => {
    const queryClient = useQueryClient();

    const getBranch = useQuery({
        queryKey:['branch',id],
        queryFn:()=>getBranchId(id)
    })

    const updateBranch = useMutation({
        mutationKey:['updateBranch',id],
        mutationFn:(data:updateBranch) => updateBranches(data),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['branches']})
        }
    })

    return {getBranch,updateBranch}
}

