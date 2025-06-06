import { Button } from "../ui/button"


interface cancelBtnProps {
    cancel?:() => void;
}

const CancelButton = ({cancel}:cancelBtnProps) => {
  return (
    <Button className="w-[150px] cursor-pointer text-red-600 hover:text-red-400" variant='outline' onClick={cancel}>
        <span>Cancel</span>
    </Button>
  )
}

export default CancelButton
