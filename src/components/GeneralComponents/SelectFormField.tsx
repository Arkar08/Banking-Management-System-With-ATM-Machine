import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"


interface selectProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control:any,
    placeholder:string,
    name:string,
    label:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options:any[]
}

const SelectFormField = ({control,placeholder,name,label,options}:selectProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="pb-1">{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value ?? ""}
          >
            <FormControl>
              <SelectTrigger className="w-[100%]  cursor-pointer py-5">
                <SelectValue  placeholder={placeholder}/>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option,index) => (
                <SelectItem value={option} key={index}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SelectFormField
