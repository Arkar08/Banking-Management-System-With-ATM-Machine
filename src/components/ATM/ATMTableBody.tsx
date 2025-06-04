import type { AtmTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"
import {Edit, Trash } from "lucide-react"
import { Button } from "../ui/button"
import moment from "moment";

interface AtmProps{
  atm:AtmTable,
  updateAtm:() => void;
}

const ATMTableBody = ({atm,updateAtm}:AtmProps) => {
  return (
    <TableRow>
        <TableCell className="text-center">{atm.atmName}</TableCell>
        <TableCell className="text-center">{atm.branchName}</TableCell>
        <TableCell className="text-right">{atm.amount} Ks</TableCell>
        <TableCell className="text-right">{atm.limit} Ks</TableCell>
        <TableCell className="text-center">{atm.atmLocation}</TableCell>
        <TableCell className="text-center">{moment(atm.createdAt).format('LLL')}</TableCell>
        <TableCell className="flex gap-3 items-center justify-center">
            <Button className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500" onClick={updateAtm}>
                <Edit />
            </Button>
            <Button className="bg-red-600 h-8 w-8 cursor-pointer hover:bg-red-500">
                <Trash />
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default ATMTableBody
