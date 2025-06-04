import type { AccountTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import {Eye } from "lucide-react"
import moment from 'moment'
interface AccountProps {
  account:AccountTable,
  viewAccount:(id:string) => void
}

const AccounTableBody = ({account,viewAccount}:AccountProps) => {
  return (
    <TableRow key={account.id}>
        <TableCell className="text-center">{account.accountNo}</TableCell>
        <TableCell className="text-center">{account.customerName}</TableCell>
        <TableCell className="text-center">{account.accountType}</TableCell>
        <TableCell className="text-right">{account.balance} Ks</TableCell>
        <TableCell className={account.status === 'Active' ? "text-center text-green-600" :"text-center text-red-600"}>{account.status}</TableCell>
        <TableCell className="text-center">{moment(account.createdAt).format('LLL')}</TableCell>
        <TableCell className="flex gap-3 items-center justify-center">
            <Button className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500" onClick={()=>viewAccount(account.id)}>
                <Eye />
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default AccounTableBody
