import type { AccountTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"

interface AccountProps {
  account:AccountTable
}

const AccounTableBody = ({account}:AccountProps) => {
  return (
    <TableRow>
        <TableCell className="text-center">{account.accountNo}</TableCell>
        <TableCell className="text-center">{account.customerName}</TableCell>
        <TableCell className="text-center">{account.accountType}</TableCell>
        <TableCell className="text-right">{account.balance} Ks</TableCell>
        <TableCell className={account.status === 'Active' ? "text-center text-green-600" :"text-center text-red-600"}>{account.status}</TableCell>
        <TableCell className="text-center">{account.createdAt}</TableCell>
        <TableCell className="text-center">Edit</TableCell>
    </TableRow>
  )
}

export default AccounTableBody
