import CancelButton from "@/components/GeneralComponents/CancelButton"
import InputFormField from "@/components/GeneralComponents/InputFormField"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"


const createUserSchema = z.object({
  name:z.string().min(1,{message:"Name is required."}),
  email:z.string().min(1,{message:"Email is required."}),
  phoneNumber:z.string().min(1,{message:"Phone Number is required."}),
  password:z.string().min(1,{message:"Password is required."}),
  role:z.string().min(1,{message:"Role is required."}),
  address:z.string().min(1,{message:"Address is required."})
})


const CreateUser = () => {

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver:zodResolver(createUserSchema),
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

  const  submit = (values:z.infer<typeof createUserSchema>) => {
    console.log(values)
  }

  const cancelBtn = () => {
    navigate("/user")
  }

  return (
    <>
      <div className="p-3 shadow-lg rounded-md">
        <h3 className="font-semibold text-2xl text-center">Create User</h3>
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
              <InputFormField placeholder={"Enter Role"} control={control} type={"text"} name={"role"} label={"Role"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Branch Name"} control={control} type={"text"} name={"branchName"} label={"Branch Name"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Address"} control={control} type={"text"} name={"address"} label={"Address"}/>
            </div>
            <div className="absolute bottom-[5%] left-[37%] flex gap-10">
              <CancelButton cancel={cancelBtn}/>
              <Button type="submit"  className="w-[150px] bg-green-600 cursor-pointer hover:bg-green-400 hover:text-white">
                  <span>Create</span>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}

export default CreateUser
