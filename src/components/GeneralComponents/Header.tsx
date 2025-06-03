import type { ChangeEvent } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input"


interface HeaderProps{
    placeholder:string,
    btnText:string,
    headerText:string,
    onchange:(event:ChangeEvent<HTMLInputElement>) => void;
    create?:() => void;
}

const Header = ({placeholder,btnText,headerText,onchange,create}:HeaderProps) => {
  return (
    <div className="shadow-lg p-3 flex justify-between items-center rounded-md">
        <h3 className="text-nowrap font-semibold text-2xl">{headerText}</h3>
        <div className="w-[50%]">
            <Input placeholder={placeholder} onChange={onchange}/>
        </div>
        <div>
            <Button className="cursor-pointer" onClick={create}>
                <span>
                    {btnText}
                </span>
            </Button>
        </div>
    </div>
  )
}

export default Header
