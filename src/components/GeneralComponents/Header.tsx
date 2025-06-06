import type { ChangeEvent } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Filter, Plus } from "lucide-react";


interface HeaderProps{
    placeholder:string,
    btnText:string,
    headerText:string,
    onchange:(event:ChangeEvent<HTMLInputElement>) => void;
    create?:() => void;
    filter?:() => void;
    search?:string;
}

const Header = ({placeholder,btnText,headerText,onchange,create,filter,search}:HeaderProps) => {
  return (
    <div className="shadow-lg p-3 flex justify-between items-center rounded-md">
        <h3 className="text-nowrap font-semibold text-2xl">{headerText}</h3>
        <div className="w-[50%]">
            <Input placeholder={placeholder} onChange={onchange} value={search}/>
        </div>
        <div>
            {
                btnText === 'Create' ? (
                     <div className="flex gap-3">
                        <Button className="cursor-pointer" onClick={create}>
                            <Plus />
                            <span>
                                {btnText}
                            </span>
                        </Button>
                        <Button className="cursor-pointer" onClick={filter}>
                            <Filter />
                            <span>
                                Filter
                            </span>
                        </Button>
                     </div>
                ):(
                    <Button className="cursor-pointer" onClick={filter}>
                        <Filter />
                        <span>
                            {btnText}
                        </span>
                    </Button>
                )
            }
           
        </div>
    </div>
  )
}

export default Header
