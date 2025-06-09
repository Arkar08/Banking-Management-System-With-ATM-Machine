import { Button } from "../ui/button"


interface successBtnProps {
    success?:() => void;
    text:string
}

const SuccessButton = ({success,text}:successBtnProps) => {
   return (
    <Button className="w-[120px] cursor-pointer bg-green-600 hover:bg-green-500 text-white hover:text-white" variant='outline' onClick={success}>
        <span>{text}</span>
    </Button>
  )
}

export default SuccessButton
