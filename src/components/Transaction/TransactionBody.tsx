import type { TransactionTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import {Eye } from "lucide-react"
import moment from "moment"

interface TransactionProps {
    transaction:TransactionTable,
    viewTransaction:(id:string) => void
}

const TransactionBody = ({transaction,viewTransaction}:TransactionProps) => {
  return (
    <TableRow key={transaction._id}>
        <TableCell>{transaction.transactionNo}</TableCell>
        <TableCell>{transaction.fromCustomerName}</TableCell>
        <TableCell>{transaction.toCustomerName || '-'}</TableCell>
        <TableCell className={transaction.transactionType === 'Withdraw' ? 'text-red-600':transaction.transactionType === 'Deposit'? 'text-green-600':'text-blue-600'}>{transaction.transactionType}</TableCell>
        <TableCell>{moment(transaction.transactionTime).format('LLL')}</TableCell>
        <TableCell className="text-right">{transaction.amount} Ks</TableCell>
        <TableCell className={transaction.status === 'Completed' ? "text-green-600":"text-blue-600"}>{transaction.status}</TableCell>
        <TableCell>{moment(transaction.createdAt).format('LLL')}</TableCell>
        <TableCell className="flex gap-3">
            <Button className="bg-blue-600 h-8 w-8 cursor-pointer hover:bg-blue-500" onClick={()=>viewTransaction(transaction._id)}>
                <Eye />
            </Button>
        </TableCell>
    </TableRow>
  )
}

export default TransactionBody
