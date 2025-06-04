import type { AtmTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"


interface AtmProps{
  atm:AtmTable
}

const ATMTableBody = ({atm}:AtmProps) => {
  return (
    <TableRow>
        <TableCell className="text-center">{atm.atmName}</TableCell>
        <TableCell className="text-center">{atm.branchName}</TableCell>
        <TableCell className="text-right">{atm.amount} Ks</TableCell>
        <TableCell className="text-right">{atm.limit} Ks</TableCell>
        <TableCell className="text-center">{atm.atmLocation}</TableCell>
        <TableCell className="text-center">{atm.createdAt}</TableCell>
        <TableCell className="text-center">Edit</TableCell>
    </TableRow>
  )
}

export default ATMTableBody
