import { Button } from "../ui/button"


interface cancelBtnProps {
    cancel?:() => void;
    text:string
}

const CancelButton = ({cancel,text}:cancelBtnProps) => {
  return (
    <Button className="w-[120px] cursor-pointer text-red-600 hover:text-red-400" variant='outline' onClick={cancel}>
        <span>{text}</span>
    </Button>
  )
}

export default CancelButton
