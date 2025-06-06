import InputFormField from "@/components/GeneralComponents/InputFormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createBranchSchema = z.object({
  branchName: z.string().min(1, { message: "Branch Name is required." }),
  location: z.string().min(1, { message: "location is required." }),
});

const CreateBranch = () => {
  const form = useForm<z.infer<typeof createBranchSchema>>({
    resolver: zodResolver(createBranchSchema),
    mode: "all",
    defaultValues: {
      branchName: "",
      location: "",
    },
  });

  const { control, handleSubmit } = form;

  const submit = (values: z.infer<typeof createBranchSchema>) => {
    console.log(values);
  };

  return (
    <Dialog>
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
                name={"location"}
                label={"Location"}
              />
            </div>
            <div className="flex gap-10 mt-10 justify-center">
              <DialogClose>
                <div className="w-[150px] p-2 cursor-pointer text-red-600 hover:text-red-400 shadow-sm rounded-lg">
                  <span>Cancel</span>
                </div>
              </DialogClose>
              <Button
                type="submit"
                className="w-[150px] bg-green-600 cursor-pointer hover:bg-green-400 hover:text-white"
              >
                <span>Create</span>
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBranch;
