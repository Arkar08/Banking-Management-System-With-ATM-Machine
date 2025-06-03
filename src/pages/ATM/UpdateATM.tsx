import CancelButton from "@/components/GeneralComponents/CancelButton"
import InputFormField from "@/components/GeneralComponents/InputFormField"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"



const updateATMSchema = z.object({
  atmName:z.string().min(1,{message:'ATM Name is required.'}),
  branchName:z.string().min(1,{message:"Branch Name is required."}),
  location:z.string().min(1,{message:"Location is required."}),
  limit:z.string().min(1,{message:"Limit is required."}),
})

const UpdateATM = () => {

   const navigate = useNavigate();
    const form = useForm<z.infer<typeof updateATMSchema>>({
      resolver:zodResolver(updateATMSchema),
      mode:"all",
      defaultValues:{
        atmName:"",
        branchName:"",
        location:"",
        limit:""
      }
    })
  
    const {control , handleSubmit} = form;
  
    const submit = (values:z.infer<typeof updateATMSchema>) => {
      console.log(values)
    }
  
    const cancelBtn = () => {
      navigate("/atm")
    }
      
  return (
    <>
      <div className="p-3 shadow-lg rounded-md">
        <h3 className="font-semibold text-2xl text-center">Update ATM Machine</h3>
      </div>
      <div className="shadow-lg h-[calc(100vh-180px)] p-4 relative mt-4">
        <Form {...form}>
          <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(submit)}>
            <div>
              <InputFormField placeholder={"Enter ATM Name"} control={control} type={"text"} name={"atmName"} label={"ATM Name"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Branch Name"} control={control} type={"text"} name={"branchName"} label={"Branch Name"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Location"} control={control} type={"text"} name={"location"} label={"Location"}/>
            </div>
            <div>
              <InputFormField placeholder={"Enter Limit"} control={control} type={"number"} name={"limit"} label={"Limit"}/>
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

export default UpdateATM
