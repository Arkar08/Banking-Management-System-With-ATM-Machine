import Header from "@/components/GeneralComponents/Header"
import Pagination from "@/components/GeneralComponents/Pagination"
import TableHeaders from "@/components/GeneralComponents/TableHeader"
import { Table } from "@/components/ui/table"
import type { ChangeEvent } from "react"


const Transaction = () => {

    const transactionData = ["TransactionNo","From Customer Name","To Customer Name","ATM","Transaction Type","Transaction Time","Status","Created At"]

    const transactionChange = (event:ChangeEvent<HTMLInputElement>) => {
      console.log(event?.target.value,'transaction change')
    }

    const filterTransaction = () => {
        console.log('filterTransaction')
    }


  return (
    <div className="h-[calc(100vh-80px)]">
      <Header placeholder="Search Transactions" btnText="Filter" headerText="Transactions" onchange={transactionChange} create={filterTransaction}/>
      <div className="mt-3 rounded-md shadow-lg h-[calc(100vh-220px)]">
        <Table>
          <TableHeaders dummyData={transactionData}/>
        </Table>
      </div>
      <div className="w-[100%] shadow-lg p-4 rouned-md">
        <Pagination />
      </div>
    </div>
  )
}

export default Transaction
