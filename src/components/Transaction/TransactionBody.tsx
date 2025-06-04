import type { TransactionTable } from "@/utils/type"
import { TableCell, TableRow } from "../ui/table"


interface TransactionProps {
    transaction:TransactionTable
}

const TransactionBody = ({transaction}:TransactionProps) => {
  return (
    <TableRow>
        <TableCell className="text-center">{transaction.transactionNo}</TableCell>
        <TableCell className="text-center">{transaction.fromCustomerName}</TableCell>
        <TableCell className="text-center">{transaction.toCustomerName || '-'}</TableCell>
        <TableCell className="text-center">{transaction.atm || '-'}</TableCell>
        <TableCell className="text-center">{transaction.transactionType}</TableCell>
        <TableCell className="text-center">{transaction.transactionTime}</TableCell>
        <TableCell className="text-right">{transaction.amount} Ks</TableCell>
        <TableCell className={transaction.status === 'Completed' ? "text-center text-green-600":"text-center text-blue-600"}>{transaction.status}</TableCell>
        <TableCell className="text-center">{transaction.createdAt}</TableCell>
        <TableCell className="text-center">Edit</TableCell>
    </TableRow>
  )
}

export default TransactionBody
