import CancelButton from "@/components/GeneralComponents/CancelButton"
import SuccessButton from "@/components/GeneralComponents/SuccessButton"
import useAuth from "@/hooks/useAuth"
import { errorToastStyle } from "@/utils/toast"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"



const Logout = () => {

  const navigate = useNavigate()
  const {logout} = useAuth()

  const logoutUser =async () => {
    try {
      const data = await logout.mutateAsync()
      if(data.message === 'Logout Successfully.'){
        localStorage.removeItem("role")
        localStorage.removeItem('token')
        localStorage.removeItem("userId")
        navigate('/auth/login')
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast(error.response.data.message,errorToastStyle)
    }
  }

  return (
    <div className="relative h-[calc(100vh-100px)]">
      <div className="max-w-[440px] w-[100%] border-1 shadow-lg rounded-md absolute top-[30%] left-[30%] p-5">
          <div>
            <h3 className="text-3xl text-center">Are You Want To Logout?</h3>
          </div>
          <div className="flex justify-center items-center gap-10 mt-10">
            <CancelButton text='No'/>
            <SuccessButton text="Yes" success={logoutUser}/>
          </div>
      </div>
    </div>
  )
}

export default Logout
