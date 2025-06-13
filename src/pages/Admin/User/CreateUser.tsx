import CancelButton from "@/components/GeneralComponents/CancelButton";
import InputFormField from "@/components/GeneralComponents/InputFormField";
import SelectFormField from "@/components/GeneralComponents/SelectFormField";
import SuccessButton from "@/components/GeneralComponents/SuccessButton";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useBranch } from "@/hooks/useBranch";
import { useUser } from "@/hooks/useUser";
import { errorToastStyle, successToastStyle } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().min(1, { message: "Email is required." }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required." }),
  password: z.string().min(1, { message: "Password is required." }),
  branchName:z.string().min(1, { message: "Branch Name is required." }),
  address: z.string().min(1, { message: "Address is required." }),
});

const CreateUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const {queryBranch} = useBranch()

  const {data:branch} = queryBranch;


  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      branchName:"",
      address: "",
    },
  });

  const { control, handleSubmit,reset } = form;

  const {createUser} = useUser()

  const submit = async(values: z.infer<typeof createUserSchema>) => {

    const data = {...values,role:"Agent",profile:image}

    try {
      const res = await createUser.mutateAsync(data)
      if(res.message === 'Create User Successfully.'){
        reset({
           name: "",
          email: "",
          phoneNumber: "",
          password: "",
          branchName:"",
          address: "",
        })
        setImage("")
        toast(`${res.message}`,successToastStyle)
        navigate('/user')
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      toast(`${error.response.data.message}`,errorToastStyle)
    }
  };

  const cancelBtn = () => {
    navigate("/user");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageUpload = async (event: any) => {
    const files = event.target.files[0];
    if (files) {
      setLoading(true);
      const data = new FormData();
      data.append("file", files);
      data.append("upload_preset", "hotel-image");
      data.append("cloud_name", "dwcdqx2tm");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dwcdqx2tm/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      const uploadImageUrl = await res.json();
      setLoading(false);
      setImage(uploadImageUrl.url);
    }
  };


  return (
    <>
      <div className="p-3 shadow-lg rounded-md">
        <h3 className="font-semibold text-2xl text-center">Create User</h3>
      </div>
      <div className="shadow-lg h-[calc(100vh-180px)] p-4 relative mt-4">
        <Form {...form}>
          <form
            className="grid grid-cols-3 gap-4"
            onSubmit={handleSubmit(submit)}
          >
            <div>
              <InputFormField
                placeholder={"Enter Name"}
                control={control}
                type={"text"}
                name={"name"}
                label={"Name"}
              />
            </div>
            <div>
              <InputFormField
                placeholder={"Enter Email"}
                control={control}
                type={"text"}
                name={"email"}
                label={"Email"}
              />
            </div>
            <div>
              <InputFormField
                placeholder={"09*********"}
                control={control}
                type={"text"}
                name={"phoneNumber"}
                label={"Phone Number"}
                maxLength={11}
              />
            </div>
            <div>
              <InputFormField
                placeholder={"Enter Password"}
                control={control}
                type={"text"}
                name={"password"}
                label={"Password"}
              />
            </div>
            {/* <div>
              <SelectFormField
                placeholder={"Role"}
                control={control}
                name={"role"}
                label={"Role"}
                options={dummyOptions}
              />
            </div> */}
            <div>
              <SelectFormField
                placeholder={"Branch Name"}
                control={control}
                name={"branchName"}
                label={"Branch Name"}
                options={branch}
              />
            </div>
            <div>
              <InputFormField
                placeholder={"Enter Address"}
                control={control}
                type={"text"}
                name={"address"}
                label={"Address"}
                autoCapitalize={"true"}
              />
            </div>
            <div>
              <label htmlFor="Upload Profile" className="text-sm font-[500]">
                Upload Profile
              </label>
              {loading ? (
                <div className="h-[35px] border-1 rounded-md px-2 py-1 text-center cursor-pointer">
                  <label htmlFor="upload" className="cursor-pointer">
                    Uploading
                  </label>
                </div>
              ) : (
                <div className="h-[38px] border-1 rounded-md px-2 py-1 mt-1.5 text-center cursor-pointer">
                  <label htmlFor="upload" className="cursor-pointer">
                    Profile Upload
                  </label>
                  <Input
                    type="file"
                    id="upload"
                    className="mt-3 cursor-pointer"
                    hidden
                    placeholder="upload Profile"
                    accept="image/*"
                    onChange={imageUpload}
                  />
                </div>
              )}
            </div>
            <div className="w-[180px] h-[180px] shadow-sm rounded-sm mx-auto mt-4">
              {loading ? (
                <div className="aspect-video w-full animate-pulse bg-muted flex items-center justify-center col-span-1 h-[100%]">
                  <span className="text-sm text-muted-foreground">
                    Uploading image...
                  </span>
                </div>
              ) : (
                <div className="w-full h-full rounded-md">
                  <img src={image} className="w-full h-full rounded-md object-cover" />
                </div>
              )}
            </div>
            <div className="absolute bottom-[5%] left-[37%] flex gap-10">
              <CancelButton cancel={cancelBtn} text="Cancel"/>
              <SuccessButton text="Create"/>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default CreateUser;
