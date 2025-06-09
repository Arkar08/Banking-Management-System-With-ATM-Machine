import InputFormField from "@/components/GeneralComponents/InputFormField"
import { useForm } from "react-hook-form"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email:z.string().min(1,{message:"Email is required."}),
  password:z.string().min(1,{message:"Password is required."})
})

const Login = () => {

  const navigate = useNavigate()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver:zodResolver(loginSchema),
    mode:"all",
    defaultValues:{
      email:"",
      password:""
    },
  })

  const {control,handleSubmit} = form

  const onSubmit = (values:z.infer<typeof loginSchema>) =>{
      if(values.email === 'admin@gmail.com' && values.password === 'admin'){
        localStorage.setItem('role','admin')
        navigate('/dashboard')
      }else{
        localStorage.setItem('role','agent')
        navigate('/agent/dashboard')
      }
  }

  return (
    <div className="relative h-[100vh]">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="absolute w-[440px] shadow-lg m-auto top-[25%] left-[38%] p-10 rounded-md">
          <h3 className="text-3xl font-semibold text-center space-x-2.5">Banking ATM Machine</h3>
          <h2  className="text-xl text-center pt-2 uppercase">Login</h2>
          <div className="mt-4">
            <InputFormField placeholder={"Enter Email"} type={"text"} control={control} name={"email"} label={"Email"}/>
          </div>
          <div className="mt-4">
            <InputFormField placeholder={"Enter Password"} type={"text"} control={control} name={"password"} label={"Password"}/>
          </div>
          <div className="mt-6 w-[100%]">
            <Button  variant="outline" className="w-[100%]  cursor-pointer bg-blue-600 text-white uppercase" type="submit">Login</Button>  
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Login
