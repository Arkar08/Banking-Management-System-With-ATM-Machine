import CancelButton from "@/components/GeneralComponents/CancelButton";
import InputFormField from "@/components/GeneralComponents/InputFormField";
import SuccessButton from "@/components/GeneralComponents/SuccessButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useBranch } from "@/hooks/useBranch";
import { errorToastStyle, successToastStyle } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const createBranchSchema = z.object({
  branchName: z.string().min(1, { message: "Branch Name is required." }),
  branchLocation: z.string().min(1, { message: "location is required." }),
});

const CreateBranch = () => {

  const {createBranch} = useBranch()
  const [open,setOpen] = useState(false)

  const form = useForm<z.infer<typeof createBranchSchema>>({
    resolver: zodResolver(createBranchSchema),
    mode: "all",
    defaultValues: {
      branchName: "",
      branchLocation: "",
    },
  });

  const { control, handleSubmit,reset } = form;

  const submit = async(values: z.infer<typeof createBranchSchema>) => {
    try {
      const res = await createBranch.mutateAsync(values)
      if(res.message === 'Create Branch Successfully.'){
        setOpen(false)
        reset({
          branchName:'',
          branchLocation:''
        })
        toast(`${res.message}`,successToastStyle)
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast(`${error.response.data.message}`,errorToastStyle)
    }
  };

  const cancelBtn = () => {
    reset({
      branchName:'',
      branchLocation:''
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          <Plus /> Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[440px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Create Branch
          </DialogTitle>
        </DialogHeader>
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
              <CancelButton text="Cancel" cancel={cancelBtn}/>
              <SuccessButton text="Create"/>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBranch;
