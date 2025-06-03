import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

interface inputProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control:any,
    type:string,
    placeholder:string,
    name:string,
    label:string
}


const InputFormField = ({control,type,placeholder,name,label}:inputProps) => {
  return (
    <div className="flex flex-col gap-3">
        <Label>{label}</Label>
        <FormField 
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                <FormControl>
                    <Input type={type} placeholder={placeholder} autoComplete="off" {...field} className="[&::-webkit-inner-spin-button]:appearance-none py-5"/>
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
    </div>
  )
}

export default InputFormField
