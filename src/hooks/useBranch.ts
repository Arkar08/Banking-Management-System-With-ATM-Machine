import Axios from '@/config/Apiconfig'
import {useQuery} from '@tanstack/react-query'

const getBranch = async() => {
    const res = await Axios.get("branch")
    return res.data.data;
}

export const useBranch = () => {
    const queryBranch = useQuery({
        queryKey:['branches'],
        queryFn:getBranch
    })

    return {queryBranch}
}