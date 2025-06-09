import CancelButton from "@/components/GeneralComponents/CancelButton"
import SuccessButton from "@/components/GeneralComponents/SuccessButton"



const Logout = () => {


  const logout = () => {
    console.log('logout successfully.')
  }

  return (
    <div className="relative h-[calc(100vh-100px)]">
      <div className="max-w-[440px] w-[100%] border-1 shadow-lg rounded-md absolute top-[30%] left-[30%] p-5">
          <div>
            <h3 className="text-3xl text-center">Are You Want To Logout?</h3>
          </div>
          <div className="flex justify-center items-center gap-10 mt-10">
            <CancelButton text='No'/>
            <SuccessButton text="Yes" success={logout}/>
          </div>
      </div>
    </div>
  )
}

export default Logout
