import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import CancelButton from "@/components/GeneralComponents/CancelButton"
import InputFormField from "@/components/GeneralComponents/InputFormField"
import { Button } from "@/components/ui/button"
import SelectFormField from "@/components/GeneralComponents/SelectFormField"


const updateUserSchema = z.object({
  name:z.string().min(1,{message:"Name is required."}),
  email:z.string().min(1,{message:"Email is required."}),
  phoneNumber:z.string().min(1,{message:"Phone Number is required."}),
  password:z.string().min(1,{message:"Password is required."}),
  role:z.string().min(1,{message:"Role is required."}),
  address:z.string().min(1,{message:"Address is required."})
})


const UpdateUser = () => {

    const navigate = useNavigate();
  
    const form = useForm<z.infer<typeof updateUserSchema>>({
      resolver:zodResolver(updateUserSchema),
      mode:"all",
      defaultValues:{
        name:"",
        email:"",
        phoneNumber:"",
        password:"",
        role:"",
        address:""
      }
    })
  
    const {control , handleSubmit} = form;
  
    const  submit = (values:z.infer<typeof updateUserSchema>) => {
      console.log(values)
    }
  
    const cancelBtn = () => {
      navigate("/user")
    }

    
  const dummyOptions = ["Customer","Operator","ATM Technician"]

  return (
    <>
      <div className="p-3 shadow-lg rounded-md">
        <h3 className="font-semibold text-2xl text-center">Update User</h3>
      </div>
      <div className="shadow-lg h-[calc(100vh-180px)] p-4 relative mt-4">
        <Form {...form}>
          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(submit)}>
            <div>
              <InputFormField placeholder={"Enter Name"} control={control} type={"text"} name={"name"} label={"Name"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Email"} control={control} type={"text"} name={"email"} label={"Email"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Phone Number"} control={control} type={"text"} name={"phoneNumber"} label={"Phone Number"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Password"} control={control} type={"text"} name={"password"} label={"Password"}/>
            </div>
           <div>
              <SelectFormField placeholder={"Role"} control={control} name={"role"} label={"Role"} options={dummyOptions}/>
            </div>
            <div>
              <SelectFormField placeholder={"Branch Name"} control={control} name={"branchName"} label={"Branch Name"} options={dummyOptions}/>
            </div>
            <div>
              <InputFormField placeholder={"ATM"} control={control} type={"text"} name={"atmName"} label={"ATM"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Address"} control={control} type={"text"} name={"address"} label={"Address"}/>
            </div>
            <div className="absolute bottom-[5%] left-[37%] flex gap-10">
              <CancelButton cancel={cancelBtn}/>
              <Button type="submit"  className="w-[150px] bg-green-600 cursor-pointer hover:bg-green-400 hover:text-white">
                  <span>Update</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default UpdateUser
