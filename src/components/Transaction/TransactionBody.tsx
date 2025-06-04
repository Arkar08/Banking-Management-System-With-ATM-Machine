import type { TransactionTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import {Eye } from "lucide-react"
import moment from "moment"

interface TransactionProps {
    transaction:TransactionTable,
    viewTransaction:() => void
}

const TransactionBody = ({transaction,viewTransaction}:TransactionProps) => {
  return (
    <TableRow>
        <TableCell className="text-center">{transaction.transactionNo}</TableCell>
        <TableCell className="text-center">{transaction.fromCustomerName}</TableCell>
        <TableCell className="text-center">{transaction.toCustomerName || '-'}</TableCell>
        <TableCell className="text-center">{transaction.atm || '-'}</TableCell>
        <TableCell className="text-center">{transaction.transactionType}</TableCell>
        <TableCell className="text-center">{moment(transaction.transactionTime).format('LLL')}</TableCell>
        <TableCell className="text-right">{transaction.amount} Ks</TableCell>
        <TableCell className={transaction.status === 'Completed' ? "text-center text-green-600":"text-center text-blue-600"}>{transaction.status}</TableCell>
        <TableCell className="text-center">{moment(transaction.createdAt).format('LLL')}</TableCell>
        <TableCell className="flex gap-3 items-center justify-center">
            <Button className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500" onClick={viewTransaction}>
                <Eye />
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default TransactionBody
