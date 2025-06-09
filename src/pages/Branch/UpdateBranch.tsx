import CancelButton from "@/components/GeneralComponents/CancelButton";
import InputFormField from "@/components/GeneralComponents/InputFormField";
import SuccessButton from "@/components/GeneralComponents/SuccessButton";
import { Form } from "@/components/ui/form";
import { useMutateBranch } from "@/hooks/useBranch";
import { errorToastStyle, successToastStyle } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const updateBranchSchema = z.object({
  branchName: z.string().min(1, { message: "Branch Name is required." }),
  branchLocation: z.string().min(1, { message: "location is required." }),
});

interface Props {
  branchId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen:any
}

const UpdateBranch = ({ branchId,setOpen }: Props) => {

  
  const {getBranch,updateBranch} = useMutateBranch({id:branchId as string})


  const {data:getBranchId} = getBranch;

 
  const form = useForm<z.infer<typeof updateBranchSchema>>({
    resolver: zodResolver(updateBranchSchema),
    mode: "all"
  });

    const { control, handleSubmit ,reset} = form;

  useEffect(()=>{
    if(getBranchId){
      reset({
        branchName:getBranchId?.branchName,
        branchLocation:getBranchId?.branchLocation
      })
    }
  },[getBranchId,reset])


  const submit = async(values: z.infer<typeof updateBranchSchema>) => {
    try {
      const data = {...values,_id:branchId}
      const res = await updateBranch.mutateAsync(data)
      if(res.message === 'Update Branch Successfully.'){
        setOpen(false)
        toast(`${res.message}`,successToastStyle)
        reset({
          branchName:'',
          branchLocation:''
        })
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast(`${error.response.data.message}`,errorToastStyle)
    }
  };

  const cancelBtn = () => {
    setOpen(false)
    reset({
          branchName:'',
          branchLocation:''
    })
  }

  return (
      <Form {...form}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mt-5">
            <InputFormField
              placeholder={"Enter Branch Name"}
              control={control}
              type={"text"}
              name={"branchName"}
              label={"Branch Name"}
            />
          </div>
          <div className="mt-5">
            <InputFormField
              placeholder={"Enter Location"}
              control={control}
              type={"text"}
              name={"branchLocation"}
              label={"Location"}
            />
          </div>
          <div className="flex gap-10 mt-10 justify-center">
            <CancelButton text="cancel" cancel={cancelBtn}/>
            <SuccessButton text="Update"/>
          </div>
        </form>
      </Form>
  );
};

export default UpdateBranch;
