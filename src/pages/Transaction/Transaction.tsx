import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import TransactionBody from "@/components/Transaction/TransactionBody"
import { Table, TableBody } from "@/components/ui/table"
import { transactionDummy } from "@/utils/dummy"
import type { TransactionTable } from "@/utils/type"
import type { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"


const Transaction = () => {

    const transactionData = ["TransactionNo","From Customer Name","To Customer Name","ATM","Transaction Type","Transaction Time","Amount","Status","Created At","Action"]
    const navigate = useNavigate();

    const transactionChange = (event:ChangeEvent<HTMLInputElement>) => {
      console.log(event?.target.value,'transaction change')
    }

    const filterTransaction = () => {
        console.log('filterTransaction')
    }

    const viewTransaction = (id:string) => {
      navigate(`/transaction/${id}`)
    }


  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Transactions" btnText="Filter" headerText="Transactions" onchange={transactionChange} filter={filterTransaction}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)] overflow-auto">
        <Table>
          <TableHeaders dummyData={transactionData}/>
          <TableBody>
            {
              transactionDummy.map((transaction:TransactionTable) => {
                return (
                  <TransactionBody transaction={transaction} viewTransaction={viewTransaction}/>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
      <div className="w-[100%] shadow-lg p-4 mt-2 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default Transaction
